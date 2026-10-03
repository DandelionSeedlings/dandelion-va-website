'use client'

import { useEffect, useState } from 'react'

// La Luxes Serif / La Luxes Script aren't on Google Fonts — they're a
// paid font pack, so next/font/google can't pull them in the way
// Cormorant/Alex Brush are loaded in layout.jsx. These variables name
// them directly with the old fonts as a fallback, so nothing breaks
// before the real files are wired up: once you send the .otf/.ttf
// files, they get registered via next/font/local in layout.jsx under
// these same family names and this page needs no further changes.
const serifFont = "'La Luxes Serif', var(--font-cormorant), serif"
const scriptFont = "'La Luxes Script', var(--font-alex-brush), cursive"

const ink = '#2C3A36'
const blush = '#D9AA95'
const bg = '#FDF9F6'
// The cream panel baked into card-bg-mobile.png is this exact color
// (sampled directly from the file) — a noticeably warmer, deeper tone
// than the page's own off-white #FDF9F6. The scrim behind "Save" was
// fading to #FDF9F6 instead, which is why there was a visibly lighter
// band right under the tear before the real (darker) cream panel
// started — two different creams stacked on top of each other.
const cardCream = '#E8E0D8'

const ASSET_PATH = '/images/wishes/clients/theone-and-ra/save-the-date'
// Screen 1 (title) — photo on top, torn horizontal edge, cream panel
// below, no text.
const CARD_BG = `${ASSET_PATH}/card-bg-mobile.png`
// Screen 2 (detail) — the plain, full-bleed photo (no tear, no cream
// panel baked in — still saved as card-bg.png from earlier), washed
// under a cream veil so the full card height is free for text instead
// of being squeezed into the strip below the tear.
const DETAIL_BG = `${ASSET_PATH}/card-bg.png`

// The card opens on the English title screen. Tapping "see more" fades
// the title screen out completely, THEN fades the detail screen in —
// sequential, not a crossfade, so the two never overlap on screen.
// Slower + ease-in-out than before so the dissolve reads as deliberate
// rather than an abrupt cut.
const TITLE_FADE_MS = 1400
const DETAIL_FADE_MS = 1700

// The graded cream scrim (added where the card is built) does the
// real contrast work for text crossing the tear. This just adds a
// small amount of extra crispness on top of it.
const crossoverGlow = { textShadow: '0 1px 8px rgba(232,224,216,0.7)' }

