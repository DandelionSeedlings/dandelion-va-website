'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { bookingCall, newRequestId } from '../lib/booking'
import { SITE, whatsappLink } from '../lib/site'

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const pad = (n) => String(n).padStart(2, '0')
const iso = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`
const parseIso = (s) => { const [y, m, d] = s.split('-').map(Number); return { y, m: m - 1, d } }
// Sunday = 0 in JS Date. BookAbility sends workingDays as JS day numbers (0 to 6).
const dow = (s) => { const { y, m, d } = parseIso(s); return new Date(Date.UTC(y, m, d)).getUTCDay() }

const field = 'w-full rounded-xl border border-white/15 bg-navy-800 px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold'

export default function BookingFlow({ prefer = 'audit' }) {
  const [cfg, setCfg] = useState(null)
  const [service, setService] = useState(null)
  const [loadError, setLoadError] = useState('')
  const [month, setMonth] = useState(null)
  const [date, setDate] = useState('')
  const [slots, setSlots] = useState({ loading: false, list: [], reason: '' })
  const [time, setTime] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '', website: '' })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(null)
  const rid = useRef(newRequestId())
  const openedAt = useRef(Date.now())

  useEffect(() => {
    let live = true
    ;(async () => {
      try {
        const c = await bookingCall('config', {})
        if (!live) return
        if (!c.open) { setLoadError(c.message || 'Online booking is paused right now.'); return }
        const s = await bookingCall('services', {})
        if (!live) return
        const list = s.services || []
        const wanted = list.find((x) => new RegExp(prefer, 'i').test(x.name))
        if (prefer === 'setup' && !wanted) { setLoadError('Setup calls cannot be booked online yet. Please WhatsApp us and we will find a time.'); return }
        const audit = wanted || list.find((x) => /audit/i.test(x.name)) || list[0]
        if (!audit) { setLoadError('No services are available to book right now.'); return }
        setCfg(c)
        setService(audit)
        const t = parseIso(c.today)
        setMonth({ y: t.y, m: t.m })
      } catch (e) {
        if (live) setLoadError(e.message)
      }
    })()
    return () => { live = false }
  }, [])

  useEffect(() => {
    if (!date || !service) return
    let live = true
    setSlots({ loading: true, list: [], reason: '' })
    setTime('')
    bookingCall('slots', { date, serviceId: service.id })
      .then((r) => live && setSlots({ loading: false, list: r.slots || [], reason: r.reason || '' }))
      .catch((e) => live && setSlots({ loading: false, list: [], reason: 'error', message: e.message }))
    return () => { live = false }
  }, [date, service])

  const days = useMemo(() => {
    if (!cfg || !month) return []
    const first = new Date(Date.UTC(month.y, month.m, 1)).getUTCDay()
    const lead = (first + 6) % 7 // Monday first
    const count = new Date(Date.UTC(month.y, month.m + 1, 0)).getUTCDate()
    const cells = Array(lead).fill(null)
    for (let d = 1; d <= count; d++) {
      const s = iso(month.y, month.m, d)
      const ok = s >= cfg.today && s <= cfg.maxDate && !!(cfg.workingDays && cfg.workingDays[dow(s)])
      cells.push({ s, d, ok })
    }
    return cells
  }, [cfg, month])

  const ym = (o) => o.y * 12 + o.m
  const canPrev = cfg && month && ym(month) > ym(parseIso(cfg.today))
  const canNext = cfg && month && ym(month) < ym(parseIso(cfg.maxDate))
  const shift = (n) => setMonth((p) => { const t = p.m + n; return { y: p.y + Math.floor(t / 12), m: ((t % 12) + 12) % 12 } })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setError('')
    if (!date || !time) return setError('Please choose a day and a time.')
    if (form.name.trim().length < 2) return setError('Please enter your name.')
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return setError('Please enter a valid email address.')
    if (form.phone.replace(/\D/g, '').length < 9) return setError('Please enter a phone number we can reach you on.')
    setBusy(true)
    try {
      const r = await bookingCall('book', {
        serviceId: service.id, date, time,
        name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(),
        notes: form.notes.trim(), website: form.website, requestId: rid.current,
      })
      setDone(r)
    } catch (err) {
      if (err.code === 'TAKEN') {
        setTime('')
        setError('Someone just took that time. Please choose another.')
        bookingCall('slots', { date, serviceId: service.id }).then((r2) => setSlots({ loading: false, list: r2.slots || [], reason: r2.reason || '' })).catch(() => {})
      } else {
        setError(err.message)
      }
    } finally {
      setBusy(false)
    }
  }

  if (loadError) {
    return (
      <div role="alert" className="rounded-2xl border border-white/10 bg-navy-800 p-8 text-gray-300">
        <p className="mb-4">{loadError}</p>
        <p>
          You can still reach us on{' '}
          <a className="text-gold underline" href={whatsappLink('Hi, I would like to book a Systems Audit.')}>WhatsApp</a>{' '}
          or at <a className="text-gold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>
    )
  }

  if (!cfg || !month) {
    return <div className="rounded-2xl border border-white/10 bg-navy-800 p-8 text-gray-400" aria-live="polite">Loading available times...</div>
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-navy-800 p-8" aria-live="polite">
        <FiCheckCircle className="mb-4 text-gold" size={36} aria-hidden="true" />
        <h2 className="mb-2 text-2xl font-bold text-white">
          {done.status === 'Pending' ? 'Request received' : 'You are booked in'}
        </h2>
        <p className="mb-2 text-gray-300">
          {done.service || service.name} on {done.longDate || date} at {done.time || time}.
        </p>
        <p className="text-gray-400">
          {done.status === 'Pending'
            ? 'We will confirm by email within 24 hours.'
            : done.emailed
              ? 'A confirmation is on its way to your inbox.'
              : 'We will send you a confirmation shortly.'}
        </p>
      </div>
    )
  }

  const reasonText = {
    closed: 'We are closed that day. Please pick another.',
    full: 'That day is fully booked. Please pick another.',
    later: 'There are no times left today. Please pick another day.',
  }[slots.reason]

  return (
    <form onSubmit={submit} noValidate className="space-y-10">
      <div className="rounded-2xl border border-white/10 bg-navy-800 p-6 sm:p-8">
        <h2 className="mb-5 text-lg font-semibold text-white"><span className="mr-2 text-gold">1</span>Pick a day</h2>
        <div className="mb-4 flex items-center justify-between">
          <button type="button" onClick={() => shift(-1)} disabled={!canPrev} aria-label="Previous month" className="rounded-lg p-2 text-white hover:bg-white/10 disabled:opacity-30"><FiChevronLeft /></button>
          <p className="font-semibold text-white" aria-live="polite">{MONTHS[month.m]} {month.y}</p>
          <button type="button" onClick={() => shift(1)} aria-label="Next month" disabled={!canNext} className="rounded-lg p-2 text-white hover:bg-white/10 disabled:opacity-30"><FiChevronRight /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
          {DAY_NAMES.map((n) => <div key={n} className="py-1">{n}</div>)}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {days.map((c, i) => c ? (
            <button
              key={c.s}
              type="button"
              disabled={!c.ok}
              onClick={() => setDate(c.s)}
              aria-pressed={date === c.s}
              className={`aspect-square rounded-lg text-sm transition ${date === c.s ? 'bg-gold font-semibold text-navy-900' : c.ok ? 'text-white hover:bg-white/10' : 'text-gray-600'}`}
            >{c.d}</button>
          ) : <div key={`b${i}`} />)}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-navy-800 p-6 sm:p-8">
        <h2 className="mb-5 text-lg font-semibold text-white"><span className="mr-2 text-gold">2</span>Pick a time</h2>
        <div aria-live="polite">
          {!date && <p className="text-gray-400">Choose a day first.</p>}
          {date && slots.loading && <p className="text-gray-400">Checking free times...</p>}
          {date && !slots.loading && slots.reason === 'error' && <p className="text-red-300">{slots.message}</p>}
          {date && !slots.loading && slots.reason !== 'error' && !slots.list.length && <p className="text-gray-300">{reasonText || 'No free times that day.'}</p>}
          {slots.list.length > 0 && (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Free times">
              {slots.list.map((t) => (
                <button key={t} type="button" onClick={() => setTime(t)} aria-pressed={time === t}
                  className={`rounded-lg border px-4 py-2 text-sm transition ${time === t ? 'border-gold bg-gold font-semibold text-navy-900' : 'border-white/20 text-white hover:border-gold'}`}>{t}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-navy-800 p-6 sm:p-8">
        <h2 className="mb-5 text-lg font-semibold text-white"><span className="mr-2 text-gold">3</span>Your details</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="b-name" className="mb-1 block text-sm text-gray-300">Name</label>
            <input id="b-name" className={field} value={form.name} onChange={set('name')} autoComplete="name" maxLength={80} />
          </div>
          <div>
            <label htmlFor="b-phone" className="mb-1 block text-sm text-gray-300">Phone</label>
            <input id="b-phone" className={field} value={form.phone} onChange={set('phone')} autoComplete="tel" inputMode="tel" maxLength={30} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="b-email" className="mb-1 block text-sm text-gray-300">Email</label>
            <input id="b-email" type="email" className={field} value={form.email} onChange={set('email')} autoComplete="email" maxLength={120} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="b-notes" className="mb-1 block text-sm text-gray-300">What is slowing your business down? (optional)</label>
            <textarea id="b-notes" rows={4} className={field} value={form.notes} onChange={set('notes')} maxLength={500} />
          </div>
          {/* Honeypot: real people never see or fill this in. */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
            <label htmlFor="b-web">Website</label>
            <input id="b-web" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
          </div>
        </div>

        {error && <p role="alert" className="mt-5 text-sm text-red-300">{error}</p>}

        <button
          type="submit"
          disabled={busy}
          className="mt-6 w-full rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy-900 transition hover:bg-gold-light disabled:opacity-60 sm:w-auto"
        >
          {busy ? 'Booking...' : 'Confirm my booking'}
        </button>
        <p className="mt-4 text-xs text-gray-500">We only use your details to arrange this call.</p>
      </div>
    </form>
  )
}
