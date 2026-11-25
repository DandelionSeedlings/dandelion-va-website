// src/components/cv/CvLanding.jsx
//
// The /cv sales page. The CVs shown here are rendered by the builder itself
// (CvDocument), so what people see is exactly what they will get.

import Link from 'next/link'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CvDocument, { SAMPLE_CV } from './CvDocument'
import { CV_PRICE_LABEL, CV_UNLOCK_DAYS } from '../../lib/cv/pricing'

const SECOND = {
  ...SAMPLE_CV,
  template: 'clean', accent: '#2F4A3A',
  name: 'Pieter van der Merwe', headline: 'Qualified Electrician', phone: '072 555 0161', email: 'pieter.vdm@example.com', location: 'Brakpan, Gauteng',
  licence: 'Code C1 (EC1)', ownTransport: true,
  summary: 'Qualified electrician with nine years on residential and light commercial jobs. I work neatly, sign off my own COCs and leave a site cleaner than I found it.',
  jobs: [
    { title: 'Electrician', employer: 'Volt Masters Electrical', place: 'Boksburg', start: '2019-06', end: '', current: true, points: 'Lead a team of two on house wiring, DB boards and solar backup installs\nIssue around 15 Certificates of Compliance a month' },
    { title: 'Electrician Assistant', employer: 'Ekurhuleni Electrical Contractors', place: 'Benoni', start: '2015-01', end: '2019-05', current: false, points: 'Trade test passed first time in 2018' },
  ],
  education: [{ qualification: 'Trade Test: Electrician', school: 'Olifantsfontein Trade Test Centre', year: '2018', note: 'Registered with the Department of Employment and Labour' }],
  skills: 'Wiring regulations SANS 10142-1, DB boards, Solar and inverter installs, Fault finding, COC inspections',
  languages: [{ lang: 'Afrikaans', level: 'Home language' }, { lang: 'English', level: 'Fluent' }],
  refsOnRequest: true, references: [],
}

function Sheet({ cv, className = '' }) {
  return (
    <div className={'overflow-hidden rounded-[3px] bg-white shadow-[0_24px_60px_-24px_rgba(10,22,40,.45)] ' + className}>
      <div style={{ width: 794, padding: '60px 64px', transform: 'scale(var(--k))', transformOrigin: 'top left' }}>
        <CvDocument cv={cv} />
      </div>
    </div>
  )
}

const POINTS = [
  ['One column, on purpose', 'Big employers run CVs through screening software before a person sees them. It reads one column top to bottom. Fancy two-column designs often come out jumbled.'],
  ['The South African details', "Driver's licence code, own transport, notice period, languages and references. The things local recruiters look for, in the place they expect them."],
  ['Your details stay with you', "Your CV is saved in your own browser while you work. It isn't uploaded to us, so there's no database of CVs to leak."],
  ['See it as you type', 'Every change shows on the page straight away, at real A4 size, with a count of how many pages it runs to.'],
  ['Help where people get stuck', 'Short tips at each step: what to put in a profile, how to describe a job, what to leave off.'],
  ['A real PDF', 'The text stays as text, so it can be searched and read by software, and it looks the same on every computer.'],
]

const FAQ = [
  ['Is it really once off?', `Yes. ${CV_PRICE_LABEL} once. No subscription and nothing renews.`],
  ['Can I try it before I pay?', 'Yes. Build the whole CV and see it on the page for free. You only pay when you want to download it.'],
  ['Can I change it after I pay?', `Yes. For ${CV_UNLOCK_DAYS} days you can edit it and download it again as often as you like, on the same device and browser you paid on.`],
  ['Where is my information kept?', "In your own browser on your own device. We never receive your CV. When you pay, Paystack handles the payment and we only get your email address for the receipt. If you clear your browser's data, the CV is cleared too, so keep your PDF."],
  ['Will it get me past screening software?', "No tool can promise that, and be careful of any that do. What we can say is that the layout is the kind these systems read well. The rest is using the same words as the job ad, which the tips show you how to do."],
  ['Does it work on my phone?', 'Yes, but a laptop or computer is easier for typing. On a phone you save the PDF through Share, then Print.'],
  ['What if something goes wrong with the payment?', 'WhatsApp us on +27 72 839 3087 with your Paystack receipt and we will sort it out. See our refund policy for the details.'],
]

