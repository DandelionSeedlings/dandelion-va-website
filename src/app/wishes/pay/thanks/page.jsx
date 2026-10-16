'use client'

// Where Paystack sends people back to. Confirms the payment with the server before saying thank you.
import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import WishesNav from '../../../../components/wishes/WishesNav'
import WishesFooter from '../../../../components/wishes/WishesFooter'
import { PRODUCTS, rand } from '../../../../lib/wishes/pricing'

const SERIF = { fontFamily: "'Cormorant Garamond', serif" }

function Thanks() {
  const sp = useSearchParams()
  const ref = sp.get('reference') || sp.get('trxref') || ''
  const [state, setState] = useState('checking')
  const [info, setInfo] = useState(null)

  useEffect(() => {
    if (!ref) return setState('missing')
    let tries = 0
    async function check() {
      tries++
      try {
        const r = await fetch('/api/wishes/pay/order-verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reference: ref }) })
        const d = await r.json()
        if (d.paid) { setInfo(d); return setState('paid') }
      } catch {}
      if (tries < 4) setTimeout(check, 2500)
      else setState('unconfirmed')
    }
    check()
  }, [ref])

  const names = (info?.items || []).map((k) => PRODUCTS[k]?.label || k).join(', ')
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#3A3A3A]">
      <WishesNav />
      <main className="max-w-xl mx-auto px-6 pt-36 pb-24 text-center">
        {state === 'checking' && <p className="text-sm">Confirming your payment...</p>}
        {state === 'paid' && (
          <>
            <h1 className="text-5xl text-[#2E2A26] mb-4" style={SERIF}>Thank you</h1>
            <p className="mb-2">Your payment for <strong>{names}</strong> came through.</p>
            {info.mode === 'deposit' && <p className="mb-2 text-sm">That was your 50% deposit. The balance of {rand(info.balance / 100)} is paid before your invitation goes live, and we will send you the details.</p>}
            <p className="text-sm mb-8">We have been notified and will message you on WhatsApp or email shortly to get started.</p>
            <a href="/wishes" className="inline-block px-8 py-3 rounded-full text-white text-sm" style={{ background: '#7C8B68' }}>Back to Dandelion Wishes</a>
          </>
        )}
        {(state === 'unconfirmed' || state === 'missing') && (
          <>
            <h1 className="text-4xl text-[#2E2A26] mb-4" style={SERIF}>We could not confirm it yet</h1>
            <p className="text-sm mb-6">If you were charged, do not worry. Paystack also tells us directly, so we will still see your payment. You are welcome to WhatsApp us on 072 839 3087 and we will check.</p>
            <a href="/wishes" className="inline-block px-8 py-3 rounded-full text-white text-sm" style={{ background: '#7C8B68' }}>Back to Dandelion Wishes</a>
          </>
        )}
      </main>
      <WishesFooter />
    </div>
  )
}
export default function Page() { return <Suspense fallback={null}><Thanks /></Suspense> }
