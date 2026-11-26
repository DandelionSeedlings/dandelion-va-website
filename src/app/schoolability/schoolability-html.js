// The SchoolAbility sales page, as one static string. app/schoolability/page.js injects it.
// Edit the copy here. Images live in public/images/schoolability (webp), the demo video in public/videos.
// Order link: /order?product=schoolability.

const html = `
<div class="mc">
<style>
.mc{--navy:#0F172A;--navy2:#1E293B;--gold:#C9A84C;--gold-d:#A68B3C;--cream:#F5F1E8;--line:#E4DECF;--muted:#475569;--ink:#0F172A;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased;margin:0}
.mc *{box-sizing:border-box}
.mc a{color:inherit}
.mc img{max-width:100%;height:auto;display:block}
.mc .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.mc header.top{background:var(--navy);color:#fff}
.mc header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.mc .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.mc .logo img{width:30px;height:30px;object-fit:contain;border-radius:6px}
.mc .hnav{display:flex;align-items:center;gap:20px}
.mc .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.mc .navlink:hover{color:var(--gold)}
.mc a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.mc a.cta:hover{background:var(--gold);color:var(--navy)}
.mc .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.mc .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.mc .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.mc h1{font-size:clamp(34px,5vw,52px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.mc .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.mc .btns{display:flex;gap:12px;flex-wrap:wrap}
.mc .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.mc .btn-gold{background:var(--gold);color:var(--navy)}
.mc .btn-gold:hover{filter:brightness(1.07)}
.mc .btn-line{border:1px solid #475569;color:#fff}
.mc .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.mc .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.mc .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.mc .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.mc .mock .bar,.mc .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.mc .mock .bar i,.mc .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.mc .mock .bar span,.mc .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.mc .mock .body{padding:18px}
.mc .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.mc .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.mc .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.mc .stat b{font-size:20px}
.mc .stat.gold{border-color:var(--gold);background:#FBF7EA}
.mc .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.mc .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap;align-self:center}
.mc .p-q{background:#FEF3C7;color:#92400E}
.mc .p-n{background:#E2E8F0;color:#334155}
.mc .p-d{background:#FEE2E2;color:#991B1B}
.mc section{padding:72px 0}
.mc h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em;text-wrap:balance}
.mc .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.mc .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.mc .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.mc .card h3{margin:0 0 8px;font-size:18px}
.mc .card p{margin:0;color:var(--muted);font-size:15px}
.mc .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.mc .band{background:var(--navy);color:#fff}
.mc .band h2{color:#fff}
.mc .band .sub{color:#CBD5E1}
.mc .band .card{background:var(--navy2);border-color:#334155}
.mc .band .card p{color:#CBD5E1}
.mc .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.mc .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.mc .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.mc .feat b{display:block}
.mc .feat span{color:var(--muted);font-size:15px}
.mc .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.mc .shotframe img{width:100%}
.mc .shots{display:grid;grid-template-columns:minmax(0,1fr);gap:28px;margin-top:28px}
.mc .phonewrap{max-width:300px;margin:28px auto 0}
.mc .shotframe.phone{border-radius:22px}
.mc .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
.mc .cap{font-size:14px;color:#94A3B8;margin:10px 2px 0}
.mc table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;font-size:15px}
.mc th,.mc td{text-align:left;padding:12px 16px;border-top:1px solid var(--line);vertical-align:top}
.mc thead th{background:var(--navy);color:#fff;border-top:0}
.mc td.y{font-weight:700}
.mc td.no{color:#64748B}
.mc .tablewrap{overflow-x:auto}
.mc .twocol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.mc .price{max-width:460px}
.mc .price .card{padding:30px;border:2px solid var(--gold);background:#fff;color:var(--ink)}
.mc .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.mc .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.mc .price li{margin:6px 0}
.mc .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.mc details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.mc summary{cursor:pointer;font-weight:600}
.mc details p{margin:10px 0 0;color:var(--muted)}
.mc .final{text-align:center}
.mc .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.mc footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.mc footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.mc footer a{color:#CBD5E1;text-decoration:none}
.mc footer a:hover{color:var(--gold)}
.mc a:focus-visible,.mc summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
@media (max-width:860px){
.mc .hero .grid,.mc .cards,.mc .feat,.mc .twocol{grid-template-columns:minmax(0,1fr)}
.mc section{padding:52px 0}
.mc .hero{padding:44px 0 56px}
}
@media (max-width:520px){.mc .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.mc *{transition:none!important}}
</style>
<style>
.mc .p-ok{background:#DCFCE7;color:#166534}
.mc .p-msg{background:var(--gold);color:var(--navy)}
.mc .p-bd{background:#FCE7F3;color:#9D174D}
.mc .p-al{background:#FEE2E2;color:#991B1B}
.mc .kid{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 12px;border:1px solid #E2E8F0;border-left:4px solid #16A34A;border-radius:10px;margin-top:8px;font-size:14px}
.mc .kid.out{border-left-color:#CBD5E1}
.mc .kid small{display:block;color:#64748B;font-size:12px}
.mc .kid .tags{display:flex;gap:5px;flex-wrap:wrap;justify-content:flex-end}
.mc .msgbox{margin-top:12px;background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:10px 12px;font-size:13px}
.mc .msgbox b{display:block;font-size:13px;margin-bottom:4px}
.mc .phones{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin-top:28px}
.mc .vid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,320px);gap:40px;align-items:center}
.mc .vid video{width:100%;border-radius:22px;border-top:4px solid var(--gold);box-shadow:0 24px 50px -24px rgba(15,23,42,.45);background:var(--navy);display:block}
.mc .roles .card h3{display:flex;align-items:center;gap:10px}
.mc .roles .card ul{margin:12px 0 0;padding-left:18px;color:var(--muted);font-size:15px}
.mc .roles .card li{margin:5px 0}
.mc .band .roles .card ul{color:#CBD5E1}
@media (max-width:860px){.mc .phones{grid-template-columns:minmax(0,1fr);max-width:320px;margin-left:auto;margin-right:auto}.mc .vid{grid-template-columns:minmax(0,1fr)}.mc .vid video{max-width:320px;margin:0 auto}}
</style>
<header class="top"><div class="wrap">
  <a class="logo" href="/"><img src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get SchoolAbility</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">SchoolAbility &middot; Aftercare Records</p>
    <h1>Know who fetched every child, every day.</h1>
    <p class="lead">The teacher on duty signs children in and out on a phone at the safety gate, and only people on a child's list can fetch them. Parents register with a link and get their own private page for messages, notes and their statement. It runs from your own Google Sheet, in Afrikaans and English.</p>
    <div class="btns">
      <a class="btn btn-gold" href="/order?product=schoolability">Get SchoolAbility for R1,499</a>
      <a class="btn btn-line" href="#see">Watch the 1 minute demo</a>
    </div>
    <p class="fine">R1,499 once-off. No subscription and no fee per child. A free setup call is included if you want a hand switching it on.</p>
    <p class="fine"><b>Made for</b> aftercare centres and school aftercare for Grade 1 to 7, with a principal, a few teachers and a safety gate.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>The gate register on the teacher's phone</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Here now</small><b>14</b></div>
        <div class="stat"><small>Not here yet</small><b>2</b></div>
      </div>
      <div class="kid"><span><b>Mia Smit</b><small>Here since 13:05</small></span><span class="tags"><span class="pill p-msg">Message</span><span class="pill p-bd">Birthday</span></span></div>
      <div class="kid"><span><b>Liam Naidoo</b><small>Here since 13:06</small></span><span class="tags"><span class="pill p-al">Allergy</span></span></div>
      <div class="kid out"><span><b>Ethan van Wyk</b><small>Gone 15:40 &middot; Karen van Wyk (Mom)</small></span><span class="tags"><span class="pill p-n">Gr 1</span></span></div>
      <div class="msgbox"><b>Message from Mia's mom for today</b>Dad is fetching Mia at 16:00. She has the dentist at 16:30.</div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>A paper register can't tell you who's still at the gate.</h2>
  <p class="sub">Pickup changes come in on WhatsApp, the register sits in a file, and someone has to remember Mia's peanut allergy and Liam's birthday. SchoolAbility puts it all on the phone the teacher on duty is already holding.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>Pay once. No monthly fee and no price per child. It runs in your own Google account and keeps working.</p></div>
    <div class="card"><h3>The children's details stay with you</h3><p>Names, ID numbers, allergies and fees sit in your own spreadsheet. We never see them. Parents give POPIA consent on the registration form.</p></div>
    <div class="card"><h3>Every change has a reason</h3><p>Fixing a sign-out time or removing a charge needs a reason, and the log keeps who did what and when.</p></div>
  </div>
</div></section>

<section class="band" id="see"><div class="wrap vid">
  <div>
    <h2>One afternoon, in one minute</h2>
    <p class="sub" style="margin-bottom:18px">Mom sends a pickup message. The teacher at the gate sees it, marks it as read and sees it's Mia's birthday. Dad fetches Mia, and the principal sees the whole day on one page.</p>
    <p class="fine">Demo school. All names are made up.</p>
  </div>
  <video src="/videos/schoolability-demo.mp4" poster="/images/schoolability/video-poster.webp" controls muted playsinline preload="none" width="720" height="1280" aria-label="SchoolAbility demo video"></video>
</div></section>

<section><div class="wrap">
  <h2>Three people, three views</h2>
  <p class="sub">Each person gets their own link and only sees what they need.</p>
  <div class="cards roles">
    <div class="card"><h3>The principal</h3><p>Opens a private link on a computer or phone.</p><ul><li>Today's page with who is here, messages and birthdays</li><li>Children, contacts and who may fetch</li><li>Staff, groups, fees and settings</li></ul></div>
    <div class="card"><h3>The teacher on duty</h3><p>Taps their name on the staff link and types a PIN.</p><ul><li>The gate register for every group</li><li>Allergies and messages on each child's card</li><li>A homework list per grade, marked done and checked</li></ul></div>
    <div class="card"><h3>The parents</h3><p>Each child gets a private link, and the parent types their own PIN.</p><ul><li>Send the school a message for a day</li><li>Homework, notes and the register</li><li>Their statement and how to pay</li></ul></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first afternoon in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order and pay, and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Switch it on once</h3><p>Add your school's name, closing time, groups, teachers and fees. Or book a free setup call and we do it together on a screen share, up to 20 minutes.</p></div>
    <div class="card"><span class="n">3</span><h3>Send parents the link</h3><p>Parents fill in the registration form on their phone. You check each one, approve it, and the child shows up at the gate.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">Registration, the gate, notes, messages and fees, in one place.</p>
  <ul class="feat">
    <li><b>A registration form parents fill in</b><span>Child, medical details, parents, an emergency contact and the people who may fetch. With POPIA consent and photo permission.</span></li>
    <li><b>The safety gate register</b><span>Sign children in and out with one tap. The time comes from the sheet, not from someone's pen.</span></li>
    <li><b>Only the list can fetch</b><span>The teacher picks who is at the gate from the child's list. For anyone else, the app says not to let the child go and shows the parents' numbers.</span></li>
    <li><b>Allergies on every card</b><span>Allergies and medication show in red on the child's card at the gate and on the principal's page.</span></li>
    <li><b>Messages from parents</b><span>Pickup changes, absent days and other notes for a day. The teacher marks them as seen, and the parent can see that.</span></li>
    <li><b>Birthday reminders</b><span>A birthday tag at the gate on the day, and this week's birthdays on the principal's page.</span></li>
    <li><b>Homework for every grade</b><span>The teacher copies the homework once for the day or the week, then marks each child not done, done or checked. Tests show with their date. Progress and AceIQ notes too.</span></li>
    <li><b>Groups that fit your centre</b><span>Starts with Gr 1, Gr 2, Gr 3 and Gr 4-7. Change them to match your teachers.</span></li>
    <li><b>Monthly and late pickup fees</b><span>You set the monthly fee and the late fee rules. Late pickups are worked out from the gate times.</span></li>
    <li><b>Statements and payments</b><span>Bill the month in one click, record payments, and each parent sees their own statement.</span></li>
    <li><b>Afrikaans and English</b><span>Every screen, for the principal, the teachers and the parents. Each person picks their own language.</span></li>
    <li><b>A log of every change</b><span>Fixes, removed charges and approvals all go in the Log sheet with a name and a reason.</span></li>
  </ul>
</div></section>

<section class="band"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">The principal's Today page, the gate on a teacher's phone and the parent page.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private SchoolAbility link</span></div><img src="/images/schoolability/dashboard.webp" alt="SchoolAbility Today page with children here now, a parent message, birthdays this week and allergies" width="1800" height="1251" loading="lazy"></div>
  <div class="phones">
    <div><div class="shotframe phone"><img src="/images/schoolability/gate-list.webp" alt="The gate register on a phone, with Message and Birthday tags on Mia's name" width="780" height="1600" loading="lazy"></div><p class="cap">The gate register</p></div>
    <div><div class="shotframe phone"><img src="/images/schoolability/gate-card.webp" alt="Mia's card at the gate showing her birthday and a pickup message from her mom" width="780" height="1600" loading="lazy"></div><p class="cap">A message and a birthday on Mia's card</p></div>
    <div><div class="shotframe phone"><img src="/images/schoolability/gate-pickup.webp" alt="Choosing who is fetching Mia from her list, with a warning option for someone else" width="780" height="1600" loading="lazy"></div><p class="cap">Only the people on her list</p></div>
  </div>
  <div class="shots">
    <div><div class="shotframe"><img src="/images/schoolability/register.webp" alt="The day's register with arrival and sign-out times and who fetched each child" width="1800" height="1251" loading="lazy"></div><p class="cap">The day's register</p></div>
    <div><div class="shotframe"><img src="/images/schoolability/fees.webp" alt="The fees page for November with charged, paid and owed amounts" width="1800" height="1251" loading="lazy"></div><p class="cap">Fees for the month</p></div>
  </div>
  <div class="phones">
    <div><div class="shotframe phone"><img src="/images/schoolability/register-form.webp" alt="The registration form parents fill in on their phone" width="780" height="1600" loading="lazy"></div><p class="cap">The registration form</p></div>
    <div><div class="shotframe phone"><img src="/images/schoolability/parent-message.webp" alt="The parent page with a sent message marked as seen by the teacher" width="780" height="1600" loading="lazy"></div><p class="cap">Mom sees her message was read</p></div>
    <div><div class="shotframe phone"><img src="/images/schoolability/parent-register.webp" alt="The parent page register showing when Mia arrived, left and who fetched her" width="780" height="1600" loading="lazy"></div><p class="cap">When she left, and with whom</p></div>
  </div>
  <p class="shotnote" style="color:#94A3B8">Screens show a made-up demo school.</p>
</div></section>

<section><div class="wrap">
  <h2>A paper register or SchoolAbility?</h2>
  <p class="sub">Paper works until a parent's WhatsApp gets lost or someone new turns up at the gate.</p>
  <div class="tablewrap"><table>
    <thead><tr><th scope="col">What you get</th><th scope="col">Paper and WhatsApp</th><th scope="col">SchoolAbility</th></tr></thead>
    <tbody>
      <tr><th scope="row">Who may fetch each child</th><td class="no">In a file in the office</td><td class="y">On the child's card at the gate</td></tr>
      <tr><th scope="row">The real sign-out time</th><td class="no">What someone wrote down</td><td class="y">From the sheet's clock</td></tr>
      <tr><th scope="row">Pickup changes from parents</th><td class="no">On one teacher's phone</td><td class="y">On the child's card, marked as seen</td></tr>
      <tr><th scope="row">Homework</th><td class="no">A signature in a book in the school bag</td><td class="y">Done and checked, per child, on the parent's page</td></tr>
      <tr><th scope="row">Allergies</th><td class="no">On a list on the wall</td><td class="y">In red on every card</td></tr>
      <tr><th scope="row">Late pickup fees</th><td class="no">You do the sum</td><td class="y">Worked out from the gate times</td></tr>
      <tr><th scope="row">Parents' statements</th><td class="no">Typed by hand</td><td class="y">On their own page</td></tr>
      <tr><th scope="row">Price</th><td class="y">Your time</td><td class="y">R1,499 once-off</td></tr>
    </tbody>
  </table></div>
</div></section>

<section><div class="wrap">
  <h2>What it does not do</h2>
  <p class="sub">So you know before you buy.</p>
  <div class="twocol">
    <div class="card"><h3>No automatic SMS or WhatsApp</h3><p>It doesn't send messages to parents by itself. Parents open their own page to see notes and their statement. You can send each parent their link on WhatsApp with one tap.</p></div>
    <div class="card"><h3>No payments or debit orders</h3><p>It keeps the fees, payments and statements. It doesn't take money or connect to your bank. Parents pay the way they do now.</p></div>
    <div class="card"><h3>No ID or face check</h3><p>The teacher picks the person from the child's list and checks them like they do today. A parent's message never adds a new person to the list. Only the principal can.</p></div>
    <div class="card"><h3>Made for Grade 1 to 7</h3><p>It is built around aftercare for school-going children. Baby and toddler routines like nappies, sleep and feeding times are not in it, and it doesn't do school marks or report cards.</p></div>
  </div>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>R1,499 once. Yours to keep.</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no price per child, no renewal.</p>
  <div class="price">
    <div class="card">
      <span class="tag">Once-off</span>
      <h3>SchoolAbility: Aftercare Records</h3>
      <div class="big">R1,499</div><div style="color:var(--muted);font-size:14px">pay once, no subscription</div>
      <ul><li>The SchoolAbility sheet and your activation key</li><li>Links for the principal, the staff, registration and every parent</li><li>Afrikaans and English</li><li>Short setup guide</li><li>A free setup call, up to 20 minutes, on a screen share</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=schoolability">Order SchoolAbility</a>
      <p style="margin:14px 0 0;font-size:14px;color:var(--muted)">Not happy? We help first with a setup call, then refund you if it still isn't right. <a href="/refunds">Read the refund policy</a>.</p>
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Is it a subscription?</summary><p>No. You pay R1,499 once. There is no monthly fee, no fee per child and nothing to renew.</p></details>
  <details><summary>Do the teachers need to install an app?</summary><p>No. The staff link opens in the phone's browser. Each teacher taps their name and types their own 4 digit PIN. Parents use their own link the same way.</p></details>
  <details><summary>What happens if someone not on the list comes to fetch a child?</summary><p>They're not on the child's list, so the teacher taps Someone else. The app says not to let the child go and shows the parents' numbers to phone. Only the principal can add a person to the list.</p></details>
  <details><summary>Can a parent change the pickup person with a message?</summary><p>They can tell the school, and the teacher sees it on the child's card. The message doesn't add anyone to the list. If it's someone new, the principal adds them first.</p></details>
  <details><summary>Does it keep test marks?</summary><p>No. Teachers add the test date and what to study, so parents see it coming. The school marks the work and keeps the marks. The aftercare makes sure the homework got done.</p></details>
  <details><summary>Can we use it in Afrikaans?</summary><p>Yes. Every screen is in Afrikaans and English. You choose the school's default, and each teacher and parent can switch with one tap.</p></details>
  <details><summary>Can we change the fees and groups?</summary><p>Yes. The principal fills in the monthly fee, the late pickup fee and the closing time, and can add or rename groups. Nothing is billed until you set the amounts.</p></details>
  <details><summary>What about POPIA?</summary><p>The registration form asks the parent for consent before you keep their child's details, and the details stay in your own Google account. You are still responsible for how your centre uses them, so keep the sheet's sharing to the people who need it.</p></details>
  <details><summary>Where is the data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see the children, parents or fees. When you activate, your key and the email of your Google account are checked with us once, and after that SchoolAbility keeps working on its own.</p></details>
  <details><summary>Do I need to know how to code?</summary><p>No. Switching it on takes a handful of clicks and the guide shows each one. You can also book a free setup call and we do it together.</p></details>
  <details><summary>What if it isn't right for us?</summary><p>We help first with a free setup call, then refund you if it still isn't right. The refund policy has the details.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Every child home with the right person.</h2>
  <p>Switch SchoolAbility on once and keep the register, the pickup lists, the messages and the fees in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=schoolability">Order SchoolAbility for R1,499</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/aceiq">AceIQ</a> &middot; <a href="/refunds">Refund policy</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; hello.dandelioncreat@outlook.com</span>
</div></footer>
</div>

`;

export default html;
