'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import WishesNav from '../../components/wishes/WishesNav'
import WishesFooter from '../../components/wishes/WishesFooter'
import Reveal from '../../components/wishes/Reveal'
import PricingCard from '../../components/wishes/PricingCard'
import { BloomIcon } from '../../components/wishes/WishesDecor'

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

const memoryBloomSteps = [
  { n: 'SCAN', title: 'One QR code', desc: 'At the venue, on a table, wherever guests will actually see it.' },
  { n: 'SNAP', title: 'Guests take the shot', desc: 'Or choose one from their camera roll, no account or app needed.' },
  { n: 'SHARE', title: 'It joins the wall', desc: 'Every photo from every guest lands in one shared, live gallery.' },
  { n: 'BLOOM', title: 'Stays live for 30 days', desc: 'Everyone gets a full month to revisit and download their favourites.' },
]

const extras = [
  { name: 'MemoryBloom — Interactive Guest Photo Album', desc: 'Guests scan one QR code and upload unlimited photos to a shared live gallery. The album stays live for 30 days after the event.', price: 'R350', href: '/wishes/photo-album' },
  { name: 'Flip-to-Invite Save-the-Date', desc: 'Goes live early with a teaser & countdown, flips to the full invite when ready.', price: 'R250', promo: 'Free for now' },
  { name: 'Custom .co.za Domain', desc: 'Standalone domain registration for Essential tier or solo buyers.', price: 'R250/yr' },
  { name: 'Extended 6-Month Hosting', desc: 'Keeps your site and photo gallery online for longer.', price: 'R200' },
  { name: 'Matching Printable PDF Suite', desc: 'High-res files formatted for printing or email attachments.', price: 'R450' },
  { name: 'Welcome & Seating Board Bundle', desc: 'Print-ready A1/A2 graphics & QR boards for the venue entrance.', price: 'R550' },
]

const stylePreviews = [
  { label: 'Romantic & Soft', desc: 'Blush, ivory, delicate florals', image: '/images/wishes/styles/romantic-soft.jpg', href: '/wishes/demo/romantic-soft' },
  { label: 'Botanical', desc: 'Sage, eucalyptus, natural textures', image: '/images/wishes/styles/botanical.jpg', href: '/wishes/demo/botanical' },
  { label: 'Timeless & Classic', desc: 'Ivory, champagne, elegant type', image: '/images/wishes/styles/timeless-classic.jpg', href: '/wishes/demo/timeless-classic' },
  { label: 'Modern & Minimal', desc: 'Clean lines, understated', image: '/images/wishes/styles/modern-minimal.jpg', href: '/wishes/demo/modern-minimal' },
  { label: 'Coastal Minimalist', desc: 'Sea glass, sand, ocean air', image: '/images/wishes/demo-coastal/beach-1.jpg', href: '/wishes/demo/coastal-minimal' },
]

const vendorCategories = [
  {
    icon: (
      <svg className="w-6 h-6 mx-auto text-[#7C8B68]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2.6" />
        <circle cx="12" cy="6" r="2.6" />
        <circle cx="12" cy="18" r="2.6" />
        <circle cx="6" cy="12" r="2.6" />
        <circle cx="18" cy="12" r="2.6" />
      </svg>
    ),
    label: 'Florists',
  },
  {
    icon: (
      <svg className="w-6 h-6 mx-auto text-[#7C8B68]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6" />
      </svg>
    ),
    label: 'Venues',
  },
  {
    icon: (
      <svg className="w-6 h-6 mx-auto text-[#7C8B68]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <circle cx="12" cy="13.5" r="3.5" />
        <path strokeLinecap="round" d="M8 7l1.4-2.5h5.2L16 7" />
      </svg>
    ),
    label: 'Photographers',
  },
  {
    icon: (
      <svg className="w-6 h-6 mx-auto text-[#7C8B68]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3l3 3 3-3 2 5-3 2 1 11H7l1-11-3-2z" />
      </svg>
    ),
    label: 'Bridal boutiques',
  },
]

