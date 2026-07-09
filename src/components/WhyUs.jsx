'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiX, FiMinus, FiArrowRight } from 'react-icons/fi'

export default function WhyUs() {
  const comparison = [
    {
      label: 'Cost structure',
      saas: { text: 'Recurring, compounds forever', tone: 'bad' },
      staff: { text: 'Recurring, scales with headcount', tone: 'bad' },
      us: { text: 'One-time, owned permanently', tone: 'good' },
    },
    {
      label: 'Fit to your business',
      saas: { text: 'Generic, built for everyone', tone: 'bad' },
      staff: { text: "Depends entirely on the person", tone: 'neutral' },
      us: { text: 'Engineered to your exact process', tone: 'good' },
    },
    {
      label: 'If it breaks',
      saas: { text: "You wait on their support queue", tone: 'bad' },
      staff: { text: "You're dependent on one person's knowledge", tone: 'bad' },
      us: { text: 'Documented, auditable, yours to maintain', tone: 'good' },
    },
    {
      label: 'Scalability',
      saas: { text: 'Pay more per seat as you grow', tone: 'bad' },
      staff: { text: 'Hire more people as you grow', tone: 'bad' },
      us: { text: "The system scales, headcount doesn't", tone: 'good' },
    },
  ]

  const toneIcon = (tone) => {
    if (tone === 'good') return <FiCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
    if (tone === 'bad') return <FiX className="w-4 h-4 text-navy-300 flex-shrink-0" />
    return <FiMinus className="w-4 h-4 text-navy-300 flex-shrink-0" />
  }

  return (
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container-max px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-4">
            The Alternative to Chaos
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Why Businesses Choose <span className="text-gold-dark">Engineered Systems</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto mt-6">
            Every operations problem has three possible fixes. We only build the third one.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-cream rounded-2xl border border-gold/20 shadow-lg overflow-hidden">
            {/* Column Headers */}
            <div className="grid grid-cols-4 border-b border-gold/20">
              <div className="p-4 md:p-6"></div>
              <div className="p-4 md:p-6 text-center border-l border-gold/10">
                <p className="text-navy-500 text-xs md:text-sm font-semibold">Generic SaaS</p>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-gold/10">
                <p className="text-navy-500 text-xs md:text-sm font-semibold">More Staff</p>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-gold/20 bg-navy-900 rounded-tr-2xl">
                <p className="text-gold text-xs md:text-sm font-bold">Dandelion Creations</p>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 ${i !== comparison.length - 1 ? 'border-b border-gold/10' : ''}`}
              >
                <div className="p-4 md:p-6 flex items-center">
                  <p className="text-navy-900 text-sm md:text-base font-bold">{row.label}</p>
                </div>
                <div className="p-4 md:p-6 border-l border-gold/10 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-center">
                    {toneIcon(row.saas.tone)}
                    <span className="text-navy-500 text-xs md:text-sm">{row.saas.text}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 border-l border-gold/10 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-center">
                    {toneIcon(row.staff.tone)}
                    <span className="text-navy-500 text-xs md:text-sm">{row.staff.text}</span>
                  </div>
                </div>
                <div
                  className={`p-4 md:p-6 border-l border-gold/20 bg-navy-900/95 flex items-center justify-center ${
                    i === comparison.length - 1 ? 'rounded-br-2xl' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 text-center">
                    <FiCheck className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-cream text-xs md:text-sm font-medium">{row.us.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-10"
        >
          <p className="text-navy-500 text-sm md:text-base leading-relaxed">
            This isn&apos;t a case against software or people — both have their place. It&apos;s a
            recognition that most businesses reach for the first two options by default, without
            ever being shown the third.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-700 text-gold px-8 py-4 rounded-full font-bold transition-all duration-300"
          >
            See the Systems We Build <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}