'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiShoppingCart, FiCode } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export default function Hero() {
  // Generate 12 seed positions
  const seeds = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${8 + (i * 7.5) % 85}%`,
    top: `${10 + (i * 13) % 75}%`,
    size: 3 + (i % 4) * 1.5,
    delay: i * 0.8,
    duration: 12 + (i % 5) * 4,
    opacity: 0.15 + (i % 3) * 0.1
  }))

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream via-gold-pale/30 to-cream pt-24 overflow-hidden">
      {/* Floating Dandelion Seeds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {seeds.map((seed) => (
          <div
            key={seed.id}
            className="absolute rounded-full"
            style={{
              left: seed.left,
              top: seed.top,
              width: `${seed.size}px`,
              height: `${seed.size}px`,
              background: `radial-gradient(circle, rgba(201,162,39,${seed.opacity}) 0%, rgba(201,162,39,${seed.opacity * 0.3}) 40%, transparent 70%)`,
              animation: `float-seed ${seed.duration}s ease-in-out ${seed.delay}s infinite`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
        {/* A few with tiny "parachute" lines */}
        {seeds.slice(0, 5).map((seed) => (
          <div
            key={`line-${seed.id}`}
            className="absolute"
            style={{
              left: `calc(${seed.left} + ${seed.size / 2}px)`,
              top: `calc(${seed.top} + ${seed.size / 2}px)`,
              width: '1px',
              height: `${seed.size * 3}px`,
              background: `linear-gradient(to bottom, rgba(201,162,39,${seed.opacity * 0.4}), transparent)`,
              transform: `rotate(${(seed.id * 37) % 60 - 30}deg)`,
              transformOrigin: 'top center',
              animation: `float-seed ${seed.duration}s ease-in-out ${seed.delay}s infinite`,
              opacity: seed.opacity
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-seed {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(15px, -20px) rotate(5deg);
          }
          50% {
            transform: translate(-10px, -35px) rotate(-3deg);
          }
          75% {
            transform: translate(20px, -15px) rotate(8deg);
          }
        }
      `}</style>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-navy-900/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rounded-full"></div>

      <div className="container-max px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>

            {/* Tagline */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-gold/20 text-navy-900 px-5 py-2.5 rounded-full text-sm font-bold mb-4 border border-gold/30">
              <FiCheckCircle className="w-4 h-4 text-gold-dark" />
              Planting the abilities your business needs to grow
            </motion.div>

            {/* Google Apps Script Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 bg-navy-900 text-gold px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-gold/30">
              <FiCode className="w-4 h-4" />
              Google Apps Script Developer
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-900 leading-tight mb-6">
              Stop Wasting{' '}
              <span className="text-gold-dark">20+ Hours</span>{' '}
              Per Week on Manual{' '}
              <span className="font-script text-navy-700">Admin Work</span>
            </h1>

            <p className="text-xl text-navy-600 mb-10 max-w-lg leading-relaxed">
              Every hour you spend copying, pasting, and chasing spreadsheets is an hour you could be growing your business. 
              We build custom Google Workspace systems that eliminate the busywork — so you can focus on what actually makes money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={ORDER_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-navy inline-flex items-center justify-center gap-2 text-lg">
                <FiShoppingCart className="w-5 h-5" />
                Order Products
                <FiArrowRight className="w-5 h-5" />
              </a>
              <a href="https://dandelioncreations.co.za/get-connectability" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center justify-center gap-2 text-lg border-emerald-500 text-emerald-600 hover:bg-emerald-50">
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