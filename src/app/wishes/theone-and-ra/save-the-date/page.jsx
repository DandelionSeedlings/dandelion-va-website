'use client'

import { useEffect, useState } from 'react'

const serifFont = "var(--font-cormorant), serif"
const scriptFont = "var(--font-alex-brush), cursive"

const ink = '#2C3A36'
const blush = '#D9AA95'
const bg = '#FDF9F6'

const ASSET_PATH = '/images/wishes/clients/theone-and-ra/save-the-date'

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

// A soft, semi-opaque backdrop so text stays readable over the busy leaf
// background no matter what's directly behind it.
function TextPanel({ children, className = '' }) {
  return (
    <div
      className={`inline-block rounded-2xl px-6 py-3 ${className}`}
      style={{ background: 'rgba(253,249,246,0.82)', backdropFilter: 'blur(2px)' }}
    >
      {children}
    </div>
  )
}

export default function TheoneAndRaSaveTheDate() {
  const [phase, setPhase] = useState('closed') // closed -> opening -> open
  const [musicOpen, setMusicOpen] = useState(false)
  // Same track as the main invitation — hardcoded here since this page
  // doesn't pull from the shared content file.
  const spotifyEmbedUrl = 'https://open.spotify.com/embed/track/4t6qMeHgbxWod2SLokiSQp'
  const countdown = useCountdown('2027-10-31T15:00:00')

  const handleTap = () => {
    if (phase !== 'closed') return
    setPhase('opening')
    setTimeout(() => setPhase('open'), 700)
  }

  const envelopeSrc = {
    closed: `${ASSET_PATH}/envelope-1-closed.png`,
    opening: `${ASSET_PATH}/envelope-2-opening.png`,
    open: `${ASSET_PATH}/envelope-3-open.png`,
  }[phase]

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: bg }}>
      <img
        src={`${ASSET_PATH}/header-background.png`}
        alt=""
        className="absolute top-0 left-0 w-full opacity-60 pointer-events-none"
        style={{ height: 180, objectFit: 'cover', objectPosition: 'top' }}
      />
      <img
        src={`${ASSET_PATH}/header-background.png`}
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-60 pointer-events-none"
        style={{ height: 180, objectFit: 'cover', objectPosition: 'bottom', transform: 'rotate(180deg)' }}
      />

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
              width: 16, height: 16, top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)', background: blush, border: '2px solid #1a1a1a',
            }}
          />
        </button>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 min-h-screen flex flex-col justify-center">
        {phase !== 'open' ? (
          // CLOSED / OPENING — envelope left, text right, matching the open layout
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div className="text-center order-2 sm:order-1">
              <button
                onClick={handleTap}
                aria-label={phase === 'closed' ? 'Tap to open' : undefined}
                className="w-full block"
                style={{ cursor: phase === 'closed' ? 'pointer' : 'default', background: 'none', border: 'none', padding: 0 }}
              >
                <img src={envelopeSrc} alt="" className="w-full h-auto" style={{ filter: 'drop-shadow(0 18px 32px rgba(44,58,54,0.18))' }} />
              </button>
            </div>

            <div className="text-center sm:text-left order-1 sm:order-2">
              <TextPanel>
                <p className="uppercase tracking-[3px] text-xs mb-2" style={{ color: ink, opacity: 0.7 }}>
                  Save the Date
                </p>
                <h1 className="text-4xl mb-3" style={{ fontFamily: scriptFont, color: ink }}>
                  Theoné &amp; Ra
                </h1>
                {phase === 'closed' && (
                  <p className="text-xs uppercase tracking-[2px] animate-pulse" style={{ color: ink, opacity: 0.6 }}>
                    Tap the envelope to open
                  </p>
                )}
              </TextPanel>
            </div>
          </div>
        ) : (
          // OPEN — side by side, so nothing has to fight for vertical space
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div className="text-center animate-[fadeIn_0.6s_ease-out]">
              <img
                src={envelopeSrc}
                alt=""
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(0 18px 32px rgba(44,58,54,0.18))' }}
              />
            </div>

            <div className="text-center sm:text-left animate-[fadeIn_0.8s_ease-out]">
              <TextPanel className="mb-6">
                <p className="uppercase tracking-[3px] text-xs mb-2" style={{ color: ink, opacity: 0.7 }}>
                  Save the Date
                </p>
                <h1 className="text-4xl" style={{ fontFamily: scriptFont, color: ink }}>
                  Theoné &amp; Ra
                </h1>
              </TextPanel>

              <TextPanel>
                <p className="text-2xl mb-2" style={{ fontFamily: serifFont, color: ink }}>
                  31 October 2027
                </p>
                <p className="text-sm mb-6" style={{ color: ink, opacity: 0.75 }}>
                  We&apos;re getting married, and we&apos;d love for you to be there.
                  <br />
                  The full invitation, with all the details, is on its way.
                </p>

                {countdown && (
                  <div className="flex justify-center sm:justify-start gap-6 mb-6">
                    {[['d', 'days'], ['h', 'hours'], ['m', 'minutes']].map(([k, l]) => (
                      <div key={k}>
                        <p className="text-2xl" style={{ fontFamily: serifFont, color: ink }}>{countdown[k]}</p>
                        <p className="text-[10px] uppercase tracking-wide opacity-60">{l}</p>
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href="/wishes/theone-and-ra"
                  className="inline-block text-xs uppercase tracking-wide px-6 py-3 rounded-full transition-transform hover:scale-[1.03]"
                  style={{ background: blush, color: ink }}
                >
                  Preview the Invitation
                </a>
              </TextPanel>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}