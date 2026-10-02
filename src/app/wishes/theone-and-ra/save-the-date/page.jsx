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

const ASSET_PATH = '/images/wishes/clients/theone-and-ra/save-the-date'
// Your new portrait export — photo on top, torn horizontal edge, cream
// panel below, no text.
const CARD_BG = `${ASSET_PATH}/card-bg-mobile.png`

// The card opens on the English title screen. Tapping "see more" fades
// the title screen out completely, THEN fades the detail screen in —
// sequential, not a crossfade, so the two never overlap on screen.
// Slower + ease-in-out than before so the dissolve reads as deliberate
// rather than an abrupt cut.
const TITLE_FADE_MS = 1400
const DETAIL_FADE_MS = 1700

// Soft halo behind any text that sits across the torn photo edge, so
// it stays readable whether it's over the photo or the cream panel.
const crossoverGlow = { textShadow: '0 0 18px rgba(253,249,246,0.9), 0 0 6px rgba(253,249,246,0.8)' }

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

function GoldLine({ top, width = 18 }) {
  return (
    <Pos top={top} left={(100 - width) / 2} width={width}>
      <div style={{ height: 1, background: '#D4C4A0' }} />
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
      <p className="uppercase" style={{ fontFamily: serifFont, fontSize: '2.2cqw', letterSpacing: '0.1em', color: ink, opacity: 0.85, margin: 0 }}>
        THEONÉ &amp; RA
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

      <GoldLine top={79} width={22} />
      <Names top={81.5} />

      <Pos top={86}>
        <button
          onClick={onSeeMore}
          disabled={fadingOut}
          className="uppercase animate-pulse"
          style={{
            fontFamily: serifFont,
            fontSize: '2cqw',
            letterSpacing: '0.12em',
            color: ink,
            opacity: 0.65,
            background: 'none',
            border: 'none',
            cursor: fadingOut ? 'default' : 'pointer',
          }}
        >
          Click here to see more ↓
        </button>
      </Pos>
    </>
  )
}

// Screen 2 — the detail card it dissolves into: Afrikaans message,
// countdown, and the note that the full invite follows. Same vertical
// stack, just denser since there's more to say.
function DetailScreen({ countdown }) {
  return (
    <>
      {/* The date now crosses the torn edge too, same as "Save" on the
          title screen. */}
      <DateLabel top={55} crossover />
      <GoldLine top={61.5} width={16} />

      <Pos top={64}>
        <p style={{ fontFamily: serifFont, fontSize: '7.4cqw', fontVariant: 'small-caps', letterSpacing: '0.03em', color: ink, margin: 0 }}>
          Ons gaan trou!
        </p>
      </Pos>

      <Pos top={70.5} left={6} width={88}>
        <p style={{ fontFamily: serifFont, fontSize: '3.6cqw', color: ink, opacity: 0.9, margin: 0, lineHeight: 1.3 }}>
          En ons hoop jy sal hierdie besondere dag saam met ons vier.
        </p>
      </Pos>

      {countdown && (
        <Pos top={78.5}>
          <div className="flex gap-8 justify-center">
            {[['d', 'dae'], ['h', 'ure'], ['m', 'min']].map(([key, label]) => (
              <div key={key} className="text-center">
                <p style={{ fontFamily: serifFont, fontSize: '7.5cqw', color: ink, margin: 0, lineHeight: 1 }}>{countdown[key]}</p>
                <p className="uppercase" style={{ fontFamily: serifFont, fontSize: '1.8cqw', letterSpacing: '0.1em', color: ink, opacity: 0.65, margin: 0 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Pos>
      )}

      <Pos top={89} left={5} width={90}>
        <p className="italic" style={{ fontFamily: serifFont, fontSize: '2.8cqw', color: ink, opacity: 0.75, margin: 0, lineHeight: 1.3 }}>
          Die volledige uitnodiging met al die besonderhede volg binnekort.
        </p>
      </Pos>

      <GoldLine top={95} width={22} />
      <Names top={97} />
    </>
  )
}

export default function TheoneAndRaSaveTheDate() {
  // 'title' -> 'fadingOut' (title fading to 0) -> 'detail' (title gone,
  // detail now fading in). Sequential, so the two text layers never
  // overlap on screen the way a crossfade would.
  const [stage, setStage] = useState('title')
  const [musicOpen, setMusicOpen] = useState(false)
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
          boxShadow: '0 30px 60px -30px rgba(44,58,54,0.25)',
        }}
      >
        {/* Your artwork — photo, torn edge, and cream panel, no text */}
        <img src={CARD_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />

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