// src/components/cv/CvDocument.jsx
//
// The CV itself. One column on purpose: the screening software big employers use
// reads a single column top to bottom, and fancy two-column layouts often come
// out scrambled. Used for the live preview, the landing page samples and the PDF.

export const TEMPLATES = [
  { key: 'classic', label: 'Classic', desc: 'Serif name, quiet rules. Safe for any industry.' },
  { key: 'clean', label: 'Clean', desc: 'Plain and modern. Lots of white space.' },
  { key: 'compact', label: 'Compact', desc: 'Tighter, for a long work history.' },
]

export const ACCENTS = [
  { key: '#1F2A44', label: 'Ink' },
  { key: '#2F4A3A', label: 'Forest' },
  { key: '#5A2A2F', label: 'Wine' },
  { key: '#3D3D3D', label: 'Charcoal' },
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function monthLabel(v) {
  const m = /^(\d{4})-(\d{2})$/.exec(String(v || ''))
  if (!m) return String(v || '')
  return MONTHS[Number(m[2]) - 1] + ' ' + m[1]
}

function range(job) {
  const a = monthLabel(job.start)
  const b = job.current ? 'Present' : monthLabel(job.end)
  if (a && b) return a + ' to ' + b
  return a || b || ''
}

function lines(text) {
  return String(text || '').split('\n').map((s) => s.replace(/^[\s•\-*]+/, '').trim()).filter(Boolean)
}

function has(v) { return String(v || '').trim().length > 0 }

const FONTS = {
  classic: { body: "Georgia, 'Times New Roman', serif", head: "Georgia, 'Times New Roman', serif" },
  clean: { body: "Inter, 'Helvetica Neue', Arial, sans-serif", head: "Inter, 'Helvetica Neue', Arial, sans-serif" },
  compact: { body: "'Helvetica Neue', Arial, sans-serif", head: "'Helvetica Neue', Arial, sans-serif" },
}

export default function CvDocument({ cv }) {
  const t = cv.template in FONTS ? cv.template : 'classic'
  const accent = cv.accent || '#1F2A44'
  const f = FONTS[t]
  const compact = t === 'compact'
  const size = compact ? 10 : 10.5
  const gap = compact ? 12 : 17

  const contact = [cv.phone, cv.email, cv.location, cv.linkedin].filter(has)
  const personal = []
  if (has(cv.licence)) personal.push(["Driver's licence", cv.licence + (cv.ownTransport ? ', own transport' : '')])
  else if (cv.ownTransport) personal.push(['Transport', 'Own transport'])
  if (has(cv.idNumber)) personal.push(['ID number', cv.idNumber])
  if (has(cv.notice)) personal.push(['Notice period', cv.notice])
  if (has(cv.availability)) personal.push(['Available', cv.availability])

  const jobs = (cv.jobs || []).filter((j) => has(j.title) || has(j.employer))
  const edu = (cv.education || []).filter((e) => has(e.qualification) || has(e.school))
  const skills = String(cv.skills || '').split(/[,\n]/).map((s) => s.trim()).filter(Boolean)
  const langs = (cv.languages || []).filter((l) => has(l.lang))
  const refs = (cv.references || []).filter((r) => has(r.name))

  const section = (title, body) => (
    <section style={{ marginTop: gap, breakInside: 'avoid-page' }}>
      <h2 style={{
        fontFamily: f.head, fontSize: t === 'classic' ? 11 : 10, fontWeight: t === 'classic' ? 700 : 600,
        letterSpacing: t === 'classic' ? '0.14em' : '0.1em', textTransform: 'uppercase', color: accent,
        margin: 0, paddingBottom: 4, borderBottom: t === 'clean' ? 'none' : `0.75px solid ${accent}55`,
      }}>{title}</h2>
      <div style={{ marginTop: t === 'clean' ? 4 : 7 }}>{body}</div>
    </section>
  )

  return (
    <article className="cv-doc" style={{ fontFamily: f.body, fontSize: size, lineHeight: 1.45, color: '#1d1d1d' }}>
      <header style={{ textAlign: t === 'classic' ? 'center' : 'left' }}>
        <h1 style={{
          fontFamily: f.head, margin: 0, color: t === 'classic' ? '#141414' : accent,
          fontSize: compact ? 21 : t === 'classic' ? 25 : 26, fontWeight: t === 'classic' ? 400 : 700,
          letterSpacing: t === 'classic' ? '0.04em' : '-0.01em',
        }}>{has(cv.name) ? cv.name : 'Your Name'}</h1>
        {has(cv.headline) && <p style={{ margin: '3px 0 0', fontSize: size + 1, color: '#444', fontStyle: t === 'classic' ? 'italic' : 'normal' }}>{cv.headline}</p>}
        {contact.length > 0 && (
          <p style={{ margin: '6px 0 0', fontSize: size - 0.5, color: '#444' }}>{contact.join('  |  ')}</p>
        )}
        {t === 'classic' && <div style={{ margin: '10px auto 0', width: 46, borderTop: `1.5px solid ${accent}` }} />}
      </header>

      {has(cv.summary) && section('Profile', <p style={{ margin: 0 }}>{cv.summary.trim()}</p>)}

      {jobs.length > 0 && section('Work experience', jobs.map((j, i) => (
        <div key={i} style={{ marginTop: i ? (compact ? 8 : 11) : 0, breakInside: 'avoid' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
            <b style={{ fontSize: size + 0.5 }}>{j.title}</b>
            <span style={{ fontSize: size - 0.5, color: '#555', whiteSpace: 'nowrap' }}>{range(j)}</span>
          </div>
          {(has(j.employer) || has(j.place)) && (
            <div style={{ color: '#444', fontStyle: t === 'classic' ? 'italic' : 'normal' }}>{[j.employer, j.place].filter(has).join(', ')}</div>
          )}
          {lines(j.points).length > 0 && (
            <ul style={{ margin: '3px 0 0', paddingLeft: 15, listStyle: 'disc' }}>
              {lines(j.points).map((p, k) => <li key={k} style={{ margin: '1px 0' }}>{p}</li>)}
            </ul>
          )}
        </div>
      )))}

      {edu.length > 0 && section('Education', edu.map((e, i) => (
        <div key={i} style={{ marginTop: i ? 7 : 0, breakInside: 'avoid' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
            <b>{e.qualification}</b>
            <span style={{ fontSize: size - 0.5, color: '#555', whiteSpace: 'nowrap' }}>{e.year}</span>
          </div>
          {has(e.school) && <div style={{ color: '#444' }}>{e.school}</div>}
          {has(e.note) && <div style={{ color: '#555', fontSize: size - 0.5 }}>{e.note}</div>}
        </div>
      )))}

      {(skills.length > 0 || langs.length > 0) && section(langs.length && skills.length ? 'Skills and languages' : skills.length ? 'Skills' : 'Languages', (
        <div>
          {skills.length > 0 && <p style={{ margin: 0 }}>{skills.join('  ·  ')}</p>}
          {langs.length > 0 && <p style={{ margin: skills.length ? '4px 0 0' : 0 }}><span style={{ color: '#555' }}>Languages: </span>{langs.map((l) => l.lang + (has(l.level) ? ' (' + l.level.toLowerCase() + ')' : '')).join(', ')}</p>}
        </div>
      ))}

      {personal.length > 0 && section('Personal details', (
        <table style={{ borderCollapse: 'collapse', fontSize: size }}>
          <tbody>{personal.map(([k, v]) => (
            <tr key={k}><td style={{ padding: '1px 18px 1px 0', color: '#555', whiteSpace: 'nowrap', verticalAlign: 'top' }}>{k}</td><td style={{ padding: '1px 0' }}>{v}</td></tr>
          ))}</tbody>
        </table>
      ))}

      {(cv.refsOnRequest || refs.length > 0) && section('References', cv.refsOnRequest || !refs.length ? (
        <p style={{ margin: 0 }}>Available on request.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: refs.length > 1 ? '1fr 1fr' : '1fr', gap: '8px 24px' }}>
          {refs.map((r, i) => (
            <div key={i} style={{ breakInside: 'avoid' }}>
              <b>{r.name}</b>
              {has(r.role) && <div style={{ color: '#444' }}>{[r.role, r.company].filter(has).join(', ')}</div>}
              {!has(r.role) && has(r.company) && <div style={{ color: '#444' }}>{r.company}</div>}
              {has(r.phone) && <div style={{ color: '#444' }}>{r.phone}</div>}
            </div>
          ))}
        </div>
      ))}
    </article>
  )
}

// A believable person, so the samples and an empty builder never look like a template filled with lorem ipsum.
export const SAMPLE_CV = {
  template: 'classic', accent: '#1F2A44',
  name: 'Lindiwe Dube', headline: 'Office Administrator', phone: '082 555 0134', email: 'lindiwe.dube@example.com', location: 'Centurion, Gauteng', linkedin: '',
  idNumber: '', licence: 'Code B (EB)', ownTransport: true,
  summary: 'Office administrator with six years in busy professional offices. I keep diaries, suppliers and filing in order so the people around me can get on with their work. Comfortable with Excel, Pastel and a ringing phone.',
  jobs: [
    { title: 'Office Administrator', employer: 'Mokoena & Partners Attorneys', place: 'Pretoria', start: '2021-03', end: '', current: true, points: 'Run the diaries for four attorneys and book around 60 client meetings a month\nMoved client files from paper to a shared drive, cutting search time to minutes\nHandle petty cash and supplier invoices, reconciled monthly with the bookkeeper' },
    { title: 'Receptionist', employer: 'Highveld Physiotherapy', place: 'Centurion', start: '2018-01', end: '2021-02', current: false, points: 'First point of contact for up to 80 patients a day\nSet up an SMS reminder routine that cut missed appointments by about a third' },
  ],
  education: [
    { qualification: 'Higher Certificate in Office Administration', school: 'Tshwane South TVET College', year: '2017', note: 'NQF level 5' },
    { qualification: 'National Senior Certificate', school: 'Hoërskool Centurion', year: '2015', note: '' },
  ],
  skills: 'MS Office (Excel, Word, Outlook), Pastel Partner, Diary management, Minute taking, Supplier liaison',
  languages: [{ lang: 'English', level: 'Fluent' }, { lang: 'isiZulu', level: 'Fluent' }, { lang: 'Afrikaans', level: 'Good' }],
  notice: '1 calendar month', availability: '',
  refsOnRequest: false,
  references: [
    { name: 'Thabo Mokoena', role: 'Senior Partner', company: 'Mokoena & Partners', phone: '012 555 0190' },
    { name: 'Karin Botha', role: 'Practice Owner', company: 'Highveld Physiotherapy', phone: '012 555 0177' },
  ],
}

export const EMPTY_CV = {
  template: 'classic', accent: '#1F2A44',
  name: '', headline: '', phone: '', email: '', location: '', linkedin: '',
  idNumber: '', licence: '', ownTransport: false,
  summary: '',
  jobs: [{ title: '', employer: '', place: '', start: '', end: '', current: false, points: '' }],
  education: [{ qualification: '', school: '', year: '', note: '' }],
  skills: '', languages: [{ lang: '', level: 'Fluent' }],
  notice: '', availability: '', refsOnRequest: true,
  references: [],
}
