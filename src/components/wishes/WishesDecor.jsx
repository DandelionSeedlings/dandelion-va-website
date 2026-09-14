'use client'

import { motion } from 'framer-motion'

/**
 * Signature decorative motifs for Dandelion Wishes invitations. All use
 * `currentColor` so a single asset re-skins automatically across all four
 * themes just by setting the CSS `color` on a wrapping element — no need
 * for separate colored asset files per theme.
 *
 * Usage: <SeedCluster color={theme.colors.soft} size={60} />
 */

export function SeedCluster({ color = '#A8B89C', size = 60, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      style={{ color, pointerEvents: 'none', ...style }}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.8">
        <line x1="30" y1="30" x2="8" y2="12" />
        <line x1="30" y1="30" x2="48" y2="6" />
        <line x1="30" y1="30" x2="4" y2="30" />
        <line x1="30" y1="30" x2="52" y2="26" />
        <line x1="30" y1="30" x2="12" y2="50" />
        <line x1="30" y1="30" x2="42" y2="52" />
        <line x1="30" y1="30" x2="26" y2="6" />
      </g>
      <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.9" />
      <circle cx="8" cy="12" r="1.6" fill="currentColor" opacity="0.6" />
      <circle cx="48" cy="6" r="1.4" fill="currentColor" opacity="0.5" />
      <circle cx="4" cy="30" r="1.3" fill="currentColor" opacity="0.6" />
      <circle cx="52" cy="26" r="1.4" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="50" r="1.3" fill="currentColor" opacity="0.6" />
      <circle cx="42" cy="52" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="26" cy="6" r="1.2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function DriftingSeed({ color = '#A8B89C', size = 80, style = {}, duration = 14, delay = 0 }) {
  return (
    <motion.div
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      animate={{ y: [0, -14, 0, -8, 0], x: [0, 8, -4, 6, 0], rotate: [0, 6, -4, 5, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <SeedCluster color={color} size={size} />
    </motion.div>
  )
}

export function BotanicalDivider({ color = '#A8B89C', width = 140, className = '', center = false }) {
  return (
    <svg
      width={width}
      height="20"
      viewBox="0 0 140 20"
      fill="none"
      className={className}
      style={{ color, display: 'block', margin: center ? '0 auto' : '0', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <line x1="0" y1="10" x2="55" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <line x1="85" y1="10" x2="140" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      {/* tiny leaf sprig in the center */}
      <g stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.85">
        <path d="M70 4 Q66 10 70 16" />
        <path d="M70 4 Q74 10 70 16" />
        <circle cx="70" cy="10" r="1.4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

export function StarAccent({ color = '#D4C4A0', size = 14, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color, pointerEvents: 'none', ...style }}
      aria-hidden="true"
    >
      <path
        d="M12 2 L13.8 9.5 L21 12 L13.8 14.5 L12 22 L10.2 14.5 L3 12 L10.2 9.5 Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  )
}

/* ============================================================
   REAL ILLUSTRATED ASSETS (from the Dandelion Wishes decoration
   pack). Gold + the signature blush/gold seed cluster are used
   UNIVERSALLY across all four themes — gold is the established
   cross-brand accent. The green corner sprigs/leaf branch are
   BOTANICAL-THEME-ONLY, since their fixed green tone would clash
   with Modern Minimal or Timeless Classic.
   ============================================================ */

export function GoldDividerImg({ width = 220, opacity = 0.9, className = '', center = false, style = {} }) {
  return (
    <img
      src="/images/wishes/decorations/divider-gold.png"
      alt=""
      className={className}
      style={{ width, height: 'auto', display: 'block', margin: center ? '0 auto' : '0', opacity, pointerEvents: 'none', ...style }}
    />
  )
}

export function GoldStarImg({ size = 22, style = {}, opacity = 0.85 }) {
  return (
    <img
      src="/images/wishes/decorations/star-cluster.png"
      alt=""
      style={{ width: size, height: size, position: 'absolute', opacity, pointerEvents: 'none', ...style }}
    />
  )
}

export function SignatureSeedImg({ size = 90, style = {}, opacity = 0.9 }) {
  return (
    <img
      src="/images/wishes/decorations/seed-cluster-1.png"
      alt=""
      style={{ width: size, height: size, objectFit: 'contain', position: 'absolute', opacity, pointerEvents: 'none', ...style }}
    />
  )
}

export function DriftingSignatureSeed({ size = 90, style = {}, opacity = 0.9, duration = 14, delay = 0 }) {
  return (
    <motion.img
      src="/images/wishes/decorations/seed-cluster-1.png"
      alt=""
      style={{ width: size, height: size, objectFit: 'contain', position: 'absolute', opacity, pointerEvents: 'none', ...style }}
      animate={{ y: [0, -16, 0, -8, 0], x: [0, 8, -4, 6, 0], rotate: [0, 5, -3, 4, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// Botanical-theme-only corner accent — pass a numbered variant (1 or 2)
export function BotanicalCornerSprig({ variant = 1, size = 130, style = {}, opacity = 0.85 }) {
  return (
    <img
      src={`/images/wishes/decorations/corner-sprig-${variant}.png`}
      alt=""
      style={{ width: size, height: size, objectFit: 'contain', position: 'absolute', opacity, pointerEvents: 'none', ...style }}
    />
  )
}

// Botanical-theme-only tiny sprig, used tucked beside the envelope wax seal
export function EnvelopeSprigImg({ size = 60, style = {}, opacity = 1 }) {
  return (
    <img
      src="/images/wishes/decorations/envelope-sprig.png"
      alt=""
      style={{ width: size, height: size, objectFit: 'contain', position: 'absolute', opacity, pointerEvents: 'none', ...style }}
    />
  )
}

// Botanical-theme-only Polaroid-style photo frame overlay — variant 1-4
export function PhotoFrame({ variant = 1, className = '', style = {} }) {
  return (
    <img
      src={`/images/wishes/decorations/photo-frame-${variant}.png`}
      alt=""
      className={className}
      style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', inset: 0, pointerEvents: 'none', ...style }}
    />
  )
}
