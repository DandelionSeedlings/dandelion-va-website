'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import EnvelopeIntro from './EnvelopeIntro'
import { SeedCluster, DriftingSeed, GoldDividerImg, GoldStarImg, DriftingSignatureSeed, BotanicalCornerSprig, PhotoFrame } from './WishesDecor'

/**
 * Reusable invitation engine. One component, skinned by `theme` (colors,
 * fonts, decorative flags — see src/lib/wishes/themes.js) and populated by
 * `content` (this couple's actual names, dates, photos, schedule, etc).
 *
 * Every style demo page, and every real client invitation going forward,
 * should render THIS component rather than copy-pasting the markup — fix a
 * bug or improve a section once here, and every invitation benefits.
 */
export default function InvitationTemplate({ theme, content }) {
  const c = theme.colors
  const [opened, setOpened] = useState(false)
  const [guestName, setGuestName] = useState('')

  const rsvpWaLink = `https://wa.me/${content.rsvpWaNumber}?text=${encodeURIComponent(
    `Hi! It's ${guestName || '[your name]'} — RSVPing for ${content.coupleNames}'s wedding. `
  )}`

  return (
    <div style={{ background: c.bg, color: c.muted }}>
      <EnvelopeIntro coupleNames={content.coupleNames} onOpen={() => setOpened(true)} theme={theme} />

      <div className="text-white text-center text-xs py-2 px-4" style={{ background: c.accent }}>
        This is a template preview — styled with example details so you can see what your own
        invitation could look like.
      </div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline preload="auto" poster={content.heroVideoPoster} className="w-full h-full object-cover">
            <source src={content.heroVideoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(58,58,58,0.35) 0%, rgba(58,58,58,0.55) 100%)' }} />
        </div>
        <DriftingSeed color="#fff" size={70} style={{ top: 24, right: 30, opacity: 0.5 }} duration={16} />
        <DriftingSeed color="#fff" size={44} style={{ bottom: 40, left: 24, opacity: 0.35 }} duration={13} delay={2} />
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6 text-white">
          <p className="text-sm opacity-90 mb-4">Together with their families, invite you to celebrate</p>
          <div className="w-16 h-px mx-auto mb-6" style={{ background: c.soft }} />
          <h1 className="text-6xl md:text-7xl mb-6" style={{ fontFamily: theme.scriptFont }}>
            {content.coupleNames}
          </h1>
          <p className="text-xs tracking-[3px] uppercase mb-3">{content.weddingDateLong}</p>
          <p className="text-lg italic" style={{ fontFamily: theme.serifFont }}>{content.tagline}</p>
          <a href="#rsvp" className="inline-block mt-8 px-8 py-3.5 rounded-full font-medium" style={{ background: c.soft, color: c.ink }}>
            RSVP
          </a>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative" style={{ boxShadow: theme.showBotanicalAccents ? 'none' : '0 25px 50px -20px rgba(0,0,0,0.2)' }}>
              <div className="rounded-2xl overflow-hidden" style={theme.showBotanicalAccents ? { transform: 'rotate(-2deg)' } : {}}>
                <img src={content.storyImage} alt="" className="w-full h-[380px] object-cover" />
              </div>
              {theme.showBotanicalAccents && (
                <>
                  <PhotoFrame variant={3} style={{ transform: 'rotate(-2deg)', margin: -14 }} />
                  <BotanicalCornerSprig variant={2} size={110} style={{ bottom: -30, right: -30, transform: 'scaleX(-1)' }} />
                </>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="uppercase tracking-[3px] text-xs mb-4" style={{ color: c.accent }}>Our Story</p>
            <h2 className="text-3xl mb-4 italic" style={{ fontFamily: theme.serifFont, color: c.ink }}>
              Two people. One beautiful story.
            </h2>
            <GoldDividerImg width={140} className="mb-6" style={{ marginLeft: 0 }} />
            <p className="leading-relaxed opacity-75">{content.storyText}</p>
          </Reveal>
        </div>
        <div className="max-w-3xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {content.milestones.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className="text-center">
              <div className="w-2.5 h-2.5 rounded-full mx-auto mb-3 border" style={{ background: c.soft, borderColor: c.warm }} />
              <p className="text-xs font-medium" style={{ color: c.ink }}>{m.label}</p>
              <p className="text-sm italic" style={{ fontFamily: theme.serifFont, color: c.accent }}>{m.year}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {theme.showDriftingSeeds !== undefined && content.galleryImages?.length > 0 && (
        <section className="py-20 px-6 relative" style={{ background: c.bgAlt }}>
          <SeedCluster color={c.soft} size={50} style={{ position: 'absolute', top: 20, right: 24, opacity: 0.4, display: theme.showBotanicalAccents ? 'none' : 'block' }} />
          {theme.showBotanicalAccents && (
            <BotanicalCornerSprig variant={1} size={90} style={{ top: 8, right: 12, opacity: 0.7 }} />
          )}
          <Reveal className="text-center mb-12">
            <p className="uppercase tracking-[3px] text-xs mb-4" style={{ color: c.accent }}>Our Gallery</p>
            <h2 className="text-3xl" style={{ fontFamily: theme.serifFont, color: c.ink }}>Our Favourite Moments</h2>
          </Reveal>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            <Reveal className="col-span-2 row-span-2">
              <img src={content.galleryImages[0]} alt="" className="w-full h-full object-cover rounded-xl" style={{ minHeight: 300 }} />
            </Reveal>
            <Reveal delay={0.05}>
              <img src={content.galleryImages[1]} alt="" className="w-full h-full object-cover rounded-xl" style={{ minHeight: 145 }} />
            </Reveal>
            <Reveal delay={0.1}>
              <img src={content.galleryImages[2]} alt="" className="w-full h-full object-cover rounded-xl" style={{ minHeight: 145 }} />
            </Reveal>
            <Reveal delay={0.15} className="col-span-2">
              <img src={content.galleryImages[3]} alt="" className="w-full h-full object-cover rounded-xl" style={{ minHeight: 145 }} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Details */}
      <section className="py-20 px-6">
        <Reveal className="text-center mb-14">
          <p className="uppercase tracking-[3px] text-xs mb-4" style={{ color: c.accent }}>The Day</p>
          <h2 className="text-3xl" style={{ fontFamily: theme.serifFont, color: c.ink }}>Wedding Details</h2>
        </Reveal>
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl p-8 text-center border h-full relative" style={{ background: c.bgAlt, borderColor: c.cardBorder }}>
              <GoldStarImg size={16} style={{ top: 14, left: 16 }} />
              <p className="text-sm font-medium" style={{ color: c.ink }}>Ceremony</p>
              <div className="w-8 h-px mx-auto my-3" style={{ background: c.soft }} />
              <p className="text-2xl italic mb-3" style={{ fontFamily: theme.serifFont, color: c.accent }}>{content.ceremony.time}</p>
              <p className="text-sm" style={{ color: c.ink }}>{content.ceremony.venue}</p>
              <p className="text-xs opacity-60">{content.ceremony.location}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl p-8 text-center border h-full relative" style={{ background: c.bgAlt, borderColor: c.cardBorder }}>
              <GoldStarImg size={16} style={{ top: 14, left: 16 }} />
              <p className="text-sm font-medium" style={{ color: c.ink }}>Reception</p>
              <div className="w-8 h-px mx-auto my-3" style={{ background: c.soft }} />
              <p className="text-2xl italic mb-3" style={{ fontFamily: theme.serifFont, color: c.accent }}>{content.reception.time}</p>
              <p className="text-sm" style={{ color: c.ink }}>{content.reception.venue}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Order of the Day */}
      <section className="py-20 px-6" style={{ background: c.bgAlt }}>
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl" style={{ fontFamily: theme.serifFont, color: c.ink }}>Order of the Day</h2>
        </Reveal>
        <div className="max-w-md mx-auto border-l pl-8 space-y-6" style={{ borderColor: c.soft }}>
          {content.schedule.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p style={{ color: c.muted }}>
                <span className="italic" style={{ fontFamily: theme.serifFont, color: c.accent }}>{s.time}</span>
                {' — '}{s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-20 px-6" style={{ background: c.gradientDark }}>
        <Reveal className="max-w-2xl mx-auto text-center text-white mb-10">
          <h2 className="text-3xl mb-3" style={{ fontFamily: theme.serifFont }}>Will you celebrate with us?</h2>
          <p className="opacity-85 text-sm">Please let us know by {content.rsvpDeadline}.</p>
        </Reveal>
        <div className="max-w-md mx-auto">
          <div className="bg-white/95 rounded-2xl p-8 text-center">
            <p className="text-sm mb-6" style={{ color: c.ink }}>
              RSVP responses are tracked live in a private guest sheet, with an instant email
              notification for every reply — no separate app, no spreadsheet chasing.
            </p>
            <a href={content.rsvpUrl} target="_blank" rel="noopener noreferrer"
              className="inline-block w-full px-8 py-3.5 rounded-full font-medium text-white" style={{ background: c.accent }}>
              Open the RSVP form
            </a>
            <p className="text-xs mt-3 mb-5 opacity-60">
              (Opens in a new tab — Google doesn&apos;t allow this form to be shown inline on
              other sites, so on a real invitation it lives on its own page.)
            </p>
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px" style={{ background: c.cardBorder }} />
              <span className="text-xs opacity-60">or, if you&apos;d rather</span>
              <div className="flex-1 h-px" style={{ background: c.cardBorder }} />
            </div>
            <input type="text" placeholder="Your name" value={guestName} onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-full border text-sm mb-3 text-center" style={{ borderColor: c.cardBorder }} />
            <a href={rsvpWaLink} target="_blank" rel="noopener noreferrer"
              className="inline-block w-full px-8 py-3.5 rounded-full font-medium" style={{ border: `1px solid ${c.accent}`, color: c.accent }}>
              Send RSVP on WhatsApp instead
            </a>
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20 px-6">
        <Reveal className="text-center mb-4">
          <h2 className="text-3xl" style={{ fontFamily: theme.serifFont, color: c.ink }}>Our People</h2>
        </Reveal>
        <p className="text-center text-sm opacity-60 mb-12">The ones standing up with us</p>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {content.weddingParty.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06} className="text-center">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ background: c.highlight, color: c.warm, fontFamily: theme.serifFont }}>
                {p.initial}
              </div>
              <p className="text-sm font-medium" style={{ color: c.ink }}>{p.name}</p>
              <p className="text-xs uppercase tracking-wide mb-2" style={{ color: c.accent }}>{p.role}</p>
              <p className="text-xs opacity-60">{p.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gift Registry */}
      <section className="py-20 px-6" style={{ background: c.bgAlt }}>
        <Reveal className="text-center mb-10">
          <h2 className="text-3xl" style={{ fontFamily: theme.serifFont, color: c.ink }}>Gift Registry</h2>
        </Reveal>
        <Reveal>
          <div className="max-w-lg mx-auto rounded-2xl p-8 text-center" style={{ background: c.highlight }}>
            <p className="text-sm mb-6" style={{ color: c.ink }}>
              Your presence really is the greatest gift. If you&apos;d like to spoil us anyway,
              we&apos;ve put a few things together below.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {content.registryLinks.map((r) => (
                <a key={r.label} href={r.href} className="px-5 py-2.5 rounded-full text-sm font-medium text-white" style={{ background: c.warm }}>
                  {r.label} →
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <Reveal className="text-center mb-10">
          <h2 className="text-2xl" style={{ fontFamily: theme.serifFont, color: c.ink }}>Quick Answers</h2>
        </Reveal>
        <div className="max-w-xl mx-auto space-y-5">
          {content.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="border-b pb-4" style={{ borderColor: c.cardBorder }}>
                <p className="font-medium text-sm mb-1" style={{ color: c.ink }}>{f.q}</p>
                <p className="text-sm opacity-70">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-6 text-center relative overflow-hidden" style={{ background: c.gradientDark }}>
        <DriftingSignatureSeed size={90} style={{ top: 16, right: 20, opacity: 0.18 }} duration={15} />
        <DriftingSignatureSeed size={60} style={{ bottom: 20, left: 24, opacity: 0.14 }} duration={12} delay={1.5} />
        <Reveal>
          <p className="text-white text-2xl mb-3" style={{ fontFamily: theme.serifFont }}>We can&apos;t wait to celebrate with you</p>
          <p className="text-white/70 italic mb-2" style={{ fontFamily: theme.serifFont }}>With love,</p>
          <p className="text-white text-4xl mb-6" style={{ fontFamily: theme.scriptFont }}>{content.coupleNames}</p>
          <GoldDividerImg width={160} center opacity={0.7} />
        </Reveal>
      </section>

      <div className="text-center py-8 px-6" style={{ background: c.bg }}>
        <p className="text-sm mb-2" style={{ color: c.warm }}>Like this style? This could be yours.</p>
        <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer"
          className="inline-block px-7 py-3 rounded-full font-medium text-white" style={{ background: c.accent }}>
          Start Your Invitation
        </a>
      </div>
    </div>
  )
}
