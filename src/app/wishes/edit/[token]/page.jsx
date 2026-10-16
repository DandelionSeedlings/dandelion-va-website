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
import { LANGUAGES } from '../../../../lib/wishes/i18n'
import { getTheme } from '../../../../lib/wishes/themes'
import { PRICE_LABEL, USUAL_PRICE_LABEL, ADDONS, totalRands, rand } from '../../../../lib/wishes/pricing'
import { HEADING_FONTS, SCRIPT_FONTS } from '../../../../lib/wishes/customDesign'

const PHOTO_BUCKET = 'wishes-photos'
const MAX_PHOTOS = 4
const MAX_DIM = 1600
const BANNER_DIM = 2200
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

function resizeToBlob(file, maxDim = MAX_DIM) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      let w = img.width
      let h = img.height
      if (w > h && w > maxDim) { h = Math.round(h * (maxDim / w)); w = maxDim }
      else if (h > maxDim) { w = Math.round(w * (maxDim / h)); h = maxDim }
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
  { id: 'language', label: 'Language' },
  { id: 'banner', label: 'Banner' },
  { id: 'photos', label: 'Photos' },
  { id: 'story', label: 'Our story' },
  { id: 'schedule', label: 'Order of the day' },
  { id: 'dress', label: 'Dress code' },
  { id: 'party', label: 'Wedding party' },
  { id: 'registry', label: 'Gift registry' },
  { id: 'faqs', label: 'Quick answers' },
  { id: 'song', label: 'Your song' },
  { id: 'rsvp', label: 'RSVP & contact' },
  { id: 'addons', label: 'Add-ons' },
]

// Which part of the invitation to show in the preview when a section is chosen.
const SCROLL_TARGET = {
  names: 'top', venue: 'details', style: 'top', language: 'top', banner: 'top',
  photos: 'story', story: 'story', schedule: 'schedule', dress: 'dress', party: 'party',
  registry: 'registry', faqs: 'faqs', song: 'top', rsvp: 'rsvp', addons: 'gallery',
}

const PHOTO_GUIDE =
  'Best results: landscape photos (wider than tall), at least 1600 pixels wide, JPG or PNG. ' +
  'Your first photo sits big beside your story and is cropped close to a square, so pick one where you are both in the middle. ' +
  'The rest fill the gallery in wide and square frames. Very small or very tall photos can look blurry or cut off.'
