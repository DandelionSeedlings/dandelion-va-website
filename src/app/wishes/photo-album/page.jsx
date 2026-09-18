'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'
import { GoldDividerImg, DriftingSignatureSeed, StarAccent } from '../../../components/wishes/WishesDecor'

// Same central intake endpoint the invitation "Start Your Invitation" form
// posts to — this form just tags its payload with a different enquiryType
// so it lands on the Photo Album Enquiries tab instead.
const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

const LIVE_EXAMPLE_GALLERY_URL = 'https://script.google.com/macros/s/AKfycbwDgtDpVXkH4vofVddBdIvtE1O1zeeSebBVWfxlzCCt7Ogz7uPxJCecLiMvIekkmE5LIA/exec?page=gallery'
const LIVE_EXAMPLE_QR = '/images/wishes/decorations/photo-album-qr.png'

const steps = [
  { n: '1', title: 'Guests scan', desc: 'A QR code on your table cards or venue sign, no app to download.' },
  { n: '2', title: 'Photos upload', desc: 'Straight from their phone, resized automatically so it stays fast even on venue wifi.' },
  { n: '3', title: 'Wall goes live', desc: 'Every photo appears on a shared gallery within about 12 seconds.' },
  { n: '4', title: 'You keep them', desc: 'Your gallery stays live for 30 days after the wedding so you can download your favourites.' },
]

const accentSwatches = [
  { label: 'Coastal Teal', hex: '#507F82' },
  { label: 'Sage', hex: '#7C8B68' },
  { label: 'Blush', hex: '#E8C4C4' },
  { label: 'Champagne', hex: '#D4C4A0' },
]

