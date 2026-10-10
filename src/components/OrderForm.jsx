'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

// The Orders Apps Script deployment (Code.gs in the Orders sheet). Keep the same
// deployment and publish a new version after changing the script.
const ORDER_ENDPOINT = process.env.NEXT_PUBLIC_ORDER_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbyUAtVX_pKihPq2iBqb_bq4ctso-v8z52YHHlSX3TflJaz_DlaMsTq8FUSoCw7hmQqPNw/exec'

const DISCOUNT = 0.10
const MAX_POP = 5 * 1024 * 1024
const POP_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']

// Prices here are for display only. The server works out the real price from the ids.
const PRODUCTS = [
  { id: 'crm-mini', key: 'connectability', name: 'Connectability: CRM Mini', price: 0, badge: 'Free', desc: 'Client tracking foundations for front-facing sales and administrative workflows.' },
  { id: 'receiptsnap', key: 'receiptsnap', name: 'ReceiptSnap', price: 299, badge: 'New', desc: 'Snap photos of receipts, extract the data with AI, and export clean CSV files for your bookkeeper.' },
  { id: 'bookability', key: 'bookability', name: 'Bookability: CRM + Booking System', price: 499, badge: 'New', desc: 'QR code booking, a PIN-protected admin portal, email and WhatsApp confirmations, and slot blocking.' },
  { id: 'content-planner', key: 'visibility', name: 'Visibility: Content Planner', price: 299, desc: 'Marketing calendars, content scheduling, and social media production workflows.' },
  { id: 'crm-pro', key: 'scalability', name: 'Scalability: CRM Pro', price: 499, badge: 'Popular', desc: 'Advanced sales pipelines, relationship metrics, and growth tracking for account managers.' },
  { id: 'payability', key: 'payability', name: 'Payability: Invoice Sorter Pro', price: 499, group: 'payability', option: 'Do it yourself', desc: 'Invoices, quotes, payment links and VAT reports from your own Google Sheet. Set it up yourself with the guide.' },
  { id: 'payability-dwy', key: 'payability-dwy', name: 'Payability: Done-With-You Setup', price: 999, group: 'payability', option: 'Done with you', desc: 'Everything in Payability, set up with you on a call: your details, tax settings and first invoice.' },
  { id: 'stock-supplier', key: 'availability', name: 'Availability: Stock & Supplier Pro', price: 499, desc: 'Inventory control, procurement tracking, and supply chain management.' },
  { id: 'profitability', key: 'profitability', name: 'Profitability: Income & Expenses', price: 799, desc: 'An automated banking ledger and CSV importing for business owners and accountants.' },
  { id: 'done-with-you', key: 'adaptability', name: 'Adaptability: Done-With-You Setup', price: 999, badge: 'Recommended', desc: 'White-label setup of any module, with your logo, colours and business name.' },
]

const QUOTES = [
  { name: 'Marketability: SMM & Web Framework', desc: 'Tiered digital strategies, social media management intake, and fast website launch workflows.', href: 'https://script.google.com/macros/s/AKfycbxYopxLBZudEeEFN5c44RkuQMdHns7pCZksPpFLBtZYy3E9UUVJhgtOUnomEEc82UFpgg/exec' },
  { name: 'Promotability: Corporate Swag Tracker', desc: 'Visual proofing, a local supplier directory, and markup calculators for branded merchandise.', href: 'https://script.google.com/macros/s/AKfycbwvyLaypTc0yWj5xcAIw0PmtngDvE2B4REgkzJr1u6nFcJIJ8Zz8o68RxNWRaI9gVyt/exec' },
]

const SOON = [
  { name: 'Trackability: Time & Payroll', price: 499, desc: 'Kiosk QR check-in and check-out, and automated PDF payslips.' },
  { name: 'Capability: Main Office Dashboard', price: 1499, desc: 'A master view that brings together the numbers from across the suite.' },
]

