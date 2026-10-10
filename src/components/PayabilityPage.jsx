// Payability sales page. Static content, styled inside .pb so it cannot affect the rest of the site.
const CSS = `.pb{--navy:#0F172A;--navy2:#1E293B;--gold:#C9A84C;--cream:#F5F1E8;--ink:#0F172A;--muted:#475569;--line:#E4DECF;--white:#fff}
.pb, .pb *{box-sizing:border-box}
.pb{margin:0;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased}
.pb a{color:inherit}
.pb .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.pb header.top{background:var(--navy);color:#fff}
.pb header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.pb .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.pb .logo .mono{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--gold);color:var(--navy);font-size:13px;font-weight:800}
.pb .top a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.pb .top a.cta:hover{background:var(--gold);color:var(--navy)}
.pb .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.pb .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.pb .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.pb h1{font-size:clamp(34px,5vw,54px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em}
.pb .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.pb .btns{display:flex;gap:12px;flex-wrap:wrap}
.pb .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.pb .btn-gold{background:var(--gold);color:var(--navy)}
.pb .btn-gold:hover{filter:brightness(1.07)}
.pb .btn-line{border:1px solid #475569;color:#fff}
.pb .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.pb .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.pb .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.pb .mock .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.pb .mock .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.pb .mock .bar span{margin-left:8px;font-size:12px;color:#64748B}
.pb .mock .body{padding:18px}
.pb .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.pb .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.pb .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.pb .stat b{font-size:20px}
.pb .stat.gold{border-color:var(--gold);background:#FBF7EA}
.pb .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.pb .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap}
.pb .p-paid{background:#DCFCE7;color:#166534}
.pb .p-sent{background:#DBEAFE;color:#1E40AF}
.pb .p-over{background:#FEE2E2;color:#991B1B}
.pb section{padding:72px 0}
.pb h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em}
.pb .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.pb .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.pb .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.pb .card h3{margin:0 0 8px;font-size:18px}
.pb .card p{margin:0;color:var(--muted);font-size:15px}
.pb .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.pb .band{background:var(--navy);color:#fff}
.pb .band h2{color:#fff}
.pb .band .sub{color:#CBD5E1}
.pb .band .card{background:var(--navy2);border-color:#334155}
.pb .band .card p{color:#CBD5E1}
.pb .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.pb .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.pb .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.pb .feat b{display:block}
.pb .feat span{color:var(--muted);font-size:15px}
.pb .price{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;max-width:820px}
.pb .price .card{padding:30px}
.pb .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.pb .price .card.hl{border:2px solid var(--gold)}
.pb .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.pb .price li{margin:6px 0}
.pb .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.pb details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.pb summary{cursor:pointer;font-weight:600}
.pb details p{margin:10px 0 0;color:var(--muted)}
.pb .final{text-align:center}
.pb .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.pb footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.pb footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
@media (max-width:860px){.pb .hero .grid{grid-template-columns:minmax(0,1fr)}
.pb .cards, .pb .feat, .pb .price{grid-template-columns:minmax(0,1fr)}
.pb section{padding:52px 0}
.pb .hero{padding:44px 0 56px}
}
`

