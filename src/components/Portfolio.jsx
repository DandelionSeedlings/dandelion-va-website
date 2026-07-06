'use client'

import { motion } from 'framer-motion'
import { FiTrendingUp, FiClock, FiUsers, FiCode, FiShoppingCart, FiZap, FiShield, FiArrowRight } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export default function Portfolio() {
  const caseStudies = [
    { title: 'Invoice Automation System', industry: 'Professional Services', challenge: 'Manual invoicing taking 10+ hours weekly, missed payments, no tracking',
      solution: 'Built Invoice Sorter Pro — custom Google Apps Script with PDF generation, email sending, and payment tracking',
      result: '95% time saved, 100% payment tracking, R0 missed invoices', icon: FiTrendingUp, color: 'bg-navy-900', lightColor: 'bg-navy-900/5' },
    { title: 'CRM + Pipeline Tracker', industry: 'Real Estate', challenge: 'Leads falling through cracks, no follow-up system, scattered client data',
      solution: 'Developed Scalability CRM Pro with automated pipelines, relationship metrics, and growth dashboards',
      result: '3x conversion rate, 50% faster deal closures, complete visibility', icon: FiUsers, color: 'bg-gold', lightColor: 'bg-gold-pale' },
    { title: 'Receipt AI Extraction', industry: 'Small Business', challenge: 'Shoebox full of receipts, hours of manual data entry for bookkeeping',
      solution: 'Created ReceiptSnap — AI-powered OCR that reads receipt photos and exports clean CSV files',
      result: 'From 3 hours to 3 minutes per month, bookkeeper-ready exports', icon: FiZap, color: 'bg-navy-700', lightColor: 'bg-navy-900/5' },
    { title: 'Inventory + Supplier Hub', industry: 'Retail', challenge: 'Stockouts costing sales, no supplier coordination, manual reordering',
      solution: 'Built Availability Stock & Supplier Pro with automated alerts and reorder workflows',
      result: 'Zero stockouts in 6 months, 40% reduction in excess inventory', icon: FiShield, color: 'bg-emerald-600', lightColor: 'bg-emerald-50' },
  ]

  const stats = [
    { value: '500+', label: 'Hours Automated', sub: 'Saved for clients' },
    { value: '12', label: 'Products Built', sub: 'AbilitySuite™ tools' },
    { value: '50+', label: 'Happy Clients', sub: 'Across South Africa' },
    { value: '100%', label: 'Custom Code', sub: 'Google Apps Script' },
  ]

  return (
    <section id="portfolio" className="section-padding bg-cream relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container-max px-6 relative z-10">

        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-4">My Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Built With <span className="text-gold-dark">Google Apps Script</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto mt-6">
            Every solution is hand-coded in Google Apps Script. No third-party subscriptions. 
            No monthly fees. Just pure automation that works inside your Google Workspace.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gold/10">
              <p className="text-3xl
                            <p className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-navy-900">{stat.label}</p>
              <p className="text-xs text-navy-500">{stat.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1, duration: 0.6 }} viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-gold/30">
              <div className={`${study.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-medium uppercase tracking-wider">{study.industry}</p>
                    <h3 className="text-white text-xl font-bold">{study.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-navy-600 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-400 uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-navy-600 text-sm">{study.solution}</p>
                </div>
                <div className={`${study.lightColor} rounded-xl p-4 border border-gold/10`}>
                  <p className="text-xs font-bold text-gold-dark uppercase tracking-wider mb-1">Result</p>
                  <p className="text-navy-900 font-bold text-sm">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Apps Script CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiCode className="text-gold text-3xl" />
            <h3 className="text-2xl md:text-3xl font-serif text-white">
              Custom Google Apps Script
            </h3>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Need something specific? I build custom automation tailored to your exact workflow. 
            From simple scripts to full systems — all running inside your Google Workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
            >
              <FiShoppingCart /> Browse Ready-Made Products
            </a>
            <a
              href="https://wa.me/27728393087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              <FiArrowRight /> Request Custom Script Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}