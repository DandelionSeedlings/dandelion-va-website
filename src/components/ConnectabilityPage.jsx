// Connectability sales page. Static content, styled inside .cb so it cannot affect the rest of the site.
const CSS = `.cb{--navy:#0a1628;--navy2:#0f1d33;--gold:#C9A227;--cream:#F5F1E8;--ink:#0a1628;--muted:#475569;--line:#E4DECF;--white:#fff}
.cb, .cb *{box-sizing:border-box}
.cb{margin:0;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased}
.cb a{color:inherit}
.cb .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.cb header.top{background:var(--navy);color:#fff}
.cb header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.cb .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.cb .logo img.mono{background:none;object-fit:contain;border-radius:6px}
.cb .logo .mono{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--gold);color:var(--navy);font-size:13px;font-weight:800}
.cb .top a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.cb .top a.cta:hover{background:var(--gold);color:var(--navy)}
.cb .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.cb .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.cb .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.cb h1{font-size:clamp(34px,5vw,54px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em}
.cb .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.cb .btns{display:flex;gap:12px;flex-wrap:wrap}
.cb .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.cb .btn-gold{background:var(--gold);color:var(--navy)}
.cb .btn-gold:hover{filter:brightness(1.07)}
.cb .btn-line{border:1px solid #475569;color:#fff}
.cb .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.cb .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.cb .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.cb .mock .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.cb .mock .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.cb .mock .bar span{margin-left:8px;font-size:12px;color:#64748B}
.cb .mock .body{padding:18px}
.cb .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.cb .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.cb .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.cb .stat b{font-size:20px}
.cb .stat.gold{border-color:var(--gold);background:#FBF7EA}
.cb .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.cb .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap}
.cb .p-paid{background:#DCFCE7;color:#166534}
.cb .p-sent{background:#DBEAFE;color:#1E40AF}
.cb .p-over{background:#FEE2E2;color:#991B1B}
.cb section{padding:72px 0}
.cb h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em}
.cb .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.cb .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.cb .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.cb .card h3{margin:0 0 8px;font-size:18px}
.cb .card p{margin:0;color:var(--muted);font-size:15px}
.cb .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.cb .band{background:var(--navy);color:#fff}
.cb .band h2{color:#fff}
.cb .band .sub{color:#CBD5E1}
.cb .band .card{background:var(--navy2);border-color:#334155}
.cb .band .card p{color:#CBD5E1}
.cb .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.cb .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.cb .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.cb .feat b{display:block}
.cb .feat span{color:var(--muted);font-size:15px}
.cb .price{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;max-width:820px}
.cb .price .card{padding:30px}
.cb .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.cb .price .card.hl{border:2px solid var(--gold)}
.cb .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.cb .price li{margin:6px 0}
.cb .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.cb details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.cb summary{cursor:pointer;font-weight:600}
.cb details p{margin:10px 0 0;color:var(--muted)}
.cb .final{text-align:center}
.cb .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.cb footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.cb footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
@media (max-width:860px){.cb .hero .grid{grid-template-columns:minmax(0,1fr)}
.cb .cards, .cb .feat, .cb .price{grid-template-columns:minmax(0,1fr)}
.cb section{padding:52px 0}
.cb .hero{padding:44px 0 56px}
}
.cb .p-lead{background:#DBEAFE;color:#1E40AF}
.cb .p-qual{background:#FEF3C7;color:#92400E}
.cb .p-cust{background:#DCFCE7;color:#166534}
.cb .p-today{background:#FEE2E2;color:#991B1B}
.cb .price.one{grid-template-columns:minmax(0,1fr);max-width:460px}

.cb .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.cb .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.cb .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.cb .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.cb .shotframe img{display:block;width:100%;height:auto}
.cb .shots{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,.55fr);gap:18px;margin-top:18px;align-items:start}
.cb .shots .shotframe.phone{border-radius:22px}
.cb .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
@media (max-width:860px){.cb .shots{grid-template-columns:minmax(0,1fr)}.cb .shots .shotframe.phone{max-width:280px;margin:0 auto}}
.cb .hnav{display:flex;align-items:center;gap:20px}
.cb .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.cb .navlink:hover{color:var(--gold)}
.cb footer a{color:#CBD5E1;text-decoration:none}
.cb footer a:hover{color:var(--gold)}
.cb a:focus-visible,.cb summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.cb .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.cb h1,.cb h2{text-wrap:balance}
@media (max-width:520px){.cb .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.cb *{transition:none!important}}
`

