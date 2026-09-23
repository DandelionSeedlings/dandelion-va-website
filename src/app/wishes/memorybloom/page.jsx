'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'
import { GoldDividerImg, DriftingSignatureSeed, StarAccent, BloomIcon } from '../../../components/wishes/WishesDecor'

const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'
const LIVE_EXAMPLE_GALLERY_URL = 'https://script.google.com/macros/s/AKfycbwDgtDpVXkH4vofVddBdIvtE1O1zeeSebBVWfxlzCCt7Ogz7uPxJCecLiMvIekkmE5LIA/exec?page=gallery'
const LIVE_EXAMPLE_QR = '/images/wishes/decorations/photo-album-qr.png'

// Placeholder photo pack — same pack used for the party hero collage.
// Stands in for real client photos until MemoryBloom has been used at a
// few live events and we can swap in genuine gallery shots.
const HERO_PHOTO_DANCING = '/images/wishes/party-album/hero-dancing.png'
const HERO_PHOTO_PHOTOBOOTH = '/images/wishes/party-album/hero-photobooth.png'
const SCATTER_PHOTO_PORTRAIT = '/images/wishes/party-album/scatter-portrait.png'

const eventTypes = ['Wedding', 'Matric Farewell', 'Birthday Party', 'Corporate Event', 'Other Celebration']
const differentiators = ['Unlimited guest uploads', 'No app required', '30 days live']

const memoryBloomSteps = [
  { n: 'SCAN', title: 'One QR code', desc: 'On the table or at the entrance, no app to download.' },
  { n: 'SNAP', title: 'Guests take the shot', desc: 'Or choose a favourite from their camera roll.' },
  { n: 'SHARE', title: 'It joins the wall', desc: 'Every photo lands on one shared, live gallery.' },
  { n: 'BLOOM', title: 'Live for 30 days', desc: 'A full month to revisit and download every memory.' },
]

const timeline = [
  { time: '7:42 PM', text: 'Someone scans the MemoryBloom QR code.' },
  { time: '7:43 PM', text: 'They upload a photo of their friends laughing.' },
  { time: '7:44 PM', text: 'Someone across the room sees it appear on the live screen.' },
  { time: '8:16 PM', text: 'There are already dozens of moments in the gallery.' },
  { time: 'Next morning', text: 'Everyone can revisit the memories, and keep adding more.' },
]

const comparisonRows = [
  { generic: 'May need an app or account', bloom: 'No app required' },
  { generic: 'Uploads are often capped', bloom: 'Unlimited guest uploads' },
  { generic: 'Gallery disappears quickly', bloom: 'Stays live for 30 days' },
  { generic: 'Generic, unbranded interface', bloom: 'Styled for your event' },
  { generic: 'Just a photo dump', bloom: 'Live reception wall' },
  { generic: 'Digital-only', bloom: 'Printable QR signage included' },
]

const eventStyles = [
  { label: 'Wedding', note: 'Soft blush, champagne tones', colors: ['#E8C4C4', '#D4C4A0'] },
  { label: 'Matric Farewell', note: 'School colours, bold type', colors: ['#7C3AED', '#F3ECE3'] },
  { label: 'Birthday', note: 'Bright, playful accents', colors: ['#F2A65A', '#7C8B68'] },
  { label: 'Corporate', note: 'Brand colours, polished', colors: ['#507F82', '#31494B'] },
]

const receiveItems = [
  { n: '01', title: 'Your private gallery', desc: 'A dedicated photo-sharing experience for your event.' },
  { n: '02', title: 'Your unique QR code', desc: 'Guests scan it and start uploading straight away.' },
  { n: '03', title: 'Unlimited uploads', desc: 'No cap on how many photos each guest can add.' },
  { n: '04', title: 'Live gallery wall', desc: 'New photos appear within seconds for everyone to watch.' },
  { n: '05', title: 'Host controls', desc: 'Moderate photos before they go live, if you want to.' },
  { n: '06', title: 'Printable QR signage', desc: 'Ready to place on tables or at your venue entrance.' },
  { n: '07', title: '30 days online', desc: 'Plus a one-click ZIP download of every photo, whenever you\u2019re ready.' },
  { n: '08', title: 'Your event styling', desc: 'Colours, event name and visual details set up for you.' },
]

