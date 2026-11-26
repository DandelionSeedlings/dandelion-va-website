// src/components/adaptability/AdaptabilityLanding.jsx
//
// The /adaptability sales page. The intake itself lives on its own link,
// /adaptability/start, so it can be sent straight to a client.

import Link from 'next/link'
import Navbar from '../Navbar'
import Footer from '../Footer'

// A small drawing of an app screen, in someone's colours.
export function AppMock({ name, sub, main, second, initials, className = '' }) {
  const rows = [['Thabo Mokoena', 'Paid', 'R 1 250'], ['Anke Visser', 'Booked', 'R 680'], ['Priya Naidoo', 'Paid', 'R 2 100'], ['Sipho Dlamini', 'Due', 'R 450']]
  return (
    <div className={'overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(10,22,40,.5)] ' + className}>
      <div className="flex items-center gap-3 px-5 py-4" style={{ background: main }}>
        <span className="grid h-9 w-9 place-items-center rounded-lg text-[13px] font-bold" style={{ background: second, color: main }}>{initials}</span>
        <div className="leading-tight">
          <p className="text-[15px] font-semibold text-white">{name}</p>
          <p className="text-[11px] text-white/70">{sub}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5 px-5 pt-4">
        {[['This week', '14'], ['Paid', 'R 9 840'], ['Due', '3']].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-slate-100 px-3 py-2">
            <p className="text-[10px] uppercase tracking-wide text-slate-400">{k}</p>
            <p className="text-[15px] font-semibold" style={{ color: main }}>{v}</p>
          </div>
        ))}
      </div>
      <div className="px-5 pb-5 pt-3">
        {rows.map(([n, s, a]) => (
          <div key={n} className="flex items-center justify-between border-b border-slate-100 py-2 text-[12px] last:border-0">
            <span className="text-slate-700">{n}</span>
            <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: s === 'Due' ? '#FDECEC' : second + '33', color: s === 'Due' ? '#B42318' : main }}>{s}</span>
            <span className="tabular-nums text-slate-500">{a}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const INCLUDED = [
  ['Your name on it', 'Your business name, logo and colours on every sheet, every email and the private link your team opens.'],
  ['Your information brought across', 'Client lists, products or staff from a spreadsheet, put in the right place so you start with real data, not an empty app.'],
  ['A 30 minute video call', 'We share screens, show you around your own system and answer questions. Your team can join.'],
  ['Still yours', 'Same as every Ability app. You pay once, it runs in your own Google account and nothing renews.'],
]

const FAQ = [
  ['Do I need to own the app already?', 'No. Tick "I still need to buy it" on the form and add the app to the same order.'],
  ['Which apps can you set up?', 'Any of our paid Ability apps: BookAbility, TrackAbility, SchoolAbility, Mini Cash-Up, Profitability, PayAbility and the rest. R999 covers one app. Want more than one? Tick them all and we will quote.'],
  ['Does it add new features?', "No. It's the same app, set up and branded for you. If you need it to do something new, that's a custom build. Ask us for a quote."],
  ['What can you bring across?', "Anything in a spreadsheet or CSV file. If your records are on paper or in another system, say so on the form and we'll tell you what's possible before you pay."],
  ['Do I get access to the code?', 'You never need it. You fill in a form on this website, we do the setup, and you get your branded app back.'],
  ['What if I change my mind?', 'See our refund policy, or WhatsApp us and we will talk it through.'],
]

export default function AdaptabilityLanding() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-navy-900">
      <Navbar />

      <section className="overflow-hidden bg-navy-900 px-5 pb-20 pt-36 text-white md:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">Adaptability · done with you</p>
            <h1 className="font-display text-[40px] font-semibold leading-[1.08] tracking-tight md:text-[54px]">Your app, with your name on it.</h1>
            <p className="mt-5 max-w-[30em] text-[18px] leading-relaxed text-slate-300">Pick one of our Ability apps. We put your logo, colours and business name on it, bring your existing records across and walk you through it on a video call.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/adaptability/start" className="rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy-900 transition hover:brightness-105">Tell us about your business</Link>
              <span className="text-[15px] text-slate-400">R999 once, per app.</span>
            </div>
          </div>
          <div className="relative mx-auto h-[400px] w-full max-w-[520px]" aria-hidden>
            <AppMock name="BookAbility" sub="Bookings and clients" main="#0a1628" second="#C9A227" initials="DC" className="absolute right-0 top-0 w-[300px] rotate-[3deg] opacity-80" />
            <AppMock name="Mokoena Plumbing" sub="Jobs and clients" main="#1F4E5A" second="#E8B04A" initials="MP" className="absolute bottom-0 left-0 w-[330px] -rotate-[2deg]" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-[32px] font-semibold tracking-tight">What you get</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {INCLUDED.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-[#E4DCCB] bg-white p-6">
                <h3 className="text-[18px] font-semibold">{t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-[32px] font-semibold tracking-tight">How it works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              ['Fill in the form', 'About five minutes. Your business, the app, your colours and logo.'],
              ['Pay R999', 'On the order page. Add the app there too if you don\'t have it yet.'],
              ['We set it up', 'Branding on every sheet and your records brought across.'],
              ['Video call', 'Thirty minutes together and it\'s handed over to you.'],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-2xl border border-[#E4DCCB] bg-[#FBF9F4] p-6">
                <span className="font-display text-[15px] font-semibold text-gold-dark">{i + 1}</span>
                <h3 className="mt-2 text-[17px] font-semibold">{t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="self-start rounded-2xl bg-navy-900 p-8 text-white">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">Price</p>
            <p className="mt-3 font-display text-[44px] font-semibold">R999</p>
            <p className="text-slate-300">once, for one app</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-[14px] leading-relaxed text-slate-300">
              Example: Scalability (R499) plus Adaptability (R999) is R1,498 for a CRM with your own name on it.
            </div>
            <Link href="/adaptability/start" className="mt-6 inline-block rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy-900 transition hover:brightness-105">Get started</Link>
          </div>
          <div>
            <h2 className="font-display text-[28px] font-semibold tracking-tight">Questions</h2>
            <dl className="mt-5 divide-y divide-[#E4DCCB]">
              {FAQ.map(([q, a]) => (
                <div key={q} className="py-4">
                  <dt className="text-[16px] font-semibold">{q}</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-slate-600">{q.startsWith('What if') ? <>See our <Link href="/refunds" className="underline">refund policy</Link>, or WhatsApp us and we will talk it through.</> : a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
