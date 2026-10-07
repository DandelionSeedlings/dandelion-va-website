'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../../../components/wishes/Reveal'

// TODO: after deploying Code.gs as a web app (see the setup notes), paste
// the resulting /exec URL here.
const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

const pricingSuites = [
  {
    name: 'Essential Suite',
    price: 'R1,250',
    note: 'once-off',
    featured: false,
    features: [
      'Custom single-page mobile invite',
      'Digital RSVP form + plus-ones',
      'Live sync to Google Sheets',
      'Maps & Waze directions',
      'Standard web address',
      'WhatsApp save-the-date image',
    ],
  },
  {
    name: 'Interactive Suite',
    price: 'R2,650',
    note: 'once-off',
    featured: true,
    badge: 'Most loved',
    features: [
      'Everything in Essential',
      'Custom .co.za domain, 12 months',
      'Live countdown timer',
      'MemoryBloom guest photo album, 30 days live',
      'Song requests on RSVP',
      'Add to Calendar, one tap',
      'Animated WhatsApp invite',
    ],
  },
  {
    name: 'Bespoke Suite',
    price: 'R4,500+',
    note: 'custom experience',
    featured: false,
    features: [
      'Everything in Interactive',
      'Free Flip-to-Invite save-the-date',
      'MemoryBloom, unlimited uploads',
      'Extended 18-month hosting',
      'Multi-page: story, itinerary, FAQs',
      'Multi-day event RSVPs',
      'Auto WhatsApp/email confirmations',
    ],
  },
]

const packages = ['Essential Suite — R1,250', 'Interactive Suite — R2,650', 'Bespoke Suite — R4,500+', "I'm not sure yet"]

const styles = [
  { label: 'Romantic & Soft', desc: 'Blush · Ivory · Delicate florals', image: '/images/wishes/styles/romantic-soft.jpg' },
  { label: 'Botanical', desc: 'Sage · Eucalyptus · Natural textures', image: '/images/wishes/styles/botanical.jpg' },
  { label: 'Timeless & Classic', desc: 'Ivory · Champagne · Elegant type', image: '/images/wishes/styles/timeless-classic.jpg' },
  { label: 'Modern & Minimal', desc: 'Clean lines · Understated', image: '/images/wishes/styles/modern-minimal.jpg' },
]

const palettes = [
  { label: 'Soft Romance', colors: ['#E8C4C4', '#FAF6F0', '#A8B89C'] },
  { label: 'Botanical', colors: ['#7C8B68', '#A8B89C', '#FAF6F0'] },
  { label: 'Timeless', colors: ['#D4C4A0', '#FAF6F0', '#8B7355'] },
  { label: 'My own palette', colors: ['#E5DED2', '#E5DED2', '#E5DED2'] },
]

const featureOptions = [
  'Our story', 'Order of the day', 'Accommodation guide', 'Gift registry',
  'Photo gallery', 'Live countdown', 'Music', 'Song requests on RSVP',
  'FAQ section', 'Guest photo album (QR upload)',
]

const moodOptions = [
  'Romantic', 'Intimate', 'Botanical', 'Elegant', 'Modern',
  'Luxurious', 'Fun', 'Whimsical', 'Relaxed', 'Warm',
]

function Toggle({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 rounded-full text-sm border transition-colors"
      style={
        selected
          ? { background: '#7C8B68', color: '#fff', borderColor: '#7C8B68' }
          : { background: '#fff', color: '#8B7355', borderColor: '#E5DED2' }
      }
    >
      {label}
    </button>
  )
}

function CheckIcon({ color = '#A8B89C' }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0 mt-[3px]">
      <path d="M2 6.5L5 9.5L11 3.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PackageCard({ suite, selected, onChoose }) {
  const dark = suite.featured
  return (
    <button
      type="button"
      onClick={onChoose}
      className="text-left rounded-2xl p-6 flex flex-col transition-all"
      style={{
        background: dark ? 'linear-gradient(160deg, #8B7355, #5C4A3A)' : '#fff',
        color: dark ? '#fff' : '#3A3A3A',
        border: selected ? '2px solid #7C8B68' : dark ? '2px solid transparent' : '1px solid #E5DED2',
        boxShadow: selected ? '0 14px 30px -14px rgba(124,139,104,0.45)' : 'none',
      }}
    >
      {suite.badge && (
        <span
          className="self-start text-[11px] font-medium px-3 py-1 rounded-full mb-4"
          style={{ background: 'rgba(232,196,196,0.9)', color: '#5C4A3A' }}
        >
          {suite.badge}
        </span>
      )}
      <p
        className="text-xs uppercase tracking-[2px] mb-3"
        style={{ color: dark ? '#D9CBB8' : '#A8B89C' }}
      >
        {suite.name}
      </p>
      <p className="text-3xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {suite.price}
      </p>
      <p className="text-xs mb-5" style={{ color: dark ? 'rgba(255,255,255,0.65)' : '#3A3A3A99' }}>
        {suite.note}
      </p>
      <ul className="space-y-2.5 flex-1">
        {suite.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <CheckIcon color={dark ? '#D9CBB8' : '#A8B89C'} />
            <span style={{ color: dark ? 'rgba(255,255,255,0.9)' : '#3A3A3A' }}>{f}</span>
          </li>
        ))}
      </ul>
      <span
        className="mt-6 text-center text-sm font-medium py-2.5 rounded-full"
        style={
          selected
            ? { background: '#7C8B68', color: '#fff' }
            : dark
            ? { background: 'rgba(255,255,255,0.12)', color: '#fff' }
            : { background: '#F1F4EE', color: '#7C8B68' }
        }
      >
        {selected ? 'Selected' : 'Choose this suite'}
      </span>
    </button>
  )
}

