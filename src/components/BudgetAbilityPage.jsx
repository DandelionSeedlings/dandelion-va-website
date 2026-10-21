// BudgetAbility sales page. Static content, styled inside .ba so it cannot affect the rest of the site.
const CSS = `.ba{--navy:#0F172A;--navy2:#1E293B;--gold:#C9A84C;--cream:#F5F1E8;--ink:#0F172A;--muted:#475569;--line:#E4DECF;--white:#fff}
.ba, .ba *{box-sizing:border-box}
.ba{margin:0;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased}
.ba a{color:inherit}
.ba .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.ba header.top{background:var(--navy);color:#fff}
.ba header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.ba .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.ba .logo img.mono{background:none;object-fit:contain;border-radius:6px}
.ba .logo .mono{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--gold);color:var(--navy);font-size:13px;font-weight:800}
.ba .top a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.ba .top a.cta:hover{background:var(--gold);color:var(--navy)}
.ba .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.ba .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.ba .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.ba h1{font-size:clamp(34px,5vw,54px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em}
.ba .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.ba .btns{display:flex;gap:12px;flex-wrap:wrap}
.ba .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.ba .btn-gold{background:var(--gold);color:var(--navy)}
.ba .btn-gold:hover{filter:brightness(1.07)}
.ba .btn-line{border:1px solid #475569;color:#fff}
.ba .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.ba .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.ba .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.ba .mock .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.ba .mock .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.ba .mock .bar span{margin-left:8px;font-size:12px;color:#64748B}
.ba .mock .body{padding:18px}
.ba .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.ba .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.ba .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.ba .stat b{font-size:20px}
.ba .stat.gold{border-color:var(--gold);background:#FBF7EA}
.ba .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.ba .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap}
.ba .p-paid{background:#DCFCE7;color:#166534}
.ba .p-sent{background:#DBEAFE;color:#1E40AF}
.ba .p-over{background:#FEE2E2;color:#991B1B}
.ba section{padding:72px 0}
.ba h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em}
.ba .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.ba .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.ba .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.ba .card h3{margin:0 0 8px;font-size:18px}
.ba .card p{margin:0;color:var(--muted);font-size:15px}
.ba .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.ba .band{background:var(--navy);color:#fff}
.ba .band h2{color:#fff}
.ba .band .sub{color:#CBD5E1}
.ba .band .card{background:var(--navy2);border-color:#334155}
.ba .band .card p{color:#CBD5E1}
.ba .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.ba .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.ba .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.ba .feat b{display:block}
.ba .feat span{color:var(--muted);font-size:15px}
.ba .price{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;max-width:820px}
.ba .price .card{padding:30px}
.ba .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.ba .price .card.hl{border:2px solid var(--gold)}
.ba .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.ba .price li{margin:6px 0}
.ba .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.ba details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.ba summary{cursor:pointer;font-weight:600}
.ba details p{margin:10px 0 0;color:var(--muted)}
.ba .final{text-align:center}
.ba .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.ba footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.ba footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
@media (max-width:860px){.ba .hero .grid{grid-template-columns:minmax(0,1fr)}
.ba .cards, .ba .feat, .ba .price{grid-template-columns:minmax(0,1fr)}
.ba section{padding:52px 0}
.ba .hero{padding:44px 0 56px}
}
.ba .p-lead{background:#DBEAFE;color:#1E40AF}
.ba .p-qual{background:#FEF3C7;color:#92400E}
.ba .p-cust{background:#DCFCE7;color:#166534}
.ba .p-today{background:#FEE2E2;color:#991B1B}
.ba .price.one{grid-template-columns:minmax(0,1fr);max-width:460px}

.ba .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.ba .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.ba .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.ba .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.ba .shotframe img{display:block;width:100%;height:auto}
.ba .shots{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,.55fr);gap:18px;margin-top:18px;align-items:start}
.ba .shots .shotframe.phone{border-radius:22px}
.ba .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
@media (max-width:860px){.ba .shots{grid-template-columns:minmax(0,1fr)}.ba .shots .shotframe.phone{max-width:280px;margin:0 auto}}

.ba .p-warn{background:#FEF3C7;color:#92400E}
.ba .p-ok{background:#DCFCE7;color:#166534}
.ba .p-info{background:#DBEAFE;color:#1E40AF}
.ba .shots.two{grid-template-columns:minmax(0,1fr) minmax(0,.55fr)}
.ba .shots.three{grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,.55fr)}
@media (max-width:860px){.ba .shots.two,.ba .shots.three{grid-template-columns:minmax(0,1fr)}}
.ba .note{background:#fff;border:1px solid var(--line);border-left:4px solid var(--gold);border-radius:10px;padding:16px 20px;max-width:44em;margin-top:28px}
.ba .note p{margin:0;color:var(--muted);font-size:15px}
`

