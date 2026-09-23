'use client'

import { motion } from 'framer-motion'

/**
 * Signature decorative motifs for Dandelion Wishes invitations.
 * All use currentColor so a single asset re-skins automatically
 * across themes.
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

export function DriftingSeed({
  color = '#A8B89C',
  size = 80,
  style = {},
  duration = 14,
  delay = 0,
}) {
  return (
    <motion.div
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      animate={{
        y: [0, -14, 0, -8, 0],
        x: [0, 8, -4, 6, 0],
        rotate: [0, 6, -4, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <SeedCluster color={color} size={size} />
    </motion.div>
  )
}

export function BotanicalDivider({
  color = '#A8B89C',
  width = 140,
  className = '',
  center = false,
}) {
  return (
    <svg
      width={width}
      height="20"
      viewBox="0 0 140 20"
      fill="none"
      className={className}
      style={{
        color,
        display: 'block',
        margin: center ? '0 auto' : '0',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="10"
        x2="55"
        y2="10"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
      />

      <line
        x1="85"
        y1="10"
        x2="140"
        y2="10"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.6"
      />

      <g
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        opacity="0.85"
      >
        <path d="M70 4 Q66 10 70 16" />
        <path d="M70 4 Q74 10 70 16" />
        <circle
          cx="70"
          cy="10"
          r="1.4"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </svg>
  )
}

export function StarAccent({
  color = '#D4C4A0',
  size = 14,
  className = '',
  style = {},
}) {
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
   MEMORYBLOOM ICON
   Used by the main Wishes page, MemoryBloom page and WishesNav.
   ============================================================ */

export function BloomIcon({
  color = '#7C8B68',
  size = 28,
  className = '',
  style = {},
  strokeWidth = 1.1,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      style={{
        color,
        pointerEvents: 'none',
        overflow: 'visible',
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M24 43 C24 34 24 28 24 22"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Left leaf */}
      <path
        d="M24 34 C18 34 14 31 13 26 C18 26 22 28 24 32"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right leaf */}
      <path
        d="M24 30 C29 30 34 27 35 22 C30 22 26 24 24 28"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bloom centre */}
      <circle
        cx="24"
        cy="19"
        r="2.2"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Bloom petals */}
      <path
        d="M24 16 C21 13 21 9 24 7 C27 9 27 13 24 16"
        fill="currentColor"
        opacity="0.65"
      />

      <path
        d="M27 18 C29 14 33 13 36 15 C34 18 31 20 27 18"
        fill="currentColor"
        opacity="0.65"
      />

      <path
        d="M27 21 C31 21 34 24 34 27 C30 27 27 25 27 21"
        fill="currentColor"
        opacity="0.55"
      />

      <path
        d="M21 21 C17 21 14 24 14 27 C18 27 21 25 21 21"
        fill="currentColor"
        opacity="0.55"
      />

      <path
        d="M21 18 C19 14 15 13 12 15 C14 18 17 20 21 18"
        fill="currentColor"
        opacity="0.65"
      />

      {/* Small floating seed dots */}
      <circle
        cx="8"
        cy="12"
        r="1"
        fill="currentColor"
        opacity="0.45"
      />

      <circle
        cx="39"
        cy="10"
        r="0.9"
        fill="currentColor"
        opacity="0.4"
      />

      <circle
        cx="40"
        cy="31"
        r="0.8"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  )
}

/* ============================================================
   REAL ILLUSTRATED ASSETS
   ============================================================ */

