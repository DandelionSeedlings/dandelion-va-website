'use client'

import { useEffect, useState } from 'react'

/**
 * EditorialInvitationTemplate
 * ----------------------------------------------------------------
 * Built to a specific client brief (Theoné & Ra) rather than the shared
 * theme system every other invitation uses — colors below are hardcoded
 * to match that brief exactly rather than pulled from themes.js. If a
 * future couple wants this same magazine-style layout, duplicate this
 * file and adjust the palette constants at the top rather than editing
 * InvitationTemplate.js, which every other couple's page depends on.
 *
 * Image fields are all optional. Anywhere a photo isn't supplied yet,
 * this renders a clearly-labeled placeholder instead of breaking or
 * silently showing a broken image icon.
 */

const palette = {
  bg: '#FAF8F5',
  ink: '#2C3A36',
  sage: '#E2E7E1',
  blush: '#D9AA95', // sampled from Theoné's reference photo of the table runner
  border: '#E5E2DD',
  placeholder: '#E5E2DD',
  placeholderText: '#8B8378',
}

const serifFont = "var(--font-cormorant), serif"
const scriptFont = "var(--font-alex-brush), cursive"

const navLinks = [
  { label: 'HOME', href: '#top' },
  { label: 'OUR STORY', href: '#story' },
  { label: 'THE DAY', href: '#day' },
  { label: 'DETAILS', href: '#logistics' },
  { label: 'RSVP', href: '#rsvp' },
]

