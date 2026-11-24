// The Mini Cash-Up sales page, as one static string. app/mini-cash-up/page.js injects it.
// Edit the copy here. Images live in public/images/mini-cash-up (webp).
// Order link: /order?product=mini-cash-up (added to the order form in this pack).

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
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get Mini Cash-Up</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">Mini Cash-Up &middot; Daily Cash Reconciliation</p>
    <h1>Know the till balances before you lock the door.</h1>
    <p class="lead">Close each till in a few minutes. Type in the float, the takings and what you counted, and Mini Cash-Up shows straight away if the drawer is over or short. It runs from your own Google Sheet. Pay once, no subscription.</p>
    <div class="btns">
      <a class="btn btn-gold" href="https://docs.google.com/spreadsheets/d/1kLpENl7Hnq_hFcTyH-qaITBcr3I5oe9INAy2c0it14A/copy" target="_blank" rel="noopener noreferrer">Try the demo sheet</a>
      <a class="btn btn-line" href="/order?product=mini-cash-up">Get Mini Cash-Up for R499</a>
      <a class="btn btn-line" href="#see">See it in action</a>
    </div>
    <p class="fine">R499 once-off. No subscription. Make your own copy of the demo sheet, then start the 72 hour demo with the key CSH-DEMO-2026. A free setup call is included if you want a hand switching it on.</p>
    <p class="fine"><b>Best for</b> shops, coffee shops, restaurants and salons that take cash and close a till every day. It does not do stock, invoicing or bank reconciliation.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private Mini Cash-Up link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Takings today</small><b>R 6 290</b></div>
        <div class="stat"><small>Expected in drawer</small><b>R 2 300</b></div>
      </div>
      <div class="tally">
        <div class="row"><span>Opening float</span><span>R 500</span></div>
        <div class="row"><span>Cash sales</span><span>R 1 885</span></div>
        <div class="row"><span>Milk from the corner shop</span><span>- R 85</span></div>
        <div class="row"><span>Counted</span><b>R 2 250</b></div>
      </div>
      <div class="res bad"><span>R 50 short</span><span>Reason needed</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>A short till you find a week later is hard to explain.</h2>
  <p class="sub">The till slip says one thing, the drawer says another, and nobody remembers why. Mini Cash-Up checks the drawer while the day is still fresh, and asks for a reason while someone can still give one.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no price per till. It runs in your own Google account and keeps working.</p></div>
    <div class="card"><h3>Your numbers stay yours</h3><p>Every cash-up sits in your own spreadsheet. We never see it. The only thing we check is your activation key and the Google email that activates it, once.</p></div>
    <div class="card"><h3>Locked once it is closed</h3><p>A closed day can't be quietly changed. Reopening one needs a reason, and the log keeps who did it and when.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first closed till in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order and pay, and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Switch it on once</h3><p>A short guide takes you through setup from your own Google account. Or book a free setup call and we do it together on a screen share, up to 20 minutes.</p></div>
    <div class="card"><span class="n">3</span><h3>Cash up at closing</h3><p>Bookmark one private link on the till computer or a phone. Add your tills and the names of the people who cash up, and you are ready.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">The four things a cash-up has to get right, and the reports that come out of them.</p>
  <ul class="feat">
    <li><b>Daily till reconciliation</b><span>Opening float, takings by cash, card, EFT and other, and the counted cash. Expected cash and the difference update as you type.</span></li>
    <li><b>Count by notes and coins</b><span>R200 x 2 = R400, all the way down to 10c, with the total at the bottom. The total becomes the counted cash, and it prints on the end-of-day report.</span></li>
    <li><b>Card machine slips</b><span>Type each machine's end-of-day total, like Yoco or Speedpoint. If the slips don't match the card sales on the till, you'll see it straight away.</span></li>
    <li><b>Payouts and petty cash</b><span>Milk, a delivery tip, stamps. Each one is listed against the day, so the drawer still adds up.</span></li>
    <li><b>Float tracking</b><span>Tomorrow's float comes from what was left in the drawer today. If someone opens with a different amount, the dashboard says so.</span></li>
    <li><b>Discrepancy alerts</b><span>You pick the amount. A drawer or a card slip total out by more than that is flagged, and the day can't close without a reason.</span></li>
    <li><b>End-of-day reports</b><span>Every till for the day on one page, ready to print or save as a PDF for the file.</span></li>
    <li><b>More than one till</b><span>Each till is cashed up on its own. With one till, you never see a till picker.</span></li>
    <li><b>Named cashiers</b><span>Pick who is closing from a list, so you can see whose shift a shortfall was on.</span></li>
    <li><b>Month view</b><span>Every day of the month at a glance, coloured balanced, over, short or not closed, plus your financial year so far.</span></li>
    <li><b>VAT if you need it</b><span>Switch it on and see how much of the takings is VAT. Each day keeps the rate it was closed with.</span></li>
    <li><b>CSV for your bookkeeper</b><span>Download the days and the payouts for any month.</span></li>
  </ul>
