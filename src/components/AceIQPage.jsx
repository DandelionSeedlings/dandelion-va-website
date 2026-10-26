'use client'
import { useEffect } from 'react'

// AceIQ sales page. Static content, styled inside .aq so it cannot affect the rest of the site.
// Set DEMO_COPY_URL to the "make a copy" link of the AceIQ demo sheet to show the demo button.
const DEMO_COPY_URL = ''
// The year end special runs to the end of 2026. From 2027 the price is R499.
const SPECIAL_ENDS = '2027-01-01'

const CSS = `.aq{--navy:#0a1628;--navy2:#0f1d33;--gold:#C9A227;--cream:#F5F1E8;--ink:#0a1628;--muted:#475569;--line:#E4DECF;--blue:#1D4ED8;--green:#15803D;--purple:#7E22CE;--orange:#C2410C;--teal:#0F766E;--pink:#BE185D}
.aq, .aq *{box-sizing:border-box}
.aq{margin:0;font-family:var(--font-inter),Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6;-webkit-font-smoothing:antialiased}
.aq a{color:inherit}
.aq .wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.aq header.top{background:var(--navy);color:#fff}
.aq header.top .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
.aq .logo{font-weight:800;letter-spacing:.02em;text-decoration:none;display:flex;align-items:center;gap:10px}
.aq .logo img.mono{background:none;object-fit:contain;border-radius:6px}
.aq .top a.cta{font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--gold);color:var(--gold);padding:8px 16px;border-radius:999px}
.aq .top a.cta:hover{background:var(--gold);color:var(--navy)}
.aq .hnav{display:flex;align-items:center;gap:20px}
.aq .navlink{font-size:14px;color:#CBD5E1;text-decoration:none}
.aq .navlink:hover{color:var(--gold)}
.aq .hero{background:var(--navy);color:#fff;padding:64px 0 88px}
.aq .hero .grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:48px;align-items:center}
.aq .eyebrow{color:var(--gold);font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.aq h1{font-size:clamp(34px,5vw,54px);line-height:1.08;margin:0 0 18px;font-weight:800;letter-spacing:-.02em}
.aq .hero p.lead{font-size:18px;color:#CBD5E1;margin:0 0 28px;max-width:34em}
.aq .btns{display:flex;gap:12px;flex-wrap:wrap}
.aq .btn{display:inline-block;padding:14px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:16px}
.aq .btn-gold{background:var(--gold);color:var(--navy)}
.aq .btn-gold:hover{filter:brightness(1.07)}
.aq .btn-line{border:1px solid #475569;color:#fff}
.aq .btn-line:hover{border-color:var(--gold);color:var(--gold)}
.aq .fine{font-size:14px;color:#94A3B8;margin-top:16px}
.aq .special{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 12px;margin-bottom:10px}
.aq .was{text-decoration:line-through;color:#94A3B8;font-weight:500;font-size:.6em;margin-left:8px}
.aq .shotframe{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 24px 50px -24px rgba(15,23,42,.35);border-top:4px solid var(--gold)}
.aq .hero .shotframe{border-color:transparent;border-top-color:var(--gold);box-shadow:0 30px 60px -20px rgba(0,0,0,.55)}
.aq .shotframe img{display:block;width:100%;height:auto}
.aq .shotframe.phone{border-radius:22px}
.aq .shots{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:18px;align-items:start}
.aq .shots.p3{grid-template-columns:minmax(0,1.5fr) minmax(0,.55fr) minmax(0,.55fr)}
.aq .shotnote{font-size:13px;color:var(--muted);margin:14px 0 0}
.aq section{padding:72px 0}
.aq h2{font-size:clamp(26px,3.6vw,36px);line-height:1.15;margin:0 0 14px;letter-spacing:-.015em;text-wrap:balance}
.aq h1{text-wrap:balance}
.aq .sub{color:var(--muted);max-width:40em;margin:0 0 36px;font-size:17px}
.aq .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.aq .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px}
.aq .card h3{margin:0 0 8px;font-size:18px}
.aq .card p{margin:0;color:var(--muted);font-size:15px}
.aq .card .n{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--gold);font-weight:700;font-size:14px;margin-bottom:12px}
.aq .band{background:var(--navy);color:#fff}
.aq .band h2{color:#fff}
.aq .band .sub{color:#CBD5E1}
.aq .band .card{background:var(--navy2);border-color:#334155}
.aq .band .card p{color:#CBD5E1}
.aq .tools{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.aq .tool{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px;border-top:5px solid var(--c)}
.aq .tool h3{margin:0 0 8px;font-size:19px;color:var(--c)}
.aq .tool p{margin:0;color:var(--muted);font-size:15px}
.aq .c1{--c:var(--blue)}.aq .c2{--c:var(--green)}.aq .c3{--c:var(--purple)}.aq .c4{--c:var(--orange)}
.aq .feat{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px;margin:0;padding:0;list-style:none}
.aq .feat li{padding:12px 0 12px 28px;border-top:1px solid var(--line);position:relative}
.aq .feat li:before{content:"";position:absolute;left:4px;top:20px;width:10px;height:10px;border-radius:50%;background:var(--gold)}
.aq .feat b{display:block}
.aq .feat span{color:var(--muted);font-size:15px}
.aq .price{display:grid;grid-template-columns:minmax(0,1fr);max-width:460px}
.aq .price .card{padding:30px;background:#fff;color:var(--ink);border:2px solid var(--gold)}
.aq .price .big{font-size:44px;font-weight:800;letter-spacing:-.02em;margin:6px 0 2px}
.aq .price ul{margin:16px 0 22px;padding-left:18px;color:var(--muted);font-size:15px}
.aq .price li{margin:6px 0}
.aq .tag{display:inline-block;background:var(--gold);color:var(--navy);font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px;margin-bottom:8px}
.aq details{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin-bottom:10px}
.aq summary{cursor:pointer;font-weight:600}
.aq details p{margin:10px 0 0;color:var(--muted)}
.aq .note{background:#fff;border:1px solid var(--line);border-left:4px solid var(--gold);border-radius:10px;padding:16px 20px;max-width:44em;margin-top:28px}
.aq .note p{margin:0;color:var(--muted);font-size:15px}
.aq .final{text-align:center}
.aq .final p{margin:0 auto 26px;color:#CBD5E1;max-width:34em}
.aq footer{background:#0B1220;color:#94A3B8;font-size:14px;padding:28px 0}
.aq footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.aq footer a{color:#CBD5E1;text-decoration:none}
.aq footer a:hover{color:var(--gold)}
.aq a:focus-visible,.aq summary:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.aq .btn:active{transform:scale(.97);transition:transform 100ms ease-out}
@media (max-width:860px){
.aq .hero .grid,.aq .cards,.aq .tools,.aq .feat,.aq .shots,.aq .shots.p3{grid-template-columns:minmax(0,1fr)}
.aq section{padding:52px 0}
.aq .hero{padding:44px 0 56px}
.aq .shots .shotframe.phone{max-width:280px;margin:0 auto}
}
@media (max-width:520px){.aq .navlink{display:none}}
@media (prefers-reduced-motion:reduce){.aq *{transition:none!important}}
`

