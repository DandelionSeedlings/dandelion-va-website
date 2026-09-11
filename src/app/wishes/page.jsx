'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import WishesNav from '../../components/wishes/WishesNav'
import WishesFooter from '../../components/wishes/WishesFooter'
import Reveal from '../../components/wishes/Reveal'
import PricingCard from '../../components/wishes/PricingCard'

const WA_LINK = 'https://wa.me/27728393087'
const EMAIL = 'mailto:dandelioncreat@outlook.com'
const WEDDING_TARGET = new Date('2027-02-14T15:00:00')

function useCountdown(target) {
  const [time, setTime] = useState({ d: '--', h: '--', m: '--', s: '--' })
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - new Date())
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      const pad = (n) => String(n).padStart(2, '0')
      setTime({ d, h: pad(h), m: pad(m), s: pad(s) })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return time
}

const features = [
  { title: 'RSVP built right in', desc: 'Guests respond in seconds, no separate app or form link.' },
  { title: 'Live guest tracking', desc: 'Every response updates automatically so you always know where you stand.' },
  { title: 'Map & venue details', desc: 'Ceremony and reception, linked and easy to find.' },
  { title: 'Your story, your way', desc: 'As much or as little detail as you want to share.' },
  { title: 'Music', desc: 'Set the mood the moment the page opens.' },
  { title: 'Countdown to the big day', desc: 'A gentle reminder every time guests open the link.' },
]

const steps = [
  { n: '1', title: 'Tell me your story', desc: 'Your names, your colours, your photos, your vibe.' },
  { n: '2', title: 'I design it, by hand', desc: 'No templates dropped in and reskinned — built to fit the two of you.' },
  { n: '3', title: 'You review and refine', desc: 'We go back and forth until it feels exactly right.' },
  { n: '4', title: 'Your link goes live', desc: 'RSVPs, dietary notes, and song requests start rolling in automatically.' },
]

const extras = [
  { name: 'Interactive Guest Photo Album', desc: 'Guests scan a venue QR code; every photo lands in one shared gallery.', price: 'R350' },
  { name: 'Flip-to-Invite Save-the-Date', desc: 'Goes live early with a teaser & countdown, flips to the full invite when ready.', price: 'R250', promo: 'Free for now' },
  { name: 'Custom .co.za Domain', desc: 'Standalone domain registration for Essential tier or solo buyers.', price: 'R250/yr' },
  { name: 'Extended 6-Month Hosting', desc: 'Keeps your site and photo gallery online for longer.', price: 'R200' },
  { name: 'Matching Printable PDF Suite', desc: 'High-res files formatted for printing or email attachments.', price: 'R450' },
  { name: 'Welcome & Seating Board Bundle', desc: 'Print-ready A1/A2 graphics & QR boards for the venue entrance.', price: 'R550' },
]

const vendorCategories = [
  { icon: '🌸', label: 'Florists' },
  { icon: '🏛️', label: 'Venues' },
  { icon: '📷', label: 'Photographers' },
  { icon: '👗', label: 'Bridal boutiques' },
]

const faqs = [
  { q: 'Do my guests need an app?', a: 'No — it opens like any webpage, right in their browser.' },
  { q: 'Can I make changes after it\u2019s live?', a: 'Yes, within the revision window included in your package.' },
  { q: 'What if a guest doesn\u2019t have a smartphone?', a: 'We can add a simple printable card with the link and a QR code.' },
  { q: 'How do RSVPs reach me?', a: 'Automatically, in a live guest list you can check anytime.' },
  { q: 'Can I use my own domain?', a: 'Yes, optional — or use the free Dandelion Wishes link.' },
]

const portfolioPlaceholders = [
  { names: 'Emma & James', style: 'Garden romantic, sage and blush' },
  { names: 'Aisha & Daniel', style: 'Modern minimalist, champagne and ivory' },
]

