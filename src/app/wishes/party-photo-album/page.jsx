'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'
import { GoldDividerImg, StarAccent } from '../../../components/wishes/WishesDecor'

// Same central intake endpoint as the invitation and wedding photo-album
// forms — this one just tags itself with an eventType so it's easy to
// tell apart in the sheet.
const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

const LIVE_EXAMPLE_GALLERY_URL = 'https://script.google.com/macros/s/AKfycbwDgtDpVXkH4vofVddBdIvtE1O1zeeSebBVWfxlzCCt7Ogz7uPxJCecLiMvIekkmE5LIA/exec?page=gallery'
const PAYMENT_QR = '/images/wishes/decorations/photo-album-payment-qr.jpg'

// Party/matric photo pack — placeholder imagery until real client photos
// come in from a matric client, the way theone-and-ra's real photos
// eventually replaced the cartoon-collage placeholders there.
const HERO_PHOTO_DANCING = '/images/wishes/party-album/hero-dancing.png'
const HERO_PHOTO_PHOTOBOOTH = '/images/wishes/party-album/hero-photobooth.png'
const SCATTER_PHOTO_PORTRAIT = '/images/wishes/party-album/scatter-portrait.png'
const GALLERY_MOCKUP_PHONES = '/images/wishes/party-album/gallery-mockup.png'

const eventTypes = ['Matric Farewell', 'Birthday Party', 'Corporate Event', 'Other Celebration']

const memoryBloomSteps = [
  { n: 'SCAN', title: 'One QR code', desc: 'On the table or at the entrance, no app to download.' },
  { n: 'SNAP', title: 'Guests take the shot', desc: 'Or choose a favourite from their camera roll.' },
  { n: 'SHARE', title: 'It joins the wall', desc: 'Every photo lands on one shared, live gallery instantly.' },
  { n: 'BLOOM', title: 'Live for 30 days', desc: 'A full month to revisit and download every memory.' },
]

const differentiators = ['Unlimited guest uploads', 'No app required', '30 days live']

