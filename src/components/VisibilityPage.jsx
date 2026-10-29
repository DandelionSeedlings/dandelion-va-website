// Visibility sales page. Static content, styled inside .vs so it cannot affect the rest of the site.
const CSS = `.vs{--navy:#0a1628;--navy2:#0f1d33;--gold:#C9A227;--cream:#F5F1E8;--ink:#0a1628;--muted:#475569;--line:#E4DECF;--white:#fff}
.vs, .vs *{box-sizing:border-box}
.vs{margin:0;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased}
.vs a{color:inherit}
.vs .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.vs header.top{background:var(--navy);color:#fff}
.vs header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.vs .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.vs .logo img.mono{background:none;object-fit:contain;border-radius:6px}
.vs .logo .mono{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--gold);color:var(--navy);font-size:13px;font-weight:800}
.vs .top a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.vs .top a.cta:hover{background:var(--gold);color:var(--navy)}
.vs .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.vs .hero .grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px;align-items:center}
.vs .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.vs h1{font-size:clamp(34px,5vw,54px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em}
.vs .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.vs .btns{display:flex;gap:12px;flex-wrap:wrap}
.vs .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.vs .btn-gold{background:var(--gold);color:var(--navy)}
.vs .btn-gold:hover{filter:brightness(1.07)}
.vs .btn-line{border:1px solid #475569;color:#fff}
.vs .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.vs .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.vs .mock{background:#fff;color:var(--ink);border-radius:16px;box-shadow:0 30px 60px -20px rgba(0,0,0,.55);overflow:hidden;border-top:4px solid var(--gold)}
.vs .mock .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.vs .mock .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.vs .mock .bar span{margin-left:8px;font-size:12px;color:#64748B}
.vs .mock .body{padding:18px}
.vs .stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-bottom:14px}
.vs .stat{border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px}
.vs .stat small{display:block;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:.06em}
.vs .stat b{font-size:20px}
.vs .stat.gold{border-color:var(--gold);background:#FBF7EA}
.vs .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-top:1px solid #EEF2F7;font-size:14px}
.vs .pill{font-size:11px;font-weight:700;border-radius:999px;padding:2px 9px;white-space:nowrap}
.vs .p-paid{background:#DCFCE7;color:#166534}
.vs .p-sent{background:#DBEAFE;color:#1E40AF}
.vs .p-over{background:#FEE2E2;color:#991B1B}
.vs section{padding:72px 0}
.vs h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em}
.vs .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.vs .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.vs .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.vs .card h3{margin:0 0 8px;font-size:18px}
.vs .card p{margin:0;color:var(--muted);font-size:15px}
.vs .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.vs .band{background:var(--navy);color:#fff}
.vs .band h2{color:#fff}
.vs .band .sub{color:#CBD5E1}
.vs .band .card{background:var(--navy2);border-color:#334155}
.vs .band .card p{color:#CBD5E1}
.vs .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.vs .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.vs .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.vs .feat b{display:block}
.vs .feat span{color:var(--muted);font-size:15px}
.vs .price{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;max-width:820px}
.vs .price .card{padding:30px}
.vs .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.vs .price .card.hl{border:2px solid var(--gold)}
.vs .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.vs .price li{margin:6px 0}
.vs .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.vs details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.vs summary{cursor:pointer;font-weight:600}
.vs details p{margin:10px 0 0;color:var(--muted)}
.vs .final{text-align:center}
.vs .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.vs footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.vs footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
@media (max-width:860px){.vs .hero .grid{grid-template-columns:minmax(0,1fr)}
.vs .cards, .vs .feat, .vs .price{grid-template-columns:minmax(0,1fr)}
.vs section{padding:52px 0}
.vs .hero{padding:44px 0 56px}
}
.vs .band .feat li{border-top-color:#334155}
.vs .band .feat b{color:#fff}
.vs .band .feat span{color:#CBD5E1}
.vs .p-lead{background:#DBEAFE;color:#1E40AF}
.vs .p-qual{background:#FEF3C7;color:#92400E}
.vs .p-cust{background:#DCFCE7;color:#166534}
.vs .p-today{background:#FEE2E2;color:#991B1B}
.vs .price.one{grid-template-columns:minmax(0,1fr);max-width:460px}

.vs .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.vs .shotframe .bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F8FAFC;border-bottom:1px solid #E2E8F0}
.vs .shotframe .bar i{width:9px;height:9px;border-radius:50%;background:#CBD5E1;display:block}
.vs .shotframe .bar span{margin-left:8px;font-size:12px;color:#64748B}
.vs .shotframe img{display:block;width:100%;height:auto}
.vs .shots{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,.55fr);gap:18px;margin-top:18px;align-items:start}
.vs .shots .shotframe.phone{border-radius:22px}
.vs .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
@media (max-width:860px){.vs .shots{grid-template-columns:minmax(0,1fr)}.vs .shots .shotframe.phone{max-width:280px;margin:0 auto}}

.vs .p-pend{background:#FEF3C7;color:#92400E}
.vs .p-appr{background:#DCFCE7;color:#166534}
.vs .p-rev{background:#DBEAFE;color:#1E40AF}
.vs .shots.two{grid-template-columns:minmax(0,1fr) minmax(0,.55fr)}
.vs .shots.three{grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,.55fr)}
@media (max-width:860px){.vs .shots.two,.vs .shots.three{grid-template-columns:minmax(0,1fr)}}
.vs .note{background:#fff;border:1px solid var(--line);border-left:4px solid var(--gold);border-radius:10px;padding:16px 20px;max-width:44em;margin-top:28px}
.vs .note p{margin:0;color:var(--muted);font-size:15px}
.vs .hnav{display:flex;align-items:center;gap:20px}
.vs .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.vs .navlink:hover{color:var(--gold)}
.vs footer a{color:#CBD5E1;text-decoration:none}
.vs footer a:hover{color:var(--gold)}
.vs a:focus-visible,.vs summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.vs .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
.vs h1,.vs h2{text-wrap:balance}
@media (max-width:520px){.vs .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.vs *{transition:none!important}}
`

