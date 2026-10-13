'use client'
// src/components/wishes/RsvpSection.jsx
//
// Program timeline + RSVP form for the Theoné & Ra save-the-date.
// Drop <RsvpSection content={theoneAndRaContent} /> into the page.
// Posts JSON to content.rsvpUrl (Apps Script) with fetch no-cors, text/plain.

import { useState } from 'react'

const COPY = {
  en: {
    programTitle: 'The Day',
    timeToFollow: 'Time to follow',
    rsvpTitle: 'Will you join us?',
    rsvpSub: (d) => `Please reply by ${d}.`,
    name: 'Your name',
    contact: 'Phone or email',
    yes: 'Yes, we will be there',
    no: 'Sadly, we cannot make it',
    adults: 'Adults',
    children: 'Children',
    party: 'Names of everyone coming with you',
    dietary: 'Any dietary needs?',
    songs: 'Song picks for the dance floor',
    songsHint: 'One song per line, or "Song, Artist".',
    message: 'A message for Theoné & Ra (optional)',
    send: 'Send RSVP',
    sending: 'Sending...',
    thanksYes: 'Thank you! We cannot wait to celebrate with you.',
    thanksNo: 'Thank you for letting us know. We will miss you.',
    error: 'Something went wrong. Please try again, or send us a WhatsApp.',
    whatsapp: 'Reply on WhatsApp instead',
    required: 'Please add your name and choose yes or no.',
    notes: 'Children are welcome. Partners and plus ones are welcome too. A fixed menu: spitbraai with salads.',
  },
  af: {
    programTitle: 'Die Dag',
    timeToFollow: 'Tyd volg',
    rsvpTitle: 'Gaan jy by ons wees?',
    rsvpSub: (d) => `Antwoord asseblief teen ${d}.`,
    name: 'Jou naam',
    contact: 'Foonnommer of e-pos',
    yes: 'Ja, ons sal daar wees',
    no: 'Ongelukkig kan ons nie kom nie',
    adults: 'Volwassenes',
    children: 'Kinders',
    party: 'Name van almal wat saam met jou kom',
    dietary: 'Enige dieetvereistes?',
    songs: 'Liedjies vir die dansvloer',
    songsHint: 'Een lied per reël, of "Lied, Kunstenaar".',
    message: "'n Boodskap vir Theoné & Ra (opsioneel)",
    send: 'Stuur RSVP',
    sending: 'Stuur tans...',
    thanksYes: 'Dankie! Ons kan nie wag om saam met jou te vier nie.',
    thanksNo: 'Dankie dat jy ons laat weet het. Ons sal jou mis.',
    error: 'Iets het skeefgeloop. Probeer asseblief weer, of stuur vir ons \'n WhatsApp.',
    whatsapp: 'Antwoord eerder op WhatsApp',
    required: 'Vul asseblief jou naam in en kies ja of nee.',
    notes: 'Kinders is welkom. Lewensmaats en gaste is ook welkom. Vaste spyskaart: spitbraai met slaaie.',
  },
}

const ICONS = {
  ceremony: <path d="M8 21v-7a4 4 0 0 1 8 0v7M5 21h14M12 3v4M10 5h4" />,
  toast: <path d="M7 3h4l-1 7a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM13 3h4l-1 7a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM9 12v8M15 12v8M7 20h4M13 20h4" />,
  cocktail: <path d="M5 4h14l-7 9zM12 13v7M8 20h8" />,
  dinner: <path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-2 6 0 8v10" />,
  cake: <path d="M4 20h16M5 20v-6h14v6M5 14c2 2 4-2 7 0s5-2 7 0M12 6v4M12 3v1" />,
  dance: <path d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 8v6l-3 6M12 14l3 6M8 11l4-2 4 2" />,
  exit: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
  photos: <path d="M4 7h4l2-2h4l2 2h4v12H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name] || ICONS.ceremony}
    </svg>
  )
}

