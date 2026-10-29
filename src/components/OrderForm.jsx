
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useReferral, readSavedCode } from '../lib/referral'

// The Orders Apps Script deployment (Code.gs in the Orders sheet).
// Keep the same deployment and publish a new version after changing the script.
const ORDER_ENDPOINT = process.env.NEXT_PUBLIC_ORDER_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

const MAX_POP = 5 * 1024 * 1024
const POP_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']

// Prices here are for display only. The server works out the real price from the ids.
const PRODUCTS = [
  { id: 'crm-mini', key: 'connectability', name: 'ConnectAbility: CRM Mini', price: 0, badge: 'Free', desc: 'Client tracking foundations for front-facing sales and administrative workflows.' },
  { id: 'receiptsnap', key: 'receiptsnap', name: 'ReceiptSnap', price: 299, badge: 'New', desc: 'Snap photos of receipts, extract the data with AI, and export clean CSV files for your bookkeeper.' },
  { id: 'bookability', key: 'bookability', name: 'BookAbility: CRM + Booking System', price: 499, badge: 'New', desc: 'QR code booking, a PIN-protected admin portal, email and WhatsApp confirmations, and slot blocking.' },
  { id: 'budgetability', key: 'budgetability', name: 'BudgetAbility: Household Finance Tracker', price: 499, badge: 'New', desc: 'Accounts, budgets, bills, goals and debt payoff for your household, in more than one currency, in your own Google Sheet.' },

  // AceIQ AI Study Assistant
  { id: 'aceiq', key: 'aceiq', name: 'AceIQ: AI Study Assistant', price: 199, badge: 'Year-End Special', desc: 'Turn school notes, photos and PDFs into colour-coded summaries, flashcards, mind maps and practice tests. Includes an exam timetable and progress report in English or Afrikaans, in your own Google Sheet.' },

  { id: 'content-planner', key: 'visibility', name: 'Visibility: Content Planner', price: 299, badge: 'New', desc: 'Plan your AI written posts in one calendar, check they are ready, and let clients approve them from a link.' },
  { id: 'crm-pro', key: 'scalability', name: 'Scalability: CRM Pro', price: 499, badge: 'Popular', desc: 'Advanced sales pipelines, relationship metrics, and growth tracking for account managers.' },
  { id: 'payability', key: 'payability', name: 'PayAbility: Invoice Sorter Pro', price: 499, group: 'payability', option: 'Do it yourself', desc: 'Invoices, quotes, payment links and VAT reports from your own Google Sheet. Set it up yourself with the guide.' },
  { id: 'payability-dwy', key: 'payability-dwy', name: 'PayAbility: Done-With-You Setup', price: 999, group: 'payability', option: 'Done with you', desc: 'Everything in PayAbility, set up with you on a call: your details, tax settings and first invoice.' },
  { id: 'stock-supplier', key: 'availability', name: 'Availability: Stock & Supplier Pro', price: 499, desc: 'Inventory control, procurement tracking, and supply chain management.' },
  { id: 'profitability', key: 'profitability', name: 'Profitability: Income & Expenses', price: 799, desc: 'An automated banking ledger and CSV importing for business owners and accountants.' },
  { id: 'done-with-you', key: 'adaptability', name: 'Adaptability: Done-With-You Setup', price: 999, badge: 'Recommended', desc: 'White-label setup of any module, with your logo, colours and business name.' },
]

const QUOTES = [
  { name: 'Marketability: SMM & Web Framework', desc: 'Tiered digital strategies, social media management intake, and fast website launch workflows.', href: 'https://script.google.com/macros/s/AKfycbwxnnUTTw6rkzb1579hAGHSEy90AJQDHUpYSdIsccgUzxsq00tFpQqoNwewDHQzn2ty/exec' },
  { name: 'Promotability: Corporate Swag Tracker', desc: 'Visual proofing, a local supplier directory, and markup calculators for branded merchandise.', href: 'https://script.google.com/macros/s/AKfycbwvyLaypTc0yWj5xcAIw0PmtngDvE2B4REgkzJr1u6nFcJIJ8Zz8o68RxNWRaI9gVyt/exec' },
]

