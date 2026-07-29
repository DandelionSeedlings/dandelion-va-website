'use client'

import { motion } from 'framer-motion'
import { FaLock, FaSyncAlt, FaCheckDouble } from 'react-icons/fa'

const points = [
  {
    icon: FaLock,
    title: 'Owned, Not Rented',
    desc: 'Built once, inside your own Google Workspace. It stays yours whether or not you ever hire us again.',
  },
  {
    icon: FaSyncAlt,
    title: 'No Subscriptions',
    desc: 'One payment per system. No monthly fee stacking on top of the last one.',
  },
  {
    icon: FaCheckDouble,
    title: 'Engineered, Not Patched',
    desc: 'We fix the root cause once, not the symptom every week.',
  },
]

export default function Differentiators() {
  return (
    <section className="py-16 px-4 bg-navy-800 border-y border-gold/10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gold/20">
              <point.icon className="text-gold" size={18} />
            </div>
            <h3 className="font-display text-white font-bold text-lg mb-2">{point.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}