const BODY = `<header class="top"><div class="wrap">
  <a class="logo" href="/"><img class="mono" src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get Visibility</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">Visibility</p>
    <h1>Your AI creates. Visibility organises.</h1>
    <p class="lead">ChatGPT, Claude or Gemini writes your posts. Visibility keeps them in one calendar in your own Google Sheet, checks they are ready, lets your client approve them from a link, and opens your accounts when it is time to post.</p>
    <div class="btns">
      <a class="btn btn-gold" href="https://docs.google.com/spreadsheets/d/14rueM9UD2oRzW_MdaZydAj4DOywuE610HGh-TN4nays/copy" target="_blank" rel="noopener noreferrer">Try the demo sheet</a>
      <a class="btn btn-line" href="/order?product=content-planner">Get Visibility, R299</a>
      <a class="btn btn-line" href="#how">See how it works</a>
    </div>
    <p class="fine">One payment. No subscription. 72 hour demo included. Make your own copy of the demo sheet, then start the 72 hour demo with the key CNT-DEMO-2026.</p>
    <p class="fine"><b>Best for</b> small businesses and anyone who posts for clients, and already uses an AI to write. It does not write posts itself and it does not post for you.</p>
  </div>
  <div class="mock" aria-hidden="true">
    <div class="bar"><i></i><i></i><i></i><span>Your private Visibility link</span></div>
    <div class="body">
      <div class="stats">
        <div class="stat gold"><small>Planned this month</small><b>12</b></div>
        <div class="stat"><small>Ready to publish</small><b>3</b></div>
      </div>
      <div class="row"><span>Saturday market stall &middot; Story</span><span class="pill p-appr">Ready</span></div>
      <div class="row"><span>How to brew a better cup &middot; Carousel</span><span class="pill p-rev">Designing</span></div>
      <div class="row"><span>Gift boxes are open &middot; Single Image</span><span class="pill p-pend">Writing</span></div>
    </div>
  </div>
</div></div>

<section><div class="wrap">
  <h2>The posts are written. Now they are scattered.</h2>
  <p class="sub">Half in a chat history, a few in a notes app, the image text in a message to yourself. Nobody knows what is going out on Thursday. Visibility gives all of it one home.</p>
  <div class="cards">
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no per-user pricing. It runs in your own Google account, so it keeps working.</p></div>
    <div class="card"><h3>Your content stays yours</h3><p>Every post sits in your own spreadsheet. We never see your captions, your clients or your numbers.</p></div>
    <div class="card"><h3>Works with any AI</h3><p>Use ChatGPT, Claude, Gemini or whatever you already like. Visibility builds the prompts and takes the answers.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From an empty calendar to a month of posts.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Ask your AI</h3><p>Answer a few questions about your business once. Visibility turns them into a ready prompt that you paste into your AI.</p></div>
    <div class="card"><span class="n">2</span><h3>Bring it back</h3><p>Paste one post, or import a whole month as a file. Captions land on the right day, split by platform.</p></div>
    <div class="card"><span class="n">3</span><h3>Check, approve, post</h3><p>Tick the checklist, send it to your client if you need a yes, then copy the caption and open your account.</p></div>
  </div>
  <div class="note" style="background:var(--navy2);border-color:#334155;border-left-color:var(--gold)"><p style="color:#CBD5E1">AI can make mistakes with facts, prices and dates. Visibility keeps a checklist on every post so someone reads it before it goes out.</p></div>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">Everything between the AI's answer and the post going live.</p>
  <ul class="feat">
    <li><b>Content calendar</b><span>A monthly view with every post colour coded by status. Click a day to add one.</span></li>
    <li><b>Save from AI</b><span>Paste what your AI wrote and Visibility sorts it into LinkedIn, Facebook, Instagram, TikTok and the rest.</span></li>
    <li><b>Import a month</b><span>Ask your AI for a CSV, drop the file in, check the preview, and a whole month is planned in a minute.</span></li>
    <li><b>Content strategy</b><span>A short brand brief becomes a strategy prompt, and the pillars it suggests are used on every post.</span></li>
    <li><b>Image idea and text on the image</b><span>Keep the picture brief and the exact headline and footer for Canva next to the caption. Link the finished image too.</span></li>
    <li><b>Ready checklist</b><span>Caption written, fits the platform, hook, message, call to action, image, spelling. A post is ready when every box is ticked.</span></li>
    <li><b>Character counters</b><span>Each platform shows its own limit while you edit, so nothing gets cut off after you post.</span></li>
    <li><b>Go and post</b><span>Copy the caption with its hashtags and open your account in a new tab. You paste and press post.</span></li>
    <li><b>Rewrite for other platforms</b><span>Wrote it for LinkedIn? One button builds the prompt that gets your AI to adapt it for Instagram or X.</span></li>
    <li><b>Library</b><span>Save the posts that worked and reuse them next season instead of starting again.</span></li>
    <li><b>Results</b><span>Type in reach, engagement, clicks and enquiries for each post. See totals, the change on last month and what worked best.</span></li>
    <li><b>Client approval</b><span>Send one link. Your client approves each post or asks for changes, in English or Afrikaans, with no login.</span></li>
  </ul>
</div></section>

<section id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">Real screenshots of the app, with sample content for a coffee roaster.</p>
  <div class="shotframe"><div class="bar"><i></i><i></i><i></i><span>Your private Visibility link</span></div><img src="/images/visibility/dashboard.webp" alt="Visibility dashboard with posts planned this month, ready to publish, empty days and where every post is" width="1600" height="1388" loading="lazy"></div>
  <div class="shots two">
    <div class="shotframe"><img src="/images/visibility/calendar.webp" alt="Visibility monthly calendar with posts coloured by status" width="1600" height="1388" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/visibility/phone-dashboard.webp" alt="Visibility dashboard on a phone" width="780" height="1688" loading="lazy"></div>
  </div>
  <div class="shotframe" style="margin-top:18px"><img src="/images/visibility/editor.webp" alt="Visibility post editor with captions per platform, the ready checklist and the image idea" width="1600" height="1388" loading="lazy"></div>
  <p class="shotnote">Screens show sample data.</p>
</div></section>

<section class="band" id="approval"><div class="wrap">
  <h2>Clients approve from a link</h2>
  <p class="sub">If you post for other people, you know the chase. Send one link instead. Your client reads each post on their phone and taps Approve or Ask for changes. They do not need an account or an app.</p>
  <div class="shots two" style="margin-top:0;align-items:center">
    <div class="shotframe" style="background:#fff"><img src="/images/visibility/approvals.webp" alt="Visibility approvals page showing a client link with two posts approved, one with changes asked and one not reviewed" width="1600" height="872" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/visibility/client-phone.webp" alt="The client's approval page on a phone, with the post and Approve and Ask for changes buttons" width="780" height="1688" loading="lazy"></div>
  </div>
  <ul class="feat" style="margin-top:28px">
    <li><b>Answers in one place</b><span>See what was approved, what needs changes and the exact comment, then set approved posts to Ready in one click.</span></li>
    <li><b>English or Afrikaans</b><span>Your client reads it in the language that suits them and can switch at any time.</span></li>
    <li><b>Safe by design</b><span>Each link opens only the posts you chose. It expires after 7, 14 or 30 days and you can switch it off whenever you like.</span></li>
    <li><b>Edits are caught</b><span>If you change a post after your client answered, they are asked to look at it again.</span></li>
  </ul>
</div></section>

<section id="buy"><div class="wrap">
  <h2>Pay once, keep it</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no renewal.</p>
  <div class="price one">
    <div class="card hl">
      <span class="tag">Once off</span>
      <h3>Visibility</h3>
      <div class="big">R299</div><div style="color:var(--muted);font-size:14px">one payment</div>
      <ul><li>Visibility sheet and activation key</li><li>Step by step deploy guide</li><li>Client approval links included</li><li>Works with any AI you already use</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=content-planner">Order now</a>
    </div>
  </div>
  <p class="sub" style="margin:28px 0 0">Sending invoices too? <a href="/payability" style="color:#A98A33">PayAbility</a> handles the money side.</p>
</div></section>

<section class="band"><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details style="color:var(--ink)"><summary>Do I need to know how to code?</summary><p>No. Deploying is a handful of clicks and the setup guide shows each one with screenshots.</p></details>
  <details style="color:var(--ink)"><summary>Is there a monthly fee?</summary><p>No. You pay once. If you use a paid AI plan that is between you and the AI company. The free plans work too.</p></details>
  <details style="color:var(--ink)"><summary>Does Visibility write my posts?</summary><p>No. Your AI writes them. Visibility builds the prompts, takes the answers and keeps everything organised so nothing gets lost.</p></details>
  <details style="color:var(--ink)"><summary>Does it post for me automatically?</summary><p>No. When a post is ready you tap a button, the caption is copied and your account opens in a new tab. You paste and press post. That keeps you in control of what goes out.</p></details>
  <details style="color:var(--ink)"><summary>Which platforms does it cover?</summary><p>LinkedIn, Facebook, Instagram, X, Threads, TikTok, YouTube and Google Business. You choose the ones you use, and you can add your own.</p></details>
  <details style="color:var(--ink)"><summary>Does my client need a Google account?</summary><p>No. They open the link on any phone or computer and answer. Nothing to install.</p></details>
  <details style="color:var(--ink)"><summary>Where is my data stored?</summary><p>In your own Google Sheet. Your posts, your results and your client answers never pass through us.</p></details>
  <details style="color:var(--ink)"><summary>Does it work on my phone?</summary><p>Yes. Open your private link in your phone browser. The calendar, editor and approvals are all made to work on a small screen.</p></details>
  <details style="color:var(--ink)"><summary>Can I try it first?</summary><p>Yes. Make your own copy of the demo sheet and start the 72 hour demo with the key CNT-DEMO-2026. It has every feature and can be started once on each sheet.</p></details>
</div></section>

<section class="final"><div class="wrap">
  <h2>Know what is going out this week.</h2>
  <p style="color:var(--muted);max-width:34em;margin:0 auto 26px">Set Visibility up once and keep your content in a system you own.</p>
  <a class="btn btn-gold" href="/order?product=content-planner">Get Visibility, R299</a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; dandelioncreat@outlook.com</span>
</div></footer>`

const LD = {"@context": "https://schema.org", "@type": "Product", "name": "Visibility", "description": "A social media content planner that runs in your own Google Sheet. Plan posts from any AI, check they are ready, get client approval from a link, and track results. One payment, no subscription.", "brand": {"@type": "Brand", "name": "Dandelion Creations"}, "offers": {"@type": "Offer", "price": "299", "priceCurrency": "ZAR", "availability": "https://schema.org/InStock"}}

export default function VisibilityPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div className="vs" dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
