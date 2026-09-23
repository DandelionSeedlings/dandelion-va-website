'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'
import { GoldDividerImg, DriftingSignatureSeed, StarAccent, BloomIcon } from '../../../components/wishes/WishesDecor'

const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'
const LIVE_EXAMPLE_GALLERY_URL = 'https://script.google.com/macros/s/AKfycbwDgtDpVXkH4vofVddBdIvtE1O1zeeSebBVWfxlzCCt7Ogz7uPxJCecLiMvIekkmE5LIA/exec?page=gallery'
const LIVE_EXAMPLE_QR = '/images/wishes/decorations/photo-album-qr.png'
const SCATTER_PHOTO_PORTRAIT = '/images/wishes/party-album/scatter-portrait.png'

const eventTypes = ['Wedding', 'Matric Farewell', 'Birthday Party', 'Corporate Event', 'Other Celebration']

const differentiators = ['Unlimited guest uploads', 'No app required', '30 days live']

const memoryBloomSteps = [
  { n: 'SCAN', title: 'One QR code', desc: 'On the table or at the entrance, no app to download.' },
  { n: 'SNAP', title: 'Guests take the shot', desc: 'Or choose a favourite from their camera roll.' },
  { n: 'SHARE', title: 'It joins the wall', desc: 'Every photo lands on one shared, live gallery instantly.' },
  { n: 'BLOOM', title: 'Live for 30 days', desc: 'A full month to revisit and download every memory.' },
]

const features = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#507F82]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Guest-Facing Web App',
    desc: 'Customized with your accent palette, event name, and tailored message.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#507F82]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: 'Live Reception Gallery',
    desc: 'Auto-refreshing masonry wall designed for projection screens, TVs, or tablet displays.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#507F82]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Private Moderation Suite',
    desc: 'Toggle instant publishing or approve/reject guest photos in real time from your private admin URL.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#507F82]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: 'Printable Venue Signage',
    desc: 'Matching printable PDF table cards featuring your unique QR code, ready for framing.'
  }
]

const productShowcases = [
  {
    id: 'mobile',
    tabLabel: 'Mobile Guest View',
    title: 'Zero App Downloads Required',
    tag: 'Guest Upload Flow',
    desc: 'Guests just point their phone camera at the QR code on the table. No login, no download, straight to the upload screen.',
    imgSrc: '/images/wishes/previews/album-mobile-preview.png',
    imgAlt: 'Guest mobile upload interface preview',
    badge: 'Mobile App View'
  },
  {
    id: 'wall',
    tabLabel: 'Live Reception Wall',
    title: 'Real-Time Reception Projection',
    tag: 'Live Gallery Screen',
    desc: 'Hook up any projector, venue TV, or iPad. As guests snap photos throughout the evening, images pulse onto the live wall every 12 seconds creating an interactive spectacle.',
    imgSrc: '/images/wishes/previews/album-wall-preview.png',
    imgAlt: 'Live reception projection display gallery',
    badge: 'Projector & TV View'
  },
  {
    id: 'mod',
    tabLabel: 'Moderation Dashboard',
    title: 'Complete Host Control',
    tag: 'Host Admin Suite',
    desc: 'Choose to auto-publish photos directly or keep moderation active. Your private host portal lets you or whoever\u2019s running the event hide, approve, or delete photos with one tap.',
    imgSrc: '/images/wishes/previews/album-mod-preview.png',
    imgAlt: 'Private photo album moderation portal',
    badge: 'Host Portal'
  },
  {
    id: 'signage',
    tabLabel: 'Printable Table Signs',
    title: 'Ready-to-Print QR Signage',
    tag: 'Printable PDF Suite',
    desc: 'Receive high-resolution, print-ready PDF files formatted for 5x7" frames or A5 table stands, seamlessly matching your chosen accent colors and typography.',
    imgSrc: '/images/wishes/previews/album-signage-preview.png',
    imgAlt: 'Printable table sign with customized QR code',
    badge: 'Print Deliverable'
  }
]