function DandelionField() {
  const seeds = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${4 + (i * 10) % 94}%`,
    top: `${6 + (i * 13) % 88}%`,
    size: 40 + (i % 3) * 22,
    delay: i * 1.1,
    duration: 16 + (i % 4) * 5,
  }))
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {seeds.map((s) => (
        <motion.img
          key={s.id}
          src="/images/wishes/flower-mark.png"
          alt=""
          style={{ position: 'absolute', left: s.left, top: s.top, width: s.size, height: s.size, opacity: 0.35 }}
          animate={{
            y: [0, -22, -8, -28, 0],
            x: [0, 12, -8, 16, 0],
            rotate: [0, 6, -4, 8, 0],
          }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function StartInvitation() {
  const [form, setForm] = useState({
    coupleNames: '', email: '', phone: '', weddingDate: '',
    venueName: '', venueLocation: '', package: '', style: '',
    palette: '', description: '', notes: '',
  })
  const [features, setFeatures] = useState([])
  const [moodWords, setMoodWords] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  const toggleFrom = (list, setList, value) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])

  const choosePackage = (label) => {
    setForm((f) => ({ ...f, package: label }))
    const el = document.getElementById('invitation-form')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const payload = { ...form, features, moodWords }

    if (ENQUIRY_API_URL.startsWith('PASTE')) {
      // backend not wired up yet — fail gracefully rather than pretend it worked
      setStatus('error')
      return
    }

    try {
      await fetch(ENQUIRY_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      // Apps Script's cross-origin response can't be read by the browser
      // (a Google-side CORS limitation, not a bug in this code) — but the
      // request itself reliably reaches the script and writes to the sheet,
      // confirmed working. So once the request has been sent without a
      // network-level failure, we treat it as a success.
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 bg-[#FAF6F0]">
        <Reveal className="text-center max-w-md">
          <p className="text-4xl mb-4" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>
            Thank you
          </p>
          <h1 className="text-2xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Your details are in
          </h1>
          <p className="text-sm text-[#3A3A3A]/70">
            I&apos;ll be in touch within 24 hours to talk through your invitation. In the meantime,
            feel free to WhatsApp me directly if anything comes to mind.
          </p>
        </Reveal>
      </div>
    )
  }

  return (
    <div className="bg-[#FAF6F0] text-[#3A3A3A] min-h-screen relative">
      <DandelionField />

      <div className="max-w-2xl mx-auto px-6 pt-16 relative" style={{ zIndex: 1 }}>
        <Reveal className="text-center mb-14">
          <img
            src="/images/wishes/lettermark.png"
            alt="Dandelion Wishes"
            className="w-28 h-auto mx-auto mb-6"
          />
          <p className="text-2xl mb-3" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>
            Let&apos;s create something uniquely yours
          </p>
          <h1 className="text-3xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Tell me about your invitation
          </h1>
          <p className="text-sm text-[#3A3A3A]/70 max-w-md mx-auto">
            A few quick questions — nothing here is final. This just gives me a starting point
            before we talk properly.
          </p>
        </Reveal>
      </div>

      {/* Packages — shown up front so a couple can see what's on offer
          before filling anything in. Choosing a card pre-selects that
          package below and scrolls straight to the form. */}
      <div className="max-w-5xl mx-auto px-6 pb-16 relative" style={{ zIndex: 1 }}>
        <Reveal className="text-center mb-10">
          <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-2">What we offer</p>
          <p className="text-sm text-[#3A3A3A]/70">One payment per wedding. No subscriptions, ever.</p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5 items-start">
          {pricingSuites.map((s) => (
            <Reveal key={s.name} delay={0.05}>
              <PackageCard
                suite={s}
                selected={form.package.startsWith(s.name)}
                onChoose={() => choosePackage(`${s.name} — ${s.price}`)}
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="text-center text-xs text-[#3A3A3A]/60 mt-6">
            Not sure which one fits? Pick &quot;I&apos;m not sure yet&quot; in the form below and
            we&apos;ll figure it out together.
          </p>
        </Reveal>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-16 relative" style={{ zIndex: 1 }}>
        <form id="invitation-form" onSubmit={handleSubmit} className="space-y-10">
          {/* Basics */}
          <Reveal>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">The basics</p>
            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Your names</label>
                <input required value={form.coupleNames} onChange={update('coupleNames')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" placeholder="e.g. Emma & James" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#8B7355] mb-1 block">Email</label>
                  <input required type="email" value={form.email} onChange={update('email')}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" />
                </div>
                <div>
                  <label className="text-xs text-[#8B7355] mb-1 block">Phone / WhatsApp</label>
                  <input value={form.phone} onChange={update('phone')}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Wedding date (or rough idea)</label>
                <input value={form.weddingDate} onChange={update('weddingDate')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#8B7355] mb-1 block">Venue</label>
                  <input value={form.venueName} onChange={update('venueName')}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" />
                </div>
                <div>
                  <label className="text-xs text-[#8B7355] mb-1 block">Location</label>
                  <input value={form.venueLocation} onChange={update('venueLocation')}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Package */}
          <Reveal delay={0.05}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Which package interests you?</p>
            <div className="flex flex-wrap gap-2">
              {packages.map((p) => (
                <Toggle key={p} label={p} selected={form.package === p} onClick={() => setForm((f) => ({ ...f, package: p }))} />
              ))}
            </div>
          </Reveal>

          {/* Style */}
          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Which style feels most like you?</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {styles.map((s) => (
                <button
                  type="button"
                  key={s.label}
                  onClick={() => setForm((f) => ({ ...f, style: s.label }))}
                  className="text-left rounded-xl overflow-hidden border transition-colors"
                  style={
                    form.style === s.label
                      ? { borderColor: '#7C8B68', background: '#F1F4EE' }
                      : { borderColor: '#E5DED2', background: '#fff' }
                  }
                >
                  <img src={s.image} alt={s.label} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <p className="text-sm font-medium text-[#5C4A3A]">{s.label}</p>
                    <p className="text-xs text-[#A8B89C] mt-1">{s.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Palette */}
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Colour palette</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {palettes.map((p) => (
                <button
                  type="button"
                  key={p.label}
                  onClick={() => setForm((f) => ({ ...f, palette: p.label }))}
                  className="text-left rounded-xl p-4 border transition-colors"
                  style={
                    form.palette === p.label
                      ? { borderColor: '#7C8B68', background: '#F1F4EE' }
                      : { borderColor: '#E5DED2', background: '#fff' }
                  }
                >
                  <div className="flex gap-1.5 mb-2">
                    {p.colors.map((c, i) => (
                      <span key={i} className="w-6 h-6 rounded-full" style={{ background: c, border: '1px solid #E5DED2' }} />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-[#5C4A3A]">{p.label}</p>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Features */}
          <Reveal delay={0.2}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">
              What would you like included? <span className="normal-case text-[#A8B89C]">(pick as many as you like)</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {featureOptions.map((f) => (
                <Toggle key={f} label={f} selected={features.includes(f)} onClick={() => toggleFrom(features, setFeatures, f)} />
              ))}
            </div>
          </Reveal>

          {/* Mood */}
          <Reveal delay={0.25}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Set the mood</p>
            <div className="flex flex-wrap gap-2">
              {moodOptions.map((m) => (
                <Toggle key={m} label={m} selected={moodWords.includes(m)} onClick={() => toggleFrom(moodWords, setMoodWords, m)} />
              ))}
            </div>
          </Reveal>

          {/* Open text */}
          <Reveal delay={0.3}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Tell me a little more</p>
            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Describe your wedding in a sentence</label>
                <input value={form.description} onChange={update('description')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" />
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Anything else I should know?</label>
                <textarea value={form.notes} onChange={update('notes')} rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm resize-y" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-full font-medium text-white disabled:opacity-60"
              style={{ background: '#7C8B68' }}
            >
              {status === 'sending' ? 'Sending...' : 'Send my details'}
            </button>
            {status === 'error' && (
              <p className="text-sm text-center mt-4" style={{ color: '#8B4A4A' }}>
                Something didn&apos;t go through — please{' '}
                <a href="https://wa.me/27728393087" className="underline">
                  WhatsApp me directly
                </a>{' '}
                instead for now.
              </p>
            )}
          </Reveal>
        </form>
      </div>
    </div>
  )
}