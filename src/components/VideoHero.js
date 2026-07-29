'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

// Replace with your own HLS .m3u8 stream URL
const HLS_URL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'

export default function VideoHero() {
  const videoRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hlsInstance = null

    const init = async () => {
      // Safari has native HLS support
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = HLS_URL
        setIsReady(true)
        return
      }

      // Other browsers need hls.js
      try {
        const mod = await import('hls.js')
        const Hls = mod.default
        if (Hls.isSupported()) {
          hlsInstance = new Hls({ maxBufferLength: 30, maxMaxBufferLength: 60 })
          hlsInstance.loadSource(HLS_URL)
          hlsInstance.attachMedia(video)
          hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => setIsReady(true))
        }
      } catch (err) {
        console.warn('hls.js not installed. Run: npm install hls.js')
        setIsReady(true) // show poster fallback
      }
    }

    init()

    return () => {
      if (hlsInstance) hlsInstance.destroy()
    }
  }, [])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#070f1d]">
      {/* HLS Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bottom-left hero content */}
      <div className="absolute inset-0 flex items-end pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-24 md:pb-32 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2.5 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-500/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              SYSTEM STATUS: OPERATIONAL
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Business systems
              <br />
              that actually
              <br />
              <span className="text-[#D4AF37] drop-shadow-[0_0_40px_rgba(212,175,55,0.25)]">
                make sense.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed mb-10 max-w-xl">
              We diagnose the root cause of business chaos and engineer it out,
              permanently, inside the Google Workspace you already use. No
              subscriptions. No bloated platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/25"
              >
                Get Your Business Diagnosed
                <FiArrowRight />
              </a>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/15 hover:border-[#D4AF37]/40 hover:bg-white/[0.03] backdrop-blur-sm"
              >
                <FiPlay className="text-[#D4AF37]" />
                See The Systems
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}