const faqs = [
  { q: 'Do my guests need an app?', a: 'No — it opens like any webpage, right in their browser.' },
  { q: 'Can I make changes after it\u2019s live?', a: 'Yes, within the revision window included in your package.' },
  { q: 'What if a guest doesn\u2019t have a smartphone?', a: 'We can add a simple printable card with the link and a QR code.' },
  { q: 'How do RSVPs reach me?', a: 'Automatically, in a live guest list you can check anytime.' },
  { q: 'Can I use my own domain?', a: 'Yes, optional — or use the free Dandelion Wishes link.' },
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

      {/* Meet MemoryBloom */}
      <section className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-4">
            <p className="uppercase tracking-[3px] text-xs mb-4 text-[#8B7355]">Introducing</p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <BloomIcon size={24} style={{ color: '#5C4A3A' }} />
              <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meet MemoryBloom
              </h2>
            </div>
            <p className="text-[#3A3A3A]/75 max-w-lg mx-auto mb-2">
              Because the best photos aren&apos;t always taken by the photographer.
            </p>
            <p className="text-[#3A3A3A]/75 max-w-lg mx-auto">
              Your guests are already taking photos. Give those moments somewhere to bloom.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {memoryBloomSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 h-full text-center" style={{ boxShadow: '0 12px 28px -16px rgba(139,115,85,0.2)' }}>
                  <p
                    className="text-xs tracking-[3px] mb-3"
                    style={{ color: '#7C8B68', fontWeight: 600 }}
                  >
                    {s.n}
                  </p>
                  <p className="font-medium text-[#5C4A3A] mb-1">{s.title}</p>
                  <p className="text-sm text-[#3A3A3A]/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 flex flex-wrap gap-3 justify-center">
            {['Unlimited guest uploads', 'No app required', '30 days live'].map((b) => (
              <span
                key={b}
                className="text-xs px-4 py-2 rounded-full"
                style={{ background: 'rgba(124,139,104,0.12)', color: '#5C6B4E' }}
              >
                {b}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.22} className="text-center mt-6">
            <p className="text-sm text-[#3A3A3A]/70">
              Usually <span className="line-through opacity-60">R750</span>{' '}
              <span className="font-medium text-[#5C4A3A]">R350</span> — launch special, limited time
            </p>
          </Reveal>

          <Reveal delay={0.25} className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/wishes/photo-album"
                className="inline-block px-8 py-3.5 rounded-full font-medium text-white"
                style={{ background: '#7C8B68' }}
              >
                Get MemoryBloom — R350
              </a>
              <a
                href="/wishes/photo-album#showcase"
                className="inline-block px-8 py-3.5 rounded-full font-medium border"
                style={{ borderColor: '#7C8B68', color: '#7C8B68', background: '#fff' }}
              >
                See a live demo
              </a>
            </div>
          </Reveal>
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
                  'MemoryBloom guest photo album, 30 days live',
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
                  'MemoryBloom, unlimited uploads',
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
                    {e.href ? (
                      <a href={e.href} className="font-medium text-[#5C4A3A] mb-1 hover:underline block" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}>
                        {e.name}
                      </a>
                    ) : (
                      <p className="font-medium text-[#5C4A3A] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}>
                        {e.name}
                      </p>
                    )}
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

      {/* Style Previews */}
      <section className="bg-white/60 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-4">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              See it live before you say yes.
            </h2>
            <p className="text-sm text-[#3A3A3A]/70 max-w-md mx-auto mt-3">
              Five fully-built styles, ready to preview exactly as your guests would see them.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {stylePreviews.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.06}>
                <a href={p.href} className="block rounded-2xl overflow-hidden border border-[#E8C4C4]/40 bg-white group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-medium text-[#5C4A3A]">{p.label}</p>
                    <p className="text-sm text-[#3A3A3A]/70 mb-2">{p.desc}</p>
                    <p className="text-xs text-[#7C8B68] group-hover:underline">View live preview →</p>
                  </div>
                </a>
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
                  <div className="mb-2">{v.icon}</div>
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
             
  href="/wishes/start"
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