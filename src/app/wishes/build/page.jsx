'use client'

// src/app/wishes/build/page.jsx
//
// Build-your-own form. Photos are resized in the browser, uploaded straight to
// Supabase Storage through a signed URL, and the finished form is posted to
// /api/wishes/create, which saves it as a draft and returns the preview link.

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'

const PHOTO_BUCKET = 'wishes-photos'
const MAX_PHOTOS = 4
const MAX_DIM = 1600

const THEMES = [
  { key: 'romantic-soft', label: 'Romantic & Soft', desc: 'Blush · Ivory · Delicate florals', image: '/images/wishes/styles/romantic-soft.jpg' },
  { key: 'botanical', label: 'Botanical', desc: 'Sage · Eucalyptus · Natural textures', image: '/images/wishes/styles/botanical.jpg' },
  { key: 'timeless-classic', label: 'Timeless & Classic', desc: 'Ivory · Champagne · Elegant type', image: '/images/wishes/styles/timeless-classic.jpg' },
  { key: 'modern-minimal', label: 'Modern & Minimal', desc: 'Clean lines · Understated', image: '/images/wishes/styles/modern-minimal.jpg' },
  { key: 'coastal-minimal', label: 'Coastal Minimalist', desc: 'Sea glass · Teal · Sand', image: '/images/wishes/demo-coastal/beach-1.jpg' },
]

const inputClass = 'w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm'

