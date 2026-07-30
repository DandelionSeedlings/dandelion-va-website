'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiTrendingUp, FiMessageSquare, FiCalendar } from 'react-icons/fi'

export default function EmbeddedSupportPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div className="h-20" />

      {/* Hero */}
      <section className="relative pt-16 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Embedded Operations Support</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A Person Inside Your Business,<br />
              <span className="text-[#D4AF37]">Not Just a System Built for It.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Sometimes you don't need another tool. You need someone who learns your operations,
              manages your presence, and keeps the admin moving while you focus on growth.
            </p>
            <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all">
              WhatsApp Us <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">Systems Fix the Process. People Power the Business.</h2>
          <p className="text-[#0a1628]/70 text-lg max-w-2xl mx-auto">
            Our AbilitySuite™ tools handle the infrastructure. But if you also need hands-on support
            — social media, client communication, ongoing admin — this is where Embedded Operations comes in.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">What We Handle</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Embedded Support Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FiTrendingUp, title: 'Social Media Management', desc: 'Content creation, scheduling, community management, and analytics reporting across Instagram, Facebook, LinkedIn, and TikTok.' },
              { icon: FiMessageSquare, title: 'Admin & Operations', desc: 'Email and calendar management, client communication, CRM upkeep, data entry, and travel coordination.' },
              { icon: FiCalendar, title: 'Content & Brand Support', desc: 'Canva design, caption writing, campaign planning, and brand consistency across all touchpoints.' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                <s.icon className="text-[#D4AF37] mb-4" size={28} />
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Investment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Retainer-Based Support</h2>
            <p className="text-[#0a1628]/60 mt-4">No hourly surprises. Predictable monthly support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Core', price: 'R5,500', desc: 'Up to 20 hours/month. Ideal for ongoing social media + light admin.', features: ['Social media (1 platform)', 'Content creation (4 posts/week)', 'Email & calendar management', 'Monthly analytics report'] },
              { name: 'Growth', price: 'R9,500', desc: 'Up to 40 hours/month. For businesses scaling their presence.', features: ['Social media (2 platforms)', 'Content creation (8 posts/week)', 'CRM & client communication', 'Ad hoc design & copy support', 'Bi-weekly strategy check-ins'] },
              { name: 'Strategic', price: 'R16,000', desc: 'Up to 80 hours/month. Embedded partner in your operations.', features: ['Full social media (4 platforms)', 'Daily community engagement', 'Full admin & operations support', 'Campaign planning & execution', 'Weekly strategy calls', 'Priority WhatsApp support'] },
            ].map((tier, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 border ${i === 1 ? 'bg-[#0a1628] border-[#D4AF37]/50 ring-2 ring-[#D4AF37]/20' : 'bg-white border-[#D4AF37]/10'}`}>
                <h3 className={`text-lg font-bold mb-2 ${i === 1 ? 'text-[#D4AF37]' : 'text-[#0a1628]'}`}>{tier.name}</h3>
                <div className={`text-4xl font-bold mb-2 ${i === 1 ? 'text-white' : 'text-[#0a1628]'}`}>{tier.price}<span className="text-sm font-normal opacity-60">/mo</span></div>
                <p className={`text-sm mb-6 ${i === 1 ? 'text-gray-400' : 'text-gray-500'}`}>{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-3 text-sm ${i === 1 ? 'text-gray-300' : 'text-gray-600'}`}>
                      <FiCheck className="text-[#D4AF37] flex-shrink-0" size={16} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl font-bold text-sm transition-all ${i === 1 ? 'bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628]' : 'bg-[#0a1628] hover:bg-[#0a1628]/90 text-white'}`}>
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0a1628] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not Sure Which Tier Fits?</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">Tell us what you're juggling. We'll recommend the right level of support — no upsell, no pressure.</p>
        <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all">
          Let's Talk on WhatsApp <FiArrowRight />
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-400 text-sm">© 2026 Dandelion Creations OS. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-1">dandelioncreations.co.za</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/" className="text-[#D4AF37] hover:underline">Home</Link>
            <Link href="/receiptsnap" className="text-[#D4AF37] hover:underline">ReceiptSnap</Link>
            <Link href="/connectability" className="text-[#D4AF37] hover:underline">ConnectAbility</Link>
            <Link href="/bookability" className="text-[#D4AF37] hover:underline">Bookability</Link>
            <Link href="/embeddedsupport" className="text-[#D4AF37] hover:underline">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}