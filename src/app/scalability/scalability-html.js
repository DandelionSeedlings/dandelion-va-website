// The Scalability sales page, as one static string. app/scalability/page.js injects it.
// Edit the copy here. Images live in public/images/scalability (webp).
// Order link: /order?product=crm-pro (the order form already knows this id).

const html = `
<div class="sc">
<style>
.sc{--navy:#0F172A;--navy2:#1E293B;--gold:#C9A84C;--gold-d:#A68B3C;--cream:#F5F1E8;--line:#E4DECF;--muted:#475569;--ink:#0F172A;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased;margin:0}
.sc *{box-sizing:border-box}
.sc a{color:inherit}
.sc img{max-width:100%;height:auto;display:block}
.sc .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.sc header.top{background:var(--navy);color:#fff}
.sc header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.sc .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.sc .logo img{width:30px;height:30px;object-fit:contain;border-radius:6px}
.sc .hnav{display:flex;align-items:center;gap:20px}
.sc .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.sc .navlink:hover{color:var(--gold)}
.sc a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.sc a.cta:hover{background:var(--gold);color:var(--navy)}
.sc .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.sc .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.sc .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.sc h1{font-size:clamp(34px,5vw,52px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.sc .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.sc .btns{display:flex;gap:12px;flex-wrap:wrap}
.sc .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.sc .btn-gold{background:var(--gold);color:var(--navy)}
.sc .btn-gold:hover{filter:brightness(1.07)}
.sc .btn-line{border:1px solid #475569;color:#fff}
.sc .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.sc .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.sc .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.sc .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.sc .mock .bar,.sc .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.sc .mock .bar i,.sc .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.sc .mock .bar span,.sc .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.sc .mock .body{padding:18px}
.sc .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.sc .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.sc .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.sc .stat b{font-size:20px}
.sc .stat.gold{border-color:var(--gold);background:#FBF7EA}
.sc .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.sc .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap;align-self:center}
.sc .p-q{background:#FEF3C7;color:#92400E}
.sc .p-n{background:#E2E8F0;color:#334155}
.sc .p-d{background:#FEE2E2;color:#991B1B}
.sc section{padding:72px 0}
.sc h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em;text-wrap:balance}
.sc .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.sc .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.sc .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.sc .card h3{margin:0 0 8px;font-size:18px}
.sc .card p{margin:0;color:var(--muted);font-size:15px}
.sc .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.sc .band{background:var(--navy);color:#fff}
.sc .band h2{color:#fff}
.sc .band .sub{color:#CBD5E1}
.sc .band .card{background:var(--navy2);border-color:#334155}
.sc .band .card p{color:#CBD5E1}
.sc .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.sc .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.sc .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.sc .feat b{display:block}
.sc .feat span{color:var(--muted);font-size:15px}
.sc .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.sc .shotframe img{width:100%}
.sc .shots{display:grid;grid-template-columns:minmax(0,1fr);gap:28px;margin-top:28px}
.sc .phonewrap{max-width:300px;margin:28px auto 0}
.sc .shotframe.phone{border-radius:22px}
.sc .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
.sc .cap{font-size:14px;color:#94A3B8;margin:10px 2px 0}
.sc table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;font-size:15px}
.sc th,.sc td{text-align:left;padding:12px 16px;border-top:1px solid var(--line);vertical-align:top}
.sc thead th{background:var(--navy);color:#fff;border-top:0}
.sc td.y{font-weight:700}
.sc td.no{color:#64748B}
.sc .tablewrap{overflow-x:auto}
.sc .twocol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.sc .price{max-width:460px}
.sc .price .card{padding:30px;border:2px solid var(--gold);background:#fff;color:var(--ink)}
.sc .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.sc .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.sc .price li{margin:6px 0}
.sc .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.sc details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.sc summary{cursor:pointer;font-weight:600}
.sc details p{margin:10px 0 0;color:var(--muted)}
.sc .final{text-align:center}
.sc .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.sc footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.sc footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.sc footer a{color:#CBD5E1;text-decoration:none}
.sc footer a:hover{color:var(--gold)}
.sc a:focus-visible,.sc summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
@media (max-width:860px){
.sc .hero .grid,.sc .cards,.sc .feat,.sc .twocol{grid-template-columns:minmax(0,1fr)}
.sc section{padding:52px 0}
.sc .hero{padding:44px 0 56px}
}
@media (max-width:520px){.sc .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.sc *{transition:none!important}}
</style>

<header class="top"><div class="wrap">
  <a class="logo" href="/"><img src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get Scalability</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">Scalability &middot; CRM Pro</p>
    <h1>See every deal, who owns it and what happens next.</h1>
    <p class="lead">A sales pipeline for a small team. It runs from your own Google Sheet and one private link. You pay once and there is no monthly fee.</p>
    <div class="btns">
      <a class="btn btn-gold" href="/order?product=crm-pro">Get Scalability for R499</a>
      <a class="btn btn-line" href="#see">See it in action</a>
    </div>
    <p class="fine">R499 once-off. No subscription. A free setup call is included if you want a hand switching it on.</p>
    <p class="fine"><b>Best for</b> small teams who have outgrown a contact list. It does not do invoicing, bookings or email sending.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private Scalability link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Open pipeline</small><b>R 343 000</b></div>
        <div class="stat"><small>Win rate</small><b>66.7%</b></div>
      </div>
      <div class="row"><span>Fleet tracking rollout &middot; R 120 000</span><span class="pill p-n">Negotiation</span></div>
      <div class="row"><span>Practice management setup &middot; R 64 000</span><span class="pill p-q">Quiet</span></div>
      <div class="row"><span>Workshop upgrade &middot; R 52 000</span><span class="pill p-d">Close date passed</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>A contact list cannot tell you what is about to close.</h2>
  <p class="sub">Once you have several deals on the go, and more than one person working them, you need to see the whole pipeline in one place. Scalability does that and nothing else.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no price per user. It runs in your own Google account, so it keeps working.</p></div>
    <div class="card"><h3>Your data stays yours</h3><p>Contacts, deals and notes sit in your own spreadsheet. We never see them. The only thing checked with us is your activation key and the Google email that activates it, once.</p></div>
    <div class="card"><h3>Built for a small team</h3><p>Everyone opens the same private link, and each deal and task has an owner picked from your team list.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first deal on the board in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order, pay, and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Switch it on once</h3><p>A step by step guide takes you through setup and deploying it from your own Google account. Book a free setup call and we do it together on a screen share, up to 20 minutes.</p></div>
    <div class="card"><span class="n">3</span><h3>Open your private link</h3><p>Bookmark one link. Add your team, then your first deal. Everything else opens from there.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">The parts of a sales pipeline that small teams actually use.</p>
  <ul class="feat">
    <li><b>Deals</b><span>Each deal has a value in rand, a stage, an expected close date, an owner and notes.</span></li>
    <li><b>Pipeline board</b><span>See every open deal by stage. Move a deal with the stage picker on its card. Filter by owner.</span></li>
    <li><b>Stages you set</b><span>Up to 8 open stages, renamed and reordered to match how you sell. Won and Lost are always there.</span></li>
    <li><b>Weighted pipeline</b><span>Give each stage a win chance. The dashboard adds up your pipeline both ways, as a total and weighted. The chances are your own numbers, not a prediction.</span></li>
    <li><b>Win rate</b><span>Won against lost, with the average deal size and the average days it took to close.</span></li>
    <li><b>Quiet deals</b><span>Open deals with nothing logged for a set number of days are flagged. You choose the number, 30 to start.</span></li>
    <li><b>Contacts and conversations</b><span>Log calls, emails, meetings and WhatsApp chats against a contact or straight onto a deal.</span></li>
    <li><b>Follow-ups and tasks</b><span>See what is overdue, due today and coming up, with an owner on each, and tick it off when it is done.</span></li>
    <li><b>Open deals by owner</b><span>How much each person has in play, at a glance.</span></li>
    <li><b>Import and export</b><span>Bring contacts across from ConnectAbility or any CSV file and check a preview first. Download your contacts, conversations, deals and tasks as CSV any time.</span></li>
    <li><b>Works on a phone</b><span>Open the same link in your phone's browser. It is not an app store app.</span></li>
    <li><b>Private by design</b><span>A long private key on your link, and a lockout after repeated wrong guesses.</span></li>
  </ul>
</div></section>

<section class="band" id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">The dashboard you open every morning, the board your team works from, and a deal with its history.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private Scalability link</span></div><img src="/images/scalability/dashboard.webp" alt="Scalability dashboard showing open pipeline, weighted pipeline, win rate, overdue follow-ups and quiet deals" width="1800" height="1250" loading="lazy"></div>
  <div class="shots">
    <div><div class="shotframe"><img src="/images/scalability/pipeline.webp" alt="Scalability pipeline board with deals in Prospecting, Qualification, Proposal and Negotiation" width="1800" height="1250" loading="lazy"></div><p class="cap">The pipeline board</p></div>
    <div><div class="shotframe"><img src="/images/scalability/deal.webp" alt="A deal in Scalability with its details, an interaction form and history" width="1800" height="1250" loading="lazy"></div><p class="cap">A deal, with its history</p></div>
  </div>
  <div class="phonewrap"><div class="shotframe phone"><img src="/images/scalability/phone-followups.webp" alt="Scalability follow-ups on a phone" width="780" height="1600" loading="lazy"></div><p class="cap">Follow-ups on a phone</p></div>
  <p class="shotnote" style="color:#94A3B8">Screens show made-up demo data.</p>
</div></section>

<section><div class="wrap">
  <h2>ConnectAbility or Scalability?</h2>
  <p class="sub">ConnectAbility is free and keeps your contacts and follow-ups in order. Scalability adds deals and a team. If you are not sure, start with the free one. Your contacts move across later.</p>
  <div class="tablewrap"><table>
    <thead><tr><th scope="col">What you get</th><th scope="col">ConnectAbility</th><th scope="col">Scalability</th></tr></thead>
    <tbody>
      <tr><th scope="row">Contacts and a conversation log</th><td class="y">Yes</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Follow-ups</th><td class="y">Yes</td><td class="y">Yes</td></tr>
      <tr><th scope="row">CSV import and export</th><td class="y">Yes</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Deals with a value, stage, owner and close date</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Pipeline board and stages you set</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Pipeline value, win rate and quiet deals</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Tasks</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Team names on deals, tasks and notes</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Price</th><td class="y">Free</td><td class="y">R499 once-off</td></tr>
    </tbody>
  </table></div>
</div></section>

<section><div class="wrap">
  <h2>What it does not do</h2>
  <p class="sub">So you know before you buy.</p>
  <div class="twocol">
    <div class="card"><h3>No personal logins</h3><p>Everyone with your private link sees and can change everything. Names only fill in who owns a deal or wrote a note. It cannot hide deals from someone, stop anyone changing anything, or prove who did it. If you need that, this is not the right tool.</p></div>
    <div class="card"><h3>No emails or reminders</h3><p>It does not send emails, text messages or reminders. Overdue follow-ups and tasks show up on your dashboard when you open it.</p></div>
    <div class="card"><h3>No invoicing or bookings</h3><p>Those are PayAbility and BookAbility, separate systems. Scalability does not link to them yet.</p></div>
    <div class="card"><h3>Work through the app</h3><p>Use the app, not the sheet tabs, to add and change things. The app keeps IDs, dates and stages consistent.</p></div>
  </div>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>R499 once. Yours to keep.</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no price per user, no renewal.</p>
  <div class="price">
    <div class="card">
      <span class="tag">Once-off</span>
      <h3>Scalability: CRM Pro</h3>
      <div class="big">R499</div><div style="color:var(--muted);font-size:14px">pay once, no subscription</div>
      <ul><li>The Scalability sheet and your activation key</li><li>Step by step setup guide</li><li>A free setup call, up to 20 minutes, on a screen share</li><li>Import from ConnectAbility or any CSV, and export any time</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=crm-pro">Order Scalability</a>
      <p style="margin:14px 0 0;font-size:14px;color:var(--muted)">Not happy? We help first with a setup call, then refund you if it still is not right. <a href="/refunds">Read the refund policy</a>.</p>
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Is it a subscription?</summary><p>No. You pay R499 once. There is no monthly fee and nothing to renew.</p></details>
  <details><summary>Do I need to know how to code?</summary><p>No. Switching it on is a handful of clicks and the guide shows each one. You can also book a free setup call and we do it together.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see your contacts or deals. When you activate, your key and the email of your Google account are checked with us once, and after that Scalability keeps working on its own.</p></details>
  <details><summary>Can my whole team use it?</summary><p>Yes. Everyone opens the same private link, and each person picks their name from your team list on their own device. That only fills in owners and who wrote a note. It is not a sign-in, so everyone sees and can change everything.</p></details>
  <details><summary>Can I bring my ConnectAbility contacts across?</summary><p>Yes. Export the contacts file and the interactions file from ConnectAbility and import them together. You see a preview first, people already in Scalability are skipped, and their history is kept. Any contacts CSV works too.</p></details>
  <details><summary>Will it send me reminders?</summary><p>No. It does not send emails or messages. Overdue follow-ups, overdue tasks and quiet deals show on your dashboard whenever you open it.</p></details>
  <details><summary>Does it work on my phone?</summary><p>Yes, in your phone's browser, from the same private link. It is not an app from an app store.</p></details>
  <details><summary>Can I change the stages and the currency?</summary><p>Yes. In Team and settings you can rename, reorder, add and remove open stages, up to 8, and set each stage's win chance. The currency symbol is the rand to start and you can change it. A stage that still has deals in it cannot be removed.</p></details>
  <details><summary>What if it is not right for me?</summary><p>We help first with a free setup call, then refund you if it still is not right. The refund policy has the details.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Know where every deal stands.</h2>
  <p>Switch Scalability on once and keep your whole pipeline in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=crm-pro">Order Scalability for R499</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/connectability">ConnectAbility</a> &middot; <a href="/refunds">Refund policy</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; hello.dandelioncreat@outlook.com</span>
</div></footer>
</div>
`;

export default html;