const SOON = [
  { name: 'Trackability: Time & Payroll', price: 499, desc: 'Kiosk QR check-in and check-out, and automated PDF payslips.' },
  { name: 'Capability: Main Office Dashboard', price: 1499, desc: 'A master view that brings together the numbers from across the suite.' },
]

const money = (n) => 'R' + Number(n).toLocaleString('en-ZA').replace(/ /g, ' ')

function findPreselect(param) {
  if (!param) return null
  const p = param.toLowerCase()
  return PRODUCTS.find((x) => x.id === p || x.key === p) ||
    PRODUCTS.find((x) => x.name.toLowerCase() === p) ||
    PRODUCTS.find((x) => p.includes(x.key) && !x.group) ||
    PRODUCTS.find((x) => p.includes(x.key)) || null
}

const CSS = `
.of{--gold:#C9A227;--gold-d:#A68B3C;--navy:#0a1628;--navy2:#0f1f38;--cream:#faf6ea;--ink:#334155;--muted:#64748b;--line:#e2e8f0;--ok:#15803d;--bad:#b42318;
font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);padding:0 16px 64px;line-height:1.55}
.of *{box-sizing:border-box}
.of .wrap{max-width:1080px;margin:0 auto}
.of .head{text-align:center;color:#fff;margin:0 auto 26px;max-width:640px}
.of .eyebrow{color:var(--gold);font-weight:700;font-size:12.5px;letter-spacing:.16em;text-transform:uppercase;margin:0 0 10px}
.of h1{font-family:var(--font-display),Inter,sans-serif;font-size:clamp(28px,5vw,40px);line-height:1.15;margin:0 0 10px;font-weight:700;letter-spacing:-.02em}
.of .head p{color:#b6c2d6;margin:0}
.of .trust{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 18px;margin-top:14px;font-size:13px;color:#d6dde9}
.of .trust span:before{content:"\\2713";color:var(--gold);font-weight:800;margin-right:6px}
.of .steps{display:flex;gap:8px;max-width:520px;margin:0 auto 22px;padding:0;list-style:none}
.of .steps li{flex:1;text-align:center;font-size:12.5px;font-weight:600;color:#8fa0ba;border-top:3px solid #24344f;padding-top:8px}
.of .steps li.cur{color:#fff;border-color:var(--gold)}
.of .steps li.past{color:var(--gold);border-color:var(--gold)}
.of .grid2{display:grid;grid-template-columns:minmax(0,1fr);gap:20px;align-items:start}
@media(min-width:900px){.of .grid2{grid-template-columns:minmax(0,1fr) 340px}}
.of .card{background:#fff;border-radius:18px;padding:24px;box-shadow:0 8px 32px rgba(0,0,0,.22)}
.of .card h2{font-family:var(--font-display),Inter,sans-serif;font-size:20px;color:var(--navy);margin:0 0 4px}
.of .card .lead{color:var(--muted);font-size:14px;margin:0 0 18px}
.of .list{display:grid;gap:10px}
.of .prod{display:flex;gap:14px;align-items:flex-start;border:2px solid var(--line);border-radius:14px;padding:14px 15px;cursor:pointer;background:#fff;transition:border-color .18s,background .18s,transform .18s cubic-bezier(.2,.8,.2,1)}
.of .prod:hover{border-color:var(--gold)}
.of .prod:active{transform:scale(.985)}
.of .prod:focus-within{outline:3px solid rgba(201,162,39,.45);outline-offset:2px}
.of .prod.on{border-color:var(--gold);background:rgba(201,162,39,.09)}
.of .prod.off{opacity:.6;cursor:default}
.of .prod.off:active{transform:none}
.of .prod input{width:22px;height:22px;margin-top:2px;accent-color:var(--gold);flex-shrink:0;cursor:inherit}
.of .info{flex:1;min-width:0}
.of .name{font-weight:650;color:var(--navy);font-size:15px;display:flex;flex-wrap:wrap;gap:6px 8px;align-items:center;margin-bottom:3px}
.of .desc{font-size:13.5px;color:var(--muted)}
.of .price{font-weight:700;font-size:17px;color:var(--gold-d);white-space:nowrap;text-align:right}
.of .price.free{color:var(--ok)}
.of .price s{display:block;font-size:12.5px;color:var(--muted);font-weight:500}
.of .badge{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:2px 8px;border-radius:5px;background:rgba(201,162,39,.18);color:var(--gold-d)}
.of .badge.free{background:rgba(21,128,61,.14);color:var(--ok)}
.of .badge.soon{background:#eef2f7;color:var(--muted)}
.of .sub{font-size:12.5px;color:var(--muted);margin:22px 0 10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em}
.of .row{display:grid;gap:14px;grid-template-columns:minmax(0,1fr)}
@media(min-width:560px){.of .row{grid-template-columns:1fr 1fr}}
.of .field{margin-bottom:14px}
.of label.l{display:block;font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin:0 0 6px}
.of .t,.of textarea{width:100%;padding:13px 14px;border:2px solid var(--line);border-radius:12px;font:inherit;font-size:16px;color:var(--ink);background:#fff;transition:border-color .15s,box-shadow .15s}
.of textarea{min-height:92px;resize:vertical}
.of .t:focus,.of textarea:focus{outline:0;border-color:var(--gold);box-shadow:0 0 0 4px rgba(201,162,39,.2)}
.of .t.bad{border-color:var(--bad)}
.of .fe{color:var(--bad);font-size:13px;margin:6px 0 0}
.of .hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.of .ref{display:flex;gap:8px}
.of .note{font-size:13.5px;margin:8px 0 0}
.of .note.ok{color:var(--ok);font-weight:600}
.of .note.bad{color:var(--bad)}
.of .note.mute{color:var(--muted)}
.of .pay{display:grid;gap:10px;margin-bottom:14px}
.of .opt{display:flex;gap:12px;align-items:flex-start;border:2px solid var(--line);border-radius:14px;padding:14px 15px;cursor:pointer;transition:border-color .18s,background .18s}
.of .opt:hover{border-color:var(--gold)}
.of .opt.on{border-color:var(--gold);background:rgba(201,162,39,.09)}
.of .opt input{margin-top:3px;accent-color:var(--gold);width:20px;height:20px}
.of .opt b{display:block;color:var(--navy);font-size:15px}
.of .opt span{font-size:13.5px;color:var(--muted)}
.of .bank{background:var(--cream);border:1px solid #eadfb8;border-radius:14px;padding:16px;font-size:14.5px;margin-bottom:14px}
.of .bank dl{display:grid;grid-template-columns:auto 1fr;gap:6px 16px;margin:8px 0 0}
.of .bank dt{color:var(--muted)}
.of .bank dd{margin:0;font-weight:700;color:var(--navy)}
.of .qr{display:block;width:190px;max-width:100%;border-radius:10px;margin:10px 0}
.of .upload{display:block;border:2px dashed #cbd5e1;border-radius:14px;padding:18px;text-align:center;cursor:pointer;color:var(--muted);font-size:14px;transition:border-color .18s,background .18s}
.of .upload:hover{border-color:var(--gold)}
.of .upload.has{border-style:solid;border-color:var(--ok);background:rgba(21,128,61,.06)}
.of .upload input{display:none}
.of .upload b{display:block;color:var(--navy);font-size:15px;margin-bottom:2px}
.of .nav{display:flex;gap:10px;justify-content:space-between;margin-top:22px;flex-wrap:wrap}
.of .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 24px;border:0;border-radius:12px;background:var(--gold);color:var(--navy);font:inherit;font-weight:700;font-size:15.5px;cursor:pointer;text-decoration:none;min-height:50px;transition:background .18s,transform .18s cubic-bezier(.2,.8,.2,1),box-shadow .18s}
.of .btn:hover{background:#d8b43a;box-shadow:0 6px 18px rgba(201,162,39,.35)}
.of .btn:active{transform:scale(.97)}
.of .btn:disabled{opacity:.6;cursor:wait;transform:none}
.of .btn:focus-visible,.of .back:focus-visible,.of .link:focus-visible{outline:3px solid rgba(201,162,39,.6);outline-offset:2px}
.of .btn.wide{flex:1}
.of .back{background:transparent;border:2px solid var(--line);color:var(--ink);border-radius:12px;padding:12px 20px;font:inherit;font-weight:600;cursor:pointer;min-height:50px}
.of .back:hover{border-color:var(--gold)}
.of .err{background:#fef3f2;border:1px solid #fecdca;color:var(--bad);border-radius:12px;padding:12px 14px;margin-top:16px;font-size:14.5px}
.of .err:focus{outline:2px solid var(--bad)}
.of .side{background:#fff;border-radius:18px;padding:22px;box-shadow:0 8px 32px rgba(0,0,0,.22)}
@media(min-width:900px){.of .side{position:sticky;top:96px}}
.of .side h3{font-family:var(--font-display),Inter,sans-serif;font-size:16px;color:var(--navy);margin:0 0 12px}
.of .li{display:flex;justify-content:space-between;gap:12px;font-size:14px;padding:8px 0;border-bottom:1px solid var(--line)}
.of .li small{display:block;color:var(--muted);font-size:12px}
.of .li b{white-space:nowrap;color:var(--navy)}
.of .empty{color:var(--muted);font-size:14px;margin:0 0 6px}
.of .sv{display:flex;justify-content:space-between;font-size:14px;color:var(--ok);font-weight:600;padding-top:10px}
.of .tot{display:flex;justify-content:space-between;align-items:baseline;margin-top:10px;padding-top:12px;border-top:2px solid var(--navy)}
.of .tot span{font-weight:700;color:var(--navy)}
.of .tot b{font-family:var(--font-display),Inter,sans-serif;font-size:26px;color:var(--navy)}
.of .fine{font-size:12.5px;color:var(--muted);margin:12px 0 0}
.of .assure{list-style:none;margin:14px 0 0;padding:14px 0 0;border-top:1px solid var(--line);font-size:13px;color:var(--muted);display:grid;gap:6px}
.of .assure li:before{content:"\\2713";color:var(--ok);font-weight:800;margin-right:8px}
.of .foot{text-align:center;color:#b6c2d6;font-size:14px;margin-top:26px}
.of .foot a,.of .link{color:var(--gold)}
.of .done{max-width:560px;margin:0 auto;text-align:center}
.of .tick{width:68px;height:68px;border-radius:50%;background:var(--ok);color:#fff;display:grid;place-items:center;font-size:32px;margin:0 auto 16px}
.of .done .box{text-align:left;background:#f8fafc;border-radius:14px;padding:16px;margin:16px 0;font-size:14.5px}
.of .done ul{margin:6px 0 0;padding-left:20px}
.of .wa{display:inline-block;margin-top:6px;color:#0a1628;font-weight:700}
@media (prefers-reduced-motion:reduce){.of *{transition:none!important}}
`

