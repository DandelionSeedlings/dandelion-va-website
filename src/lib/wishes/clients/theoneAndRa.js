// src/lib/wishes/clients/theoneAndRa.js
//
// Content for Theoné & Ra. Timeless & Classic theme, Indawo Game Lodge,
// Farm Witpunt, Ermelo. Wedding moved to Saturday 21 November 2026.
// The save-the-date also works as the RSVP.
//
// Anything still marked TODO is waiting on Theoné.

export const theoneAndRaContent = {
  coupleNames: 'Theoné & Ra',

  weddingDateLong: '21 November 2026',
  weddingDateWeekday: 'Saturday',
  weddingDateISO: '2026-11-21T15:00:00+02:00',

  tagline: 'Two people. One beautiful story.',
  heroAccentText: 'Two hearts. One journey.',
  heroImage: '/images/wishes/clients/theone-and-ra/hero.jpg',

  // "Ordinary" by Alex Warren. Guests can also pick their own songs in the RSVP.
  spotifyTrackUrl: 'https://open.spotify.com/track/4t6qMeHgbxWod2SLokiSQp',

  storyText:
    'A warm, beautiful barn wedding, the kind of day that feels like both of us, start to finish.', // TODO: their real story
  milestones: [
    { label: 'First met', year: 'TODO' },
    { label: 'First date', year: 'TODO' },
    { label: 'The proposal', year: 'TODO' },
    { label: 'The wedding', year: '2026' },
  ],
  storyImage: '/images/wishes/clients/theone-and-ra/story.jpg',
  galleryImages: [
    '/images/wishes/clients/theone-and-ra/gallery-1.jpg',
    '/images/wishes/clients/theone-and-ra/gallery-2.jpg',
    '/images/wishes/clients/theone-and-ra/gallery-3.jpg',
    '/images/wishes/clients/theone-and-ra/gallery-4.jpg',
  ],
  orderOfDayImages: [
    '/images/wishes/clients/theone-and-ra/banner-left.jpg',
    '/images/wishes/clients/theone-and-ra/banner-right.jpg',
  ],
  footerImage: '/images/wishes/clients/theone-and-ra/gallery-4.jpg',

  // Everything happens at Indawo. Only the ceremony time is fixed so far.
  ceremony: { time: '15:00', venue: 'Indawo Game Lodge', location: 'Plaas Witpunt, Ermelo, 2350' },
  reception: { time: '', venue: 'Indawo Game Lodge' },

  // Program shown on the save-the-date (Afrikaans). Leave time null to show the label only.
  // icon: ceremony | toast | cocktail | dinner | cake | dance
  schedule: [
    { time: '15:00', label: 'Troudiens', icon: 'ceremony', side: 'left' },
    { time: '16:00', label: 'Peuselhappies', icon: 'cocktail', side: 'right' },
    { time: '18:00', label: 'Verwelkoming', icon: 'toast', side: 'left' },
    { time: '19:00 tot 20:00', label: 'Spitbraai-ete', icon: 'dinner', side: 'right' },
    { time: null, label: 'Cupcakes', icon: 'cake', side: 'left' },
  ],

  dressCode: {
    title: 'Smart casual',
    blurb: 'Come comfortable and look your best. It is a farm wedding, so think relaxed and polished.',
    ladies: '',
    gentlemen: '',
  },

  // Practical details shown on the RSVP section
  menuNote: 'A fixed menu: spitbraai with salads.',
  childrenNote: 'Children are welcome.',
  plusOneNote: 'Partners and plus ones are welcome too.',
  songNote: 'Pick a song or two for the dance floor. Everyone in your party can add their own.',

  // Accommodation is booked directly at Indawo
  accommodationOptions: [
    {
      name: 'Indawo Game Lodge',
      note: 'Book directly with Lauriska Eksteen',
      phone: '+27 83 640 7262',
      href: 'tel:+27836407262',
    },
  ],

  rsvpDeadline: '5 November 2026',
  rsvpDeadlineISO: '2026-11-05',
  // Paste the Apps Script /exec URL here once deployed (see rsvp-apps-script/Code.gs)
  // RSVPBloom page for Theoné & Ra (the guest RSVP form)
  rsvpUrl: 'https://script.google.com/macros/s/AKfycbxiLDKHclGJBV05CCvTMhOG6l1J6EjfYt1kUhAEpVGEvp-L1HSTEJOhrQvIwnd8ess/exec?page=rsvp',
  mapUrl: 'https://maps.app.goo.gl/JN8r2ufAuNKJQBQ18',
  venueUrl: 'https://share.google/gSc490mBpdJB5FfJn',
  rsvpWaNumber: '27765670125',
  rsvpLanguage: 'af',

  photoWallUrl: '',

  weddingParty: [{ initial: '?', name: 'TODO', role: 'TODO', note: 'TODO' }],

  gettingThere: {
    notes: ['There is a boom gate at the entrance. Please let us know if you have trouble getting through.'],
  },

  registryLinks: [{ label: 'TODO registry link', href: '#' }],

  // Questions about the wedding go to the couple
  coordinators: [
    { name: 'Theoné', role: 'About the wedding', phone: '+27 76 567 0125', waLink: 'https://wa.me/27765670125' },
    { name: 'Ra', role: 'About the wedding', phone: '+27 78 353 3366', waLink: 'https://wa.me/27783533366' },
  ],

  faqs: [
    { q: 'What should I wear?', a: 'Smart casual.' },
    { q: 'Are children welcome?', a: 'Yes, children are welcome.' },
    { q: 'Can I bring a plus one?', a: 'Yes, partners and plus ones are welcome.' },
    { q: 'What is on the menu?', a: 'A fixed menu: spitbraai with salads.' },
    { q: 'Where do I stay?', a: 'Indawo has accommodation. Contact Lauriska Eksteen on +27 83 640 7262.' },
    { q: 'Is there a boom gate?', a: 'Yes, there is a boom gate at the entrance.' },
  ],

  // Optional: fill in once Theoné sends the guest list. Used for the name suggestions.
  guestList: [],
}
