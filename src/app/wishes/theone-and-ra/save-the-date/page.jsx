'use client'

import { useEffect, useState } from 'react'

const serifFont = "var(--font-cormorant), serif"
const scriptFont = "var(--font-alex-brush), cursive"

const ink = '#2C3A36'
const blush = '#D9AA95'
const bg = '#FDF9F6'

const ASSET_PATH = '/images/wishes/clients/theone-and-ra/save-the-date'
// Your exported background (photo + torn edge + cream panel, no text).
// Save the file Claude sent you as card-bg.png at this path.
const CARD_BG = `${ASSET_PATH}/card-bg.png`

// The card opens on the English title screen. Tapping "see more" fades
// the title screen out completely, THEN fades the detail screen in —
// sequential, not a crossfade, so the two never overlap on screen.
const TITLE_FADE_MS = 700
const DETAIL_FADE_MS = 900

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

// Every position below is measured in percent of the 1200x900 card
// artwork (so it lines up with card-bg.png exactly, whatever size the
// card is actually rendered at). top/left/right are all % of the card.
function Pos({ top, left, right, width, textAlign = 'left', children, style = {} }) {
  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: left != null ? `${left}%` : undefined,
        right: right != null ? `${right}%` : undefined,
        width: width != null ? `${width}%` : undefined,
        textAlign,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function GoldLine({ top, right, width }) {
  return <Pos top={top} right={right} width={width}><div style={{ height: 1, background: '#D4C4A0' }} /></Pos>
}

function DateLabel({ top = 9.3 }) {
  return (
    <Pos top={top} right={4.5} textAlign="right">
      <p style={{ fontFamily: serifFont, fontSize: '2.6cqw', letterSpacing: '0.05em', color: ink, opacity: 0.85, margin: 0 }}>
        21.11.2027
      </p>
    </Pos>
  )
}

function Names({ top = 86.3 }) {
  return (
    <Pos top={top} right={4.5} textAlign="right">
      <p className="uppercase" style={{ fontFamily: serifFont, fontSize: '1.8cqw', letterSpacing: '0.08em', color: ink, opacity: 0.85, margin: 0 }}>
        THEONÉ &amp; RA
      </p>
    </Pos>
  )
}

// Screen 1 — the title card guests see first: Save / the / Date, all in
// the cursive script, drawn right across the torn seam the way your
// mockup does it, with a prompt that moves on to the detail screen.
function TitleScreen({ onSeeMore, fadingOut }) {
  return (
    <>
      <DateLabel />
      <GoldLine top={18.8} right={4.5} width={15} />

      <Pos top={25} left={43}>
        <p style={{ fontFamily: scriptFont, fontSize: '8.5cqw', color: ink, margin: 0, lineHeight: 1 }}>Save</p>
      </Pos>
      <Pos top={40} left={41}>
        <p style={{ fontFamily: scriptFont, fontSize: '6.5cqw', color: ink, margin: 0, lineHeight: 1 }}>the</p>
      </Pos>
      <Pos top={57} left={43}>
        <p style={{ fontFamily: scriptFont, fontSize: '8.5cqw', color: ink, margin: 0, lineHeight: 1 }}>Date</p>
      </Pos>

      <GoldLine top={81} right={4.5} width={27} />
      <Names />

      <Pos top={92.5} left={0} width={100} textAlign="center">
        <button
          onClick={onSeeMore}
          disabled={fadingOut}
          className="uppercase animate-pulse"
          style={{
            fontFamily: serifFont,
            fontSize: '1.3cqw',
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
// countdown, and the note that the full invite follows.
function DetailScreen({ countdown }) {
  return (
    <>
      <DateLabel />
      <GoldLine top={18.8} right={4.5} width={15} />

      <Pos top={23} left={57} width={36}>
        <p style={{ fontFamily: serifFont, fontSize: '3.6cqw', fontVariant: 'small-caps', letterSpacing: '0.03em', color: ink, margin: 0 }}>
          Ons gaan trou!
        </p>
      </Pos>

      <Pos top={31} left={57} width={34}>
        <p style={{ fontFamily: serifFont, fontSize: '1.8cqw', color: ink, opacity: 0.85, margin: 0, lineHeight: 1.3 }}>
          En ons hoop jy sal hierdie besondere dag saam met ons vier.
        </p>
      </Pos>

      {countdown && (
        <Pos top={50} left={57} width={37}>
          <div className="flex gap-6">
            {[['d', 'dae'], ['h', 'ure'], ['m', 'min']].map(([key, label]) => (
              <div key={key}>
                <p style={{ fontFamily: serifFont, fontSize: '3cqw', color: ink, margin: 0 }}>{countdown[key]}</p>
                <p className="uppercase" style={{ fontFamily: serifFont, fontSize: '1.1cqw', letterSpacing: '0.08em', color: ink, opacity: 0.6, margin: 0 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Pos>
      )}

      <Pos top={69} left={57} width={37}>
        <p className="italic" style={{ fontFamily: serifFont, fontSize: '1.5cqw', color: ink, opacity: 0.7, margin: 0, lineHeight: 1.3 }}>
          Die volledige uitnodiging met al die besonderhede volg binnekort.
        </p>
      </Pos>

      <GoldLine top={81.5} right={4.5} width={27} />
      <Names top={86.3} />
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
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 py-10" style={{ background: bg }}>
      <div
        className="relative w-full overflow-hidden"
        style={{
          containerType: 'inline-size',
          // Capped by width (94vw) AND by height (82vh, converted to the
          // equivalent width for a 4:3 box) — without the height term, a
          // tall narrow phone screen only ever hits the width cap and the
          // card stays small, leaving the empty cream gap above and below
          // you saw in the screenshot.
          width: 'min(94vw, 109.3vh, 1000px)',
          aspectRatio: '4 / 3',
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