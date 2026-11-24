// The Profitability sales page, as one static string. app/profitability/page.js injects it.
// Edit the copy here. Images live in public/images/profitability (webp).
// Order link: /order?product=profitability (the order form already knows this id).

const html = `
<div class="pf">
<style>
.pf{--navy:#0F172A;--navy2:#1E293B;--gold:#C9A84C;--gold-d:#A68B3C;--cream:#F5F1E8;--line:#E4DECF;--muted:#475569;--ink:#0F172A;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased;margin:0}
.pf *{box-sizing:border-box}
.pf a{color:inherit}
.pf img{max-width:100%;height:auto;display:block}
.pf .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.pf header.top{background:var(--navy);color:#fff}
.pf header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.pf .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.pf .logo img{width:30px;height:30px;object-fit:contain;border-radius:6px}
.pf .hnav{display:flex;align-items:center;gap:20px}
.pf .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.pf .navlink:hover{color:var(--gold)}
.pf a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.pf a.cta:hover{background:var(--gold);color:var(--navy)}
.pf .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.pf .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.pf .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.pf h1{font-size:clamp(34px,5vw,52px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.pf .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.pf .btns{display:flex;gap:12px;flex-wrap:wrap}
.pf .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.pf .btn-gold{background:var(--gold);color:var(--navy)}
.pf .btn-gold:hover{filter:brightness(1.07)}
.pf .btn-line{border:1px solid #475569;color:#fff}
.pf .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.pf .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.pf .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.pf .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.pf .mock .bar,.pf .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.pf .mock .bar i,.pf .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.pf .mock .bar span,.pf .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.pf .mock .body{padding:18px}
.pf .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.pf .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.pf .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.pf .stat b{font-size:20px}
.pf .stat.gold{border-color:var(--gold);background:#FBF7EA}
.pf .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.pf .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap;align-self:center}
.pf .p-q{background:#FEF3C7;color:#92400E}
.pf .p-n{background:#E2E8F0;color:#334155}
.pf .p-d{background:#FEE2E2;color:#991B1B}
.pf section{padding:72px 0}
.pf h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em;text-wrap:balance}
.pf .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.pf .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.pf .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.pf .card h3{margin:0 0 8px;font-size:18px}
.pf .card p{margin:0;color:var(--muted);font-size:15px}
.pf .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.pf .band{background:var(--navy);color:#fff}
.pf .band h2{color:#fff}
.pf .band .sub{color:#CBD5E1}
.pf .band .card{background:var(--navy2);border-color:#334155}
.pf .band .card p{color:#CBD5E1}
.pf .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.pf .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.pf .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.pf .feat b{display:block}
.pf .feat span{color:var(--muted);font-size:15px}
.pf .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.pf .shotframe img{width:100%}
.pf .shots{display:grid;grid-template-columns:minmax(0,1fr);gap:28px;margin-top:28px}
.pf .phonewrap{max-width:300px;margin:28px auto 0}
.pf .shotframe.phone{border-radius:22px}
.pf .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
.pf .cap{font-size:14px;color:#94A3B8;margin:10px 2px 0}
.pf table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;font-size:15px}
.pf th,.pf td{text-align:left;padding:12px 16px;border-top:1px solid var(--line);vertical-align:top}
.pf thead th{background:var(--navy);color:#fff;border-top:0}
.pf td.y{font-weight:700}
.pf td.no{color:#64748B}
.pf .tablewrap{overflow-x:auto}
.pf .twocol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.pf .price{max-width:460px}
.pf .price .card{padding:30px;border:2px solid var(--gold);background:#fff;color:var(--ink)}
.pf .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.pf .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.pf .price li{margin:6px 0}
.pf .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.pf details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.pf summary{cursor:pointer;font-weight:600}
.pf details p{margin:10px 0 0;color:var(--muted)}
.pf .final{text-align:center}
.pf .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.pf footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.pf footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.pf footer a{color:#CBD5E1;text-decoration:none}
.pf footer a:hover{color:var(--gold)}
.pf a:focus-visible,.pf summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
@media (max-width:860px){
.pf .hero .grid,.pf .cards,.pf .feat,.pf .twocol{grid-template-columns:minmax(0,1fr)}
.pf section{padding:52px 0}
.pf .hero{padding:44px 0 56px}
}
@media (max-width:520px){.pf .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.pf *{transition:none!important}}
</style>
<header class="top"><div class="wrap">
  <a class="logo" href="/"><img src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get Profitability</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">Profitability &middot; Income &amp; Expenses</p>
    <h1>Know what you actually made this month, and what to set aside for VAT.</h1>
    <p class="lead">Your bank statement goes in as a CSV file, sorts itself into categories, and comes out as a profit and loss you can hand to your accountant. It runs in your own Google Sheet, opened from one private link. You pay once.</p>
    <div class="btns">
      <a class="btn btn-gold" href="/order?product=profitability">Get Profitability for R799</a>
      <a class="btn btn-line" href="https://docs.google.com/spreadsheets/d/1EwRdLynpVjoUwVihh6yZRA7ebh0TSrHPERogn1ReV7o/copy" target="_blank" rel="noopener noreferrer">Try the demo sheet</a>
      <a class="btn btn-line" href="#see">See it in action</a>
    </div>
    <p class="fine">R799 once-off. No subscription. 72 hour demo included. Make your own copy of the demo sheet, then start the 72 hour demo with the key INC-DEMO-2026. A free setup call is included if you want a hand switching it on.</p>
    <p class="fine"><b>Best for</b> freelancers and small businesses that want clear income, expenses and profit without paying a bookkeeper to type it in. It is not a SARS filing tool and it does not send invoices.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private Profitability link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat"><small>Income</small><b>R 6 560</b></div>
        <div class="stat gold"><small>Profit</small><b>R 1 685</b></div>
      </div>
      <div class="row"><span>Meta ads &middot; Marketing</span><span class="pill p-n">-R 1 640</span></div>
      <div class="row"><span>Online store sales &middot; Sales</span><span class="pill p-q">R 6 560</span></div>
      <div class="row"><span>Marketing budget &middot; 82% used</span><span class="pill p-d">Getting close</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>Most owners find out how the month went in January.</h2>
  <p class="sub">Receipts in a shoebox, a bank statement nobody has sorted, and a VAT return that needs it all by Friday. Profitability keeps the running picture, so the answer is already there when you ask.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no price per user. It runs in your own Google account, so it keeps working.</p></div>
    <div class="card"><h3>Your data stays yours</h3><p>Transactions, clients and receipts sit in your own spreadsheet. We never see them. The only thing checked with us is your activation key and the Google email that activates it, once.</p></div>
    <div class="card"><h3>Built for South Africa</h3><p>Rand amounts, a financial year that ends in February, 24 South African starter categories, and VAT worked out only if you are VAT registered.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first profit and loss in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order, pay, and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Switch it on once</h3><p>A step by step guide takes you through setup and deploying it from your own Google account. Book a free setup call and we do it together on a screen share, up to 20 minutes.</p></div>
    <div class="card"><span class="n">3</span><h3>Import and look</h3><p>Open your private link, upload a statement, check the preview and import. The dashboard fills in straight away.</p></div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">The parts of bookkeeping that a small business actually needs every week.</p>
  <ul class="feat">
    <li><b>Bank statement import</b><span>Upload a CSV from your bank. The columns are guessed, you check them, preview every line, and then import. Dates without a year, like 26 Sep, are read too.</span></li>
    <li><b>Duplicates are skipped</b><span>Import the same statement twice and nothing is counted twice. Every import is logged and can be undone.</span></li>
    <li><b>Clean names</b><span>"POS Purchase Pick N Pay Asap" becomes "Pick N Pay Asap". The bank's own wording is kept in the notes.</span></li>
    <li><b>Rules that learn</b><span>Change a category once and the words that identify the shop are saved as a rule, so next month's statement sorts itself.</span></li>
    <li><b>Moves between your accounts</b><span>A transfer from one of your accounts to another is filed as a transfer, so it never counts as income or spending.</span></li>
    <li><b>Dashboard</b><span>Income, expenses, profit and margin for this month, last month, this quarter, your financial year or any dates you pick, with a 12 month trend and where the money went.</span></li>
    <li><b>VAT summary</b><span>If you are VAT registered, VAT is worked out from the amount you paid or received. The summary helps you prepare a VAT201. It does not file anything.</span></li>
    <li><b>Reports</b><span>Profit and loss with a month by month table, VAT summary, profit by client and project, and a CSV for your accountant. Print any of them.</span></li>
    <li><b>Budgets</b><span>A monthly limit on a spending category, with a warning level. The dashboard shows the ones to watch.</span></li>
    <li><b>Clients and projects</b><span>See income, expenses and profit for each client and each project, so you know which work pays.</span></li>
    <li><b>Receipts</b><span>Record a receipt and link it to the matching payment. You can see which deductible payments still have no receipt.</span></li>
    <li><b>Recurring entries</b><span>Rent, subscriptions or a retainer. They show up when due and you press Record. Nothing is recorded without that press.</span></li>
    <li><b>Optional AI suggestions</b><span>Add your own Groq key and Profitability can suggest categories for lines it could not sort. Only the description and whether money went in or out are sent, with long numbers hidden. You tick what you want and nothing changes until you apply.</span></li>
    <li><b>Try it with sample data</b><span>One button fills an empty book with six months of made-up figures, and another removes exactly those rows again.</span></li>
  </ul>
</div></section>

<section class="band" id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">The dashboard you open on the first of the month, the list of transactions, and a profit and loss.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private Profitability link</span></div><img src="/images/profitability/dashboard.webp" alt="Profitability dashboard with income, expenses, profit, money in the bank, budgets to watch and a 12 month trend" width="1800" height="1250" loading="lazy"></div>
  <div class="shots">
    <div><div class="shotframe"><img src="/images/profitability/transactions.webp" alt="Profitability transactions list with category, account and amount for each line" width="1800" height="1250" loading="lazy"></div><p class="cap">Every transaction, with category and account</p></div>
    <div><div class="shotframe"><img src="/images/profitability/reports.webp" alt="Profitability profit and loss report listing income and expenses by category" width="1800" height="1250" loading="lazy"></div><p class="cap">Profit and loss for your financial year</p></div>
  </div>
  <div class="phonewrap"><div class="shotframe phone"><img src="/images/profitability/phone-dashboard.webp" alt="Profitability dashboard on a phone" width="780" height="1600" loading="lazy"></div><p class="cap">The same link on a phone</p></div>
  <p class="shotnote" style="color:#94A3B8">Screens show made-up demo data.</p>
</div></section>

<section><div class="wrap">
  <h2>A spreadsheet or Profitability?</h2>
  <p class="sub">A plain spreadsheet works until the statements pile up. Profitability is still your spreadsheet, with the checks added.</p>
  <div class="tablewrap"><table>
    <thead><tr><th scope="col">What you get</th><th scope="col">A plain income sheet</th><th scope="col">Profitability</th></tr></thead>
    <tbody>
      <tr><th scope="row">Income and expenses per month</th><td class="y">Yes</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Bank statement import with a preview</th><td class="no">Copy and paste</td><td class="y">Yes</td></tr>
      <tr><th scope="row">The same statement never counted twice</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Categories that sort themselves</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Transfers kept out of profit</th><td class="no">By hand</td><td class="y">Yes</td></tr>
      <tr><th scope="row">VAT summary</th><td class="no">By hand</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Profit by client and project</th><td class="no">No</td><td class="y">Yes</td></tr>
      <tr><th scope="row">Price</th><td class="y">Your time</td><td class="y">R799 once-off</td></tr>
    </tbody>
  </table></div>
</div></section>

<section><div class="wrap">
  <h2>What it does not do</h2>
  <p class="sub">So you know before you buy.</p>
  <div class="twocol">
    <div class="card"><h3>Not a SARS filing tool</h3><p>The VAT figures are a summary to help you prepare a VAT201. They are not a submission, and they do not replace your accountant.</p></div>
    <div class="card"><h3>No live bank feed</h3><p>You download a CSV from your bank and import it. Profitability never connects to your bank account.</p></div>
    <div class="card"><h3>One owner, no roles</h3><p>Everyone with your private link sees and can change everything. There are no personal logins or permission levels.</p></div>
    <div class="card"><h3>No invoicing, no forecast</h3><p>It records money that has moved. It does not send invoices (use PayAbility for that) and it does not forecast cash flow.</p></div>
  </div>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>R799 once. Yours to keep.</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no price per user, no renewal.</p>
  <div class="price">
    <div class="card">
      <span class="tag">Once-off</span>
      <h3>Profitability: Income &amp; Expenses</h3>
      <div class="big">R799</div><div style="color:var(--muted);font-size:14px">pay once, no subscription</div>
      <ul><li>The Profitability sheet and your activation key</li><li>72 hour demo before you commit</li><li>Step by step setup guide</li><li>A free setup call, up to 20 minutes, on a screen share</li><li>Bank statement import, reports and a CSV for your accountant</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=profitability">Order Profitability</a>
      <p style="margin:14px 0 0;font-size:14px;color:var(--muted)">Not happy? We help first with a setup call, then refund you if it still is not right. <a href="/refunds">Read the refund policy</a>.</p>
    </div>
  </div>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Can I try it first?</summary><p>Yes. Make your own copy of the demo sheet, set it up with the guide, and start the 72 hour demo with the key INC-DEMO-2026. Every feature is switched on, and a button loads six months of made-up figures so you can look around. The demo can be started once on each Google account. When it ends, your data stays in the sheet and the app asks for an activation key.</p></details>
  <details><summary>Is it a subscription?</summary><p>No. You pay R799 once. There is no monthly fee and nothing to renew.</p></details>
  <details><summary>Do I need to know how to code?</summary><p>No. Switching it on is a handful of clicks and the guide shows each one. You can also book a free setup call and we do it together.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet, in your own Google account. We never see your transactions, clients or receipts. When you activate, your key and the email of your Google account are checked with us once, and after that Profitability keeps working on its own.</p></details>
  <details><summary>Which banks does the import work with?</summary><p>Any bank that lets you download a statement as a CSV file. It guesses the date, description and amount columns and you confirm them before anything is saved. It has been built around FNB and Capitec wording, and other banks work as long as the file has those columns.</p></details>
  <details><summary>What if I import the same statement twice?</summary><p>Lines already in the sheet are skipped, so nothing is counted twice. Every import is logged, and you can undo one if something looked wrong.</p></details>
  <details><summary>Am I VAT registered?</summary><p>You tell Profitability once in Settings. If you are not VAT registered, VAT is left out completely. If you are, it is worked out from the amount and shown in a summary you can use to prepare your VAT201.</p></details>
  <details><summary>What does the AI part send, and is it needed?</summary><p>It is optional and off until you add your own Groq key. Only the description and whether money went in or out are sent, with long numbers hidden. Amounts and bank details never leave your sheet. You tick the suggestions you want, and nothing changes until you apply them.</p></details>
  <details><summary>Does it work on my phone?</summary><p>Yes, in your phone's browser, from the same private link. It is not an app from an app store.</p></details>
  <details><summary>What if it is not right for me?</summary><p>We help first with a free setup call, then refund you if it still is not right. The refund policy has the details.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Know your profit before the month ends.</h2>
  <p>Switch Profitability on once and keep your income and expenses in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=profitability">Order Profitability for R799</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/payability">PayAbility</a> &middot; <a href="/refunds">Refund policy</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; hello.dandelioncreat@outlook.com</span>
</div></footer>
</div>
`;

export default html;
