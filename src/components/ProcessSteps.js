'use client'

import { motion } from 'framer-motion'
import { FaSearch, FaCogs, FaKey } from 'react-icons/fa'

const steps = [
  { icon: FaSearch, num: '01', title: 'Diagnose', desc: 'We find the actual root cause, not just the symptom you noticed.' },
  { icon: FaCogs, num: '02', title: 'Engineer', desc: 'We build the fix once, inside the Google Workspace you already use.' },
  { icon: FaKey, num: '03', title: 'Own', desc: 'It stays yours, permanently. No renewal date, no monthly fee.' },
]

export default function ProcessSteps() {
  return (
    <section className="py-24 px-4 bg-navy-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">How We Work</h2>
          <p className="text-gray-400">Three steps. No bloated onboarding, no endless discovery calls.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="font-mono text-gold/30 text-5xl font-bold mb-4">{step.num}</div>
              <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-4 border border-gold/20">
                <step.icon className="text-gold" size={16} />
              </div>
              <h3 className="font-display text-white font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}