// src/components/claude/ClaudeLanding.jsx
//
// /claude: how our apps work with Claude, and the paid setup that makes it safe.
// Wording rule: "works with Claude" in words only. No Claude or Anthropic logos,
// nothing that suggests we are an official partner.

import Link from 'next/link'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { whatsappLink } from '../../lib/site'

const STEPS = [
  ['Open Claude', 'Go to claude.ai and sign in. Connectors are part of Claude, so there is nothing extra to install.'],
  ['Connect Google Drive', 'In your connector settings, connect Google Drive with the same Google account your app lives in. Claude can only see what that account can open.'],
  ['Ask about your sheet', 'Name the app in your question, like "In my OrderAbility sheet, who still owes me money?" Claude finds the sheet and reads the answer from it.'],
]

const EXAMPLES = [
  ['OrderAbility', 'Who still owes me money, and how long have they owed it?'],
  ['BookAbility', 'How many bookings do I have next week, and which days are quiet?'],
  ['TrackAbility', 'Who worked overtime this month?'],
  ['Profitability', 'Which of my expenses are tax deductible, and what did I spend on them this year?'],
  ['Availability', 'What is running low, and which supplier do I order it from?'],
  ['PayAbility', 'Which invoices are overdue, and what is the total?'],
]

export default function ClaudeLanding() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-navy-900">
      <Navbar />

      <section className="bg-navy-900 px-5 pb-20 pt-36 text-white md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">Works with Claude</p>
          <h1 className="font-display text-[40px] font-semibold leading-[1.08] tracking-tight md:text-[54px]">Did you know you can ask Claude about your business?</h1>
          <p className="mt-5 max-w-[34em] text-[18px] leading-relaxed text-slate-300">
            Every Ability app is a Google Sheet in your own account. Claude can already read Google Sheets, so you can ask it questions about your own orders, bookings, staff and money in plain words.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#how" className="rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy-900 transition hover:brightness-105">Show me how</a>
            <a href="#setup" className="rounded-lg border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-gold hover:text-gold">Want it set up for you?</a>
          </div>
        </div>
      </section>

      <section id="how" className="scroll-mt-24 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-[32px] font-semibold tracking-tight">Connect it in three steps</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="rounded-2xl border border-[#E4DCCB] bg-white p-6">
                <span className="font-display text-[15px] font-semibold text-gold-dark">{i + 1}</span>
                <h3 className="mt-2 text-[18px] font-semibold">{t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[14px] text-slate-500">
            Connectors and what each Claude plan includes can change. Claude&apos;s help pages have the current details:{' '}
            <a href="https://support.claude.com/en/articles/10166901-use-google-workspace-connectors" target="_blank" rel="noopener noreferrer" className="underline">using the Google Workspace connectors</a>.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-[32px] font-semibold tracking-tight">Things you could ask</h2>
          <p className="mt-2 max-w-[36em] text-[16px] text-slate-600">A few examples. Claude reads the answer from your own sheet, so it only knows what you have put in.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {EXAMPLES.map(([app, q]) => (
              <div key={app} className="rounded-2xl border border-[#E4DCCB] bg-[#FBF9F4] p-5">
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-gold-dark">{app}</p>
                <p className="mt-1.5 text-[17px] font-medium leading-snug">&ldquo;{q}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#E8D9A8] bg-[#FBF5E3] p-7 md:p-9">
          <h2 className="font-display text-[26px] font-semibold tracking-tight">Asking is safe. Letting it edit is where it gets tricky.</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-slate-700">
            Claude can also change Google Sheets. That sounds handy, but your app relies on its columns, formulas and its own steps, like numbering invoices or sending the confirmation email. If an AI writes straight into the sheet, it can skip those steps or break something without you noticing.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-slate-700">
            Our advice: use Claude to ask questions, and keep adding and changing things through the app itself. Want Claude to do the work too? That is what the setup below is for.
          </p>
        </div>
      </section>

      <section id="setup" className="scroll-mt-24 bg-navy-900 px-5 py-20 text-white">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">Claude-ready setup</p>
            <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight">Let Claude do the work, the right way</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              We set up your app so Claude can act through it, not around it. Say &ldquo;add an order for Sarie, R180&rdquo; and it goes in the way the app would do it, with the right number and the right email.
            </p>
            <p className="mt-3 text-[15px] text-slate-400">Every business is different, so we quote it after a short call.</p>
            <a href={whatsappLink('Hi, I would like to know more about the Claude-ready setup for my app.')} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy-900 transition hover:brightness-105">Ask about it on WhatsApp</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">No app for it yet?</p>
            <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight">You know what you need. We build it.</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
              If none of our apps does what you need, we build the system for you, in your own Google account, and set it up to work with Claude from day one. You pay once and it is yours.
            </p>
            <p className="mt-3 text-[15px] text-slate-400">It starts with a free Systems Audit, so you know the price before anything gets built.</p>
            <Link href="/book" className="mt-6 inline-block rounded-lg border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-gold hover:text-gold">Book a Systems Audit</Link>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-5xl text-[13px] text-slate-500">
          Claude is made by Anthropic. Dandelion Creations is not part of or endorsed by Anthropic. Our apps work with Claude through the connectors Claude offers to everyone.
        </p>
      </section>

      <Footer />
    </div>
  )
}
