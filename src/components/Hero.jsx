'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream via-gold-pale/30 to-cream pt-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-navy-900/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rounded-full"></div>

      <div className="container-max px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-navy-900/10 text-navy-900 px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-gold/30">
              <FiCheckCircle className="w-4 h-4 text-gold-dark" />
              BCEA-Exempt Independent Contractor
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy-900 leading-tight mb-6">
              Transform Your{' '}
              <span className="text-gold-dark">Business</span>{' '}
              <span className="font-script text-navy-700">Workflow</span>
            </h1>

            <p className="text-xl text-navy-600 mb-10 max-w-lg leading-relaxed">
              Expert Virtual Assistant & Google Apps Script developer. I automate the tedious so you can focus on what truly matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn-navy inline-flex items-center justify-center gap-2 text-lg">
                Book Discovery Call
                <FiArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="btn-outline inline-flex items-center justify-center text-lg">
                Explore Services
              </a>
            </div>

            <div className="flex gap-10">
              {[{v:'500+',l:'Hours Saved'},{v:'50+',l:'Happy Clients'},{v:'100%',l:'Satisfaction'}].map((s,i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i*0.15 }}>
                  <p className="text-3xl font-bold text-gold-dark">{s.v}</p>
                  <p className="text-sm text-navy-500">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 to-navy-900/10 rounded-[2.5rem] rotate-2"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-navy-900/10 to-gold/20 rounded-[2.5rem] -rotate-2"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/images/headshot.jpg" alt="Simone Theron - Professional Virtual Assistant" fill className="object-cover" priority />
              </div>
              <motion.div className="absolute -bottom-6 -right-6 bg-navy-900 p-6 rounded-2xl shadow-xl border border-gold/30"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <p className="font-bold text-gold text-lg">Expert VA & Developer</p>
                <p className="text-sm text-cream/70">Ready to transform your workflow</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 12, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
        <div className="w-7 h-12 border-2 border-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
