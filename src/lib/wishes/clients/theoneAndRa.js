// src/lib/wishes/clients/theoneAndRa.js
//
// Real content for Theoné & Ra — Timeless & Classic theme, Indawo Game
// Lodge, Farm Witpunt, Ermelo. Full Package.
//
// TODO markers below are everything the enquiry didn't cover — the
// questionnaire needs a v2 pass (see chat) to capture this kind of detail
// upfront instead of it coming back one email at a time.

export const theoneAndRaContent = {
  coupleNames: 'Theoné & Ra',

  weddingDateLong: '31 October 2027',
  weddingDateISO: '2027-10-31T15:00:00', // TODO: 15:00 is a placeholder — swap once ceremony time is confirmed

  tagline: 'Two people. One beautiful story.', // TODO: swap for their own line if they want one

  heroVideoSrc: '/videos/wishes/hero-veil.mp4', // TODO: timeless-classic doesn't have its own hero video yet — reuse or source one for a barn/game-lodge setting
  heroVideoPoster: '/videos/wishes/hero-veil-poster.jpg',

  // Plays via the floating music button once the invite is open — needs
  // a normal Spotify share link (open.spotify.com/track/...), converted
  // to an embed automatically. "Ordinary" — Alex Warren.
  spotifyTrackUrl: 'https://open.spotify.com/track/4t6qMeHgbxWod2SLokiSQp',

  storyText:
    "A warm, beautiful barn wedding — the kind of day that feels like both of us, start to finish.", // TODO: replace with their real story
  milestones: [
    { label: 'First met', year: 'TODO' },
    { label: 'First date', year: 'TODO' },
    { label: 'The proposal', year: 'TODO' },
    { label: 'The wedding', year: 'TODO' },
  ],

  // TODO: real photos from the couple
  galleryImages: [
    '/images/wishes/demo/couple-1.jpg',
    '/images/wishes/demo/couple-2.jpg',
    '/images/wishes/demo/couple-5.jpg',
    '/images/wishes/demo/couple-4.jpg',
  ],

  ceremony: { time: 'TODO', venue: 'Indawo Game Lodge', location: 'Farm Witpunt, Ermelo, 2350' },
  reception: { time: 'TODO', venue: 'Indawo Game Lodge' },

  schedule: [
    { time: 'TODO', label: 'Wedding Ceremony', icon: 'ceremony' },
    { time: 'TODO', label: 'Canapés & Champagne', icon: 'cocktail' },
    { time: 'TODO', label: 'Reception & Dinner', icon: 'reception' },
    { time: 'TODO', label: 'First Dance & Celebrations', icon: 'party' },
    { time: 'TODO', label: 'Last Dance', icon: 'party' },
  ],

  // New: Dress Code section — remove this whole object to hide the section
  dressCode: {
    title: 'TODO — e.g. Formal / Garden Formal',
    blurb: "We'd love you to dress up with us!",
    ladies: 'TODO',
    gentlemen: 'TODO',
  },

  // New: Accommodation section — remove/empty the array to hide the section
  accommodationOptions: [
    // { name: 'TODO Hotel name', note: 'TODO distance + price note', href: 'TODO booking link' },
  ],

  rsvpDeadline: 'TODO',
  rsvpUrl: '', // TODO: needs its own RSVP Sheet + Apps Script deployment, per your per-wedding pattern
  rsvpWaNumber: '27765670125',

  // New: Guest Photo Album — same as Mark & Sammy's, needs its own Apps
  // Script deployment before this can be a real URL
  photoWallUrl: '', // TODO

  weddingParty: [
    { initial: '?', name: 'TODO', role: 'TODO', note: 'TODO' },
  ],

  registryLinks: [
    { label: 'TODO registry link', href: '#' },
  ],

  // New: "Need a Little Help?" section — remove/empty the array to hide it
  coordinators: [
    // { name: 'TODO', role: 'Wedding Coordinator', phone: 'TODO', waLink: 'https://wa.me/27...' },
  ],

  faqs: [
    { q: 'What should I wear?', a: 'TODO — pulls from Dress Code above once confirmed' },
    { q: 'Is there parking?', a: 'TODO' },
    { q: 'Are children welcome?', a: 'TODO' },
  ],
}