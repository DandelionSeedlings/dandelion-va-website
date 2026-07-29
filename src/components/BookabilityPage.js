'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import Link from 'next/link'
import {
  FaCalendarCheck, FaQrcode, FaLock, FaEnvelope, FaWhatsapp,
  FaUserCheck, FaClock, FaBan, FaShieldAlt, FaShoppingCart,
  FaArrowRight, FaCheckCircle, FaMobileAlt, FaSyncAlt,
  FaExclamationTriangle, FaCalendarTimes, FaReply,
  FaReceipt
} from 'react-icons/fa'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

// Floating seed positions
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
  { icon: FaCalendarTimes, value: 0, suffix: '', label: 'Double-bookings ever again' },
  { icon: FaClock, value: 3, suffix: 's', label: 'For a client to book a slot' },
  { icon: FaShieldAlt, value: 100, suffix: '%', label: 'PIN-protected admin control' },
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
    icon: FaQrcode,
    title: 'QR Code Booking',
    desc: 'Clients scan a QR code or click a link to see your live availability and book instantly. No app downloads. No account creation. No friction.'
  },
  {
    icon: FaLock,
    title: 'PIN-Protected Admin Portal',
    desc: 'Your backend is locked behind a PIN only you control. View bookings, manage slots, block time off, and export records — all from one secure dashboard.'
  },
  {
    icon: FaEnvelope,
    title: 'Email Confirmations',
    desc: 'Every booking triggers an instant email confirmation to the client and a notification to you. Reminders fire automatically. No one forgets.'
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp Confirmations',
    desc: 'Clients receive WhatsApp booking confirmations and reminders on the platform they already check obsessively. Higher show-up rates, zero extra work.'
  },
  {
    icon: FaUserCheck,
    title: 'Contact Deduplication',
    desc: 'The same client books twice? Bookability merges their records automatically. One contact profile, one history, zero duplicate chaos in your CRM.'
  },
  {
    icon: FaBan,
    title: 'Slot Blocking',
    desc: 'Block lunch breaks, personal time, or emergency gaps with one click. Your calendar respects your life, not just your business.'
  }
]

const steps = [
  { num: '1', title: 'Share', desc: 'Send your QR code or booking link to clients — print it, post it, or paste it anywhere.' },
  { num: '2', title: 'Book', desc: 'Clients pick a slot from your live calendar and confirm in under 3 seconds.' },
  { num: '3', title: 'Confirm', desc: 'Email and WhatsApp confirmations fire instantly. You get notified. They get reminded. Everyone shows up.' }
]

const faqs = [
  { q: 'Do my clients need to download an app?', a: 'No. Bookability runs entirely in the browser. Clients scan your QR code or click your link, pick a slot, and done. Nothing to install.' },
  { q: 'Can I block time off for lunch or holidays?', a: 'Yes. The admin portal has one-click slot blocking. Block individual slots, full days, or recurring breaks. Your availability updates instantly.' },
  { q: 'How does the PIN protection work?', a: 'Your admin dashboard is protected by a 4-digit PIN you set. No one accesses your bookings, client data, or settings without it — not even shared sheet viewers.' },
  { q: 'Will this integrate with my existing CRM?', a: 'Bookability is built on Google Sheets, so it natively feeds into Connectability (CRM Mini) and Scalability (CRM Pro). One contact record, everywhere.' },
  { q: 'What if I need help setting it up?', a: 'WhatsApp support at +27 72 839 3087. Most setups take under 15 minutes. If you want a white-glove deployment, add Adaptability at checkout.' }
]

export default function BookabilityPage() {
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
            <FaCalendarCheck className="text-[#D4AF37] hidden sm:block" />
            <span className="text-white font-bold text-sm sm:text-base">Bookability</span>
            <span className="text-gray-400 text-sm hidden sm:inline">— R499, once</span>
          </div>
          <a
            href={`${ORDER_FORM_URL}?product=Bookability`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 flex-shrink-0"
          >
            <FaShoppingCart size={14} /> Deploy Now
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
                animation: `bookability-float-seed ${seed.duration}s ease-in-out ${seed.delay}s infinite`,
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
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-amber-500/30">
              <FaCalendarCheck /> R499 Once-Off • No Monthly Fees
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let Clients Book<br />
              <span className="text-[#D4AF37]">While You Sleep.</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              A QR-code booking system with PIN-protected admin, automatic email & WhatsApp
              confirmations, and built-in contact deduplication. Built for South African service
              businesses that are done playing phone-tag for appointments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={`${ORDER_FORM_URL}?product=Bookability`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center gap-2"
              >
                <FaShoppingCart /> Deploy Bookability — R499
              </a>
              <a
                href="#how-it-works"
                className="text-white/70 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 border border-white/20 hover:border-white/40"
              >
                See How It Works <FaArrowRight />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> QR code booking</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> PIN-protected admin</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> WhatsApp confirmations</span>
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
            <h2 className="text-3xl font-bold text-[#0a1628] mb-3">Sound Familiar?</h2>
            <p className="text-gray-600">If any of these are true, your scheduling is costing you money — and Bookability was built to fix it.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Double-booked the same slot twice this month?',
              'Spending hours every week on back-and-forth WhatsApp scheduling?',
              'Clients not showing up because they "forgot" the appointment?',
              'No clear record of who booked what, when, and for how long?'
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">How It Works</h2>
            <p className="text-gray-600">From QR code to confirmed booking — fully automatic.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">What You Get</h2>
            <p className="text-gray-600">Everything a service business needs to take bookings seriously — without paying monthly rent for the privilege.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-[#F5F1E8] rounded-xl p-6 shadow-sm border border-[#D4AF37]/10"
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

      {/* Price & CTA */}
      <section className="py-24 px-4 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-500/30">
              <FaShieldAlt /> One Payment. Owned Forever.
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              R499 Once.<br />Not R499 a Month.
            </h2>

            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              Other booking platforms charge monthly fees and hold your client data hostage.
              Bookability deploys inside your own Google Workspace. You own the system,
              the data, and the relationship. Forever.
            </p>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/10 mb-10 hover:border-[#D4AF37]/40 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">R499</div>
              <p className="text-gray-400 text-sm mb-6">One-time purchase • Instant license delivery</p>

              <ul className="text-left space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> QR code + link booking</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> PIN-protected admin portal</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Email & WhatsApp confirmations</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Contact deduplication</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Slot blocking & time-off</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Lifetime access, zero renewals</li>
              </ul>

              <a
                href={`${ORDER_FORM_URL}?product=Bookability`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaShoppingCart /> Deploy Bookability Now
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

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0a1628] mb-3">Common Questions</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
            Ready to Stop Playing Phone-Tag?
          </h2>
          <a
            href={`${ORDER_FORM_URL}?product=Bookability`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30"
          >
            <FaShoppingCart /> Deploy Bookability — R499
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Or <Link href="/" className="text-[#D4AF37] underline hover:no-underline">explore the full AbilitySuite™ ecosystem</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] py-8 px-4 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 Dandelion Creations OS. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          dandelioncreations.co.za • dandelioncreat@outlook.com
        </p>
      </footer>

      {/* KEY FIX: @keyframes wrapped in <style jsx global> */}
      <style jsx global>{`
        @keyframes bookability-float-seed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(18px, -22px) rotate(8deg); }
          40% { transform: translate(-14px, -32px) rotate(-5deg); }
          60% { transform: translate(12px, -18px) rotate(6deg); }
          80% { transform: translate(-8px, -28px) rotate(-3deg); }
        }
      `}</style>
    </div>
  )
}