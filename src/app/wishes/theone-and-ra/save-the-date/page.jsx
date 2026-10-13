
'use client'

import { useEffect, useState } from 'react'
import DetailsSection from '../../../../components/wishes/DetailsSection'
import { theoneAndRaContent } from '../../../../lib/wishes/clients/theoneAndRa'

// Font families configured in layout.jsx
const serifFont = "'La Luxes Serif', var(--font-cormorant), serif"
const scriptFont = "'La Luxes Script', var(--font-alex-brush), cursive"

// Colours
const ink = '#202D28'
const blush = '#D9AA95'
const bg = '#FDF9F6'
const cardCream = '#E8E0D8'

// Artwork paths
const ASSET_PATH = '/images/wishes/clients/theone-and-ra/save-the-date'
const CARD_BG = `${ASSET_PATH}/card-bg-mobile.png`
const DETAIL_BG = `${ASSET_PATH}/card-bg.png`

// Transition timing
const TITLE_FADE_MS = 1400
const DETAIL_FADE_MS = 1700

// Subtle text shadow for text crossing the torn-paper edge
const crossoverGlow = {
  textShadow: '0 1px 8px rgba(232,224,216,0.7)',
}

// Countdown hook
function useCountdown(isoString) {
  const [time, setTime] = useState(null)

  useEffect(() => {
    const target = new Date(isoString)

    if (Number.isNaN(target.getTime())) return

    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now())

      setTime({
        d: Math.floor(diff / 86400000),
        h: String(
          Math.floor((diff % 86400000) / 3600000)
        ).padStart(2, '0'),
        m: String(
          Math.floor((diff % 3600000) / 60000)
        ).padStart(2, '0'),
      })
    }

    tick()

    const id = setInterval(tick, 60000)

    return () => clearInterval(id)
  }, [isoString])

  return time
}

