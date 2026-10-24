'use client'

import { useEffect, useRef, useState } from 'react'
import { ORDER_URL } from '../lib/site'

const inp = 'w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-800 text-base focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition'
const lab = 'block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5'

export default function PartnerForm() {
  const [f, setF] = useState({ name: '', email: '', phone: '', business: '', plan: '', website: '' })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const t0 = useRef(0)
  const errRef = useRef(null)
  useEffect(() => { t0.current = Date.now() }, [])
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }))

  function fail(m) {
    setError(m)
    setTimeout(() => { try { errRef.current && errRef.current.focus() } catch (e) {} }, 0)
  }

  async function submit(e) {
    e.preventDefault()
    if (busy) return
    setError('')
    if (f.name.trim().length < 2) return fail('Please enter your name.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) return fail('Please enter a valid email address.')
    setBusy(true)
    try {
      const res = await fetch(ORDER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'partnerApply', ...f, elapsed: Date.now() - t0.current }),
      })
      const d = await res.json()
      if (d && d.success) setSent(true)
      else fail((d && d.error) || 'Something went wrong. Please try again.')
    } catch (x) {
      fail('We could not reach the system. Check your connection, or WhatsApp +27 72 839 3087.')
    }
    setBusy(false)
  }

  if (sent) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-xl" role="status">
        <div className="w-14 h-14 rounded-full bg-green-600 text-white grid place-items-center text-2xl mx-auto mb-4" aria-hidden="true">&#10003;</div>
        <h3 className="font-display text-xl font-bold text-[#0a1628] mb-2">Application received</h3>
        <p className="text-gray-600">Thank you. We have emailed you a copy. Once Simone approves you, your code and link arrive by email.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <div><label className={lab} htmlFor="p-name">Your name *</label><input id="p-name" className={inp} autoComplete="name" value={f.name} onChange={set('name')} maxLength={80} required /></div>
        <div><label className={lab} htmlFor="p-email">Email *</label><input id="p-email" className={inp} type="email" inputMode="email" autoComplete="email" value={f.email} onChange={set('email')} maxLength={120} required /></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <div><label className={lab} htmlFor="p-phone">Phone or WhatsApp</label><input id="p-phone" className={inp} type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} maxLength={40} /></div>
        <div><label className={lab} htmlFor="p-biz">Business or audience</label><input id="p-biz" className={inp} autoComplete="organization" value={f.business} onChange={set('business')} maxLength={160} /></div>
      </div>
      <div className="mb-4"><label className={lab} htmlFor="p-plan">How will you share it?</label><textarea id="p-plan" className={inp + ' min-h-[96px]'} value={f.plan} onChange={set('plan')} maxLength={600} placeholder="For example: I recommend tools to my bookkeeping clients." /></div>
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true"><label>Leave this empty<input tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} /></label></div>
      {error && <div ref={errRef} tabIndex={-1} role="alert" className="mb-4 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">{error}</div>}
      <button type="submit" disabled={busy} className="w-full min-h-[50px] rounded-xl bg-gold hover:brightness-110 active:scale-[0.98] text-[#0a1628] font-bold transition disabled:opacity-60">{busy ? 'Sending...' : 'Send my application'}</button>
      <p className="text-xs text-gray-500 mt-3">We only use your details to review your application and contact you.</p>
    </form>
  )
}
