'use client'

// src/app/wishes/build/page.jsx
//
// Build-your-own, step by step. One question per screen on the left, and a big
// photo on the right that picks up the couple's names, date and photo as they
// go. Photos are resized in the browser and uploaded straight to Supabase
// Storage through a signed URL; the finished form is posted to
// /api/wishes/create, which saves a draft and returns the preview link.

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@supabase/supabase-js'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'
import { LANGUAGES } from '../../../lib/wishes/i18n'

const PHOTO_BUCKET = 'wishes-photos'
const MAX_PHOTOS = 4
const MAX_DIM = 1600
const TOTAL_STEPS = 8

const THEMES = [
  { key: 'romantic-soft', label: 'Romantic & Soft', desc: 'Blush · Ivory · Delicate florals', image: '/images/wishes/styles/romantic-soft.jpg' },
  { key: 'botanical', label: 'Botanical', desc: 'Sage · Eucalyptus · Natural textures', image: '/images/wishes/styles/botanical.jpg' },
  { key: 'timeless-classic', label: 'Timeless & Classic', desc: 'Ivory · Champagne · Elegant type', image: '/images/wishes/styles/timeless-classic.jpg' },
  { key: 'modern-minimal', label: 'Modern & Minimal', desc: 'Clean lines · Understated', image: '/images/wishes/styles/modern-minimal.jpg' },
  { key: 'coastal-minimal', label: 'Coastal Minimalist', desc: 'Sea glass · Teal · Sand', image: '/images/wishes/demo-coastal/beach-1.jpg' },
]

const SERIF = { fontFamily: "'Cormorant Garamond', serif" }
const inputClass =
  'w-full px-4 py-3.5 rounded-lg border border-[#E5DED2] bg-white text-[15px] text-[#3A3A3A] focus:outline-none focus:border-[#7C8B68]'

function prettyDate(iso) {
  const m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!m) return ''
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function Field({ label, hint, children }) {
  return (
    <div className="mb-5">
      <label className="text-sm text-[#5C4A3A] mb-1.5 block">{label}</label>
      {children}
      {hint && <p className="text-xs text-[#3A3A3A]/50 mt-1.5">{hint}</p>}
    </div>
  )
}

function ListEditor({ items, setItems, fields, addLabel }) {
  const updateRow = (i, key, value) =>
    setItems(items.map((row, idx) => (idx === i ? { ...row, [key]: value } : row)))
  const addRow = () => setItems([...items, Object.fromEntries(fields.map((f) => [f.key, '']))])
  const removeRow = (i) => setItems(items.filter((_, idx) => idx !== i))

  return (
    <div className="space-y-3">
      {items.map((row, i) => (
        <div key={i} className="flex gap-2 items-start bg-white/70 border border-[#E5DED2] rounded-lg p-3">
          <div className="flex-1 grid sm:grid-cols-2 gap-2">
            {fields.map((f) =>
              f.type === 'textarea' ? (
                <textarea
                  key={f.key}
                  value={row[f.key] || ''}
                  onChange={(e) => updateRow(i, f.key, e.target.value)}
                  placeholder={f.placeholder}
                  rows={2}
                  className={`${inputClass} ${f.span === 2 ? 'sm:col-span-2' : ''} resize-y`}
                />
              ) : (
                <input
                  key={f.key}
                  value={row[f.key] || ''}
                  onChange={(e) => updateRow(i, f.key, e.target.value)}
                  placeholder={f.placeholder}
                  className={`${inputClass} ${f.span === 2 ? 'sm:col-span-2' : ''}`}
                />
              )
            )}
          </div>
          <button type="button" onClick={() => removeRow(i)} className="text-xs px-2 py-1 text-[#B04A4A] mt-2" aria-label="Remove">✕</button>
        </div>
      ))}
      <button type="button" onClick={addRow} className="text-sm px-5 py-2.5 rounded-full border border-[#7C8B68] text-[#7C8B68]">
        + {addLabel}
      </button>
    </div>
  )
}

function resizeToBlob(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      let w = img.width
      let h = img.height
      if (w > h && w > MAX_DIM) { h = Math.round(h * (MAX_DIM / w)); w = MAX_DIM }
      else if (h > MAX_DIM) { w = Math.round(w * (MAX_DIM / h)); h = MAX_DIM }
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      canvas.getContext('2d').drawImage(img, 0, 0, w, h)
      URL.revokeObjectURL(url)
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('resize failed'))), 'image/jpeg', 0.85)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('unreadable image'))
    }
    img.src = url
  })
}

