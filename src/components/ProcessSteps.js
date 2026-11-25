'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiSearch, FiPenTool, FiCpu, FiSend } from 'react-icons/fi'

const steps = [
  {
    num: '01',
    title: 'Free Systems Audit',
    desc: 'A 15 to 30 minute call about how your business runs today. You tell us what keeps breaking or eating your time.',
    icon: FiSearch,
  },
  {
    num: '02',
    title: 'A written plan',
    desc: 'Within 48 hours you get the fix in writing, with the price. A ready-made app if one fits, a custom build if it does not.',
    icon: FiPenTool,
  },
  {
    num: '03',
    title: 'We build and test it',
    desc: 'Inside your own Google account, with your real information, and checked properly before you rely on it.',
    icon: FiCpu,
  },
  {
    num: '04',
    title: 'Handover and support',
    desc: 'We show you and your team how it works. If you want help after that, Embedded Support looks after it for you.',
    icon: FiSend,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ProcessSteps() {
  return (
    <section id="process" className="scroll-mt-24 py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">
            The Dandelion process
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
            How we work
          </h2>
          <p className="text-[#0a1628]/60 text-lg max-w-xl mx-auto font-medium">
            Four steps, and you know the price before anything gets built.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <step.icon className="text-[#D4AF37]" size={20} />
                </div>
                <span className="text-3xl font-bold text-[#D4AF37]/30 group-hover:text-[#D4AF37]/60 transition-colors duration-300">
                  {step.num}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>

              {i < steps.length - 1 && true && (
                <div className="hidden lg:block absolute top-6 -right-4 w-8 h-px bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-sm font-semibold text-gold transition hover:bg-navy-700"
          >
            Book a Systems Audit <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}