</div></section>

<section class="band" id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">The dashboard at the end of the day, a cash-up being counted, the month at a glance and the report you print.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private Mini Cash-Up link</span></div><img src="/images/mini-cash-up/dashboard.webp" alt="Mini Cash-Up dashboard showing today's tills, one open and one not started, and discrepancy alerts for the month" width="1800" height="1250" loading="lazy"></div>
  <div class="shots">
    <div><div class="shotframe"><img src="/images/mini-cash-up/cashup.webp" alt="Counting the drawer in Mini Cash-Up: expected R 2 300, counted R 2 285, R 15 short with a reason" width="1800" height="1250" loading="lazy"></div><p class="cap">Counting the drawer</p></div>
    <div><div class="shotframe"><img src="/images/mini-cash-up/month.webp" alt="Mini Cash-Up month calendar with each day marked balanced, over, short, alert or open" width="1800" height="1250" loading="lazy"></div><p class="cap">The month at a glance</p></div>
    <div><div class="shotframe"><img src="/images/mini-cash-up/report.webp" alt="A Mini Cash-Up end-of-day report for two tills" width="1800" height="1250" loading="lazy"></div><p class="cap">The end-of-day report</p></div>
  </div>
  <div class="phonewrap"><div class="shotframe phone"><img src="/images/mini-cash-up/phone-cashup.webp" alt="Mini Cash-Up on a phone, with the drawer balanced" width="780" height="1600" loading="lazy"></div><p class="cap">The same link on a phone</p></div>
  <p class="shotnote" style="color:#94A3B8">Screens show made-up demo data.</p>
</div></section>

<section><div class="wrap">
  <h2>A cash-up book or Mini Cash-Up?</h2>
  <p class="sub">A book or a spreadsheet works until someone adds it up wrong. Mini Cash-Up is still your spreadsheet, with the sums and checks done for you.</p>
  <div class="tablewrap"><table>
    <thead><tr><th scope="col">What you get</th><th scope="col">A cash-up book or sheet</th><th scope="col">Mini Cash-Up</th></tr></thead>
    <tbody>
      <tr><th scope="row">Expected cash worked out for you</th><td class="no">You do the sum</td><td class="y">Yes, as you type</td></tr>
      <tr><th scope="row">A reason for every big difference</th><td class="no">Only if someone writes it</td><td class="y">Always</td></tr>
      <tr><th scope="row">Closed days that can't be changed quietly</th><td class="no">No</td><td class="y">Yes, with a log</td></tr>
      <tr><th scope="row">Card slips checked against the till</th><td class="no">Sometimes</td><td class="y">Every day</td></tr>
      <tr><th scope="row">Float carried to the next day</th><td class="no">By memory</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Month view and end-of-day report</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Price</th><td class="y">Your time</td><td class="y">R499 once-off</td></tr>
    </tbody>
  </table></div>
</div></section>

