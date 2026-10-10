'use client'

import { useEffect, useRef, useState } from 'react'

const ORDER_ENDPOINT = process.env.NEXT_PUBLIC_ORDER_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

const CSS = `
.ot{font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:0 16px 64px;color:#334155;line-height:1.55}
.ot .card{max-width:520px;margin:0 auto;background:#fff;border-radius:16px;padding:36px 24px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,.18)}
.ot .ico{width:72px;height:72px;border-radius:50%;display:grid;place-items:center;margin:0 auto 20px;font-size:34px;color:#fff;background:#16a34a}
.ot .ico.wait{background:#C9A84C;color:#0F172A}
.ot .ico.bad{background:#b42318}
.ot h1{color:#0F172A;font-size:24px;margin:0 0 10px}
.ot p{color:#64748b;max-width:420px;margin:0 auto 16px}
.ot .sum{background:#f8fafc;border-radius:12px;padding:16px;text-align:left;max-width:420px;margin:0 auto 18px;font-size:14.5px}
.ot .btn{display:inline-block;padding:14px 22px;border:0;border-radius:12px;background:#C9A84C;color:#0F172A;font:inherit;font-weight:700;cursor:pointer;text-decoration:none}
.ot .btn:hover{background:#A68B3C;color:#fff}
.ot .spin{width:26px;height:26px;border:3px solid #e2e8f0;border-top-color:#C9A84C;border-radius:50%;animation:otspin .8s linear infinite;margin:0 auto 14px}
@keyframes otspin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.ot .spin{animation:none}}
`

export default function OrderThanks() {
  const [ref, setRef] = useState(null)
  const [res, setRes] = useState(null)       // last answer from the order script
  const [checking, setChecking] = useState(true)
  const [failed, setFailed] = useState(false)
  const tries = useRef(0)
  const timer = useRef(null)

  async function check(reference) {
    setChecking(true)
    try {
      const r = await fetch(ORDER_ENDPOINT + '?action=verify&reference=' + encodeURIComponent(reference))
      const d = await r.json()
      setRes(d)
      setFailed(false)
      if (d && d.ok && !d.paid && (d.state === 'pending' || d.state === 'wait' || d.state === 'unknown' || d.state === 'busy') && tries.current < 6) {
        tries.current += 1
        timer.current = setTimeout(() => check(reference), 3500)
        return
      }
    } catch (e) {
      setFailed(true)
    }
    setChecking(false)
  }

  useEffect(() => {
    let reference = ''
    try {
      const q = new URLSearchParams(window.location.search)
      reference = (q.get('reference') || q.get('trxref') || '').trim()
    } catch (e) {}
    setRef(reference)
    if (reference) check(reference)
    else setChecking(false)
    return () => { if (timer.current) clearTimeout(timer.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const paid = res && res.ok && res.paid
  const state = res && res.state
  let body

  if (ref === '') {
    body = (<>
      <div className="ico bad" aria-hidden="true">!</div>
      <h1>We could not find your order</h1>
      <p>This page needs the payment reference from Paystack. If you have paid, your confirmation email is on its way, or WhatsApp us on +27 72 839 3087.</p>
      <a className="btn" href="/order">Back to the order form</a>
    </>)
  } else if (checking && !paid) {
    body = (<>
      <div className="spin" role="status" aria-label="Checking your payment" />
      <h1>Confirming your payment</h1>
      <p>This takes a few seconds. Please keep this page open.</p>
    </>)
  } else if (paid) {
    body = (<>
      <div className="ico" aria-hidden="true">&#10003;</div>
      <h1>Payment received</h1>
      <p>Thank you. Your licence keys are on their way to your email, usually within a minute. Check your spam folder if you do not see them.</p>
      <div className="sum"><strong>Order number:</strong> {res.orderId}<br /><strong>Total paid:</strong> R{Number(res.total).toLocaleString('en-ZA')}<br /><strong>Products:</strong> {res.products}</div>
      <p>Need help getting started? WhatsApp <a href="https://wa.me/27728393087">+27 72 839 3087</a>.</p>
    </>)
  } else if (state === 'failed' || state === 'abandoned' || state === 'reversed') {
    body = (<>
      <div className="ico bad" aria-hidden="true">!</div>
      <h1>The payment did not go through</h1>
      <p>You have not been charged for this order. You can try again from the order form, or choose bank transfer.</p>
      <a className="btn" href="/order">Back to the order form</a>
    </>)
  } else if (state === 'mismatch') {
    body = (<>
      <div className="ico wait" aria-hidden="true">!</div>
      <h1>We need to check your payment</h1>
      <p>The amount we received does not match your order. We have been told and will sort it out with you. You can also WhatsApp +27 72 839 3087 with order number {res.orderId}.</p>
    </>)
  } else {
    body = (<>
      <div className="ico wait" aria-hidden="true">...</div>
      <h1>{failed ? 'We could not reach the order system' : 'We have not seen the payment yet'}</h1>
      <p>If you have paid, it can take a moment to show. Press the button to check again. Your order is saved, and we will email you the moment the payment is confirmed.</p>
      <button type="button" className="btn" onClick={() => { tries.current = 0; check(ref) }}>Check again</button>
    </>)
  }

  return (
    <div className="ot"><style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="card" aria-live="polite">{body}</div>
    </div>
  )
}