const BANNER_GUIDE =
  'Best: a landscape photo, at least 1920 pixels wide (16:9 is ideal), JPG or PNG. ' +
  'Your names and date sit in the middle of it, so pick a photo that is calm in the centre, such as a wide scene with the two of you off to one side or lower down.'

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
  const [showPay, setShowPay] = useState(false)
  const [payEmail, setPayEmail] = useState('')
  const [payBusy, setPayBusy] = useState(false)
  const [payError, setPayError] = useState('')
  const [copiedLive, setCopiedLive] = useState(false)
  const [boughtAddons, setBoughtAddons] = useState([])
  const [pickAddons, setPickAddons] = useState([])

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
        setBoughtAddons(data.addons || [])
      })
      .catch((err) => alive && setLoadError(err.message))
    return () => { alive = false }
  }, [token])

  // ---- coming back from Paystack: confirm the payment and publish
  useEffect(() => {
    const reference = new URLSearchParams(window.location.search).get('reference')
    if (!reference) return
    setShowPay(true)
    setPayBusy(true)
    fetch('/api/wishes/pay/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, reference }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.published) {
          setPubStatus('published')
          setBoughtAddons(d.addons || [])
          window.history.replaceState(null, '', window.location.pathname)
        } else {
          setPayError('We could not confirm your payment yet. If you were charged, message us and we will sort it out straight away.')
        }
      })
      .catch(() => setPayError('We could not confirm your payment yet. If you were charged, message us and we will sort it out straight away.'))
      .finally(() => setPayBusy(false))
  }, [token])

  async function startPayment() {
    setPayError('')
    setPayBusy(true)
    try {
      const res = await fetch('/api/wishes/pay/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, email: payEmail, addons: pickAddons }),
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.error || 'Could not start the payment.')
      window.location.assign(d.url)
    } catch (err) {
      setPayError(err.message)
      setPayBusy(false)
    }
  }

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

  // ---- jump the preview to the section being edited
  useEffect(() => {
    if (!frameReady) return
    const id = SCROLL_TARGET[section]
    const t = setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage({ type: 'wishes-scroll', id }, window.location.origin)
    }, 250)
    return () => clearTimeout(t)
  }, [section, frameReady])

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
  async function uploadOne(file, maxDim) {
    const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    const blob = await resizeToBlob(file, maxDim)
    const res = await fetch('/api/wishes/upload-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contentType: 'image/jpeg', size: blob.size }),
    })
    const info = await res.json()
    if (!res.ok) throw new Error(info.error || 'Upload failed.')
    const { error: upErr } = await sb.storage.from(PHOTO_BUCKET).uploadToSignedUrl(info.path, info.token, blob, { contentType: 'image/jpeg' })
    if (upErr) throw upErr
    return info.publicUrl
  }

  async function handleBanner(e) {
    const file = (e.target.files || [])[0]
    e.target.value = ''
    if (!file || !form) return
    setUploadError('')
    setUploading(true)
    try {
      const url = await uploadOne(file, BANNER_DIM)
      up({ bannerUrl: url })
    } catch {
      setUploadError('That banner did not upload. Please try a JPG or PNG.')
    } finally {
      setUploading(false)
    }
  }

  async function handleFiles(e) {
    const files = Array.from(e.target.files || [])
    e.target.value = ''
    if (files.length === 0 || !form) return
    setUploadError('')
    setUploading(true)
    try {
      const added = []
      let count = (form.photos || []).length
      for (const file of files) {
        if (count >= MAX_PHOTOS) break
        added.push(await uploadOne(file, MAX_DIM))
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
    if (id === 'schedule' && empty.schedule) return form.blank ? 'hidden' : 'default'
    if (id === 'story' && form.blank && !form.storyText) return 'hidden'
    if (id === 'banner' && !form.bannerUrl) return 'default'
    if (id === 'addons') return boughtAddons.length ? '' : 'none yet'
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
        <button type="button" onClick={() => setShowPay(true)}
          className="px-4 py-2 rounded-lg text-xs font-medium text-white" style={{ background: '#2E2A26' }}>
          {pubStatus === 'published' ? 'Share' : 'Publish'}
        </button>
      </header>

      {showPay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(46,42,38,0.55)' }}
          onClick={(e) => { if (e.target === e.currentTarget && !payBusy) setShowPay(false) }}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button type="button" onClick={() => setShowPay(false)} disabled={payBusy} aria-label="Close"
              className="absolute top-3 right-4 text-xl text-[#3A3A3A]/50">×</button>
            {pubStatus === 'published' ? (
              <>
                <h2 className="text-2xl mb-2 text-[#2E2A26]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Your invitation is live</h2>
                <p className="text-sm text-[#3A3A3A]/70 mb-4">Send this link to your guests. Any change you make here shows up on it straight away.</p>
                <p className="text-sm break-all px-3 py-2.5 rounded-lg bg-[#FAF6F0] border border-[#E5DED2] mb-3">{previewUrl}</p>
                <div className="flex gap-2 flex-wrap">
                  <button type="button" className="px-4 py-2.5 rounded-lg text-xs font-medium text-white" style={{ background: '#2E2A26' }}
                    onClick={() => { navigator.clipboard?.writeText(previewUrl); setCopiedLive(true); setTimeout(() => setCopiedLive(false), 2000) }}>
                    {copiedLive ? 'Link copied' : 'Copy invitation link'}
                  </button>
                  <a href={`https://wa.me/?text=${encodeURIComponent(previewUrl)}`} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg text-xs font-medium border border-[#7C8B68] text-[#7C8B68]">Share on WhatsApp</a>
                </div>
                <p className="text-[11px] text-[#3A3A3A]/55 mt-4">Keep your private edit link safe too. It is the only way back in to make changes.</p>
              </>
            ) : payBusy && new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('reference') ? (
              <p className="text-sm py-6 text-center text-[#3A3A3A]/70">Confirming your payment…</p>
            ) : (
              <>
                <h2 className="text-2xl mb-2 text-[#2E2A26]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Publish your invitation</h2>
                <p className="text-sm text-[#3A3A3A]/70 mb-4">
                  One payment of <strong>{PRICE_LABEL}</strong> <span className="line-through opacity-60">{USUAL_PRICE_LABEL}</span> (launch special) puts your invitation online with its own link. You can keep editing it afterwards.
                </p>
                <p className="text-sm font-medium mb-2">Add to your order (optional)</p>
                <div className="space-y-2 mb-4">
                  {Object.entries(ADDONS).map(([key, a]) => (
                    <label key={key} className="flex gap-3 items-start text-sm p-3 rounded-lg border cursor-pointer"
                      style={{ borderColor: pickAddons.includes(key) ? '#2E2A26' : '#E5DED2' }}>
                      <input type="checkbox" className="mt-1" checked={pickAddons.includes(key)}
                        onChange={(e) => setPickAddons((s) => e.target.checked ? [...s, key] : s.filter((k) => k !== key))} />
                      <span>
                        <span className="font-medium">{a.label}</span> <span className="opacity-70">+{rand(a.rands)}</span>
                        <span className="block text-[11px] text-[#3A3A3A]/60 leading-snug">{a.blurb} We set it up for you after you pay.</span>
                      </span>
                    </label>
                  ))}
                </div>
                <label className="block text-sm mb-1">Your email (for your payment receipt)</label>
                <input type="email" value={payEmail} onChange={(e) => setPayEmail(e.target.value)} placeholder="you@example.com" className={inputClass} />
                {payError && <p className="text-xs mt-3 text-[#8B4A4A]">{payError}</p>}
                <button type="button" onClick={startPayment} disabled={payBusy || saveState === 'saving'}
                  className="w-full mt-4 px-4 py-3 rounded-lg text-sm font-medium text-white disabled:opacity-60" style={{ background: '#2E2A26' }}>
                  {payBusy ? 'Taking you to Paystack…' : saveState === 'saving' ? 'Saving your changes…' : `Pay ${rand(totalRands(pickAddons))} securely with Paystack`}
                </button>
                <p className="text-[11px] text-[#3A3A3A]/55 mt-3 text-center">Card, instant EFT and more, handled by Paystack. We never see your card details.</p>
              </>
            )}
          </div>
        </div>
      )}

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
            <>
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

            {(() => {
              const base = getTheme(form.theme).colors
              const cd = form.customDesign || { on: false, bg: base.bg, ink: base.ink, accent: base.accent, headingFont: 'Cormorant Garamond', scriptFont: 'Alex Brush' }
              const setCd = (patch) => up({ customDesign: { ...cd, ...patch } })
              const colour = (key, label) => (
                <label className="flex items-center justify-between gap-3 text-sm py-1.5">
                  {label}
                  <input type="color" value={cd[key]} disabled={!cd.on} onChange={(e) => setCd({ [key]: e.target.value })}
                    className="w-12 h-8 rounded border border-[#E5DED2] bg-white" />
                </label>
              )
              return (
                <div className="mt-5 rounded-xl border-2 bg-white p-4" style={{ borderColor: cd.on ? '#2E2A26' : '#E5DED2' }}>
                  <label className="flex items-center gap-3 text-sm font-medium cursor-pointer">
                    <input type="checkbox" checked={!!cd.on} onChange={(e) => setCd({ on: e.target.checked })} />
                    Design your own colours and fonts
                  </label>
                  <p className="text-[11px] text-[#3A3A3A]/55 mt-1 mb-3 leading-snug">Starts from the style you picked above. Modern &amp; Minimal is the cleanest base.</p>
                  {colour('bg', 'Background')}
                  {colour('ink', 'Text')}
                  {colour('accent', 'Accent (buttons and details)')}
                  <label className="block text-sm mt-3">Heading font
                    <select disabled={!cd.on} value={cd.headingFont} onChange={(e) => setCd({ headingFont: e.target.value })} className={inputClass + ' mt-1'}>
                      {HEADING_FONTS.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
                    </select>
                  </label>
                  <label className="block text-sm mt-3">Names font
                    <select disabled={!cd.on} value={cd.scriptFont} onChange={(e) => setCd({ scriptFont: e.target.value })} className={inputClass + ' mt-1'}>
                      {SCRIPT_FONTS.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
                    </select>
                  </label>
                </div>
              )
            })()}
            </>
          )}

          {section === 'addons' && (
            <>
              {boughtAddons.length === 0 ? (
                <p className="text-xs text-[#3A3A3A]/60 leading-snug">
                  {pubStatus === 'published'
                    ? <>Want RSVPBloom or MemoryBloom? <a className="underline" href={`https://wa.me/${SIMONE_WA}?text=${encodeURIComponent('Hi Simone! I would like to add RSVPBloom / MemoryBloom to my invitation: ' + previewUrl)}`} target="_blank" rel="noopener noreferrer">Message us</a> and we will add it.</>
                    : 'You can add RSVPBloom (guest list and RSVPs) or MemoryBloom (a guest photo gallery) when you press Publish.'}
                </p>
              ) : (
                <>
                  <p className="text-xs text-[#3A3A3A]/60 mb-4 leading-snug">We set these up for you after your payment, usually within a day. When they are ready, their links appear here and your invitation connects to them automatically.</p>
                  {boughtAddons.includes('rsvpbloom') && (
                    <Field label="RSVPBloom link" hint={form.rsvpUrl ? 'Connected. Your RSVP button now opens it.' : 'Being set up for you.'}>
                      <input value={form.rsvpUrl || ''} onChange={set('rsvpUrl')} className={inputClass} placeholder="https://..." />
                    </Field>
                  )}
                  {boughtAddons.includes('memorybloom') && (
                    <Field label="MemoryBloom link" hint={form.photoWallUrl ? 'Connected. The "Add your photos" buttons show in your gallery.' : 'Being set up for you.'}>
                      <input value={form.photoWallUrl || ''} onChange={set('photoWallUrl')} className={inputClass} placeholder="https://..." />
                    </Field>
                  )}
                </>
              )}
            </>
          )}

          {section === 'language' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-3">
                This changes the headings, buttons and dates on your invitation. The words you type yourself stay exactly as you wrote them.
              </p>
              <div className="space-y-2">
                {LANGUAGES.map((l) => (
                  <button key={l.key} type="button" onClick={() => up({ lang: l.key })}
                    className="w-full text-left text-sm px-4 py-3 rounded-lg border-2 bg-white flex items-center justify-between"
                    style={{ borderColor: (form.lang || 'en') === l.key ? '#2E2A26' : '#E5DED2' }}>
                    {l.label}
                    {(form.lang || 'en') === l.key && <span>✓</span>}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#3A3A3A]/55 mt-3">Need another language? Message us and we will add it.</p>
            </>
          )}

          {section === 'banner' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-3">The big picture at the top of your invitation. By default it is the animated banner from your style, or you can use your own photo.</p>
              {form.bannerUrl ? (
                <div className="relative rounded-lg overflow-hidden border border-[#E5DED2] mb-3">
                  <img src={form.bannerUrl} alt="" className="w-full h-32 object-cover" style={{ objectPosition: 'center 30%' }} />
                  <button type="button" onClick={() => up({ bannerUrl: '' })}
                    className="absolute top-2 right-2 text-[11px] px-2.5 py-1 rounded-full text-white" style={{ background: 'rgba(58,58,58,0.75)' }}>
                    Use the animated banner
                  </button>
                </div>
              ) : (
                <p className="text-xs mb-3 px-3 py-2 rounded-lg bg-white border border-[#E5DED2]">Using the animated banner from your style.</p>
              )}
              <label className="inline-block text-xs px-5 py-2.5 rounded-full border border-[#7C8B68] text-[#7C8B68] cursor-pointer">
                {uploading ? 'Uploading…' : form.bannerUrl ? 'Change my banner photo' : 'Upload my own banner photo'}
                <input type="file" accept="image/*" className="hidden" disabled={uploading} onChange={handleBanner} />
              </label>
              {uploadError && <p className="text-xs mt-3 text-[#8B4A4A]">{uploadError}</p>}
              <p className="text-[11px] text-[#3A3A3A]/55 mt-3 leading-snug">{BANNER_GUIDE}</p>
            </>
          )}

          {section === 'photos' && (
            <>
              <p className="text-xs text-[#3A3A3A]/60 mb-2">Up to {MAX_PHOTOS}. The first one is your cover for Our Story.</p>
              <p className="text-[11px] text-[#3A3A3A]/55 mb-3 leading-snug">{PHOTO_GUIDE}</p>
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
