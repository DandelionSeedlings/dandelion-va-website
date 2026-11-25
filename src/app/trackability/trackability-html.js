// The TrackAbility sales page, as one static string. app/trackability/page.js injects it.
// Edit the copy here. Images live in public/images/trackability (webp).
// Order link: /order?product=trackability (added to the order form in this pack).

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
.mc .tally{display:grid;gap:0}
.mc .res{margin-top:12px;border-radius:10px;padding:10px 12px;font-weight:700;font-size:14px;display:flex;justify-content:space-between;gap:10px}
.mc .res.bad{background:#FEE2E2;color:#991B1B}
.mc .res.ok{background:#DCFCE7;color:#166534}
.mc .p-ok{background:#DCFCE7;color:#166534}
</style>
<header class="top"><div class="wrap">
  <a class="logo" href="/"><img src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get TrackAbility</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">TrackAbility &middot; Staff Time, Leave &amp; Payslips</p>
    <h1>Hours, leave and payslips without the Friday scramble.</h1>
    <p class="lead">Staff clock in on a shop tablet or with a QR code and their own PIN. You see who is in, the overtime and the leave left, and print payslips at month end. It runs from your own Google Sheet. Pay once, no subscription.</p>
    <div class="btns">
      <a class="btn btn-gold" href="https://docs.google.com/spreadsheets/d/1QYVnVzCNZoUjFyd5IeFccJQkHMkt3yLOlHLFnFI3TJs/copy" target="_blank" rel="noopener noreferrer">Try the demo sheet</a>
      <a class="btn btn-line" href="/order?product=trackability">Get TrackAbility for R799</a>
      <a class="btn btn-line" href="#see">See it in action</a>
    </div>
    <p class="fine">R799 once-off. No subscription and no fee per staff member. Make your own copy of the demo sheet, then start the free 72 hour demo. A free setup call is included if you want a hand switching it on.</p>
    <p class="fine"><b>Best for</b> shops, coffee shops, restaurants, salons and small teams paid by the hour. It does not work out PAYE or file anything with SARS.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private TrackAbility link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>In right now</small><b>3</b></div>
        <div class="stat"><small>Missed clock-outs</small><b>1</b></div>
      </div>
      <div class="row"><span>Thandi</span><span class="pill p-ok">In since 08:03</span></div>
      <div class="row"><span>Pieter</span><span class="pill p-ok">In since 07:00</span></div>
      <div class="row"><span>Lerato</span><span class="pill p-d">Missed clock-out</span></div>
      <div class="row"><span>Sipho</span><span class="pill p-n">Off today</span></div>
      <div class="res ok"><span>Payslips for October</span><span>2 final, 2 drafts</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>A timesheet on paper is a guess with a signature on it.</h2>
  <p class="sub">Someone forgot to sign out, the overtime is a fight, and nobody knows how much leave is left. TrackAbility keeps the times as they happen, works out the hours, and shows you the leave and pay before payday.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no price per employee. It runs in your own Google account and keeps working.</p></div>
    <div class="card"><h3>Your staff data stays yours</h3><p>Hours, rates and payslips sit in your own spreadsheet. We never see them. The only thing we check is your activation key and the Google email that activates it, once.</p></div>
    <div class="card"><h3>Every fix has a reason</h3><p>Changing a shift needs a reason, and the log keeps the times before and after. A final payslip locks the hours it was made from.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first clock-in in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order and pay, and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Switch it on once</h3><p>A short guide takes you through setup from your own Google account. Or book a free setup call and we do it together on a screen share, up to 20 minutes.</p></div>
    <div class="card"><span class="n">3</span><h3>Add your staff</h3><p>Each person gets an hourly rate and a 4 digit PIN. Put the clock-in link on the shop tablet, print the QR code for the wall, and you are ready.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">Clocking in, the hours, the leave and the payslip, in one place.</p>
  <ul class="feat">
    <li><b>Clock in on a tablet or a phone</b><span>A tablet that stays at the shop, or a QR code staff scan with their phone. You choose, and you can switch phone clock-in off.</span></li>
    <li><b>A PIN for each person</b><span>Staff tap their name and type their own 4 digit PIN. Five wrong tries lock that person for 15 minutes.</span></li>
    <li><b>Breaks and missed clock-outs</b><span>Start and end a break with one tap. A shift left open too long is flagged so you can fix it.</span></li>
    <li><b>Who is in right now</b><span>The dashboard shows who is at work, who was late, and the overtime this week.</span></li>
    <li><b>Overtime, Sundays and public holidays</b><span>Worked out for you on the Basic Conditions of Employment Act defaults: over 45 hours a week at 1.5 times, Sundays at 1.5 times, public holidays at 2 times. You can change them.</span></li>
    <li><b>Public holidays loaded</b><span>2026 and 2027 are in, with the days moved to Monday when a holiday falls on a Sunday.</span></li>
    <li><b>Leave balances</b><span>Annual, sick and family responsibility leave, worked out the BCEA way, with what each person has left. Unpaid leave too.</span></li>
    <li><b>Payslips</b><span>One click makes a draft for everyone. Add PAYE and anything else, make it final, and print it or save it as a PDF.</span></li>
    <li><b>UIF worked out</b><span>1% from the staff member and 1% from you, up to the ceiling, shown on every payslip.</span></li>
    <li><b>Weekly, fortnightly or monthly</b><span>Pick how often you pay, and the pay periods follow.</span></li>
    <li><b>A log of every change</b><span>Fixed shifts, removed leave and reopened payslips all go in the Log sheet with a reason.</span></li>
    <li><b>CSV for your bookkeeper</b><span>Download the shifts, the leave and the payslips any time.</span></li>
  </ul>
</div></section>

<section class="band" id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">The dashboard in the morning, the week's timesheet, the leave balances, a payslip and the clock-in screen on a phone.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private TrackAbility link</span></div><img src="/images/trackability/dashboard.webp" alt="TrackAbility dashboard showing three staff in right now and one missed clock-out" width="1800" height="1250" loading="lazy"></div>
  <div class="shots">
    <div><div class="shotframe"><img src="/images/trackability/timesheets.webp" alt="TrackAbility weekly timesheet with each shift, breaks, a late start and a missed clock-out" width="1800" height="1250" loading="lazy"></div><p class="cap">The week's timesheet</p></div>
    <div><div class="shotframe"><img src="/images/trackability/leave.webp" alt="TrackAbility leave balances for four staff: annual, sick and family responsibility leave" width="1800" height="1250" loading="lazy"></div><p class="cap">What each person has left</p></div>
    <div><div class="shotframe"><img src="/images/trackability/payslip.webp" alt="A final TrackAbility payslip with the rates, hours, earnings and UIF" width="1800" height="1250" loading="lazy"></div><p class="cap">A payslip, ready to print</p></div>
  </div>
  <div class="phonewrap"><div class="shotframe phone"><img src="/images/trackability/phone-clock.webp" alt="TrackAbility clock-in screen on a phone, with the PIN typed and Clock out ready" width="780" height="1600" loading="lazy"></div><p class="cap">Clocking in with the QR code</p></div>
  <p class="shotnote" style="color:#94A3B8">Screens show made-up demo data.</p>
</div></section>

<section><div class="wrap">
  <h2>A paper timesheet or TrackAbility?</h2>
  <p class="sub">Paper works until someone forgets to sign, or the hours don't add up on payday.</p>
  <div class="tablewrap"><table>
    <thead><tr><th scope="col">What you get</th><th scope="col">Paper or a spreadsheet</th><th scope="col">TrackAbility</th></tr></thead>
    <tbody>
      <tr><th scope="row">The real time someone arrived</th><td class="no">What they wrote down</td><td class="y">From the sheet's clock</td></tr>
      <tr><th scope="row">Overtime and public holiday hours</th><td class="no">You do the sum</td><td class="y">Worked out for you</td></tr>
      <tr><th scope="row">Leave left for each person</th><td class="no">Somewhere in a file</td><td class="y">Always up to date</td></tr>
      <tr><th scope="row">Payslips with UIF</th><td class="no">Typed by hand</td><td class="y">Made from the hours</td></tr>
      <tr><th scope="row">A reason for every change</th><td class="no">No</td><td class="y">Yes, with a log</td></tr>
      <tr><th scope="row">Price</th><td class="y">Your time</td><td class="y">R799 once-off</td></tr>
    </tbody>
  </table></div>
</div></section>

<section><div class="wrap">
  <h2>What it does not do</h2>
  <p class="sub">So you know before you buy.</p>
  <div class="twocol">
    <div class="card"><h3>No PAYE calculation</h3><p>TrackAbility works out the hours, the gross pay and UIF. You or your bookkeeper type in the PAYE from the SARS tables. It doesn't file anything with SARS or the Department of Employment and Labour.</p></div>
    <div class="card"><h3>No payments</h3><p>It makes the payslip. It doesn't pay anyone or connect to your bank. You pay your staff the way you do now.</p></div>
    <div class="card"><h3>No location check</h3><p>The QR code works from anywhere if someone has a photo of it. If that matters, use the shop tablet and switch phone clock-in off. There is no GPS or fingerprint check.</p></div>
    <div class="card"><h3>Not for large payrolls</h3><p>It is made for small teams paid by the hour. Salaried staff on fixed monthly pay, commission and sector bargaining council rules are not built in.</p></div>
  </div>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>R799 once. Yours to keep.</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no price per employee, no renewal.</p>
  <div class="price">
    <div class="card">
      <span class="tag">Once-off</span>
      <h3>TrackAbility: Staff Time, Leave &amp; Payslips</h3>
      <div class="big">R799</div><div style="color:var(--muted);font-size:14px">pay once, no subscription</div>
      <ul><li>The TrackAbility sheet and your activation key</li><li>72 hour demo before you commit</li><li>Short setup guide</li><li>A free setup call, up to 20 minutes, on a screen share</li><li>CSV export any time</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=trackability">Order TrackAbility</a>
      <p style="margin:14px 0 0;font-size:14px;color:var(--muted)">Not happy? We help first with a setup call, then refund you if it still isn't right. <a href="/refunds">Read the refund policy</a>.</p>
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Can I try it first?</summary><p>Yes. Make your own copy of the demo sheet, set it up with the guide, and start the 72 hour demo. Every feature is switched on, and a button loads a made-up coffee shop with four staff, five weeks of shifts, leave and payslips. The demo can be started once per Google account. When it ends, your data stays in the sheet and the app asks for an activation key.</p></details>
  <details><summary>Is it a subscription?</summary><p>No. You pay R799 once. There is no monthly fee, no fee per staff member and nothing to renew.</p></details>
  <details><summary>Can staff clock in from home?</summary><p>Not with the shop tablet. With the QR code they could, if they have a photo of it, so you can switch phone clock-in off and use only the tablet. If a link or the printed code gets out, make new clock-in links and the old ones stop working.</p></details>
  <details><summary>Does it work out PAYE?</summary><p>No. It works out the hours, the gross pay and UIF. You or your bookkeeper type in the PAYE on each payslip. We'd rather you get tax right from the SARS tables than trust a guess.</p></details>
  <details><summary>Is it BCEA compliant?</summary><p>The overtime, Sunday, public holiday and leave rules start on the Basic Conditions of Employment Act defaults, and the payslip shows what section 33 asks for. Your agreements or sector rules may differ, so you can change the rules in Settings. Check them with your bookkeeper.</p></details>
  <details><summary>Someone forgot to clock out. Can it be fixed?</summary><p>Yes. Open the shift on the timesheet, put in the right time and give a reason. The log keeps the times before and after.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see your staff, hours or pay. When you activate, your key and the email of your Google account are checked with us once, and after that TrackAbility keeps working on its own.</p></details>
  <details><summary>Do I need to know how to code?</summary><p>No. Switching it on takes a handful of clicks and the guide shows each one. You can also book a free setup call and we do it together.</p></details>
  <details><summary>What if it isn't right for me?</summary><p>We help first with a free setup call, then refund you if it still isn't right. The refund policy has the details.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Pay the hours that were worked.</h2>
  <p>Switch TrackAbility on once and keep every shift, every leave day and every payslip in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=trackability">Order TrackAbility for R799</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/mini-cash-up">Mini Cash-Up</a> &middot; <a href="/refunds">Refund policy</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; hello.dandelioncreat@outlook.com</span>
</div></footer>
</div>
`;

export default html;