export default function BuildYourOwnPage() {
  const [step, setStep] = useState(1)
  const startedAt = useRef(Date.now()) // spam check: a real person takes longer than a few seconds
  const [dir, setDir] = useState(1)
  const [f, setF] = useState({
    firstName: '', partnerName: '', email: '', phone: '',
    weddingDate: '', ceremonyTime: '15:00', receptionTime: '', rsvpDeadline: '',
    ceremonyVenue: '', ceremonyLocation: '', receptionVenue: '',
    theme: 'romantic-soft', lang: 'en', blank: false, tagline: '', storyText: '',
    dressCodeTitle: '', dressCodeBlurb: '',
    spotifyTrackUrl: '', // (no hidden spam-trap field any more: browsers kept autofilling it)
  })
  const [milestones, setMilestones] = useState([
    { label: 'First met', year: '' },
    { label: 'First date', year: '' },
    { label: 'The proposal', year: '' },
    { label: 'The wedding', year: '' },
  ])
  const [schedule, setSchedule] = useState([])
  const [weddingParty, setWeddingParty] = useState([])
  const [registryLinks, setRegistryLinks] = useState([])
  const [faqs, setFaqs] = useState([
    { q: 'What should I wear?', a: '' },
    { q: 'Is there parking?', a: '' },
  ])
  const [photos, setPhotos] = useState([]) // [{ url }]
  const [uploading, setUploading] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | done
  const [error, setError] = useState('')
  const [slug, setSlug] = useState('')

  const set = (key) => (e) => setF((s) => ({ ...s, [key]: e.target.value }))

  const coupleNames = [f.firstName.trim(), f.partnerName.trim()].filter(Boolean).join(' & ')
  const theme = THEMES.find((t) => t.key === f.theme) || THEMES[0]
  const panelImage = photos[0]?.url || theme.image
  const panelDate = prettyDate(f.weddingDate)

  // Blank page: only the essentials are asked here (names, date, venue, photo, contact).
  // Style, story and extras are all left for the editor, where nothing is pre-filled.
  const flow = f.blank ? [1, 2, 3, 5, 8] : [1, 2, 3, 4, 5, 6, 7, 8]
  const stepIdx = Math.max(0, flow.indexOf(step))
  const lastStep = flow[flow.length - 1]

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())
  const phoneOk = f.phone.replace(/\D/g, '').length >= 9

  const canContinue = (() => {
    switch (step) {
      case 1: return f.firstName.trim() && f.partnerName.trim()
      case 2: return f.weddingDate && f.ceremonyTime && f.rsvpDeadline
      case 3: return f.ceremonyVenue.trim()
      case 4: return !!f.theme
      case 5: return photos.length > 0 && !uploading
      case 8: return emailOk && phoneOk
      default: return true
    }
  })()

  // Steps 6 and 7 are optional: the button says "Skip for now" until something is filled in.
  const hasStep6 = f.tagline || f.storyText || f.spotifyTrackUrl || f.dressCodeTitle || milestones.some((m) => m.year)
  const hasStep7 = schedule.some((s) => s.label) || weddingParty.some((p) => p.name) ||
    registryLinks.some((r) => r.href) || faqs.some((q) => q.a)
  const optionalEmpty = (step === 6 && !hasStep6) || (step === 7 && !hasStep7)

  function goTo(next) {
    setError('')
    setDir(next > step ? 1 : -1)
    setStep(next)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleFiles(e) {
    const files = Array.from(e.target.files || [])
    e.target.value = ''
    if (files.length === 0) return
    setError('')
    setUploading(true)
    try {
      const sb = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      )
      let count = photos.length
      for (const file of files) {
        if (count >= MAX_PHOTOS) break
        const blob = await resizeToBlob(file)
        const res = await fetch('/api/wishes/upload-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contentType: 'image/jpeg', size: blob.size }),
        })
        const info = await res.json()
        if (!res.ok) throw new Error(info.error || 'Upload failed.')
        const { error: upErr } = await sb.storage
          .from(PHOTO_BUCKET)
          .uploadToSignedUrl(info.path, info.token, blob, { contentType: 'image/jpeg' })
        if (upErr) throw upErr
        setPhotos((p) => [...p, { url: info.publicUrl }])
        count += 1
      }
    } catch (err) {
      setError('One of your photos did not upload. Please try a JPG or PNG and try again.')
    } finally {
      setUploading(false)
    }
  }

  async function submitAll() {
    setError('')
    setStatus('sending')
    try {
      const res = await fetch('/api/wishes/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...f,
          coupleNames,
          milestones, schedule, weddingParty, registryLinks, faqs,
          photos: photos.map((p) => p.url),
          elapsedMs: Date.now() - startedAt.current,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSlug(data.slug)
      setStatus('done')
      window.scrollTo({ top: 0 })
      // Straight into the editor, so they can fine-tune everything themselves.
      if (data.editToken) window.location.assign(`/wishes/edit/${data.editToken}`)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!canContinue || status === 'sending') return
    if (step !== lastStep) goTo(flow[stepIdx + 1])
    else submitAll()
  }

  if (status === 'done') {
    return (
      <>
        <WishesNav />
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-[#FAF6F0]">
          <Reveal className="text-center max-w-md">
            <p className="text-4xl mb-4" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>Your invitation is ready to preview</p>
            <p className="text-sm text-[#3A3A3A]/70 mb-6">
              Have a look and see how it feels. Nothing is live yet and you have not been charged.
              When you are happy with it, send us a message and we will take you through payment and
              put it live.
            </p>
            <a
              href={`/wishes/${slug}`}
              className="inline-block px-8 py-3.5 rounded-full font-medium text-white"
              style={{ background: '#7C8B68' }}
            >
              See my invitation
            </a>
            <p className="text-xs text-[#3A3A3A]/60 mt-6">
              Your preview link: dandelioncreations.co.za/wishes/{slug}
            </p>
          </Reveal>
        </div>
        <WishesFooter />
      </>
    )
  }

  const heading = {
    1: ['First, the two of you', 'Your names lead your invitation and every page of it.'],
    2: ['When is the big day?', 'Guests see a live countdown to your ceremony.'],
    3: ['Where are you celebrating?', 'Guests get a map and directions.'],
    4: ['Choose a style', 'It sets the fonts, colours and feel. You can preview them all first.'],
    5: ['Add your favourite photos', `Up to ${MAX_PHOTOS}. The first one opens your Our Story section.`],
    6: [`Tell us about ${coupleNames || 'you two'}`, 'Optional. Your words go on your invitation exactly as you write them.'],
    7: ['A few extras', 'Optional. Add whatever your guests will want to know.'],
    8: ['Where should we send your preview?', 'Guests RSVP to your WhatsApp number. You only pay once you are happy.'],
  }[step]

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#3A3A3A] lg:grid lg:grid-cols-2">
      {/* Left: the questions */}
      <div className="flex flex-col min-h-screen px-6 sm:px-10 lg:px-14 py-8 order-2 lg:order-1">
        <div className="flex items-center justify-between mb-5">
          <a href="/wishes" aria-label="Dandelion Wishes">
            <img src="/images/wishes/lettermark.png" alt="Dandelion Wishes" className="w-20 h-auto" />
          </a>
          <p className="text-xs text-[#3A3A3A]/60">Build your invitation, step {stepIdx + 1} of {flow.length}</p>
        </div>

        <div className="flex gap-2 mb-10" aria-hidden="true">
          {Array.from({ length: flow.length }, (_, i) => (
            <span
              key={i}
              className="flex-1 h-[2px] rounded-full transition-colors"
              style={{ background: i < stepIdx + 1 ? '#3A3A3A' : '#E5DED2' }}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col max-w-lg w-full">

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 * dir }}
              transition={{ duration: 0.25 }}
              className="flex-1"
            >
              <h1 className="text-4xl sm:text-5xl leading-[1.1] mb-3 text-[#2E2A26]" style={SERIF}>{heading[0]}</h1>
              <p className="text-[15px] text-[#3A3A3A]/65 mb-8">{heading[1]}</p>

              {step === 1 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your first name">
                    <input autoFocus value={f.firstName} onChange={set('firstName')} className={inputClass} placeholder="e.g. Emma" />
                  </Field>
                  <Field label="Your partner's first name">
                    <input value={f.partnerName} onChange={set('partnerName')} className={inputClass} placeholder="e.g. James" />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="How would you like to start?" hint="Guided adds friendly wording you can change. Blank only asks for the essentials, then opens the editor with everything else empty, so you build it yourself and can design your own colours and fonts.">
                      <div className="grid grid-cols-2 gap-3">
                        {[[false, 'Guided'], [true, 'Blank page']].map(([val, label]) => (
                          <button key={label} type="button" onClick={() => setF((s) => ({ ...s, blank: val, theme: val ? 'modern-minimal' : s.theme }))}
                            className="text-sm px-4 py-3 rounded-lg border-2 bg-white"
                            style={{ borderColor: f.blank === val ? '#2E2A26' : '#E5DED2' }}>{label}</button>
                        ))}
                      </div>
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Invitation language" hint="You can change this later. The words you type yourself stay as you wrote them.">
                      <select value={f.lang} onChange={set('lang')} className={inputClass}>
                        {LANGUAGES.map((l) => <option key={l.key} value={l.key}>{l.label}</option>)}
                      </select>
                    </Field>
                  </div>
                </div>
              )}

              {step === 2 && (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Wedding date"><input type="date" value={f.weddingDate} onChange={set('weddingDate')} className={inputClass} /></Field>
                    <Field label="Ceremony time"><input type="time" value={f.ceremonyTime} onChange={set('ceremonyTime')} className={inputClass} /></Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Reception time (optional)"><input type="time" value={f.receptionTime} onChange={set('receptionTime')} className={inputClass} /></Field>
                    <Field label="Please RSVP by"><input type="date" value={f.rsvpDeadline} onChange={set('rsvpDeadline')} className={inputClass} /></Field>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <Field label="Venue"><input autoFocus value={f.ceremonyVenue} onChange={set('ceremonyVenue')} className={inputClass} placeholder="e.g. Old Oak Manor" /></Field>
                  <Field label="Town or area"><input value={f.ceremonyLocation} onChange={set('ceremonyLocation')} className={inputClass} placeholder="e.g. Pretoria, Gauteng" /></Field>
                  <Field label="Reception venue (optional)" hint="Leave blank if it is the same place">
                    <input value={f.receptionVenue} onChange={set('receptionVenue')} className={inputClass} />
                  </Field>
                </>
              )}

              {step === 4 && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {THEMES.map((t) => {
                    const selected = f.theme === t.key
                    return (
                      <div
                        key={t.key}
                        className="rounded-xl overflow-hidden border-2 bg-white"
                        style={{ borderColor: selected ? '#2E2A26' : '#E5DED2' }}
                      >
                        <button type="button" onClick={() => setF((s) => ({ ...s, theme: t.key }))} className="text-left w-full relative block">
                          <img src={t.image} alt={t.label} className="w-full h-32 object-cover" />
                          {selected && (
                            <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#2E2A26] text-white text-sm flex items-center justify-center">✓</span>
                          )}
                          <div className="p-3 pb-1">
                            <p className="text-sm font-medium text-[#2E2A26]">{t.label}</p>
                            <p className="text-xs text-[#3A3A3A]/60 mt-0.5">{t.desc}</p>
                          </div>
                        </button>
                        <a href={`/wishes/demo/${t.key}`} target="_blank" rel="noopener noreferrer" className="block px-3 pb-3 text-xs underline text-[#7C8B68]">
                          See a demo
                        </a>
                      </div>
                    )
                  })}
                </div>
              )}

              {step === 5 && (
                <>
                  {photos.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {photos.map((p, i) => (
                        <div key={p.url} className="relative aspect-square rounded-lg overflow-hidden border border-[#E5DED2]">
                          <img src={p.url} alt="" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => setPhotos((arr) => arr.filter((_, idx) => idx !== i))}
                            className="absolute top-1 right-1 w-6 h-6 rounded-full text-white text-xs"
                            style={{ background: 'rgba(58,58,58,0.75)' }}
                            aria-label="Remove photo"
                          >✕</button>
                        </div>
                      ))}
                    </div>
                  )}
                  {photos.length < MAX_PHOTOS && (
                    <label className="block cursor-pointer rounded-xl border border-dashed border-[#C9BFAE] bg-white/60 py-12 text-center">
                      <p className="text-[15px] font-medium text-[#2E2A26]">{uploading ? 'Uploading…' : 'Choose your favourite photos'}</p>
                      <p className="text-xs text-[#3A3A3A]/55 mt-2 px-6 leading-snug">Best: landscape photos, at least 1600 pixels wide, JPG or PNG. Your first photo sits big beside your story and is cropped close to a square, so choose one where you are both in the middle. Very small or very tall photos can look blurry or cut off.</p>
                      <input type="file" accept="image/*" multiple className="hidden" disabled={uploading} onChange={handleFiles} />
                    </label>
                  )}
                </>
              )}

              {step === 6 && (
                <>
                  <Field label="A line under your names"><input value={f.tagline} onChange={set('tagline')} className={inputClass} placeholder="Two hearts. One journey. A lifetime together." /></Field>
                  <Field label="How it all started"><textarea rows={4} value={f.storyText} onChange={set('storyText')} className={`${inputClass} resize-y`} placeholder="A windy picnic, a mutual friend, a very long queue..." /></Field>
                  <label className="text-sm text-[#5C4A3A] mb-2 block">Milestones (add the year to show one)</label>
                  <div className="mb-5">
                    <ListEditor
                      items={milestones} setItems={setMilestones}
                      fields={[{ key: 'label', placeholder: 'e.g. First met' }, { key: 'year', placeholder: 'e.g. 2019' }]}
                      addLabel="Add a milestone"
                    />
                  </div>
                  <Field label="Dress code"><input value={f.dressCodeTitle} onChange={set('dressCodeTitle')} className={inputClass} placeholder="e.g. Garden Formal" /></Field>
                  {f.dressCodeTitle && (
                    <Field label="A line for your guests"><input value={f.dressCodeBlurb} onChange={set('dressCodeBlurb')} className={inputClass} /></Field>
                  )}
                  <Field label="Your song" hint="Paste a Spotify track link">
                    <input value={f.spotifyTrackUrl} onChange={set('spotifyTrackUrl')} className={inputClass} placeholder="https://open.spotify.com/track/..." />
                  </Field>
                </>
              )}

              {step === 7 && (
                <div className="space-y-8">
                  <div>
                    <label className="text-sm text-[#5C4A3A] mb-2 block">Order of the day</label>
                    <ListEditor
                      items={schedule} setItems={setSchedule}
                      fields={[{ key: 'time', placeholder: 'e.g. 16:00' }, { key: 'label', placeholder: 'e.g. Canapés & Champagne' }]}
                      addLabel="Add a moment"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#5C4A3A] mb-2 block">Your wedding party</label>
                    <ListEditor
                      items={weddingParty} setItems={setWeddingParty}
                      fields={[{ key: 'name', placeholder: 'Name' }, { key: 'role', placeholder: 'e.g. Maid of Honour' }, { key: 'note', placeholder: 'A short, fun note', span: 2 }]}
                      addLabel="Add someone"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#5C4A3A] mb-2 block">Gift registry links</label>
                    <ListEditor
                      items={registryLinks} setItems={setRegistryLinks}
                      fields={[{ key: 'label', placeholder: 'e.g. Our Takealot registry' }, { key: 'href', placeholder: 'Link' }]}
                      addLabel="Add a link"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#5C4A3A] mb-2 block">Quick answers for guests</label>
                    <ListEditor
                      items={faqs} setItems={setFaqs}
                      fields={[{ key: 'q', placeholder: 'Question' }, { key: 'a', placeholder: 'Answer', type: 'textarea', span: 2 }]}
                      addLabel="Add a question"
                    />
                  </div>
                </div>
              )}

              {step === 8 && (
                <>
                  <Field label="Email" hint="We send your preview link here">
                    <input autoFocus type="email" value={f.email} onChange={set('email')} className={inputClass} />
                  </Field>
                  <Field label="WhatsApp number" hint="Guests will RSVP to this number">
                    <input value={f.phone} onChange={set('phone')} className={inputClass} placeholder="072 123 4567" />
                  </Field>
                  <p className="text-xs text-[#3A3A3A]/55">
                    Essential Suite is R880 for the launch special (usually R1,250). Nothing is charged
                    until you have seen your invitation and say yes.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {error && <p className="text-sm mt-4" style={{ color: '#8B4A4A' }}>{error}</p>}

          <div className="flex items-center justify-between mt-10 pt-4">
            {step > 1 ? (
              <button type="button" onClick={() => goTo(flow[stepIdx - 1])} className="text-sm text-[#3A3A3A]/70 px-2 py-3">
                ‹ Back
              </button>
            ) : (
              <a href="/wishes" className="text-xs text-[#3A3A3A]/55 px-2 py-3">Rather have it built for you? See the options</a>
            )}
            <button
              type="submit"
              disabled={!canContinue || status === 'sending'}
              className="px-9 py-3.5 rounded-lg font-medium text-white transition-colors disabled:cursor-not-allowed"
              style={{ background: canContinue && status !== 'sending' ? '#2E2A26' : '#A39E96' }}
            >
              {step === lastStep
                ? status === 'sending' ? 'Creating your invitation…' : 'Create my invitation'
                : optionalEmpty ? 'Skip for now' : 'Continue'}
            </button>
          </div>
        </form>
      </div>

      {/* Right: the live photo panel */}
      <div className="relative order-1 lg:order-2 h-48 sm:h-64 lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-[#E5DED2]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={panelImage}
            src={panelImage}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)' }} />
        <div className="absolute left-6 right-6 bottom-6 lg:left-10 lg:bottom-10 text-white">
          <p className="text-3xl sm:text-4xl lg:text-5xl leading-tight" style={SERIF}>{coupleNames || 'Your names'}</p>
          <p className="text-sm opacity-85 mt-1">
            {panelDate || theme.label}
            {panelDate && f.ceremonyVenue ? ` · ${f.ceremonyVenue}` : ''}
          </p>
        </div>
      </div>
    </div>
  )
}
