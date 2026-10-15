'use client'

// src/app/wishes/edit/[token]/page.jsx
//
// The editor. Sections on the left, the settings for the chosen section next to
// it, and a live preview of the real invitation on the right. Everything saves by
// itself a moment after the couple stops typing. The private link is the key, so
// there is no login.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { buildContent } from '../../../../lib/wishes/buildContent'

const PHOTO_BUCKET = 'wishes-photos'
const MAX_PHOTOS = 4
const MAX_DIM = 1600
const PHOTO_BASE = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${PHOTO_BUCKET}/`
const SIMONE_WA = '27728393087'

const THEMES = [
  { key: 'romantic-soft', label: 'Romantic & Soft', image: '/images/wishes/styles/romantic-soft.jpg' },
  { key: 'botanical', label: 'Botanical', image: '/images/wishes/styles/botanical.jpg' },
  { key: 'timeless-classic', label: 'Timeless & Classic', image: '/images/wishes/styles/timeless-classic.jpg' },
  { key: 'modern-minimal', label: 'Modern & Minimal', image: '/images/wishes/styles/modern-minimal.jpg' },
  { key: 'coastal-minimal', label: 'Coastal Minimalist', image: '/images/wishes/demo-coastal/beach-1.jpg' },
]

const SERIF = { fontFamily: "'Cormorant Garamond', serif" }
const inputClass =
  'w-full px-3.5 py-2.5 rounded-lg border border-[#E5DED2] bg-white text-sm text-[#3A3A3A] focus:outline-none focus:border-[#7C8B68]'

function Field({ label, hint, children }) {
  return (
    <div className="mb-4">
      <label className="text-xs text-[#5C4A3A] mb-1.5 block">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-[#3A3A3A]/55 mt-1.5 leading-snug">{hint}</p>}
    </div>
  )
}

function ListEditor({ items, setItems, fields, addLabel }) {
  const updateRow = (i, key, value) =>
    setItems(items.map((row, idx) => (idx === i ? { ...row, [key]: value } : row)))
  const addRow = () => setItems([...items, Object.fromEntries(fields.map((f) => [f.key, '']))])
  const removeRow = (i) => setItems(items.filter((_, idx) => idx !== i))
  return (
    <div className="space-y-2.5">
      {items.map((row, i) => (
        <div key={i} className="flex gap-2 items-start bg-[#FAF6F0] border border-[#E5DED2] rounded-lg p-2.5">
          <div className="flex-1 grid gap-2">
            {fields.map((f) =>
              f.type === 'textarea' ? (
                <textarea key={f.key} rows={2} value={row[f.key] || ''} onChange={(e) => updateRow(i, f.key, e.target.value)}
                  placeholder={f.placeholder} className={`${inputClass} resize-y`} />
              ) : (
                <input key={f.key} value={row[f.key] || ''} onChange={(e) => updateRow(i, f.key, e.target.value)}
                  placeholder={f.placeholder} className={inputClass} />
              )
            )}
          </div>
          <button type="button" onClick={() => removeRow(i)} className="text-xs px-2 py-1 text-[#B04A4A]" aria-label="Remove">✕</button>
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
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('unreadable image')) }
    img.src = url
  })
}

const SECTIONS = [
  { id: 'names', label: 'Names & date' },
  { id: 'venue', label: 'Venue' },
  { id: 'style', label: 'Style' },
  { id: 'photos', label: 'Photos' },
  { id: 'story', label: 'Our story' },
  { id: 'schedule', label: 'Order of the day' },
  { id: 'dress', label: 'Dress code' },
  { id: 'party', label: 'Wedding party' },
  { id: 'registry', label: 'Gift registry' },
  { id: 'faqs', label: 'Quick answers' },
  { id: 'song', label: 'Your song' },
  { id: 'rsvp', label: 'RSVP & contact' },
]

export default function EditorPage() {
  const { token } = useParams()
  const [form, setForm] = useState(null)
  const [slug, setSlug] = useState('')
  const [pubStatus, setPubStatus] = useState('draft')
  const [loadError, setLoadError] = useState('')
  const [section, setSection] = useState('names')
  const [device, setDevice] = useState('desktop') // desktop | phone
  const [mobileTab, setMobileTab] = useState('edit') // edit | preview (small screens)
  const [saveState, setSaveState] = useState('saved') // saved | saving | error
  const [saveMsg, setSaveMsg] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [frameReady, setFrameReady] = useState(false)
  const [copied, setCopied] = useState(false)

  const iframeRef = useRef(null)
  const skipNextSave = useRef(true)

  // ---- load
  useEffect(() => {
    let alive = true
    fetch(`/api/wishes/edit/${token}`)
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Could not load your invitation.')
        if (!alive) return
        skipNextSave.current = true
        setForm(data.form)
        setSlug(data.slug)
        setPubStatus(data.status)
      })
      .catch((err) => alive && setLoadError(err.message))
    return () => { alive = false }
  }, [token])

  const up = useCallback((patch) => setForm((s) => ({ ...s, ...patch })), [])
  const set = (key) => (e) => up({ [key]: e.target.value })

  const coupleNames = form ? [form.firstName, form.partnerName].map((s) => String(s || '').trim()).filter(Boolean).join(' & ') : ''

  // ---- the content the template draws, rebuilt on every change
  const built = useMemo(() => {
    if (!form) return null
    try {
      return { content: buildContent({ ...form, coupleNames }, { photoBase: PHOTO_BASE }), error: '' }
    } catch (err) {
      return { content: null, error: err.message }
    }
  }, [form, coupleNames])

  const lastGood = useRef(null)
  if (built?.content) lastGood.current = built.content

  // ---- push to the preview
  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== window.location.origin) return
      if (e.data?.type === 'wishes-frame-ready') setFrameReady(true)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    if (!frameReady || !form || !lastGood.current) return
    const t = setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(
        { type: 'wishes-preview', theme: form.theme, content: lastGood.current },
        window.location.origin
      )
    }, 120)
    return () => clearTimeout(t)
  }, [frameReady, form, built])

  // ---- autosave
  useEffect(() => {
    if (!form) return
    if (skipNextSave.current) { skipNextSave.current = false; return }
    if (!built?.content) { setSaveState('error'); setSaveMsg(built?.error || 'Something needs fixing'); return }
    setSaveState('saving')
    setSaveMsg('')
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/wishes/edit/${token}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ form: { ...form, coupleNames } }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Could not save.')
        setSaveState('saved')
      } catch (err) {
        setSaveState('error')
        setSaveMsg(err.message || 'Could not save.')
      }
    }, 900)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form])

  // ---- photos
  async function handleFiles(e) {
    const files = Array.from(e.target.files || [])
    e.target.value = ''
    if (files.length === 0 || !form) return
    setUploadError('')
    setUploading(true)
    try {
      const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
      const added = []
      let count = (form.photos || []).length
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
        const { error: upErr } = await sb.storage.from(PHOTO_BUCKET).uploadToSignedUrl(info.path, info.token, blob, { contentType: 'image/jpeg' })
        if (upErr) throw upErr
        added.push(info.publicUrl)
        count += 1
      }
      if (added.length) setForm((s) => ({ ...s, photos: [...(s.photos || []), ...added] }))
    } catch {
      setUploadError('One of your photos did not upload. Please try a JPG or PNG.')
    } finally {
      setUploading(false)
    }
  }

  // ---- links
  const previewUrl = typeof window !== 'undefined' && slug ? `${window.location.origin}/wishes/${slug}` : ''
  const editUrl = typeof window !== 'undefined' ? window.location.href : ''
  const publishLink = `https://wa.me/${SIMONE_WA}?text=${encodeURIComponent(
    `Hi Simone! I'm happy with my invitation and would like to publish it. ${previewUrl}`
  )}`

  async function copyEditLink() {
    try {
      await navigator.clipboard.writeText(editUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-[#FAF6F0] text-center">
        <div className="max-w-sm">
          <p className="text-2xl mb-3 text-[#5C4A3A]" style={SERIF}>We could not open that</p>
          <p className="text-sm text-[#3A3A3A]/70 mb-6">{loadError}</p>
          <a href={`https://wa.me/${SIMONE_WA}`} className="inline-block px-7 py-3 rounded-full text-white text-sm" style={{ background: '#7C8B68' }}>Message us</a>
        </div>
      </div>
    )
  }
  if (!form) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FAF6F0] text-sm text-[#8B7355]">Opening your invitation…</div>
  }

  const photos = form.photos || []
  const empty = {
    schedule: !(form.schedule || []).some((s) => s.label),
    dress: !String(form.dressCodeTitle || '').trim(),
    party: !(form.weddingParty || []).some((p) => p.name),
    registry: !(form.registryLinks || []).some((r) => r.href),
    faqs: !(form.faqs || []).some((q) => q.q && q.a),
  }
  const sectionTag = (id) => {
    if (id === 'dress' && empty.dress) return 'hidden'
    if (id === 'party' && empty.party) return 'hidden'
    if (id === 'registry' && empty.registry) return 'hidden'
    if (id === 'faqs' && empty.faqs) return 'hidden'
    if (id === 'schedule' && empty.schedule) return 'default'
    return ''
  }

  const saveLabel = saveState === 'saving' ? 'Saving…' : saveState === 'error' ? 'Not saved' : 'Saved'

  return (
    <div className="h-screen flex flex-col bg-[#FAF6F0] text-[#3A3A3A]">
      {/* Top bar */}
      <header className="flex items-center gap-3 px-4 h-14 border-b border-[#E5DED2] bg-white shrink-0">
        <a href="/wishes" className="hidden sm:block shrink-0">
          <img src="/images/wishes/lettermark.png" alt="Dandelion Wishes" className="w-16 h-auto" />
        </a>
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#2E2A26] truncate">{coupleNames || 'Your invitation'}</p>
          <p className="text-[11px] text-[#3A3A3A]/55 truncate">
            {pubStatus === 'published' ? 'Live' : 'Draft, only people with your link can see it'}
          </p>
        </div>
        <div className="flex-1" />
        <span className="text-xs" style={{ color: saveState === 'error' ? '#B04A4A' : '#7C8B68' }} title={saveMsg}>
          {saveState === 'saved' && '✓ '}{saveLabel}
        </span>
        <div className="hidden lg:flex rounded-lg border border-[#E5DED2] overflow-hidden text-xs">
          {['desktop', 'phone'].map((d) => (
            <button key={d} type="button" onClick={() => setDevice(d)} className="px-3 py-1.5"
              style={device === d ? { background: '#2E2A26', color: '#fff' } : { background: '#fff', color: '#5C4A3A' }}>
              {d === 'desktop' ? 'Desktop' : 'Phone'}
            </button>
          ))}
        </div>
        <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="hidden md:block text-xs underline text-[#7C8B68]">Open preview</a>
        <a href={publishLink} target="_blank" rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg text-xs font-medium text-white" style={{ background: '#2E2A26' }}>
          Publish
        </a>
      </header>

      {saveState === 'error' && saveMsg && (
        <p className="text-xs text-center py-1.5 bg-[#F6E3E3] text-[#8B4A4A]">Not saved yet: {saveMsg}</p>
      )}

      {/* Small screens: switch between editing and previewing */}
      <div className="lg:hidden flex border-b border-[#E5DED2] bg-white text-sm">
        {['edit', 'preview'].map((t) => (
          <button key={t} type="button" onClick={() => setMobileTab(t)} className="flex-1 py-2.5"
            style={mobileTab === t ? { borderBottom: '2px solid #2E2A26', color: '#2E2A26' } : { color: '#3A3A3A99' }}>
            {t === 'edit' ? 'Edit' : 'Preview'}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0 lg:grid lg:grid-cols-[200px_340px_1fr]">
        {/* Sections */}
        <nav className={`${mobileTab === 'edit' ? 'block' : 'hidden'} lg:block overflow-x-auto lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-[#E5DED2] bg-white/60`}>
          <ul className="flex lg:block gap-1 p-2 lg:p-3">
            {SECTIONS.map((s) => {
              const tag = sectionTag(s.id)
              return (
                <li key={s.id} className="shrink-0">
                  <button type="button" onClick={() => setSection(s.id)}
                    className="w-full text-left text-sm px-3 py-2 rounded-lg flex items-center justify-between gap-2 whitespace-nowrap"
                    style={section === s.id ? { background: '#fff', color: '#2E2A26', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' } : { color: '#5C4A3A' }}>
                    {s.label}
                    {tag && <span className="text-[10px] text-[#3A3A3A]/45">{tag}</span>}
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="hidden lg:block p-3 mt-2 text-[11px] text-[#3A3A3A]/60 leading-snug">
            This page is private to you. Bookmark it to come back and edit any time.
            <button type="button" onClick={copyEditLink} className="block mt-2 underline text-[#7C8B68]">
              {copied ? 'Link copied' : 'Copy my edit link'}
            </button>
          </div>
        </nav>

        {/* Settings for the chosen section */}
        <section className={`${mobileTab === 'edit' ? 'block' : 'hidden'} lg:block overflow-y-auto p-5 border-b lg:border-b-0 lg:border-r border-[#E5DED2]`}>
          <h2 className="text-2xl mb-4 text-[#2E2A26]" style={SERIF}>{SECTIONS.find((s) => s.id === section)?.label}</h2>
          {built?.error && !built.content && (
            <p className="text-xs mb-4 px-3 py-2 rounded-lg bg-[#F6E3E3] text-[#8B4A4A]">{built.error}</p>
          )}

          {section === 'names' && (
            <>
              <Field label="Your first name"><input value={form.firstName || ''} onChange={set('firstName')} className={inputClass} /></Field>
              <Field label="Your partner's first name"><input value={form.partnerName || ''} onChange={set('partnerName')} className={inputClass} /></Field>
              <Field label="Wedding date"><input type="date" value={form.weddingDate || ''} onChange={set('weddingDate')} className={inputClass} /></Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Ceremony time"><input type="time" value={form.ceremonyTime || ''} onChange={set('ceremonyTime')} className={inputClass} /></Field>
                <Field label="Reception time"><input type="time" value={form.receptionTime || ''} onChange={set('receptionTime')} className={inputClass} /></Field>
              </div>
              <Field label="Please RSVP by"><input type="date" value={form.rsvpDeadline || ''} onChange={set('rsvpDeadline')} className={inputClass} /></Field>
            </>
          )}

          {section === 'venue' && (
            <>
              <Field label="Venue"><input value={form.ceremonyVenue || ''} onChange={set('ceremonyVenue')} className={inputClass} /></Field>
              <Field label="Town or area"><input value={form.ceremonyLocation || ''} onChange={set('ceremonyLocation')} className={inputClass} /></Field>
              <Field label="Reception venue" hint="Leave blank if it is the same place">
                <input value={form.receptionVenue || ''} onChange={set('receptionVenue')} className={inputClass} />
              </Field>
            </>
          )}

          {section === 'style' && (
            <div className="grid grid-cols-2 gap-3">
              {THEMES.map((t) => {
                const selected = form.theme === t.key
                return (
                  <button key={t.key} type="button" onClick={() => up({ theme: t.key })}
                    className="text-left rounded-xl overflow-hidden border-2 bg-white relative"
                    style={{ borderColor: selected ? '#2E2A26' : '#E5DED2' }}>
                    <img src={t.image} alt={t.label} className="w-full h-24 object-cover" />
                    {selected && <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-[#2E2A26] text-white text-xs flex items-center justify-center">✓</span>}
                    <p className="text-xs font-medium text-[#2E2A26] p-2.5">{t.label}</p>
                  </button>
                )
              })}
            </div>
          )}

          {section === 'photos' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-3">Up to {MAX_PHOTOS}. The first one is your cover for Our Story.</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {photos.map((url, i) => (
                  <div key={url} className="relative aspect-square rounded-lg overflow-hidden border border-[#E5DED2]">
                    <img src={url} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 flex justify-between p-1.5 text-[10px] text-white" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
                      {i === 0 ? <span>Cover</span> : (
                        <button type="button" onClick={() => up({ photos: [url, ...photos.filter((u) => u !== url)] })}>Make cover</button>
                      )}
                      <button type="button" disabled={photos.length <= 1} onClick={() => up({ photos: photos.filter((u) => u !== url) })} className="disabled:opacity-40">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
              {photos.length < MAX_PHOTOS && (
                <label className="inline-block text-xs px-5 py-2.5 rounded-full border border-[#7C8B68] text-[#7C8B68] cursor-pointer">
                  {uploading ? 'Uploading…' : 'Add photos'}
                  <input type="file" accept="image/*" multiple className="hidden" disabled={uploading} onChange={handleFiles} />
                </label>
              )}
              {uploadError && <p className="text-xs mt-3 text-[#8B4A4A]">{uploadError}</p>}
              {photos.length < 4 && <p className="text-[11px] text-[#3A3A3A]/55 mt-3">With fewer than 4 photos, your gallery repeats them to fill the space.</p>}
            </>
          )}

          {section === 'story' && (
            <>
              <Field label="A line under your names" hint="Left blank, we show: Two hearts. One journey. A lifetime together.">
                <input value={form.tagline || ''} onChange={set('tagline')} className={inputClass} />
              </Field>
              <Field label="How it all started" hint="Left blank, we show a short welcome line.">
                <textarea rows={6} value={form.storyText || ''} onChange={set('storyText')} className={`${inputClass} resize-y`} />
              </Field>
              <label className="text-xs text-[#5C4A3A] mb-2 block">Milestones (they only show with a year)</label>
              <ListEditor
                items={form.milestones || []} setItems={(v) => up({ milestones: v })}
                fields={[{ key: 'label', placeholder: 'e.g. First met' }, { key: 'year', placeholder: 'e.g. 2019' }]}
                addLabel="Add a milestone"
              />
            </>
          )}

          {section === 'schedule' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-3">Left empty, we show your ceremony and reception times.</p>
              <ListEditor
                items={form.schedule || []} setItems={(v) => up({ schedule: v })}
                fields={[{ key: 'time', placeholder: 'e.g. 16:00' }, { key: 'label', placeholder: 'e.g. Canapés & Champagne' }]}
                addLabel="Add a moment"
              />
            </>
          )}

          {section === 'dress' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-3">Leave the dress code blank to hide this section.</p>
              <Field label="Dress code"><input value={form.dressCodeTitle || ''} onChange={set('dressCodeTitle')} className={inputClass} placeholder="e.g. Garden Formal" /></Field>
              <Field label="A line for your guests"><input value={form.dressCodeBlurb || ''} onChange={set('dressCodeBlurb')} className={inputClass} /></Field>
            </>
          )}

          {section === 'party' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-3">Leave empty to hide this section.</p>
              <ListEditor
                items={form.weddingParty || []} setItems={(v) => up({ weddingParty: v })}
                fields={[{ key: 'name', placeholder: 'Name' }, { key: 'role', placeholder: 'e.g. Maid of Honour' }, { key: 'note', placeholder: 'A short, fun note' }]}
                addLabel="Add someone"
              />
            </>
          )}

          {section === 'registry' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-3">Leave empty to hide this section.</p>
              <ListEditor
                items={form.registryLinks || []} setItems={(v) => up({ registryLinks: v })}
                fields={[{ key: 'label', placeholder: 'e.g. Our Takealot registry' }, { key: 'href', placeholder: 'Link' }]}
                addLabel="Add a link"
              />
            </>
          )}

          {section === 'faqs' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-3">A question only shows once it has an answer. Remove them all to hide this section.</p>
              <ListEditor
                items={form.faqs || []} setItems={(v) => up({ faqs: v })}
                fields={[{ key: 'q', placeholder: 'Question' }, { key: 'a', placeholder: 'Answer', type: 'textarea' }]}
                addLabel="Add a question"
              />
            </>
          )}

          {section === 'song' && (
            <Field label="Your song" hint="Paste a Spotify track link. Clear it to remove the music button.">
              <input value={form.spotifyTrackUrl || ''} onChange={set('spotifyTrackUrl')} className={inputClass} placeholder="https://open.spotify.com/track/..." />
            </Field>
          )}

          {section === 'rsvp' && (
            <>
              <Field label="WhatsApp number" hint="Guests RSVP to this number">
                <input value={form.phone || ''} onChange={set('phone')} className={inputClass} />
              </Field>
              <Field label="Email"><input type="email" value={form.email || ''} onChange={set('email')} className={inputClass} /></Field>
            </>
          )}
        </section>

        {/* Live preview */}
        <div className={`${mobileTab === 'preview' ? 'block' : 'hidden'} lg:block h-full bg-[#E9E2D6] p-3 lg:p-5 overflow-hidden`}>
          <div className="h-full mx-auto rounded-xl overflow-hidden bg-white shadow-xl transition-all"
            style={{ maxWidth: device === 'phone' ? 390 : '100%' }}>
            <iframe ref={iframeRef} src="/wishes/edit/frame" title="Preview" className="w-full h-full border-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
