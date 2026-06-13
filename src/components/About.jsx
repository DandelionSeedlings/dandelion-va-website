'use client'

import { motion } from 'framer-motion'
import { FiAward, FiGlobe, FiHeart } from 'react-icons/fi'
import Image from 'next/image'

export default function About() {
  const highlights = [
    { icon: FiAward, text: 'Certified in Google Workspace' },
    { icon: FiGlobe, text: 'Bilingual (English & Afrikaans)' },
    { icon: FiHeart, text: '24-hour email response commitment' },
  ]

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-900/3 -skew-x-12 translate-x-20"></div>

      <div className="container-max px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Meet <span className="text-gold-dark">Simone</span> Theron
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-gold rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-navy-900/5 rounded-2xl"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/headshot.jpg" alt="Simone Theron" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                I'm Simone, a passionate Virtual Assistant and Google Apps Script developer based in Pretoria, South Africa. For years, I've helped businesses streamline operations, save countless hours, and scale confidently.
              </p>
              <p className="text-lg text-navy-600 leading-relaxed">
                What sets me apart? I don't just complete tasks — I <span className="text-gold-dark font-semibold">understand your business</span>. I build custom automation solutions that fit <em>your</em> workflow, not the other way around.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i*0.15, duration: 0.5 }} viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-cream rounded-xl border border-gold/10">
                  <div className="w-12 h-12 bg-gold-pale rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold-dark" />
                  </div>
                  <span className="text-navy-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-navy">Let's Work Together</a>
              <a href="#services" className="btn-outline">View Services</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