const BODY = `<header class="top"><div class="wrap">
  <a class="logo" href="/"><img class="mono" src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get Connectability free</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">Connectability</p>
    <h1>A simple CRM you own, for free.</h1>
    <p class="lead">Keep every contact, log every conversation and never miss a follow-up. It runs from your own Google Sheet and one private link. Your contacts stay in your account.</p>
    <div class="btns">
      <a class="btn btn-gold" href="/order?product=crm-mini">Get Connectability free</a>
      <a class="btn btn-line" href="#how">See how it works</a>
      <a class="btn btn-line" href="https://docs.google.com/spreadsheets/d/1PZyoOPMV93SSfTOe2MGxbZKqd9aUFffy9iFXBmx1oBQ/copy" target="_blank" rel="noopener noreferrer">Try the demo sheet</a>
    </div>
    <p class="fine">Free. No card needed. No subscription. Make your own copy of the demo sheet and try it before you decide.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private Connectability link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Follow-ups due</small><b>3</b></div>
        <div class="stat"><small>Contacts</small><b>48</b></div>
      </div>
      <div class="row"><span>Sam Naidoo &middot; Naidoo Plumbing</span><span class="pill p-today">Due today</span></div>
      <div class="row"><span>Ann Botha &middot; Botha Dental</span><span class="pill p-qual">Qualified</span></div>
      <div class="row"><span>Jo Smith &middot; Lakeview</span><span class="pill p-cust">Customer</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>Most clients are lost in a missed follow-up.</h2>
  <p class="sub">Connectability is a small CRM you deploy once. It lives in a Google Sheet that belongs to you, and you open it from one private link.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no per-user pricing. It runs in your own Google account, so it keeps working.</p></div>
    <div class="card"><h3>Your contacts stay yours</h3><p>Contacts and conversations are stored in your own spreadsheet. Nothing is copied to our servers.</p></div>
    <div class="card"><h3>Simple on purpose</h3><p>Add a contact, log what was said, set the next follow-up. That is the whole routine.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From signing up to your first logged conversation in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order for free and we email you the sheet link and your free activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Deploy it once</h3><p>A short guide walks you through running setup and deploying it as a web app from your own account.</p></div>
    <div class="card"><span class="n">3</span><h3>Open your private link</h3><p>Bookmark one link. Contacts, follow-ups and your dashboard all open from there.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">The basics of keeping track of people, done properly.</p>
  <ul class="feat">
    <li><b>Contacts</b><span>Name, company, email, phone, source and notes. Search and filter by status.</span></li>
    <li><b>Lead status</b><span>Lead, Prospect, Qualified, Customer or Lost, with colours you can scan.</span></li>
    <li><b>Interaction log</b><span>Record calls, emails, meetings and WhatsApp chats, with the outcome and action items.</span></li>
    <li><b>Follow-ups</b><span>See what is overdue, due today and coming this week, and mark each one done.</span></li>
    <li><b>Pipeline stage</b><span>Each contact shows the stage of their latest conversation.</span></li>
    <li><b>Going quiet</b><span>Leads, prospects and qualified contacts you have not spoken to in 30 days are flagged.</span></li>
    <li><b>Dashboard</b><span>Contacts by status, follow-ups due and recent activity on one page.</span></li>
    <li><b>Duplicate check</b><span>You are warned when an email already exists, before it is added twice.</span></li>
    <li><b>CSV import and export</b><span>Bring in your list from another tool. Take your data out whenever you like.</span></li>
    <li><b>Private by design</b><span>A long private key on your link, and a lockout after repeated wrong guesses.</span></li>
  </ul>
</div></section>

<section id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">Your dashboard, follow-ups and contacts. Here is what you open every morning.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private Connectability link</span></div><img src="/images/connectability/dashboard.webp" alt="Connectability dashboard showing contacts, follow-ups due and pipeline stages" width="1600" height="1538" loading="lazy"></div>
  <div class="shots">
    <div class="shotframe"><img src="/images/connectability/followups.webp" alt="Connectability follow-ups list showing overdue, today and upcoming follow-ups" width="1600" loading="lazy"></div>
    <div class="shotframe"><img src="/images/connectability/contacts.webp" alt="Connectability contact list with lead status labels" width="1600" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/connectability/phone-followups.webp" alt="Connectability follow-ups on a phone" width="780" height="1576" loading="lazy"></div>
  </div>
  <p class="shotnote">Screens show sample data.</p>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>Free, and yours to keep</h2>
  <p class="sub" style="margin-bottom:28px">One signup. No monthly fee, no renewal.</p>
  <div class="price one">
    <div class="card hl" style="background:#fff;color:var(--ink)">
      <span class="tag">Free</span>
      <h3>Connectability</h3>
      <div class="big">R0</div><div style="color:var(--muted);font-size:14px">no card needed</div>
      <ul><li>Connectability sheet and free activation key</li><li>Step by step deploy guide</li><li>Import and export your contacts</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=crm-mini">Get it free</a>
    </div>
  </div>
  <p class="sub" style="margin:28px 0 0;color:#CBD5E1">Outgrown a contact list? <a href="/order?product=crm-pro" style="color:var(--gold)">Scalability: CRM Pro</a> adds full deal pipelines and growth tracking.</p>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Is it really free?</summary><p>Yes. There is no trial and no card. You get a free activation key and it does not expire.</p></details>
  <details><summary>Do I need to know how to code?</summary><p>No. Deploying is a handful of clicks and the guide shows each one.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see your contacts.</p></details>
  <details><summary>Can I bring my existing contacts?</summary><p>Yes. Import a CSV file from your phone, email or another CRM. You see a preview before anything is saved.</p></details>
  <details><summary>Can I take my data with me?</summary><p>Yes. Everything is already in your sheet, and you can export contacts and interactions to CSV any time.</p></details>
  <details><summary>What if I outgrow it?</summary><p>Scalability: CRM Pro adds full pipeline tracking and growth analytics. Your contacts move across.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Stop losing leads to a missed follow-up.</h2>
  <p>Deploy Connectability once and keep every conversation in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=crm-mini">Get Connectability free</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; dandelioncreat@outlook.com</span>
</div></footer>`

const LD = {"@context": "https://schema.org", "@type": "Product", "name": "Connectability", "description": "A free CRM that runs from your own Google Sheet. Contacts, interaction log and follow-ups.", "brand": {"@type": "Brand", "name": "Dandelion Creations"}, "offers": {"@type": "Offer", "price": "0", "priceCurrency": "ZAR", "availability": "https://schema.org/InStock"}}

export default function ConnectabilityPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div className="cb" dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