export default function WishesPage() {
  const cd = useCountdown(WEDDING_TARGET)

  return (
    <>
      <WishesNav />

      {/* Hero */}
      <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/videos/wishes/hero-veil-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/videos/wishes/hero-veil.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(250,246,240,0.15) 0%, rgba(250,246,240,0.55) 55%, rgba(250,246,240,0.92) 100%)',
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-3xl mx-auto text-center px-8 py-24"
        >
          <p className="uppercase tracking-[3px] text-xs mb-5 text-[#8B7355]">
            Hand-designed digital invitations
          </p>
          <h1
            className="text-5xl md:text-6xl leading-[1.1] mb-6 text-[#5C4A3A]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your love story,
            <br />
            beautifully told
            <span className="text-4xl" style={{ fontFamily: "'Alex Brush', cursive", color: '#B87D7D' }}>
              {' '}
              —{' '}
            </span>
            <br />
            <span className="italic" style={{ color: '#6b7859' }}>
              before it&apos;s even happened.
            </span>
          </h1>
          <p className="max-w-md mx-auto leading-relaxed mb-9 text-[15px] text-[#3A3A3A]/85">
            One link. Every detail your guests need — RSVP, map, music, and more — held in one
            beautiful page, designed just for the two of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#how"
              className="px-8 py-4 rounded-full text-white font-medium shadow-lg transition-transform hover:-translate-y-0.5"
              style={{ background: '#7C8B68', boxShadow: '0 10px 25px -8px rgba(124,139,104,0.5)' }}
            >
              See how it works
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-medium border transition-transform hover:-translate-y-0.5"
              style={{ borderColor: '#8B7355', color: '#8B7355', background: 'rgba(255,255,255,0.5)' }}
            >
               WhatsApp
            </a>
          </div>
          <p className="text-sm text-[#8B7355]">From R1,250 per wedding · one payment, no subscriptions</p>
        </motion.div>

        <div
          className="absolute z-10 hidden sm:flex gap-4 px-5 py-3 rounded-2xl"
          style={{
            bottom: 36,
            right: 36,
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 15px 35px -12px rgba(139,115,85,0.3)',
          }}
        >
          <div><p className="text-lg text-[#7C8B68]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{cd.d}</p><p className="text-[10px] uppercase tracking-wide text-[#8B7355]">days</p></div>
          <div><p className="text-lg text-[#7C8B68]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{cd.h}</p><p className="text-[10px] uppercase tracking-wide text-[#8B7355]">hrs</p></div>
          <div><p className="text-lg text-[#7C8B68]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{cd.m}</p><p className="text-[10px] uppercase tracking-wide text-[#8B7355]">min</p></div>
          <div><p className="text-lg text-[#7C8B68]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{cd.s}</p><p className="text-[10px] uppercase tracking-wide text-[#8B7355]">sec</p></div>
          <div className="border-l pl-4 ml-1" style={{ borderColor: 'rgba(139,115,85,0.2)' }}>
            <p className="text-base text-[#8B7355]" style={{ fontFamily: "'Alex Brush', cursive" }}>Emma & James</p>
            <p className="text-[10px] text-[#8B7355]/70">until &quot;I do&quot;</p>
          </div>
        </div>
      </section>

      {/* Orientation */}
      <section className="bg-white/60 py-20 px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A single link. Everything your guests need.
          </h2>
          <p className="text-[#3A3A3A]/80 leading-relaxed mb-10">
            Instead of paper, your invitation lives online — one elegant page your guests open on
            their phone. They RSVP right there. They see the map, the schedule, the dress code. No
            app to download, no account to make. Just open the link and everything&apos;s there.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            <div>
              <p className="font-medium text-[#7C8B68] mb-1">Opens on any phone</p>
              <p className="text-sm text-[#3A3A3A]/70">No app required.</p>
            </div>
            <div>
              <p className="font-medium text-[#7C8B68] mb-1">RSVPs come to you</p>
              <p className="text-sm text-[#3A3A3A]/70">Tracked automatically, no spreadsheet chasing.</p>
            </div>
            <div>
              <p className="font-medium text-[#7C8B68] mb-1">Yours to keep</p>
              <p className="text-sm text-[#3A3A3A]/70">A lasting page to look back on.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>How it works</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#E8C4C4]/50 text-[#8B7355] flex items-center justify-center mx-auto mb-3 font-medium">
                  {s.n}
                </div>
                <p className="font-medium text-[#5C4A3A] mb-1">{s.title}</p>
                <p className="text-sm text-[#3A3A3A]/70">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/60 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What&apos;s included</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="border border-[#E8C4C4]/40 rounded-2xl p-6 bg-[#FAF6F0] h-full"
                >
                  <p className="font-medium text-[#5C4A3A] mb-1">{f.title}</p>
                  <p className="text-sm text-[#3A3A3A]/70">{f.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-3">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Packages</h2>
          </Reveal>
          <p className="text-center text-sm text-[#A8B89C] mb-14">
            One payment per wedding. No subscriptions, ever.
          </p>
          <div className="grid md:grid-cols-3 gap-7">
            <Reveal delay={0}>
              <PricingCard
                tier="Essential Suite"
                price="R1,250"
                note="once-off"
                features={[
                  'Custom single-page mobile invite',
                  'Digital RSVP form + plus-ones',
                  'Live sync to Google Sheets',
                  'Maps & Waze directions',
                  'Standard web address',
                  'WhatsApp save-the-date image',
                ]}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <PricingCard
                dark
                featured
                tier="Interactive Suite"
                price="R2,650"
                note="once-off"
                features={[
                  'Everything in Essential',
                  'Custom .co.za domain, 12 months',
                  'Live countdown timer',
                  'Photo gallery, up to 15 photos',
                  'Song requests on RSVP',
                  'Add to Calendar, one tap',
                  'Animated WhatsApp invite',
                ]}
              />
            </Reveal>
            <Reveal delay={0.24}>
              <PricingCard
                tier="Bespoke Suite"
                price="R4,500+"
                note="custom experience"
                features={[
                  'Everything in Interactive',
                  'Free Flip-to-Invite save-the-date',
                  'Live QR guest photo album',
                  'Extended 18-month hosting',
                  'Multi-page: story, itinerary, FAQs',
                  'Multi-day event RSVPs',
                  'Auto WhatsApp/email confirmations',
                ]}
              />
            </Reveal>
          </div>
          <p className="text-center text-sm mt-10 text-[#A8B89C]">
            Flip-to-Invite Save-the-Date — <span className="line-through opacity-60">R250</span> free
            for a limited time on all packages
          </p>
        </div>
      </section>

      {/* Extras */}
      <section className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-4">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Optional extras</h2>
          </Reveal>
          <p className="text-center text-sm mb-14 max-w-lg mx-auto text-[#3A3A3A]/70">
            Add any of these to any package — pick only what your wedding actually needs.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {extras.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl p-6 bg-white flex items-center justify-between gap-4 h-full"
                  style={{ boxShadow: '0 12px 28px -14px rgba(139,115,85,0.18)' }}
                >
                  <div>
                    <p className="font-medium text-[#5C4A3A] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}>
                      {e.name}
                    </p>
                    <p className="text-sm text-[#3A3A3A]/70">{e.desc}</p>
                  </div>
                  {e.promo ? (
                    <div className="text-right whitespace-nowrap">
                      <p className="text-xs line-through opacity-50">{e.price}</p>
                      <p className="text-lg text-[#7C8B68]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{e.promo}</p>
                    </div>
                  ) : (
                    <p className="text-xl whitespace-nowrap text-[#7C8B68]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{e.price}</p>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-white/60 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Every invitation is different, because every couple is.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {portfolioPlaceholders.map((p, i) => (
              <Reveal key={p.names} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-[#E8C4C4]/40">
                  <div className="aspect-[4/3] bg-[#E8C4C4]/20 flex items-center justify-center text-sm text-[#A8B89C]">
                    Preview coming soon
                  </div>
                  <div className="p-5">
                    <p className="font-medium text-[#5C4A3A]">{p.names}</p>
                    <p className="text-sm text-[#3A3A3A]/70">{p.style}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Vendors */}
      <section className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-4">
            <h2 className="text-2xl mb-3 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              A few of our favourites
            </h2>
            <p className="text-sm max-w-md mx-auto text-[#3A3A3A]/65">
              Florists, venues, and boutiques we&apos;d personally recommend — added as we come
              across people worth vouching for.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {vendorCategories.map((v, i) => (
              <Reveal key={v.label} delay={i * 0.05}>
                <div
                  className="rounded-2xl p-6 text-center h-full"
                  style={{ background: 'rgba(255,255,255,0.6)', border: '1px dashed #D4C4A0' }}
                >
                  <p className="text-2xl mb-2">{v.icon}</p>
                  <p className="text-lg mb-1 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v.label}</p>
                  <p className="text-xs text-[#A8B89C]">Recommendations coming soon</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</h2>
          </Reveal>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div>
                  <p className="font-medium text-[#5C4A3A] mb-1">{f.q}</p>
                  <p className="text-sm text-[#3A3A3A]/70">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="py-28 px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg,#7C8B68,#5C6B4E)' }}
      >
        <Reveal>
          <p className="text-4xl mb-4 text-white opacity-90" style={{ fontFamily: "'Alex Brush', cursive" }}>
            seal it with a vow
          </p>
          <h2 className="text-3xl mb-3 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ready to make it official?
          </h2>
          <p className="mb-9 text-white opacity-80">Tell me about your day — I&apos;ll take it from there.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-medium"
              style={{ background: '#FAF6F0', color: '#5C4A3A' }}
            >
              Start Your Invitation
            </a>
            <a
              href={EMAIL}
              className="px-8 py-4 rounded-full font-medium text-white"
              style={{ border: '1px solid rgba(255,255,255,0.5)' }}
            >
              Email instead
            </a>
          </div>
        </Reveal>
      </section>

      <WishesFooter />
    </>
  )
}