const BODY = `<header class="top"><div class="wrap">
  <a class="logo" href="https://www.dandelioncreations.co.za/"><span class="mono">DC</span>Dandelion Creations</a>
  <a class="cta" href="#buy">Get Payability</a>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">Payability</p>
    <h1>Invoicing you own, not rent.</h1>
    <p class="lead">Invoices, quotes, payment links and VAT reports, running from your own Google Sheet. Your clients and your numbers stay in your account. You pay once and there is no monthly fee.</p>
    <div class="btns">
      <a class="btn btn-gold" href="#buy">Get Payability from R499</a>
      <a class="btn btn-line" href="#how">See how it works</a>
    </div>
    <p class="fine">Pay once. No subscription. 72 hour trial included.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private Payability link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Owed to you</small><b>R 48 250,00</b></div>
        <div class="stat"><small>Paid this month</small><b>R 31 900,00</b></div>
      </div>
      <div class="row"><span>INV-0042 &middot; Mokoena Hardware</span><span class="pill p-over">Overdue</span></div>
      <div class="row"><span>INV-0043 &middot; Lakeview Dental</span><span class="pill p-sent">Sent</span></div>
      <div class="row"><span>INV-0044 &middot; Pretorius &amp; Co</span><span class="pill p-paid">Paid</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>Most invoicing tools charge you every month, forever.</h2>
  <p class="sub">Payability is a module you deploy once. It lives in a Google Sheet that belongs to you, and you open it from one private link.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>Pay once. If we vanish tomorrow, your system keeps working, because it runs in your own Google account.</p></div>
    <div class="card"><h3>Your data stays yours</h3><p>Clients, invoices and payments are stored in your own spreadsheet. Nothing is copied to our servers.</p></div>
    <div class="card"><h3>Built for VAT</h3><p>15% VAT, zero-rated and exempt lines, credit notes, and a VAT report you can work from when you do your return.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From purchase to your first invoice in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Copy the sheet</h3><p>You receive your Payability sheet and licence key after payment.</p></div>
    <div class="card"><span class="n">2</span><h3>Deploy it once</h3><p>A short guide walks you through running setup and deploying it as a web app from your own account.</p></div>
    <div class="card"><span class="n">3</span><h3>Open your private link</h3><p>Bookmark one link. Every page, from invoices to reports, opens from there.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">Everything a small business needs to bill properly and get paid.</p>
  <ul class="feat">
    <li><b>Invoices</b><span>Line items, discounts, tax codes and multiple currencies. Saved as a draft, then sent when you are ready.</span></li>
    <li><b>Email and PDF</b><span>Send the invoice with a PDF attached, or download the PDF yourself.</span></li>
    <li><b>Payment links</b><span>Add a PayFast or Yoco link so clients can pay by card from the email.</span></li>
    <li><b>Quotes</b><span>Send a quote, mark it accepted, and turn it into an invoice in one click.</span></li>
    <li><b>Credit notes and payments</b><span>Record part payments and credit notes. Balances update on their own.</span></li>
    <li><b>Debtors aging</b><span>See who owes you and how late they are, grouped into 30, 60 and 90 days.</span></li>
    <li><b>Client statements</b><span>Every invoice, payment and credit note for a client, with a running balance.</span></li>
    <li><b>VAT report</b><span>Output and input VAT by month, quarter or year, with a CSV download.</span></li>
    <li><b>Expenses</b><span>Log expenses with their VAT so your input VAT is ready at return time.</span></li>
    <li><b>Recurring invoices</b><span>Retainers and subscriptions made on a schedule, saved as drafts or emailed for you.</span></li>
    <li><b>CSV import and export</b><span>Bring in your clients and past invoices. Take your data out whenever you like.</span></li>
    <li><b>Private by design</b><span>A long private key on your link, and a lockout after repeated wrong guesses.</span></li>
  </ul>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>Two ways to get it</h2>
  <p class="sub" style="margin-bottom:28px">One payment. No monthly fee, no renewal.</p>
  <div class="price">
    <div class="card" style="background:#fff;color:var(--ink);border-color:var(--line)">
      <h3>Do it yourself</h3>
      <div class="big">R499</div><div style="color:var(--muted);font-size:14px">once off</div>
      <ul><li>Payability sheet and licence key</li><li>Step by step deploy guide</li><li>72 hour trial before you commit</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=payability">Order now</a>
    </div>
    <div class="card hl" style="background:#fff;color:var(--ink)">
      <span class="tag">Recommended</span>
      <h3>Done with you</h3>
      <div class="big">R999</div><div style="color:var(--muted);font-size:14px">once off</div>
      <ul><li>Everything in Do it yourself</li><li>We set it up with you on a call</li><li>Your company details, tax settings and first invoice done</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=payability-dwy">Order now</a>
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Do I need to know how to code?</summary><p>No. Deploying is a handful of clicks and the guide shows each one. Choose Done with you and we do it together.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see your clients or invoices.</p></details>
  <details><summary>Is there a monthly fee?</summary><p>No. You pay once. Sending email and generating PDFs use your own Google account.</p></details>
  <details><summary>Does it work for VAT vendors and non-vendors?</summary><p>Both. You choose your tax settings, and zero-rated and exempt lines are supported.</p></details>
  <details><summary>Can I take my data with me?</summary><p>Yes. Everything is already in your sheet, and you can export clients and invoices to CSV any time.</p></details>
  <details><summary>Can I try it first?</summary><p>Yes. Payability includes a 72 hour trial, so you can create real invoices before you decide.</p></details>
  <details><summary>Is the VAT report accepted by SARS?</summary><p>It is a working report to help you complete your return. Check it against your records or with your accountant before you submit.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Stop renting your invoicing.</h2>
  <p>Deploy Payability once and send your next invoice from a system you own.</p>
  <a class="btn btn-gold" href="#buy">Get Payability from R499</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span>WhatsApp +27 72 839 3087 &middot; dandelioncreat@outlook.com</span>
</div></footer>`

const LD = {"@context": "https://schema.org", "@type": "Product", "name": "Payability", "description": "Invoicing system that runs from your own Google Sheet. Invoices, quotes, payment links and VAT reports.", "brand": {"@type": "Brand", "name": "Dandelion Creations"}, "offers": [{"@type": "Offer", "name": "Do it yourself", "price": "499", "priceCurrency": "ZAR", "availability": "https://schema.org/InStock"}, {"@type": "Offer", "name": "Done with you", "price": "999", "priceCurrency": "ZAR", "availability": "https://schema.org/InStock"}]}

export default function PayabilityPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div className="pb" dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