const CSS = `
.of{--gold:#C9A84C;--gold-dark:#A68B3C;--navy:#0F172A;--ink:#334155;--muted:#64748b;--line:#e2e8f0;--ok:#16a34a;--bad:#b42318;
font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);padding:0 16px 56px;line-height:1.55}
.of *{box-sizing:border-box}
.of .wrap{max-width:760px;margin:0 auto}
.of .head{text-align:center;margin:0 0 28px}
.of .head .eyebrow{color:var(--gold);font-weight:700;font-size:13px;letter-spacing:.14em;text-transform:uppercase;margin:0 0 10px}
.of .head h1{color:#fff;font-size:clamp(28px,5vw,40px);line-height:1.1;margin:0 0 10px;font-weight:800;letter-spacing:-.02em}
.of .head p{color:rgba(255,255,255,.65);margin:0;font-size:15px}
.of .card{background:#fff;border-radius:16px;padding:26px;margin:0 0 18px;box-shadow:0 4px 24px rgba(0,0,0,.18);border:0;min-width:0}
.of fieldset.card{margin-left:0;margin-right:0}
.of legend{padding:0;float:left;width:100%;font-size:17px;font-weight:700;color:var(--navy);margin:0 0 16px}
.of legend+*{clear:both}
.of .step{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--navy);color:var(--gold);font-size:13px;margin-right:10px}
.of .grid{display:grid;gap:12px}
.of .prod{display:flex;gap:14px;align-items:flex-start;border:2px solid var(--line);border-radius:12px;padding:15px;cursor:pointer;background:#fff;transition:border-color .15s,background .15s}
.of .prod:hover{border-color:var(--gold)}
.of .prod.on{border-color:var(--gold);background:rgba(201,168,76,.09)}
.of .prod.free{border-color:rgba(22,163,74,.3)}
.of .prod.free.on{border-color:var(--ok);background:rgba(22,163,74,.08)}
.of .prod.off{opacity:.6;cursor:not-allowed}
.of .prod:focus-within{outline:3px solid rgba(201,168,76,.45);outline-offset:2px}
.of .prod input{width:22px;height:22px;margin-top:2px;accent-color:var(--gold);flex-shrink:0;cursor:inherit}
.of .info{flex:1;min-width:0}
.of .name{font-weight:650;color:var(--navy);font-size:15px;display:flex;flex-wrap:wrap;gap:6px 8px;align-items:center;margin-bottom:3px}
.of .desc{font-size:13.5px;color:var(--muted)}
.of .price{font-weight:700;font-size:18px;color:var(--gold-dark);white-space:nowrap;text-align:right}
.of .price.free{color:var(--ok)}
.of .price s{display:block;font-size:12.5px;color:var(--muted);font-weight:500}
.of .badge{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:2px 8px;border-radius:5px;background:rgba(201,168,76,.18);color:var(--gold-dark)}
.of .badge.free{background:rgba(22,163,74,.14);color:var(--ok)}
.of .badge.soon{background:#e2e8f0;color:#475569}
.of a.prod{text-decoration:none;color:inherit}
.of .sub{font-size:13px;color:var(--muted);margin:18px 0 10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em}
.of .row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.of .field{margin:0 0 16px}
.of label.l{display:block;font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin:0 0 6px}
.of input.t,.of textarea,.of select{width:100%;padding:12px 14px;border:2px solid var(--line);border-radius:10px;font:inherit;font-size:15px;color:var(--ink);background:#fff}
.of input.t:focus,.of textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(201,168,76,.2)}
.of textarea{min-height:84px;resize:vertical}
.of .hint{font-size:12.5px;color:var(--muted);margin-top:5px}
.of .hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.of .pay{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.of .opt{border:2px solid var(--line);border-radius:10px;padding:14px;text-align:center;cursor:pointer;font-weight:650;color:var(--navy);background:#fff}
.of .opt:hover{border-color:var(--gold)}
.of .opt.on{border-color:var(--gold);background:rgba(201,168,76,.12);box-shadow:0 0 0 3px rgba(201,168,76,.18)}
.of .opt input{position:absolute;opacity:0;pointer-events:none}
.of .opt:focus-within{outline:3px solid rgba(201,168,76,.45);outline-offset:2px}
.of .bank{background:#f8fafc;border-radius:10px;padding:16px;margin-top:14px;font-size:14px;line-height:1.8}
.of .bank strong{color:var(--navy)}
.of .qr{display:block;max-width:260px;width:100%;height:auto;margin:12px auto;border-radius:8px;border:2px solid var(--line)}
.of .upload{display:block;border:2px dashed var(--line);border-radius:12px;padding:30px 20px;text-align:center;cursor:pointer;background:#fafafa}
.of .upload:hover,.of .upload:focus-within{border-color:var(--gold);background:rgba(201,168,76,.04)}
.of .upload.has{border:2px solid var(--ok);background:rgba(22,163,74,.05)}
.of .upload input{position:absolute;opacity:0;width:1px;height:1px}
.of .upload b{display:block;color:var(--navy);margin-bottom:3px}
.of .upload span{font-size:13px;color:var(--muted)}
.of .ref{display:flex;gap:10px;flex-wrap:wrap}
.of .ref input{flex:1;min-width:180px}
.of .ok-note{color:var(--ok);font-weight:650;font-size:13.5px;margin-top:8px}
.of .total{background:var(--navy);border-radius:14px;padding:20px 24px;margin:0 0 18px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
.of .total .lab{color:rgba(255,255,255,.7);font-size:14px}
.of .total .lab small{display:block;color:var(--gold);font-weight:600}
.of .total .amt{color:var(--gold);font-size:30px;font-weight:800}
.of .total .amt.free{color:#4ade80}
.of .btn{width:100%;padding:16px;border:0;border-radius:12px;background:var(--gold);color:var(--navy);font:inherit;font-size:16px;font-weight:700;cursor:pointer}
.of .btn:hover:not(:disabled){background:var(--gold-dark);color:#fff}
.of .btn:disabled{opacity:.55;cursor:not-allowed}
.of .btn:focus-visible{outline:3px solid #fff;outline-offset:3px}
.of .err{background:rgba(180,35,24,.08);border:1px solid rgba(180,35,24,.25);color:var(--bad);border-radius:10px;padding:13px 16px;font-weight:600;font-size:14px;margin:0 0 18px}
.of .done{text-align:center;padding:36px 22px}
.of .done .tick{width:72px;height:72px;border-radius:50%;background:var(--ok);color:#fff;font-size:36px;display:grid;place-items:center;margin:0 auto 20px}
.of .done h2{color:var(--navy);margin:0 0 10px;font-size:24px}
.of .done p{color:var(--muted);max-width:430px;margin:0 auto 18px}
.of .sum{background:#f8fafc;border-radius:12px;padding:18px;text-align:left;max-width:430px;margin:0 auto 18px;font-size:14.5px}
.of .sum ul{margin:6px 0 0;padding-left:18px}
.of .done a.wa{display:inline-block;margin:0 0 14px;color:var(--navy);font-weight:700}
.of .foot{text-align:center;color:rgba(255,255,255,.5);font-size:13px;margin-top:26px}
.of .foot a{color:var(--gold)}
@media (max-width:600px){.of .row,.of .pay{grid-template-columns:1fr}.of .card{padding:20px 16px}.of .prod{flex-wrap:wrap}.of .price{margin-left:36px;text-align:left}}
`

