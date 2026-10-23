'use client'

import { useRef, useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { bookingCall, newRequestId } from '../lib/booking'
import { SITE, whatsappLink } from '../lib/site'

const TOPICS = ['A custom system', 'One of the ready-made modules', 'Ongoing support', 'Something else']
const field = 'w-full rounded-xl border border-white/15 bg-navy-900 px-4 py-3 text-cream placeholder-cream/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', topic: TOPICS[0], message: '', website: '' })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const rid = useRef(newRequestId())
  const openedAt = useRef(Date.now())
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setError('')
    if (form.name.trim().length < 2) return setError('Please enter your name.')
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return setError('Please enter a valid email address.')
    if (form.message.trim().length < 10) return setError('Please tell us a little about what you need.')
    setBusy(true)
    try {
      await bookingCall('enquiry', {
        name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(),
        company: form.company.trim(), topic: form.topic, message: form.message.trim(),
        website: form.website, elapsed: Date.now() - openedAt.current, requestId: rid.current,
      })
      setSent(true)
    } catch (err) {
      setError(`${err.message} You can also reach us on WhatsApp or at ${SITE.email}.`)
    } finally {
      setBusy(false)
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-navy-800 p-8" aria-live="polite">
        <FiCheckCircle className="mb-4 text-gold" size={32} aria-hidden="true" />
        <h3 className="mb-2 text-2xl font-bold text-cream">Message received</h3>
        <p className="text-cream/60">Thank you, {form.name.trim().split(' ')[0]}. We reply within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border border-white/10 bg-navy-800 p-6 sm:p-8">
      <h3 className="mb-1 text-2xl font-bold text-cream">Send us a message</h3>
      <p className="mb-6 text-sm text-cream/50">Prefer to write first? Tell us what is going on and we will reply within 24 hours.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1 block text-sm text-cream/70">Name</label>
          <input id="c-name" className={field} value={form.name} onChange={set('name')} autoComplete="name" maxLength={80} />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1 block text-sm text-cream/70">Email</label>
          <input id="c-email" type="email" className={field} value={form.email} onChange={set('email')} autoComplete="email" maxLength={120} />
        </div>
        <div>
          <label htmlFor="c-phone" className="mb-1 block text-sm text-cream/70">Phone (optional)</label>
          <input id="c-phone" className={field} value={form.phone} onChange={set('phone')} autoComplete="tel" inputMode="tel" maxLength={30} />
        </div>
        <div>
          <label htmlFor="c-company" className="mb-1 block text-sm text-cream/70">Business (optional)</label>
          <input id="c-company" className={field} value={form.company} onChange={set('company')} autoComplete="organization" maxLength={80} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-topic" className="mb-1 block text-sm text-cream/70">I am interested in</label>
          <select id="c-topic" className={field} value={form.topic} onChange={set('topic')}>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className="mb-1 block text-sm text-cream/70">Message</label>
          <textarea id="c-message" rows={5} className={field} value={form.message} onChange={set('message')} maxLength={1000} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
          <label htmlFor="c-web">Website</label>
          <input id="c-web" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
        </div>
      </div>
      {error && <p role="alert" className="mt-5 text-sm text-red-300">{error}</p>}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={busy} className="rounded-full bg-gold px-8 py-3.5 font-semibold text-navy-900 transition hover:bg-gold-light disabled:opacity-60">
          {busy ? 'Sending...' : 'Send message'}
        </button>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sm text-cream/60 underline underline-offset-4 hover:text-gold">or message us on WhatsApp</a>
      </div>
    </form>
  )
}
