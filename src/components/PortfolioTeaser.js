'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi'
import { FaUsers, FaReceipt, FaCalendarCheck, FaFileInvoiceDollar } from 'react-icons/fa'

const stats = [
  { value: '4', label: 'Systems Built', sub: 'ConnectAbility, Payability, ReceiptSnap, Bookability' },
  { value: '0', label: 'Monthly Subscriptions', sub: 'Own your infrastructure' },
  { value: '100%', label: 'Owned By You', sub: 'Not us, not a platform' },
]

const systemsWeUse = [
  {
    icon: FaUsers,
    name: 'ConnectAbility',
    desc: 'Our own leads and follow-ups run through it, every day.',
  },
  {
    icon: FaFileInvoiceDollar,
    name: 'Payability',
    desc: 'We invoice through our own system. R2M+ processed so far.',
  },
  {
    icon: FaReceipt,
    name: 'ReceiptSnap',
    desc: 'Our own receipts get snapped and filed. No separate tool.',
  },
  {
    icon: FaCalendarCheck,
    name: 'Bookability',
    desc: 'Client consultations booked through this exact system.',
  },
]

export default function PortfolioTeaser() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Systems We Build & Use</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">We Run Our Own Business On These</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Client case studies are coming as those relationships mature. In the meantime, here&apos;s something you can actually verify:
            we use exactly what we build, every day, to run Dandelion Creations OS itself.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#F5F1E8] rounded-2xl p-5 text-center border border-[#D4AF37]/10">
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-[#0a1628]">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {systemsWeUse.map((system, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F5F1E8] rounded-2xl p-6 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
            >
              <div className="w-11 h-11 bg-gradient-to-r from-[#D4AF37] to-[#b8941f] rounded-xl flex items-center justify-center text-white mb-4">
                <system.icon size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#0a1628] mb-2">{system.name}</h3>
              <p className="text-gray-600 text-sm">{system.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/27728393087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#0a1628]/90 text-[#D4AF37] px-8 py-4 rounded-xl font-bold transition-all"
          >
            <FiTrendingUp /> Book a Systems Audit
          </a>
        </div>
      </div>
    </section>
  )
}