'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'

const diagnosticLines = [
  { text: '> Scanning business operations...', color: 'text-gray-400', pause: 400 },
  { text: '> Manual admin detected: ~4 hrs/week', color: 'text-gold', pause: 500 },
  { text: '> Duplicate data entry detected', color: 'text-gold', pause: 500 },
  { text: '> Missed follow-ups detected', color: 'text-gold', pause: 500 },
  { text: '> Root cause identified', color: 'text-signal-green', pause: 600 },
  { text: '> Structure is the strategy.', color: 'text-white font-bold', pause: 0 },
]

function DiagnosticTerminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [displayedLines, setDisplayedLines] = useState([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started) setStarted(true)
  }, [isInView, started])

  useEffect(() => {
    if (!started) return
    if (lineIndex >= diagnosticLines.length) return

    const current = diagnosticLines[lineIndex]

    if (charIndex < current.text.length) {
      const t = setTimeout(() => {
        setCharIndex((c) => c + 1)
      }, 22)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setDisplayedLines((lines) => [...lines, current])
        setLineIndex((i) => i + 1)
        setCharIndex(0)
      }, current.pause)
      return () => clearTimeout(t)
    }
  }, [started, charIndex, lineIndex])

  const currentPartial = lineIndex < diagnosticLines.length
    ? diagnosticLines[lineIndex].text.slice(0, charIndex)
    : null

  return (
    <div ref={ref} className="bg-navy-800/80 border border-gold/20 rounded-2xl p-6 font-mono text-sm md:text-base shadow-2xl shadow-black/40 backdrop-blur-sm max-w-xl mx-auto lg:mx-0">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-signal-green/70" />
        <span className="text-gray-500 text-xs ml-2">diagnostic.sh</span>
      </div>
      <div className="min-h-[180px] space-y-2">
        {displayedLines.map((line, i) => (
          <div key={i} className={line.color}>{line.text}</div>
        ))}
        {currentPartial !== null && (
          <div className={diagnosticLines[lineIndex].color}>
            {currentPartial}
            <span className="inline-block w-2 h-4 bg-gold ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function TerminalHero() {
  return (
    <section className="relative bg-navy-900 pt-40 pb-24 px-4 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-signal-green/10 text-signal-green px-4 py-1.5 rounded-full text-xs font-mono mb-6 border border-signal-green/20">
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
            SYSTEM STATUS: DIAGNOSING
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Business systems<br />
            that actually <span className="text-gold">make sense.</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            We diagnose the root cause of business chaos and engineer it out, permanently,
            inside the Google Workspace you already use. No subscriptions. No bloated platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://wa.me/27728393087"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-navy-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 flex items-center gap-2"
            >
              <FaWhatsapp /> Get Your Business Diagnosed
            </a>
            <a
              href="#flagship-systems"
              className="text-white/70 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 border border-white/20 hover:border-white/40"
            >
              See The Systems <FaArrowRight />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <DiagnosticTerminal />
        </motion.div>
      </div>
    </section>
  )
}