const faqs = [
  { q: 'Do guests need to download an app or register?', a: 'No. The entire experience works in any mobile browser. Guests scan the QR code and can start uploading immediately.' },
  { q: 'Can guests upload more than once?', a: 'Yes. There\u2019s no guest upload limit, they can keep adding photos throughout the event.' },
  { q: 'How long does my gallery stay available?', a: 'It stays live for 30 days after your event, giving everyone time to revisit and download their favourites.' },
  { q: 'What if venue Wi-Fi or cellular connection is slow?', a: 'Photos are compressed on the guest\u2019s phone before sending, so uploads stay quick even on crowded venue networks.' },
  { q: 'Can I control which photos appear?', a: 'Yes, through the moderation tools in your private host portal — approve or hide anything before it goes live.' },
  { q: 'How do I download everything afterward?', a: 'One click in your private host portal packages every photo into a single ZIP file.' },
  { q: 'Is MemoryBloom only for weddings?', a: 'No. The same system works for matric farewells, birthdays, baby showers, corporate functions, and more.' },
]

const accentSwatches = [
  { label: 'Coastal Teal', hex: '#507F82' },
  { label: 'Sage', hex: '#7C8B68' },
  { label: 'Blush', hex: '#E8C4C4' },
  { label: 'Champagne', hex: '#D4C4A0' },
]