function useCountdown(isoString) {
  const [time, setTime] = useState(null)

  useEffect(() => {
    const target = new Date(isoString)
    if (Number.isNaN(target.getTime())) return

    const tick = () => {
      const diff = Math.max(0, target - new Date())
      setTime({
        d: Math.floor(diff / 86400000),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      })
    }

    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [isoString])

  return time
}

// Every position below is measured in percent of the 1080x1920 card
// artwork (so it lines up with card-bg.png exactly, whatever size the
// card is actually rendered at). top/left/right are all % of the card.
// The new artwork is a vertical stack — photo on top with a horizontal
// torn edge, cream panel below — so everything here is centered text,
// stacked top-to-bottom, rather than the old left/right columns.
function Pos({ top, left = 0, width = 100, textAlign = 'center', children, style = {} }) {
  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}%`,
        textAlign,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// A bare hairline reads as a placeholder. A tiny diamond flanked by
// two short strokes is the small ornamental touch actual wedding
// stationery uses in its place.
function GoldLine({ top, width = 18 }) {
  return (
    <Pos top={top} left={(100 - width) / 2} width={width}>
      <div className="flex items-center justify-center gap-[0.6cqw]">
        <div style={{ height: 1, flex: 1, background: 'linear-gradient(to left, #C9A66B, transparent)' }} />
        <div style={{ width: '1.1cqw', height: '1.1cqw', background: '#C9A66B', transform: 'rotate(45deg)', flexShrink: 0 }} />
        <div style={{ height: 1, flex: 1, background: 'linear-gradient(to right, #C9A66B, transparent)' }} />
      </div>
    </Pos>
  )
}

function DateLabel({ top = 65.5, crossover = false }) {
  return (
    <Pos top={top}>
      <p
        style={{
          fontFamily: serifFont,
          fontSize: '4.4cqw',
          letterSpacing: '0.08em',
          color: ink,
          opacity: 0.9,
          margin: 0,
          ...(crossover ? crossoverGlow : {}),
        }}
      >
        21.11.2027
      </p>
    </Pos>
  )
}

function Names({ top = 95.8 }) {
  return (
    <Pos top={top}>
      <p style={{ fontFamily: scriptFont, fontSize: '5.4cqw', color: ink, opacity: 0.9, margin: 0, lineHeight: 1 }}>
        Theoné &amp; Ra
      </p>
    </Pos>
  )
}

// Screen 1 — the title card guests see first: just the big "SAVE the
// DATE" wordmark, the couple's names, and a prompt that moves on to
// the detail screen. No date here — that's saved for screen 2.
function TitleScreen({ onSeeMore, fadingOut }) {
  return (
    <>
      {/* "Save" sits right across the torn edge — the tear falls
          between about 55% and 62% down the card, so this line
          straddles it on purpose, the way your reference shows it. */}
      <Pos top={53.5}>
        <p
          className="uppercase"
          style={{ fontFamily: serifFont, fontWeight: 500, fontSize: '15cqw', letterSpacing: '0.1em', color: ink, margin: 0, lineHeight: 1, ...crossoverGlow }}
        >
          Save
        </p>
      </Pos>

      <Pos top={62}>
        <p style={{ fontFamily: scriptFont, fontSize: '10cqw', color: ink, margin: 0, lineHeight: 1, ...crossoverGlow }}>
          the
        </p>
      </Pos>

      <Pos top={68.5}>
        <p
          className="uppercase"
          style={{ fontFamily: serifFont, fontWeight: 500, fontSize: '15cqw', letterSpacing: '0.1em', color: ink, margin: 0, lineHeight: 1 }}
        >
          Date
        </p>
      </Pos>

      <GoldLine top={78} width={22} />
      <Names top={80.5} />

      <Pos top={88}>
        <button
          onClick={onSeeMore}
          disabled={fadingOut}
          className="uppercase group"
          style={{
            fontFamily: serifFont,
            fontSize: '2cqw',
            letterSpacing: '0.16em',
            color: ink,
            opacity: 0.7,
            background: 'none',
            border: '1px solid rgba(44,58,54,0.3)',
            borderRadius: '999px',
            padding: '0.9cqw 3.4cqw',
            cursor: fadingOut ? 'default' : 'pointer',
            transition: 'opacity 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.borderColor = 'rgba(44,58,54,0.6)' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.borderColor = 'rgba(44,58,54,0.3)' }}
        >
          See more ⌄
        </button>
      </Pos>
    </>
  )
}

// Screen 2 — the detail card it dissolves into. This one now has the
// whole card to work with (full-bleed washed photo behind it, no
// tear/cream strip to squeeze into), so everything gets room to
// breathe instead of stacking tight at the bottom.
function DetailScreen({ countdown }) {
  return (
    <>
      <DateLabel top={13} />
      <GoldLine top={19.5} width={16} />

      <Pos top={23}>
        <p style={{ fontFamily: serifFont, fontSize: '9.6cqw', fontVariant: 'small-caps', letterSpacing: '0.03em', color: ink, margin: 0 }}>
          Ons gaan trou!
        </p>
      </Pos>

      <Pos top={32.5} left={8} width={84}>
        <p style={{ fontFamily: serifFont, fontSize: '5cqw', color: ink, opacity: 0.9, margin: 0, lineHeight: 1.45 }}>
          En ons hoop jy sal hierdie besondere dag saam met ons vier.
        </p>
      </Pos>

      {countdown && (
        <Pos top={49}>
          <div className="flex items-stretch justify-center">
            {[['d', 'dae'], ['h', 'ure'], ['m', 'min']].map(([key, label], i) => (
              <div key={key} className="flex items-center">
                {i > 0 && <div style={{ width: 1, height: '9.5cqw', background: 'rgba(44,58,54,0.18)', margin: '0 3.8cqw' }} />}
                <div className="text-center" style={{ minWidth: '16cqw' }}>
                  <p style={{ fontFamily: serifFont, fontSize: '9.5cqw', color: ink, margin: 0, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                    {countdown[key]}
                  </p>
                  <p className="uppercase" style={{ fontFamily: serifFont, fontSize: '2.1cqw', letterSpacing: '0.18em', color: ink, opacity: 0.6, margin: 0, marginTop: '0.8cqw' }}>
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Pos>
      )}

      <Pos top={64} left={7} width={86}>
        <p className="italic" style={{ fontFamily: serifFont, fontSize: '3.8cqw', color: ink, opacity: 0.75, margin: 0, lineHeight: 1.45 }}>
          Die volledige uitnodiging met al die besonderhede volg binnekort.
        </p>
      </Pos>

      <GoldLine top={89} width={22} />
      <Names top={91.5} />
    </>
  )
}

export default function TheoneAndRaSaveTheDate() {
  // 'title' -> 'fadingOut' (title fading to 0) -> 'detail' (title gone,
  // detail now fading in). Sequential, so the two text layers never
  // overlap on screen the way a crossfade would.
  const [stage, setStage] = useState('title')
  const [musicOpen, setMusicOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // A soft rise-and-fade on first paint, instead of the card just
  // appearing — the one entrance animation guests actually see.
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])
  const countdown = useCountdown('2027-11-21T15:00:00')
  const spotifyEmbedUrl = 'https://open.spotify.com/embed/track/4t6qMeHgbxWod2SLokiSQp'

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handleSeeMore = () => {
    if (stage !== 'title') return
    if (prefersReducedMotion()) {
      setStage('detail')
      return
    }
    setStage('fadingOut')
    setTimeout(() => setStage('detail'), TITLE_FADE_MS)
  }

  const titleVisible = stage === 'title' || stage === 'fadingOut'
  const detailVisible = stage === 'detail'

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 py-6" style={{ background: bg }}>
      <div
        className="relative overflow-hidden"
        style={{
          containerType: 'inline-size',
          // The artwork is now portrait (1080x1920, ~9:16) — close to an
          // actual phone screen's own proportions, so simply capping the
          // width (with a sensible max for desktop/tablet previews) fills
          // the screen properly without the old landscape card's empty
          // top/bottom margins.
          width: 'min(94vw, 486px)',
          aspectRatio: '1080 / 1920',
          borderRadius: 2,
          boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset, 0 40px 70px -25px rgba(44,58,54,0.4), 0 10px 25px -10px rgba(44,58,54,0.25)',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 900ms ease, transform 900ms ease',
        }}
      >
        {/* Screen 1's artwork — photo, torn edge, and cream panel, no
            text. Stays under everything; screen 2's background below
            fades in on top of it and fully covers it once visible. */}
        <img src={CARD_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />

        {/* A graded cream scrim across the tear — the ink-colored text
            crossing it needs a LIGHTER patch of photo to read against,
            not a darker one, so this fades in from transparent and
            brightens going down into the cream panel. This is what
            makes "Save" readable whether it's sitting on sky, water,
            or cream. Only relevant to screen 1, so it fades out with
            the title screen's own text. */}
        <div
          className="absolute left-0 w-full pointer-events-none"
          style={{
            top: '42%',
            height: '24%',
            background: 'linear-gradient(to bottom, rgba(232,224,216,0) 0%, rgba(232,224,216,0.55) 75%, rgba(232,224,216,0.92) 100%)',
            opacity: titleVisible && stage !== 'fadingOut' ? 1 : 0,
            transition: `opacity ${TITLE_FADE_MS}ms ease`,
          }}
        />

        {/* Screen 2's background: the plain photo, full-bleed, washed
            under a cream veil so the ink text reads cleanly across the
            WHOLE card rather than only the strip below the tear. Fades
            in in sync with the detail text below. */}
        <div
          className="absolute inset-0"
          style={{
            opacity: detailVisible ? 1 : 0,
            transition: `opacity ${DETAIL_FADE_MS}ms ease`,
          }}
        >
          <img src={DETAIL_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(232,224,216,0.78)' }} />
        </div>

        {/* Title screen: visible until "see more" is tapped, then fades
            fully to 0 before the detail screen starts fading in. */}
        <div
          className="absolute inset-0"
          style={{
            opacity: titleVisible && stage !== 'fadingOut' ? 1 : 0,
            transition: `opacity ${TITLE_FADE_MS}ms ease`,
            pointerEvents: stage === 'title' ? 'auto' : 'none',
          }}
        >
          <TitleScreen onSeeMore={handleSeeMore} fadingOut={stage === 'fadingOut'} />
        </div>

        {/* Detail screen: starts at opacity 0, only fades in once the
            title screen has finished fading out. */}
        <div
          className="absolute inset-0"
          style={{
            opacity: detailVisible ? 1 : 0,
            transition: `opacity ${DETAIL_FADE_MS}ms ease`,
            // Invisible doesn't mean non-interactive — without this, this
            // layer (it comes after the title layer in the markup, so it
            // sits on top) swallows clicks meant for the title screen's
            // button underneath it, even while opacity is 0.
            pointerEvents: detailVisible ? 'auto' : 'none',
          }}
        >
          <DetailScreen countdown={countdown} />
        </div>
      </div>

      {/* Floating record-player music button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {musicOpen && (
          <div className="mb-3 rounded-xl overflow-hidden shadow-2xl" style={{ width: 300 }}>
            <iframe
              title="Our song"
              src={`${spotifyEmbedUrl}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        )}
        <button
          onClick={() => setMusicOpen((v) => !v)}
          aria-label={musicOpen ? 'Hide music player' : 'Play our song'}
          className="w-14 h-14 rounded-full relative shadow-lg"
          style={{
            background: 'repeating-radial-gradient(circle at center, #232323 0px, #232323 2px, #3a3a3a 2px, #3a3a3a 4px)',
            animation: musicOpen ? 'spin 2.5s linear infinite' : 'none',
          }}
        >
          <span
            className="absolute rounded-full"
            style={{
              width: 16,
              height: 16,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              background: blush,
              border: '2px solid #1a1a1a',
            }}
          />
        </button>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}