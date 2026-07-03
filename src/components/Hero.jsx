'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiShoppingCart, FiCode } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbyUAtVX_pKihPq2iBqb_bq4ctso-v8z52YHHlSX3TflJaz_DlaMsTq8FUSoCw7hmQqPNw/exec'

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

            {/* Google Apps Script Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-navy-900 text-gold px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-gold/30">
              <FiCode className="w-4 h-4" />
              Google Apps Script Developer
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gold/20 text-navy-900 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-gold/30">
              <FiCheckCircle className="w-4 h-4 text-gold-dark" />
              BCEA-Exempt Independent Contractor
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy-900 leading-tight mb-6">
              Automate Your{' '}
              <span className="text-gold-dark">Business</span>{' '}
              <span className="font-script text-navy-700">With Code</span>
            </h1>

            <p className="text-xl text-navy-600 mb-10 max-w-lg leading-relaxed">
              Custom Google Apps Script automation that runs inside your Google Workspace. 
              From spreadsheets to full systems — no subscriptions, no monthly fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={ORDER_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-navy inline-flex items-center justify-center gap-2 text-lg">
                <FiShoppingCart className="w-5 h-5" />
                Order Products
                <FiArrowRight className="w-5 h-5" />
              </a>
              <a href="https://dandelion-va.vercel.app/get-connectability" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center justify-center gap-2 text-lg border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                <FiCheckCircle className="w-5 h-5" />
                Try Connectability Free
              </a>
            </div>

            <div className="flex gap-10">
              {[{v:'500+',l:'Hours Automated'},{v:'12',l:'Products Built'},{v:'100%',l:'Custom Code'}].map((s,i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i*0.15 }}>
                  <p className="text-3xl font-bold text-gold-dark">{s.v}</p>
                  <p className="text-sm text-navy-500">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats/Results Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-navy-900/10 rounded-[2.5rem] rotate-1"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-navy-900/10 to-gold/15 rounded-[2.5rem] -rotate-1"></div>

              {/* Stats Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gold/10 p-8">
                <div className="text-center mb-8">
                  <p className="text-navy-900 font-bold text-lg mb-1">Trusted by South African Businesses</p>
                  <div className="w-16 h-0.5 bg-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.8 }}
                    className="bg-navy-900 rounded-xl p-5 text-center">
                    <p className="text-3xl font-bold text-gold">500+</p>
                    <p className="text-sm text-cream/70 mt-1">Hours Automated</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 1.0 }}
                    className="bg-gold-pale rounded-xl p-5 text-center border border-gold/20">
                    <p className="text-3xl font-bold text-navy-900">12</p>
                    <p className="text-sm text-navy-600 mt-1">Products Available</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 1.2 }}
                    className="bg-gold-pale rounded-xl p-5 text-center border border-gold/20">
                    <p className="text-3xl font-bold text-navy-900">50+</p>
                    <p className="text-sm text-navy-600 mt-1">Happy Clients</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 1.4 }}
                    className="bg-navy-900 rounded-xl p-5 text-center">
                    <p className="text-3xl font-bold text-gold">24h</p>
                    <p className="text-sm text-cream/70 mt-1">Response Time</p>
                  </motion.div>
                </div>

                <div className="mt-6 pt-6 border-t border-gold/10">
                  <div className="flex items-center justify-center gap-2 text-sm text-navy-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Currently accepting new clients</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div className="absolute -bottom-4 -right-4 bg-navy-900 p-4 rounded-xl shadow-xl border border-gold/30"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <p className="font-bold text-gold">AbilitySuite™</p>
                <p className="text-xs text-cream/70">12 Business Tools</p>
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