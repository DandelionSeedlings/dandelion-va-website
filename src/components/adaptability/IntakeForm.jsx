'use client'

// The Adaptability intake. The client fills this in on the website, so they never
// get a sheet or see any code. Answers go to BookAbility as an enquiry (the same
// route the contact form uses), then the client is sent to the order page.

import { useEffect, useRef, useState } from 'react'
import { bookingCall, newRequestId } from '../../lib/booking'
import { SITE, whatsappLink } from '../../lib/site'

export const APPS = [
  'BookAbility', 'TrackAbility', 'Mini Cash-Up', 'Profitability', 'PayAbility',
  'BudgetAbility', 'Scalability', 'ConnectAbility', 'Availability', 'Visibility', 'ReceiptSnap',
]
const DATA = ['Nothing to bring across', 'A spreadsheet or CSV file', 'Another app or system', 'Paper records']

const field = 'w-full rounded-lg border border-[#DCD3C0] bg-white px-4 py-3 text-[16px] text-navy-900 placeholder-slate-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold'
const label = 'mb-1.5 block text-[14px] font-semibold text-navy-900'

export default function IntakeForm() {
  const [f, setF] = useState({
    name: '', email: '', phone: '', business: '', apps: [], owns: 'yes',
    primary: '#1F4E5A', secondary: '#E8B04A', logo: '', logoByEmail: false,
    data: DATA[0], dataNote: '', notes: '', website: '',
  })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const rid = useRef(newRequestId())
  const openedAt = useRef(Date.now())
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const toggleApp = (a) => setF((s) => ({ ...s, apps: s.apps.includes(a) ? s.apps.filter((x) => x !== a) : [...s.apps, a] }))

  useEffect(() => { if (sent) window.scrollTo({ top: 0, behavior: 'smooth' }) }, [sent])

  async function submit(e) {
    e.preventDefault()
    setError('')
    if (f.name.trim().length < 2) return setError('Please enter your name.')
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) return setError('Please enter a valid email address.')
    if (f.business.trim().length < 2) return setError('Please enter your business name.')
    if (!f.apps.length) return setError('Please tick the app you want set up.')
    if (!f.logo.trim() && !f.logoByEmail) return setError('Add a link to your logo, or tick that you will email it.')

    const lines = [
      'ADAPTABILITY INTAKE (R999, not paid yet)',
      `Business: ${f.business.trim()}`,
      `App: ${f.apps.join(', ')} (${f.owns === 'yes' ? 'already owns it' : 'still needs to buy it'})`,
      `Colours: main ${f.primary}, second ${f.secondary}`,
      `Logo: ${f.logo.trim() || 'will email it'}`,
      `Data: ${f.data}${f.dataNote.trim() ? `. ${f.dataNote.trim()}` : ''}`,
      f.notes.trim() ? `Notes: ${f.notes.trim()}` : '',
    ].filter(Boolean)
    const message = lines.join('\n').slice(0, 1000)

    setBusy(true)
    try {
      await bookingCall('enquiry', {
        name: f.name.trim(), email: f.email.trim(), phone: f.phone.trim(),
        company: f.business.trim(), topic: 'One of the ready-made modules', message,
        website: f.website, elapsed: Date.now() - openedAt.current, requestId: rid.current,
      })
      setSent(true)
    } catch (err) {
      setError(`${err.message} You can also WhatsApp us on ${SITE.whatsappDisplay}.`)
    } finally {
      setBusy(false)
    }
  }

  if (sent) {
    const extra = f.owns === 'no' ? ' Add ' + f.apps.join(' and ') + ' on the same order.' : ''
    return (
      <div className="rounded-2xl border border-[#E4DCCB] bg-white p-8 md:p-10">
        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-gold-dark">Got it</p>
        <h2 className="mt-2 font-display text-[30px] font-semibold tracking-tight text-navy-900">Thanks, {f.name.trim().split(' ')[0]}.</h2>
        <p className="mt-3 max-w-[34em] text-[16px] leading-relaxed text-slate-600">
          Your details are with us. The next step is the order, where you pay the R999.{extra} Once it's paid we'll be in touch to book your video call.
        </p>
        <p className="mt-2 max-w-[34em] text-[15px] leading-relaxed text-slate-500">
          Rather ask something first? That's fine. Reply to our email or WhatsApp us and pay when you're ready.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="/order?product=adaptability" className="rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy-900 transition hover:brightness-105">Go to the order</a>
          <a href={whatsappLink(`Hi, I just filled in the Adaptability form for ${f.business.trim()}.`)} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-navy-900/20 px-6 py-3.5 font-semibold text-navy-900 hover:bg-navy-900/5">WhatsApp us</a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-8 rounded-2xl border border-[#E4DCCB] bg-white p-6 md:p-10">
      <fieldset className="space-y-5">
        <legend className="mb-1 font-display text-[20px] font-semibold text-navy-900">You and your business</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <div><label htmlFor="a-name" className={label}>Your name</label><input id="a-name" className={field} value={f.name} onChange={set('name')} autoComplete="name" maxLength={80} /></div>
          <div><label htmlFor="a-business" className={label}>Business name</label><input id="a-business" className={field} value={f.business} onChange={set('business')} autoComplete="organization" maxLength={80} placeholder="As it should show on the app" /></div>
          <div><label htmlFor="a-email" className={label}>Email</label><input id="a-email" type="email" className={field} value={f.email} onChange={set('email')} autoComplete="email" maxLength={120} /></div>
          <div><label htmlFor="a-phone" className={label}>WhatsApp number <span className="font-normal text-slate-400">(optional)</span></label><input id="a-phone" className={field} value={f.phone} onChange={set('phone')} autoComplete="tel" inputMode="tel" maxLength={30} /></div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-1 font-display text-[20px] font-semibold text-navy-900">Which app should we set up?</legend>
        <p className="mb-4 text-[14px] text-slate-500">One setup covers one app. Tick more than one and we'll quote the rest.</p>
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
          {APPS.map((a) => (
            <label key={a} className={'flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-[15px] transition ' + (f.apps.includes(a) ? 'border-gold bg-[#FBF5E3] text-navy-900' : 'border-[#E4DCCB] text-slate-700 hover:border-gold/60')}>
              <input type="checkbox" className="h-4 w-4 accent-[#C9A227]" checked={f.apps.includes(a)} onChange={() => toggleApp(a)} />{a}
            </label>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-5 text-[15px] text-slate-700">
          <label className="flex items-center gap-2"><input type="radio" name="owns" value="yes" className="accent-[#C9A227]" checked={f.owns === 'yes'} onChange={set('owns')} />I already have it</label>
          <label className="flex items-center gap-2"><input type="radio" name="owns" value="no" className="accent-[#C9A227]" checked={f.owns === 'no'} onChange={set('owns')} />I still need to buy it</label>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-1 font-display text-[20px] font-semibold text-navy-900">Your look</legend>
        <div className="grid gap-5 md:grid-cols-2">
          {[['primary', 'Main colour'], ['secondary', 'Second colour']].map(([k, t]) => (
            <div key={k}>
              <label htmlFor={'a-' + k} className={label}>{t}</label>
              <div className="flex items-center gap-3">
                <input id={'a-' + k} type="color" className="h-12 w-14 cursor-pointer rounded-lg border border-[#DCD3C0] bg-white p-1" value={f[k]} onChange={set(k)} />
                <input aria-label={t + ' code'} className={field + ' font-mono uppercase'} value={f[k]} onChange={set(k)} maxLength={7} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="a-logo" className={label}>Link to your logo</label>
          <input id="a-logo" className={field} value={f.logo} onChange={set('logo')} maxLength={300} placeholder="Google Drive, Dropbox or your website" disabled={f.logoByEmail} />
          <label className="mt-2.5 flex items-center gap-2 text-[15px] text-slate-700"><input type="checkbox" className="h-4 w-4 accent-[#C9A227]" checked={f.logoByEmail} onChange={set('logoByEmail')} />I'll email it instead</label>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-1 font-display text-[20px] font-semibold text-navy-900">Your information</legend>
        <div>
          <label htmlFor="a-data" className={label}>Is there anything we should bring across?</label>
          <select id="a-data" className={field} value={f.data} onChange={set('data')}>{DATA.map((d) => <option key={d}>{d}</option>)}</select>
        </div>
        {f.data !== DATA[0] && (
          <div>
            <label htmlFor="a-datanote" className={label}>What is it, roughly?</label>
            <input id="a-datanote" className={field} value={f.dataNote} onChange={set('dataNote')} maxLength={200} placeholder="For example: 300 clients in Excel" />
          </div>
        )}
        <div>
          <label htmlFor="a-notes" className={label}>Anything else we should know? <span className="font-normal text-slate-400">(optional)</span></label>
          <textarea id="a-notes" rows={4} className={field} value={f.notes} onChange={set('notes')} maxLength={400} placeholder="Good times for a call, how you work, what you'd like it to do for you" />
        </div>
      </fieldset>

      <input type="text" name="website" value={f.website} onChange={set('website')} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {error && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-[15px] text-red-700">{error}</p>}

      <div className="flex flex-wrap items-center gap-4 border-t border-[#EFE8D8] pt-6">
        <button type="submit" disabled={busy} className="rounded-lg bg-navy-900 px-7 py-3.5 font-semibold text-white transition hover:bg-navy-800 disabled:opacity-60">
          {busy ? 'Sending…' : 'Send my details'}
        </button>
        <span className="text-[14px] text-slate-500">Nothing is charged here. You pay on the next page.</span>
      </div>
    </form>
  )
}
