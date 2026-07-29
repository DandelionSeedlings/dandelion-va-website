'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi'

const stats = [
  { value: '14', label: 'Systems Deployed', sub: 'Across 4 categories' },
  { value: '50+', label: 'Businesses Served', sub: 'Since 2020' },
  { value: 'R2M+', label: 'Revenue Processed', sub: 'Through Payability alone' },
  { value: '0', label: 'Monthly Subscriptions', sub: 'Own your infrastructure' },
]

const caseStudies = [
  {
    client: 'Kiddie Junction Academy',
    industry: 'Education',
    system: 'Connectability',
    outcome: '80% admin time saved with automated WhatsApp alerts and digital sign-in.',
  },
  {
    client: 'Simone Theron Consulting',
    industry: 'Professional Services',
    system: 'Payability',
    outcome: 'R50K+ additional revenue tracked with automated invoice pipeline.',
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
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Proof of Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">Built for Real Businesses</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Not hypothetical use cases. Real operations running on systems we engineered.</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-cream rounded-2xl p-5 text-center border border-gold/10">
              <div className="text-3xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-navy-900">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream rounded-2xl p-6 border border-gold/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gold/90 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {study.industry}
                </span>
                <span className="text-gold text-xs font-bold">{study.system}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">{study.client}</h3>
              <p className="text-gray-600 text-sm">{study.outcome}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-gold px-8 py-4 rounded-lg font-bold transition-all duration-300"
          >
            <FiTrendingUp /> Book a Systems Audit
          </a>
        </div>
      </div>
    </section>
  )
}