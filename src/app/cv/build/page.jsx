'use client'

// src/app/cv/build/page.jsx
//
// The CV builder. One step at a time on the left, the real CV on the right,
// updating as you type. Everything is kept in this browser (localStorage); no CV
// is sent to our server. Paying R149 through Paystack unlocks the PDF download
// for 30 days on this device. The PDF comes from the browser's own Save as PDF,
// so the text stays real text that screening software can read.

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import CvDocument, { TEMPLATES, ACCENTS, EMPTY_CV, SAMPLE_CV } from '../../../components/cv/CvDocument'
import { CV_PRICE_LABEL, CV_UNLOCK_DAYS } from '../../../lib/cv/pricing'

const STORE = 'dc_cv_v1'
const UNLOCK = 'dc_cv_unlock_v1'
const PENDING = 'dc_cv_pending_ref'

const STEPS = [
  { key: 'look', title: 'Pick a look' },
  { key: 'you', title: 'About you' },
  { key: 'profile', title: 'Your profile' },
  { key: 'work', title: 'Work experience' },
  { key: 'edu', title: 'Education' },
  { key: 'skills', title: 'Skills and languages' },
  { key: 'extras', title: 'The last few details' },
  { key: 'done', title: 'Check it and download' },
]

const LICENCES = ['', 'Code A', 'Code A1', 'Code B', 'Code B (EB)', 'Code C1', 'Code C1 (EC1)', 'Code C', 'Code EC']
const LEVELS = ['Fluent', 'Good', 'Basic', 'Home language']

const input = 'w-full rounded-lg border border-[#D9D2C3] bg-white px-3.5 py-2.5 text-[15px] text-navy-900 outline-none transition focus:border-navy-700 focus:ring-2 focus:ring-navy-700/10'
const label = 'mb-1.5 block text-[13px] font-semibold text-navy-800'
const hintCls = 'mt-1.5 text-[12.5px] leading-snug text-slate-500'

function Field({ name, hint, children, className = '' }) {
  return (
    <div className={'mb-4 ' + className}>
      {name && <label className={label}>{name}</label>}
      {children}
      {hint && <p className={hintCls}>{hint}</p>}
    </div>
  )
}

function loadJSON(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key) || 'null'); return v || fallback } catch { return fallback }
}
function saveJSON(key, v) { try { localStorage.setItem(key, JSON.stringify(v)) } catch {} }

