// The OrderAbility sales page, as one static string. app/orderability/page.js injects it.
// Edit the copy here. Images live in public/images/orderability (webp).
// Order link: /order?product=orderability (the order form knows this id).

const html = `
<div class="oa">
<style>
.oa{--navy:#0F172A;--navy2:#1E293B;--teal:#1F4E4A;--gold:#C9A84C;--gold-d:#A68B3C;--cream:#F5F1E8;--line:#E4DECF;--muted:#475569;--ink:#0F172A;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased;margin:0}
.oa *{box-sizing:border-box}
.oa a{color:inherit}
.oa img{max-width:100%;height:auto;display:block}
.oa .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.oa header.top{background:var(--navy);color:#fff}
.oa header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.oa .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.oa .logo img{width:30px;height:30px;object-fit:contain;border-radius:6px}
.oa .hnav{display:flex;align-items:center;gap:20px}
.oa .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.oa .navlink:hover{color:var(--gold)}
.oa a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.oa a.cta:hover{background:var(--gold);color:var(--navy)}
.oa .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.oa .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.oa .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.oa h1{font-size:clamp(34px,5vw,52px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.oa .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.oa .btns{display:flex;gap:12px;flex-wrap:wrap}
.oa .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.oa .btn-gold{background:var(--gold);color:var(--navy)}
.oa .btn-gold:hover{filter:brightness(1.07)}
.oa .btn-line{border:1px solid #475569;color:#fff}
.oa .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.oa .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.oa .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.oa .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.oa .mock .bar,.oa .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.oa .mock .bar i,.oa .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.oa .mock .bar span,.oa .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.oa .mock .body{padding:18px}
.oa .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.oa .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.oa .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.oa .stat b{font-size:20px}
.oa .stat.gold{border-color:var(--gold);background:#FBF7EA}
.oa .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.oa .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap;align-self:center}
.oa .p-q{background:#FEF3C7;color:#92400E}
.oa .p-n{background:#E2E8F0;color:#334155}
.oa .p-d{background:#FEE2E2;color:#991B1B}
.oa section{padding:72px 0}
.oa h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em;text-wrap:balance}
.oa .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.oa .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.oa .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.oa .card h3{margin:0 0 8px;font-size:18px}
.oa .card p{margin:0;color:var(--muted);font-size:15px}
.oa .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.oa .band{background:var(--navy);color:#fff}
.oa .band h2{color:#fff}
.oa .band .sub{color:#CBD5E1}
.oa .band .card{background:var(--navy2);border-color:#334155}
.oa .band .card p{color:#CBD5E1}
.oa .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.oa .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.oa .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.oa .feat b{display:block}
.oa .feat span{color:var(--muted);font-size:15px}
.oa .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.oa .shotframe img{width:100%}
.oa .phones{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:8px}.oa .phones .shotframe{border-radius:22px;border-top:4px solid var(--gold)}.oa .phones .cap{text-align:center}
.oa .phonewrap{max-width:300px;margin:28px auto 0}
.oa .shotframe.phone{border-radius:22px}
.oa .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
.oa .cap{font-size:14px;color:#94A3B8;margin:10px 2px 0}
.oa table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;font-size:15px}
.oa th,.oa td{text-align:left;padding:12px 16px;border-top:1px solid var(--line);vertical-align:top}
.oa thead th{background:var(--navy);color:#fff;border-top:0}
.oa td.y{font-weight:700}
.oa td.no{color:#64748B}
.oa .tablewrap{overflow-x:auto}
.oa .twocol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.oa .price{max-width:460px}
.oa .price .card{padding:30px;border:2px solid var(--gold);background:#fff;color:var(--ink)}
.oa .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.oa .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.oa .price li{margin:6px 0}
.oa .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.oa details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.oa summary{cursor:pointer;font-weight:600}
.oa details p{margin:10px 0 0;color:var(--muted)}
.oa .final{text-align:center}
.oa .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.oa footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.oa footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.oa footer a{color:#CBD5E1;text-decoration:none}
.oa footer a:hover{color:var(--gold)}
.oa a:focus-visible,.oa summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
@media (max-width:860px){
.oa .phones{grid-template-columns:repeat(2,minmax(0,1fr))}
.oa .hero .grid,.oa .cards,.oa .feat,.oa .twocol{grid-template-columns:minmax(0,1fr)}
.oa section{padding:52px 0}
.oa .hero{padding:44px 0 56px}
}
@media (max-width:520px){.oa .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.oa *{transition:none!important}}
</style>
<header class="top"><div class="wrap">
  <a class="logo" href="/"><img src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get OrderAbility</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">OrderAbility &middot; for small home businesses</p>
    <h1>Stop writing invoices by hand. Know who has paid and what is left.</h1>
    <p class="lead">Take orders from WhatsApp, send an invoice, track payments and stock, order from your suppliers and see your profit. All on your phone, in your own Google Sheet, with one private link.</p>
    <div class="btns">
      <a class="btn btn-gold" href="/order?product=orderability">Get OrderAbility for R799</a>
      <a class="btn btn-line" href="#see">See it in action</a>
    </div>
    <p class="fine">R799 once-off. No subscription. A 72 hour demo is included, and a free setup call if you want a hand switching it on.</p>
    <p class="fine"><b>Best for</b> people who sell from home and take orders on WhatsApp, like bakers, crafters and small resellers. It does not do VAT, card payments or an online shop.</p>
  </div>
  <div class="phonewrap" style="margin:0 auto"><div class="shotframe phone"><img src="/images/orderability/today.webp" alt="The OrderAbility Today screen showing what customers owe, sales this month and invoices waiting for payment" width="780" height="1600"></div></div>
</div></div>

<section><div class="wrap">
  <h2>The order book, the calculator and the notebook, in one place.</h2>
  <p class="sub">Orders arrive as messages and voice notes, get written in a book, and end up on handwritten invoices. Then nobody is sure who has paid. OrderAbility keeps all of it together.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no price per user. It runs in your own Google account, so it keeps working.</p></div>
    <div class="card"><h3>Your data stays yours</h3><p>Customers, orders and money sit in your own spreadsheet. We never see them. Only your activation key and the Google email that activates it are checked with us, once.</p></div>
    <div class="card"><h3>Made for a phone</h3><p>Big buttons and plain words. Open one link, add it to your home screen and use it like an app.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first invoice in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order, pay, and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Switch it on once</h3><p>A short guide takes you through it, from your own Google account. Book a free setup call and we do it together on a screen share, up to 20 minutes.</p></div>
    <div class="card"><span class="n">3</span><h3>Open your private link</h3><p>Add it to your phone home screen. Add your items and customers, and take your first order.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">The parts of running a small selling business that you use every day.</p>
  <ul class="feat">
    <li><b>Orders in a few taps</b><span>Pick the customer, pick the items, add a discount if you give one. Items you have not listed can be typed in on the spot.</span></li>
    <li><b>Invoices</b><span>Send the invoice as a WhatsApp message, or print it or save it as a PDF. Your banking details are on it.</span></li>
    <li><b>Who owes you</b><span>The first screen shows what customers owe and which invoices are waiting, oldest first. Part payments are fine.</span></li>
    <li><b>Customers</b><span>Phone numbers, addresses and every order a customer has made, in one place.</span></li>
    <li><b>Delivery and addresses</b><span>Mark an order as collect, courier, PUDO or you deliver. Courier and PUDO orders keep their own address, and one tap copies the details for the booking.</span></li>
    <li><b>Stock that counts itself</b><span>Stock goes down when you save an order and you are told when an item is running low. Items you do not count, like made to order, are left alone.</span></li>
    <li><b>Suppliers and cost prices</b><span>Keep your suppliers and what each item costs you, so you can see your profit and not only your sales.</span></li>
    <li><b>Orders to suppliers</b><span>Make an order for a supplier and send it on WhatsApp. When it arrives, tick it off and your stock goes up and the cost price updates.</span></li>
    <li><b>Any expense</b><span>Airtime, transport, packaging, fees. Add them as they happen and they show up next to your income.</span></li>
    <li><b>Money page</b><span>Money in, money out, profit on what you sold, where the money went and what sold best, by month, year or all time. Income counts when the money is actually received.</span></li>
    <li><b>Reminders</b><span>A friendly payment reminder, ready to send on WhatsApp, for anyone who has not paid yet.</span></li>
    <li><b>Export</b><span>Download your orders, payments and spending as CSV any time.</span></li>
  </ul>
</div></section>

<section class="band" id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">What it looks like on a phone: your day at a glance, a courier order, an order to a supplier and your money.</p>
  <div class="phones">
    <div><div class="shotframe"><img src="/images/orderability/today.webp" alt="OrderAbility Today screen with what customers owe and invoices waiting for payment" width="780" height="1600" loading="lazy"></div><p class="cap">Your day at a glance</p></div>
    <div><div class="shotframe"><img src="/images/orderability/delivery.webp" alt="An OrderAbility order with a courier address and a button to copy the delivery details" width="780" height="1600" loading="lazy"></div><p class="cap">A courier order</p></div>
    <div><div class="shotframe"><img src="/images/orderability/supplier-order.webp" alt="An OrderAbility order to a supplier with items, what is paid and a button for when everything arrived" width="780" height="1600" loading="lazy"></div><p class="cap">An order to a supplier</p></div>
    <div><div class="shotframe"><img src="/images/orderability/money.webp" alt="The OrderAbility money page with profit on what you sold and where the money went" width="780" height="1600" loading="lazy"></div><p class="cap">Profit and spending</p></div>
  </div>
  <p class="shotnote" style="color:#94A3B8">Screens show made-up demo data.</p>
</div></section>

<section><div class="wrap">
  <h2>An order book and calculator, or OrderAbility?</h2>
  <p class="sub">Paper works until you have forgotten who paid. OrderAbility keeps the same simple way of working and does the adding up for you.</p>
  <div class="tablewrap"><table>
    <thead><tr><th scope="col">What you get</th><th scope="col">Order book and paper invoices</th><th scope="col">OrderAbility</th></tr></thead>
    <tbody>
      <tr><th scope="row">A neat invoice for every order</th><td class="no">Written by hand each time</td><td class="y">In seconds</td></tr>
      <tr><th scope="row">Who has paid and who owes</th><td class="no">You have to remember</td><td class="y">Always on screen</td></tr>
      <tr><th scope="row">Finding an old order or customer</th><td class="no">Paging through the book</td><td class="y">Search</td></tr>
      <tr><th scope="row">Stock left on the shelf</th><td class="no">A guess</td><td class="y">Counted for you</td></tr>
      <tr><th scope="row">Orders to your suppliers</th><td class="no">A message you retype</td><td class="y">Made and sent</td></tr>
      <tr><th scope="row">Profit, not only sales</th><td class="no">No</td><td class="y">Yes, once you add cost prices</td></tr>
      <tr><th scope="row">Price</th><td class="y">Your time</td><td class="y">R799 once-off</td></tr>
    </tbody>
  </table></div>
</div></section>

<section><div class="wrap">
  <h2>What it does not do</h2>
  <p class="sub">So you know before you buy.</p>
  <div class="twocol">
    <div class="card"><h3>No personal logins</h3><p>Everyone with your private link sees and can change everything. Keep the link to yourself and the people you trust. If you need to hide things from staff, this is not the right tool.</p></div>
    <div class="card"><h3>No VAT reports</h3><p>It is made for small sellers who are not VAT registered. If you need VAT invoices and reports, look at PayAbility.</p></div>
    <div class="card"><h3>No card payments or online shop</h3><p>It records the payments you receive, whether cash, EFT or card. It does not take payment from customers and it does not have a website shop.</p></div>
    <div class="card"><h3>WhatsApp stays in your hands</h3><p>OrderAbility writes the message and opens WhatsApp. You tap send. It never messages anyone on its own.</p></div>
  </div>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>R799 once. Yours to keep.</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no price per user, no renewal.</p>
  <div class="price">
    <div class="card">
      <span class="tag">Once-off</span>
      <h3>OrderAbility</h3>
      <div class="big">R799</div><div style="color:var(--muted);font-size:14px">pay once, no subscription</div>
      <ul><li>The OrderAbility sheet and your activation key</li><li>72 hour demo with sample orders to look around</li><li>Step by step setup guide</li><li>A free setup call, up to 20 minutes, on a screen share</li><li>Export your data as CSV any time</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=orderability">Order OrderAbility</a>
      <p style="margin:14px 0 0;font-size:14px;color:var(--muted)">Not happy? We help first with a setup call, then refund you if it still is not right. <a href="/refunds">Read the refund policy</a>.</p>
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Can I try it first?</summary><p>Every screen is shown above. Once you have your sheet, it starts with a 72 hour demo. A button loads a made-up small business so you can look around, and you can remove it again. When the demo ends, your data stays in the sheet and the app asks for your activation key.</p></details>
  <details><summary>Is it a subscription?</summary><p>No. You pay R799 once. There is no monthly fee and nothing to renew.</p></details>
  <details><summary>I am not technical. Can I use it?</summary><p>Yes. It is built for people who mostly use a phone. Switching it on is a handful of clicks and the guide shows each one. You can also book a free setup call and we do it together.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see your customers, orders or money. When you activate, your key and the email of your Google account are checked with us once, and after that it keeps working on its own.</p></details>
  <details><summary>Can I use it on my phone?</summary><p>Yes, in your phone&#39;s browser, from the same private link. Add it to your home screen and it opens like an app. It is not an app from an app store.</p></details>
  <details><summary>Does it send messages to my customers?</summary><p>No. It writes the invoice or reminder and opens WhatsApp with the message ready. You choose whether to send it.</p></details>
  <details><summary>Can two people use it?</summary><p>Yes. Share the private link with the person you trust and you both see the same orders. There are no separate logins, so keep the link private.</p></details>
  <details><summary>Can I change things by typing into the sheet?</summary><p>Please do not. Use the app so stock and payments stay in step.</p></details>
  <details><summary>Is there a difference between OrderAbility and Availability?</summary><p>OrderAbility is for small home businesses and covers orders, invoices, payments, simple stock and your suppliers in one place. <a href="/availability">Availability</a> is a stock and supplier tracker for businesses that need more detailed purchasing, like stock takes and several supplier details.</p></details>
  <details><summary>What if it is not right for me?</summary><p>We help first with a free setup call, then refund you if it still is not right. The refund policy has the details.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Put your orders in one place.</h2>
  <p>Switch OrderAbility on once and run your orders, invoices and money from a system you own.</p>
  <a class="btn btn-gold" href="/order?product=orderability">Order OrderAbility for R799</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/payability">PayAbility</a> &middot; <a href="/refunds">Refund policy</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; hello.dandelioncreat@outlook.com</span>
</div></footer>
</div>
`;

export default html;
