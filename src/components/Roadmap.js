'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaBuilding, FaClock, FaCheckCircle } from 'react-icons/fa'

const quarters = [
  {
    quarter: 'Q3 2026',
    period: 'July – September',
    icon: FaRocket,
    color: 'from-emerald-500 to-teal-600',
    items: [
      {
        name: 'Trackability',
        subtitle: 'Time & Payroll',
        description: 'Kiosk QR check-in/out interfaces and automated PDF payslip generators.',
        price: 'R499',
        status: 'coming-soon'
      },
      {
        name: 'Mini Cash-Up',
        subtitle: 'Daily Cash Reconciliation',
        description: 'Lightweight daily cash-up tool for retail and hospitality. Reconcile tills and track floats in minutes.',
        price: 'R499',
        status: 'coming-soon'
      }
    ]
  },
  {
    quarter: 'Q4 2026',
    period: 'October – December',
    icon: FaBuilding,
    color: 'from-violet-500 to-purple-600',
    items: [
      {
        name: 'Capability',
        subtitle: 'Main Office Dashboard',
        description: 'The ultimate master executive view compiling metrics from across the entire AbilitySuite™.',
        price: 'R1,499',
        status: 'coming-soon'
      },
      {
        name: 'CV/Portfolio Builder',
        subtitle: 'Professional Document Generator',
        description: 'Generate polished CVs, portfolios, and proposals from your Google Sheets data.',
        price: 'R299–R999',
        status: 'coming-soon'
      }
    ]
  }
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding bg-cream">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-script text-2xl mb-2 block">What's Next</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            The AbilitySuite™ roadmap. We're building the tools South African businesses actually need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quarters.map((q, i) => (
            <motion.div
              key={q.quarter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl shadow-xl border border-gold/20 overflow-hidden"
            >
              {/* Quarter Header */}
              <div className={`bg-gradient-to-r ${q.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <q.icon className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">{q.quarter}</h3>
                </div>
                <p className="text-white/80 text-sm">{q.period}</p>
              </div>

              {/* Items */}
              <div className="p-6 space-y-6">
                {q.items.map((item, j) => (
                  <div key={j} className="relative pl-6 border-l-2 border-gold/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gold rounded-full border-4 border-white"></div>
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-lg font-bold text-navy-900">{item.name}</h4>
                      <span className="text-sm font-bold text-gold bg-gold/10 px-2 py-1 rounded-full">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-navy-500 font-medium mb-2">{item.subtitle}</p>
                    <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400">
                      <FaClock size={12} />
                      <span>Coming {q.quarter}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notify CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-navy-600 mb-4">
            Want early access or have a feature request?
          </p>
          <a
            href="https://wa.me/27728393087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-gold px-8 py-4 rounded-lg font-bold transition-all duration-300"
          >
            <FaCheckCircle /> Join the Waitlist via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}