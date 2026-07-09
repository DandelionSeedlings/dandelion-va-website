'use client'

import { motion } from 'framer-motion'
import { FiZap, FiCode, FiSmartphone, FiFileText, FiTrendingUp, FiShield, FiArrowRight } from 'react-icons/fi'

export default function Services() {
  const services = [
    { title: 'Operations Engineering', description: 'Custom automation solutions built specifically for your workflow. This is what we do best.', icon: FiCode,
      items: ['Spreadsheet Automation', 'Custom Form Solutions', 'Email Automation', 'Data Processing Scripts', 'PDF Generation', 'API Integrations'],
      color: 'bg-gold', lightColor: 'bg-gold-pale', textColor: 'text-gold-dark', featured: true },
    { title: 'Embedded Operations', description: 'End-to-end administrative support that keeps your business running smoothly.', icon: FiZap,
      items: ['Email & Calendar Management', 'Data Entry & Research', 'Travel & Event Coordination', 'Client Communication'],
      color: 'bg-navy-900', lightColor: 'bg-navy-900/5', textColor: 'text-navy-900', featured: false },
    { title: 'Social Media', description: 'Strategic social media management that grows your online presence.', icon: FiSmartphone,
      items: ['Content Creation', 'Schedule Management', 'Analytics Reporting', 'Community Engagement'],
      color: 'bg-navy-700', lightColor: 'bg-navy-900/5', textColor: 'text-navy-700', featured: false },
    { title: 'Admin Support', description: 'Professional administrative services tailored to your needs.', icon: FiFileText,
      items: ['Document Preparation', 'Meeting Coordination', 'CRM Management', 'Invoice Processing'],
      color: 'bg-gold', lightColor: 'bg-gold-pale', textColor: 'text-gold-dark', featured: false },
    { title: 'Digital Marketing', description: 'Results-driven marketing strategies that convert visitors to clients.', icon: FiTrendingUp,
      items: ['SEO Optimization', 'Email Campaigns', 'Lead Generation', 'Analytics Setup'],
      color: 'bg-navy-900', lightColor: 'bg-navy-900/5', textColor: 'text-navy-900', featured: false },
    { title: 'Data Security', description: 'Enterprise-grade security practices to protect your business data.', icon: FiShield,
      items: ['Secure Data Handling', 'Backup Solutions', 'Access Control', 'Compliance Support'],
      color: 'bg-gold', lightColor: 'bg-gold-pale', textColor: 'text-gold-dark', featured: false },
  ]

  return (
    <section id="services" className="section-padding bg-cream relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container-max px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Services That <span className="text-gold-dark">Scale</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto mt-6">
            From custom Google Apps Script automation to daily operations — we build systems that grow with you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1, duration: 0.6 }} viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border ${
                service.featured 
                  ? 'border-gold/50 ring-2 ring-gold/20' 
                  : 'border-transparent hover:border-gold/30'
              }`}>
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy-900 px-4 py-1 rounded-full text-xs font-bold z-10 shadow-md">
                  WHAT WE DO BEST
                </div>
              )}
              <div className={`w-16 h-16 ${service.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.textColor}`} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-dark transition-colors">{service.title}</h3>
              <p className="text-navy-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-navy-500">
                    <div className={`w-2 h-2 ${service.color} rounded-full`}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* AbilitySuite CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Prefer Ready-Made Solutions?
          </h3>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            Explore the AbilitySuite™ ecosystem — 14 engineered systems that automate invoicing, 
            CRM, inventory, content planning, and more. Starting from FREE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              View All Systems
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
            >
              <FiArrowRight /> Book a Systems Audit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}