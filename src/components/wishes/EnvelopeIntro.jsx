'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Full-screen envelope intro. Shows the real illustrated envelope artwork
 * (envelope + wax seal + florals, all baked into one image). Since it's a
 * single flattened illustration rather than separate layers, we can't do a
 * physical "flap flips open" animation — instead, tapping it scales the
 * envelope up slightly and fades everything out, revealing the invitation
 * beneath.
 *
 * If a version with the flap already open/pulled back is ever supplied,
 * this can be upgraded to crossfade closed -> open before the reveal.
 */
export default function EnvelopeIntro({ coupleNames = 'Emma & James', onOpen, theme }) {
  const c = theme?.colors || { bg: '#F3ECE3', warm: '#8B7355', soft: '#A8B89C' }
  const [phase, setPhase] = useState('closed') // closed -> opening -> gone

  const handleOpen = () => {
    if (phase !== 'closed') return
    setPhase('opening')
    setTimeout(() => {
      setPhase('gone')
      if (onOpen) onOpen()
    }, 800)
  }

  return (
    <AnimatePresence>
      {phase !== 'gone' && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center overflow-hidden px-6"
          style={{
            background: `radial-gradient(circle at center, rgba(255,255,255,0.45), ${c.bg} 55%, ${c.bg} 100%)`,
            pointerEvents: phase === 'opening' ? 'none' : 'auto',
            boxShadow: 'inset 0 0 80px rgba(139,115,85,0.08)',
            zIndex: 90,
          }}
          exit={{ opacity: 0 }}
          animate={{ opacity: phase === 'opening' ? 0 : 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <motion.button
            onClick={handleOpen}
            aria-label={`Open ${coupleNames}'s invitation`}
            className="cursor-pointer"
            style={{
              background: 'radial-gradient(circle at 50% 25%, rgba(255,255,255,0.58), rgba(255,255,255,0.12) 42%, rgba(255,255,255,0) 70%)',
              border: '1px solid rgba(139,115,85,0.08)',
              borderRadius: 28,
              boxShadow: '0 16px 32px rgba(88, 68, 50, 0.08)',
              padding: 'clamp(12px, 2vw, 18px)',
              maxWidth: 630,
              width: '100%',
            }}
            animate={{ scale: phase === 'opening' ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/images/wishes/decorations/hero-envelope.png"
              alt=""
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 22,
                filter: 'drop-shadow(0 18px 36px rgba(0,0,0,0.12))',
              }}
            />
            <motion.p
              animate={{ opacity: phase === 'opening' ? 0 : [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: phase === 'opening' ? 0 : Infinity }}
              className="text-center mt-6"
              style={{ fontSize: 12, letterSpacing: 2, color: c.warm || '#8B7355', textTransform: 'uppercase' }}
            >
              Tap to open
            </motion.p>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
