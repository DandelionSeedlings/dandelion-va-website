'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const diagnosticLines = [
  { text: 'Scanning business operations...', color: 'text-gray-400' },
  { text: 'Manual admin detected: ~4 hrs/week', color: 'text-amber-400' },
  { text: 'Duplicate data entry detected', color: 'text-amber-400' },
  { text: 'Missed follow-ups detected', color: 'text-amber-400' },
  { text: 'Root cause identified', color: 'text-emerald-400' },
  { text: 'Structure is the strategy.', color: 'text-white font-bold' },
]

const heroSeeds = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${2 + (i * 8) % 96}%`,
  top: `${5 + (i * 11) % 90}%`,
  size: 16 + (i % 5) * 12,
  delay: i * 0.6,
  duration: 14 + (i % 6) * 5,
  opacity: 0.04 + (i % 3) * 0.03,
}))

export default function TerminalHero() {
  return (
    <section className="relative min-h-screen bg-[#0a1628] pt-32 pb-20 px-4 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3a] via-[#0a1628] to-[#070f1d]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#D4AF37]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-32 w-72 h-72 bg-[#D4AF37]/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-20 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {heroSeeds.map((seed) => (
          <div
            key={seed.id}
            className="absolute"
            style={{
              left: seed.left,
              top: seed.top,
              width: `${seed.size}px`,
              height: `${seed.size}px`,
              opacity: seed.opacity,
              animation: `hero-float-seed ${seed.duration}s ease-in-out ${seed.delay}s infinite`,
            }}
          >
            <img
              src="/images/dandelion-seed.png"
              alt=""
              className="w-full h-full"
              style={{ filter: 'brightness(0) invert(1)' }}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes hero-float-seed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -16px) rotate(5deg); }
          50% { transform: translate(-6px, -24px) rotate(-3deg); }
          75% { transform: translate(12px, -10px) rotate(4deg); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-emerald-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SYSTEM STATUS: DIAGNOSING
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-8 tracking-tight">
              Business systems<br />
              that actually<br />
              <span className="text-[#D4AF37] drop-shadow-[0_0_35px_rgba(212,175,55,0.25)] font-script text-6xl md:text-7xl lg:text-8xl">
                make sense.
              </span>
            </h1>

            <p className="text-lg text-gray-300/90 leading-relaxed mb-10 max-w-xl">
              We diagnose the root cause of business chaos and engineer it out, permanently, 
              inside the Google Workspace you already use. No subscriptions. No bloated platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/25"
              >
                Get Your Business Diagnosed
                <FiArrowRight />
              </a>
              <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/15 hover:border-[#D4AF37]/40 hover:bg-white/[0.03]"
              >
                <FiPlay className="text-[#D4AF37]" />
                See The Systems
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-emerald-500/5 to-[#D4AF37]/10 rounded-3xl blur-2xl opacity-80" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-2xl blur-xl opacity-60" />
            
            <div className="relative bg-[#0c1e36] rounded-2xl border border-[#D4AF37]/20 shadow-2xl shadow-black/50 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] bg-[#0a1628]/80">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-gray-500 font-mono ml-2">diagnostic.sh</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-emerald-500/80 font-mono">LIVE</span>
                </div>
              </div>

              <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-loose space-y-3">
                {diagnosticLines.map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] flex-shrink-0 select-none font-bold">{'>'}</span>
                    <span className={line.color}>{line.text}</span>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="flex items-center gap-3">
                  <span className="text-[#D4AF37] select-none font-bold">{'>'}</span>
                  <span className="w-2 h-5 bg-[#D4AF37] animate-pulse rounded-sm" />
                </motion.div>
              </div>

              <div className="px-5 py-2.5 bg-[#0a1628]/60 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-mono">dandelion-creations-os v3.0.0</span>
                <span className="text-[10px] text-emerald-500/70 font-mono">● ready</span>
              </div>
            </div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-[#0a1628] border border-[#D4AF37]/25 rounded-xl px-5 py-3 shadow-2xl shadow-black/40"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-sm text-gray-200 font-medium">No subscriptions detected</span>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-[#0a1628] border border-[#D4AF37]/20 rounded-lg px-4 py-2.5 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] text-xs font-bold">R0</span>
                <span className="text-gray-400 text-xs">/month</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}