function useCountdown(isoString) {
  const [time, setTime] = useState(null)
  useEffect(() => {
    if (!isoString) return
    const target = new Date(isoString)
    if (Number.isNaN(target.getTime())) return
    const tick = () => {
      const diff = Math.max(0, target - new Date())
      setTime({
        d: Math.floor(diff / 86400000),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [isoString])
  return time
}

function ImagePlaceholder({ label = 'Photo coming soon', className = '', style = {} }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: palette.placeholder, color: palette.placeholderText, ...style }}
    >
      <div className="text-center px-4">
        <div className="text-3xl mb-2 opacity-60">🖼</div>
        <p className="text-[11px] uppercase tracking-wide">{label}</p>
      </div>
    </div>
  )
}

function PillButton({ href, children, variant = 'outline', style = {}, className = '' }) {
  const base = 'inline-block text-xs uppercase tracking-wide px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.03]'
  const variants = {
    solid: { background: palette.blush, color: palette.ink },
    solidLight: { background: '#fff', color: palette.ink },
    outline: { background: 'transparent', color: palette.ink, border: `1px solid ${palette.ink}` },
  }
  return (
    <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
      className={`${base} ${className}`} style={{ ...variants[variant], ...style }}>
      {children}
    </a>
  )
}

export default function EditorialInvitationTemplate({ content }) {
  const [musicOpen, setMusicOpen] = useState(false)
  const countdown = useCountdown(content.weddingDateISO)

  const spotifyEmbedUrl = content.spotifyTrackUrl
    ? content.spotifyTrackUrl.split('?')[0].replace('open.spotify.com/track/', 'open.spotify.com/embed/track/')
    : null

  const rsvpWaLink = `https://wa.me/${content.rsvpWaNumber}?text=${encodeURIComponent(
    `Hi! I'm RSVPing for ${content.coupleNames}'s wedding. `
  )}`

  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${content.ceremony?.venue || ''} ${content.ceremony?.location || ''}`
  )}`

  return (
    <div style={{ background: palette.bg, color: palette.ink }} id="top">
      {/* Floating music player */}
      {spotifyEmbedUrl && (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
          {musicOpen && (
            <div className="mb-3 rounded-xl overflow-hidden shadow-2xl" style={{ width: 300 }}>
              <iframe title="Our song" src={`${spotifyEmbedUrl}?utm_source=generator&theme=0`}
                width="100%" height="152" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            </div>
          )}
          <button onClick={() => setMusicOpen((v) => !v)} aria-label="Play our song"
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
            style={{ background: palette.ink }}>
            {musicOpen ? '✕' : '♪'}
          </button>
        </div>
      )}

      {/* SECTION 1 — Nav */}
      <div className="sticky top-0 z-40 backdrop-blur-md" style={{ background: 'rgba(250,248,245,0.9)' }}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span style={{ fontFamily: scriptFont, fontSize: 24, color: palette.ink }}>{content.coupleNames}</span>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 4).map((n) => (
              <a key={n.label} href={n.href} className="text-[11px] tracking-widest" style={{ color: palette.ink }}>
                {n.label}
              </a>
            ))}
          </div>
          <PillButton href="#rsvp" variant="solid" className="text-[11px]">RSVP</PillButton>
        </nav>
      </div>

      {/* SECTION 2 — Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {content.heroImage ? (
          <img src={content.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 18%' }} />
        ) : (
          <ImagePlaceholder label="Hero photo coming soon" className="absolute inset-0 w-full h-full" />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(44,58,54,0.75) 0%, rgba(44,58,54,0.35) 45%, rgba(44,58,54,0.05) 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-lg text-white">
            <p className="uppercase tracking-[3px] text-xs mb-4 opacity-85">Together with their families</p>
            <h1 className="text-6xl mb-4" style={{ fontFamily: serifFont }}>{content.coupleNames}</h1>
            <p className="uppercase tracking-[2px] text-xs mb-5 opacity-85">Invite you to celebrate their wedding day</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/40" />
              <p className="text-sm tracking-widest whitespace-nowrap">{content.weddingDateLong?.toUpperCase()}</p>
              <div className="h-px flex-1 bg-white/40" />
            </div>
            {countdown && (
              <div className="flex gap-6 mb-8">
                {[['d', 'days'], ['h', 'hours'], ['m', 'minutes'], ['s', 'seconds']].map(([k, l]) => (
                  <div key={k}>
                    <p className="text-2xl" style={{ fontFamily: serifFont }}>{countdown[k]}</p>
                    <p className="text-[10px] uppercase tracking-wide opacity-70">{l}</p>
                  </div>
                ))}
              </div>
            )}
            <PillButton href="#rsvp" variant="solid">RSVP</PillButton>
          </div>
        </div>

        {content.heroAccentText && (
          <p className="hidden lg:block absolute z-10 text-white text-2xl leading-snug text-right"
            style={{ fontFamily: scriptFont, top: '38%', right: '6%' }}>
            {content.heroAccentText.split('. ').map((line, i) => <span key={i}>{line.replace('.', '')}.<br /></span>)}
          </p>
        )}
        <img src="/images/wishes/decorations/botanical/eucalyptus-leaf-sprig.png" alt=""
          className="hidden sm:block absolute z-[5] pointer-events-none" style={{ width: 64, bottom: 24, right: 34, opacity: 0.8, transform: 'rotate(10deg)' }} />
        <img src="/images/wishes/decorations/botanical/eucalyptus-leaf-sprig.png" alt=""
          className="hidden sm:block absolute z-[5] pointer-events-none" style={{ width: 42, bottom: 60, right: 90, opacity: 0.55, transform: 'rotate(-12deg)' }} />
      </section>

      <div className="flex justify-center py-8 px-6" style={{ background: palette.bg }}>
        <img src="/images/wishes/decorations/botanical/eucalyptus-divider.png" alt="" className="w-full max-w-md sm:max-w-lg" />
      </div>

      {/* SECTION 3 — Our Story / Wedding Details */}
      <section className="grid grid-cols-1 lg:grid-cols-2" style={{ borderBottom: `1px solid ${palette.border}` }}>
        <div id="story" className="p-10 lg:p-16 relative" style={{ background: palette.bg }}>
          <p className="uppercase tracking-[3px] text-xs mb-4 opacity-70">Our Story</p>
          <h2 className="text-3xl mb-5" style={{ fontFamily: serifFont }}>Two people. One beautiful story.</h2>
          <p className="text-sm leading-relaxed opacity-80 mb-8">{content.storyText}</p>

          <div className="relative w-48 mb-10">
            <img src="/images/wishes/decorations/botanical/eucalyptus-leaf-sprig.png" alt=""
              className="absolute pointer-events-none" style={{ width: 80, top: -18, left: 130, opacity: 0.9, zIndex: 2 }} />
            {content.storyImage ? (
              <img src={content.storyImage} alt="" className="w-48 rounded-sm shadow-xl relative" style={{ transform: 'rotate(-3deg)', zIndex: 1 }} />
            ) : (
              <ImagePlaceholder label="Photo coming soon" className="w-48 h-56 rounded-sm shadow-xl relative" style={{ transform: 'rotate(-3deg)', zIndex: 1 }} />
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {content.milestones?.map((m) => (
              <div key={m.label}>
                <div className="w-2 h-2 rounded-full mb-2" style={{ background: palette.blush }} />
                <p className="text-xs font-medium uppercase tracking-wide">{m.label}</p>
                <p className="text-sm opacity-60" style={{ fontFamily: serifFont }}>{m.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 lg:p-16 relative overflow-hidden" style={{ background: palette.sage }}>
          <img src="/images/wishes/decorations/botanical/eucalyptus-leaf-sprig.png" alt=""
            className="absolute pointer-events-none" style={{ width: 64, bottom: 24, right: 28, opacity: 0.55, transform: 'rotate(10deg)' }} />
          <p className="uppercase tracking-[3px] text-xs mb-6 opacity-70">The Wedding Details</p>

          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-wide mb-2">The Ceremony</p>
            <p className="text-sm opacity-80">{content.weddingDateLong}</p>
            <p className="text-sm opacity-80">{content.ceremony?.time}</p>
            <p className="text-sm opacity-80">{content.ceremony?.venue}, {content.ceremony?.location}</p>
          </div>
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-wide mb-2">The Reception</p>
            <p className="text-sm opacity-80">{content.reception?.time}</p>
            <p className="text-sm opacity-80">{content.reception?.venue}</p>
          </div>
          <PillButton href={directionsHref}>View Location &amp; Get Directions</PillButton>
        </div>
      </section>

      {/* SECTION 4 — Order of the Day / Dress Code */}
      <section id="day" className="grid grid-cols-1 md:grid-cols-4" style={{ borderBottom: `1px solid ${palette.border}` }}>
        {content.orderOfDayImages?.[0] ? (
          <img src={content.orderOfDayImages[0]} alt="" className="hidden md:block w-full h-full object-cover" />
        ) : (
          <ImagePlaceholder label="Photo coming soon" className="hidden md:flex w-full h-full min-h-[320px]" />
        )}

        <div className="p-10">
          <p className="uppercase tracking-[2px] text-xs mb-6 opacity-70">Order of the Day</p>
          <div className="space-y-4">
            {content.schedule?.map((s) => (
              <div key={s.label}>
                <p className="text-sm" style={{ fontFamily: serifFont, color: palette.ink }}>{s.time}</p>
                <p className="text-sm opacity-70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {content.dressCode && (
          <div className="p-10" style={{ background: palette.sage }}>
            <p className="uppercase tracking-[2px] text-xs mb-6 opacity-70">Dress Code</p>
            <p className="text-lg mb-2" style={{ fontFamily: serifFont }}>{content.dressCode.title}</p>
            {content.dressCode.blurb && <p className="text-sm opacity-75 mb-4">{content.dressCode.blurb}</p>}
            <div className="text-sm space-y-1 mb-6">
              {content.dressCode.ladies && <p><span className="font-medium">Ladies:</span> {content.dressCode.ladies}</p>}
              {content.dressCode.gentlemen && <p><span className="font-medium">Gentlemen:</span> {content.dressCode.gentlemen}</p>}
            </div>
          </div>
        )}

        {content.orderOfDayImages?.[1] ? (
          <img src={content.orderOfDayImages[1]} alt="" className="hidden md:block w-full h-full object-cover" />
        ) : (
          <ImagePlaceholder label="Photo coming soon" className="hidden md:flex w-full h-full min-h-[320px]" />
        )}
      </section>

      <div className="flex justify-center py-8 px-6" style={{ background: palette.bg }}>
        <img src="/images/wishes/decorations/botanical/eucalyptus-divider.png" alt="" className="w-full max-w-md sm:max-w-lg" />
      </div>

      {/* SECTION 5 — RSVP / Accommodation / Getting There */}
      <section id="logistics" className="grid grid-cols-1 lg:grid-cols-3">
        <div id="rsvp" className="p-10 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden" style={{ background: palette.ink }}>
          <img src="/images/wishes/decorations/botanical/eucalyptus-leaf-sprig.png" alt=""
            className="absolute pointer-events-none" style={{ width: 56, top: 20, right: 20, opacity: 0.5, filter: 'brightness(0) invert(1)' }} />
          <p className="text-2xl mb-3" style={{ fontFamily: serifFont }}>Will you celebrate with us?</p>
          <p className="text-sm opacity-80 mb-6">Please let us know if you&apos;ll be joining us by {content.rsvpDeadline}.</p>
          {content.rsvpUrl ? (
            <PillButton href={content.rsvpUrl} variant="solidLight">RSVP Now</PillButton>
          ) : (
            <PillButton href={rsvpWaLink} variant="solidLight">RSVP on WhatsApp</PillButton>
          )}
        </div>

        {content.accommodationOptions?.length > 0 && (
          <div className="p-10 lg:p-14" style={{ borderRight: `1px solid ${palette.border}` }}>
            <p className="uppercase tracking-[2px] text-xs mb-4 opacity-70">Accommodation</p>
            {content.accommodationOptions.map((a) => (
              <div key={a.name} className="mb-4">
                <p className="text-sm font-medium">{a.name}</p>
                {a.note && <p className="text-sm opacity-70">{a.note}</p>}
              </div>
            ))}
            {content.accommodationOptions[0]?.href && (
              <PillButton href={content.accommodationOptions[0].href}>Book Here</PillButton>
            )}
          </div>
        )}

        <div className="p-10 lg:p-14">
          <p className="uppercase tracking-[2px] text-xs mb-4 opacity-70">Getting There</p>
          <p className="text-sm mb-5">{content.ceremony?.venue}, {content.ceremony?.location}</p>
          <PillButton href={directionsHref} className="mb-5 inline-block">View on Map</PillButton>
          {content.gettingThere?.notes?.length > 0 && (
            <ul className="text-sm opacity-75 space-y-1 mt-5">
              {content.gettingThere.notes.map((n) => <li key={n}>• {n}</li>)}
            </ul>
          )}
        </div>
      </section>

      {/* SECTION 6 — Utility grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8" style={{ background: palette.bg }}>
        <div className="p-6 rounded-xl border relative overflow-hidden" style={{ borderColor: palette.border }}>
          <img src="/images/wishes/decorations/botanical/eucalyptus-leaf-sprig.png" alt=""
            className="absolute pointer-events-none" style={{ width: 40, bottom: 8, right: 8, opacity: 0.35, transform: 'rotate(-6deg)' }} />
          <p className="uppercase tracking-[2px] text-xs mb-3 opacity-70">Gifts</p>
          <p className="text-sm opacity-75 mb-5">Your presence is the greatest gift. Should you wish to bless us with something more, we&apos;ve created a registry.</p>
          {content.registryLinks?.[0] && <PillButton href={content.registryLinks[0].href}>View Registry</PillButton>}
        </div>

        <div className="p-6 rounded-xl border" style={{ borderColor: palette.border }}>
          <p className="uppercase tracking-[2px] text-xs mb-3 opacity-70">Our Gallery</p>
          <p className="text-sm opacity-75 mb-4">Our Favourite Moments</p>
          <div className="flex -space-x-3 mb-5">
            {(content.galleryImages || []).slice(0, 3).map((img, i) => (
              <div key={i} className="w-12 h-12 rounded-sm border-2 border-white shadow overflow-hidden" style={{ transform: `rotate(${(i - 1) * 6}deg)` }}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <PillButton href="#gallery">View Gallery</PillButton>
          {content.photoWallUrl && (
            <div className="mt-3">
              <a href={`${content.photoWallUrl}?page=upload`} target="_blank" rel="noopener noreferrer" className="text-xs underline" style={{ color: palette.ink }}>
                Add your own photos →
              </a>
            </div>
          )}
        </div>

        <div className="p-6 rounded-xl border" style={{ borderColor: palette.border }}>
          <p className="uppercase tracking-[2px] text-xs mb-3 opacity-70">FAQ</p>
          <p className="text-sm opacity-75 mb-5">Quick answers about accommodation, children, and more.</p>
          <div className="space-y-3">
            {content.faqs?.slice(0, 3).map((f) => (
              <div key={f.q}>
                <p className="text-xs font-medium">{f.q}</p>
                <p className="text-xs opacity-70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {content.coordinators?.length > 0 && (
          <div className="p-6 rounded-xl border" style={{ borderColor: palette.border }}>
            <p className="uppercase tracking-[2px] text-xs mb-3 opacity-70">Need a Little Help?</p>
            <div className="space-y-3">
              {content.coordinators.map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium">{p.name}</p>
                    <p className="text-xs opacity-60">{p.role}{p.phone ? ` · ${p.phone}` : ''}</p>
                  </div>
                  {p.waLink && <a href={p.waLink} target="_blank" rel="noopener noreferrer" className="text-xs underline" style={{ color: palette.ink }}>WhatsApp</a>}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="flex justify-center py-8 px-6" style={{ background: palette.bg }}>
        <img src="/images/wishes/decorations/botanical/eucalyptus-divider.png" alt="" className="w-full max-w-md sm:max-w-lg" />
      </div>

      {/* SECTION 7 — Footer */}
      <section className="relative py-24 px-6 text-center overflow-hidden min-h-[50vh] flex items-center justify-center">
        {content.footerImage ? (
          <img src={content.footerImage} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
        ) : (
          <ImagePlaceholder label="Photo coming soon" className="absolute inset-0 w-full h-full" />
        )}
        <div className="absolute inset-0" style={{ background: 'rgba(44,58,54,0.45)' }} />
        <div className="relative z-10 text-white">
          <img src="/images/wishes/decorations/botanical/eucalyptus-leaf-sprig.png" alt=""
            className="mx-auto mb-4 opacity-90" style={{ width: 50, filter: 'brightness(0) invert(1) opacity(0.85)' }} />
          <p className="uppercase tracking-[3px] text-xs mb-6 opacity-85">We can&apos;t wait to celebrate with you</p>
          <p className="text-3xl mb-3" style={{ fontFamily: scriptFont }}>With love, {content.coupleNames}</p>
          <p className="mb-3">♡</p>
          <p className="text-xs tracking-widest opacity-80">{content.weddingDateLong?.toUpperCase()}</p>
        </div>
      </section>
    </div>
  )
}