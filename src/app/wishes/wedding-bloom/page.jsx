'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'
import PricingCard from '../../../components/wishes/PricingCard'

// Same central intake endpoint every Wishes product posts enquiries to,
// routed by the enquiryType field. See code-gs dandelion wishes enquiries.txt.
const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

// Grouped into three working categories instead of one flat 12-tile grid —
// this is how the planner is actually organised for a couple using it, and
// it reads as three short decisions rather than a wall of identical cards.
const includedGroups = [
  {
    heading: 'Plan & track',
    items: [
      ['Dashboard & countdown', 'Days to go, an overall progress bar, category progress, and today’s priorities in one glance.'],
      ['Automatic checklist', 'Built from your wedding date, guest count and planning style, with due dates that shift if your date changes.'],
      ['Budget manager', 'Tracks estimated vs actual cost per category, flags anything over budget, and warns before a balance is due.'],
      ['Wedding health check', 'A plain-language read on how you’re tracking, plus your top three things to focus on this week.'],
    ],
  },
  {
    heading: 'Guests & the day',
    items: [
      ['Guest list & RSVP', 'One link for every guest to RSVP themselves, meal choice and dietary notes included.'],
      ['Seating plan', 'Assign guests to tables with capacity warnings, plus a Find My Seat link guests can use on the day.'],
      ['Day-of timeline', 'Your run sheet for the big day, time by time, with who’s responsible for what.'],
      ['Supplier directory', 'Every quote, deposit, balance and status (favourite, shortlisted, booked, paid) in one place.'],
    ],
  },
  {
    heading: 'Stay organised',
    items: [
      ['19 planning sections', 'Bride, groom, bridal party, catering, decor, music, photography, cake, transport, accommodation and more.'],
      ['Automatic Drive folder', 'A tidy folder structure for every supplier, contract and document, created the moment you save your names.'],
      ['PDF reports', 'Export your budget, guest list, seating plan and timeline as PDFs, or all of them together as one planning pack.'],
      ['Weekly email reminders', 'A Monday morning email with what’s overdue, what’s due this week, and any payments coming up.'],
    ],
  },
]

const steps = [
  {
    title: 'Get your copy',
    desc: 'Order below and you’ll receive your own Google Sheet, ready to make your own, plus your license key.',
  },
  {
    title: 'Make it yours',
    desc: 'Open the Settings menu, enter your license key, and fill in your names, date, venue and budget. No spreadsheet experience needed.',
  },
  {
    title: 'Share your links',
    desc: 'Get a private planning link for yourself and two guest links, one for RSVPs and one for guests to find their seat on the day.',
  },
  {
    title: 'Plan with confidence',
    desc: 'Everything lives in one place, backed up automatically in your own Google account, private to you.',
  },
]

