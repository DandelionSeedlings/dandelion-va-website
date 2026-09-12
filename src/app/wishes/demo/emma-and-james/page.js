'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../../../../components/wishes/Reveal'
import EnvelopeIntro from '../../../../components/wishes/EnvelopeIntro'

// TODO: after deploying a SEPARATE demo copy of the RSVP engine (see
// SETUP_GUIDE.md — same steps, just a fresh Sheet named something like
// "DEMO — Emma & James"), paste that deployment's /exec URL below.
// Keeping the demo's RSVP data completely separate from any real wedding.
const DEMO_RSVP_URL = 'https://script.google.com/macros/s/AKfycbyDhgT4SAax1aO-wYa7vkbDCp0Z7nKhR7vhz1ige0k9S7dh55JMi2m09vQ_aYc1gtsn/exec'

const milestones = [
  { label: 'First met', year: '2019' },
  { label: 'First date', year: '2020' },
  { label: 'The proposal', year: '2025' },
  { label: 'The wedding', year: '2027' },
]

const schedule = [
  { time: '15:00', label: 'Wedding Ceremony' },
  { time: '16:00', label: 'Canapés & Champagne' },
  { time: '17:30', label: 'Reception & Dinner' },
  { time: '19:30', label: 'First Dance & Celebrations' },
  { time: '23:30', label: 'Last Dance' },
]

const faqs = [
  { q: 'Can I bring a plus one?', a: 'Please refer to the number of guests named on your invitation.' },
  { q: 'Are children welcome?', a: 'We kindly ask guests to follow the invitation details shared with their family.' },
  { q: 'What should I wear?', a: 'Formal / Garden Formal — soft neutrals and blush tones welcome.' },
  { q: 'Is there parking?', a: 'Yes, free parking is available at the venue.' },
]

