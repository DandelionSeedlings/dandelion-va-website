'use client'

import { motion } from 'framer-motion'
import { FiSearch, FiMap, FiClock, FiPenTool, FiCpu, FiCheckCircle, FiSend, FiHeart } from 'react-icons/fi'

const steps = [
  {
    num: '01',
    title: 'Discover Your Business',
    desc: 'We get to know you, your goals, and your chaos. Every system starts with understanding the real problem, not the assumed one.',
    icon: FiSearch,
  },
  {
    num: '02',
    title: 'Map Your Workflow',
    desc: 'We map your processes end-to-end and spot the gaps where time, money, and energy are leaking out.',
    icon: FiMap,
  },
  {
    num: '03',
    title: 'Find Time-Wasting Tasks',
    desc: 'We identify the repetitive tasks that drain your team — the ones that should have been automated months ago.',
    icon: FiClock,
  },
  {
    num: '04',
    title: 'Design The System',
    desc: 'We design a custom system that works for you, not against you. Every screen, every flow, every formula — intentional.',
    icon: FiPenTool,
  },
  {
    num: '05',
    title: 'Build & Automate',
    desc: 'We engineer your solution with precision-built automation. Every trigger, every formula, every workflow — crafted to run without you.',
    icon: FiCpu,
  },
  {
    num: '06',
    title: 'Test Everything',
    desc: 'We test every detail under real conditions so when it goes live, it runs smoothly from day one. No surprises.',
    icon: FiCheckCircle,
  },
  {
    num: '07',
    title: 'Launch & Train',
    desc: 'We launch your system and empower your team to use it with confidence. Documentation included, confusion excluded.',
    icon: FiSend,
  },
  {
    num: '08',
    title: 'Support & Improve',
    desc: "We're here for support, tweaks, and continuous improvement. Systems evolve — and so does our partnership.",
    icon: FiHeart,
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
    <section id="process" className="py-24 px-4 bg-white relative overflow-hidden">
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
            How We Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
            The Dandelion Process
          </h2>
          <p className="text-[#0a1628]/60 text-lg max-w-xl mx-auto font-medium italic">
            We don't just build systems. We build freedom.
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

              {i < steps.length - 1 && i % 4 !== 3 && (
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#0a1628]/90 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg"
          >
            Start Your Process <span className="text-[#D4AF37]">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}