const demoBtn = DEMO_COPY_URL
  ? `<a class="btn btn-line" href="${DEMO_COPY_URL}" target="_blank" rel="noopener noreferrer">Try the demo sheet</a>`
  : `<a class="btn btn-line" href="#see">See the screens</a>`

const BODY = `<header class="top"><div class="wrap">
  <a class="logo" href="/"><img class="mono" src="/images/logo-icon.png" alt="" width="30" height="30">Dandelion Creations</a>
  <span class="hnav"><a class="navlink" href="/abilitysuite">All systems</a><a class="cta" href="#buy">Get AceIQ</a></span>
</div></header>

<div class="hero"><div class="wrap grid">
  <div>
    <p class="eyebrow">AceIQ</p>
    <h1>Turn school notes into study material that sticks.</h1>
    <p class="lead">Add your notes, photos of pages or a PDF. AceIQ makes colour coded summaries, flashcards, mind maps and practice tests, in English or Afrikaans. It lives in your own Google Sheet.</p>
    <div class="btns">
      <a class="btn btn-gold" href="/order?product=aceiq">Get AceIQ, <span data-aq-price="hero"><span class="now">R199</span></span></a>
      ${demoBtn}
    </div>
    <p class="fine">One payment. No subscription. <span data-aq-note>Year end special, R499 from 2027.</span> 72 hour demo included.</p>
    <p class="fine"><b>Best for</b> learners from Grade 1 to Grade 12 and the parents who help them study. CAPS, IEB and Cambridge.</p>
  </div>
  <div class="shotframe"><img src="/images/aceiq/hero-summary.webp" alt="AceIQ summary of Grade 10 Life Sciences notes in Afrikaans, in colour coded blocks with terms, examples and reminders" width="1500" height="1250" fetchpriority="high"></div>
</div></div>

<section><div class="wrap">
  <h2>Long notes are hard to study from.</h2>
  <p class="sub">A whole term of notes is a lot to read the night before a test. AceIQ reads all of it for you and gives your child something they can actually revise from.</p>
  <div class="cards">
    <div class="card"><h3>Built from your own notes</h3><p>Summaries, cards and questions come from what the teacher taught, not from the internet. Every line is checked against your notes before you see it.</p></div>
    <div class="card"><h3>Colour that helps</h3><p>Each topic gets its own colour. Terms, examples, formulas and reminders are marked in words too, so nothing depends on colour alone.</p></div>
    <div class="card"><h3>Owned, not rented</h3><p>No monthly fee and no per child pricing. It runs in your own Google account, so it keeps working.</p></div>
  </div>
</div></section>

<section class="band" id="how"><div class="wrap">
  <h2>How it works</h2>
  <p class="sub">From ordering to your first summary in three steps.</p>
  <div class="cards">
    <div class="card"><span class="n">1</span><h3>Get your sheet and key</h3><p>Order and we email you the sheet link and your activation key.</p></div>
    <div class="card"><span class="n">2</span><h3>Set it up once</h3><p>A short guide walks you through it. Add a free AI key, then add your child as a learner.</p></div>
    <div class="card"><span class="n">3</span><h3>Add notes, press one button</h3><p>Paste text, upload a PDF or snap photos of pages. AceIQ makes the study material in a few minutes.</p></div>
  </div>
  <div class="note" style="background:var(--navy2);border-color:#334155;border-left-color:var(--gold)"><p style="color:#CBD5E1">AceIQ uses your own free Groq AI key, so there is no AI bill from us. The free key has a daily allowance. If it runs out, AceIQ tells you plainly and you carry on tomorrow.</p></div>
</div></section>

<section><div class="wrap">
  <h2>Four ways to revise, from one set of notes</h2>
  <p class="sub">Add the notes once. AceIQ makes all four.</p>
  <div class="tools">
    <div class="tool c1"><h3>Summaries and keywords</h3><p>Short, clear lines under coloured headings, with the key terms pulled out and a search box to find any of them. Print it or save it as a PDF.</p></div>
    <div class="tool c2"><h3>Flashcards</h3><p>Cards you miss come back sooner. Cards you know come back later. Add your own cards too.</p></div>
    <div class="tool c3"><h3>Mind maps</h3><p>The summary drawn as a coloured map. Tap any block to read the full line, then download it as a picture.</p></div>
    <div class="tool c4"><h3>Practice tests</h3><p>Multiple choice questions made from the notes. After each test you see what was right, what was not, and why.</p></div>
  </div>
</div></section>

<section class="band" id="see"><div class="wrap">
  <h2>See it in action</h2>
  <p class="sub">Real screens from the app, using Grade 10 Life Sciences notes in Afrikaans.</p>
  <div class="shots">
    <div class="shotframe"><img src="/images/aceiq/mindmap.webp" alt="AceIQ mind map with coloured branches for biosphere, ecosystems, photosynthesis and cells" width="1800" height="1125" loading="lazy"></div>
    <div class="shotframe"><img src="/images/aceiq/card.webp" alt="AceIQ flashcard with the question, the answer and buttons for Not yet and I knew it" width="1800" height="1125" loading="lazy"></div>
  </div>
  <div class="shots">
    <div class="shotframe"><img src="/images/aceiq/test.webp" alt="AceIQ practice test with multiple choice questions" width="1800" height="1125" loading="lazy"></div>
    <div class="shotframe"><img src="/images/aceiq/result.webp" alt="AceIQ test result showing 4 of 5 with the right answers and a short reason for each" width="1800" height="1125" loading="lazy"></div>
  </div>
  <div class="shots p3">
    <div class="shotframe"><img src="/images/aceiq/dashboard.webp" alt="AceIQ learner dashboard with study streak and best test score for each subject" width="1800" height="1125" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/aceiq/phone-summary.webp" alt="AceIQ summary on a phone" width="780" height="1688" loading="lazy"></div>
    <div class="shotframe phone"><img src="/images/aceiq/phone-card.webp" alt="AceIQ flashcard on a phone" width="780" height="1688" loading="lazy"></div>
  </div>
  <p class="shotnote" style="color:#94A3B8">Screens show sample data.</p>
</div></section>

<section><div class="wrap">
  <h2>What is inside</h2>
  <p class="sub">Everything a learner needs to go from notes to ready for the test.</p>
  <ul class="feat">
    <li><b>Notes from anywhere</b><span>Paste text, upload a PDF, a text file or photos of pages. Typed PDFs are read straight away. Scans and photos are read with Google text recognition.</span></li>
    <li><b>Whole term, not one page</b><span>Long notes are read in parts, so the last page counts as much as the first.</span></li>
    <li><b>English and Afrikaans</b><span>Choose the home language for each learner. Afrikaans letters come through correctly.</span></li>
    <li><b>More than one learner</b><span>Add every child in the family. Each one has their own notes, cards, scores and streak.</span></li>
    <li><b>Spaced flashcards</b><span>Missed cards return soon, known cards return later, so revision time goes where it is needed.</span></li>
    <li><b>Marked tests with reasons</b><span>Ten questions at a time, marked for you, with a short explanation of every answer.</span></li>
    <li><b>Print and download</b><span>Print any summary or mind map, save the mind map as a picture, and download keywords and flashcards as a spreadsheet file.</span></li>
    <li><b>Private by design</b><span>A long private key on your link. Your notes are stored in your own Google Sheet, not on our servers.</span></li>
  </ul>
</div></section>

<section class="band" id="buy"><div class="wrap">
  <h2>Pay once, keep it</h2>
  <p class="sub" style="margin-bottom:28px">No monthly fee, no renewal.</p>
  <div class="price">
    <div class="card">
      <span class="tag" data-aq-tag>Year end special</span>
      <h3>AceIQ</h3>
      <div class="big" data-aq-price="card"><span class="now">R199</span><span class="was">R499</span></div><div style="color:var(--muted);font-size:14px"><span data-aq-note2>one payment, R499 from 2027</span></div>
      <ul><li>AceIQ sheet and activation key</li><li>Step by step setup guide</li><li>72 hour demo before you commit</li><li>Unlimited learners and subjects</li></ul>
      <a class="btn btn-gold" style="display:block;text-align:center" href="/order?product=aceiq">Order now</a>
    </div>
  </div>
  <p class="sub" style="margin:28px 0 0;color:#CBD5E1">Running a business too? <a href="/payability" style="color:var(--gold)">PayAbility</a> handles invoices and <a href="/budgetability" style="color:var(--gold)">BudgetAbility</a> looks after household money.</p>
</div></section>

<section><div class="wrap">
  <h2>Questions</h2>
  <p class="sub">Short answers.</p>
  <details><summary>Do I need to know how to code?</summary><p>No. Setting it up is a handful of clicks and the guide shows each one.</p></details>
  <details><summary>Is there a monthly fee?</summary><p>No. You pay once and it runs in your own Google account. The AI key is free from Groq and you add it yourself.</p></details>
  <details><summary>Which grades and curricula does it work for?</summary><p>Grade 1 to Grade 12, and CAPS, IEB, Cambridge or any other. AceIQ works from the notes you give it, so it fits whatever your child is studying.</p></details>
  <details><summary>Does it work in Afrikaans?</summary><p>Yes. Choose English or Afrikaans for each learner and the summaries, cards and tests are made in that language.</p></details>
  <details><summary>Can it read scanned pages and photos?</summary><p>Yes. Photos and scanned PDFs are read with Google text recognition. For these, keep each file to about 10 pages. Typed PDFs are read straight away and can be longer.</p></details>
  <details><summary>Can the AI make mistakes?</summary><p>It can. AceIQ checks every line against your notes and drops anything that does not match, but you should still skim the summary against the textbook. It is a revision helper, not a replacement for the teacher.</p></details>
  <details><summary>Where are my notes stored?</summary><p>In your own Google Sheet. We never see them. To make study material, the text of your notes is sent to Groq, the AI service, using your own key.</p></details>
  <details><summary>Does it work on a phone?</summary><p>Yes. Open your private link in the phone browser and add it to the home screen. You need a connection to make new study material.</p></details>
  <details><summary>Can I try it first?</summary><p>Yes. AceIQ includes a 72 hour demo with every feature. The demo can be started once on each sheet.</p></details>
  <details><summary>Why is the price changing next year?</summary><p>R199 is a year end special. From 2027 AceIQ costs R499. Buy before then and the special price is yours.</p></details>
</div></section>

<section class="band final"><div class="wrap">
  <h2>Less reading. More revising.</h2>
  <p>Set AceIQ up once and turn every set of notes into something a learner can actually use.</p>
  <a class="btn btn-gold" href="/order?product=aceiq">Get AceIQ, <span data-aq-price="final"><span class="now">R199</span></span></a>
</div></section>

<footer><div class="wrap">
  <span>&copy; Dandelion Creations</span>
  <span><a href="/">Home</a> &middot; <a href="/abilitysuite">All systems</a> &middot; <a href="/book">Book a Systems Audit</a></span>
  <span>WhatsApp +27 72 839 3087 &middot; dandelioncreat@outlook.com</span>
</div></footer>`

const LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'AceIQ',
    description: 'A study helper that turns notes into colour coded summaries, flashcards, mind maps and practice tests, in English or Afrikaans. Runs in your own Google Sheet. One payment, no subscription.',
    brand: { '@type': 'Brand', name: 'Dandelion Creations' },
    offers: { '@type': 'Offer', price: '199', priceCurrency: 'ZAR', priceValidUntil: '2026-12-31', availability: 'https://schema.org/InStock', url: 'https://dandelioncreations.co.za/order?product=aceiq' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ['Is there a monthly fee?', 'No. You pay once and it runs in your own Google account. The AI key is free from Groq and you add it yourself.'],
      ['Does it work in Afrikaans?', 'Yes. Choose English or Afrikaans for each learner and the summaries, cards and tests are made in that language.'],
      ['Can it read scanned pages and photos?', 'Yes. Photos and scanned PDFs are read with Google text recognition. Typed PDFs are read straight away.'],
      ['Where are my notes stored?', 'In your own Google Sheet. We never see them.'],
      ['Can I try it first?', 'Yes. AceIQ includes a 72 hour demo with every feature.'],
    ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
]

// The price depends on the date in South Africa. Before 2027 it is R199 (R499 struck through). From 2027 it is R499.
function applyPrice(root) {
  let today = ''
  try {
    today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Johannesburg' }).format(new Date())
  } catch (e) {
    today = new Date().toISOString().slice(0, 10)
  }
  if (today < SPECIAL_ENDS) return
  root.querySelectorAll('[data-aq-price]').forEach((el) => {
    const now = el.querySelector('.now')
    if (now) now.textContent = 'R499'
    el.querySelectorAll('.was').forEach((w) => w.remove())
  })
  const tag = root.querySelector('[data-aq-tag]'); if (tag) tag.textContent = 'Once off'
  const n1 = root.querySelector('[data-aq-note]'); if (n1) n1.textContent = ''
  const n2 = root.querySelector('[data-aq-note2]'); if (n2) n2.textContent = 'one payment'
}

export default function AceIQPage() {
  useEffect(() => {
    const root = document.querySelector('.aq')
    if (root) applyPrice(root)
  }, [])
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {LD.map((o, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
      ))}
      <div className="aq" dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