function PetalField() {
  const petals = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${6 + (i * 12) % 90}%`,
    top: `${8 + (i * 15) % 84}%`,
    size: 30 + (i % 3) * 16,
    delay: i * 1.3,
    duration: 18 + (i % 4) * 4,
  }))
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {petals.map((p) => (
        <motion.img
          key={p.id}
          src="/images/wishes/flower-mark.png"
          alt=""
          style={{ position: 'absolute', left: p.left, top: p.top, width: p.size, height: p.size, opacity: 0.22 }}
          animate={{
            y: [0, -18, -6, -22, 0],
            x: [0, 10, -6, 12, 0],
            rotate: [0, 5, -3, 6, 0],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

// A quick illustrative preview of the planner dashboard, built from plain
// divs rather than a screenshot — gives the hero something to look at on
// the right instead of stacking everything dead-center, and doubles as a
// concrete preview of what "Dashboard & countdown" below actually means.
function DashboardPreview() {
  const rows = [
    { label: 'Venue & catering', pct: 100 },
    { label: 'Guest list & RSVP', pct: 72 },
    { label: 'Decor & styling', pct: 45 },
    { label: 'Photography', pct: 20 },
  ]
  return (
    <div className="bg-white rounded-[1.75rem] border border-[#E5DED2] shadow-[0_30px_60px_-30px_rgba(139,115,85,0.35)] p-6 w-full max-w-sm">
      <div className="flex items-baseline justify-between mb-5">
        <p className="text-sm text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Emma &amp; James
        </p>
        <p className="text-xs text-[#A8B89C]">142 days to go</p>
      </div>
      <div className="space-y-3.5">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex justify-between text-[11px] text-[#8B7355] mb-1">
              <span>{r.label}</span>
              <span>{r.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#F1F0EB] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: '#A8B89C' }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-[#E5DED2] text-xs text-[#3A3A3A]/70">
        Today: confirm final guest count, follow up with caterer
      </div>
    </div>
  )
}

export default function WeddingBloomPage() {
  const [form, setForm] = useState({
    coupleNames: '', email: '', phone: '', weddingDate: '', notes: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const payload = { ...form, enquiryType: 'wedding-bloom', package: 'The Wedding Bloom — R750' }

    try {
      await fetch(ENQUIRY_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div id="top" className="bg-[#FAF6F0] text-[#3A3A3A] min-h-screen relative">
      <WishesNav />
      <PetalField />

      {/* Hero — asymmetric now: copy on the left, a live-feeling dashboard
          preview on the right, instead of one centered text block over a
          background. Gives the page an actual focal point. */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-16 relative" style={{ zIndex: 1 }}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <Reveal>
            <p className="text-2xl mb-3" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>
              The Wedding Bloom
            </p>
            <h1 className="text-3xl sm:text-4xl mb-5 text-[#5C4A3A] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Every part of planning your wedding, in one place you own
            </h1>
            <p className="text-sm sm:text-base text-[#3A3A3A]/75 max-w-xl mb-8">
              A complete wedding planner built on Google Sheets. Your budget, guest list, suppliers, seating,
              checklist and timeline, all working together, all backed up in your own Google account.
              One once-off payment, yours to keep.
            </p>
            <a
              href="#order"
              className="inline-block px-8 py-3.5 rounded-full font-medium text-white transition-transform hover:scale-[1.02]"
              style={{ background: '#7C8B68' }}
            >
              Get The Wedding Bloom &mdash; R750
            </a>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center lg:justify-end">
            <DashboardPreview />
          </Reveal>
        </div>
      </div>

      {/* What's included — three grouped checklists instead of a 12-tile
          card grid, divided by hairlines rather than repeated white boxes. */}
      <div className="max-w-5xl mx-auto px-6 pb-16 relative" style={{ zIndex: 1 }}>
        <Reveal className="mb-10 max-w-lg">
          <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Everything you need, nothing you don&apos;t
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-6">
          {includedGroups.map((group, gi) => (
            <Reveal key={group.heading} delay={gi * 0.08} className={gi > 0 ? 'sm:border-l sm:border-[#E5DED2] sm:pl-6' : ''}>
              <p className="text-sm font-medium text-[#7C8B68] mb-4">{group.heading}</p>
              <ul className="space-y-3.5">
                {group.items.map(([title, desc]) => (
                  <li key={title}>
                    <p className="text-sm font-medium text-[#5C4A3A]">{title}</p>
                    <p className="text-xs text-[#3A3A3A]/65 leading-relaxed mt-0.5">{desc}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      {/* How it works — a connected timeline instead of a row of numbered
          circles, so the four steps read as one continuous path. */}
      <div className="max-w-4xl mx-auto px-6 pb-16 relative" style={{ zIndex: 1 }}>
        <Reveal className="mb-12 max-w-lg">
          <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-2">How it works</p>
          <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            From order to organised, in a few minutes
          </h2>
        </Reveal>
        <div className="relative">
          <div className="hidden sm:block absolute left-0 right-0 top-[7px] h-px bg-[#E5DED2]" />
          <div className="grid sm:grid-cols-4 gap-8 sm:gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="relative">
                <div className="hidden sm:block w-3.5 h-3.5 rounded-full bg-[#A8B89C] ring-4 ring-[#FAF6F0] mb-4" />
                <p className="text-sm font-medium text-[#5C4A3A] mb-1.5">
                  <span className="sm:hidden text-[#A8B89C] mr-1.5">{i + 1}.</span>
                  {s.title}
                </p>
                <p className="text-xs text-[#3A3A3A]/70 leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing — set beside a short reassurance note instead of stacked
          alone in a narrow centered column. */}
      <div className="max-w-5xl mx-auto px-6 pb-16 relative" style={{ zIndex: 1 }}>
        <div className="grid sm:grid-cols-[0.85fr_1fr] gap-10 items-center">
          <Reveal>
            <PricingCard
              tier="One once-off payment"
              price="R750"
              note="Yours to keep, no subscription, no monthly fee"
              featured
              features={[
                'Full planner, all 19 sections included',
                'Guest RSVP and Find My Seat pages',
                'Automatic Drive folder for your documents',
                'PDF reports whenever you need them',
                'Weekly reminder emails',
                'Private, key-protected admin link',
              ]}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-[#3A3A3A]/70 leading-relaxed max-w-sm">
              Built once, in Google Sheets you already know how to open — no new software to learn, no
              subscription to cancel later. It stays in your own Google account, backed up the way your
              other documents already are.
            </p>
            <p className="text-xs text-[#A8B89C] mt-5">
              Already planning your photos too? Pair it with{' '}
              <a href="/wishes/memorybloom" className="underline hover:text-[#7C8B68]">
                MemoryBloom
              </a>
              , your guest photo album.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Order form */}
      <div id="order" className="max-w-xl mx-auto px-6 pb-20 relative" style={{ zIndex: 1 }}>
        {status === 'success' ? (
          <Reveal className="text-center bg-white rounded-2xl p-10 border border-[#E5DED2]">
            <p className="text-3xl mb-3" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>
              Thank you
            </p>
            <h2 className="text-xl mb-3 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your order is in
            </h2>
            <p className="text-sm text-[#3A3A3A]/70">
              I&apos;ll be in touch within 24 hours with payment details and your copy of The Wedding Bloom.
              Feel free to WhatsApp me directly if anything comes to mind in the meantime.
            </p>
          </Reveal>
        ) : (
          <Reveal>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4 text-center">Order The Wedding Bloom</p>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 space-y-4 border border-[#E5DED2]">
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Your names</label>
                <input
                  required
                  value={form.coupleNames}
                  onChange={update('coupleNames')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm"
                  placeholder="e.g. Emma & James"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#8B7355] mb-1 block">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#8B7355] mb-1 block">Phone / WhatsApp</label>
                  <input
                    value={form.phone}
                    onChange={update('phone')}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Wedding date (or rough idea)</label>
                <input
                  value={form.weddingDate}
                  onChange={update('weddingDate')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Anything I should know?</label>
                <textarea
                  value={form.notes}
                  onChange={update('notes')}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-full font-medium text-white disabled:opacity-60"
                style={{ background: '#7C8B68' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send my order'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-center" style={{ color: '#8B4A4A' }}>
                  Something didn&apos;t go through, please{' '}
                  <a href="https://wa.me/27728393087" className="underline">
                    WhatsApp me directly
                  </a>{' '}
                  instead for now.
                </p>
              )}
            </form>
          </Reveal>
        )}
      </div>

      <WishesFooter />
    </div>
  )
}