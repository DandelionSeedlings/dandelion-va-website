'use client'

import { motion } from 'framer-motion'
import { FiTrendingUp, FiClock, FiUsers } from 'react-icons/fi'

export default function Portfolio() {
  const caseStudies = [
    { title: 'E-commerce Automation', industry: 'Retail', challenge: 'Manual inventory tracking consuming 15+ hours weekly',
      solution: 'Custom Google Apps Script with automated stock alerts and reporting',
      result: '95% reduction in manual work, zero stockouts in 6 months', icon: FiTrendingUp, color: 'bg-navy-900', lightColor: 'bg-navy-900/5' },
    { title: 'Client Onboarding System', industry: 'Consulting', challenge: 'Inconsistent client onboarding causing delays and missed steps',
      solution: 'Automated workflow with Google Forms, Sheets, and Calendar integration',
      result: 'Onboarding time reduced from 3 days to 4 hours', icon: FiClock, color: 'bg-gold', lightColor: 'bg-gold-pale' },
    { title: 'Social Media Growth', industry: 'Real Estate', challenge: 'No social presence, struggling to generate leads online',
      solution: 'Complete social media strategy with content calendar and automation',
      result: '300% increase in engagement, 50+ qualified leads per month', icon: FiUsers, color: 'bg-navy-700', lightColor: 'bg-navy-900/5' },
  ]

  return (
    <section id="portfolio" className="section-padding bg-cream relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container-max px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-4">Results</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Proven <span className="text-gold-dark">Results</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto mt-6">Real solutions for real business challenges</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.15, duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className={`${study.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <study.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white/80 text-sm font-medium">{study.industry}</p>
                  <h3 className="text-white text-2xl font-bold">{study.title}</h3>
                </div>
              </div>
              <div className="p-8 space-y-5">
                <div><p className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-2">Challenge</p><p className="text-navy-600 text-sm">{study.challenge}</p></div>
                <div><p className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-2">Solution</p><p className="text-navy-600 text-sm">{study.solution}</p></div>
                <div className={`${study.lightColor} rounded-xl p-5 border border-gold/10`}>
                  <p className="text-xs font-bold text-gold-dark uppercase tracking-wider mb-2">Result</p>
                  <p className="text-navy-900 font-bold text-sm">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
