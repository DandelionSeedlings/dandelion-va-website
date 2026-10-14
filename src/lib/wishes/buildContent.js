// src/lib/wishes/buildContent.js
//
// Turns the raw "build your own" form submission into a content object in the
// exact shape InvitationTemplate expects (same shape as demoContent.js and
// the client files). Everything a guest-facing page will render passes through
// here first, so this is also where input gets cleaned: lengths are capped,
// links must be http(s), photos must come from our own storage bucket, and
// the WhatsApp number is normalised.

export const THEME_LABELS = {
  'romantic-soft': 'Romantic & Soft',
  botanical: 'Botanical',
  'timeless-classic': 'Timeless & Classic',
  'modern-minimal': 'Modern & Minimal',
  'coastal-minimal': 'Coastal Minimalist',
}

export const isThemeKey = (k) => Object.prototype.hasOwnProperty.call(THEME_LABELS, k)

// Static routes already win over /wishes/[slug] in Next, but keep these out of
// the slug pool anyway so a couple can never end up with a confusing URL.
export const RESERVED_SLUGS = new Set([
  'demo', 'start', 'details', 'build', 'edit', 'api', 'memorybloom', 'rsvpbloom',
  'wedding-bloom', 'photo-album', 'party-photo-album', 'theone-and-ra', 'admin',
  'login', 'pricing', 'examples', 'contact', 'terms', 'privacy',
])

export const MAX_PHOTOS = 4

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const clip = (v, n) => String(v ?? '').trim().slice(0, n)

export function slugify(names) {
  return String(names || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50)
}

export function safeUrl(v) {
  const s = clip(v, 500)
  if (!s) return ''
  try {
    const u = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`)
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return ''
    return u.toString()
  } catch {
    return ''
  }
}

export function safeSpotifyTrack(v) {
  const m = clip(v, 300).match(/^https:\/\/open\.spotify\.com\/(?:intl-[a-z]+\/)?track\/([A-Za-z0-9]+)/)
  return m ? `https://open.spotify.com/track/${m[1]}` : ''
}

// "072 839 3087", "+27 72 839 3087" and "27728393087" all become "27728393087".
export function normalizeWaNumber(v) {
  let digits = String(v || '').replace(/\D/g, '')
  if (digits.startsWith('0')) digits = `27${digits.slice(1)}`
  if (digits.length < 10 || digits.length > 15) return ''
  return digits
}

// 'YYYY-MM-DD' -> '14 February 2027'. Returns '' for anything that isn't a real date.
export function formatDateLong(iso) {
  const m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!m) return ''
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])]
  const check = new Date(Date.UTC(y, mo - 1, d))
  if (check.getUTCFullYear() !== y || check.getUTCMonth() !== mo - 1 || check.getUTCDate() !== d) return ''
  return `${d} ${MONTHS[mo - 1]} ${y}`
}

const isTime = (v) => /^([01]\d|2[0-3]):[0-5]\d$/.test(String(v || ''))

function guessIcon(label) {
  const l = String(label).toLowerCase()
  if (/ceremon|vows|troue|wedding/.test(l)) return 'ceremony'
  if (/cocktail|canap|champagne|drinks|sundowner|peuselhap/.test(l)) return 'cocktail'
  if (/dinner|reception|lunch|meal|braai|ete\b/.test(l)) return 'reception'
  if (/cake/.test(l)) return 'cake'
  if (/shuttle|transport|bus/.test(l)) return 'shuttle'
  if (/dance|party|celebrat|last/.test(l)) return 'party'
  return undefined
}

const HERO_BY_THEME = {
  'coastal-minimal': {
    heroVideoSrc: '/videos/wishes/hero-waves.mp4',
    heroVideoPoster: '/videos/wishes/hero-waves-poster.jpg',
  },
}
const HERO_DEFAULT = {
  heroVideoSrc: '/videos/wishes/hero-veil.mp4',
  heroVideoPoster: '/videos/wishes/hero-veil-poster.jpg',
}

/**
 * @param input   the raw form payload
 * @param opts    { photoBase } the only URL prefix photos are allowed to come from
 * @returns content object for InvitationTemplate. Throws Error(message) on invalid input;
 *          the message is safe to show to the person filling in the form.
 */
