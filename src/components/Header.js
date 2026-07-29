'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const diagnosticLines = [
  { text: 'Scanning business operations...', color: 'text-gray-400' },
  { text: 'Manual admin detected: ~4 hrs/week', color: 'text-amber-400' },
  { text: 'Missed follow-ups detected', color: 'text-amber-400' },
  { text: 'Root cause identified', color: 'text-emerald-400' },
  { text: 'Structure is the strategy.', color: 'text-white font-bold' },
]

export default function Header() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#070f1d]"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/header-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/70 via-transparent to-[#0a1628]/40" />

      {/* Content Box */}
      <div className="absolute inset-x-0 top-28 sm:top-32 lg:top-36 bottom-0 z-10">
        <div className="h-full flex flex-col justify-end">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24 lg:pb-[100px]">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
              
              {/* Left: Hero Text */}
              <div className="max-w-[650px]">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="mb-4 text-[11px] md:text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase"
                >
                  Digital Solutions That Scale
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.8, ease: 'easeOut' }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
                >
                  Building Business Systems That{' '}
                  <span className="text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    Actually Make Sense.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10 max-w-xl"
                >
                  From custom software and automation to websites, AI solutions, and
                  digital strategy, Dandelion Creations helps businesses simplify
                  operations, improve efficiency, and grow with confidence.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05, duration: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#b8941f] px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-bold text-[#0a1628] shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]"
                  >
                    Get Started
                    <FiArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>

                  <a
                    href="#portfolio"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/5"
                  >
                    <FiPlay size={14} className="text-[#D4AF37] md:w-4 md:h-4" />
                    View Our Work
                  </a>
                </motion.div>
              </div>

              {/* Right: Terminal Card (Desktop Only) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.9 }}
                className="hidden lg:block relative mb-2"
              >
                {/* Glow behind */}
                <div className="absolute -inset-3 bg-gradient-to-r from-[#D4AF37]/15 via-emerald-500/5 to-transparent rounded-3xl blur-2xl opacity-70" />
                
                <div className="relative bg-[#0c1e36]/90 backdrop-blur-md rounded-2xl border border-[#D4AF37]/20 shadow-2xl shadow-black/50 overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0a1628]/60">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono ml-2">diagnostic.sh</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] text-emerald-500/80 font-mono">LIVE</span>
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-5 font-mono text-[11px] md:text-xs leading-loose space-y-2">
                    {diagnosticLines.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                        className="flex items-start gap-2.5"
                      >
                        <span className="text-[#D4AF37] flex-shrink-0 select-none font-bold">{'>'}</span>
                        <span className={line.color}>{line.text}</span>
                      </motion.div>
                    ))}
                    
                    {/* Blinking cursor */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                      className="flex items-center gap-2.5"
                    >
                      <span className="text-[#D4AF37] select-none font-bold">{'>'}</span>
                      <span className="w-1.5 h-4 bg-[#D4AF37] animate-pulse rounded-sm" />
                    </motion.div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-5 -left-6 bg-[#0a1628] border border-[#D4AF37]/25 rounded-xl px-4 py-2.5 shadow-2xl shadow-black/40"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-xs text-gray-200 font-medium">No subscriptions</span>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}