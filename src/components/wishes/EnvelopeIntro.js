'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Full-screen envelope intro. Sits in front of the real invitation until the
 * guest taps/clicks it, then plays a seal-crack + flap-open + fade sequence
 * before revealing the page underneath.
 *
 * Uses the DW Lettermark as the wax seal — this is exactly the "secondary
 * mark" use case called out in the brand guidelines (wax-seal-style stamps),
 * now actually animated rather than static.
 */
export default function EnvelopeIntro({ coupleNames = 'Emma & James', onOpen }) {
  const [phase, setPhase] = useState('closed') // closed -> opening -> gone

  const handleOpen = () => {
    if (phase !== 'closed') return
    setPhase('opening')
    // total sequence ~1.6s, then unmount and let the real page take over
    setTimeout(() => {
      setPhase('gone')
      if (onOpen) onOpen()
    }, 1600)
  }

  return (
    <AnimatePresence>
      {phase !== 'gone' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: '#F3ECE3' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {/* soft ambient blobs behind the envelope */}
          <div
            className="absolute rounded-full"
            style={{ width: 380, height: 380, background: '#E8C4C4', top: -80, left: -80, filter: 'blur(60px)', opacity: 0.4 }}
          />
          <div
            className="absolute rounded-full"
            style={{ width: 300, height: 300, background: '#D4C4A0', bottom: -80, right: -80, filter: 'blur(60px)', opacity: 0.4 }}
          />

          <button
            onClick={handleOpen}
            aria-label="Open invitation"
            className="relative z-10 cursor-pointer"
            style={{ width: 300, height: 210, background: 'none', border: 'none', padding: 0 }}
          >
            {/* envelope back */}
            <div
              className="absolute inset-0 rounded-md"
              style={{ background: '#FAF6F0', border: '1px solid #E5DED2', boxShadow: '0 25px 50px -15px rgba(139,115,85,0.35)' }}
            />

            {/* bottom flap (static triangle) */}
            <div
              className="absolute left-0 right-0 bottom-0"
              style={{
                height: 0,
                borderLeft: '150px solid transparent',
                borderRight: '150px solid transparent',
                borderBottom: '105px solid #F0E5DA',
              }}
            />

            {/* names peeking out */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: phase === 'closed' ? 1 : 0 }}
              className="absolute w-full text-center"
              style={{ top: 130, fontFamily: "'Alex Brush', cursive", color: '#8B7355', fontSize: 22 }}
            >
              {coupleNames}
            </motion.p>

            {/* top flap — animates open */}
            <motion.div
              className="absolute left-0 right-0 top-0"
              style={{
                height: 0,
                borderLeft: '150px solid transparent',
                borderRight: '150px solid transparent',
                borderTop: '105px solid #F0E5DA',
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
              }}
              animate={phase === 'opening' ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.7, ease: [0.6, 0.05, 0.2, 1] }}
            />

            {/* wax seal — DW lettermark, cracks and fades as it opens */}
            <motion.div
              className="absolute left-1/2 top-[68px] -translate-x-1/2 rounded-full flex items-center justify-center"
              style={{
                width: 60,
                height: 60,
                background: '#fff',
                boxShadow: '0 8px 20px -6px rgba(139,115,85,0.4)',
              }}
              animate={
                phase === 'opening'
                  ? { scale: [1, 1.15, 0], rotate: [0, -8, 15], opacity: [1, 1, 0] }
                  : { scale: 1, rotate: 0, opacity: 1 }
              }
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <img
                src="/images/wishes/lettermark.png"
                alt=""
                style={{ width: 42, height: 42, objectFit: 'contain' }}
              />
            </motion.div>

            {/* tap prompt */}
            <motion.p
              animate={{ opacity: phase === 'closed' ? [0.5, 1, 0.5] : 0 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-full text-center"
              style={{ bottom: -34, fontSize: 12, letterSpacing: 2, color: '#A8B89C', textTransform: 'uppercase' }}
            >
              Tap to open
            </motion.p>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}