export default function PhotoAlbumPage() {
  const [form, setForm] = useState({
    coupleNames: '', email: '', phone: '', weddingDate: '', accentColor: '', notes: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const payload = { ...form, enquiryType: 'photo-album-standalone', package: 'Standalone Photo Album (R750)' }
    try {
      await fetch(ENQUIRY_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <>
        <WishesNav />
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-[#FAF6F0]">
          <Reveal className="text-center max-w-md">
            <p className="text-4xl mb-4" style={{ fontFamily: "'Alex Brush', cursive", color: '#507F82' }}>
              Thank you
            </p>
            <h1 className="text-2xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your order is in
            </h1>
            <p className="text-sm text-[#3A3A3A]/70">
              I&apos;ll set up your gallery and be in touch within 24 hours with your upload
              link, QR code, and table card. WhatsApp me directly if anything comes to mind
              before then.
            </p>
          </Reveal>
        </div>
        <WishesFooter />
      </>
    )
  }

  return (
    <>
      <WishesNav />

      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg,#507F82,#31494B)' }}>
        <DriftingSignatureSeed size={80} style={{ top: 20, right: 30, opacity: 0.18 }} duration={16} />
        <DriftingSignatureSeed size={54} style={{ bottom: 24, left: 24, opacity: 0.14 }} duration={13} delay={2} />
        <Reveal className="max-w-2xl mx-auto relative z-10">
          <p className="uppercase tracking-[3px] text-xs mb-5 text-white/70">Guest Photo Album</p>
          <h1 className="text-4xl md:text-5xl leading-[1.15] mb-6 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            One QR code.
            <br />
            Every guest&apos;s photos.
            <br />
            <span className="italic opacity-90">One shared gallery, live.</span>
          </h1>
          <p className="max-w-md mx-auto leading-relaxed mb-9 text-white/85">
            No app, no account, no waiting weeks for guests to send their photos. They scan,
            they upload, everyone watches the gallery fill up in real time.
          </p>
          <a
            href="#order"
            className="inline-block px-8 py-4 rounded-full font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.5)' }}
          >
            Order your Photo Album
          </a>
          <p className="mt-6 text-xs text-white/60 flex items-center justify-center gap-2">
            <StarAccent size={10} />
            R750 standalone, or R350 added to any invitation
            <StarAccent size={10} />
          </p>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-4">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>How it works</h2>
            <GoldDividerImg width={90} center opacity={0.65} className="mt-4" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#507F82]/15 text-[#507F82] flex items-center justify-center mx-auto mb-3 font-medium">
                  {s.n}
                </div>
                <p className="font-medium text-[#5C4A3A] mb-1">{s.title}</p>
                <p className="text-sm text-[#3A3A3A]/70">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live example */}
      <section className="py-20 px-6 bg-white/60">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            See it working right now
          </h2>
          <p className="text-[#3A3A3A]/75 mb-8 max-w-md mx-auto">
            This is a real, live gallery from a real wedding. Scan the code with your phone or
            tap through to see the wall itself.
          </p>
          <div className="flex flex-col items-center gap-4">
            <img src={LIVE_EXAMPLE_QR} alt="Scan to see a live example gallery" className="w-40 h-40 rounded-xl border border-[#E5DED2]" />
            <a href={LIVE_EXAMPLE_GALLERY_URL} target="_blank" rel="noopener noreferrer" className="text-sm underline text-[#507F82]">
              Or tap here to view the live wall →
            </a>
          </div>
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Pricing</h2>
            <GoldDividerImg width={90} center opacity={0.65} className="mt-4" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-7">
            <Reveal>
              <div className="rounded-[1.5rem] p-8 bg-white border border-[#E5DED2] h-full flex flex-col">
                <p className="uppercase tracking-[2px] text-xs mb-2 text-[#A8B89C]">Standalone</p>
                <p className="font-serif text-4xl mb-1 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>R750</p>
                <p className="text-xs mb-6 text-[#A8B89C]">once-off, no Dandelion Wishes invitation needed</p>
                <ul className="space-y-2.5 text-sm flex-1 text-[#3A3A3A]/85">
                  <li className="flex gap-2"><span className="text-[#507F82]">✦</span>Fully branded to your couple, colours, and wording</li>
                  <li className="flex gap-2"><span className="text-[#507F82]">✦</span>QR code + printable table card</li>
                  <li className="flex gap-2"><span className="text-[#507F82]">✦</span>Live gallery, updates automatically</li>
                  <li className="flex gap-2"><span className="text-[#507F82]">✦</span>30 days live after your wedding to download everything</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[1.5rem] p-8 text-white h-full flex flex-col" style={{ background: 'linear-gradient(160deg,#507F82,#31494B)' }}>
                <p className="uppercase tracking-[2px] text-xs mb-2 opacity-70">With an invitation</p>
                <p className="font-serif text-4xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>R350</p>
                <p className="text-xs mb-6 opacity-60">added to any Dandelion Wishes invitation package</p>
                <ul className="space-y-2.5 text-sm flex-1 opacity-90">
                  <li className="flex gap-2"><span className="text-[#E8C4C4]">✦</span>Everything in Standalone</li>
                  <li className="flex gap-2"><span className="text-[#E8C4C4]">✦</span>Matches your invitation&apos;s theme automatically</li>
                  <li className="flex gap-2"><span className="text-[#E8C4C4]">✦</span>Linked straight from your invitation page</li>
                </ul>
                <a href="/wishes#pricing" className="mt-6 text-sm underline text-white/90">
                  See invitation packages →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl mb-3 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Order your Photo Album
            </h2>
            <p className="text-sm text-[#3A3A3A]/70">
              A few details so I can set up and brand your gallery. I&apos;ll be in touch
              within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 space-y-4">
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Your names</label>
                <input required value={form.coupleNames} onChange={update('coupleNames')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" placeholder="e.g. Mark & Sammy" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#8B7355] mb-1 block">Email</label>
                  <input required type="email" value={form.email} onChange={update('email')}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" />
                  <p className="text-[11px] text-[#3A3A3A]/50 mt-1">So we can send your gallery link and a reminder before it closes.</p>
                </div>
                <div>
                  <label className="text-xs text-[#8B7355] mb-1 block">Phone / WhatsApp</label>
                  <input value={form.phone} onChange={update('phone')}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Wedding date</label>
                <input value={form.weddingDate} onChange={update('weddingDate')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" placeholder="e.g. 28 March 2027" />
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Preferred accent colour</label>
                <input value={form.accentColor} onChange={update('accentColor')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm mb-2" placeholder="A hex code, or just describe it" />
                <div className="flex gap-2 flex-wrap">
                  {accentSwatches.map((s) => (
                    <button
                      type="button"
                      key={s.hex}
                      onClick={() => setForm((f) => ({ ...f, accentColor: `${s.label} (${s.hex})` }))}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border border-[#E5DED2]"
                    >
                      <span className="w-3 h-3 rounded-full" style={{ background: s.hex }} />
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Anything else I should know?</label>
                <textarea value={form.notes} onChange={update('notes')} rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm resize-y" />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-full font-medium text-white disabled:opacity-60"
                style={{ background: '#507F82' }}
              >
                {status === 'sending' ? 'Sending…' : 'Send my order'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-center" style={{ color: '#8B4A4A' }}>
                  Something didn&apos;t go through, please{' '}
                  <a href="https://wa.me/27728393087" className="underline">WhatsApp me directly</a>{' '}
                  instead for now.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <WishesFooter />
    </>
  )
}