// Absolute positioning relative to the card artwork
function Pos({
  top,
  left = 0,
  width = 100,
  textAlign = 'center',
  children,
  style = {},
}) {
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

// Decorative gold line and diamond
function GoldLine({ top, width = 18 }) {
  return (
    <Pos top={top} left={(100 - width) / 2} width={width}>
      <div className="flex items-center justify-center gap-[0.6cqw]">
        <div
          style={{
            height: 1,
            flex: 1,
            background:
              'linear-gradient(to left, #C9A66B, transparent)',
          }}
        />

        <div
          style={{
            width: '1.1cqw',
            height: '1.1cqw',
            background: '#C9A66B',
            transform: 'rotate(45deg)',
            flexShrink: 0,
          }}
        />

        <div
          style={{
            height: 1,
            flex: 1,
            background:
              'linear-gradient(to right, #C9A66B, transparent)',
          }}
        />
      </div>
    </Pos>
  )
}

// Wedding date
function DateLabel({ top = 65.5, crossover = false }) {
  return (
    <Pos top={top}>
      <p
        style={{
          fontFamily: serifFont,
          fontSize: '4.7cqw',
          letterSpacing: '0.08em',
          color: ink,
          opacity: 1,
          margin: 0,
          ...(crossover ? crossoverGlow : {}),
        }}
      >
        21.11.2026
      </p>
    </Pos>
  )
}

// Couple's names
function Names({ top = 95.8 }) {
  return (
    <Pos top={top}>
      <p
        style={{
          fontFamily: scriptFont,
          fontSize: '5.4cqw',
          color: ink,
          opacity: 1,
          margin: 0,
          lineHeight: 1,
          textShadow: '0 1px 2px rgba(255,255,255,0.25)',
        }}
      >
        Theoné &amp; Ra
      </p>
    </Pos>
  )
}

// First screen: Save the Date
function TitleScreen({ onSeeMore, fadingOut }) {
  return (
    <>
      <Pos top={53.5}>
        <p
          className="uppercase"
          style={{
            fontFamily: serifFont,
            fontWeight: 500,
            fontSize: '15cqw',
            letterSpacing: '0.1em',
            color: ink,
            margin: 0,
            lineHeight: 1,
            ...crossoverGlow,
          }}
        >
          Save
        </p>
      </Pos>

      <Pos top={62}>
        <p
          style={{
            fontFamily: scriptFont,
            fontSize: '10cqw',
            color: ink,
            margin: 0,
            lineHeight: 1,
            ...crossoverGlow,
          }}
        >
          the
        </p>
      </Pos>

      <Pos top={68.5}>
        <p
          className="uppercase"
          style={{
            fontFamily: serifFont,
            fontWeight: 500,
            fontSize: '15cqw',
            letterSpacing: '0.1em',
            color: ink,
            margin: 0,
            lineHeight: 1,
          }}
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
          className="uppercase"
          style={{
            fontFamily: serifFont,
            fontSize: '2.5cqw',
            letterSpacing: '0.16em',
            color: ink,
            opacity: 0.9,
            background: 'rgba(253,249,246,0.2)',
            border: '1px solid rgba(32,45,40,0.45)',
            borderRadius: '999px',
            padding: '1cqw 3.4cqw',
            cursor: fadingOut ? 'default' : 'pointer',
            transition:
              'opacity 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.borderColor =
              'rgba(32,45,40,0.8)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.9'
            e.currentTarget.style.borderColor =
              'rgba(32,45,40,0.45)'
          }}
        >
          See more ⌄
        </button>
      </Pos>
    </>
  )
}

// Second screen: Wedding details and countdown
function DetailScreen({ countdown, rsvpUrl, onMore }) {
  return (
    <>
      <DateLabel top={13} />

      <GoldLine top={19.5} width={16} />

      <Pos top={23}>
        <p
          style={{
            fontFamily: serifFont,
            fontSize: '9.6cqw',
            fontVariant: 'small-caps',
            letterSpacing: '0.03em',
            color: ink,
            margin: 0,
            lineHeight: 1.15,
            textShadow: '0 1px 2px rgba(255,255,255,0.2)',
          }}
        >
          Ons gaan trou!
        </p>
      </Pos>

      <Pos top={32.5} left={8} width={84}>
        <p
          style={{
            fontFamily: serifFont,
            fontSize: '5.6cqw',
            color: ink,
            opacity: 1,
            margin: 0,
            lineHeight: 1.5,
            textShadow:
              '0 1px 1px rgba(255,255,255,0.25)',
          }}
        >
          En ons hoop jy sal hierdie besondere dag saam met
          ons vier.
        </p>
      </Pos>

      {countdown && (
        <Pos top={49}>
          <div className="flex items-stretch justify-center">
            {[
              ['d', 'dae'],
              ['h', 'ure'],
              ['m', 'min'],
            ].map(([key, label], i) => (
              <div
                key={key}
                className="flex items-center"
              >
                {i > 0 && (
                  <div
                    style={{
                      width: 1,
                      height: '9.5cqw',
                      background: 'rgba(32,45,40,0.3)',
                      margin: '0 3.8cqw',
                    }}
                  />
                )}

                <div
                  className="text-center"
                  style={{ minWidth: '16cqw' }}
                >
                  <p
                    style={{
                      fontFamily: serifFont,
                      fontSize: '9.5cqw',
                      fontWeight: 500,
                      color: ink,
                      margin: 0,
                      lineHeight: 1,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {countdown[key]}
                  </p>

                  <p
                    className="uppercase"
                    style={{
                      fontFamily: serifFont,
                      fontSize: '2.7cqw',
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      color: ink,
                      opacity: 0.9,
                      margin: 0,
                      marginTop: '0.8cqw',
                    }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Pos>
      )}

      <Pos top={63} left={7} width={86}>
        <p
          style={{
            fontFamily: serifFont,
            fontSize: '4.6cqw',
            letterSpacing: '0.04em',
            color: ink,
            margin: 0,
            lineHeight: 1.5,
            textShadow: '0 1px 1px rgba(255,255,255,0.2)',
          }}
        >
          Troudiens om 15h00
          <br />
          Indawo Game Lodge, Ermelo
        </p>
      </Pos>

      <Pos top={76}>
        <a
          href={rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase"
          style={{
            fontFamily: serifFont,
            fontSize: '2.8cqw',
            letterSpacing: '0.16em',
            color: bg,
            background: ink,
            border: '1px solid ' + ink,
            borderRadius: '999px',
            padding: '1.3cqw 4.2cqw',
            cursor: 'pointer',
            display: 'inline-block',
            textDecoration: 'none',
          }}
        >
          RSVP voor 5 November
        </a>
      </Pos>

      <Pos top={83} left={7} width={86}>
        <button
          onClick={onMore}
          className="italic"
          style={{
            fontFamily: serifFont,
            fontSize: '3.6cqw',
            color: ink,
            opacity: 0.95,
            margin: 0,
            lineHeight: 1.4,
            background: 'none',
            border: 'none',
            textDecoration: 'underline',
            textUnderlineOffset: 3,
            cursor: 'pointer',
          }}
        >
          Program en kaart ⌄
        </button>
      </Pos>

      <GoldLine top={89} width={22} />

      <Names top={91.5} />
    </>
  )
}

export default function TheoneAndRaSaveTheDate() {
  // Screen sequence:
  // title -> fadingOut -> detail
  const [stage, setStage] = useState('title')
  const [musicOpen, setMusicOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Gentle entrance animation
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true)
    })

    return () => cancelAnimationFrame(id)
  }, [])

  // Correct wedding date: 21 November 2026.
  // Countdown reaches zero at midnight at the start
  // of the wedding day in the visitor's local time.
  const countdown = useCountdown('2026-11-21T00:00:00')

  const spotifyEmbedUrl =
    'https://open.spotify.com/embed/track/4t6qMeHgbxWod2SLokiSQp'

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

  const handleSeeMore = () => {
    if (stage !== 'title') return

    if (prefersReducedMotion()) {
      setStage('detail')
      return
    }

    setStage('fadingOut')

    setTimeout(() => {
      setStage('detail')
    }, TITLE_FADE_MS)
  }

  const titleVisible =
    stage === 'title' || stage === 'fadingOut'

  const detailVisible = stage === 'detail'

  return (
    <div
      className="min-h-screen relative flex flex-col items-center px-4 pt-6 pb-24"
      style={{ background: bg }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          containerType: 'inline-size',
          width: 'min(94vw, 486px)',
          aspectRatio: '1080 / 1920',
          borderRadius: 2,
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.6) inset, 0 40px 70px -25px rgba(44,58,54,0.4), 0 10px 25px -10px rgba(44,58,54,0.25)',
          opacity: mounted ? 1 : 0,
          transform: mounted
            ? 'translateY(0)'
            : 'translateY(10px)',
          transition:
            'opacity 900ms ease, transform 900ms ease',
        }}
      >
        {/* Title artwork: photo, torn edge and cream panel */}
        <img
          src={CARD_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cream gradient behind the Save the Date lettering */}
        <div
          className="absolute left-0 w-full pointer-events-none"
          style={{
            top: '42%',
            height: '24%',
            background:
              'linear-gradient(to bottom, rgba(232,224,216,0.08) 0%, rgba(232,224,216,0.65) 75%, rgba(232,224,216,0.94) 100%)',
            opacity:
              titleVisible && stage !== 'fadingOut'
                ? 1
                : 0,
            transition: `opacity ${TITLE_FADE_MS}ms ease`,
          }}
        />

        {/* Detail artwork and cream veil */}
        <div
          className="absolute inset-0"
          style={{
            opacity: detailVisible ? 1 : 0,
            transition: `opacity ${DETAIL_FADE_MS}ms ease`,
          }}
        >
          <img
            src={DETAIL_BG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background: 'rgba(232,224,216,0.78)',
            }}
          />
        </div>

        {/* First screen */}
        <div
          className="absolute inset-0"
          style={{
            opacity:
              titleVisible && stage !== 'fadingOut'
                ? 1
                : 0,
            transition: `opacity ${TITLE_FADE_MS}ms ease`,
            pointerEvents:
              stage === 'title' ? 'auto' : 'none',
          }}
        >
          <TitleScreen
            onSeeMore={handleSeeMore}
            fadingOut={stage === 'fadingOut'}
          />
        </div>

        {/* Second screen */}
        <div
          className="absolute inset-0"
          style={{
            opacity: detailVisible ? 1 : 0,
            transition: `opacity ${DETAIL_FADE_MS}ms ease`,
            pointerEvents: detailVisible
              ? 'auto'
              : 'none',
          }}
        >
          <DetailScreen
            countdown={countdown}
            rsvpUrl={theoneAndRaContent.rsvpUrl}
            onMore={() =>
              document
                .getElementById('besonderhede')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </div>
      </div>

      {/* Program, place and practical notes, below the card */}
      <div className="w-full" style={{ maxWidth: 520 }}>
        <DetailsSection
          content={theoneAndRaContent}
          ink={ink}
          font={serifFont}
          script={scriptFont}
        />
      </div>

      {/* Floating record-player music button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {musicOpen && (
          <div
            className="mb-3 rounded-xl overflow-hidden shadow-2xl"
            style={{ width: 300 }}
          >
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
          aria-label={
            musicOpen
              ? 'Hide music player'
              : 'Play our song'
          }
          className="w-14 h-14 rounded-full relative shadow-lg"
          style={{
            background:
              'repeating-radial-gradient(circle at center, #232323 0px, #232323 2px, #3a3a3a 2px, #3a3a3a 4px)',
            animation: musicOpen
              ? 'spin 2.5s linear infinite'
              : 'none',
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
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
