'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiShoppingCart, FiCode } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    const streaks = []

    function resize() {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      return { width: rect.width, height: rect.height }
    }

    function initStreaks(cw, ch) {
      streaks.length = 0
      const count = Math.max(6, Math.floor(cw / 180))
      for (let i = 0; i < count; i++) {
        streaks.push({
          x: Math.random() * cw,
          y: 60 + Math.random() * (ch - 120),
          length: 150 + Math.random() * 350,
          speed: 0.3 + Math.random() * 0.6,
          opacity: 0.06 + Math.random() * 0.1,
          width: 1 + Math.random() * 2
        })
      }
    }

    function draw() {
      const rect = canvas.getBoundingClientRect()
      const cw = rect.width
      const ch = rect.height

      ctx.clearRect(0, 0, cw, ch)

      streaks.forEach(s => {
        const grad = ctx.createLinearGradient(s.x - s.length, s.y, s.x + s.length, s.y)
        grad.addColorStop(0, 'rgba(201,162,39,0)')
        grad.addColorStop(0.3, `rgba(201,162,39,${s.opacity * 0.5})`)
        grad.addColorStop(0.5, `rgba(232,213,163,${s.opacity})`)
        grad.addColorStop(0.7, `rgba(201,162,39,${s.opacity * 0.5})`)
        grad.addColorStop(1, 'rgba(201,162,39,0)')

        ctx.fillStyle = grad
        ctx.fillRect(s.x - s.length, s.y - s.width / 2, s.length * 2, s.width)

        s.x += s.speed
        if (s.x > cw + s.length) {
          s.x = -s.length
          s.y = 60 + Math.random() * (ch - 120)
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    // Delay to ensure canvas has layout
    const timeoutId = setTimeout(() => {
      const { width, height } = resize()
      initStreaks(width, height)
      draw()
    }, 100)

    const handleResize = () => {
      const { width, height } = resize()
      initStreaks(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 pt-24 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-transparent to-navy-900/95 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-navy-900/60 pointer-events-none" />

      <div className="container-max px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column — Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 bg-gold/20 text-gold px-5 py-2.5 rounded-full text-sm font-bold mb-4 border border-gold/30"
            >
              <FiCheckCircle className="w-4 h-4" />
              Planting the abilities your business needs to grow
            </motion.div>

            {/* Google Apps Script Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 bg-white/10 text-cream px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-white/20 backdrop-blur-sm"
            >
              <FiCode className="w-4 h-4 text-gold" />
              Google Apps Script Developer
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight mb-6">
              Stop Wasting{' '}
              <span className="text-gold">20+ Hours</span>{' '}
              Per Week on Manual{' '}
              <span className="font-script text-gold-light">Admin Work</span>
            </h1>

            <p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
              Every hour you spend copying, pasting, and chasing spreadsheets is an hour you could be growing your business.
              We build custom Google Workspace systems that eliminate the busywork — so you can focus on what actually makes money.
            </p>

            {/* CTAs — Order form preserved */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href={ORDER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="group inline-flex items-center justify-center gap-2 bg-gold text-navy-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(201,162,39,0.2)] hover:shadow-[0_0_60px_rgba(201,162,39,0.35)]"
              >
                <FiShoppingCart className="w-5 h-5" />
                Order Products
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="https://dandelioncreations.co.za/get-connectability"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="group inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 backdrop-blur-sm"
              >
                <FiCheckCircle className="w-5 h-5" />
                Try Connectability Free
              </motion.a>
            </div>

            {/* Stats Row */}
            <div className="flex gap-10">
              {[
                { v: '500+', l: 'Hours Automated' },
                { v: '12', l: 'Products Built' },
                { v: '100%', l: 'Custom Code' }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.15 }}
                >
                  <p className="text-3xl font-bold text-gold">{s.v}</p>
                  <p className="text-sm text-white/50">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-gold/5 rounded-[2.5rem] rotate-1"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/5 to-gold/15 rounded-[2.5rem] -rotate-1"></div>

              {/* Stats Card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-8">
                <div className="text-center mb-8">
                  <p className="text-cream font-bold text-lg mb-1">Trusted by South African Businesses</p>
                  <div className="w-16 h-0.5 bg-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-navy-800/80 rounded-xl p-5 text-center border border-white/10"
                  >
                    <p className="text-3xl font-bold text-gold">500+</p>
                    <p className="text-sm text-cream/70 mt-1">Hours Automated</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="bg-gold/20 rounded-xl p-5 text-center border border-gold/30"
                  >
                    <p className="text-3xl font-bold text-cream">12</p>
                    <p className="text-sm text-cream/70 mt-1">Products Available</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-gold/20 rounded-xl p-5 text-center border border-gold/30"
                  >
                    <p className="text-3xl font-bold text-cream">50+</p>
                    <p className="text-sm text-cream/70 mt-1">Happy Clients</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="bg-navy-800/80 rounded-xl p-5 text-center border border-white/10"
                  >
                    <p className="text-3xl font-bold text-gold">24h</p>
                    <p className="text-sm text-cream/70 mt-1">Response Time</p>
                  </motion.div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-sm text-cream/70">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span>Currently accepting new clients</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-navy-800 p-4 rounded-xl shadow-xl border border-gold/30 backdrop-blur-md"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="font-bold text-gold">AbilitySuite™</p>
                <p className="text-xs text-cream/70">12 Business Tools</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-7 h-12 border-2 border-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full"></div>
        </div>
      </motion.div>

      {/* Bottom Fade to Cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  )
}