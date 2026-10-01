'use client'

import { useEffect, useState } from 'react'

const serifFont = "var(--font-cormorant), serif"
const scriptFont = "var(--font-alex-brush), cursive"

const ink = '#2C3A36'
const blush = '#D9AA95'
const gold = '#D4C4A0'
const bg = '#FDF9F6'

const HERO_IMAGE = '/images/wishes/clients/theone-and-ra/hero.jpg'

// The card opens on the English title screen, then dissolves into the
// Afrikaans detail screen — a deliberate mix, not a language toggle.
const DISSOLVE_AFTER_MS = 3200
const DISSOLVE_DURATION_MS = 1200

// Irregular vertical tear, roughly down the middle of the card, so the
// photo looks hand-torn rather than cut with a ruler.
const TORN_EDGE_CLIP =
  'polygon(0% 0%, 47% 0%, 52% 6%, 46% 11%, 53% 17%, 45% 23%, 51% 29%, 44% 35%, 52% 41%, 46% 47%, 53% 53%, 45% 59%, 51% 65%, 44% 71%, 52% 77%, 46% 83%, 53% 89%, 47% 95%, 49% 100%, 0% 100%)'

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

function GoldLine() {
  return <div style={{ height: 1, width: '100%', background: gold }} />
}

function TornPhoto() {
  return (
    <div
      className="relative h-full"
      style={{ clipPath: TORN_EDGE_CLIP, filter: 'drop-shadow(2px 0 4px rgba(0,0,0,0.1))' }}
    >
      <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
    </div>
  )
}

function CardFrame({ children }) {
  return (
    <div className="grid h-full" style={{ gridTemplateColumns: '48% 52%' }}>
      <TornPhoto />
      <div className="h-full flex flex-col justify-between" style={{ padding: '6cqw' }}>
        {children}
      </div>
    </div>
  )
}

// Screen 1 — the title card guests see first (image 23: SAVE / the / DATE).
function TitleScreen() {
  return (
    <CardFrame>
      <div>
        <p
          className="text-right"
          style={{ fontFamily: serifFont, fontSize: '2.4cqw', letterSpacing: '0.05em', color: ink, opacity: 0.85 }}
        >
          21.11.2027
        </p>
        <div className="mt-2">
          <GoldLine />
        </div>
      </div>

      <div style={{ lineHeight: 0.95 }}>
        <p className="uppercase" style={{ fontFamily: serifFont, fontSize: '9cqw', letterSpacing: '0.04em', color: ink }}>
          SAVE
        </p>
        <p style={{ fontFamily: scriptFont, fontSize: '6.5cqw', color: ink, marginLeft: '8%' }}>the</p>
        <p className="uppercase" style={{ fontFamily: serifFont, fontSize: '9cqw', letterSpacing: '0.04em', color: ink }}>
          DATE
        </p>
      </div>

      <div>
        <GoldLine />
        <p
          className="text-right uppercase mt-2"
          style={{ fontFamily: serifFont, fontSize: '1.7cqw', letterSpacing: '0.08em', color: ink, opacity: 0.85 }}
        >
          THEONÉ &amp; RA
        </p>
      </div>
    </CardFrame>
  )
}

// Screen 2 — the detail card it dissolves into (image 25: Afrikaans
// message, countdown, and the note that the full invite follows).
function DetailScreen({ countdown }) {
  return (
    <CardFrame>
      <div>
        <p
          className="text-right"
          style={{ fontFamily: serifFont, fontSize: '2.4cqw', letterSpacing: '0.05em', color: ink, opacity: 0.85 }}
        >
          21.11.2027
        </p>
        <div className="mt-2">
          <GoldLine />
        </div>
      </div>

      <div>
        <p
          style={{
            fontFamily: serifFont,
            fontSize: '4cqw',
            fontVariant: 'small-caps',
            letterSpacing: '0.03em',
            color: ink,
          }}
        >
          Ons gaan trou!
        </p>
        <p className="mt-4" style={{ fontFamily: serifFont, fontSize: '1.7cqw', color: ink, opacity: 0.85, maxWidth: '26ch' }}>
          En ons hoop jy sal hierdie besondere dag saam met ons vier.
        </p>
        {countdown && (
          <div className="flex gap-6 mt-4">
            {[['d', 'dae'], ['h', 'ure'], ['m', 'min']].map(([key, label]) => (
              <div key={key}>
                <p style={{ fontFamily: serifFont, fontSize: '3cqw', color: ink }}>{countdown[key]}</p>
                <p
                  className="uppercase"
                  style={{ fontFamily: serifFont, fontSize: '1.1cqw', letterSpacing: '0.08em', color: ink, opacity: 0.6 }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        )}
        <p className="italic mt-4" style={{ fontFamily: serifFont, fontSize: '1.4cqw', color: ink, opacity: 0.7, maxWidth: '28ch' }}>
          Die volledige uitnodiging met al die besonderhede volg binnekort.
        </p>
      </div>

      <div>
        <GoldLine />
        <p
          className="text-right uppercase mt-2"
          style={{ fontFamily: serifFont, fontSize: '1.7cqw', letterSpacing: '0.08em', color: ink, opacity: 0.85 }}
        >
          THEONÉ &amp; RA
        </p>
      </div>
    </CardFrame>
  )
}

export default function TheoneAndRaSaveTheDate() {
  const [dissolved, setDissolved] = useState(false)
  const [musicOpen, setMusicOpen] = useState(false)
  const countdown = useCountdown('2027-11-21T15:00:00')
  const spotifyEmbedUrl = 'https://open.spotify.com/embed/track/4t6qMeHgbxWod2SLokiSQp'

  useEffect(() => {
    // People who've asked their browser to reduce motion land straight on
    // the detail screen — no dissolve, just the final card.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDissolved(true)
      return
    }
    const id = setTimeout(() => setDissolved(true), DISSOLVE_AFTER_MS)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 py-10" style={{ background: bg }}>
      <div
        className="relative w-full overflow-hidden"
        style={{
          containerType: 'inline-size',
          width: 'min(94vw, 1000px)',
          aspectRatio: '4 / 3.06',
          background: bg,
          boxShadow: '0 30px 60px -30px rgba(44,58,54,0.25)',
        }}
      >
        {/* Detail screen sits underneath, already at full opacity */}
        <div className="absolute inset-0">
          <DetailScreen countdown={countdown} />
        </div>

        {/* Title screen sits on top and dissolves away */}
        <div
          className="absolute inset-0"
          style={{
            opacity: dissolved ? 0 : 1,
            transition: `opacity ${DISSOLVE_DURATION_MS}ms ease`,
            pointerEvents: dissolved ? 'none' : 'auto',
          }}
        >
          <TitleScreen />
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