export default function PartyPhotoAlbumPage() {
  const [form, setForm] = useState({
    eventName: '', eventType: eventTypes[0], email: '', phone: '', eventDate: '', accentColor: '', notes: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const payload = { ...form, enquiryType: 'photo-album-standalone', package: 'MemoryBloom — Party Special (R350)' }
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
            <p className="text-4xl mb-4" style={{ fontFamily: "'Alex Brush', cursive", color: '#7C8B68' }}>
              Thank you
            </p>
            <h1 className="text-2xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your order is in
            </h1>
            <p className="text-sm text-[#3A3A3A]/70 mb-2">
              Once we can see your payment&apos;s gone through, we&apos;ll set up your MemoryBloom
              album and send your QR code and link within 24 hours.
            </p>
            <p className="text-sm text-[#3A3A3A]/70">
              Paid already? WhatsApp your proof of payment to{' '}
              <a href="https://wa.me/27728393087" className="underline">072 839 3087</a> to speed things up.
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
      <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(160deg,#7C8B68,#5C6B4E)' }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <Reveal className="text-center lg:text-left relative z-10">
            <p className="uppercase tracking-[3px] text-xs mb-5 text-white/70">Matric Farewells · Parties · Celebrations</p>
            <p className="text-3xl mb-2 text-white" style={{ fontFamily: "'Alex Brush', cursive" }}>MemoryBloom 🌼</p>
            <h1 className="text-4xl md:text-5xl leading-[1.15] mb-6 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Every moment.
              <br />
              One beautiful place.
            </h1>
            <p className="max-w-md mx-auto lg:mx-0 leading-relaxed mb-5 text-white/85">
              One QR code. Every guest&apos;s photos land on one shared, live gallery, no group
              chats, no waiting for someone to airdrop the good ones.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-9">
              {differentiators.map((d) => (
                <span key={d} className="text-xs px-3.5 py-1.5 rounded-full bg-white/15 text-white">
                  {d}
                </span>
              ))}
            </div>
            <a
              href="#order"
              className="inline-block px-8 py-4 rounded-full font-medium shadow-lg transition-transform hover:-translate-y-0.5"
              style={{ background: '#FAF6F0', color: '#5C4A3A' }}
            >
              Get MemoryBloom — R350
            </a>
            <p className="text-sm text-white/70 flex items-center justify-center lg:justify-start gap-2 mt-4">
              <StarAccent size={11} />
              Launch special for matric farewells &amp; parties
              <StarAccent size={11} />
            </p>
          </Reveal>

          {/* Photo collage — two overlapping "tossed down" photos */}
          <Reveal delay={0.15} className="relative z-10 mx-auto lg:mx-0" style={{ width: 280, height: 320 }}>
            <motion.div
              initial={{ rotate: -6 }}
              whileInView={{ rotate: -6 }}
              className="absolute top-0 left-0 rounded-lg overflow-hidden bg-white p-2 shadow-2xl"
              style={{ width: 190, transform: 'rotate(-6deg)' }}
            >
              <img src={HERO_PHOTO_PHOTOBOOTH} alt="" className="w-full h-44 object-cover rounded" />
            </motion.div>
            <motion.div
              initial={{ rotate: 5 }}
              whileInView={{ rotate: 5 }}
              className="absolute bottom-0 right-0 rounded-lg overflow-hidden bg-white p-2 shadow-2xl"
              style={{ width: 190, transform: 'rotate(5deg)' }}
            >
              <img src={HERO_PHOTO_DANCING} alt="" className="w-full h-44 object-cover rounded" />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SCAN SNAP SHARE BLOOM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-4">
            <p className="text-2xl mb-3" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>
              The MemoryBloom promise
            </p>
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Scan. Snap. Share. Bloom. 🌼
            </h2>
            <p className="text-sm text-[#3A3A3A]/70 max-w-md mx-auto mt-4">
              No limits on how many photos your guests can contribute. No rushing to save
              everything the next day. Just 30 days to relive, download and enjoy the memories.
            </p>
            <GoldDividerImg width={90} center opacity={0.65} className="mt-6" />
          </Reveal>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-center mt-12">
            <Reveal className="hidden md:block mx-auto" style={{ width: 150 }}>
              <div
                className="rounded-lg overflow-hidden bg-white p-2 shadow-xl"
                style={{ transform: 'rotate(-4deg)' }}
              >
                <img src={SCATTER_PHOTO_PORTRAIT} alt="" className="w-full h-40 object-cover rounded" />
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-8">
              {memoryBloomSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.1} className="text-center sm:text-left">
                  <p
                    className="text-xs tracking-[3px] mb-2"
                    style={{ color: '#7C8B68', fontWeight: 600 }}
                  >
                    {s.n}
                  </p>
                  <p className="font-medium text-[#5C4A3A] mb-1">{s.title}</p>
                  <p className="text-sm text-[#3A3A3A]/70">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live example */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className="text-2xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              See it working right now
            </h2>
            <p className="text-[#3A3A3A]/75 mb-6 max-w-md">
              This is what it actually looks like on a guest&apos;s phone, upload on the left,
              live wall on the right. Same system, just branded for a real event. Yours gets your
              own colours and event name instead.
            </p>
            <a href={LIVE_EXAMPLE_GALLERY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block text-sm px-6 py-3 rounded-full border border-[#7C8B68] text-[#7C8B68]">
              View the live wall →
            </a>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <img
              src={GALLERY_MOCKUP_PHONES}
              alt="Upload and gallery screens on a phone"
              className="w-full max-w-sm rounded-2xl"
              style={{ boxShadow: '0 25px 50px -20px rgba(92,74,58,0.3)' }}
            />
          </Reveal>
        </div>
      </section>

      {/* Pricing + Payment */}
      <section id="pricing" className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="uppercase tracking-[2px] text-xs mb-2 text-[#A8B89C]">Launch Special</p>
            <p className="text-xs line-through opacity-50 mb-1">Usually R750</p>
            <p className="text-5xl mb-2 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>R350</p>
            <p className="text-sm text-[#3A3A3A]/70 mb-2">For matric farewells, birthdays &amp; parties, for a limited time</p>
            <p className="text-xs text-[#7C8B68] mb-8">Unlimited guest uploads · Live for 30 days</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-6 inline-block">
              <img src={PAYMENT_QR} alt="Scan to pay" className="w-48 h-48 mx-auto rounded-lg" />
              <p className="text-xs text-[#3A3A3A]/60 mt-3">Scan to pay R350</p>
            </div>
            <p className="text-xs text-[#3A3A3A]/70 mt-5 mb-3 max-w-xs mx-auto">
              Paid? Send your proof of payment and we&apos;ll get your MemoryBloom album set up
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
              <a
                href={`https://wa.me/27728393087?text=${encodeURIComponent('Hi! Here is my proof of payment for the MemoryBloom special (R350).')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-sm px-5 py-3 rounded-full font-medium text-white text-center"
                style={{ background: '#7C8B68' }}
              >
                Send via WhatsApp
              </a>
              <a
                href="mailto:dandelioncreat@outlook.com?subject=Proof%20of%20Payment%20%E2%80%94%20MemoryBloom%20Special&body=Hi%2C%20please%20find%20my%20proof%20of%20payment%20attached%20for%20the%20R350%20MemoryBloom%20special."
                className="flex-1 text-sm px-5 py-3 rounded-full font-medium border text-center"
                style={{ borderColor: '#7C8B68', color: '#7C8B68' }}
              >
                Send via Email
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl mb-3 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Tell us about your event
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 space-y-4">
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Event name</label>
                <input required value={form.eventName} onChange={update('eventName')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" placeholder="e.g. Grey High Matric Farewell 2027" />
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Event type</label>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setForm((f) => ({ ...f, eventType: t }))}
                      className="px-4 py-2 rounded-full text-sm border transition-colors"
                      style={
                        form.eventType === t
                          ? { background: '#7C8B68', color: '#fff', borderColor: '#7C8B68' }
                          : { background: '#fff', color: '#8B7355', borderColor: '#E5DED2' }
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
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
                <label className="text-xs text-[#8B7355] mb-1 block">Event date</label>
                <input value={form.eventDate} onChange={update('eventDate')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" placeholder="e.g. 14 November 2026" />
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Preferred accent colour</label>
                <input value={form.accentColor} onChange={update('accentColor')}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm" placeholder="Your theme colour, or just describe it" />
              </div>
              <div>
                <label className="text-xs text-[#8B7355] mb-1 block">Anything else?</label>
                <textarea value={form.notes} onChange={update('notes')} rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm resize-y" />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-full font-medium text-white disabled:opacity-60"
                style={{ background: '#7C8B68' }}
              >
                {status === 'sending' ? 'Sending…' : 'Send my order'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-center" style={{ color: '#8B4A4A' }}>
                  Something didn&apos;t go through, please{' '}
                  <a href="https://wa.me/27728393087" className="underline">WhatsApp us directly</a>{' '}
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