export function buildContent(input, { photoBase }) {
  const coupleNames = clip(input.coupleNames, 80)
  if (!coupleNames) throw new Error('Please enter your names.')

  const weddingDateLong = formatDateLong(input.weddingDate)
  if (!weddingDateLong) throw new Error('Please choose your wedding date.')

  const ceremonyTime = isTime(input.ceremonyTime) ? input.ceremonyTime : ''
  if (!ceremonyTime) throw new Error('Please enter your ceremony time.')
  const receptionTime = isTime(input.receptionTime) ? input.receptionTime : ceremonyTime

  const ceremonyVenue = clip(input.ceremonyVenue, 120)
  if (!ceremonyVenue) throw new Error('Please enter your venue.')
  const ceremonyLocation = clip(input.ceremonyLocation, 120)
  const receptionVenue = clip(input.receptionVenue, 120) || ceremonyVenue

  const rsvpDeadline = formatDateLong(input.rsvpDeadline)
  if (!rsvpDeadline) throw new Error('Please choose an RSVP deadline.')

  const rsvpWaNumber = normalizeWaNumber(input.phone)
  if (!rsvpWaNumber) throw new Error('Please enter a WhatsApp number guests can reach you on.')

  const photos = (Array.isArray(input.photos) ? input.photos : [])
    .filter((u) => typeof u === 'string' && u.length < 400 && photoBase && u.startsWith(photoBase))
    .slice(0, MAX_PHOTOS)
  if (photos.length === 0) throw new Error('Please add at least one photo.')
  // The template lays out exactly four gallery slots; repeat photos if there are fewer.
  const galleryImages = Array.from({ length: 4 }, (_, i) => photos[i % photos.length])

  const milestones = (Array.isArray(input.milestones) ? input.milestones : [])
    .map((m) => ({ label: clip(m?.label, 40), year: clip(m?.year, 12) }))
    .filter((m) => m.label && m.year)
    .slice(0, 6)
  if (milestones.length === 0) milestones.push({ label: 'The wedding', year: weddingDateLong.slice(-4) })

  let schedule = (Array.isArray(input.schedule) ? input.schedule : [])
    .map((s) => ({ time: clip(s?.time, 10), label: clip(s?.label, 80) }))
    .filter((s) => s.label)
    .slice(0, 10)
    .map((s) => ({ ...s, icon: guessIcon(s.label) }))
  if (schedule.length === 0) {
    schedule = [
      { time: ceremonyTime, label: 'Wedding Ceremony', icon: 'ceremony' },
      { time: receptionTime, label: 'Reception', icon: 'reception' },
    ]
  }

  const weddingParty = (Array.isArray(input.weddingParty) ? input.weddingParty : [])
    .map((p) => ({
      name: clip(p?.name, 60),
      role: clip(p?.role, 60),
      note: clip(p?.note, 160),
    }))
    .filter((p) => p.name)
    .slice(0, 8)
    .map((p) => ({ ...p, initial: p.name.charAt(0).toUpperCase() }))

  const registryLinks = (Array.isArray(input.registryLinks) ? input.registryLinks : [])
    .map((r) => ({ label: clip(r?.label, 60), href: safeUrl(r?.href) }))
    .filter((r) => r.label && r.href)
    .slice(0, 5)

  const faqs = (Array.isArray(input.faqs) ? input.faqs : [])
    .map((f) => ({ q: clip(f?.q, 120), a: clip(f?.a, 400) }))
    .filter((f) => f.q && f.a)
    .slice(0, 8)

  const themeKey = input.theme
  const hero = HERO_BY_THEME[themeKey] || HERO_DEFAULT

  const content = {
    coupleNames,
    weddingDateLong,
    weddingDateISO: `${input.weddingDate}T${ceremonyTime}:00`,
    tagline: clip(input.tagline, 100) || 'Two hearts. One journey. A lifetime together.',
    ...hero,
    storyText:
      clip(input.storyText, 1200) ||
      "We can't wait to celebrate this day with the people we love most.",
    milestones,
    storyImage: photos[0],
    galleryImages,
    ceremony: { time: ceremonyTime, venue: ceremonyVenue, location: ceremonyLocation },
    reception: { time: receptionTime, venue: receptionVenue },
    schedule,
    rsvpDeadline,
    // Empty on purpose: InvitationTemplate then shows its WhatsApp RSVP. Stage 2
    // replaces this with the shared RSVP backend.
    rsvpUrl: '',
    rsvpWaNumber,
    weddingParty,
    registryLinks,
    faqs,
  }

  const dressTitle = clip(input.dressCodeTitle, 80)
  if (dressTitle) {
    content.dressCode = { title: dressTitle, blurb: clip(input.dressCodeBlurb, 200), ladies: '', gentlemen: '' }
  }

  const spotify = safeSpotifyTrack(input.spotifyTrackUrl)
  if (spotify) content.spotifyTrackUrl = spotify

  return content
}
