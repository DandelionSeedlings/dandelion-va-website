// The Availability sales page, as one static string. app/availability/page.js injects it.
// Edit the copy here. Images live in public/images/availability (webp).
// Order link: /order?product=stock-supplier (the order form already knows this id).

const html = `
<div class="av">
<style>
.av{--navy:#0F172A;--navy2:#1E293B;--gold:#C9A84C;--gold-d:#A68B3C;--cream:#F5F1E8;--line:#E4DECF;--muted:#475569;--ink:#0F172A;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased;margin:0}
.av *{box-sizing:border-box}
.av a{color:inherit}
.av img{max-width:100%;height:auto;display:block}
.av .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.av header.top{background:var(--navy);color:#fff}
.av header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.av .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.av .logo img{width:30px;height:30px;object-fit:contain;border-radius:6px}
.av .hnav{display:flex;align-items:center;gap:20px}
.av .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.av .navlink:hover{color:var(--gold)}
.av a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.av a.cta:hover{background:var(--gold);color:var(--navy)}
.av .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.av .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.av .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.av h1{font-size:clamp(34px,5vw,52px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.av .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.av .btns{display:flex;gap:12px;flex-wrap:wrap}
.av .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.av .btn-gold{background:var(--gold);color:var(--navy)}
.av .btn-gold:hover{filter:brightness(1.07)}
.av .btn-line{border:1px solid #475569;color:#fff}
.av .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.av .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.av .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.av .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.av .mock .bar,.av .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.av .mock .bar i,.av .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.av .mock .bar span,.av .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.av .mock .body{padding:18px}
.av .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.av .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.av .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.av .stat b{font-size:20px}
.av .stat.gold{border-color:var(--gold);background:#FBF7EA}
.av .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.av .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap;align-self:center}
.av .p-q{background:#FEF3C7;color:#92400E}
.av .p-n{background:#E2E8F0;color:#334155}
.av .p-d{background:#FEE2E2;color:#991B1B}
.av section{padding:72px 0}
.av h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em;text-wrap:balance}
.av .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.av .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.av .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.av .card h3{margin:0 0 8px;font-size:18px}
.av .card p{margin:0;color:var(--muted);font-size:15px}
.av .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.av .band{background:var(--navy);color:#fff}
.av .band h2{color:#fff}
.av .band .sub{color:#CBD5E1}
.av .band .card{background:var(--navy2);border-color:#334155}
.av .band .card p{color:#CBD5E1}
.av .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.av .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.av .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.av .feat b{display:block}
.av .feat span{color:var(--muted);font-size:15px}
.av .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.av .shotframe img{width:100%}
.av .shots{display:grid;grid-template-columns:minmax(0,1fr);gap:28px;margin-top:28px}
.av .phonewrap{max-width:300px;margin:28px auto 0}
.av .shotframe.phone{border-radius:22px}
.av .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
.av .cap{font-size:14px;color:#94A3B8;margin:10px 2px 0}
.av table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;font-size:15px}
.av th,.av td{text-align:left;padding:12px 16px;border-top:1px solid var(--line);vertical-align:top}
.av thead th{background:var(--navy);color:#fff;border-top:0}
.av td.y{font-weight:700}
.av td.no{color:#64748B}
.av .tablewrap{overflow-x:auto}
.av .twocol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.av .price{max-width:460px}
.av .price .card{padding:30px;border:2px solid var(--gold);background:#fff;color:var(--ink)}
.av .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.av .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.av .price li{margin:6px 0}
.av .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.av details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.av summary{cursor:pointer;font-weight:600}
.av details p{margin:10px 0 0;color:var(--muted)}
.av .final{text-align:center}
.av .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.av footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.av footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.av footer a{color:#CBD5E1;text-decoration:none}
.av footer a:hover{color:var(--gold)}
.av a:focus-visible,.av summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
@media (max-width:860px){
.av .hero .grid,.av .cards,.av .feat,.av .twocol{grid-template-columns:minmax(0,1fr)}
.av section{padding:52px 0}
.av .hero{padding:44px 0 56px}
}
@media (max-width:520px){.av .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.av *{transition:none!important}}
</style>

<header class="top"><div class="wrap">
  <a class="logo" href="/"><img src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get Availability</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">Availability &middot; Stock &amp; Supplier Pro</p>
    <h1>Know what you have, what is running low and what is on its way.</h1>
    <p class="lead">Stock levels, suppliers and purchase orders in your own Google Sheet, opened from one private link. You pay once and there is no monthly fee.</p>
    <div class="btns">
      <a class="btn btn-gold" href="/order?product=stock-supplier">Get Availability for R499</a>
      <a class="btn btn-line" href="https://docs.google.com/spreadsheets/d/1d9BpRCHZOXxDHmwiJKwwJ7WisuU4RYtgEInJQJxNQiE/copy" target="_blank" rel="noopener noreferrer">Try the demo sheet</a>
      <a class="btn btn-line" href="#see">See it in action</a>
    </div>
    <p class="fine">R499 once-off. No subscription. 72 hour demo included. Make your own copy of the demo sheet, then start the 72 hour demo with the key STK-DEMO-2026. A free setup call is included if you want a hand switching it on.</p>
    <p class="fine"><b>Best for</b> small businesses that buy stock from suppliers, like makers, shops and workshops. It does not do invoicing, sales or barcode scanning.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private Availability link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Stock value</small><b>R 13 489.50</b></div>
        <div class="stat"><small>Needs reordering</small><b>5 items</b></div>
      </div>
      <div class="row"><span>Jar labels &middot; 0 of 3 roll</span><span class="pill p-d">Out</span></div>
      <div class="row"><span>Soy wax flakes &middot; 23 of 25 kg</span><span class="pill p-q">Low</span></div>
      <div class="row"><span>Glass jar 250ml &middot; 145 of 150</span><span class="pill p-n">Ordered</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>Running out is expensive. So is ordering too much.</h2>
  <p class="sub">Most small businesses find out they are short when a customer is waiting. Availability keeps a running count and tells you when to order, before it becomes a problem.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no price per user. It runs in your own Google account, so it keeps working.</p></div>
    <div class="card"><h3>Your data stays yours</h3><p>Items, suppliers and orders sit in your own spreadsheet. We never see them. The only thing checked with us is your activation key and the Google email that activates it, once.</p></div>
    <div class="card"><h3>A trail for every change</h3><p>Stock only changes through a logged movement, with the date, the reason and who did it. When the count looks wrong, you can see why.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first purchase order in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order, pay, and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Switch it on once</h3><p>A step by step guide takes you through setup and deploying it from your own Google account. Book a free setup call and we do it together on a screen share, up to 20 minutes.</p></div>
    <div class="card"><span class="n">3</span><h3>Open your private link</h3><p>Bookmark one link. Add your suppliers and your items, and the reorder list builds itself from there.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">The parts of stock control that small businesses actually use.</p>
  <ul class="feat">
    <li><b>Items</b><span>Cost, selling price, unit, category, supplier, location and barcode or SKU. Quantities can have decimals, so kilograms and litres work.</span></li>
    <li><b>Reorder levels</b><span>Set a level on each item. When stock reaches it, the item shows as Low, or Out at zero.</span></li>
    <li><b>Reorder list</b><span>Worked out fresh every time you open it. Items already on order show as Ordered, so you do not order twice.</span></li>
    <li><b>Draft orders in one click</b><span>Tick what you need and Availability makes one draft order for each supplier, with a suggested quantity you can change.</span></li>
    <li><b>Purchase orders</b><span>Draft, sent, confirmed, part delivered, received or cancelled. VAT and payment terms come from your settings.</span></li>
    <li><b>Print or email to the supplier</b><span>Print or save as PDF, or email the order from your own Gmail with the PDF attached. It only goes to the address saved on the supplier.</span></li>
    <li><b>Part deliveries</b><span>Book in what arrived. Stock goes up straight away, and you cannot book in more than is still to come.</span></li>
    <li><b>Late orders</b><span>Orders past their expected date are flagged on the dashboard until they arrive.</span></li>
    <li><b>Stock take</b><span>Count the shelves. Availability works out the differences, corrects the stock and shows what the difference is worth at cost.</span></li>
    <li><b>Suppliers and ratings</b><span>Contact details, payment terms and a rating out of 5 for delivery, quality and communication.</span></li>
    <li><b>Dashboard</b><span>Stock value, what needs reordering, open and late orders, spend this month and this year, and stock value by category.</span></li>
    <li><b>Import and export</b><span>Bring suppliers and items across from a CSV file and check a preview first. Download items, suppliers, orders and the stock log as CSV any time.</span></li>
  </ul>
</div></section>

<section class="band" id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">The dashboard you open in the morning, the list of what to order, and a purchase order part way through a delivery.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private Availability link</span></div><img src="/images/availability/dashboard.webp" alt="Availability dashboard showing stock value, items needing reorder, open orders, late orders and spend" width="1800" height="1250" loading="lazy"></div>
  <div class="shots">
    <div><div class="shotframe"><img src="/images/availability/reorder.webp" alt="Availability reorder list with items marked Out, Low or Ordered and a button to create draft orders" width="1800" height="1250" loading="lazy"></div><p class="cap">The reorder list</p></div>
    <div><div class="shotframe"><img src="/images/availability/order.webp" alt="A purchase order in Availability that is part delivered, with a form to book in the delivery" width="1800" height="1250" loading="lazy"></div><p class="cap">A purchase order, with a delivery being booked in</p></div>
    <div><div class="shotframe"><img src="/images/availability/items.webp" alt="Availability items list with stock levels and status" width="1800" height="1250" loading="lazy"></div><p class="cap">Your items, with stock and status</p></div>
  </div>
  <div class="phonewrap"><div class="shotframe phone"><img src="/images/availability/phone-reorder.webp" alt="Availability on a phone" width="780" height="1600" loading="lazy"></div><p class="cap">The same link on a phone</p></div>
  <p class="shotnote" style="color:#94A3B8">Screens show made-up demo data.</p>
</div></section>

<section><div class="wrap">
  <h2>A stock spreadsheet or Availability?</h2>
  <p class="sub">A plain spreadsheet works until a few people start changing it. Availability is still your spreadsheet, with the checks added.</p>
  <div class="tablewrap"><table>
    <thead><tr><th scope="col">What you get</th><th scope="col">A plain stock sheet</th><th scope="col">Availability</th></tr></thead>
    <tbody>
      <tr><th scope="row">Stock levels per item</th><td class="y">Yes</td><td class="y">Yes</td></tr>
      <tr><th scope="row">A reason and a date for every change</th><td class="no">Only if you type it</td><td class="y">Always</td></tr>
      <tr><th scope="row">Stock that cannot go below zero</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">A reorder list that updates itself</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Purchase orders to print or email</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Part deliveries booked against an order</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Stock take with the difference valued</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Price</th><td class="y">Your time</td><td class="y">R499 once-off</td></tr>
    </tbody>
  </table></div>
</div></section>

<section><div class="wrap">
  <h2>What it does not do</h2>
  <p class="sub">So you know before you buy.</p>
  <div class="twocol">
    <div class="card"><h3>No personal logins</h3><p>Everyone with your private link sees and can change everything, including supplier details. Names only fill in who counted or who received a delivery. It cannot hide anything from someone or prove who did it. If you need that, this is not the right tool.</p></div>
    <div class="card"><h3>No barcode scanning</h3><p>The barcode or SKU is a field you can type or paste and search. There is no scanner support.</p></div>
    <div class="card"><h3>One place, simple stock</h3><p>It does not do several warehouses, batches or expiry dates. Each item has one stock number.</p></div>
    <div class="card"><h3>No sales or invoicing</h3><p>Availability does not take orders from your customers or send invoices. Use PayAbility for that. It sends an email only when you click Email to supplier, never on its own.</p></div>
  </div>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>R499 once. Yours to keep.</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no price per user, no renewal.</p>
  <div class="price">
    <div class="card">
      <span class="tag">Once-off</span>
      <h3>Availability: Stock &amp; Supplier Pro</h3>
      <div class="big">R499</div><div style="color:var(--muted);font-size:14px">pay once, no subscription</div>
      <ul><li>The Availability sheet and your activation key</li><li>72 hour demo before you commit</li><li>Step by step setup guide</li><li>A free setup call, up to 20 minutes, on a screen share</li><li>Import from a CSV file, and export any time</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=stock-supplier">Order Availability</a>
      <p style="margin:14px 0 0;font-size:14px;color:var(--muted)">Not happy? We help first with a setup call, then refund you if it still is not right. <a href="/refunds">Read the refund policy</a>.</p>
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Can I try it first?</summary><p>Yes. Make your own copy of the demo sheet, set it up with the guide, and start the 72 hour demo with the key STK-DEMO-2026. Every feature is switched on, and a button loads a made-up candle and soap business so you can look around. The demo can be started once on each sheet. When it ends, your data stays in the sheet and the app asks for an activation key.</p></details>
  <details><summary>Is it a subscription?</summary><p>No. You pay R499 once. There is no monthly fee and nothing to renew.</p></details>
  <details><summary>Do I need to know how to code?</summary><p>No. Switching it on is a handful of clicks and the guide shows each one. You can also book a free setup call and we do it together.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see your items, suppliers or orders. When you activate, your key and the email of your Google account are checked with us once, and after that Availability keeps working on its own.</p></details>
  <details><summary>How does the email to the supplier work?</summary><p>When you click Email to supplier, Availability sends the order from your own Gmail account, with the PDF attached, to the address saved on that supplier. It never sends anything on its own. Google limits how many emails an account can send in a day, and the app tells you if you have reached it. The first time, Google asks you to allow sending email.</p></details>
  <details><summary>Can my whole team use it?</summary><p>Yes. Everyone opens the same private link, and each person picks their name from your team list on their own device. That only fills in who counted stock or received a delivery. It is not a sign-in, so everyone sees and can change everything.</p></details>
  <details><summary>Can I bring my existing stock list across?</summary><p>Yes. Import your suppliers and items from a CSV file. You see a preview first, duplicates are skipped, and the opening stock is written to the stock log.</p></details>
  <details><summary>Can I change stock by typing into the sheet?</summary><p>Please do not. Use the app, so every change gets a reason and a date in the stock log and the numbers stay in step.</p></details>
  <details><summary>Does it work on my phone?</summary><p>Yes, in your phone's browser, from the same private link. It is not an app from an app store.</p></details>
  <details><summary>What if it is not right for me?</summary><p>We help first with a free setup call, then refund you if it still is not right. The refund policy has the details.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Order before you run out.</h2>
  <p>Switch Availability on once and keep your stock and suppliers in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=stock-supplier">Order Availability for R499</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/payability">PayAbility</a> &middot; <a href="/refunds">Refund policy</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; hello.dandelioncreat@outlook.com</span>
</div></footer>
</div>
`;

export default html;
