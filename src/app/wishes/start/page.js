'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../../../components/wishes/Reveal'

// TODO: after deploying Code.gs as a web app (see the setup notes), paste
// the resulting /exec URL here.
const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

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
      const res = await fetch(ENQUIRY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      const result = await res.json()
      setStatus(result.success ? 'success' : 'error')
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
      <div className="max-w-2xl mx-auto px-6 py-16 relative" style={{ zIndex: 1 }}>
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

        <form onSubmit={handleSubmit} className="space-y-10">
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