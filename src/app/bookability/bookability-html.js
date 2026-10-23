// The Bookability sales page, as one static string. app/bookability/page.js injects it.
// Edit the copy here. Images live in public/images/bookability (webp).
// Order link: /order?product=bookability (id from OrderForm.js)

const html = `
<div class="bk">
<style>
.bk{--navy:#0a1628;--navy2:#0f1d33;--gold:#C9A227;--gold-d:#9A7A18;--cream:#F5F1E8;--line:#E7E1D3;--mute:#64748B;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:var(--navy);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased}
.bk *{box-sizing:border-box}
.bk img{max-width:100%;height:auto;display:block}
.bk a{color:inherit}
.bk .wrap{max-width:1120px;margin:0 auto;padding:0 22px}
.bk h1,.bk h2,.bk h3{margin:0;letter-spacing:-.02em;line-height:1.15}
.bk h2{font-size:clamp(28px,4vw,40px);font-weight:700}
.bk .eyebrow{display:inline-block;font-size:12.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--gold-d);margin-bottom:12px}
.bk .btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 26px;border-radius:10px;font-weight:600;font-size:16px;text-decoration:none;transition:filter .15s,transform .05s;border:1px solid transparent}
.bk .btn:hover{filter:brightness(1.07)}.bk .btn:active{transform:translateY(1px)}
.bk .btn-gold{background:var(--gold);color:var(--navy)}
.bk .btn-ghost{border-color:rgba(255,255,255,.35);color:#fff}
.bk .btn-navy{background:var(--navy);color:#fff}
.bk .nav{background:var(--navy);color:#fff}
.bk .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.bk .brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:18px;text-decoration:none}
.bk .brand img{width:34px;height:34px;border-radius:8px;background:var(--navy2);padding:3px;object-fit:contain}
.bk .nav .btn{padding:9px 18px;font-size:14px}
/* hero */
.bk .hero{background:linear-gradient(165deg,var(--navy) 0%,#17213B 100%);color:#fff;padding:64px 0 84px;overflow:hidden}
.bk .hero .grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:48px;align-items:center}
.bk .hero h1{font-size:clamp(36px,5.4vw,60px);font-weight:700}
.bk .hero h1 span{color:var(--gold)}
.bk .hero p.lead{font-size:19px;color:#CBD5E1;margin:20px 0 28px;max-width:520px}
.bk .hero .cta{display:flex;gap:12px;flex-wrap:wrap}
.bk .hero .fine{font-size:13.5px;color:#94A3B8;margin-top:16px}
.bk .frame{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.08)}
.bk .frame .bar{height:30px;background:#E9E4D6;display:flex;align-items:center;gap:6px;padding:0 12px}
.bk .frame .bar i{width:10px;height:10px;border-radius:50%;background:#C9C2AE;display:block}
.bk .stage{position:relative}
.bk .stage .phone{position:absolute;left:-28px;bottom:-44px;width:34%;max-width:200px}
.bk .phone{border:7px solid var(--navy);border-radius:28px;overflow:hidden;background:var(--navy);box-shadow:0 24px 50px rgba(15,23,42,.35)}
.bk .hero .phone{border-color:#0B1222;outline:1px solid rgba(255,255,255,.12)}
/* sections */
.bk section{padding:84px 0}
.bk .center{text-align:center}.bk .center p.sub{margin-left:auto;margin-right:auto}
.bk p.sub{font-size:18px;color:#475569;max-width:640px;margin:14px 0 0}
.bk .white{background:#fff}
.bk .steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:40px}
.bk .step{background:#fff;border:1px solid var(--line);border-radius:14px;padding:22px}
.bk .step b.n{display:inline-flex;width:32px;height:32px;border-radius:50%;background:var(--navy);color:var(--gold);align-items:center;justify-content:center;font-size:14px;margin-bottom:12px}
.bk .step h3{font-size:17px;margin-bottom:6px}.bk .step p{margin:0;color:#475569;font-size:15px}
/* see it in action */
.bk .shot{margin-top:44px}
.bk .shot figcaption,.bk .cap{margin-top:14px;font-size:15.5px;color:#475569}
.bk .shot figcaption b,.bk .cap b{color:var(--navy)}
.bk .two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;margin-top:44px;align-items:start}
.bk .phones{display:flex;gap:28px;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-top:44px}
.bk .phones figure{margin:0;width:260px}
.bk .grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin-top:44px}
.bk .grid3 figure,.bk .two figure{margin:0}
.bk .tile{border-radius:12px;overflow:hidden;border:1px solid var(--line);background:#fff;box-shadow:0 10px 30px rgba(15,23,42,.08)}
.bk .note{font-size:13.5px;color:var(--mute);margin-top:30px}
/* features */
.bk .feat{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:40px}
.bk .f{padding:22px;border-radius:14px;background:var(--cream);border:1px solid var(--line)}
.bk .f h3{font-size:16.5px;margin-bottom:6px}.bk .f p{margin:0;color:#475569;font-size:15px}
.bk .f:before{content:"";display:block;width:26px;height:3px;background:var(--gold);border-radius:2px;margin-bottom:14px}
/* compare */
.bk table{width:100%;border-collapse:collapse;margin-top:34px;background:#fff;border-radius:14px;overflow:hidden;border:1px solid var(--line)}
.bk th,.bk td{padding:16px 20px;text-align:left;border-bottom:1px solid var(--line);font-size:15.5px;vertical-align:top}
.bk th{font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--mute);background:#FAF8F2}
.bk td:first-child{font-weight:600;width:26%}
.bk td:last-child{background:#FFFCF2;font-weight:500}
.bk tr:last-child td{border-bottom:0}
/* price */
.bk .price{max-width:520px;margin:40px auto 0;background:var(--navy);color:#fff;border-radius:20px;padding:36px 34px;text-align:center;box-shadow:0 30px 70px rgba(15,23,42,.3);border-top:5px solid var(--gold)}
.bk .price .amt{font-size:64px;font-weight:700;letter-spacing:-.03em;color:var(--gold);line-height:1}
.bk .price .once{color:#CBD5E1;margin:6px 0 22px}
.bk .price ul{list-style:none;padding:0;margin:0 0 26px;text-align:left}
.bk .price li{padding:9px 0 9px 28px;position:relative;border-top:1px solid #243049;font-size:15.5px;color:#E2E8F0}
.bk .price li:before{content:"";position:absolute;left:2px;top:15px;width:12px;height:7px;border-left:2px solid var(--gold);border-bottom:2px solid var(--gold);transform:rotate(-45deg)}
.bk .price .btn{width:100%}
.bk .help{text-align:center;color:#475569;margin-top:22px;font-size:15.5px}
/* faq */
.bk details{background:#fff;border:1px solid var(--line);border-radius:12px;margin-top:12px;padding:0 20px}
.bk summary{cursor:pointer;padding:18px 0;font-weight:600;font-size:16.5px;list-style:none;display:flex;justify-content:space-between;gap:16px}
.bk summary::-webkit-details-marker{display:none}
.bk summary:after{content:"+";color:var(--gold-d);font-size:22px;line-height:1}
.bk details[open] summary:after{content:"\\2212"}
.bk details p{margin:0 0 18px;color:#475569;font-size:15.5px}
.bk .faq{max-width:780px;margin:0 auto}
/* end */
.bk .end{background:var(--navy);color:#fff;text-align:center;padding:80px 0}
.bk .end p{color:#CBD5E1;font-size:18px;margin:14px auto 28px;max-width:520px}
.bk footer{background:#0B1222;color:#94A3B8;text-align:center;padding:28px 22px;font-size:14px}
.bk footer b{color:var(--gold);font-style:italic;font-weight:500}
@media(max-width:900px){
  .bk .hero .grid{grid-template-columns:1fr;gap:40px}
  .bk .stage .phone{display:none}
  .bk .steps{grid-template-columns:repeat(2,minmax(0,1fr))}
  .bk .two{grid-template-columns:1fr}
  .bk .grid3,.bk .feat{grid-template-columns:repeat(2,minmax(0,1fr))}
  .bk section{padding:64px 0}
}
@media(max-width:560px){
  .bk .steps,.bk .grid3,.bk .feat{grid-template-columns:1fr}
  .bk th,.bk td{padding:12px 12px;font-size:14.5px}
  .bk .price{padding:28px 22px}
  .bk .hero{padding:44px 0 56px}
}
.bk .fine{font-size:14px;color:#94A3B8;margin:14px 0 0}
.bk footer a{color:#CBD5E1;text-decoration:none}
.bk footer a:hover{color:var(--gold)}
.bk footer b{font-style:normal}
.bk a:focus-visible,.bk summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.bk .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.bk h1,.bk h2{text-wrap:balance}
@media (prefers-reduced-motion:reduce){.bk *{transition:none!important}}
</style>

<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Bookability","applicationCategory":"BusinessApplication","description":"An online booking system you own. Clients book from a link or QR code, you manage everything in a private app backed by your own Google Sheet.","offers":{"@type":"Offer","price":"499","priceCurrency":"ZAR"},"publisher":{"@type":"Organization","name":"Dandelion Creations","url":"https://www.dandelioncreations.co.za"}}</script>

<header class="nav"><div class="wrap">
  <a class="brand" href="/"><img src="/images/logo-icon.png" alt="" width="34" height="34"> Dandelion Creations</a>
  <a class="btn btn-gold" href="/order?product=bookability">Get Bookability</a>
</div></header>

<section class="hero"><div class="wrap"><div class="grid">
  <div>
    <span class="eyebrow" style="color:var(--gold)">Owned, not rented</span>
    <h1>Clients book themselves. <span>You own the system.</span></h1>
    <p class="lead">Clients pick a time from a link or a QR code. You see every booking in a private app that runs on your own Google Sheet. Pay R499 once. There is no monthly fee.</p>
    <div class="cta"><a class="btn btn-gold" href="https://docs.google.com/spreadsheets/d/1uclTbWOiMXhSWSKvvc-mcPd2RfOF-BVuoyZRbsLzStU/copy" target="_blank" rel="noopener noreferrer">Try the demo sheet</a><a class="btn btn-ghost" href="/order?product=bookability">Get Bookability for R499</a><a class="btn btn-ghost" href="#see-it">See it in action</a></div>
    <p class="fine">Runs on your own Google account. A 72 hour trial is built in. Make your own copy of the demo sheet to try it first.</p>
    <p class="fine"><b>Best for</b> one business that takes appointments or consultations by the hour.</p>
  </div>
  <div class="stage">
    <div class="frame"><div class="bar"><i></i><i></i><i></i></div>
      <img src="/images/bookability/dashboard.webp" width="1800" height="1400" alt="The Bookability dashboard showing today's bookings, bookings waiting to be confirmed and the next seven days" fetchpriority="high">
    </div>
    <div class="phone"><img src="/images/bookability/phone-start.webp" width="780" height="1688" alt="The client booking page on a phone, with a list of services to choose from"></div>
  </div>
</div></div></section>

<section>
  <div class="wrap center">
    <span class="eyebrow">The idea</span>
    <h2>Most booking tools rent you a calendar</h2>
    <p class="sub">A lot of booking software charges every month for what is mostly a calendar and a form. Stop paying and the booking page goes with it. With Bookability you pay once, and all of it sits in your own Google account.</p>
  </div>
</section>

<section class="white">
  <div class="wrap center">
    <span class="eyebrow">Getting started</span>
    <h2>How you get going</h2>
    <div class="steps" style="text-align:left">
      <div class="step"><b class="n">1</b><h3>Copy the sheet</h3><p>Make a copy of the Google Sheet and paste the Bookability files into it.</p></div>
      <div class="step"><b class="n">2</b><h3>Deploy it</h3><p>Deploy it as a web app. You get two links: a private one for you and a public one for clients.</p></div>
      <div class="step"><b class="n">3</b><h3>Add your services</h3><p>Set your services, how long each takes, your opening hours and your days.</p></div>
      <div class="step"><b class="n">4</b><h3>Share the link</h3><p>Put the link on your website and WhatsApp, or print the QR code for your door.</p></div>
    </div>
    <p class="sub" style="margin-top:28px">The buyer guide walks you through each step.</p>
  </div>
</section>

<section id="see-it">
  <div class="wrap">
    <div class="center">
      <span class="eyebrow">See it in action</span>
      <h2>This is the real app</h2>
      <p class="sub">Every picture here is a screenshot of Bookability running. The business and the people in them are made up.</p>
    </div>

    <figure class="shot" style="margin-left:0;margin-right:0">
      <div class="tile"><img loading="lazy" src="/images/bookability/dashboard.webp" width="1800" height="1400" alt="Dashboard with today's bookings, the week ahead, bookings by service and follow-ups"></div>
      <figcaption><b>Your day at a glance.</b> Today's bookings, what is waiting for you to confirm, the week ahead and the follow-ups you promised.</figcaption>
    </figure>

    <div class="phones">
      <figure><div class="phone"><img loading="lazy" src="/images/bookability/phone-filled.webp" width="780" height="1900" alt="A client choosing a service, a day and a free time on the booking page"></div><p class="cap"><b>What your client sees.</b> They pick a service, a day and a free time.</p></figure>
      <figure><div class="phone"><img loading="lazy" src="/images/bookability/phone-confirmed.webp" width="780" height="1250" alt="The booking confirmation screen with the service, day, time and reference"></div><p class="cap"><b>Then a clear confirmation</b> with the day, the time and a reference number.</p></figure>
      <figure><div class="phone"><img loading="lazy" src="/images/bookability/phone-admin.webp" width="780" height="1688" alt="The Bookability admin dashboard on a phone"></div><p class="cap"><b>Your side works on a phone too.</b> Confirm a booking from wherever you are.</p></figure>
    </div>

    <div class="grid3">
      <figure><div class="tile"><img loading="lazy" src="/images/bookability/bookings.webp" width="1800" height="1125" alt="The bookings list with confirm, move, cancel and WhatsApp buttons"></div><p class="cap"><b>Every booking in one list.</b> Confirm, move or cancel. Message the client on WhatsApp.</p></figure>
      <figure><div class="tile"><img loading="lazy" src="/images/bookability/new-booking.webp" width="1800" height="1125" alt="The new booking form showing only free times"></div><p class="cap"><b>Only free times are offered.</b> You cannot double book yourself.</p></figure>
      <figure><div class="tile"><img loading="lazy" src="/images/bookability/share-qr.webp" width="1800" height="1125" alt="The share page with the public booking link and a QR code"></div><p class="cap"><b>A link and a QR code.</b> Print it, post it, put it in your signature.</p></figure>
      <figure><div class="tile"><img loading="lazy" src="/images/bookability/contact.webp" width="1800" height="1125" alt="A client record with bookings, history and a follow-up note"></div><p class="cap"><b>A history for every client.</b> Bookings, notes and follow-up dates.</p></figure>
      <figure><div class="tile"><img loading="lazy" src="/images/bookability/services.webp" width="1800" height="1125" alt="The services page with length, gap after and a daily limit for each service"></div><p class="cap"><b>Your services.</b> Set the length, a gap afterwards and a daily limit.</p></figure>
      <figure><div class="tile"><img loading="lazy" src="/images/bookability/settings.webp" width="1800" height="1125" alt="Settings for business details, opening hours and the booking page"></div><p class="cap"><b>Your hours and your wording.</b> Days, times, colour and the email clients receive.</p></figure>
    </div>
    <p class="note center">Screenshots use demo data.</p>
  </div>
</section>

<section class="white">
  <div class="wrap">
    <div class="center"><span class="eyebrow">What is inside</span><h2>Everything a booking page needs</h2></div>
    <div class="feat">
      <div class="f"><h3>A public booking page</h3><p>Clients book without an account. It works on a phone.</p></div>
      <div class="f"><h3>No double bookings</h3><p>Overlapping times are blocked, and you choose a gap to keep free after each booking.</p></div>
      <div class="f"><h3>Daily limits</h3><p>Cap how many of each service you take in a day.</p></div>
      <div class="f"><h3>South African time</h3><p>Every time is Africa/Johannesburg time, so a late night booking lands on the right day.</p></div>
      <div class="f"><h3>Confirmation emails</h3><p>Send one when you confirm, or switch on auto-confirm. Write the email in your own words.</p></div>
      <div class="f"><h3>A WhatsApp link</h3><p>One tap opens a message to the client with their booking details filled in.</p></div>
      <div class="f"><h3>A private admin</h3><p>Your admin app sits behind a private link and a PIN that you choose.</p></div>
      <div class="f"><h3>A client list</h3><p>Everyone who books is saved with their history. Add notes and follow-up dates.</p></div>
      <div class="f"><h3>Google Calendar</h3><p>Optional. Confirmed bookings go onto your calendar, and your other events block those times.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="center"><span class="eyebrow">Owned, not rented</span><h2>What changes when you own it</h2></div>
    <table>
      <thead><tr><th></th><th>A booking subscription</th><th>Bookability</th></tr></thead>
      <tbody>
        <tr><td>What you pay</td><td>Every month, for as long as you use it</td><td>R499 once</td></tr>
        <tr><td>Where your data lives</td><td>On the company's servers</td><td>In your own Google Sheet</td></tr>
        <tr><td>If you stop paying</td><td>Your booking page goes away</td><td>Nothing changes. It is yours</td></tr>
        <tr><td>Your client list</td><td>Kept inside the tool</td><td>A sheet you can open and export any time</td></tr>
      </tbody>
    </table>
    <p class="note">The left column describes how subscription booking tools usually work. Terms differ from one tool to the next.</p>
  </div>
</section>

<section class="white" id="price">
  <div class="wrap center">
    <span class="eyebrow">Price</span>
    <h2>One price</h2>
    <div class="price">
      <div class="amt">R499</div>
      <div class="once">once off</div>
      <ul>
        <li>The full app: booking page, admin, client list and QR code</li>
        <li>Your own private link and PIN</li>
        <li>A 72 hour trial built in</li>
        <li>A step by step buyer guide</li>
        <li>No subscription and no renewal</li>
      </ul>
      <a class="btn btn-gold" href="/order?product=bookability">Get Bookability</a>
    </div>
    <p class="help">Questions before you buy? Message us on WhatsApp: <a href="https://wa.me/27728393087"><b>+27 72 839 3087</b></a></p>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="center"><span class="eyebrow">Questions</span><h2>Good to know</h2></div>
    <div class="faq" style="margin-top:30px">
      <details><summary>Do I need to know how to code?</summary><p>No. You copy and paste files into a Google Sheet, follow the guide and click Deploy. If you get stuck, message us on WhatsApp.</p></details>
      <details><summary>Where is my data kept?</summary><p>In a Google Sheet in your own Google account. We never see your bookings or your clients.</p></details>
      <details><summary>Do my clients need an account?</summary><p>No. They open your link, pick a time and type their name and email.</p></details>
      <details><summary>What do I need?</summary><p>A Google account. A free Gmail account works.</p></details>
      <details><summary>Can I try it first?</summary><p>Yes. Every copy has a 72 hour trial built in.</p></details>
      <details><summary>What if two people pick the same time?</summary><p>Whoever books first gets it. The second person is told the time was just taken and is shown the free times again.</p></details>
      <details><summary>Are there any limits?</summary><p>Google limits how many emails an account can send in a day. At the time of writing that is 100 recipients for a free Gmail account, and more for Google Workspace. Confirmation emails count towards it.</p></details>
      <details><summary>Can I change the colours and the wording?</summary><p>Yes. You can change the colour, the logo, the page title, your opening hours and the text of the confirmation email.</p></details>
      <details><summary>Does it work outside South Africa?</summary><p>The booking times are set to South African time. If you are in a different time zone, message us before you buy.</p></details>
    </div>
  </div>
</section>

<section class="end">
  <div class="wrap">
    <h2>Own your bookings</h2>
    <p>Pay once. Keep your data. Let clients book while you get on with the work.</p>
    <a class="btn btn-gold" href="/order?product=bookability">Get Bookability for R499</a>
    <p class="fine" style="margin-top:22px">Also from us: <a href="/connectability" style="color:var(--gold)">Connectability</a> keeps your clients and follow-ups, <a href="/payability" style="color:var(--gold)">Payability</a> sends the invoice.</p>
  </div>
</section>

<footer>Dandelion Creations &middot; <a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/book">Book a Systems Audit</a><br><b>Systems you own, paid for once.</b></footer>
</div>
`;

export default html;