export default function RsvpSection({ content, accent = '#202D28', font = 'inherit', textColor = '#202D28' }) {
  const t = COPY[content.rsvpLanguage] || COPY.en
  const [attending, setAttending] = useState('')
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [status, setStatus] = useState('idle') // idle | sending | done | error | invalid
  const [form, setForm] = useState({ name: '', contact: '', party: '', dietary: '', songs: '', message: '', website: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const waHref = `https://wa.me/${content.rsvpWaNumber}?text=${encodeURIComponent(
    `Hi Theoné & Ra, RSVP: ${form.name || ''}`
  )}`

  async function submit(e) {
    e.preventDefault()
    if (!form.name.trim() || !attending) return setStatus('invalid')
    if (!content.rsvpUrl) return setStatus('error')
    setStatus('sending')
    try {
      await fetch(content.rsvpUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...form, attending, adults, children }),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const field = 'w-full rounded-lg border border-black/15 bg-white/80 px-4 py-3 text-base outline-none focus:border-[var(--acc)]'
  const label = 'mb-1 block text-sm tracking-wide'

  return (
    <section id="rsvp" className="mx-auto w-full max-w-xl px-5 py-16" style={{ '--acc': accent, fontFamily: font, color: textColor }}>
      {/* Program */}
      <h2 className="text-center text-3xl mb-10">{t.programTitle}</h2>
      <div className="relative mb-16">
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: accent, opacity: 0.4 }} />
        <ol className="space-y-8">
          {content.schedule.map((s, i) => (
            <li key={i} className="relative grid grid-cols-2 items-center gap-10">
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: accent }} />
              <div className={s.side === 'left' ? 'text-right col-start-1' : 'text-left col-start-2'} style={{ color: accent }}>
                <div className={`flex flex-col ${s.side === 'left' ? 'items-end' : 'items-start'} gap-1`}>
                  <Icon name={s.icon} />
                  <span className="text-lg font-medium">{s.time || t.timeToFollow}</span>
                  <span className="text-sm opacity-80">{content.rsvpLanguage === 'af' && s.labelAf ? s.labelAf : s.label}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
        {content.scheduleNote && <p className="mt-8 text-center text-sm opacity-70">{content.rsvpLanguage === 'af' && content.scheduleNoteAf ? content.scheduleNoteAf : content.scheduleNote}</p>}
      </div>

      {/* RSVP */}
      <h2 className="text-center text-3xl">{t.rsvpTitle}</h2>
      <p className="mt-2 mb-8 text-center opacity-80">{t.rsvpSub(content.rsvpDeadline)}</p>

      {status === 'done' ? (
        <p className="rounded-xl bg-white/70 p-8 text-center text-lg">{attending === 'Yes' ? t.thanksYes : t.thanksNo}</p>
      ) : (
        <form onSubmit={submit} className="space-y-5 rounded-xl bg-white/60 p-6 sm:p-8 text-base" noValidate>
          <div>
            <label className={label} htmlFor="rsvp-name">{t.name}</label>
            <input id="rsvp-name" className={field} value={form.name} onChange={set('name')} autoComplete="name" required />
          </div>
          <div>
            <label className={label} htmlFor="rsvp-contact">{t.contact}</label>
            <input id="rsvp-contact" className={field} value={form.contact} onChange={set('contact')} autoComplete="email" />
          </div>

          <fieldset className="grid gap-3 sm:grid-cols-2">
            {[['Yes', t.yes], ['No', t.no]].map(([v, text]) => (
              <button
                type="button"
                key={v}
                onClick={() => setAttending(v)}
                aria-pressed={attending === v}
                className="rounded-lg border px-4 py-3 text-left transition"
                style={attending === v ? { background: accent, color: '#fff', borderColor: accent } : { borderColor: 'rgba(0,0,0,.15)', background: 'rgba(255,255,255,.8)' }}
              >
                {text}
              </button>
            ))}
          </fieldset>

          {attending === 'Yes' && (
            <>
              <div className="grid grid-cols-2 gap-4">
                {[[t.adults, adults, setAdults, 1], [t.children, children, setChildren, 0]].map(([l, v, setter, min]) => (
                  <div key={l}>
                    <label className={label}>{l}</label>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => setter(Math.max(min, v - 1))} className="h-10 w-10 rounded-full border" aria-label={`Fewer ${l}`}>-</button>
                      <span className="w-6 text-center">{v}</span>
                      <button type="button" onClick={() => setter(Math.min(12, v + 1))} className="h-10 w-10 rounded-full border" aria-label={`More ${l}`}>+</button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm opacity-70">{t.notes}</p>
              <div>
                <label className={label} htmlFor="rsvp-party">{t.party}</label>
                <textarea id="rsvp-party" rows={2} className={field} value={form.party} onChange={set('party')} />
              </div>
              <div>
                <label className={label} htmlFor="rsvp-diet">{t.dietary}</label>
                <input id="rsvp-diet" className={field} value={form.dietary} onChange={set('dietary')} />
              </div>
              <div>
                <label className={label} htmlFor="rsvp-songs">{t.songs}</label>
                <textarea id="rsvp-songs" rows={3} className={field} value={form.songs} onChange={set('songs')} />
                <p className="mt-1 text-xs opacity-60">{t.songsHint}</p>
              </div>
            </>
          )}

          <div>
            <label className={label} htmlFor="rsvp-msg">{t.message}</label>
            <textarea id="rsvp-msg" rows={3} className={field} value={form.message} onChange={set('message')} />
          </div>

          {/* Honeypot: hidden from people, bots fill it */}
          <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set('website')} style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }} />

          {status === 'invalid' && <p role="alert" className="text-sm text-red-700">{t.required}</p>}
          {status === 'error' && <p role="alert" className="text-sm text-red-700">{t.error}</p>}

          <button type="submit" disabled={status === 'sending'} className="w-full rounded-lg px-6 py-3 text-white disabled:opacity-60" style={{ background: accent }}>
            {status === 'sending' ? t.sending : t.send}
          </button>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="block text-center text-sm underline opacity-80">{t.whatsapp}</a>
        </form>
      )}
    </section>
  )
}