const money = (n) => 'R' + Number(n).toLocaleString('en-ZA').replace(/ /g, ' ')
const disc = (p) => Math.round(p * (1 - DISCOUNT))

function findPreselect(param) {
  if (!param) return null
  const p = param.toLowerCase()
  return PRODUCTS.find((x) => x.id === p || x.key === p) ||
    PRODUCTS.find((x) => x.name.toLowerCase() === p) ||
    PRODUCTS.find((x) => p.includes(x.key) && !x.group) ||
    PRODUCTS.find((x) => p.includes(x.key)) || null
}

export default function OrderForm() {
  const [picked, setPicked] = useState({})
  const [f, setF] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', notes: '', website: '' })
  const [method, setMethod] = useState('Bank Transfer')
  const [code, setCode] = useState('')
  const [pop, setPop] = useState(null) // { name, data }
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(null)
  const requestId = useRef('')
  const errRef = useRef(null)

  useEffect(() => {
    requestId.current = 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10)
    try {
      const q = new URLSearchParams(window.location.search)
      const fromUrl = (q.get('partner') || '').trim().toUpperCase()
      let c = fromUrl
      if (fromUrl) { try { localStorage.setItem('dc_partner_code', fromUrl) } catch (e) {} }
      else { try { c = localStorage.getItem('dc_partner_code') || '' } catch (e) {} }
      if (c) setCode(c)
      const pre = findPreselect(q.get('product'))
      if (pre) setPicked({ [pre.id]: true })
    } catch (e) {}
  }, [])

  const codeOk = /^[A-Z0-9][A-Z0-9-]{2,29}$/.test(code.trim().toUpperCase())
  const applied = codeOk

  const chosen = useMemo(() => PRODUCTS.filter((p) => picked[p.id]), [picked])
  const total = chosen.reduce((s, p) => s + (applied && p.price > 0 ? disc(p.price) : p.price), 0)
  const saving = chosen.reduce((s, p) => s + (applied && p.price > 0 ? p.price - disc(p.price) : 0), 0)

  function toggle(p) {
    setPicked((cur) => {
      const next = { ...cur }
      if (next[p.id]) { delete next[p.id]; return next }
      if (p.group) PRODUCTS.filter((x) => x.group === p.group).forEach((x) => delete next[x.id])
      next[p.id] = true
      return next
    })
  }

  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }))

  function onFile(e) {
    const file = e.target.files && e.target.files[0]
    setError('')
    if (!file) { setPop(null); return }
    if (!POP_TYPES.includes(file.type)) { setPop(null); setError('The proof of payment must be a JPG, PNG, WebP or PDF file.'); e.target.value = ''; return }
    if (file.size > MAX_POP) { setPop(null); setError('That file is bigger than 5 MB. Please use a smaller file.'); e.target.value = ''; return }
    const r = new FileReader()
    r.onload = () => setPop({ name: file.name, data: String(r.result) })
    r.onerror = () => { setPop(null); setError('That file could not be read.') }
    r.readAsDataURL(file)
  }

  function fail(msg) {
    setError(msg)
    setTimeout(() => { try { errRef.current && errRef.current.focus() } catch (e) {} }, 0)
  }

  async function submit(e) {
    e.preventDefault()
    if (busy) return
    setError('')
    if (!chosen.length) return fail('Please select at least one product.')
    if (!f.firstName.trim() || !f.lastName.trim()) return fail('Please enter your first and last name.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) return fail('Please enter a valid email address.')
    if (code.trim() && !codeOk) return fail('That referral code does not look right. Check it, or clear it.')
    setBusy(true)
    try {
      const res = await fetch(ORDER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          requestId: requestId.current,
          productIds: chosen.map((p) => p.id),
          firstName: f.firstName, lastName: f.lastName, email: f.email, phone: f.phone,
          company: f.company, notes: f.notes, website: f.website,
          paymentMethod: method, partnerCode: applied ? code.trim().toUpperCase() : '',
          popFile: pop ? pop.data : '', popFileName: pop ? pop.name : '',
        }),
      })
      const data = await res.json()
      if (data && data.success) {
        setDone({ orderId: data.orderId, total: typeof data.total === 'number' ? data.total : total, items: chosen.map((p) => p.name), hadPop: !!pop, method })
        try { window.scrollTo(0, 0) } catch (x) {}
      } else {
        fail((data && data.error) || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      fail('We could not reach the order system. Check your connection and try again, or WhatsApp +27 72 839 3087.')
    }
    setBusy(false)
  }

  function again() {
    setDone(null); setPicked({}); setPop(null); setError('')
    setF({ firstName: '', lastName: '', email: '', phone: '', company: '', notes: '', website: '' })
    requestId.current = 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10)
  }

  if (done) {
    const wa = 'https://wa.me/27728393087?text=' + encodeURIComponent('Hi, here is my proof of payment for order ' + done.orderId)
    return (
      <div className="of"><style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="wrap">
          <div className="card done" role="status">
            <div className="tick" aria-hidden="true">&#10003;</div>
            <h2>Order received</h2>
            <p>Thank you. We sent a confirmation to your email and will process your order within 24 hours.</p>
            <div className="sum">
              <strong>Order number:</strong> {done.orderId}<br />
              <strong>Total:</strong> {money(done.total)}<br />
              <strong>Products:</strong>
              <ul>{done.items.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
            {done.total > 0 && (
              <div className="sum">
                <strong>Pay by bank transfer</strong><br />
                FNB, Simone Theron<br />Account no: <strong>631 4425 1509</strong><br />Branch code: <strong>250655</strong><br />
                Reference: <strong>{done.orderId}</strong>
              </div>
            )}
            {done.total > 0 && !done.hadPop && <p>Paid already? <a className="wa" href={wa} target="_blank" rel="noopener noreferrer">Send your proof of payment on WhatsApp</a></p>}
            <button type="button" className="btn" onClick={again}>Place another order</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="of">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="wrap">
        <div className="head">
          <p className="eyebrow">Order</p>
          <h1>Deploy your systems</h1>
          <p>One form for every module. Includes the free Connectability CRM Mini.</p>
        </div>

        <form onSubmit={submit} noValidate>
          <fieldset className="card" style={{ border: 0 }}>
            <legend><span className="step">1</span>Choose your products</legend>
            <div className="grid">
              {PRODUCTS.map((p) => {
                const on = !!picked[p.id]
                const shown = applied && p.price > 0 ? disc(p.price) : p.price
                return (
                  <label key={p.id} className={'prod' + (on ? ' on' : '') + (p.price === 0 ? ' free' : '')}>
                    <input type="checkbox" checked={on} onChange={() => toggle(p)} />
                    <span className="info">
                      <span className="name">{p.name}{p.option ? <span className="badge">{p.option}</span> : null}{p.badge ? <span className={'badge' + (p.price === 0 ? ' free' : '')}>{p.badge}</span> : null}</span>
                      <span className="desc">{p.desc}</span>
                    </span>
                    <span className={'price' + (p.price === 0 ? ' free' : '')}>
                      {p.price === 0 ? 'Free' : money(shown)}
                      {applied && p.price > 0 ? <s>{money(p.price)}</s> : null}
                    </span>
                  </label>
                )
              })}
            </div>
            <p className="sub">By quote</p>
            <div className="grid">
              {QUOTES.map((q) => (
                <a key={q.name} className="prod" href={q.href} target="_blank" rel="noopener noreferrer">
                  <span className="info"><span className="name">{q.name}<span className="badge">Request a quote</span></span><span className="desc">{q.desc}</span></span>
                  <span className="price" style={{ fontSize: 13 }}>Open form</span>
                </a>
              ))}
            </div>
            <p className="sub">Coming soon</p>
            <div className="grid">
              {SOON.map((s) => (
                <div key={s.name} className="prod off" aria-disabled="true">
                  <span className="info"><span className="name">{s.name}<span className="badge soon">Coming soon</span></span><span className="desc">{s.desc}</span></span>
                  <span className="price">{money(s.price)}</span>
                </div>
              ))}
            </div>
          </fieldset>

          <fieldset className="card" style={{ border: 0 }}>
            <legend><span className="step">2</span>Your details</legend>
            <div className="row">
              <div className="field"><label className="l" htmlFor="o-first">First name *</label><input id="o-first" className="t" autoComplete="given-name" value={f.firstName} onChange={set('firstName')} maxLength={80} required /></div>
              <div className="field"><label className="l" htmlFor="o-last">Last name *</label><input id="o-last" className="t" autoComplete="family-name" value={f.lastName} onChange={set('lastName')} maxLength={80} required /></div>
            </div>
            <div className="row">
              <div className="field"><label className="l" htmlFor="o-email">Email address *</label><input id="o-email" className="t" type="email" autoComplete="email" value={f.email} onChange={set('email')} maxLength={120} required /></div>
              <div className="field"><label className="l" htmlFor="o-phone">Phone or WhatsApp</label><input id="o-phone" className="t" type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} maxLength={40} /></div>
            </div>
            <div className="field"><label className="l" htmlFor="o-company">Business or company name</label><input id="o-company" className="t" autoComplete="organization" value={f.company} onChange={set('company')} maxLength={120} /></div>
            <div className="field" style={{ marginBottom: 0 }}><label className="l" htmlFor="o-notes">Notes or special requests</label><textarea id="o-notes" value={f.notes} onChange={set('notes')} maxLength={1000} /></div>
            <div className="hp" aria-hidden="true"><label>Leave this empty<input tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} /></label></div>
          </fieldset>

          <fieldset className="card" style={{ border: 0 }}>
            <legend><span className="step">3</span>Referral code and payment</legend>
            <div className="field">
              <label className="l" htmlFor="o-code">Referral code (optional)</label>
              <div className="ref"><input id="o-code" className="t" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="e.g. PARTNER-SARAH" maxLength={30} autoComplete="off" /></div>
              {applied && <p className="ok-note">10% off applied to paid products.</p>}
              {code.trim() && !codeOk && <p className="hint" style={{ color: 'var(--bad)' }}>Use letters, numbers and dashes only.</p>}
            </div>
            <div className="pay" role="radiogroup" aria-label="Payment method">
              {['Bank Transfer', 'QR Code'].map((m) => (
                <label key={m} className={'opt' + (method === m ? ' on' : '')}>
                  <input type="radio" name="method" checked={method === m} onChange={() => setMethod(m)} />{m === 'QR Code' ? 'Scan QR code' : 'Bank transfer'}
                </label>
              ))}
            </div>
            {method === 'Bank Transfer' ? (
              <div className="bank">
                <strong>FNB, Simone Theron</strong><br />
                Account no: <strong>631 4425 1509</strong><br />
                Branch code: <strong>250655</strong><br />
                Reference: <strong>Your order number</strong> (shown after you place the order)
              </div>
            ) : (
              <div className="bank">
                <strong>Scan to pay</strong>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="qr" src="https://i.imgur.com/EH9hNgg.jpeg" alt="Payment QR code" />
                <span className="hint">Open your banking app and scan the code. You can also pay by bank transfer if you prefer.</span>
              </div>
            )}
          </fieldset>

          <fieldset className="card" style={{ border: 0 }}>
            <legend><span className="step">4</span>Proof of payment <span style={{ fontWeight: 500, color: 'var(--muted)', fontSize: 14 }}>(optional now, you can send it later)</span></legend>
            <label className={'upload' + (pop ? ' has' : '')}>
              <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" onChange={onFile} />
              <b>{pop ? 'File selected' : 'Choose your proof of payment'}</b>
              <span>{pop ? pop.name : 'JPG, PNG or PDF, up to 5 MB'}</span>
            </label>
          </fieldset>

          <div className="total" aria-live="polite">
            <div className="lab">Total{saving > 0 ? <small>You save {money(saving)}</small> : null}</div>
            <div className={'amt' + (total === 0 ? ' free' : '')}>{chosen.length === 0 ? 'R0' : total === 0 ? 'Free' : money(total)}</div>
          </div>

          {error && <div className="err" role="alert" tabIndex={-1} ref={errRef}>{error}</div>}

          <button className="btn" type="submit" disabled={busy}>{busy ? 'Placing your order...' : 'Complete order'}</button>
        </form>

        <p className="foot">Questions? WhatsApp <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer">+27 72 839 3087</a> or email <a href="mailto:dandelioncreat@outlook.com">dandelioncreat@outlook.com</a></p>
      </div>
    </div>
  )
}
