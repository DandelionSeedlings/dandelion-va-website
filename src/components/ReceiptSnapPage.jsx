// ReceiptSnap sales page. Static content, styled inside .rs so it cannot affect the rest of the site.
const CSS = `.rs{--navy:#0a1628;--navy2:#0f1d33;--gold:#C9A227;--cream:#F5F1E8;--ink:#0a1628;--muted:#475569;--line:#E4DECF;--white:#fff}
.rs, .rs *{box-sizing:border-box}
.rs{margin:0;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased}
.rs a{color:inherit}
.rs .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.rs header.top{background:var(--navy);color:#fff}
.rs header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.rs .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.rs .logo img.mono{background:none;object-fit:contain;border-radius:6px}
.rs .logo .mono{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--gold);color:var(--navy);font-size:13px;font-weight:800}
.rs .top a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.rs .top a.cta:hover{background:var(--gold);color:var(--navy)}
.rs .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.rs .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.rs .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.rs h1{font-size:clamp(34px,5vw,54px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em}
.rs .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.rs .btns{display:flex;gap:12px;flex-wrap:wrap}
.rs .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.rs .btn-gold{background:var(--gold);color:var(--navy)}
.rs .btn-gold:hover{filter:brightness(1.07)}
.rs .btn-line{border:1px solid #475569;color:#fff}
.rs .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.rs .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.rs .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.rs .mock .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.rs .mock .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.rs .mock .bar span{margin-left:8px;font-size:12px;color:#64748B}
.rs .mock .body{padding:18px}
.rs .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.rs .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.rs .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.rs .stat b{font-size:20px}
.rs .stat.gold{border-color:var(--gold);background:#FBF7EA}
.rs .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.rs .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap}
.rs .p-paid{background:#DCFCE7;color:#166534}
.rs .p-sent{background:#DBEAFE;color:#1E40AF}
.rs .p-over{background:#FEE2E2;color:#991B1B}
.rs section{padding:72px 0}
.rs h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em}
.rs .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.rs .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.rs .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.rs .card h3{margin:0 0 8px;font-size:18px}
.rs .card p{margin:0;color:var(--muted);font-size:15px}
.rs .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.rs .band{background:var(--navy);color:#fff}
.rs .band h2{color:#fff}
.rs .band .sub{color:#CBD5E1}
.rs .band .card{background:var(--navy2);border-color:#334155}
.rs .band .card p{color:#CBD5E1}
.rs .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.rs .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.rs .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.rs .feat b{display:block}
.rs .feat span{color:var(--muted);font-size:15px}
.rs .price{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;max-width:820px}
.rs .price .card{padding:30px}
.rs .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.rs .price .card.hl{border:2px solid var(--gold)}
.rs .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.rs .price li{margin:6px 0}
.rs .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.rs details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.rs summary{cursor:pointer;font-weight:600}
.rs details p{margin:10px 0 0;color:var(--muted)}
.rs .final{text-align:center}
.rs .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.rs footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.rs footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
@media (max-width:860px){.rs .hero .grid{grid-template-columns:minmax(0,1fr)}
.rs .cards, .rs .feat, .rs .price{grid-template-columns:minmax(0,1fr)}
.rs section{padding:52px 0}
.rs .hero{padding:44px 0 56px}
}
.rs .p-lead{background:#DBEAFE;color:#1E40AF}
.rs .p-qual{background:#FEF3C7;color:#92400E}
.rs .p-cust{background:#DCFCE7;color:#166534}
.rs .p-today{background:#FEE2E2;color:#991B1B}
.rs .price.one{grid-template-columns:minmax(0,1fr);max-width:460px}

.rs .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.rs .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.rs .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.rs .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.rs .shotframe img{display:block;width:100%;height:auto}
.rs .shots{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,.55fr);gap:18px;margin-top:18px;align-items:start}
.rs .shots .shotframe.phone{border-radius:22px}
.rs .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
@media (max-width:860px){.rs .shots{grid-template-columns:minmax(0,1fr)}.rs .shots .shotframe.phone{max-width:280px;margin:0 auto}}

.rs .p-pend{background:#FEF3C7;color:#92400E}
.rs .p-appr{background:#DCFCE7;color:#166534}
.rs .p-rev{background:#DBEAFE;color:#1E40AF}
.rs .shots.two{grid-template-columns:minmax(0,1fr) minmax(0,.55fr)}
.rs .shots.three{grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,.55fr)}
@media (max-width:860px){.rs .shots.two,.rs .shots.three{grid-template-columns:minmax(0,1fr)}}
.rs .note{background:#fff;border:1px solid var(--line);border-left:4px solid var(--gold);border-radius:10px;padding:16px 20px;max-width:44em;margin-top:28px}
.rs .note p{margin:0;color:var(--muted);font-size:15px}
.rs .hnav{display:flex;align-items:center;gap:20px}
.rs .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.rs .navlink:hover{color:var(--gold)}
.rs footer a{color:#CBD5E1;text-decoration:none}
.rs footer a:hover{color:var(--gold)}
.rs a:focus-visible,.rs summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.rs .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.rs h1,.rs h2{text-wrap:balance}
@media (max-width:520px){.rs .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.rs *{transition:none!important}}
`