const faqs = [
  {
    q: 'Do guests need to download an app or register?',
    a: 'Not at all! The entire experience works directly in any standard mobile browser (Safari, Chrome, etc.). Guests simply scan the QR code and can start uploading immediately.'
  },
  {
    q: 'What if venue WiFi or cellular connection is slow?',
    a: 'The upload web app uses lightweight client-side photo compression before sending files. This ensures uploads process smoothly even in remote venues or crowded receptions.'
  },
  {
    q: 'Is there a limit on how many photos guests can upload?',
    a: 'No limits. Guests can upload as many candid photos and videos as they like throughout your event.'
  },
  {
    q: 'How do we download all the photos afterward?',
    a: 'You will have access to your private dashboard for 30 days after your event. Click "Download All" anytime to receive a full-resolution ZIP archive of every captured memory.'
  },
  {
    q: 'Is MemoryBloom only for weddings?',
    a: 'No. The same system works for matric farewells, birthdays, baby showers, corporate functions, and any other celebration. Just tell us the event type and your colours when you order.'
  }
]

const accentSwatches = [
  { label: 'Coastal Teal', hex: '#507F82' },
  { label: 'Sage', hex: '#7C8B68' },
  { label: 'Blush', hex: '#E8C4C4' },
  { label: 'Champagne', hex: '#D4C4A0' },
]