// Faked "live" gallery preview — reuses the placeholder photo pack in a
// repeating pattern, with a ticking counter and a pulsing "new memory"
// indicator, to give visitors the feel of the real live wall without
// pretending this specific grid is a genuine event.
function LiveGalleryPreview() {
  const [count, setCount] = useState(127)
  const photos = [
    HERO_PHOTO_DANCING, HERO_PHOTO_PHOTOBOOTH, SCATTER_PHOTO_PORTRAIT,
    HERO_PHOTO_PHOTOBOOTH, HERO_PHOTO_DANCING, SCATTER_PHOTO_PORTRAIT,
    HERO_PHOTO_DANCING, HERO_PHOTO_PHOTOBOOTH,
  ]

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="rounded-3xl p-6 sm:p-8" style={{ background: 'linear-gradient(165deg, #3A5254 0%, #507F82 60%, #293B3C 100%)' }}>
      <div className="text-center mb-6">
        <p className="text-white text-xs uppercase tracking-[3px] opacity-75 mb-1">MemoryBloom</p>
        <p className="text-white text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Live Event Gallery</p>
        <p className="text-white/70 text-xs mt-2 flex items-center justify-center gap-2">
          <StarAccent size={9} /> {count} memories collected <StarAccent size={9} />
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        {photos.map((src, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="text-center text-white/70 text-xs mt-5"
      >
        New memory just added
      </motion.p>
      <p className="text-center text-white/40 text-[10px] mt-3">
        Example gallery for illustration — try the real thing below
      </p>
    </div>
  )
}

export default function MemoryBloomPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({
    eventName: '', eventType: eventTypes[0], email: '', phone: '', eventDate: '', accentColor: '', notes: '',
  })
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const payload = { ...form, enquiryType: 'photo-album-standalone', package: 'MemoryBloom — Launch Special (R350)' }
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
        <div className="min-h-[75vh] flex items-center justify-center px-6 bg-[#FAF6F0]">
          <Reveal className="text-center max-w-md bg-white p-10 rounded-3xl border border-[#E5DED2] shadow-xl">
            <div className="w-14 h-14 rounded-full bg-[#507F82]/10 text-[#507F82] flex items-center justify-center mx-auto mb-4">
              <BloomIcon size={30} />
            </div>
            <h1 className="text-3xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your order is confirmed
            </h1>
            <p className="text-sm text-[#3A3A3A]/75 leading-relaxed mb-6">
              I&apos;m setting up your MemoryBloom gallery and will be in touch within 24 hours with
              your live links, QR code, and matching printable table cards.
            </p>
            <a href={LIVE_EXAMPLE_GALLERY_URL} target="_blank" rel="noreferrer" className="inline-block text-xs uppercase tracking-widest text-[#507F82] font-semibold border-b border-[#507F82]">
              Explore Demo Gallery
            </a>
          </Reveal>
        </div>
        <WishesFooter />
      </>
    )
  }

  return (
    <>
      <WishesNav />

      {/* Hero — still image, poster-style, ready to swap for video later */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_PHOTO_DANCING} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(165deg, rgba(58,82,84,0.88) 0%, rgba(80,127,130,0.82) 55%, rgba(41,59,60,0.92) 100%)' }} />
        </div>
        <DriftingSignatureSeed size={90} style={{ top: '8%', right: '5%', opacity: 0.15 }} duration={18} />
        <DriftingSignatureSeed size={60} style={{ bottom: '10%', left: '4%', opacity: 0.12 }} duration={14} delay={2} />

        <Reveal className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4 text-white">
            <BloomIcon size={20} />
            <p className="text-2xl" style={{ fontFamily: "'Alex Brush', cursive" }}>MemoryBloom</p>
          </div>

          <h1 className="text-4xl sm:text-6xl leading-[1.1] mb-5 text-white font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Every photo tells part of the story.
            <br />
            MemoryBloom brings them all together.
          </h1>

          <p className="text-white/85 text-sm tracking-[4px] uppercase mb-8">
            Scan &middot; Snap &middot; Share &middot; Bloom
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {differentiators.map((d) => (
              <span key={d} className="text-xs px-3.5 py-1.5 rounded-full bg-white/15 text-white">
                {d}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="#order"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white shadow-xl transition-all duration-300 hover:scale-105"
              style={{ background: '#7C8B68', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Create My MemoryBloom
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all"
            >
              Try the Live Demo
            </a>
          </div>

          <p className="text-white/70 text-xs">
            Usually <span className="line-through opacity-60">R750</span>{' '}
            <span className="font-semibold text-white">R350</span> — launch special, limited time
          </p>
        </Reveal>
      </section>

      {/* Live experience preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">Your event, live</p>
            <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your event. Your photos. Happening live.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <LiveGalleryPreview />
          </Reveal>
        </div>
      </section>

      {/* The story timeline */}
      <section className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-2xl mb-2" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>Imagine this</p>
          </Reveal>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <Reveal key={t.time} delay={i * 0.08}>
                <div className="flex gap-4 items-start">
                  <p className="text-xs uppercase tracking-wide text-[#507F82] font-semibold w-24 flex-shrink-0 pt-0.5">{t.time}</p>
                  <p className="text-sm text-[#3A3A3A]/85">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCAN SNAP SHARE BLOOM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <BloomIcon size={20} style={{ color: '#8B7355' }} />
              <p className="text-2xl" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>
                The MemoryBloom promise
              </p>
            </div>
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Scan. Snap. Share. Bloom.
            </h2>
            <GoldDividerImg width={90} center opacity={0.65} className="mt-6" />
          </Reveal>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-center mt-12">
            <Reveal className="hidden md:block mx-auto" style={{ width: 150 }}>
              <div className="rounded-lg overflow-hidden bg-white p-2 shadow-xl border border-[#E5DED2]" style={{ transform: 'rotate(-4deg)' }}>
                <img src={SCATTER_PHOTO_PORTRAIT} alt="" className="w-full h-40 object-cover rounded" />
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-8">
              {memoryBloomSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.1} className="text-center sm:text-left">
                  <p className="text-xs tracking-[3px] mb-2" style={{ color: '#7C8B68', fontWeight: 600 }}>{s.n}</p>
                  <p className="font-medium text-[#5C4A3A] mb-1">{s.title}</p>
                  <p className="text-sm text-[#3A3A3A]/70">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* One night, unlimited memories */}
      <section className="py-20 px-6 text-center" style={{ background: 'linear-gradient(160deg, #507F82 0%, #31494B 100%)' }}>
        <Reveal className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            One night.
            <br />
            Unlimited memories.
          </h2>
          <p className="text-white/80 text-sm max-w-md mx-auto">
            No per-guest upload limits. Guests can keep sharing throughout the event without
            ever worrying about reaching an allowance.
          </p>
        </Reveal>
      </section>

      {/* The party ends, the memories don't */}
      <section className="py-20 px-6 bg-white">
        <Reveal className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl text-[#5C4A3A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The party ends.
            <br />
            The memories don&apos;t.
          </h2>
          <p className="text-sm text-[#3A3A3A]/70 max-w-md mx-auto">
            Your MemoryBloom gallery stays live for 30 days, giving you time to revisit the
            photos, share them with family and friends, and download every one when you&apos;re ready.
          </p>
        </Reveal>
      </section>

      {/* Why MemoryBloom feels different */}
      <section className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Why MemoryBloom feels different
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E5DED2] shadow-sm">
              <div className="grid grid-cols-2 text-xs uppercase tracking-wide font-semibold" style={{ background: '#FAF6F0' }}>
                <p className="p-4 text-[#3A3A3A]/60">A typical photo-sharing tool</p>
                <p className="p-4 text-[#507F82]">MemoryBloom</p>
              </div>
              {comparisonRows.map((r, i) => (
                <div key={r.bloom} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? '' : 'bg-[#FAF6F0]/50'}`}>
                  <p className="p-4 text-[#3A3A3A]/60">{r.generic}</p>
                  <p className="p-4 text-[#5C4A3A] font-medium">{r.bloom}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Made for your event */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-4">
            <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              One experience. Your event&apos;s personality.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {eventStyles.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="rounded-2xl overflow-hidden border border-[#E5DED2] h-full">
                  <div className="h-20" style={{ background: `linear-gradient(135deg, ${s.colors[0]}, ${s.colors[1]})` }} />
                  <div className="p-5">
                    <p className="font-medium text-[#5C4A3A] mb-1">{s.label}</p>
                    <p className="text-xs text-[#3A3A3A]/65">{s.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* See it for yourself */}
      <section id="demo" className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">Try it now</p>
            <h2 className="text-3xl text-[#5C4A3A] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Don&apos;t take our word for it.
            </h2>
            <p className="text-sm text-[#3A3A3A]/70 mb-8 max-w-md mx-auto">
              Scan the QR code, upload a photo, and watch what happens.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="inline-block bg-white p-6 rounded-3xl border border-[#E5DED2] shadow-xl">
              <div className="relative p-4 bg-white rounded-2xl shadow-inner border border-[#E5DED2] inline-block mb-5">
                <img src={LIVE_EXAMPLE_QR} alt="Scan live demo QR code" className="w-48 h-48 rounded-lg" />
              </div>
              <div>
                <a
                  href={LIVE_EXAMPLE_GALLERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
                  style={{ background: '#507F82' }}
                >
                  <span>Open Live Wall in Browser</span> &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you actually receive */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">What&apos;s included</p>
            <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your R350 MemoryBloom includes
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {receiveItems.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.05}>
                <div className="bg-[#FAF6F0] rounded-2xl p-5 h-full border border-[#E5DED2]">
                  <p className="text-xs font-semibold text-[#507F82] mb-2">{item.n}</p>
                  <p className="font-medium text-[#5C4A3A] mb-1 text-sm">{item.title}</p>
                  <p className="text-xs text-[#3A3A3A]/70 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="text-center mt-10">
            <p className="text-lg text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              All for R350 once-off.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-sm text-[#3A3A3A]/50 line-through mb-1">R750</p>
            <p className="text-6xl mb-2 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>R350</p>
            <p className="text-xs uppercase tracking-[2px] text-[#507F82] font-semibold mb-8">Launch special &middot; once-off &middot; any event</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs text-[#3A3A3A]/60 max-w-sm mx-auto mb-8">
              The R350 add-on price for invitation bundles is a standing price, not part of the
              launch special above — either way you get the full MemoryBloom experience.
            </p>
            <a
              href="#order"
              className="inline-block px-10 py-4 rounded-full font-medium text-white shadow-lg"
              style={{ background: '#507F82' }}
            >
              Create My MemoryBloom
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white border-t border-[#E5DED2]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <Reveal key={index} delay={index * 0.04}>
                  <div className="border border-[#E5DED2] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 bg-[#FAF6F0]/60 hover:bg-[#FAF6F0] flex justify-between items-center transition-colors"
                    >
                      <span className="text-sm font-semibold text-[#5C4A3A]">{faq.q}</span>
                      <span className="text-[#507F82] text-lg font-bold">{isOpen ? '\u2212' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="p-5 bg-white text-xs text-[#3A3A3A]/80 leading-relaxed border-t border-[#E5DED2]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-20 px-6 bg-[#F3ECE3]">
        <div className="max-w-xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="text-sm text-[#3A3A3A]/70 max-w-md mx-auto mb-2">
              Your guests are already taking the photos.
            </p>
            <h2 className="text-3xl mb-2 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Give those memories somewhere to bloom.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-[#E5DED2] shadow-xl space-y-4">
              <div>
                <label className="text-xs font-medium text-[#8B7355] mb-1 block">Event / Couple Names</label>
                <input required value={form.eventName} onChange={update('eventName')}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] text-sm focus:outline-none focus:border-[#507F82]" placeholder="e.g. Mark & Sammy, or Grey High Matric Farewell 2027" />
              </div>

              <div>
                <label className="text-xs font-medium text-[#8B7355] mb-1 block">Event type</label>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setForm((f) => ({ ...f, eventType: t }))}
                      className="px-4 py-2 rounded-full text-sm border transition-colors"
                      style={
                        form.eventType === t
                          ? { background: '#507F82', color: '#fff', borderColor: '#507F82' }
                          : { background: '#fff', color: '#507F82', borderColor: '#E5DED2' }
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-[#8B7355] mb-1 block">Email Address</label>
                  <input required type="email" value={form.email} onChange={update('email')}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] text-sm focus:outline-none focus:border-[#507F82]" />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#8B7355] mb-1 block">WhatsApp / Mobile</label>
                  <input value={form.phone} onChange={update('phone')}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] text-sm focus:outline-none focus:border-[#507F82]" />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#8B7355] mb-1 block">Event Date</label>
                <input value={form.eventDate} onChange={update('eventDate')}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] text-sm focus:outline-none focus:border-[#507F82]" placeholder="e.g. 28 March 2027" />
              </div>

              <div>
                <label className="text-xs font-medium text-[#8B7355] mb-1 block">Preferred Accent Palette</label>
                <input value={form.accentColor} onChange={update('accentColor')}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] text-sm mb-3 focus:outline-none focus:border-[#507F82]" placeholder="Hex code or color description" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {accentSwatches.map((s) => {
                    const isSelected = form.accentColor.includes(s.label)
                    return (
                      <button
                        type="button"
                        key={s.hex}
                        onClick={() => setForm((f) => ({ ...f, accentColor: `${s.label} (${s.hex})` }))}
                        className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs border transition-all ${
                          isSelected ? 'border-[#507F82] bg-[#507F82]/10 font-semibold' : 'border-[#E5DED2] bg-white'
                        }`}
                      >
                        <span className="w-3 h-3 rounded-full shadow-sm" style={{ background: s.hex }} />
                        <span>{s.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#8B7355] mb-1 block">Special Requests or Notes</label>
                <textarea value={form.notes} onChange={update('notes')} rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] text-sm resize-y focus:outline-none focus:border-[#507F82]" />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-full font-medium text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                style={{ background: '#507F82' }}
              >
                {status === 'sending' ? 'Submitting Order…' : 'Submit Order (R350 launch special)'}
              </button>

              {status === 'error' && (
                <p className="text-xs text-center mt-2" style={{ color: '#8B4A4A' }}>
                  Something didn&apos;t go through. Please{' '}
                  <a href="https://wa.me/27728393087" className="underline font-semibold">WhatsApp me directly</a>.
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