const BODY = `<header class="top"><div class="wrap">
  <a class="logo" href="https://www.dandelioncreations.co.za/"><img class="mono" src="/images/logo-icon.png?v=2" alt="" width="30" height="30">Dandelion Creations</a>
  <a class="cta" href="#buy">Get BudgetAbility</a>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">BudgetAbility</p>
    <h1>Know where your money goes, in any currency.</h1>
    <p class="lead">Accounts, spending, bills, budgets, savings goals, debt and insurance in one place. It lives in your own Google Sheet and works in rand, dollars, euros or whatever you use.</p>
    <div class="btns">
      <a class="btn btn-gold" href="/order?product=budgetability">Get BudgetAbility, R499</a>
      <a class="btn btn-line" href="#see">See the screens</a>
    </div>
    <p class="fine">One payment. No subscription. 72 hour demo included.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private BudgetAbility link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Net worth</small><b>R176 384</b></div>
        <div class="stat"><small>Kept this month</small><b>31%</b></div>
      </div>
      <div class="row"><span>Everyday account &middot; ZAR</span><span class="pill p-ok">R23 800</span></div>
      <div class="row"><span>Travel dollars &middot; USD</span><span class="pill p-info">$1 362</span></div>
      <div class="row"><span>Groceries budget</span><span class="pill p-warn">40% used</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>Money in five places is hard to see.</h2>
  <p class="sub">A bank app here, a spreadsheet there, and a pile of renewals in your head. BudgetAbility puts it on one screen that you set up once and keep.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no per-user pricing. It runs in your own Google account, so it keeps working.</p></div>
    <div class="card"><h3>Your numbers stay yours</h3><p>Everything is stored in your own spreadsheet. We never see your accounts or what you spend.</p></div>
    <div class="card"><h3>Made for more than one currency</h3><p>Keep a rand account next to a dollar account. Each one is totalled on its own, and you choose when to combine them.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first month tracked in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Deploy it once</h3><p>A short guide walks you through the setup. Then pick your home currency and add your accounts.</p></div>
    <div class="card"><span class="n">3</span><h3>Add as you go</h3><p>Bookmark one private link. Add a payment in a few taps, or plan the month's bills in one click.</p></div>
  </div>
  <div class="note" style="background:var(--navy2);border-color:#334155;border-left-color:var(--gold)"><p style="color:#CBD5E1">You type your transactions in. BudgetAbility does not connect to your bank, so nothing is pulled in without you, and nobody can see your login. Exchange rates are the ones you enter yourself.</p></div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">Everything a household needs to see the whole picture.</p>
  <ul class="feat">
    <li><b>Accounts and net worth</b><span>Bank, savings, cash, cards and loans. Balances follow your transactions, and cards show as money owed.</span></li>
    <li><b>Transactions</b><span>Spending, income and transfers with search, filters by month, account and category, and a duplicate warning.</span></li>
    <li><b>Any currency</b><span>Every account has its own currency. Dollars stay dollars. Switch between one currency or all of them converted to your home currency.</span></li>
    <li><b>Your own exchange rates</b><span>Type the rate you want to use. A currency with no rate is left out of the combined total and named, so nothing is guessed.</span></li>
    <li><b>Bills and a payments calendar</b><span>Add rent, school fees and insurance once. Plan a whole month in one click and see what is due, paid or overdue.</span></li>
    <li><b>Budgets and a monthly review</b><span>Set a limit per category and see where you stand. The review compares this month with last month in plain words.</span></li>
    <li><b>Savings goals and sinking funds</b><span>See progress, and how much to put away each month to reach the date you set.</span></li>
    <li><b>Debt payoff plan</b><span>Pick highest interest first or smallest balance first. See your debt free date and what extra payments save.</span></li>
    <li><b>Subscriptions</b><span>Everything that renews, its monthly cost, and a heads up before it does.</span></li>
    <li><b>Insurance</b><span>Policies, premiums, cover and renewal dates in one list.</span></li>
    <li><b>Reports and CSV export</b><span>Income and spending by month, top categories and merchants. Download your transactions to share with an accountant.</span></li>
    <li><b>Private by design</b><span>A long private key on your link, and a lockout after repeated wrong guesses.</span></li>
  </ul>
</div></section>

<section id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">The screens you use every week. Real screenshots of the app.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private BudgetAbility link</span></div><img src="/images/budgetability/dashboard.webp" alt="BudgetAbility dashboard with net worth, income and spending by month, categories and each currency on its own" width="2080" height="2360" loading="lazy"></div>
  <div class="shots two">
    <div class="shotframe"><img src="/images/budgetability/accounts.webp" alt="BudgetAbility accounts in rand, dollars and euros with their own balances" width="2080" height="1440" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/budgetability/phone-dashboard.webp" alt="BudgetAbility dashboard on a phone" width="780" height="1688" loading="lazy"></div>
  </div>
  <div class="shots">
    <div class="shotframe"><img src="/images/budgetability/budget.webp" alt="BudgetAbility budget against spending with a monthly review" width="2080" height="2200" loading="lazy"></div>
    <div class="shotframe"><img src="/images/budgetability/debts.webp" alt="BudgetAbility debt payoff plan with debt free date and interest saved" width="2080" height="2000" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/budgetability/phone-transactions.webp" alt="BudgetAbility transactions on a phone" width="780" height="1688" loading="lazy"></div>
  </div>
  <div class="shots">
    <div class="shotframe"><img src="/images/budgetability/bills.webp" alt="BudgetAbility bills with a payments calendar" width="2080" height="2200" loading="lazy"></div>
    <div class="shotframe"><img src="/images/budgetability/reports.webp" alt="BudgetAbility reports with income and spending by month" width="2080" height="2200" loading="lazy"></div>
    <div class="shotframe"><img src="/images/budgetability/goals.webp" alt="BudgetAbility savings goals with progress bars" width="2080" height="1400" loading="lazy"></div>
  </div>
  <p class="shotnote">Screens show sample data.</p>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>Pay once, keep it</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no renewal.</p>
  <div class="price one">
    <div class="card hl" style="background:#fff;color:var(--ink)">
      <span class="tag">Once off</span>
      <h3>BudgetAbility</h3>
      <div class="big">R499</div><div style="color:var(--muted);font-size:14px">one payment</div>
      <ul><li>BudgetAbility sheet and activation key</li><li>Step by step deploy guide</li><li>72 hour demo before you commit</li><li>Works in any currency</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=budgetability">Order now</a>
    </div>
  </div>
  <p class="sub" style="margin:28px 0 0;color:#CBD5E1">Running a business too? <a href="/payability" style="color:var(--gold)">Payability</a> handles invoices and <a href="/receiptsnap" style="color:var(--gold)">ReceiptSnap</a> handles receipts.</p>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Do I need to know how to code?</summary><p>No. Deploying is a handful of clicks and the guide shows each one.</p></details>
  <details><summary>Is there a monthly fee?</summary><p>No. You pay once and it runs in your own Google account.</p></details>
  <details><summary>Does it connect to my bank?</summary><p>No. You add transactions yourself, which keeps your bank details out of it completely. Adding one takes a few taps.</p></details>
  <details><summary>Can I use it outside South Africa?</summary><p>Yes. Choose any home currency and give each account its own. Dollars, euros, pounds and other currencies all work.</p></details>
  <details><summary>How does it handle more than one currency?</summary><p>Each account has one currency and its transactions follow it. You can look at one currency at a time, or combine them into your home currency using the exchange rates you type in. It does not look rates up for you.</p></details>
  <details><summary>Where is my data stored?</summary><p>In your own Google Sheet. We never see it.</p></details>
  <details><summary>Does it work on my phone?</summary><p>Yes. Open your private link in your phone browser and add it to your home screen. You need a connection to save changes.</p></details>
  <details><summary>Is this financial advice?</summary><p>No. It is a record keeping and planning tool. The debt plan is a projection from the numbers you enter, so check big decisions with a qualified adviser.</p></details>
  <details><summary>Can I try it first?</summary><p>Yes. BudgetAbility includes a 72 hour demo with every feature, and a button that loads a sample household so you can look around. The demo can be started once on each sheet.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>See the whole picture, in one place.</h2>
  <p>Set BudgetAbility up once and keep your household money in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=budgetability">Get BudgetAbility, R499</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span>WhatsApp +27 72 839 3087 &middot; dandelioncreat@outlook.com</span>
</div></footer>`

const LD = {"@context": "https://schema.org", "@type": "Product", "name": "BudgetAbility", "description": "A household money tracker in your own Google Sheet. Accounts, budgets, bills, goals and debt payoff in any currency. One payment, no subscription.", "brand": {"@type": "Brand", "name": "Dandelion Creations"}, "offers": {"@type": "Offer", "price": "499", "priceCurrency": "ZAR", "availability": "https://schema.org/InStock"}}

export default function BudgetAbilityPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div className="ba" dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