export default function PhotoAlbumPage() {
  const [activeTab, setActiveTab] = useState('mobile')
  const [openFaq, setOpenFaq] = useState(null)
  const [imgErrors, setImgErrors] = useState({})
  const [form, setForm] = useState({
    eventName: '', eventType: eventTypes[0], email: '', phone: '', eventDate: '', accentColor: '', notes: '',
  })
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }))
  }

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

  const selectedShowcase = productShowcases.find((item) => item.id === activeTab)

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
              your live links, QR code, and matching printable table cards, whatever kind of event
              it&apos;s for.
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

      {/* Luxury Hero Section */}
      <section className="relative py-28 px-6 text-center overflow-hidden" style={{ background: 'linear-gradient(165deg, #3A5254 0%, #507F82 50%, #293B3C 100%)' }}>
        <DriftingSignatureSeed size={90} style={{ top: '8%', right: '5%', opacity: 0.15 }} duration={18} />
        <DriftingSignatureSeed size={60} style={{ bottom: '10%', left: '4%', opacity: 0.12 }} duration={14} delay={2} />

        <Reveal className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
            <StarAccent size={10} /> Dandelion Wishes Interactive Experience
          </div>

          <div className="flex items-center justify-center gap-2 mb-3 text-white">
            <BloomIcon size={22} />
            <p className="text-3xl" style={{ fontFamily: "'Alex Brush', cursive" }}>MemoryBloom</p>
          </div>

          <h1 className="text-4xl sm:text-6xl leading-[1.1] mb-6 text-white font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Don&apos;t let the memories stay on their phones.
          </h1>

          <p className="max-w-lg mx-auto text-base sm:text-lg leading-relaxed mb-8 text-white/85 font-light">
            One shared, live album for weddings, matric farewells, birthdays and more. Guests
            scan, upload, and watch it fill up in real time — no apps or accounts required.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {differentiators.map((d) => (
              <span key={d} className="text-xs px-3.5 py-1.5 rounded-full bg-white/15 text-white">
                {d}
              </span>
            ))}
          </div>

          <p className="text-white/80 text-sm mb-8">
            Usually <span className="line-through opacity-60">R750</span>{' '}
            <span className="font-semibold text-white">R350</span> — launch special, limited time
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="#order"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white shadow-xl transition-all duration-300 hover:scale-105"
              style={{ background: '#7C8B68', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Get MemoryBloom — R350
            </a>
            <a
              href="#showcase"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all"
            >
              Explore Features & Photos
            </a>
          </div>

          <p className="text-xs text-white/70 flex items-center justify-center gap-2 tracking-wide">
            <StarAccent size={9} />
            <span>Weddings · Matric Farewells · Birthdays · Corporate Events</span>
            <StarAccent size={9} />
          </p>
        </Reveal>
      </section>

      {/* Product Showcase & Photo Gallery Tabs */}
      <section id="showcase" className="py-20 px-6 bg-[#FAF6F0] border-b border-[#E5DED2]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">Visual Preview</p>
            <h2 className="text-3xl sm:text-4xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              See what your guests & venue experience
            </h2>
            <GoldDividerImg width={100} center opacity={0.6} className="mt-4" />
          </Reveal>

          {/* Interactive Showcase Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {productShowcases.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#507F82] text-white shadow-md'
                    : 'bg-white text-[#5C4A3A] hover:bg-[#E5DED2]/50 border border-[#E5DED2]'
                }`}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>

          {/* Tab Display Area */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DED2] shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedShowcase.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-[#507F82]/10 text-[#507F82] font-semibold">
                    {selectedShowcase.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {selectedShowcase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A3A3A]/80 leading-relaxed font-light">
                    {selectedShowcase.desc}
                  </p>
                  <ul className="space-y-2 pt-2 text-xs text-[#5C4A3A]/85">
                    <li className="flex items-center gap-2">
                      <StarAccent size={11} /> Custom styled to match your event's color scheme
                    </li>
                    <li className="flex items-center gap-2">
                      <StarAccent size={11} /> Instant real-time synchronisation across devices
                    </li>
                    <li className="flex items-center gap-2">
                      <StarAccent size={11} /> High-resolution photo retention for 30 days
                    </li>
                  </ul>
                </div>

                {/* Mockup Frame Container */}
                <div className="relative rounded-2xl overflow-hidden bg-[#F3ECE3] border border-[#E5DED2] aspect-[4/3] flex items-center justify-center shadow-inner group">
                  {!imgErrors[selectedShowcase.id] ? (
                    <img
                      src={selectedShowcase.imgSrc}
                      alt={selectedShowcase.imgAlt}
                      onError={() => handleImageError(selectedShowcase.id)}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#FAF6F0] to-[#E5DED2] w-full h-full">
                      <div className="w-16 h-16 rounded-full bg-[#507F82]/10 text-[#507F82] flex items-center justify-center mb-3">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </div>
                      <span className="text-xs uppercase tracking-widest text-[#507F82] font-semibold mb-1">
                        {selectedShowcase.badge}
                      </span>
                      <p className="text-sm font-serif text-[#5C4A3A]">{selectedShowcase.title}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* The MemoryBloom Promise */}
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
            <p className="text-sm text-[#3A3A3A]/70 max-w-md mx-auto mt-4">
              Because the best photos aren&apos;t always taken by the photographer. Your guests
              are already taking photos — give those moments somewhere to bloom.
            </p>
            <GoldDividerImg width={90} center opacity={0.65} className="mt-6" />
          </Reveal>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-center mt-12">
            <Reveal className="hidden md:block mx-auto" style={{ width: 150 }}>
              <div
                className="rounded-lg overflow-hidden bg-white p-2 shadow-xl border border-[#E5DED2]"
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

      {/* Feature Grid / Deliverables */}
      <section className="py-20 px-6 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">Everything Included</p>
            <h2 className="text-3xl sm:text-4xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Designed for effortless sharing
            </h2>
            <GoldDividerImg width={100} center opacity={0.6} className="mt-4" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, idx) => (
              <Reveal key={f.title} delay={idx * 0.08}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E5DED2] h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-3">{f.icon}</div>
                  <h3 className="font-semibold text-[#5C4A3A] mb-2">{f.title}</h3>
                  <p className="text-xs text-[#3A3A3A]/75 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo & QR Showcase Section */}
      <section id="demo" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative mx-auto max-w-sm bg-[#FAF6F0] p-8 rounded-3xl border border-[#E5DED2] shadow-xl text-center">
                <p className="text-xs uppercase tracking-widest text-[#507F82] mb-4 font-semibold">Test the experience</p>
                <div className="relative p-4 bg-white rounded-2xl shadow-inner border border-[#E5DED2] inline-block mb-6">
                  <img src={LIVE_EXAMPLE_QR} alt="Scan live demo QR code" className="w-48 h-48 rounded-lg" />
                </div>
                <h3 className="text-xl text-[#5C4A3A] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Scan with your smartphone
                </h3>
                <p className="text-xs text-[#3A3A3A]/70 leading-relaxed mb-6">
                  This is a real, live gallery from a real Dandelion Wishes event — test the guest
                  upload flow or watch photos publish instantly onto the wall.
                </p>
                <a
                  href={LIVE_EXAMPLE_GALLERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
                  style={{ background: '#507F82' }}
                >
                  <span>Open Live Wall in Browser</span> →
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[3px] text-[#7C8B68] font-semibold">Step-by-Step Experience</p>
                <h2 className="text-3xl text-[#5C4A3A] leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  How your guests capture the moment
                </h2>
                <div className="space-y-5 pt-2">
                  {memoryBloomSteps.map((s) => (
                    <div key={s.n} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 min-w-[3.5rem] px-2 h-8 rounded-full bg-[#507F82]/10 text-[#507F82] text-[10px] font-bold tracking-wide flex items-center justify-center border border-[#507F82]/20">
                        {s.n}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-[#5C4A3A] mb-0.5">{s.title}</h4>
                        <p className="text-xs text-[#3A3A3A]/70 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-6 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-6">
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">Simple Transparent Pricing</p>
            <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Select your MemoryBloom option</h2>
            <GoldDividerImg width={100} center opacity={0.6} className="mt-3" />
          </Reveal>
          <p className="text-center text-xs text-[#3A3A3A]/60 max-w-lg mx-auto mb-14">
            MemoryBloom is usually R750. It&apos;s currently R350 as a launch special across every
            event type. The R350 invitation add-on price stays the same either way.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="rounded-3xl p-8 bg-white border border-[#E5DED2] shadow-md h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#507F82]/10 text-[#507F82] px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold">
                  Launch Special
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-[#FAF6F0] text-[#507F82] font-semibold">Standalone</span>
                  <div className="mt-4 mb-2">
                    <span className="text-sm text-[#3A3A3A]/50 line-through mr-2">R750</span>
                    <span className="font-serif text-5xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>R350</span>
                    <span className="text-xs text-[#3A3A3A]/60 block mt-1">Once-off setup, any event type</span>
                  </div>
                  <p className="text-xs text-[#3A3A3A]/70 mb-6">Ideal if you already have printed invitations or are using another platform.</p>
                  <ul className="space-y-3 text-xs text-[#3A3A3A]/85 border-t border-[#E5DED2] pt-6">
                    <li className="flex gap-2.5 items-center"><StarAccent size={12} />Branded to your color theme & event name</li>
                    <li className="flex gap-2.5 items-center"><StarAccent size={12} />Unlimited guest uploads</li>
                    <li className="flex gap-2.5 items-center"><StarAccent size={12} />Printable QR Table Card PDF included</li>
                    <li className="flex gap-2.5 items-center"><StarAccent size={12} />Live wall auto-sync & moderation page</li>
                    <li className="flex gap-2.5 items-center"><StarAccent size={12} />30 days post-event download access</li>
                  </ul>
                </div>
                <a href="#order" className="mt-8 block text-center py-3 rounded-full text-xs font-semibold text-[#507F82] border border-[#507F82] hover:bg-[#507F82] hover:text-white transition-colors">
                  Select Standalone — R350
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl p-8 text-white shadow-xl h-full flex flex-col justify-between relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #507F82 0%, #31494B 100%)' }}>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold">
                  Bundle Price
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/10 text-white/90 font-semibold">Invitation Add-On</span>
                  <div className="mt-4 mb-2">
                    <span className="font-serif text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>R350</span>
                    <span className="text-xs opacity-75 block mt-1">Added to any Dandelion Wishes invitation</span>
                  </div>
                  <p className="text-xs text-white/80 mb-6">Fully integrated directly inside your interactive digital invitation website.</p>
                  <ul className="space-y-3 text-xs text-white/90 border-t border-white/20 pt-6">
                    <li className="flex gap-2.5 items-center"><StarAccent size={12} />Everything in Standalone MemoryBloom</li>
                    <li className="flex gap-2.5 items-center"><StarAccent size={12} />Seamless theme match with your invite</li>
                    <li className="flex gap-2.5 items-center"><StarAccent size={12} />Linked directly on your digital RSVP hub</li>
                  </ul>
                </div>
                <a href="/wishes#pricing" className="mt-8 block text-center py-3 rounded-full text-xs font-semibold bg-white text-[#31494B] shadow hover:bg-white/90 transition-colors">
                  View Invitation Bundles →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-20 px-6 bg-white border-t border-[#E5DED2]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">Got Questions?</p>
            <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="border border-[#E5DED2] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 bg-[#FAF6F0]/60 hover:bg-[#FAF6F0] flex justify-between items-center transition-colors"
                    >
                      <span className="text-sm font-semibold text-[#5C4A3A]">{faq.q}</span>
                      <span className="text-[#507F82] text-lg font-bold">{isOpen ? '−' : '+'}</span>
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
            <h2 className="text-3xl mb-2 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Order Your MemoryBloom Album
            </h2>
            <p className="text-xs text-[#3A3A3A]/70">
              Complete your details below. I&apos;ll prepare your custom gallery and send your live links within 24 hours.
            </p>
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