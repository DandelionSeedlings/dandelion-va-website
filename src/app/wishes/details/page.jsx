'use client'

import { useState } from 'react'
import Reveal from '../../../components/wishes/Reveal'

// Same central intake endpoint as /wishes/start and /wishes/photo-album —
// this form just tags its payload with a third enquiryType.
const ENQUIRY_API_URL = 'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

function Field({ label, hint, children }) {
  return (
    <div className="mb-4">
      <label className="text-xs text-[#8B7355] mb-1 block">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-[#3A3A3A]/50 mt-1">{hint}</p>}
    </div>
  )
}

const inputClass = 'w-full px-4 py-2.5 rounded-xl border border-[#E5DED2] text-sm'

// Generic add/remove list editor — each row is an object with the given
// field keys, rendered as inputs side by side.
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
            {fields.map((f) => (
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
            ))}
          </div>
          <button type="button" onClick={() => removeRow(i)}
            className="text-xs px-2 py-1 text-[#B04A4A] mt-1">✕</button>
        </div>
      ))}
      <button type="button" onClick={addRow}
        className="text-xs px-4 py-2 rounded-full border border-[#7C8B68] text-[#7C8B68]">
        + {addLabel}
      </button>
    </div>
  )
}

export default function InvitationDetailsPage() {
  const [coupleNames, setCoupleNames] = useState('')
  const [email, setEmail] = useState('')
  const [storyText, setStoryText] = useState('')
  const [milestones, setMilestones] = useState([
    { label: 'First met', year: '' },
    { label: 'First date', year: '' },
    { label: 'The proposal', year: '' },
    { label: 'The wedding', year: '' },
  ])
  const [ceremonyTime, setCeremonyTime] = useState('')
  const [receptionTime, setReceptionTime] = useState('')
  const [schedule, setSchedule] = useState([
    { time: '', label: '' },
  ])
  const [dressCode, setDressCode] = useState({ title: '', blurb: '', ladies: '', gentlemen: '' })
  const [accommodationOptions, setAccommodationOptions] = useState([])
  const [rsvpDeadline, setRsvpDeadline] = useState('')
  const [coordinators, setCoordinators] = useState([])
  const [registryLinks, setRegistryLinks] = useState([])
  const [faqs, setFaqs] = useState([
    { q: 'What should I wear?', a: '' },
    { q: 'Is there parking?', a: '' },
  ])
  const [weddingParty, setWeddingParty] = useState([])
  const [spotifyTrackUrl, setSpotifyTrackUrl] = useState('')
  const [photosLink, setPhotosLink] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const payload = {
      enquiryType: 'invitation-details',
      coupleNames, email, storyText, milestones,
      ceremonyTime, receptionTime, schedule, dressCode, accommodationOptions,
      rsvpDeadline, coordinators, registryLinks, faqs, weddingParty,
      spotifyTrackUrl, photosLink, notes,
    }
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
      <div className="min-h-[70vh] flex items-center justify-center px-6 bg-[#FAF6F0]">
        <Reveal className="text-center max-w-md">
          <p className="text-4xl mb-4" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>
            Thank you
          </p>
          <h1 className="text-2xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Your details are in
          </h1>
          <p className="text-sm text-[#3A3A3A]/70">
            Everything you shared is on its way to us. We&apos;ll use it to build out your
            invitation and follow up if anything needs a closer look.
          </p>
        </Reveal>
      </div>
    )
  }

  return (
    <div className="bg-[#FAF6F0] text-[#3A3A3A] min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Reveal className="text-center mb-14">
          <p className="text-2xl mb-3" style={{ fontFamily: "'Alex Brush', cursive", color: '#8B7355' }}>
            Let&apos;s fill in the rest
          </p>
          <h1 className="text-3xl mb-4 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Tell us your story
          </h1>
          <p className="text-sm text-[#3A3A3A]/70 max-w-md mx-auto">
            Everything below shapes your actual invitation page. Skip anything you&apos;re not
            sure about yet, you can always send it through later.
          </p>
        </Reveal>

        <form onSubmit={handleSubmit} className="space-y-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">The basics</p>
            <div className="bg-white rounded-2xl p-6">
              <Field label="Your names">
                <input required value={coupleNames} onChange={(e) => setCoupleNames(e.target.value)}
                  className={inputClass} placeholder="e.g. Theoné & Ra" />
              </Field>
              <Field label="Email" hint="So we know whose details these are">
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={inputClass} />
              </Field>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Our story</p>
            <div className="bg-white rounded-2xl p-6">
              <Field label="Tell us how it all started" hint="This becomes your Our Story section">
                <textarea value={storyText} onChange={(e) => setStoryText(e.target.value)} rows={4}
                  className={`${inputClass} resize-y`} />
              </Field>
              <label className="text-xs text-[#8B7355] mb-2 block">Milestones</label>
              <ListEditor
                items={milestones}
                setItems={setMilestones}
                fields={[
                  { key: 'label', placeholder: 'e.g. First met' },
                  { key: 'year', placeholder: 'e.g. 2019' },
                ]}
                addLabel="Add a milestone"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">The day</p>
            <div className="bg-white rounded-2xl p-6">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Field label="Ceremony time">
                  <input value={ceremonyTime} onChange={(e) => setCeremonyTime(e.target.value)}
                    className={inputClass} placeholder="e.g. 15:00" />
                </Field>
                <Field label="Reception time">
                  <input value={receptionTime} onChange={(e) => setReceptionTime(e.target.value)}
                    className={inputClass} placeholder="e.g. 17:00" />
                </Field>
              </div>
              <label className="text-xs text-[#8B7355] mb-2 block">Order of the day</label>
              <ListEditor
                items={schedule}
                setItems={setSchedule}
                fields={[
                  { key: 'time', placeholder: 'e.g. 16:00' },
                  { key: 'label', placeholder: 'e.g. Canapés & Champagne' },
                ]}
                addLabel="Add a moment"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Dress code</p>
            <div className="bg-white rounded-2xl p-6">
              <Field label="How would you describe it?" hint="e.g. Formal, Garden Formal, Black Tie">
                <input value={dressCode.title} onChange={(e) => setDressCode({ ...dressCode, title: e.target.value })}
                  className={inputClass} />
              </Field>
              <Field label="A line for your guests">
                <input value={dressCode.blurb} onChange={(e) => setDressCode({ ...dressCode, blurb: e.target.value })}
                  className={inputClass} placeholder="e.g. We'd love you to dress up with us!" />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Guidance for ladies">
                  <input value={dressCode.ladies} onChange={(e) => setDressCode({ ...dressCode, ladies: e.target.value })}
                    className={inputClass} />
                </Field>
                <Field label="Guidance for gentlemen">
                  <input value={dressCode.gentlemen} onChange={(e) => setDressCode({ ...dressCode, gentlemen: e.target.value })}
                    className={inputClass} />
                </Field>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Accommodation (optional)</p>
            <div className="bg-white rounded-2xl p-6">
              <ListEditor
                items={accommodationOptions}
                setItems={setAccommodationOptions}
                fields={[
                  { key: 'name', placeholder: 'Hotel or guesthouse name' },
                  { key: 'note', placeholder: 'Distance, price range' },
                  { key: 'href', placeholder: 'Booking link', span: 2 },
                ]}
                addLabel="Add a place to stay"
              />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">RSVP</p>
            <div className="bg-white rounded-2xl p-6">
              <Field label="RSVP by">
                <input value={rsvpDeadline} onChange={(e) => setRsvpDeadline(e.target.value)}
                  className={inputClass} placeholder="e.g. 30 August 2027" />
              </Field>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Need a little help? (optional)</p>
            <div className="bg-white rounded-2xl p-6">
              <ListEditor
                items={coordinators}
                setItems={setCoordinators}
                fields={[
                  { key: 'name', placeholder: 'Name' },
                  { key: 'role', placeholder: 'e.g. Wedding Coordinator' },
                  { key: 'phone', placeholder: 'Phone number', span: 2 },
                ]}
                addLabel="Add a contact"
              />
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Gift registry (optional)</p>
            <div className="bg-white rounded-2xl p-6">
              <ListEditor
                items={registryLinks}
                setItems={setRegistryLinks}
                fields={[
                  { key: 'label', placeholder: 'e.g. Our Takealot registry' },
                  { key: 'href', placeholder: 'Link' },
                ]}
                addLabel="Add a registry link"
              />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Wedding party (optional)</p>
            <div className="bg-white rounded-2xl p-6">
              <ListEditor
                items={weddingParty}
                setItems={setWeddingParty}
                fields={[
                  { key: 'name', placeholder: 'Name' },
                  { key: 'role', placeholder: 'e.g. Maid of Honour' },
                  { key: 'note', placeholder: 'A short, fun note about them', span: 2 },
                ]}
                addLabel="Add someone"
              />
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">Quick answers (optional)</p>
            <div className="bg-white rounded-2xl p-6">
              <ListEditor
                items={faqs}
                setItems={setFaqs}
                fields={[
                  { key: 'q', placeholder: 'Question' },
                  { key: 'a', placeholder: 'Answer', type: 'textarea', span: 2 },
                ]}
                addLabel="Add a question"
              />
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="text-xs uppercase tracking-[2px] text-[#7C8B68] mb-4">A few last things</p>
            <div className="bg-white rounded-2xl p-6 space-y-4">
              <Field label="Your song, if you have one" hint="Paste a normal Spotify track link">
                <input value={spotifyTrackUrl} onChange={(e) => setSpotifyTrackUrl(e.target.value)}
                  className={inputClass} placeholder="https://open.spotify.com/track/..." />
              </Field>
              <Field label="A link to your photos" hint="A Google Drive, Dropbox, or shared album link — or just email/WhatsApp them to us separately">
                <input value={photosLink} onChange={(e) => setPhotosLink(e.target.value)}
                  className={inputClass} />
              </Field>
              <Field label="Anything else we should know?">
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3}
                  className={`${inputClass} resize-y`} />
              </Field>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-full font-medium text-white disabled:opacity-60"
              style={{ background: '#7C8B68' }}
            >
              {status === 'sending' ? 'Sending...' : 'Send our details'}
            </button>
            {status === 'error' && (
              <p className="text-sm text-center mt-4" style={{ color: '#8B4A4A' }}>
                Something didn&apos;t go through, please{' '}
                <a href="https://wa.me/27728393087" className="underline">WhatsApp us directly</a>{' '}
                instead for now.
              </p>
            )}
          </Reveal>
        </form>
      </div>
    </div>
  )
}