const STEP_NAMES = ['Choose', 'Your details', 'Pay']

function Summary({ chosen, total, saving, applied, percent }) {
  return (
    <aside className="side" aria-label="Order summary">
      <h3>Your order</h3>
      {chosen.length === 0 ? <p className="empty">Nothing chosen yet. Pick a module to get started.</p> : chosen.map((p) => (
        <div className="li" key={p.id}>
          <span>{p.name.split(':')[0]}{p.option ? <small>{p.option}</small> : null}</span>
          <b>{p.price === 0 ? 'Free' : money(applied ? Math.round(p.price * (1 - percent / 100)) : p.price)}</b>
        </div>
      ))}
      {saving > 0 && <div className="sv"><span>Referral saving</span><span>-{money(saving)}</span></div>}
      <div className="tot" aria-live="polite"><span>Total</span><b>{chosen.length === 0 ? 'R0' : total === 0 ? 'Free' : money(total)}</b></div>
      <p className="fine">Prices in rand. Pay once, no subscription. You own the system.</p>
      <ul className="assure">
        <li>Licence keys emailed once payment clears</li>
        <li>Branded invoice sent to your inbox</li>
        <li>Replies within 24 hours</li>
      </ul>
    </aside>
  )
}

export default function OrderForm() {
  const [step, setStep] = useState(1)
  const [picked, setPicked] = useState({})
  const [f, setF] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', notes: '', website: '' })
  const [touched, setTouched] = useState({})
  const [method, setMethod] = useState('Card')
  const [code, setCode] = useState('')
  const [pop, setPop] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(null)
  const requestId = useRef('')
  const errRef = useRef(null)
  const topRef = useRef(null)
  const stepSeen = useRef(0)

  const ref = useReferral(code)
  const applied = ref.valid
  const percent = ref.percent

  useEffect(() => {
    requestId.current = 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10)
    stepSeen.current = Date.now()
    try {
      const saved = readSavedCode()
      if (saved) setCode(saved)
      const pre = findPreselect(new URLSearchParams(window.location.search).get('product'))
      if (pre) setPicked({ [pre.id]: true })
    } catch (e) {}
    const back = (ev) => { if (ev.persisted) setBusy(false) }
    window.addEventListener('pageshow', back)
    return () => window.removeEventListener('pageshow', back)
  }, [])

  const chosen = useMemo(() => PRODUCTS.filter((p) => picked[p.id]), [picked])
  const priceOf = (p) => (applied && p.price > 0 ? Math.round(p.price * (1 - percent / 100)) : p.price)
  const total = chosen.reduce((s, p) => s + priceOf(p), 0)
  const saving = chosen.reduce((s, p) => s + (p.price - priceOf(p)), 0)

  function toggle(p) {
    setError('')
    setPicked((cur) => {
      const next = { ...cur }
      if (next[p.id]) { delete next[p.id]; return next }
      if (p.group) PRODUCTS.filter((x) => x.group === p.group).forEach((x) => delete next[x.id])
      next[p.id] = true
      return next
    })
  }

  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }))
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }))
  const errs = {
    firstName: f.firstName.trim() ? '' : 'Please enter your first name.',
    lastName: f.lastName.trim() ? '' : 'Please enter your last name.',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()) ? '' : 'Please enter a valid email address.',
  }
  const detailsOk = !errs.firstName && !errs.lastName && !errs.email

  function fail(msg) {
    setError(msg)
    setTimeout(() => { try { errRef.current && errRef.current.focus() } catch (e) {} }, 0)
  }
  function go(n) {
    setError('')
    setStep(n)
    setTimeout(() => { try { topRef.current && topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) } catch (e) {} }, 0)
  }
  function next() {
    if (step === 1) {
      if (!chosen.length) return fail('Please choose at least one product.')
      return go(2)
    }
    if (step === 2) {
      setTouched({ firstName: true, lastName: true, email: true })
      if (!detailsOk) return fail('Please fix the highlighted details.')
      return go(3)
    }
  }

  function onFile(e) {
    const file = e.target.files && e.target.files[0]
    setError('')
    if (!file) { setPop(null); return }
    if (!POP_TYPES.includes(file.type)) { setPop(null); fail('The proof of payment must be a JPG, PNG, WebP or PDF file.'); e.target.value = ''; return }
    if (file.size > MAX_POP) { setPop(null); fail('That file is bigger than 5 MB. Please use a smaller file.'); e.target.value = ''; return }
    const r = new FileReader()
    r.onload = () => setPop({ name: file.name, data: String(r.result) })
    r.onerror = () => { setPop(null); fail('That file could not be read.') }
    r.readAsDataURL(file)
  }

  async function submit(e) {
    e.preventDefault()
    if (busy) return
    setError('')
    if (!chosen.length) { go(1); return fail('Please choose at least one product.') }
    if (!detailsOk) { go(2); setTouched({ firstName: true, lastName: true, email: true }); return fail('Please fix the highlighted details.') }
    const trimmed = code.trim().toUpperCase()
    if (trimmed && ref.status === 'checking') return fail('One moment, we are still checking your referral code.')
    if (trimmed && !applied && ref.status !== 'error') return fail('That referral code is not valid. Check it, or clear it to continue without.')
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
          elapsed: Date.now() - stepSeen.current,
          paymentMethod: total > 0 ? method : 'Bank Transfer',
          partnerCode: trimmed && (applied || ref.status === 'error') ? trimmed : '',
          popFile: pop && method !== 'Card' ? pop.data : '', popFileName: pop ? pop.name : '',
        }),
      })
      const data = await res.json()
      if (data && data.success && data.paymentUrl) { window.location.assign(data.paymentUrl); return }
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
    setDone(null); setPicked({}); setPop(null); setError(''); setStep(1); setTouched({})
    setF({ firstName: '', lastName: '', email: '', phone: '', company: '', notes: '', website: '' })
    requestId.current = 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10)
  }

  if (done) {
    const invoice = 'INV-' + String(done.orderId).replace(/^DC-/, '')
    const wa = 'https://wa.me/27728393087?text=' + encodeURIComponent('Hi, here is my proof of payment for order ' + done.orderId)
    return (
      <div className="of"><style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="wrap"><div className="card done" role="status">
          <div className="tick" aria-hidden="true">&#10003;</div>
          <h2>Order received</h2>
          <p className="lead">We emailed your confirmation and invoice. Check your spam folder if it is not there in a few minutes.</p>
          <div className="box">
            <strong>Order number:</strong> {done.orderId}<br />
            <strong>Invoice:</strong> {invoice}<br />
            <strong>Total:</strong> {money(done.total)}
            <ul>{done.items.map((n) => <li key={n}>{n}</li>)}</ul>
          </div>
          {done.total > 0 && (
            <div className="bank" style={{ textAlign: 'left' }}>
              <strong>Pay by EFT</strong>
              <dl><dt>Bank</dt><dd>FNB</dd><dt>Account name</dt><dd>Simone Theron</dd><dt>Account no</dt><dd>631 4425 1509</dd><dt>Branch code</dt><dd>250655</dd><dt>Reference</dt><dd>{done.orderId}</dd></dl>
            </div>
          )}
          {done.total > 0 && !done.hadPop && <p className="lead">Already paid? <a className="wa" href={wa} target="_blank" rel="noopener noreferrer">Send your proof of payment on WhatsApp</a></p>}
          <p className="lead">Your licence keys follow by email as soon as payment is confirmed, usually within 24 hours.</p>
          <button type="button" className="btn" onClick={again}>Place another order</button>
        </div></div>
      </div>
    )
  }

  const err = (k) => (touched[k] && errs[k] ? <p className="fe" id={'e-' + k} role="alert">{errs[k]}</p> : null)
  const cls = (k) => 't' + (touched[k] && errs[k] ? ' bad' : '')
  const aria = (k) => ({ 'aria-invalid': touched[k] && errs[k] ? 'true' : undefined, 'aria-describedby': touched[k] && errs[k] ? 'e-' + k : undefined })

  return (
    <div className="of">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="wrap" ref={topRef}>
        <div className="head">
          <p className="eyebrow">Order</p>
          <h1>Get your systems</h1>
          <p>One form for every module. Includes the free ConnectAbility CRM Mini.</p>
          <div className="trust"><span>Pay once</span><span>No subscription</span><span>Branded invoice</span></div>
        </div>

        <ol className="steps" aria-label="Progress">
          {STEP_NAMES.map((n, i) => <li key={n} className={step === i + 1 ? 'cur' : step > i + 1 ? 'past' : ''} aria-current={step === i + 1 ? 'step' : undefined}>{i + 1}. {n}</li>)}
        </ol>

        <form onSubmit={submit} noValidate>
          <div className="grid2">
            <div className="card">
              {step === 1 && (<fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                <legend style={{ padding: 0 }}><h2>Choose your products</h2></legend>
                <p className="lead">Pick one or more. Add as many as you like.</p>
                <div className="list">
                  {PRODUCTS.map((p) => {
                    const on = !!picked[p.id]
                    return (
                      <label key={p.id} className={'prod' + (on ? ' on' : '')}>
                        <input type="checkbox" checked={on} onChange={() => toggle(p)} />
                        <span className="info">
                          <span className="name">{p.name}{p.option ? <span className="badge">{p.option}</span> : null}{p.badge ? <span className={'badge' + (p.price === 0 ? ' free' : '')}>{p.badge}</span> : null}</span>
                          <span className="desc">{p.desc}</span>
                        </span>
                        <span className={'price' + (p.price === 0 ? ' free' : '')}>
                          {p.price === 0 ? 'Free' : money(priceOf(p))}
                          {applied && p.price > 0 ? <s>{money(p.price)}</s> : null}
                        </span>
                      </label>
                    )
                  })}
                </div>
                <p className="sub">By quote</p>
                <div className="list">
                  {QUOTES.map((q) => (
                    <a key={q.name} className="prod" href={q.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <span className="info"><span className="name">{q.name}<span className="badge">Request a quote</span></span><span className="desc">{q.desc}</span></span>
                      <span className="price" style={{ fontSize: 13 }}>Open form</span>
                    </a>
                  ))}
                </div>
                <p className="sub">Coming soon</p>
                <div className="list">
                  {SOON.map((s) => (
                    <div key={s.name} className="prod off" aria-disabled="true">
                      <span className="info"><span className="name">{s.name}<span className="badge soon">Coming soon</span></span><span className="desc">{s.desc}</span></span>
                      <span className="price">{money(s.price)}</span>
                    </div>
                  ))}
                </div>
              </fieldset>)}

              {step === 2 && (<fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                <legend style={{ padding: 0 }}><h2>Your details</h2></legend>
                <p className="lead">We use these for your invoice and licence keys.</p>
                <div className="row">
                  <div className="field"><label className="l" htmlFor="o-first">First name *</label><input id="o-first" className={cls('firstName')} autoComplete="given-name" value={f.firstName} onChange={set('firstName')} onBlur={blur('firstName')} maxLength={80} required {...aria('firstName')} />{err('firstName')}</div>
                  <div className="field"><label className="l" htmlFor="o-last">Last name *</label><input id="o-last" className={cls('lastName')} autoComplete="family-name" value={f.lastName} onChange={set('lastName')} onBlur={blur('lastName')} maxLength={80} required {...aria('lastName')} />{err('lastName')}</div>
                </div>
                <div className="row">
                  <div className="field"><label className="l" htmlFor="o-email">Email address *</label><input id="o-email" className={cls('email')} type="email" inputMode="email" autoComplete="email" value={f.email} onChange={set('email')} onBlur={blur('email')} maxLength={120} required {...aria('email')} />{err('email')}</div>
                  <div className="field"><label className="l" htmlFor="o-phone">Phone or WhatsApp</label><input id="o-phone" className="t" type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} maxLength={40} /></div>
                </div>
                <div className="field"><label className="l" htmlFor="o-company">Business name (shown on your invoice)</label><input id="o-company" className="t" autoComplete="organization" value={f.company} onChange={set('company')} maxLength={120} /></div>
                <div className="field" style={{ marginBottom: 0 }}><label className="l" htmlFor="o-notes">Notes or special requests</label><textarea id="o-notes" value={f.notes} onChange={set('notes')} maxLength={1000} /></div>
                <div className="hp" aria-hidden="true"><label>Leave this empty<input tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} /></label></div>
              </fieldset>)}

              {step === 3 && (<fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                <legend style={{ padding: 0 }}><h2>Referral code and payment</h2></legend>
                <p className="lead">Have a referral code? Add it for 10% off paid modules.</p>
                <div className="field">
                  <label className="l" htmlFor="o-code">Referral code (optional)</label>
                  <div className="ref"><input id="o-code" className="t" value={code} onChange={(e) => setCode(e.target.value.toUpperCase().replace(/\s/g, ''))} placeholder="e.g. SARAHJON-47" maxLength={30} autoComplete="off" autoCapitalize="characters" spellCheck={false} /></div>
                  <div aria-live="polite">
                    {ref.status === 'checking' && <p className="note mute">Checking your code...</p>}
                    {applied && <p className="note ok">Code applied. {percent}% off paid products.</p>}
                    {ref.status === 'invalid' && <p className="note bad">We could not find that code. Check the spelling, or clear it to continue.</p>}
                    {ref.status === 'error' && <p className="note mute">We could not check the code right now. It will be checked when you place the order.</p>}
                  </div>
                </div>

                {total > 0 && (<>
                  <div className="pay" role="radiogroup" aria-label="Payment method">
                    <label className={'opt' + (method === 'Card' ? ' on' : '')}><input type="radio" name="method" checked={method === 'Card'} onChange={() => setMethod('Card')} /><div><b>Pay by card</b><span>Secure checkout with Paystack. Keys are emailed the moment it clears.</span></div></label>
                    <label className={'opt' + (method === 'Bank Transfer' ? ' on' : '')}><input type="radio" name="method" checked={method === 'Bank Transfer'} onChange={() => setMethod('Bank Transfer')} /><div><b>Bank transfer (EFT)</b><span>Pay from your banking app. Keys follow once we see the payment.</span></div></label>
                    <label className={'opt' + (method === 'QR Code' ? ' on' : '')}><input type="radio" name="method" checked={method === 'QR Code'} onChange={() => setMethod('QR Code')} /><div><b>Scan a QR code</b><span>Scan with your banking app, no typing needed.</span></div></label>
                  </div>
                  {method === 'Bank Transfer' && (
                    <div className="bank"><strong>FNB, Simone Theron</strong>
                      <dl><dt>Account no</dt><dd>631 4425 1509</dd><dt>Branch code</dt><dd>250655</dd><dt>Reference</dt><dd>Your order number, shown after you order</dd></dl>
                    </div>
                  )}
                  {method === 'QR Code' && (
                    <div className="bank"><strong>Scan to pay</strong>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="qr" src="https://i.imgur.com/EH9hNgg.jpeg" alt="Payment QR code" />
                      <span style={{ color: 'var(--muted)', fontSize: 13.5 }}>Use your order number as the reference once you have it.</span>
                    </div>
                  )}
                  {method !== 'Card' && (
                    <label className={'upload' + (pop ? ' has' : '')}>
                      <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" onChange={onFile} />
                      <b>{pop ? 'Proof attached' : 'Attach proof of payment (optional)'}</b>
                      <span>{pop ? pop.name : 'JPG, PNG or PDF, up to 5 MB. You can also send it later.'}</span>
                    </label>
                  )}
                </>)}
                {total === 0 && <div className="bank">Your order is free. No payment needed. Your licence key is emailed straight away.</div>}

                <div className="bank" style={{ marginTop: 14, marginBottom: 0 }}>
                  <strong>Review</strong><br />
                  {f.firstName} {f.lastName}, {f.email}{f.company ? ', ' + f.company : ''}
                  {' '}<button type="button" className="link" style={{ background: 'none', border: 0, cursor: 'pointer', font: 'inherit', textDecoration: 'underline', color: 'var(--gold-d)' }} onClick={() => go(2)}>Edit</button>
                </div>
              </fieldset>)}

              {error && <div className="err" role="alert" tabIndex={-1} ref={errRef}>{error}</div>}

              <div className="nav">
                {step > 1 ? <button type="button" className="back" onClick={() => go(step - 1)}>Back</button> : <span />}
                {step < 3
                  ? <button key="next" type="button" className="btn wide" onClick={next}>{step === 1 ? 'Continue to your details' : 'Continue to payment'}</button>
                  : <button key="submit" className="btn wide" type="submit" disabled={busy}>{busy ? (method === 'Card' && total > 0 ? 'Taking you to payment...' : 'Placing your order...') : (method === 'Card' && total > 0 ? 'Continue to secure payment' : 'Place order')}</button>}
              </div>
            </div>

            <Summary chosen={chosen} total={total} saving={saving} applied={applied} percent={percent} />
          </div>
        </form>

        <p className="foot">Questions? WhatsApp <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer">+27 72 839 3087</a> or email <a href="mailto:dandelioncreat@outlook.com">dandelioncreat@outlook.com</a></p>
      </div>
    </div>
  )
}
