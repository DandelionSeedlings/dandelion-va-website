'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'
import { GoldDividerImg, DriftingSignatureSeed, StarAccent } from '../../../components/wishes/WishesDecor'

const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'
const LIVE_EXAMPLE_GALLERY_URL = 'https://script.google.com/macros/s/AKfycbwDgtDpVXkH4vofVddBdIvtE1O1zeeSebBVWfxlzCCt7Ogz7uPxJCecLiMvIekkmE5LIA/exec?page=gallery'
const LIVE_EXAMPLE_QR = '/images/wishes/decorations/photo-album-qr.png'

const steps = [
  { n: '01', title: 'Guests Scan', desc: 'Point phone camera at table card QR. Zero app downloads or sign-ups required.' },
  { n: '02', title: 'Instant Upload', desc: 'Photos auto-compress client-side so uploads remain instant, even on crowded venue WiFi.' },
  { n: '03', title: 'Wall Goes Live', desc: 'Images pulse onto the live display gallery within 12 seconds for everyone to enjoy.' },
  { n: '04', title: 'High-Res Download', desc: 'Your private gallery remains active for 30 days post-wedding for full zip archive export.' },
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
    desc: 'Customized with your accent palette, couple names, and tailored message.'
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
    desc: '...',
    imgSrc: '/images/wishes/previews/album-mobile-preview.png', // Changed from .jpg to .png
    imgAlt: 'Guest mobile upload interface preview',
    badge: 'Mobile App View'
  },
  {
    id: 'wall',
    tabLabel: 'Live Reception Wall',
    title: 'Real-Time Reception Projection',
    tag: 'Live Gallery Screen',
    desc: 'Hook up any projector, venue TV, or iPad. As guests snap photos throughout the evening, images pulse onto the live wall every 12 seconds creating an interactive spectacle.',
    imgSrc: '/images/wishes/previews/album-wall-preview.jpg',
    imgAlt: 'Live reception projection display gallery',
    badge: 'Projector & TV View'
  },
  {
    id: 'mod',
    tabLabel: 'Moderation Dashboard',
    title: 'Complete Host Control',
    tag: 'Host Admin Suite',
    desc: 'Choose to auto-publish photos directly or keep moderation active. Your private host portal lets you or your maid of honor hide, approve, or delete photos with one tap.',
    imgSrc: '/images/wishes/previews/album-mod-preview.jpg',
    imgAlt: 'Private photo album moderation portal',
    badge: 'Host Portal'
  },
  {
    id: 'signage',
    tabLabel: 'Printable Table Signs',
    title: 'Ready-to-Print QR Signage',
    tag: 'Printable PDF Suite',
    desc: 'Receive high-resolution, print-ready PDF files formatted for 5x7" frames or A5 table stands, seamlessly matching your chosen accent colors and typography.',
    imgSrc: '/images/wishes/previews/album-signage-preview.jpg',
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
    a: 'The upload web app uses lightweight client-side photo compression before sending files. This ensures uploads process smoothly even in remote wedding venues or crowded receptions.'
  },
  {
    q: 'Is there a limit on how many photos guests can upload?',
    a: 'No limits. Guests can upload as many candid photos and videos as they like throughout your wedding day.'
  },
  {
    q: 'How do we download all the photos after the wedding?',
    a: 'You will have access to your private dashboard for 30 days post-wedding. Click "Download All" anytime to receive a full-resolution ZIP archive of every captured memory.'
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
    coupleNames: '', email: '', phone: '', weddingDate: '', accentColor: '', notes: '',
  })
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }))
  }

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

  const selectedShowcase = productShowcases.find((item) => item.id === activeTab)

  if (status === 'success') {
    return (
      <>
        <WishesNav />
        <div className="min-h-[75vh] flex items-center justify-center px-6 bg-[#FAF6F0]">
          <Reveal className="text-center max-w-md bg-white p-10 rounded-3xl border border-[#E5DED2] shadow-xl">
            <p className="text-5xl mb-2" style={{ fontFamily: "'Alex Brush', cursive", color: '#507F82' }}>
              Thank You
            </p>
            <h1 className="text-3xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your order is confirmed
            </h1>
            <p className="text-sm text-[#3A3A3A]/75 leading-relaxed mb-6">
              I’m setting up your custom gallery and will be in touch within 24 hours with your live links, QR code, and matching printable table cards.
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs tracking-widest uppercase mb-8 backdrop-blur-md">
            <StarAccent size={10} /> Dandelion Wishes Interactive Experience
          </div>

          <h1 className="text-4xl sm:text-6xl leading-[1.1] mb-6 text-white font-normal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Don’t let the memories stay on their phones.
          </h1>

          <p className="max-w-lg mx-auto text-base sm:text-lg leading-relaxed mb-10 text-white/85 font-light">
            One shared interactive album. Guests scan, upload, and watch your live reception wall fill up in real time—no apps or accounts required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="#order"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white shadow-xl transition-all duration-300 hover:scale-105"
              style={{ background: '#7C8B68', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Order Your Album — R750
            </a>
            <a
              href="#showcase"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white/90 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all"
            >
              Explore Features & Photos
            </a>
          </div>

          <p className="text-xs text-white/70 flex items-center justify-center gap-2 tracking-wide">
            <span>✦ Standalone package: R750</span>
            <span className="opacity-40">|</span>
            <span>✦ Added to any invitation: R350</span>
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
                      <span className="text-[#7C8B68]">✦</span> Custom styled to match your wedding color scheme
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#7C8B68]">✦</span> Instant real-time synchronisation across devices
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#7C8B68]">✦</span> High-resolution photo retention for 30 days
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

      {/* Feature Grid / Deliverables */}
      <section className="py-20 px-6 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">Everything Included</p>
            <h2 className="text-3xl sm:text-4xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Designed for effortless reception sharing
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
                  Test the guest upload flow or view how photos publish instantly onto the live reception gallery wall.
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
                  How your guests capture the night
                </h2>
                <div className="space-y-5 pt-2">
                  {steps.map((s) => (
                    <div key={s.n} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#507F82]/10 text-[#507F82] text-xs font-bold flex items-center justify-center border border-[#507F82]/20">
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
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-[3px] text-[#507F82] mb-2 font-semibold">Simple Transparent Pricing</p>
            <h2 className="text-3xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Select your option</h2>
            <GoldDividerImg width={100} center opacity={0.6} className="mt-3" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="rounded-3xl p-8 bg-white border border-[#E5DED2] shadow-md h-full flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-[#FAF6F0] text-[#507F82] font-semibold">Standalone</span>
                  <div className="mt-4 mb-2">
                    <span className="font-serif text-5xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>R750</span>
                    <span className="text-xs text-[#3A3A3A]/60 block mt-1">Once-off setup</span>
                  </div>
                  <p className="text-xs text-[#3A3A3A]/70 mb-6">Ideal if you already have printed invitations or are using another platform.</p>
                  <ul className="space-y-3 text-xs text-[#3A3A3A]/85 border-t border-[#E5DED2] pt-6">
                    <li className="flex gap-2.5 items-center"><span className="text-[#507F82]">✦</span>Branded to your color theme & names</li>
                    <li className="flex gap-2.5 items-center"><span className="text-[#507F82]">✦</span>Printable QR Table Card PDF included</li>
                    <li className="flex gap-2.5 items-center"><span className="text-[#507F82]">✦</span>Live wall auto-sync & moderation page</li>
                    <li className="flex gap-2.5 items-center"><span className="text-[#507F82]">✦</span>30 days post-wedding download access</li>
                  </ul>
                </div>
                <a href="#order" className="mt-8 block text-center py-3 rounded-full text-xs font-semibold text-[#507F82] border border-[#507F82] hover:bg-[#507F82] hover:text-white transition-colors">
                  Select Standalone
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl p-8 text-white shadow-xl h-full flex flex-col justify-between relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #507F82 0%, #31494B 100%)' }}>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold">
                  Best Value
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/10 text-white/90 font-semibold">Invitation Add-On</span>
                  <div className="mt-4 mb-2">
                    <span className="font-serif text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>R350</span>
                    <span className="text-xs opacity-75 block mt-1">Added to any Dandelion Wishes invitation</span>
                  </div>
                  <p className="text-xs text-white/80 mb-6">Fully integrated directly inside your interactive digital invitation website.</p>
                  <ul className="space-y-3 text-xs text-white/90 border-t border-white/20 pt-6">
                    <li className="flex gap-2.5 items-center"><span className="text-[#E8C4C4]">✦</span>Everything in Standalone Package</li>
                    <li className="flex gap-2.5 items-center"><span className="text-[#E8C4C4]">✦</span>Seamless theme match with your invite</li>
                    <li className="flex gap-2.5 items-center"><span className="text-[#E8C4C4]">✦</span>Linked directly on your digital RSVP hub</li>
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
              Order Your Guest Photo Album
            </h2>
            <p className="text-xs text-[#3A3A3A]/70">
              Complete your details below. I’ll prepare your custom gallery and send your live links within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-[#E5DED2] shadow-xl space-y-4">
              <div>
                <label className="text-xs font-medium text-[#8B7355] mb-1 block">Couple Names</label>
                <input required value={form.coupleNames} onChange={update('coupleNames')}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] text-sm focus:outline-none focus:border-[#507F82]" placeholder="e.g. Mark & Sammy" />
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
                <label className="text-xs font-medium text-[#8B7355] mb-1 block">Wedding Date</label>
                <input value={form.weddingDate} onChange={update('weddingDate')}
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
                {status === 'sending' ? 'Submitting Order…' : 'Submit Order (R750)'}
              </button>

              {status === 'error' && (
                <p className="text-xs text-center mt-2" style={{ color: '#8B4A4A' }}>
                  Something didn’t go through. Please{' '}
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