<section><div class="wrap">
  <h2>What it does not do</h2>
  <p class="sub">So you know before you buy.</p>
  <div class="twocol">
    <div class="card"><h3>No personal logins</h3><p>Everyone with your private link sees and can change every cash-up. The cashier name records who closed the till. It is not a sign-in and can't prove who did what. If you need separate logins, this is not the right tool.</p></div>
    <div class="card"><h3>No bank or card machine connection</h3><p>You type in the totals from the till slip and the card machine slips, and Mini Cash-Up checks one against the other. It doesn't connect to your bank, your card machine or your POS, and EFTs aren't matched to your bank statement.</p></div>
    <div class="card"><h3>No safe or cash drop tracking</h3><p>Each day records what was banked or taken to the safe. It doesn't keep a running safe balance or track bank deposit slips.</p></div>
    <div class="card"><h3>No stock, no invoices, no SARS filing</h3><p>It records the cash-up and nothing else. Alerts show in the app only, with no emails or messages. The VAT figure is a guide for your bookkeeper, not a return.</p></div>
  </div>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>R499 once. Yours to keep.</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no price per till, no renewal.</p>
  <div class="price">
    <div class="card">
      <span class="tag">Once-off</span>
      <h3>Mini Cash-Up: Daily Cash Reconciliation</h3>
      <div class="big">R499</div><div style="color:var(--muted);font-size:14px">pay once, no subscription</div>
      <ul><li>The Mini Cash-Up sheet and your activation key</li><li>72 hour demo before you commit</li><li>Short setup guide</li><li>A free setup call, up to 20 minutes, on a screen share</li><li>CSV export any time</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=mini-cash-up">Order Mini Cash-Up</a>
      <p style="margin:14px 0 0;font-size:14px;color:var(--muted)">Not happy? We help first with a setup call, then refund you if it still isn't right. <a href="/refunds">Read the refund policy</a>.</p>
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Can I try it first?</summary><p>Yes. Make your own copy of the demo sheet, set it up with the guide, and start the 72 hour demo with the key CSH-DEMO-2026. Every feature is switched on, and a button loads a made-up coffee shop with two tills so you can look around. The demo can be started once per Google account. When it ends, your data stays in the sheet and the app asks for an activation key.</p></details>
  <details><summary>Is it a subscription?</summary><p>No. You pay R499 once. There is no monthly fee and nothing to renew.</p></details>
  <details><summary>We have more than one till. Does that work?</summary><p>Yes. Add each till in Settings with its usual float. Each till gets its own cash-up every day, and the end-of-day report puts them together.</p></details>
  <details><summary>What happens when a drawer is short?</summary><p>You see it while you count. If it is out by more than the amount you set, say R20, the day can't close until someone gives a reason. It also shows on the dashboard as an alert.</p></details>
  <details><summary>Someone made a mistake on a closed day. Can it be fixed?</summary><p>Yes. Open the day and reopen it with a reason. Fix it, then close it again. The log keeps the reason, who reopened it and when.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see your cash-ups. When you activate, your key and the email of your Google account are checked with us once, and after that Mini Cash-Up keeps working on its own.</p></details>
  <details><summary>Does it work on a phone?</summary><p>Yes, in your phone's browser, from the same private link. It is not an app from an app store.</p></details>
  <details><summary>Do I need to know how to code?</summary><p>No. Switching it on takes a handful of clicks and the guide shows each one. You can also book a free setup call and we do it together.</p></details>
  <details><summary>What if it isn't right for me?</summary><p>We help first with a free setup call, then refund you if it still isn't right. The refund policy has the details.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Close the till with the answer, not a guess.</h2>
  <p>Switch Mini Cash-Up on once and keep every cash-up in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=mini-cash-up">Order Mini Cash-Up for R499</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/payability">PayAbility</a> &middot; <a href="/refunds">Refund policy</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; hello.dandelioncreat@outlook.com</span>
</div></footer>
</div>
`;

export default html;
