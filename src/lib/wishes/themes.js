// src/lib/wishes/themes.js
//
// Four named theme presets matching the style options on the intake form.
// A theme controls colors, fonts, and decorative flags — it does NOT
// contain couple-specific content. Swap a theme and every invitation
// re-skins instantly; swap the content and the same theme serves a
// completely different couple.

export const themes = {
  'romantic-soft': {
    label: 'Romantic & Soft',
    colors: {
      bg: '#FAF6F0',
      bgAlt: 'rgba(255,255,255,0.6)',
      ink: '#5C4A3A',
      muted: '#3A3A3A',
      accent: '#7C8B68',
      accentDark: '#5C6B4E',
      soft: '#A8B89C',
      warm: '#8B7355',
      highlight: '#E8C4C4',
      cardBorder: '#E5DED2',
      gradientDark: 'linear-gradient(160deg,#8B7355,#5C4A3A)',
    },
    scriptFont: "'Alex Brush', cursive",
    serifFont: "'Cormorant Garamond', serif",
    seedOpacity: 0.35,
    showDriftingSeeds: true,
    showBotanicalAccents: false,
  },
  'botanical': {
    label: 'Botanical',
    colors: {
      bg: '#F4F6F1',
      bgAlt: 'rgba(255,255,255,0.65)',
      ink: '#3E4A38',
      muted: '#3A3A3A',
      accent: '#5F7355',
      accentDark: '#465A3D',
      soft: '#9AB08C',
      warm: '#6B7A5E',
      highlight: '#C9D9BC',
      cardBorder: '#DCE6D4',
      gradientDark: 'linear-gradient(160deg,#5F7355,#3E4A38)',
    },
    scriptFont: "'Alex Brush', cursive",
    serifFont: "'Cormorant Garamond', serif",
    seedOpacity: 0.3,
    showDriftingSeeds: true,
    showBotanicalAccents: true,
  },
  'timeless-classic': {
    label: 'Timeless & Classic',
    colors: {
      bg: '#FBF9F3',
      bgAlt: 'rgba(255,255,255,0.7)',
      ink: '#3A362E',
      muted: '#3A3A3A',
      accent: '#8B7355',
      accentDark: '#6B5940',
      soft: '#D4C4A0',
      warm: '#5C4A3A',
      highlight: '#EDE0C4',
      cardBorder: '#E8DFC9',
      gradientDark: 'linear-gradient(160deg,#8B7355,#3A362E)',
    },
    scriptFont: "'Alex Brush', cursive",
    serifFont: "'Cormorant Garamond', serif",
    seedOpacity: 0.22,
    showDriftingSeeds: false,
    showBotanicalAccents: false,
  },
  'modern-minimal': {
    label: 'Modern & Minimal',
    colors: {
      bg: '#FAFAF8',
      bgAlt: 'rgba(255,255,255,0.8)',
      ink: '#2A2A2A',
      muted: '#3A3A3A',
      accent: '#2A2A2A',
      accentDark: '#000000',
      soft: '#B8B8B0',
      warm: '#4A4A4A',
      highlight: '#E5E5E0',
      cardBorder: '#E0E0DA',
      gradientDark: 'linear-gradient(160deg,#3A3A3A,#1A1A1A)',
    },
    scriptFont: "'Cormorant Garamond', serif",
    serifFont: "'Cormorant Garamond', serif",
    seedOpacity: 0,
    showDriftingSeeds: false,
    showBotanicalAccents: false,
  },
}

export function getTheme(key) {
  return themes[key] || themes['romantic-soft']
}