export default function CvLanding() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-navy-900">
      <Navbar />

      {/* hero */}
      <section className="overflow-hidden bg-navy-900 px-5 pb-20 pt-36 text-white md:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">CV Builder</p>
            <h1 className="font-display text-[40px] font-semibold leading-[1.08] tracking-tight md:text-[54px]">A CV that gets read.</h1>
            <p className="mt-5 max-w-[30em] text-[18px] leading-relaxed text-slate-300">Built for South African job hunting. Fill it in one step at a time, watch it take shape as you type, and download a clean PDF when you're happy.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/cv/build" className="rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy-900 transition hover:brightness-105">Start your CV</Link>
              <span className="text-[15px] text-slate-400">Free to build. {CV_PRICE_LABEL} to download.</span>
            </div>
          </div>
          <div className="relative mx-auto h-[430px] w-full max-w-[520px] md:h-[500px]" aria-hidden>
            <Sheet cv={SECOND} className="absolute right-0 top-8 h-[400px] w-[290px] rotate-[3deg] opacity-90 [--k:0.365] md:h-[440px] md:w-[320px] md:[--k:0.403]" />
            <Sheet cv={SAMPLE_CV} className="absolute left-0 top-0 h-[420px] w-[300px] -rotate-[2deg] [--k:0.378] md:h-[470px] md:w-[330px] md:[--k:0.416]" />
          </div>
        </div>
      </section>

      {/* how */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-[32px] font-semibold tracking-tight">How it works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ['Fill it in', 'Eight short steps: you, your work, your studies, your skills. Skip what doesn\'t apply.'],
              ['Watch it take shape', 'The CV updates next to you as you type. Pick one of three looks and a colour.'],
              ['Download the PDF', `Happy with it? Pay ${CV_PRICE_LABEL} and save it as a PDF, ready to send.`],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-2xl border border-[#E4DCCB] bg-white p-6">
                <span className="font-display text-[15px] font-semibold text-gold-dark">{i + 1}</span>
                <h3 className="mt-2 text-[18px] font-semibold">{t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-[18em] font-display text-[32px] font-semibold tracking-tight">Plain on purpose. Here's why.</h2>
          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {POINTS.map(([t, d]) => (
              <div key={t} className="border-t border-[#E4DCCB] pt-5">
                <h3 className="text-[17px] font-semibold">{t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* templates */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-[32px] font-semibold tracking-tight">Three looks, all easy to read</h2>
          <p className="mt-3 max-w-[36em] text-[16px] text-slate-600">Classic suits most jobs. Clean feels more modern. Compact fits a long work history onto fewer pages.</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[['classic', '#1F2A44', 'Classic'], ['clean', '#2F4A3A', 'Clean'], ['compact', '#5A2A2F', 'Compact']].map(([t, a, n]) => (
              <figure key={t} className="m-0">
                <Sheet cv={{ ...SAMPLE_CV, template: t, accent: a }} className="relative mx-auto h-[400px] w-full max-w-[290px] [--k:0.365]" />
                <figcaption className="mt-3 text-center text-[15px] font-semibold">{n}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-[13px] text-slate-500">The people on these CVs are made up.</p>
        </div>
      </section>

      {/* price */}
      <section className="bg-navy-900 px-5 py-20 text-white">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-display text-[32px] font-semibold tracking-tight">One price</h2>
          <div className="mt-6 rounded-2xl border-t-4 border-gold bg-navy-800 p-8">
            <div className="font-display text-[56px] font-semibold leading-none text-gold">{CV_PRICE_LABEL}</div>
            <div className="mt-2 text-slate-300">once off</div>
            <ul className="mt-6 space-y-2.5 text-left text-[15px] text-slate-200">
              <li>Build and preview for free</li>
              <li>Three looks and four colours</li>
              <li>Edit and download again for {CV_UNLOCK_DAYS} days</li>
              <li>No subscription, nothing renews</li>
            </ul>
            <Link href="/cv/build" className="mt-7 block rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy-900 hover:brightness-105">Start your CV</Link>
          </div>
          <p className="mt-5 text-[14px] text-slate-400">Payments go through Paystack.</p>
        </div>
      </section>

      {/* faq */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-[32px] font-semibold tracking-tight">Good to know</h2>
          <div className="mt-8 space-y-3">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-[#E4DCCB] bg-white px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-semibold">
                  {q}<span className="text-[20px] leading-none text-gold-dark group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-[15px] leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-slate-500">Read our <Link href="/refunds" className="underline">refund policy</Link>.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
