'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import Link from 'next/link'
import {
  FaUsers, FaComments, FaBell, FaChartLine, FaCloud,
  FaCheckCircle, FaArrowRight, FaGift, FaShieldAlt,
  FaWhatsapp, FaClock, FaHeart, FaReceipt, FaCalendarCheck, FaBoxOpen
} from 'react-icons/fa'

// Replace with your deployed ConnectAbility Apps Script Web App URL (the /exec link)
const CONNECTABILITY_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'
const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbyUAtVX_pKihPq2iBqb_bq4ctso-v8z52YHHlSX3TflJaz_DlaMsTq8FUSoCw7hmQqPNw/exec'

// Floating seed positions — same pattern as ReceiptSnap page
const seeds = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${3 + (i * 5) % 94}%`,
  top: `${4 + (i * 7) % 88}%`,
  size: 28 + (i % 6) * 14,
  delay: i * 0.4,
  duration: 12 + (i % 5) * 4,
  opacity: 0.08 + (i % 4) * 0.08,
  rotation: (i * 37) % 360
}))

const impactStats = [
  { icon: FaUsers, value: 100, suffix: '%', label: 'Of your leads, tracked in one place' },
  { icon: FaBell, value: 0, suffix: '', label: 'Follow-ups forgotten, ever again' },
  { icon: FaHeart, value: 0, suffix: '', label: 'Monthly cost, forever' },
]

function AnimatedCounter({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, value, duration])

  return (
    <span ref={ref}>{display}{suffix}</span>
  )
}

const features = [
  {
    icon: FaUsers,
    title: 'Every Lead, One Place',
    desc: 'Contacts, companies, and status, tracked automatically as leads move from first contact to customer. No more scattered notes across WhatsApp and email.'
  },
  {
    icon: FaComments,
    title: 'Interaction History',
    desc: 'Every call, email, and conversation logged against the right contact, so you always know exactly where things stand before you follow up.'
  },
  {
    icon: FaBell,
    title: 'Follow-Ups That Don\u2019t Slip',
    desc: 'Set a follow-up date once, and it surfaces automatically. Nothing depends on you remembering.'
  },
  {
    icon: FaChartLine,
    title: 'A Real Dashboard',
    desc: 'See your pipeline at a glance, built-in charts and formulas, no manual reporting required.'
  }
]

const steps = [
  { num: '1', title: 'Get It', desc: 'Enter your name and email, your free copy arrives instantly' },
  { num: '2', title: 'Deploy It', desc: 'Runs inside your own Google Workspace, set up in minutes' },
  { num: '3', title: 'Grow With It', desc: 'Add leads, log interactions, never lose a follow-up again' }
]

const faqs = [
  { q: 'Is it really free?', a: 'Yes, fully. ConnectAbility is our way of giving small businesses a real system to start with, no trial period, no credit card, no catch.' },
  { q: 'Is my data safe?', a: 'Everything lives in your own Google Drive and Sheets. We never host it, and we never see it, it\u2019s your infrastructure, not ours.' },
  { q: 'Do I need any technical skill to use it?', a: 'If you can use Google Sheets, you can use ConnectAbility. No coding, no setup beyond a few clicks.' },
  { q: 'Can I upgrade it later?', a: 'Yes. ConnectAbility is the entry point into the AbilitySuite\u2122 ecosystem, when you\u2019re ready for more (bookings, receipts, invoicing), those systems are built to work alongside it.' },
  { q: 'What if I need help?', a: 'WhatsApp support at +27 72 839 3087. Most questions get answered in minutes, not ticket queues.' }
]

const crossSell = [
  {
    icon: FaCalendarCheck,
    name: 'Bookability',
    price: 'R499 once-off',
    desc: 'A client booking page and approval dashboard, live availability, no more back-and-forth over WhatsApp trying to confirm a slot.',
    href: '/bookability',
  },
  {
    icon: FaReceipt,
    name: 'ReceiptSnap',
    price: 'R299 once-off',
    desc: 'Snap a photo of any receipt, AI extracts vendor, amount, date, and VAT automatically. SARS-ready exports, zero manual entry.',
    href: '/receiptsnap',
  },
]

export default function ConnectAbilityPage() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 640)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Navbar spacer */}
      <div className="h-20" />

      {/* Sticky CTA bar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={showSticky ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0a1628]/95 backdrop-blur-md border-b border-[#D4AF37]/20"
        style={{ pointerEvents: showSticky ? 'auto' : 'none' }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaUsers className="text-[#D4AF37] hidden sm:block" />
            <span className="text-white font-bold text-sm sm:text-base">ConnectAbility</span>
            <span className="text-gray-400 text-sm hidden sm:inline">— Free, forever</span>
          </div>
          <a
            href={CONNECTABILITY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 flex-shrink-0"
          >
            <FaGift size={14} /> Get It Free
          </a>
        </div>
      </motion.div>

      {/* Hero */}
      <section className="relative bg-[#0a1628] pt-16 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-56 h-56 bg-[#D4AF37] rounded-full blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Floating dandelion seeds */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {seeds.map((seed) => (
            <div
              key={seed.id}
              className="absolute"
              style={{
                left: seed.left,
                top: seed.top,
                width: `${seed.size}px`,
                height: `${seed.size}px`,
                opacity: seed.opacity,
                animation: `connectability-float-seed ${seed.duration}s ease-in-out ${seed.delay}s infinite`,
              }}
            >
              <img
                src="/images/dandelion-seed.png"
                alt=""
                className="w-full h-full"
                style={{ transform: `rotate(${seed.rotation}deg)`, filter: 'brightness(0) invert(1)' }}
                draggable={false}
              />
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-500/30">
              <FaGift /> Free For Small Businesses &bull; No Card Required
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Lead Chaos,<br />
              <span className="text-[#D4AF37]">Engineered Out.</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              A simple CRM to manage leads, log every conversation, and never miss a follow-up again,
              built inside Google Workspace, yours to keep, no subscription, ever.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={CONNECTABILITY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center gap-2"
              >
                <FaGift /> Get ConnectAbility Free
              </a>
              <a
                href="#how-it-works"
                className="text-white/70 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 border border-white/20 hover:border-white/40"
              >
                See How It Works <FaArrowRight />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> Free, forever</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> Runs inside Google Sheets</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> Set up in minutes</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-14 px-4 bg-[#0a1628] border-t border-[#D4AF37]/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/15 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[#D4AF37]/20">
                <stat.icon className="text-[#D4AF37]" size={20} />
              </div>
              <div className="text-4xl font-bold text-[#D4AF37] mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm max-w-[220px] mx-auto">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-[#0a1628] mb-3">Sound Familiar?</h2>
            <p className="text-gray-600">If any of these are true, this is a system problem, not a discipline problem, and it's exactly what ConnectAbility was engineered to fix.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Leads scattered across WhatsApp, email, and sticky notes?',
              'A follow-up you meant to send last week, and forgot?',
              'No real idea which leads are close to closing?',
              'Paying a monthly fee for a CRM you barely use?'
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-red-50 border border-red-100 rounded-xl p-6 text-center"
              >
                <p className="text-[#0a1628] font-medium text-sm">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">How It Works</h2>
            <p className="text-gray-600">From scattered leads to an organized pipeline, in the time it takes to fill in a form.</p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
              className="hidden md:block absolute top-5 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-[#D4AF37]/70 via-[#D4AF37]/40 to-[#D4AF37]/70 -z-0"
            />
            <div className="grid md:grid-cols-3 gap-8 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 text-center relative transition-shadow duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0a1628] font-bold text-lg ring-4 ring-[#F5F1E8]">
                    {step.num}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">What You Get</h2>
            <p className="text-gray-600">A complete system for never losing track of a lead again, engineered once, running permanently.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-[#D4AF37]/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a1628] mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free & CTA */}
      <section className="py-24 px-4 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-500/30">
              <FaShieldAlt /> Free. No Trial Period. No Catch.
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              R0 Once.<br />R0 a Month, Too.
            </h2>

            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              ConnectAbility is our way of giving small businesses a real system to start with,
              engineered once and deployed permanently inside your own Google Workspace. No
              recurring fees. No renewal date. No data lock-in.
            </p>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/10 mb-10 hover:border-[#D4AF37]/40 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">Free</div>
              <p className="text-gray-400 text-sm mb-6">Forever &bull; Instant delivery by email</p>

              <ul className="text-left space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Lead & contact management</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Interaction history</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Automatic follow-up tracking</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Google Sheets dashboard, yours, not ours</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Lifetime access, zero renewals</li>
              </ul>

              <a
                href={CONNECTABILITY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaGift /> Get ConnectAbility Free
                </span>
              </a>
            </motion.div>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <FaWhatsapp className="text-emerald-400" />
              <span>Questions? WhatsApp <a href="https://wa.me/27728393087" className="text-[#D4AF37] hover:underline">+27 72 839 3087</a></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-sell: You might also need */}
      <section className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 text-[#0a1628] px-4 py-2 rounded-full text-sm font-bold mb-4 border border-[#D4AF37]/30">
              <FaBoxOpen /> Part Of AbilitySuite&trade;
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">Want A Booking System Too?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">ConnectAbility is the entry point. When you're ready for more, these are built to work alongside it.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {crossSell.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4AF37]/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <product.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-1">{product.name}</h3>
                <p className="text-[#D4AF37] font-bold text-sm mb-3">{product.price}</p>
                <p className="text-gray-600 text-sm mb-5">{product.desc}</p>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-[#0a1628] font-bold text-sm hover:text-[#D4AF37] transition-colors"
                >
                  Learn more <FaArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0a1628] font-semibold hover:text-[#D4AF37] transition-colors underline"
            >
              Or explore the full AbilitySuite&trade; ecosystem <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-[#0a1628] mb-3">Common Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#F5F1E8] rounded-xl p-6"
              >
                <h3 className="font-bold text-[#0a1628] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-[#F5F1E8] border-t border-[#D4AF37]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
            Ready to Engineer the Chaos Out of Your Leads?
          </h2>
          <a
            href={CONNECTABILITY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30"
          >
            <FaGift /> Get ConnectAbility — Free
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Or <Link href="/" className="text-[#D4AF37] underline hover:no-underline">explore the full AbilitySuite&trade; ecosystem</Link>
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#0a1628] py-8 px-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2026 Dandelion Creations OS. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          dandelioncreations.co.za &bull; dandelioncreat@outlook.com
        </p>
      </footer>
    </div>
  )
}