export default function DemoInvitation() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="bg-[#FAF6F0] text-[#3A3A3A]">
      <EnvelopeIntro coupleNames="Emma & James" onOpen={() => setOpened(true)} />

      {/* banner marking this as a template preview, not a real wedding */}
      <div className="bg-[#7C8B68] text-white text-center text-xs py-2 px-4">
        This is a template preview — styled with example details so you can see what your own
        invitation could look like.
      </div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline preload="auto" poster="/videos/wishes/hero-veil-poster.jpg" className="w-full h-full object-cover">
            <source src="/videos/wishes/hero-veil.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(58,58,58,0.35) 0%, rgba(58,58,58,0.55) 100%)' }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-2xl mx-auto text-center px-6 text-white"
        >
          <p className="text-sm opacity-90 mb-4">Together with their families, invite you to celebrate</p>
          <div className="w-16 h-px bg-[#D4C4A0] mx-auto mb-6" />
          <h1 className="text-6xl md:text-7xl mb-6" style={{ fontFamily: "'Alex Brush', cursive" }}>
            Emma & James
          </h1>
          <p className="text-xs tracking-[3px] uppercase mb-3">14 February 2027</p>
          <p className="text-lg italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Two hearts. One journey. A lifetime together.
          </p>
          <a
            href="#rsvp"
            className="inline-block mt-8 px-8 py-3.5 rounded-full font-medium"
            style={{ background: '#D4C4A0', color: '#3A3A3A' }}
          >
            RSVP
          </a>
        </motion.div>
      </motion.section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 25px 50px -20px rgba(139,115,85,0.3)' }}>
              <img src="/images/wishes/demo/couple-3.jpg" alt="" className="w-full h-[380px] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="uppercase tracking-[3px] text-xs text-[#7C8B68] mb-4">Our Story</p>
            <h2 className="text-3xl mb-6 text-[#5C4A3A] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Two people. One beautiful story.
            </h2>
            <p className="text-[#3A3A3A]/75 leading-relaxed">
              From the moment we met, life became a little more meaningful, a little more exciting,
              and a lot more fun. Now we&apos;re ready to begin our next chapter together, and we&apos;d
              love to have the people we love most there to celebrate with us.
            </p>
          </Reveal>
        </div>
        <div className="max-w-3xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className="text-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4C4A0] mx-auto mb-3 border border-[#8B7355]" />
              <p className="text-xs font-medium text-[#5C4A3A]">{m.label}</p>
              <p className="text-sm italic text-[#7C8B68]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{m.year}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-white/60">
        <Reveal className="text-center mb-12">
          <p className="uppercase tracking-[3px] text-xs text-[#7C8B68] mb-4">Our Gallery</p>
          <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Our Favourite Moments</h2>
        </Reveal>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          <Reveal className="col-span-2 row-span-2">
            <img src="/images/wishes/demo/couple-1.jpg" alt="" className="w-full h-full object-cover rounded-xl" style={{ minHeight: 300 }} />
          </Reveal>
          <Reveal delay={0.05}>
            <img src="/images/wishes/demo/couple-2.jpg" alt="" className="w-full h-full object-cover rounded-xl" style={{ minHeight: 145 }} />
          </Reveal>
          <Reveal delay={0.1}>
            <img src="/images/wishes/demo/couple-5.jpg" alt="" className="w-full h-full object-cover rounded-xl" style={{ minHeight: 145 }} />
          </Reveal>
          <Reveal delay={0.15} className="col-span-2">
            <img src="/images/wishes/demo/couple-4.jpg" alt="" className="w-full h-full object-cover rounded-xl" style={{ minHeight: 145 }} />
          </Reveal>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 px-6 bg-white/60">
        <Reveal className="text-center mb-14">
          <p className="uppercase tracking-[3px] text-xs text-[#7C8B68] mb-4">The Day</p>
          <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wedding Details</h2>
        </Reveal>
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-[#FAF6F0] rounded-2xl p-8 text-center border border-[#E5DED2] h-full">
              <p className="text-sm font-medium text-[#5C4A3A] mb-1">Ceremony</p>
              <div className="w-8 h-px bg-[#D4C4A0] mx-auto my-3" />
              <p className="text-2xl italic text-[#7C8B68] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>15:00</p>
              <p className="text-sm text-[#5C4A3A]">Willow Creek Estate</p>
              <p className="text-xs text-[#A8B89C]">Pretoria, South Africa</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-[#FAF6F0] rounded-2xl p-8 text-center border border-[#E5DED2] h-full">
              <p className="text-sm font-medium text-[#5C4A3A] mb-1">Reception</p>
              <div className="w-8 h-px bg-[#D4C4A0] mx-auto my-3" />
              <p className="text-2xl italic text-[#7C8B68] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>17:00</p>
              <p className="text-sm text-[#5C4A3A]">Willow Creek Estate</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Order of the Day */}
      <section className="py-20 px-6">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Order of the Day</h2>
        </Reveal>
        <div className="max-w-md mx-auto border-l border-[#D4C4A0] pl-8 space-y-6">
          {schedule.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="text-[#3A3A3A]">
                <span className="text-[#7C8B68] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.time}</span>
                {' — '}{s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-20 px-6" style={{ background: 'linear-gradient(160deg,#7C8B68,#5C6B4E)' }}>
        <Reveal className="max-w-2xl mx-auto text-center text-white mb-10">
          <h2 className="text-3xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Will you celebrate with us?</h2>
          <p className="opacity-85 text-sm">Please let us know by 14 January 2027.</p>
        </Reveal>

        <div className="max-w-md mx-auto">
          <div className="bg-white/95 rounded-2xl p-8 text-center">
            <p className="text-sm text-[#5C4A3A] mb-6">
              RSVP responses are tracked live in a private guest sheet, with an instant email
              notification for every reply — no separate app, no spreadsheet chasing.
            </p>
            <a
              href={DEMO_RSVP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full font-medium text-white"
              style={{ background: '#7C8B68' }}
            >
              Open the RSVP form
            </a>
            <p className="text-xs text-[#A8B89C] mt-4">
              (Opens in a new tab — Google doesn&apos;t allow this form to be shown inline on
              other sites, so on a real invitation it lives on its own page.)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white/60">
        <Reveal className="text-center mb-10">
          <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Quick Answers</h2>
        </Reveal>
        <div className="max-w-xl mx-auto space-y-5">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="border-b border-[#E5DED2] pb-4">
                <p className="font-medium text-[#5C4A3A] text-sm mb-1">{f.q}</p>
                <p className="text-sm text-[#3A3A3A]/70">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-6 text-center" style={{ background: '#3A342E' }}>
        <Reveal>
          <p className="text-white text-2xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            We can&apos;t wait to celebrate with you
          </p>
          <p className="text-white/70 italic mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>With love,</p>
          <p className="text-white text-4xl" style={{ fontFamily: "'Alex Brush', cursive" }}>Emma & James</p>
        </Reveal>
      </section>

      <div className="text-center py-8 px-6 bg-[#FAF6F0]">
        <p className="text-sm text-[#8B7355] mb-2">Like this style? This could be yours.</p>
        <a
          href="https://wa.me/27728393087"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 rounded-full font-medium text-white"
          style={{ background: '#7C8B68' }}
        >
          Start Your Invitation
        </a>
      </div>
    </div>
  )
}