const BODY = `<header class="top"><div class="wrap">
  <a class="logo" href="/"><img class="mono" src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get ReceiptSnap</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">ReceiptSnap</p>
    <h1>Snap the receipt. Skip the typing.</h1>
    <p class="lead">Take a photo and ReceiptSnap reads the vendor, date, amount and VAT. The photo goes into your own Google Drive and the details into your own Google Sheet. At month end, export a clean CSV for your bookkeeper.</p>
    <div class="btns">
      <a class="btn btn-gold" href="https://docs.google.com/spreadsheets/d/15yKsrjjS7S01aJDbBWZHk3ib69a9BEMgZdaprkzt1n4/copy" target="_blank" rel="noopener noreferrer">Try the demo sheet</a>
      <a class="btn btn-line" href="/order?product=receiptsnap">Get ReceiptSnap, R299</a>
      <a class="btn btn-line" href="#how">See how it works</a>
    </div>
    <p class="fine">One payment. No subscription. 72 hour demo included. Make your own copy of the demo sheet, then start the 72 hour demo with the key RSP-DEMO-2026.</p>
    <p class="fine"><b>Best for</b> owners who keep losing receipts and want them ready for the bookkeeper. It is not an accounting package.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private ReceiptSnap link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Spent this month</small><b>R7 321.70</b></div>
        <div class="stat"><small>Need checking</small><b>2</b></div>
      </div>
      <div class="row"><span>Menlyn Fuel Stop &middot; Fuel / Travel</span><span class="pill p-pend">Pending</span></div>
      <div class="row"><span>Brooklyn Stationers &middot; Office Supplies</span><span class="pill p-rev">Reviewed</span></div>
      <div class="row"><span>Hatfield Hardware &middot; Maintenance</span><span class="pill p-appr">Approved</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>Receipts end up in the glovebox.</h2>
  <p class="sub">Then comes month end, and someone has to type them all in. ReceiptSnap is a small tool you set up once. You photograph the receipt when you get it and it is done.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no per-user pricing. It runs in your own Google account, so it keeps working.</p></div>
    <div class="card"><h3>Your receipts stay yours</h3><p>Details live in your own spreadsheet and photos in a private folder in your Drive. We never see them.</p></div>
    <div class="card"><h3>Made for a phone</h3><p>Open your private link on your phone, tap Take a photo, and carry on with your day.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first receipt in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Deploy it once</h3><p>A short guide walks you through the setup, then you paste in your free Groq key so receipts can be read.</p></div>
    <div class="card"><span class="n">3</span><h3>Snap your receipts</h3><p>Bookmark one private link. Take a photo, check what was read, and move on.</p></div>
  </div>
  <div class="note" style="background:var(--navy2);border-color:#334155;border-left-color:var(--gold)"><p style="color:#CBD5E1">The reading is done by AI through your own free Groq account, so there is no per receipt fee from us. AI can get a date or an amount wrong, so every receipt is saved as Pending until you have had a look.</p></div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">Everything between the photo and your bookkeeper.</p>
  <ul class="feat">
    <li><b>Camera or gallery</b><span>Take a photo, pick several from your gallery, or add a PDF. Photos are shrunk on your phone before they are sent.</span></li>
    <li><b>AI reading</b><span>Vendor, date, total, VAT, currency and a short description are filled in for you.</span></li>
    <li><b>Your own categories</b><span>Fuel, stationery, software or whatever you use. The AI picks from your list.</span></li>
    <li><b>Needs checking</b><span>Receipts the AI was unsure about are flagged, so you know which ones to look at first.</span></li>
    <li><b>Duplicate warning</b><span>The same vendor, date and amount twice gets flagged before it is counted twice.</span></li>
    <li><b>Review and approve</b><span>Move receipts from Pending to Reviewed to Approved, one at a time or in bulk.</span></li>
    <li><b>Photo beside the form</b><span>Open a receipt and see the photo next to the details. Fix anything and save.</span></li>
    <li><b>More than one currency</b><span>Rand, dollar, euro and pound are totalled separately, never mixed together.</span></li>
    <li><b>CSV export</b><span>Pick the dates, status and category. See totals by category and currency, then download the file.</span></li>
    <li><b>Email your bookkeeper</b><span>One button opens your email with the subject and totals filled in. You attach the CSV.</span></li>
    <li><b>Add by hand</b><span>No photo? Type the receipt in. VAT can be worked out from the total.</span></li>
    <li><b>Private by design</b><span>A long private key on your link, and a lockout after repeated wrong guesses.</span></li>
  </ul>
</div></section>

<section id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">The screens you use every week. Real screenshots of the app.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private ReceiptSnap link</span></div><img src="/images/receiptsnap/dashboard.webp" alt="ReceiptSnap dashboard with spend this month, VAT, receipts needing a check and spend by category" width="1600" height="1538" loading="lazy"></div>
  <div class="shots two">
    <div class="shotframe"><img src="/images/receiptsnap/edit.webp" alt="Receipt photo next to the details the AI read, ready to check and save" width="1600" height="1239" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/receiptsnap/phone-snap.webp" alt="ReceiptSnap on a phone with the Take a photo button" width="780" height="1688" loading="lazy"></div>
  </div>
  <div class="shots">
    <div class="shotframe"><img src="/images/receiptsnap/receipts.webp" alt="ReceiptSnap receipt list with search, status and category filters" width="1600" height="1231" loading="lazy"></div>
    <div class="shotframe"><img src="/images/receiptsnap/export.webp" alt="ReceiptSnap export page with totals by category and a CSV download" width="1600" height="1692" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/receiptsnap/phone-dashboard.webp" alt="ReceiptSnap dashboard on a phone" width="780" height="1688" loading="lazy"></div>
  </div>
  <p class="shotnote">Screens show sample data.</p>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>Pay once, keep it</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no renewal.</p>
  <div class="price one">
    <div class="card hl" style="background:#fff;color:var(--ink)">
      <span class="tag">Once off</span>
      <h3>ReceiptSnap</h3>
      <div class="big">R299</div><div style="color:var(--muted);font-size:14px">one payment</div>
      <ul><li>ReceiptSnap sheet and activation key</li><li>Step by step deploy guide</li><li>72 hour demo before you commit</li><li>Needs your own free Groq account for the AI reading</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=receiptsnap">Order now</a>
    </div>
  </div>
  <p class="sub" style="margin:28px 0 0;color:#CBD5E1">Sending invoices too? <a href="/payability" style="color:var(--gold)">Payability</a> handles what comes in, ReceiptSnap handles what goes out.</p>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Do I need to know how to code?</summary><p>No. Deploying is a handful of clicks and the guide shows each one.</p></details>
  <details><summary>Is there a monthly fee?</summary><p>No. You pay once. The AI reading uses your own Groq account, which has a free plan.</p></details>
  <details><summary>What is Groq?</summary><p>It is the service that runs the AI. You sign up for free, copy a key and paste it into ReceiptSnap. The key stays in your own Google script and is never shown in full again.</p></details>
  <details><summary>How accurate is the reading?</summary><p>Usually good on clear photos, but it can get a date or amount wrong. That is why every receipt is saved as Pending and unsure ones are flagged. You check before anything is exported.</p></details>
  <details><summary>Can I use it without the AI?</summary><p>Yes. You can save photos and type the details in, or add receipts by hand.</p></details>
  <details><summary>Where are my photos and data stored?</summary><p>Details are in your own Google Sheet and photos are in a private folder in your own Google Drive. We never see them.</p></details>
  <details><summary>Does it work on my phone?</summary><p>Yes. Open your private link in your phone browser and tap Take a photo. You need a connection to save a receipt.</p></details>
  <details><summary>What about VAT?</summary><p>It records the VAT shown on each receipt and totals it for you. It is a record keeping tool, so check your figures with your accountant or bookkeeper.</p></details>
  <details><summary>Can I try it first?</summary><p>Yes. ReceiptSnap includes a 72 hour demo with every feature. It can be started once on each sheet.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Stop typing receipts in at month end.</h2>
  <p>Set ReceiptSnap up once and keep your receipts in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=receiptsnap">Get ReceiptSnap, R299</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; dandelioncreat@outlook.com</span>
</div></footer>`

const LD = {"@context": "https://schema.org", "@type": "Product", "name": "ReceiptSnap", "description": "Photograph receipts, let AI read them into your own Google Sheet, and export a clean CSV for your bookkeeper. One payment, no subscription.", "brand": {"@type": "Brand", "name": "Dandelion Creations"}, "offers": {"@type": "Offer", "price": "299", "priceCurrency": "ZAR", "availability": "https://schema.org/InStock"}}

export default function ReceiptSnapPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div className="rs" dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
