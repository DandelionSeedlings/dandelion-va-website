'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiShoppingCart } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbyUAtVX_pKihPq2iBqb_bq4ctso-v8z52YHHlSX3TflJaz_DlaMsTq8FUSoCw7hmQqPNw/exec'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-navy-900/5 rounded-full blur-3xl"></div>
      <div className="container-max px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            Who Is <span className="text-gold-dark">Dandelion</span> Creations?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto mt-6">
            A one-woman powerhouse combining virtual assistance expertise with technical automation mastery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-navy-900/10 rounded-[2rem] rotate-2"></div>
              <div className="relative bg-cream rounded-2xl p-8 shadow-xl border border-gold/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
                    <span className="text-navy-900 font-serif font-bold text-2xl">ST</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Simone Theron</h3>
                    <p className="text-gold-dark text-sm">Founder & Lead Developer</p>
                  </div>
                </div>
                <p className="text-navy-600 leading-relaxed mb-4">
                  I started Dandelion Creations to solve a problem I saw every day: brilliant business owners 
                  drowning in admin work instead of growing their companies.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  With a background in operations management and a passion for Google Apps Script automation, 
                  I build systems that save hundreds of hours annually. My AbilitySuite™ products are trusted 
                  by South African businesses who value efficiency and precision.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            {[
              { title: 'Virtual Assistant Excellence', desc: '5+ years managing calendars, emails, travel, and client communications for executives and entrepreneurs.' },
              { title: 'Technical Automation', desc: 'Custom Google Apps Script solutions that transform spreadsheets into powerful business applications.' },
              { title: 'AbilitySuite™ Products', desc: '12 ready-made Google Sheets templates for CRM, invoicing, inventory, content planning, and more.' },
              { title: 'South African Focus', desc: 'Built specifically for SA businesses — FNB integration, SARS-compliant reports, local pricing (ZAR).' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiCheckCircle className="w-4 h-4 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">{item.title}</h4>
                  <p className="text-navy-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
            >
              <FiShoppingCart /> Explore AbilitySuite™ Products
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}