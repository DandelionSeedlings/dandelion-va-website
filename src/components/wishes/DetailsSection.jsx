
// src/components/wishes/DetailsSection.jsx
// Program, place and practical notes for the Theoné & Ra save-the-date.
// Afrikaans. Each topic sits in its own card. No state, server-safe.

const ICONS = {
  ceremony: <path d="M8 21v-7a4 4 0 0 1 8 0v7M5 21h14M12 3v4M10 5h4" />,
  toast: <path d="M7 3h4l-1 7a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM13 3h4l-1 7a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM9 12v8M15 12v8M7 20h4M13 20h4" />,
  cocktail: <path d="M5 4h14l-7 9zM12 13v7M8 20h8" />,
  dinner: <path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-2 6 0 8v10" />,
  cake: <path d="M4 20h16M5 20v-6h14v6M5 14c2 2 4-2 7 0s5-2 7 0M12 6v4M12 3v1" />,
  dance: <path d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 8v6l-3 6M12 14l3 6M8 11l4-2 4 2" />,
  pin: <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
  hanger: <path d="M12 7a2 2 0 1 1 2 2c-1.2.5-2 1-2 2.2V12l9 6.5a1 1 0 0 1-.6 1.8H3.6A1 1 0 0 1 3 18.5L12 12" />,
  bed: <path d="M3 19V6M3 14h18v5M21 14v-2a3 3 0 0 0-3-3h-7v5M7 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />,
  chat: <path d="M4 5h16v11H9l-5 4zM8 9.5h8M8 12.5h5" />,
}

function Icon({ name, size = 30 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.ceremony}
    </svg>
  )
}

export default function DetailsSection({
  content,
  ink = '#202D28',
  font = 'inherit',
  script = 'cursive',
}) {
  const card = {
    background: '#F4EEE8',
    border: '1px solid rgba(32,45,40,0.12)',
    borderRadius: 18,
    padding: '24px 20px',
    textAlign: 'center',
    boxShadow: '0 8px 24px -16px rgba(44,58,54,0.35)',
  }

  const title = {
    fontFamily: script,
    fontSize: 34,
    fontWeight: 400,
    margin: '6px 0 12px',
    lineHeight: 1.1,
  }

  const label = {
    fontSize: 13,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    fontWeight: 600,
    margin: '6px 0 8px',
  }

  const text = {
    fontSize: 18,
    lineHeight: 1.45,
    margin: 0,
  }

  const pill = {
    display: 'inline-block',
    padding: '9px 20px',
    borderRadius: 999,
    border: '1px solid ' + ink,
    color: ink,
    textDecoration: 'none',
    fontSize: 16,
    margin: '4px 4px 0',
  }

  const filled = {
    ...pill,
    background: ink,
    color: '#FDF9F6',
  }

  const wa = (n) => 'https://wa.me/' + n

  return (
    <section
      id="besonderhede"
      style={{
        fontFamily: font,
        color: ink,
        width: '100%',
        maxWidth: 520,
        padding: '48px 16px 0',
        margin: '0 auto',
        display: 'grid',
        gap: 16,
        boxSizing: 'border-box',
      }}
    >
      {/* Program */}
      <div style={card}>
        <h2 style={title}>Die Dag</h2>

        <ol
          style={{
            listStyle: 'none',
            margin: '18px 0 0',
            padding: 0,
            position: 'relative',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 1,
              background: ink,
              opacity: 0.3,
            }}
          />

          {content.schedule.map((s, i) => (
            <li
              key={i}
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                columnGap: 30,
                alignItems: 'center',
                marginBottom: 24,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#C9A66B',
                  transform: 'translate(-50%,-50%)',
                }}
              />

              <div
                style={{
                  gridColumn: s.side === 'left' ? 1 : 2,
                  textAlign: s.side === 'left' ? 'right' : 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems:
                    s.side === 'left' ? 'flex-end' : 'flex-start',
                  gap: 2,
                  minWidth: 0,
                }}
              >
                <Icon name={s.icon} size={32} />

                {s.time && (
                  <span style={{ fontSize: 19, fontWeight: 600 }}>
                    {s.time}
                  </span>
                )}

                <span style={{ fontSize: 17 }}>{s.label}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Plek */}
      <div style={card}>
        <Icon name="pin" />
        <h2 style={title}>Plek</h2>

        <p style={text}>
          <strong>{content.ceremony.venue}</strong>
          <br />
          {content.ceremony.location}
          <br />
          Troudiens om {content.ceremony.time.replace(':', 'h')}
        </p>

        <div style={{ marginTop: 14 }}>
          <a
            href={content.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={filled}
          >
            Kaart
          </a>

          <a
            href={content.venueUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={pill}
          >
            Indawo
          </a>
        </div>

        <p
          style={{
            ...text,
            fontSize: 16,
            opacity: 0.8,
            marginTop: 14,
          }}
        >
          Daar is 'n boomhek by die ingang.
        </p>
      </div>

      {/* Kleredrag + Spyskaart + Kroeg — mobile-first */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 12,
          alignItems: 'stretch',
        }}
      >
        {/* Kleredrag */}
        <div
          style={{
            ...card,
            padding: '22px 10px',
            minWidth: 0,
            boxSizing: 'border-box',
          }}
        >
          <Icon name="hanger" />
          <p style={label}>Kleredrag</p>
          <p style={text}>Semi-formeel</p>
        </div>

        {/* Spyskaart — unchanged */}
        <div
          style={{
            ...card,
            padding: '22px 10px',
            minWidth: 0,
            boxSizing: 'border-box',
          }}
        >
          <Icon name="dinner" />
          <p style={label}>Spyskaart</p>
          <p style={text}>Spitbraai met bykosse</p>
        </div>

        {/* Kroeg — replaces cupcakes */}
        <div
          style={{
            ...card,
            padding: '22px 10px',
            gridColumn: '1 / -1',
            width: 'calc(50% - 6px)',
            justifySelf: 'center',
            minWidth: 0,
            boxSizing: 'border-box',
          }}
        >
          <Icon name="cocktail" />
          <p style={label}>Kroeg</p>
          <p style={text}>Beskikbaar</p>
        </div>
      </div>

      {/* Slaapplek */}
      <div style={card}>
        <Icon name="bed" />
        <h2 style={title}>Slaapplek</h2>
        <p style={text}>Akkomodasie beskikbaar by Indawo.</p>

        <div style={{ marginTop: 12 }}>
          <a href={wa('27727799748')} style={pill}>
            +27 83 640 7262
          </a>
        </div>
      </div>

      {/* Vrae */}
      <div style={card}>
        <Icon name="chat" />
        <h2 style={title}>Vrae oor die troue?</h2>

        <div>
          <a href={wa('27765670125')} style={pill}>
            Theoné +27 76 567 0125
          </a>

          <a href={wa('27783533366')} style={pill}>
            Ra +27 78 353 3366
          </a>
        </div>
      </div>
    </section>
  )
}