function Field({ label, hint, children }) {
  return (
    <div className="mb-4">
      <label className="text-xs text-[#8B7355] mb-1 block">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-[#3A3A3A]/50 mt-1">{hint}</p>}
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
        <div key={i} className="flex gap-2 items-start bg-[#FAF6F0] rounded-xl p-3">
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
          <button type="button" onClick={() => removeRow(i)} className="text-xs px-2 py-1 text-[#B04A4A] mt-1" aria-label="Remove">✕</button>
        </div>
      ))}
      <button type="button" onClick={addRow} className="text-xs px-4 py-2 rounded-full border border-[#7C8B68] text-[#7C8B68]">
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
  const [f, setF] = useState({
    coupleNames: '', email: '', phone: '',
    weddingDate: '', ceremonyTime: '15:00', receptionTime: '',
    ceremonyVenue: '', ceremonyLocation: '', receptionVenue: '',
    theme: 'romantic-soft', tagline: '', storyText: '',
    rsvpDeadline: '', dressCodeTitle: '', dressCodeBlurb: '',
    spotifyTrackUrl: '', website: '', // "website" is the hidden honeypot
  })
  const [milestones, setMilestones] = useState([
    { label: 'First met', year: '' },
    { label: 'First date', year: '' },
    { label: 'The proposal', year: '' },
    { label: 'The wedding', year: '' },
  ])
  const [schedule, setSchedule] = useState([{ time: '', label: '' }])
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

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (photos.length === 0) {
      setError('Please add at least one photo.')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/wishes/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...f, milestones, schedule, weddingParty, registryLinks, faqs,
          photos: photos.map((p) => p.url),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSlug(data.slug)
      setStatus('done')
      window.scrollTo({ top: 0 })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('idle')
    }
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

  return (
    <>
      <WishesNav />
      <div className="bg-[#FAF6F0] text-[#3A3A3A] min-h-screen">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <Reveal className="text-center mb-14">
            <p className="text-2xl mb-3" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>Build it yourself</p>
            <h1 className="text-3xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Create your invitation</h1>
            <p className="text-sm text-[#3A3A3A]/70 max-w-md mx-auto">
              Fill this in at your own pace. You can preview your invitation for free, and you only
              pay when you are happy with it. Essential Suite is R880 for the launch special
              (usually R1,250).
            </p>
          </Reveal>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Honeypot */}
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <input tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} />
            </div>

            <section>
              <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">The basics</p>
              <div className="bg-white rounded-2xl p-6">
                <Field label="Your names"><input required value={f.coupleNames} onChange={set('coupleNames')} className={inputClass} placeholder="e.g. Emma & James" /></Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email"><input required type="email" value={f.email} onChange={set('email')} className={inputClass} /></Field>
                  <Field label="WhatsApp number" hint="Guests will RSVP to this number"><input required value={f.phone} onChange={set('phone')} className={inputClass} placeholder="072 123 4567" /></Field>
                </div>
              </div>
            </section>

            <section>
              <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Choose your style</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {THEMES.map((t) => (
                  <div
                    key={t.key}
                    className="rounded-xl overflow-hidden border"
                    style={f.theme === t.key ? { borderColor: '#7C8B68', background: '#F1F4EE' } : { borderColor: '#E5DED2', background: '#fff' }}
                  >
                    <button type="button" onClick={() => setF((s) => ({ ...s, theme: t.key }))} className="text-left w-full">
                      <img src={t.image} alt={t.label} className="w-full h-28 object-cover" />
                      <div className="p-4 pb-2">
                        <p className="text-sm font-medium text-[#5C4A3A]">{t.label}</p>
                        <p className="text-xs text-[#A8B89C] mt-1">{t.desc}</p>
                      </div>
                    </button>
                    <a href={`/wishes/demo/${t.key}`} target="_blank" rel="noopener noreferrer" className="block px-4 pb-3 text-xs underline text-[#7C8B68]">
                      See a demo
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">The day</p>
              <div className="bg-white rounded-2xl p-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <Field label="Wedding date"><input required type="date" value={f.weddingDate} onChange={set('weddingDate')} className={inputClass} /></Field>
                  <Field label="Ceremony time"><input required type="time" value={f.ceremonyTime} onChange={set('ceremonyTime')} className={inputClass} /></Field>
                  <Field label="Reception time"><input type="time" value={f.receptionTime} onChange={set('receptionTime')} className={inputClass} /></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Venue"><input required value={f.ceremonyVenue} onChange={set('ceremonyVenue')} className={inputClass} /></Field>
                  <Field label="Town / area"><input value={f.ceremonyLocation} onChange={set('ceremonyLocation')} className={inputClass} placeholder="e.g. Pretoria, Gauteng" /></Field>
                </div>
                <Field label="Reception venue" hint="Leave blank if it is the same place"><input value={f.receptionVenue} onChange={set('receptionVenue')} className={inputClass} /></Field>
                <Field label="RSVP by"><input required type="date" value={f.rsvpDeadline} onChange={set('rsvpDeadline')} className={inputClass} /></Field>
                <label className="text-xs text-[#8B7355] mb-2 block">Order of the day (optional)</label>
                <ListEditor
                  items={schedule} setItems={setSchedule}
                  fields={[{ key: 'time', placeholder: 'e.g. 16:00' }, { key: 'label', placeholder: 'e.g. Canapés & Champagne' }]}
                  addLabel="Add a moment"
                />
              </div>
            </section>

            <section>
              <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Your photos</p>
              <div className="bg-white rounded-2xl p-6">
                <p className="text-xs text-[#3A3A3A]/60 mb-3">Add up to {MAX_PHOTOS}. The first one is used for your Our Story section.</p>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {photos.map((p, i) => (
                    <div key={p.url} className="relative aspect-square rounded-lg overflow-hidden border border-[#E5DED2]">
                      <img src={p.url} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setPhotos((arr) => arr.filter((_, idx) => idx !== i))}
                        className="absolute top-1 right-1 w-5 h-5 rounded-full text-white text-xs"
                        style={{ background: 'rgba(58,58,58,0.75)' }}
                        aria-label="Remove photo"
                      >✕</button>
                    </div>
                  ))}
                </div>
                {photos.length < MAX_PHOTOS && (
                  <label className="inline-block text-xs px-5 py-2.5 rounded-full border border-[#7C8B68] text-[#7C8B68] cursor-pointer">
                    {uploading ? 'Uploading…' : 'Choose photos'}
                    <input type="file" accept="image/*" multiple className="hidden" disabled={uploading} onChange={handleFiles} />
                  </label>
                )}
              </div>
            </section>

            <section>
              <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Your story</p>
              <div className="bg-white rounded-2xl p-6">
                <Field label="A line under your names (optional)"><input value={f.tagline} onChange={set('tagline')} className={inputClass} placeholder="Two hearts. One journey. A lifetime together." /></Field>
                <Field label="How it all started"><textarea rows={4} value={f.storyText} onChange={set('storyText')} className={`${inputClass} resize-y`} /></Field>
                <label className="text-xs text-[#8B7355] mb-2 block">Milestones</label>
                <ListEditor
                  items={milestones} setItems={setMilestones}
                  fields={[{ key: 'label', placeholder: 'e.g. First met' }, { key: 'year', placeholder: 'e.g. 2019' }]}
                  addLabel="Add a milestone"
                />
              </div>
            </section>

            <section>
              <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">A few extras (all optional)</p>
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div>
                  <Field label="Dress code"><input value={f.dressCodeTitle} onChange={set('dressCodeTitle')} className={inputClass} placeholder="e.g. Garden Formal" /></Field>
                  <Field label="A line for your guests"><input value={f.dressCodeBlurb} onChange={set('dressCodeBlurb')} className={inputClass} /></Field>
                </div>
                <div>
                  <label className="text-xs text-[#8B7355] mb-2 block">Your wedding party</label>
                  <ListEditor
                    items={weddingParty} setItems={setWeddingParty}
                    fields={[{ key: 'name', placeholder: 'Name' }, { key: 'role', placeholder: 'e.g. Maid of Honour' }, { key: 'note', placeholder: 'A short, fun note', span: 2 }]}
                    addLabel="Add someone"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#8B7355] mb-2 block">Gift registry links</label>
                  <ListEditor
                    items={registryLinks} setItems={setRegistryLinks}
                    fields={[{ key: 'label', placeholder: 'e.g. Our Takealot registry' }, { key: 'href', placeholder: 'Link' }]}
                    addLabel="Add a link"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#8B7355] mb-2 block">Quick answers for guests</label>
                  <ListEditor
                    items={faqs} setItems={setFaqs}
                    fields={[{ key: 'q', placeholder: 'Question' }, { key: 'a', placeholder: 'Answer', type: 'textarea', span: 2 }]}
                    addLabel="Add a question"
                  />
                </div>
                <Field label="Your song" hint="Paste a Spotify track link">
                  <input value={f.spotifyTrackUrl} onChange={set('spotifyTrackUrl')} className={inputClass} placeholder="https://open.spotify.com/track/..." />
                </Field>
              </div>
            </section>

            {error && <p className="text-sm text-center" style={{ color: '#8B4A4A' }}>{error}</p>}

            <button
              type="submit"
              disabled={status === 'sending' || uploading}
              className="w-full py-4 rounded-full font-medium text-white disabled:opacity-60"
              style={{ background: '#7C8B68' }}
            >
              {status === 'sending' ? 'Creating your invitation…' : 'Create my invitation'}
            </button>
          </form>
        </div>
      </div>
      <WishesFooter />
    </>
  )
}
