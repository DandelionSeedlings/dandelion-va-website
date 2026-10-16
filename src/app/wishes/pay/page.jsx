'use client'

// src/app/wishes/pay/page.jsx
// One payment page for everything on /wishes. Link to it from any button:
//   /wishes/pay?product=memorybloom        (single product, preselected)
//   /wishes/pay?product=interactive        (offers the 50% deposit)
//   /wishes/pay                            (shows the full list)
import { Suspense, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import { PRODUCTS, DEPOSIT_PERCENT, cleanItems, depositAllowed, orderAmounts, rand } from '../../../lib/wishes/pricing'

const SERIF = { fontFamily: "'Cormorant Garamond', serif" }
const input = 'w-full px-4 py-3.5 rounded-lg border border-[#E5DED2] bg-white text-[15px] text-[#3A3A3A] focus:outline-none focus:border-[#7C8B68]'
const GROUPS = ['Invitation suites', 'Standalone products', 'Add-ons']

function PayForm() {
  const params = useSearchParams()
  const start = cleanItems((params.get('product') || '').split(','))
  const [items, setItems] = useState(start)
  const [mode, setMode] = useState(params.get('mode') === 'deposit' ? 'deposit' : 'full')
  const [f, setF] = useState({ name: '', email: '', phone: '', weddingDate: '', notes: '' })
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const opened = useRef(Date.now())

  const canDeposit = depositAllowed(items)
  const amounts = orderAmounts(items, canDeposit ? mode : 'full')
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }))
  const toggle = (k) => setItems((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]))

  async function pay(e) {
    e.preventDefault()
    setErr('')
    if (!items.length) return setErr('Please choose what you would like to pay for.')
    setBusy(true)
    try {
      const res = await fetch('/api/wishes/pay/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, items, mode: canDeposit ? mode : 'full', elapsedMs: Date.now() - opened.current }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.url) throw new Error(data.error || 'Could not start the payment. Please try again.')
      window.location.href = data.url
    } catch (e2) {
      setErr(e2.message)
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#3A3A3A]">
      <WishesNav />
      <main className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl sm:text-5xl text-[#2E2A26] mb-2" style={SERIF}>Pay securely online</h1>
        <p className="text-sm text-[#3A3A3A]/70 mb-8">Choose what you are paying for, tell us who you are, and pay with Paystack. We will be in touch to get started as soon as your payment comes through.</p>

        <form onSubmit={pay} className="space-y-8">
          {GROUPS.map((g) => (
            <fieldset key={g}>
              <legend className="text-xs uppercase tracking-[0.2em] text-[#8B7355] mb-3">{g}</legend>
              <div className="space-y-2">
                {Object.entries(PRODUCTS).filter(([, p]) => p.group === g).map(([k, p]) => (
                  <label key={k} className={`flex gap-3 items-start p-4 rounded-lg border cursor-pointer bg-white ${items.includes(k) ? 'border-[#7C8B68]' : 'border-[#E5DED2]'}`}>
                    <input type="checkbox" className="mt-1" checked={items.includes(k)} onChange={() => toggle(k)} />
                    <span className="flex-1">
                      <span className="flex justify-between gap-3"><span className="font-medium">{p.label}</span><span>{rand(p.rands)}</span></span>
                      <span className="block text-xs text-[#3A3A3A]/60 mt-0.5">{p.blurb}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}

          {canDeposit && (
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.2em] text-[#8B7355] mb-3">How would you like to pay?</legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {[['full', 'Pay in full', rand(amounts.total / 100)], ['deposit', `Pay ${DEPOSIT_PERCENT}% deposit`, rand(Math.round((amounts.total * DEPOSIT_PERCENT) / 100 / 100))]].map(([v, l, a]) => (
                  <label key={v} className={`p-4 rounded-lg border cursor-pointer bg-white ${mode === v ? 'border-[#7C8B68]' : 'border-[#E5DED2]'}`}>
                    <input type="radio" name="mode" className="mr-2" checked={mode === v} onChange={() => setMode(v)} />
                    <span className="font-medium">{l}</span> <span className="float-right">{a}</span>
                  </label>
                ))}
              </div>
              {mode === 'deposit' && <p className="text-xs text-[#3A3A3A]/60 mt-2">The remaining balance is paid before your invitation goes live. We will send you the details.</p>}
            </fieldset>
          )}

          <div className="grid sm:grid-cols-2 gap-3">
            <input className={input} placeholder="Your name or the couple" value={f.name} onChange={set('name')} required maxLength={120} />
            <input className={input} type="email" placeholder="Email address" value={f.email} onChange={set('email')} required />
            <input className={input} placeholder="WhatsApp number" value={f.phone} onChange={set('phone')} maxLength={40} />
            <input className={input} placeholder="Wedding date" value={f.weddingDate} onChange={set('weddingDate')} maxLength={60} />
            <textarea className={`${input} sm:col-span-2`} rows={3} placeholder="Anything we should know? (optional)" value={f.notes} onChange={set('notes')} maxLength={1000} />
          </div>

          {err && <p role="alert" className="text-sm text-[#B04A4A]">{err}</p>}

          <button type="submit" disabled={busy || !items.length} className="w-full py-4 rounded-full text-white text-sm tracking-wide disabled:opacity-50" style={{ background: '#7C8B68' }}>
            {busy ? 'Taking you to Paystack...' : items.length ? `${amounts.deposit ? 'Pay deposit' : 'Pay now'} ${rand(amounts.now / 100)}` : 'Choose something to pay for'}
          </button>
          <p className="text-xs text-center text-[#3A3A3A]/50">Payments are processed by Paystack. We never see your card details.</p>
        </form>
      </main>
      <WishesFooter />
    </div>
  )
}

export default function PayPage() {
  return <Suspense fallback={null}><PayForm /></Suspense>
}
