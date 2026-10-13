// src/components/wishes/DetailsSection.jsx
// Program, place and practical notes for the Theoné & Ra save-the-date. Afrikaans.
// Pure server-safe component, no state.

const ICONS = {
  ceremony: <path d="M8 21v-7a4 4 0 0 1 8 0v7M5 21h14M12 3v4M10 5h4" />,
  toast: <path d="M7 3h4l-1 7a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM13 3h4l-1 7a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM9 12v8M15 12v8M7 20h4M13 20h4" />,
  cocktail: <path d="M5 4h14l-7 9zM12 13v7M8 20h8" />,
  dinner: <path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-2 6 0 8v10" />,
  cake: <path d="M4 20h16M5 20v-6h14v6M5 14c2 2 4-2 7 0s5-2 7 0M12 6v4M12 3v1" />,
  dance: <path d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 8v6l-3 6M12 14l3 6M8 11l4-2 4 2" />,
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name] || ICONS.ceremony}
    </svg>
  )
}

export default function DetailsSection({ content, ink = '#202D28', font = 'inherit', script = 'cursive' }) {
  const link = { color: ink, textDecoration: 'underline', textUnderlineOffset: 3 }
  const h = { fontFamily: script, fontSize: 38, fontWeight: 400, textAlign: 'center', margin: '0 0 18px', lineHeight: 1.1 }
  const row = { margin: '0 0 14px', lineHeight: 1.5, fontSize: 18 }
  const small = { fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 2px' }

  return (
    <section id="besonderhede" style={{ fontFamily: font, color: ink, width: '100%', maxWidth: 520, padding: '56px 20px 0', margin: '0 auto' }}>
      <h2 style={h}>Die Dag</h2>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, position: 'relative' }}>
        <span aria-hidden="true" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: ink, opacity: 0.3 }} />
        {content.schedule.map((s, i) => (
          <li key={i} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 36, alignItems: 'center', marginBottom: 26 }}>
            <span aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', width: 10, height: 10, borderRadius: '50%', background: '#C9A66B', transform: 'translate(-50%,-50%)' }} />
            <div style={{ gridColumn: s.side === 'left' ? 1 : 2, textAlign: s.side === 'left' ? 'right' : 'left', display: 'flex', flexDirection: 'column', alignItems: s.side === 'left' ? 'flex-end' : 'flex-start', gap: 2 }}>
              <Icon name={s.icon} />
              {s.time && <span style={{ fontSize: 20, fontWeight: 600 }}>{s.time}</span>}
              <span style={{ fontSize: 17 }}>{s.label}</span>
            </div>
          </li>
        ))}
      </ol>
      {content.scheduleNote && <p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 17, margin: '4px 0 0' }}>{content.scheduleNote}</p>}

      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #C9A66B, transparent)', margin: '44px 0' }} />

      <h2 style={h}>Plek</h2>
      <p style={{ ...row, textAlign: 'center' }}>
        <strong>{content.ceremony.venue}</strong><br />
        {content.ceremony.location}<br />
        Troudiens om {content.ceremony.time.replace(':', 'h')}
      </p>
      <p style={{ ...row, textAlign: 'center' }}>
        <a href={content.mapUrl} target="_blank" rel="noopener noreferrer" style={link}>Kaart</a>
        {'  ·  '}
        <a href={content.venueUrl} target="_blank" rel="noopener noreferrer" style={link}>Indawo Game Lodge</a>
      </p>
      <p style={{ ...row, textAlign: 'center', fontSize: 16, opacity: 0.85 }}>Daar is 'n boomhek by die ingang.</p>

      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #C9A66B, transparent)', margin: '44px 0' }} />

      <h2 style={h}>Goed om te weet</h2>
      <div>
        <p style={small}>Kleredrag</p>
        <p style={row}>Smart casual.</p>
        <p style={small}>Spyskaart</p>
        <p style={row}>Vaste spyskaart: spitbraai met slaaie.</p>
        <p style={small}>Kinders en gaste</p>
        <p style={row}>Kinders is welkom. Die uitnodiging gaan aan die hoof van die huishouding. Gee asseblief in die RSVP vir almal wat saam kom, met name en of hulle volwassenes of kinders is.</p>
        <p style={small}>Slaapplek</p>
        <p style={row}>
          By Indawo. Kontak Lauriska Eksteen:{' '}
          <a href="https://wa.me/27836407262" style={link}>+27 83 640 7262</a>
        </p>
        <p style={small}>Vrae oor die troue</p>
        <p style={row}>
          Theoné <a href="https://wa.me/27765670125" style={link}>+27 76 567 0125</a><br />
          Ra <a href="https://wa.me/27783533366" style={link}>+27 78 353 3366</a>
        </p>
      </div>
    </section>
  )
}
