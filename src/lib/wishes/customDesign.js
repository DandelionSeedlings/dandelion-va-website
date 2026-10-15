// src/lib/wishes/customDesign.js
//
// "Design your own": a couple picks three colours and two fonts and the invitation
// re-skins itself. Everything is checked here, so only real hex colours and fonts
// from our list ever reach the page.

export const HEADING_FONTS = [
  { key: 'Cormorant Garamond', label: 'Cormorant (default)' },
  { key: 'Playfair Display', label: 'Playfair Display' },
  { key: 'Lora', label: 'Lora' },
  { key: 'Libre Baskerville', label: 'Libre Baskerville' },
  { key: 'DM Serif Display', label: 'DM Serif Display' },
  { key: 'Cinzel', label: 'Cinzel' },
  { key: 'Josefin Sans', label: 'Josefin Sans (clean, modern)' },
]
export const SCRIPT_FONTS = [
  { key: 'Alex Brush', label: 'Alex Brush (default)' },
  { key: 'Great Vibes', label: 'Great Vibes' },
  { key: 'Dancing Script', label: 'Dancing Script' },
  { key: 'Pinyon Script', label: 'Pinyon Script' },
  { key: 'Parisienne', label: 'Parisienne' },
  { key: 'Sacramento', label: 'Sacramento' },
  { key: 'Playfair Display', label: 'Playfair Display (no script)' },
]

const hex = (v) => (/^#[0-9a-fA-F]{6}$/.test(String(v || '')) ? String(v).toLowerCase() : '')
const inList = (list, v) => (list.some((f) => f.key === v) ? v : '')

export function sanitizeDesign(input) {
  if (!input || input.on !== true) return null
  const bg = hex(input.bg), ink = hex(input.ink), accent = hex(input.accent)
  if (!bg || !ink || !accent) return null
  return {
    bg, ink, accent,
    headingFont: inList(HEADING_FONTS, input.headingFont) || 'Cormorant Garamond',
    scriptFont: inList(SCRIPT_FONTS, input.scriptFont) || 'Alex Brush',
  }
}

const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16))
const toHex = (a) => '#' + a.map((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0')).join('')
const mix = (a, b, t) => { const x = rgb(a), y = rgb(b); return toHex(x.map((n, i) => n * (1 - t) + y[i] * t)) }

export function applyDesign(theme, design) {
  if (!design) return theme
  const { bg, ink, accent } = design
  return {
    ...theme,
    colors: {
      ...theme.colors,
      bg,
      bgAlt: mix(bg, ink, 0.05),
      ink,
      muted: ink,
      accent,
      accentDark: mix(accent, '#000000', 0.25),
      soft: mix(accent, bg, 0.5),
      warm: mix(accent, ink, 0.4),
      highlight: mix(accent, bg, 0.75),
      cardBorder: mix(ink, bg, 0.85),
      gradientDark: `linear-gradient(160deg, ${accent}, ${ink})`,
    },
    serifFont: `'${design.headingFont}', serif`,
    scriptFont: `'${design.scriptFont}', cursive`,
  }
}

export function fontsHref(design) {
  if (!design) return ''
  const fams = [...new Set([design.headingFont, design.scriptFont])]
  return 'https://fonts.googleapis.com/css2?' + fams.map((f) => `family=${f.replace(/ /g, '+')}`).join('&') + '&display=swap'
}