function Builder() {
  const sp = useSearchParams()
  const [cv, setCv] = useState(EMPTY_CV)
  const [ready, setReady] = useState(false)
  const [step, setStep] = useState(0)
  const [unlock, setUnlock] = useState(null)
  const [payEmail, setPayEmail] = useState('')
  const [payState, setPayState] = useState('')
  const [payError, setPayError] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [pages, setPages] = useState(1)
  const measure = useRef(null)

  // Load the saved CV and any unlock from this browser.
  useEffect(() => {
    const saved = loadJSON(STORE, null)
    if (saved && typeof saved === 'object') setCv({ ...EMPTY_CV, ...saved })
    const u = loadJSON(UNLOCK, null)
    if (u && u.until > Date.now()) setUnlock(u)
    setReady(true)
  }, [])

  useEffect(() => { if (ready) saveJSON(STORE, cv) }, [cv, ready])

  // Back from Paystack: confirm the payment with the server, then unlock.
  const ref = sp.get('reference') || sp.get('trxref') || ''
  useEffect(() => {
    if (!ready || !ref) return
    let tries = 0, stop = false
    setStep(STEPS.length - 1)
    setPayState('checking')
    async function check() {
      tries++
      try {
        const r = await fetch('/api/cv/pay/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reference: ref }) })
        const d = await r.json()
        if (stop) return
        if (d.paid) {
          const u = { reference: ref, until: d.until }
          saveJSON(UNLOCK, u); setUnlock(u); setPayState('paid')
          try { localStorage.removeItem(PENDING); window.history.replaceState(null, '', '/cv/build') } catch {}
          return
        }
      } catch {}
      if (tries < 5) setTimeout(check, 2500)
      else if (!stop) setPayState('unconfirmed')
    }
    check()
    return () => { stop = true }
  }, [ready, ref])

  // Roughly how many A4 pages the CV fills (A4 text area at our margins is about 265mm tall).
  useEffect(() => {
    if (!measure.current) return
    const mm = measure.current.getBoundingClientRect().height / (96 / 25.4)
    setPages(Math.max(1, Math.ceil(mm / 265)))
  }, [cv])

  const set = (k, v) => setCv((c) => ({ ...c, [k]: v }))
  const setRow = (list, i, k, v) => setCv((c) => ({ ...c, [list]: c[list].map((r, idx) => (idx === i ? { ...r, [k]: v } : r)) }))
  const addRow = (list, row) => setCv((c) => ({ ...c, [list]: [...(c[list] || []), row] }))
  const removeRow = (list, i) => setCv((c) => ({ ...c, [list]: c[list].filter((_, idx) => idx !== i) }))
  const moveRow = (list, i, d) => setCv((c) => {
    const a = [...c[list]]; const j = i + d
    if (j < 0 || j >= a.length) return c
    ;[a[i], a[j]] = [a[j], a[i]]
    return { ...c, [list]: a }
  })

  const unlocked = !!(unlock && unlock.until > Date.now())
  const daysLeft = unlocked ? Math.max(1, Math.ceil((unlock.until - Date.now()) / 86400000)) : 0

  async function pay() {
    setPayError('')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payEmail.trim())) return setPayError('Add the email address for your receipt.')
    setPayState('starting')
    try {
      const r = await fetch('/api/cv/pay/init', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: payEmail.trim(), name: cv.name }) })
      const d = await r.json()
      if (!r.ok || !d.url) throw new Error(d.error || 'Could not start the payment.')
      try { localStorage.setItem(PENDING, d.reference) } catch {}
      window.location.href = d.url
    } catch (e) {
      setPayState(''); setPayError(e.message || 'Could not start the payment. Please try again.')
    }
  }

  function download() {
    const before = document.title
    document.title = (cv.name || 'My').trim().replace(/[^\w\s-]/g, '') + ' CV'
    window.print()
    setTimeout(() => { document.title = before }, 1000)
  }

  function startOver() {
    if (!window.confirm('Clear everything and start a new CV? This cannot be undone.')) return
    setCv(EMPTY_CV); setStep(0)
  }

  const missing = useMemo(() => {
    const m = []
    if (!cv.name.trim()) m.push('your name')
    if (!cv.phone.trim() && !cv.email.trim()) m.push('a phone number or email')
    if (!(cv.jobs || []).some((j) => j.title.trim()) && !(cv.education || []).some((e) => e.qualification.trim())) m.push('at least one job or qualification')
    return m
  }, [cv])

  const s = STEPS[step]

  return (
    <div className="min-h-screen bg-[#F4F1EA]">
      <style>{`
        .cv-sheet { width: 210mm; min-height: 297mm; padding: 16mm 17mm; background: #fff; box-sizing: border-box; }
        @media print {
          @page { size: A4; margin: 14mm 15mm; }
          html, body { background: #fff !important; }
          body * { visibility: hidden !important; }
          #cv-print, #cv-print * { visibility: visible !important; }
          #cv-print { position: absolute; left: 0; top: 0; width: 100%; display: block !important; }
          #cv-print .cv-sheet { width: auto; min-height: 0; padding: 0; }
          ${unlocked ? '' : '#cv-print { display: none !important; } #cv-locked, #cv-locked * { visibility: visible !important; } #cv-locked { display: block !important; position: absolute; top: 40mm; left: 0; right: 0; text-align: center; font: 16px Georgia, serif; }'}
        }
      `}</style>
      <div className="print:hidden"><Navbar /></div>

      <main className="mx-auto max-w-[1320px] px-4 pb-24 pt-28 md:px-6 print:hidden">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <Link href="/cv" className="text-[13px] font-medium text-slate-500 hover:text-navy-900">CV Builder</Link>
            <h1 className="mt-1 font-display text-[28px] font-semibold tracking-tight text-navy-900">{s.title}</h1>
          </div>
          <div className="flex items-center gap-4 text-[13px] text-slate-500">
            <span>Saved on this device</span>
            <button onClick={startOver} className="underline decoration-slate-300 underline-offset-2 hover:text-navy-900">Start over</button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)]">
          {/* left: the questions */}
          <section>
            <ol className="mb-5 flex flex-wrap gap-1.5" aria-label="Steps">
              {STEPS.map((x, i) => (
                <li key={x.key}>
                  <button onClick={() => setStep(i)} aria-current={i === step ? 'step' : undefined} title={x.title}
                    className={'h-8 min-w-8 rounded-full px-2.5 text-[13px] font-semibold transition ' + (i === step ? 'bg-navy-900 text-white' : i < step ? 'bg-[#E4DCC8] text-navy-900' : 'bg-white text-slate-500 ring-1 ring-[#E2DBCB]')}>
                    {i + 1}
                  </button>
                </li>
              ))}
            </ol>

            <div className="rounded-2xl border border-[#E4DCCB] bg-white p-5 md:p-6">
              {s.key === 'look' && (
                <div>
                  <p className="mb-4 text-[14.5px] text-slate-600">All three are one column, which is what the screening software at big employers reads best. You can switch any time.</p>
                  <div className="grid gap-2.5">
                    {TEMPLATES.map((t) => (
                      <button key={t.key} onClick={() => set('template', t.key)}
                        className={'rounded-xl border px-4 py-3 text-left transition ' + (cv.template === t.key ? 'border-navy-900 bg-[#F7F4EC] ring-1 ring-navy-900' : 'border-[#E2DBCB] hover:border-slate-400')}>
                        <span className="block font-semibold text-navy-900">{t.label}</span>
                        <span className="block text-[13.5px] text-slate-500">{t.desc}</span>
                      </button>
                    ))}
                  </div>
                  <Field name="Colour for headings" className="mt-5">
                    <div className="flex flex-wrap gap-2">
                      {ACCENTS.map((a) => (
                        <button key={a.key} onClick={() => set('accent', a.key)} aria-pressed={cv.accent === a.key}
                          className={'flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13.5px] ' + (cv.accent === a.key ? 'border-navy-900 bg-[#F7F4EC]' : 'border-[#E2DBCB]')}>
                          <i className="block h-3.5 w-3.5 rounded-full" style={{ background: a.key }} />{a.label}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <p className={hintCls}>Want to see a finished one first? <button className="underline" onClick={() => { if (!cv.name.trim() || window.confirm('Replace what you have with the example CV?')) setCv({ ...SAMPLE_CV, template: cv.template, accent: cv.accent }) }}>Load an example</button> and change it to yours.</p>
                </div>
              )}

              {s.key === 'you' && (
                <div>
                  <Field name="Full name"><input className={input} value={cv.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" /></Field>
                  <Field name="The job you're going for" hint="A short title, like Office Administrator or Qualified Electrician. Match it to the job ad if you can.">
                    <input className={input} value={cv.headline} onChange={(e) => set('headline', e.target.value)} />
                  </Field>
                  <div className="grid gap-x-3 sm:grid-cols-2">
                    <Field name="Phone"><input className={input} value={cv.phone} onChange={(e) => set('phone', e.target.value)} inputMode="tel" autoComplete="tel" /></Field>
                    <Field name="Email"><input className={input} value={cv.email} onChange={(e) => set('email', e.target.value)} type="email" autoComplete="email" /></Field>
                  </div>
                  <Field name="Where you live" hint="Suburb and city is enough. Leave out your street address."><input className={input} value={cv.location} onChange={(e) => set('location', e.target.value)} /></Field>
                  <Field name="LinkedIn (optional)"><input className={input} value={cv.linkedin} onChange={(e) => set('linkedin', e.target.value)} placeholder="linkedin.com/in/yourname" /></Field>
                  <div className="grid gap-x-3 sm:grid-cols-2">
                    <Field name="Driver's licence">
                      <select className={input} value={cv.licence} onChange={(e) => set('licence', e.target.value)}>
                        {LICENCES.map((l) => <option key={l} value={l}>{l || 'None'}</option>)}
                      </select>
                    </Field>
                    <Field name="Transport">
                      <label className="flex h-[46px] items-center gap-2.5 text-[14.5px] text-navy-900">
                        <input type="checkbox" className="h-4 w-4 accent-[#0a1628]" checked={!!cv.ownTransport} onChange={(e) => set('ownTransport', e.target.checked)} /> I have my own transport
                      </label>
                    </Field>
                  </div>
                  <Field name="ID number (optional)" hint="Only add this if the job ad asks for it. Your CV gets passed around, so the less personal detail on it, the better.">
                    <input className={input} value={cv.idNumber} onChange={(e) => set('idNumber', e.target.value)} inputMode="numeric" />
                  </Field>
                </div>
              )}

              {s.key === 'profile' && (
                <div>
                  <Field name="A few lines about you" hint="Three or four sentences: what you do, how long you've done it, and what you're good at. Write it the way you'd say it to the person hiring you.">
                    <textarea className={input + ' min-h-[170px]'} value={cv.summary} onChange={(e) => set('summary', e.target.value)} maxLength={900} />
                  </Field>
                  <div className="rounded-xl bg-[#F7F4EC] p-4 text-[13.5px] leading-relaxed text-slate-600">
                    <b className="text-navy-900">Tip.</b> Skip words like hard-working, passionate and team player. Everyone uses them. Say what you actually did instead: "I run the diaries for four attorneys" tells them more.
                  </div>
                </div>
              )}

              {s.key === 'work' && (
                <div>
                  <p className="mb-4 text-[14.5px] text-slate-600">Start with your current or latest job. For each one, a few lines on what you did, one per line.</p>
                  {(cv.jobs || []).map((j, i) => (
                    <div key={i} className="mb-4 rounded-xl border border-[#E8E1D2] p-4">
                      <div className="mb-2 flex items-center justify-between text-[12.5px] text-slate-500">
                        <span className="font-semibold uppercase tracking-wider">Job {i + 1}</span>
                        <span className="flex gap-3">
                          {i > 0 && <button onClick={() => moveRow('jobs', i, -1)} className="hover:text-navy-900">Move up</button>}
                          <button onClick={() => removeRow('jobs', i)} className="hover:text-red-700">Remove</button>
                        </span>
                      </div>
                      <Field name="Job title"><input className={input} value={j.title} onChange={(e) => setRow('jobs', i, 'title', e.target.value)} /></Field>
                      <div className="grid gap-x-3 sm:grid-cols-2">
                        <Field name="Company"><input className={input} value={j.employer} onChange={(e) => setRow('jobs', i, 'employer', e.target.value)} /></Field>
                        <Field name="Town"><input className={input} value={j.place} onChange={(e) => setRow('jobs', i, 'place', e.target.value)} /></Field>
                        <Field name="Started"><input className={input} type="month" value={j.start} onChange={(e) => setRow('jobs', i, 'start', e.target.value)} /></Field>
                        <Field name="Ended">
                          {j.current ? <div className={input + ' bg-[#F7F4EC] text-slate-500'}>Still there</div> : <input className={input} type="month" value={j.end} onChange={(e) => setRow('jobs', i, 'end', e.target.value)} />}
                        </Field>
                      </div>
                      <label className="-mt-2 mb-3 flex items-center gap-2 text-[13.5px] text-navy-900">
                        <input type="checkbox" className="h-4 w-4 accent-[#0a1628]" checked={!!j.current} onChange={(e) => setRow('jobs', i, 'current', e.target.checked)} /> I still work here
                      </label>
                      <Field name="What you did" hint="One per line. Start with a doing word, and add a number where you can: how many, how often, how much.">
                        <textarea className={input + ' min-h-[120px]'} value={j.points} onChange={(e) => setRow('jobs', i, 'points', e.target.value)} />
                      </Field>
                    </div>
                  ))}
                  <button onClick={() => addRow('jobs', { title: '', employer: '', place: '', start: '', end: '', current: false, points: '' })} className="rounded-lg border border-dashed border-slate-400 px-4 py-2.5 text-[14px] font-semibold text-navy-900 hover:bg-[#F7F4EC]">Add a job</button>
                  <p className={hintCls}>No work experience yet? That's fine. Leave this empty and put more into your education and skills.</p>
                </div>
              )}

              {s.key === 'edu' && (
                <div>
                  <p className="mb-4 text-[14.5px] text-slate-600">Highest qualification first. Matric counts.</p>
                  {(cv.education || []).map((e, i) => (
                    <div key={i} className="mb-4 rounded-xl border border-[#E8E1D2] p-4">
                      <div className="mb-2 flex items-center justify-between text-[12.5px] text-slate-500">
                        <span className="font-semibold uppercase tracking-wider">Qualification {i + 1}</span>
                        <span className="flex gap-3">
                          {i > 0 && <button onClick={() => moveRow('education', i, -1)} className="hover:text-navy-900">Move up</button>}
                          <button onClick={() => removeRow('education', i)} className="hover:text-red-700">Remove</button>
                        </span>
                      </div>
                      <Field name="Qualification" hint="Like National Senior Certificate, or BCom Accounting."><input className={input} value={e.qualification} onChange={(ev) => setRow('education', i, 'qualification', ev.target.value)} /></Field>
                      <div className="grid gap-x-3 sm:grid-cols-[1fr_110px]">
                        <Field name="School, college or university"><input className={input} value={e.school} onChange={(ev) => setRow('education', i, 'school', ev.target.value)} /></Field>
                        <Field name="Year"><input className={input} value={e.year} onChange={(ev) => setRow('education', i, 'year', ev.target.value)} inputMode="numeric" maxLength={14} /></Field>
                      </div>
                      <Field name="Anything to add (optional)" hint="NQF level, a distinction, or 'Busy with my final year'."><input className={input} value={e.note} onChange={(ev) => setRow('education', i, 'note', ev.target.value)} /></Field>
                    </div>
                  ))}
                  <button onClick={() => addRow('education', { qualification: '', school: '', year: '', note: '' })} className="rounded-lg border border-dashed border-slate-400 px-4 py-2.5 text-[14px] font-semibold text-navy-900 hover:bg-[#F7F4EC]">Add a qualification</button>
                </div>
              )}

              {s.key === 'skills' && (
                <div>
                  <Field name="Skills" hint="Separate them with commas. Use the same words the job ad uses: screening software looks for them.">
                    <textarea className={input + ' min-h-[110px]'} value={cv.skills} onChange={(e) => set('skills', e.target.value)} />
                  </Field>
                  <label className={label}>Languages</label>
                  {(cv.languages || []).map((l, i) => (
                    <div key={i} className="mb-2.5 grid grid-cols-[1fr_140px_auto] items-center gap-2">
                      <input className={input} value={l.lang} onChange={(e) => setRow('languages', i, 'lang', e.target.value)} placeholder="Language" aria-label="Language" />
                      <select className={input} value={l.level} onChange={(e) => setRow('languages', i, 'level', e.target.value)} aria-label="How well">
                        {LEVELS.map((x) => <option key={x}>{x}</option>)}
                      </select>
                      <button onClick={() => removeRow('languages', i)} className="px-1 text-[13px] text-slate-500 hover:text-red-700" aria-label="Remove language">Remove</button>
                    </div>
                  ))}
                  <button onClick={() => addRow('languages', { lang: '', level: 'Fluent' })} className="mt-1 rounded-lg border border-dashed border-slate-400 px-4 py-2 text-[14px] font-semibold text-navy-900 hover:bg-[#F7F4EC]">Add a language</button>
                </div>
              )}

              {s.key === 'extras' && (
                <div>
                  <div className="grid gap-x-3 sm:grid-cols-2">
                    <Field name="Notice period" hint="Leave it empty if you can start straight away.">
                      <input className={input} value={cv.notice} onChange={(e) => set('notice', e.target.value)} placeholder="1 calendar month" list="notice-list" />
                      <datalist id="notice-list"><option value="Immediately available" /><option value="1 week" /><option value="2 weeks" /><option value="1 calendar month" /><option value="2 calendar months" /></datalist>
                    </Field>
                    <Field name="Available from (optional)"><input className={input} value={cv.availability} onChange={(e) => set('availability', e.target.value)} placeholder="Immediately" /></Field>
                  </div>
                  <label className={label}>References</label>
                  <label className="mb-3 flex items-center gap-2 text-[14.5px] text-navy-900">
                    <input type="checkbox" className="h-4 w-4 accent-[#0a1628]" checked={!!cv.refsOnRequest} onChange={(e) => set('refsOnRequest', e.target.checked)} /> Just say "available on request"
                  </label>
                  {!cv.refsOnRequest && (
                    <div>
                      <p className={hintCls + ' -mt-1 mb-3'}>Ask them first, so they aren't caught off guard when someone calls.</p>
                      {(cv.references || []).map((r, i) => (
                        <div key={i} className="mb-3 rounded-xl border border-[#E8E1D2] p-4">
                          <div className="grid gap-x-3 sm:grid-cols-2">
                            <Field name="Name"><input className={input} value={r.name} onChange={(e) => setRow('references', i, 'name', e.target.value)} /></Field>
                            <Field name="Phone"><input className={input} value={r.phone} onChange={(e) => setRow('references', i, 'phone', e.target.value)} /></Field>
                            <Field name="Their job title"><input className={input} value={r.role} onChange={(e) => setRow('references', i, 'role', e.target.value)} /></Field>
                            <Field name="Company"><input className={input} value={r.company} onChange={(e) => setRow('references', i, 'company', e.target.value)} /></Field>
                          </div>
                          <button onClick={() => removeRow('references', i)} className="text-[13px] text-slate-500 hover:text-red-700">Remove</button>
                        </div>
                      ))}
                      {(cv.references || []).length < 4 && <button onClick={() => addRow('references', { name: '', role: '', company: '', phone: '' })} className="rounded-lg border border-dashed border-slate-400 px-4 py-2 text-[14px] font-semibold text-navy-900 hover:bg-[#F7F4EC]">Add a reference</button>}
                    </div>
                  )}
                </div>
              )}

              {s.key === 'done' && (
                <div>
                  {missing.length > 0 && (
                    <div className="mb-4 rounded-xl bg-amber-50 p-4 text-[14px] text-amber-900">Still missing: {missing.join(', ')}.</div>
                  )}
                  <ul className="mb-5 space-y-2 text-[14.5px] text-slate-600">
                    <li><b className="text-navy-900">Read it out loud once.</b> It's the quickest way to catch a typo.</li>
                    <li><b className="text-navy-900">{pages === 1 ? 'It fits on one page.' : `It runs to about ${pages} pages.`}</b> {pages > 2 ? 'Two pages is plenty for most jobs. Trim the oldest jobs to a line or two.' : 'That length is fine.'}</li>
                    <li><b className="text-navy-900">Save it as a PDF</b> when you apply, so it looks the same on every computer.</li>
                  </ul>

                  {unlocked ? (
                    <div className="rounded-xl border border-[#D8CFA8] bg-[#FBF7EA] p-4">
                      <p className="mb-3 text-[14.5px] text-navy-900"><b>Paid, thank you.</b> You can download and edit this CV on this device for the next {daysLeft} {daysLeft === 1 ? 'day' : 'days'}.</p>
                      <button onClick={download} className="w-full rounded-lg bg-navy-900 px-5 py-3 font-semibold text-white hover:bg-navy-800">Download PDF</button>
                      <p className={hintCls}>In the box that opens, choose <b>Save as PDF</b> as the printer. On a phone, use Share, then Print, then save.</p>
                    </div>
                  ) : payState === 'checking' ? (
                    <div className="rounded-xl bg-[#F7F4EC] p-4 text-[14.5px] text-navy-900">Confirming your payment with Paystack...</div>
                  ) : (
                    <div className="rounded-xl border border-[#E4DCCB] p-4">
                      {payState === 'unconfirmed' && <p className="mb-3 rounded-lg bg-amber-50 p-3 text-[13.5px] text-amber-900">We couldn't confirm the payment yet. If money left your account, wait a minute and reload this page. Still stuck? WhatsApp us on +27 72 839 3087 with your receipt.</p>}
                      <p className="mb-1 text-[15px] text-navy-900"><b>{CV_PRICE_LABEL} once</b>, to download without the PREVIEW mark.</p>
                      <p className="mb-3 text-[13.5px] text-slate-500">You can keep editing and download again for {CV_UNLOCK_DAYS} days on this device. No subscription.</p>
                      <Field name="Email for your receipt"><input className={input} type="email" value={payEmail} onChange={(e) => setPayEmail(e.target.value)} autoComplete="email" placeholder={cv.email || ''} /></Field>
                      {payError && <p className="mb-3 text-[13.5px] text-red-700">{payError}</p>}
                      <button onClick={pay} disabled={payState === 'starting' || missing.length > 0} className="w-full rounded-lg bg-gold px-5 py-3 font-semibold text-navy-900 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50">
                        {payState === 'starting' ? 'Opening Paystack...' : `Pay ${CV_PRICE_LABEL} and download`}
                      </button>
                      <p className={hintCls}>You pay securely through Paystack. Your CV stays on this device; we only receive your email for the receipt.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="rounded-lg px-4 py-2.5 text-[14.5px] font-semibold text-navy-900 hover:bg-white disabled:opacity-30">Back</button>
              <button onClick={() => setShowPreview(true)} className="rounded-lg border border-[#D9D2C3] bg-white px-4 py-2.5 text-[14px] font-semibold text-navy-900 lg:hidden">See your CV</button>
              {step < STEPS.length - 1 && <button onClick={() => setStep(step + 1)} className="rounded-lg bg-navy-900 px-5 py-2.5 text-[14.5px] font-semibold text-white hover:bg-navy-800">Next</button>}
            </div>
          </section>

          {/* right: the CV as it will print */}
          <section className={(showPreview ? 'fixed inset-0 z-50 overflow-auto bg-[#E9E4D8] p-4 pt-16 ' : 'hidden ') + 'lg:static lg:block lg:bg-transparent lg:p-0'}>
            {showPreview && <button onClick={() => setShowPreview(false)} className="fixed right-4 top-4 z-10 rounded-lg bg-navy-900 px-4 py-2 text-[14px] font-semibold text-white lg:hidden">Back to editing</button>}
            <div className="sticky top-24">
              <div className="mb-2 flex items-center justify-between text-[12.5px] text-slate-500">
                <span>A4 · {pages === 1 ? '1 page' : `about ${pages} pages`}</span>
                {!unlocked && <span>Preview</span>}
              </div>
              <Scaled>
                <div className="relative">
                  <div className="cv-sheet shadow-[0_18px_50px_-20px_rgba(10,22,40,.35)]"><CvDocument cv={cv} /></div>
                  {!unlocked && (
                    <div aria-hidden className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
                      <span className="rotate-[-30deg] font-display text-[110px] font-semibold tracking-[0.2em] text-navy-900/[0.06]">PREVIEW</span>
                    </div>
                  )}
                </div>
              </Scaled>
            </div>
          </section>
        </div>
      </main>

      {/* used for measuring length and for the PDF */}
      <div id="cv-print" className="hidden">
        <div className="cv-sheet"><CvDocument cv={cv} /></div>
      </div>
      <div style={{ position: 'absolute', left: -10000, top: 0, width: '176mm', visibility: 'hidden' }} aria-hidden className="print:hidden">
        <div ref={measure}><CvDocument cv={cv} /></div>
      </div>
      <div id="cv-locked" className="hidden">This CV is a preview. Pay {CV_PRICE_LABEL} on the last step to download it.</div>
    </div>
  )
}

// Shrinks the A4 sheet to fit the column without changing how it prints.
function Scaled({ children }) {
  const box = useRef(null)
  const [k, setK] = useState(0.7)
  const [h, setH] = useState(0)
  useEffect(() => {
    const el = box.current
    if (!el) return
    const fit = () => {
      const w = el.clientWidth
      const scale = Math.min(1, w / 794)
      setK(scale)
      const inner = el.firstElementChild
      if (inner) setH(inner.scrollHeight * scale)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    if (el.firstElementChild) ro.observe(el.firstElementChild)
    return () => ro.disconnect()
  }, [])
  return (
    <div ref={box} style={{ height: h || undefined }} className="w-full overflow-hidden">
      <div style={{ width: 794, transform: `scale(${k})`, transformOrigin: 'top left' }}>{children}</div>
    </div>
  )
}

export default function CvBuildPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F4F1EA]" />}>
      <Builder />
    </Suspense>
  )
}