export function GoldDividerImg({
  width = 220,
  opacity = 0.9,
  className = '',
  center = false,
  style = {},
}) {
  return (
    <img
      src="/images/wishes/decorations/divider-gold.png"
      alt=""
      className={className}
      style={{
        width,
        height: 'auto',
        display: 'block',
        margin: center ? '0 auto' : '0',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function GoldStarImg({
  size = 22,
  style = {},
  opacity = 0.85,
}) {
  return (
    <img
      src="/images/wishes/decorations/star-cluster.png"
      alt=""
      style={{
        width: size,
        height: size,
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function SignatureSeedImg({
  size = 90,
  style = {},
  opacity = 0.9,
}) {
  return (
    <img
      src="/images/wishes/decorations/seed-cluster-1.png"
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function DriftingSignatureSeed({
  size = 90,
  style = {},
  opacity = 0.9,
  duration = 14,
  delay = 0,
}) {
  return (
    <motion.img
      src="/images/wishes/decorations/seed-cluster-1.png"
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
      animate={{
        y: [0, -16, 0, -8, 0],
        x: [0, 8, -4, 6, 0],
        rotate: [0, 5, -3, 4, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

/* ============================================================
   BOTANICAL THEME
   ============================================================ */

export function BotanicalCornerSprig({
  variant = 1,
  size = 130,
  style = {},
  opacity = 0.85,
}) {
  const src =
    variant === 2
      ? '/images/wishes/decorations/botanical/eucalyptus-corner-right.png'
      : '/images/wishes/decorations/botanical/eucalyptus-corner-left.png'

  return (
    <img
      src={src}
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function EucalyptusDividerImg({
  width = 200,
  opacity = 0.9,
  className = '',
  center = false,
  style = {},
}) {
  return (
    <img
      src="/images/wishes/decorations/botanical/eucalyptus-divider.png"
      alt=""
      className={className}
      style={{
        width,
        height: 'auto',
        display: 'block',
        margin: center ? '0 auto' : '0',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function EucalyptusWreathImg({
  size = 220,
  style = {},
  opacity = 0.9,
}) {
  return (
    <img
      src="/images/wishes/decorations/botanical/eucalyptus-wreath.png"
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function EucalyptusArchFrame({
  style = {},
  opacity = 1,
}) {
  return (
    <img
      src="/images/wishes/decorations/botanical/eucalyptus-arch-frame.png"
      alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        position: 'absolute',
        inset: 0,
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function EucalyptusGalleryFrame({
  shape = 'square',
  style = {},
  opacity = 1,
}) {
  const src =
    shape === 'portrait'
      ? '/images/wishes/decorations/botanical/eucalyptus-frame-portrait.png'
      : '/images/wishes/decorations/botanical/eucalyptus-frame-square.png'

  return (
    <img
      src={src}
      alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'fill',
        position: 'absolute',
        inset: 0,
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function EucalyptusQuoteMark({
  size = 40,
  style = {},
  opacity = 0.6,
}) {
  return (
    <img
      src="/images/wishes/decorations/botanical/eucalyptus-quote-mark.png"
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

/* ============================================================
   SCHEDULE ICONS
   ============================================================ */

const SCHEDULE_ICON_FILES = {
  ceremony: 'icon-ceremony.png',
  cocktail: 'icon-cocktail.png',
  reception: 'icon-reception.png',
  cake: 'icon-cake.png',
  party: 'icon-party.png',
  shuttle: 'icon-shuttle.png',
  dressCode: 'icon-dress-code.png',
  gift: 'icon-gift.png',
}

export const SCHEDULE_ICON_KEYS = Object.keys(SCHEDULE_ICON_FILES)

export function ScheduleIcon({
  icon,
  pack = 'botanical',
  size = 22,
  style = {},
  opacity = 0.9,
}) {
  const file = SCHEDULE_ICON_FILES[icon]

  if (!file) return null

  return (
    <img
      src={`/images/wishes/decorations/${pack}/${file}`}
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        flexShrink: 0,
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

/* ============================================================
   COASTAL THEME
   ============================================================ */

export function CoastalCornerShell({
  size = 130,
  style = {},
  opacity = 0.9,
}) {
  return (
    <img
      src="/images/wishes/decorations/coastal/corner-shell.png"
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function CoastalSeaglassImg({
  size = 90,
  style = {},
  opacity = 0.85,
}) {
  return (
    <img
      src="/images/wishes/decorations/coastal/seaglass-accent.png"
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function CoastalDividerImg({
  width = 180,
  opacity = 0.9,
  className = '',
  center = false,
  style = {},
}) {
  return (
    <img
      src="/images/wishes/decorations/coastal/divider-coastal.png"
      alt=""
      className={className}
      style={{
        width,
        height: 'auto',
        display: 'block',
        margin: center ? '0 auto' : '0',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function CoastalQuoteMark({
  size = 28,
  style = {},
  opacity = 0.6,
}) {
  return (
    <img
      src="/images/wishes/decorations/coastal/quote-mark.png"
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function CoastalGalleryFrame({
  shape = 'square',
  style = {},
  opacity = 1,
}) {
  const src =
    shape === 'portrait'
      ? '/images/wishes/decorations/coastal/optional/frame-gallery-portrait.png'
      : '/images/wishes/decorations/coastal/optional/frame-gallery-square.png'

  return (
    <img
      src={src}
      alt=""
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'fill',
        position: 'absolute',
        inset: 0,
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function DriftingCoastalAccent({
  variant = 'shell',
  size = 70,
  style = {},
  opacity = 0.5,
  duration = 15,
  delay = 0,
}) {
  const src =
    variant === 'seaglass'
      ? '/images/wishes/decorations/coastal/seaglass-accent.png'
      : '/images/wishes/decorations/coastal/corner-shell.png'

  return (
    <motion.img
      src={src}
      alt=""
      style={{
        position: 'absolute',
        objectFit: 'contain',
        opacity,
        pointerEvents: 'none',
        ...style,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -14, 0, -8, 0],
        x: [0, 8, -4, 6, 0],
        rotate: [0, 5, -3, 4, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function DriftingEucalyptusAccent({
  size = 90,
  style = {},
  opacity = 0.5,
  duration = 15,
  delay = 0,
}) {
  return (
    <motion.img
      src="/images/wishes/decorations/botanical/eucalyptus-leaf-sprig.png"
      alt=""
      style={{
        position: 'absolute',
        objectFit: 'contain',
        opacity,
        pointerEvents: 'none',
        ...style,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -12, 0, -6, 0],
        x: [0, 6, -4, 5, 0],
        rotate: [0, 4, -3, 3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

/* ============================================================
   ENVELOPE / PHOTO FRAMES
   ============================================================ */

export function EnvelopeSprigImg({
  size = 60,
  style = {},
  opacity = 1,
}) {
  return (
    <img
      src="/images/wishes/decorations/envelope-sprig.png"
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        position: 'absolute',
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function PhotoFrame({
  variant = 1,
  className = '',
  style = {},
}) {
  return (
    <img
      src={`/images/wishes/decorations/photo-frame-${variant}.png`}
      alt=""
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}