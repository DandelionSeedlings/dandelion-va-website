'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import Link from 'next/link'
import { 
  FaReceipt, FaCamera, FaBrain, FaFileCsv, FaCloud, 
  FaCheckCircle, FaArrowRight, FaShoppingCart, FaShieldAlt,
  FaWhatsapp, FaClock, FaBolt, FaFileInvoiceDollar
} from 'react-icons/fa'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbyUAtVX_pKihPq2iBqb_bq4ctso-v8z52YHHlSX3TflJaz_DlaMsTq8FUSoCw7hmQqPNw/exec'

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
  { icon: FaClock, value: 208, suffix: '+', label: 'Hours reclaimed per year, per business' },
  { icon: FaBolt, value: 3, suffix: 's', label: 'For AI to read and categorize a receipt' },
  { icon: FaFileInvoiceDollar, value: 100, suffix: '%', label: 'SARS-ready, every export' },
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

  return <span ref={ref}>{display}{suffix}</span>
}

const features = [
  {
    icon: FaCamera,
    title: 'Snap Any Receipt',
    desc: 'Photograph it with your phone. Paper, email screenshot, or PDF — the system handles all of them the same way.'
  },
  {
    icon: FaBrain,
    title: 'AI Reads Everything',
    desc: 'Groq AI extracts date, vendor, amount, and VAT automatically. No typing. No spreadsheets. No manual re-entry.'
  },
  {
    icon: FaFileCsv,
    title: 'SARS-Ready CSV Export',
    desc: 'A clean, structured expense report your accountant can work from directly — engineered for South African compliance, not adapted from a US template.'
  },
  {
    icon: FaCloud,
    title: 'Organized in Your Drive',
    desc: 'Every receipt stores in your own Google Drive, categorized and searchable — permanently, and entirely under your control.'
  }
]

const steps = [
  { num: '1', title: 'Snap', desc: 'Photograph any receipt with your phone' },
  { num: '2', title: 'Extract', desc: 'AI reads the data in under 3 seconds — no manual entry' },
  { num: '3', title: 'Export', desc: 'A clean CSV, ready for your accountant, or your Sheets dashboard' }
]

const faqs = [
  { q: 'Do I need a special phone?', a: 'Any smartphone works. iPhone, Android, Samsung — if it has a camera, it\u2019s already capable enough.' },
  { q: 'Is my data safe?', a: 'Everything lives in your own Google Drive and Sheets. We never host it, and we never see it — it\u2019s your infrastructure, not ours.' },
  { q: 'What about VAT?', a: 'ReceiptSnap extracts VAT amounts where visible and tags every expense by category, so SARS filing is a formality, not a project.' },
  { q: 'Can I use it for multiple businesses?', a: 'Each license covers one Google account. For separate businesses, deploy a separate license.' },
  { q: 'What if I need help?', a: 'WhatsApp support at +27 72 839 3087. Most issues get resolved in minutes, not ticket queues.' }
]

export default function ReceiptSnapPage() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 640)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <div className="h-20" />

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={showSticky ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0a1628]/95 backdrop-blur-md border-b border-[#D4AF37]/20"
        style={{ pointerEvents: showSticky ? 'auto' : 'none' }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaReceipt className="text-[#D4AF37] hidden sm:block" />
            <span className="text-white font-bold text-sm sm:text-base">ReceiptSnap</span>
            <span className="text-gray-400 text-sm hidden sm:inline">\u2014 R299, once</span>
          </div>
          <a
            href={`${ORDER_FORM_URL}?product=ReceiptSnap`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 flex-shrink-0"
          >
            <FaShoppingCart size={14} /> Deploy Now
          </a>
        </div>
      </motion.div>

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
                animation: `receiptsnap-float-seed ${seed.duration}s ease-in-out ${seed.delay}s infinite`,
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
              <FaReceipt /> R299 Once-Off \u2022 No Monthly Fees
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Receipt Chaos,<br />
              <span className="text-[#D4AF37]">Engineered Out.</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Every receipt captured, categorized, and export-ready \u2014 automatically. Built for 
              South African business owners who need SARS-compliant records without the admin 
              headache of building them by hand.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={`${ORDER_FORM_URL}?product=ReceiptSnap`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center gap-2"
              >
                <FaShoppingCart /> Deploy ReceiptSnap \u2014 R299
              </a>
              <a 
                href="#how-it-works"
                className="text-white/70 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 border border-white/20 hover:border-white/40"
              >
                See How It\u2019s Engineered <FaArrowRight />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> Works on any phone</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> Runs inside Google Sheets</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> SARS-compliant exports</span>
            </div>
          </motion.div>
        </div>
      </section>

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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-[#0a1628] mb-3">Sound Familiar?</h2>
            <p className="text-gray-600">If any of these are true, this is a design failure, not a discipline problem \u2014 and it\u2019s exactly what ReceiptSnap was engineered to fix.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'A shoebox of crumpled receipts you keep meaning to sort?',
              'Hours lost typing the same data into a spreadsheet, one line at a time?',
              'VAT claims quietly missed because the receipt never made it into the system?',
              'No real proof ready the moment SARS asks a question?'
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

      <section id="how-it-works" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">How It\u2019s Engineered</h2>
            <p className="text-gray-600">From chaos to organized, in the time it takes to take a photo.</p>
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
                    <h3 className="font-display text-xl font-bold text-[#0a1628] mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-[#0a1628] mb-3">See It In Action</h2>
            <p className="text-gray-600">From photo to organized, exported data \u2014 watch the whole process.</p>
          </motion.div>
          
          <div className="bg-[#0a1628] rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/9H25AjnPQdA" 
              title="ReceiptSnap Demo \u2014 AI Receipt Tracker for South African Businesses"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://youtu.be/9H25AjnPQdA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">What You Get</h2>
            <p className="text-gray-600">A complete system for never losing track of a receipt again \u2014 engineered once, running permanently.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/15 rounded-xl flex items-center justify-center mb-4 border border-[#D4AF37]/20">
                  <feature.icon className="text-[#D4AF37]" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0a1628] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl font-bold text-[#0a1628] mb-3">Questions? Answered.</h2>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#F5F1E8] rounded-xl p-6 border border-[#D4AF37]/10"
              >
                <h3 className="font-bold text-[#0a1628] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Stop Drowning in Receipts
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              One payment. Permanent organization. No monthly subscription. No hidden fees.
            </p>
            <a
              href={`${ORDER_FORM_URL}?product=ReceiptSnap`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 inline-flex items-center gap-2"
            >
              <FaShoppingCart /> Deploy ReceiptSnap \u2014 R299
            </a>
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
              <FaShieldAlt className="text-emerald-400" />
              <span>Secure payment via bank transfer or SnapScan</span>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes receiptsnap-float-seed {
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