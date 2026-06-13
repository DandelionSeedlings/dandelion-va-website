'use client'

import { motion } from 'framer-motion'
import { FiLock, FiClock, FiCode, FiHeart, FiGlobe, FiAward } from 'react-icons/fi'

export default function WhyUs() {
  const reasons = [
    { icon: FiLock, title: 'Data Security First', description: 'Enterprise-grade security practices. Your business data is protected with the same standards used by Fortune 500 companies.', color: 'bg-navy-900/5', iconColor: 'text-navy-900' },
    { icon: FiClock, title: '24-Hour Response', description: 'Never wait for answers. All emails and messages receive a response within 24 hours, guaranteed.', color: 'bg-gold-pale', iconColor: 'text-gold-dark' },
    { icon: FiCode, title: 'Technical Expertise', description: 'Not just a VA — I write custom Google Apps Script automation that saves you hundreds of hours annually.', color: 'bg-navy-900/5', iconColor: 'text-navy-700' },
    { icon: FiHeart, title: 'Personal Touch', description: 'I learn your business inside out. You get a partner who understands your goals, not just a task completer.', color: 'bg-gold-pale', iconColor: 'text-gold-dark' },
    { icon: FiGlobe, title: 'Bilingual Support', description: 'Fluent in English and Afrikaans. Serve all your South African clients with confidence and cultural understanding.', color: 'bg-navy-900/5', iconColor: 'text-navy-900' },
    { icon: FiAward, title: 'BCEA Exempt', description: 'Independent contractor status means flexible arrangements without the complexity of employment law.', color: 'bg-gold-pale', iconColor: 'text-gold-dark' },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-navy-900/5 rounded-full blur-3xl"></div>
      <div className="container-max px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-4">Why Me</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Why Choose <span className="text-gold-dark">Dandelion</span> Creations?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto mt-6">The difference between a good VA and a great business partner</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1, duration: 0.6 }} viewport={{ once: true }}
              className="bg-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 border border-gold/5">
              <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className={`w-8 h-8 ${reason.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-dark transition-colors">{reason.title}</h3>
              <p className="text-navy-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
