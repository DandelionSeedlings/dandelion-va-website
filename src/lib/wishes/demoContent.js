// src/lib/wishes/demoContent.js
//
// One shared "Emma & James" demo dataset, with just the story image swapped
// per style so each preview feels visually distinct without needing four
// full sets of new content. Real client invitations will have their own
// fully custom content object built the same shape as this one.

const baseContent = {
  coupleNames: 'Emma & James',
  weddingDateLong: '14 February 2027',
  weddingDateISO: '2027-02-14T15:00:00',
  tagline: 'Two hearts. One journey. A lifetime together.',
  heroVideoSrc: '/videos/wishes/hero-veil.mp4',
  heroVideoPoster: '/videos/wishes/hero-veil-poster.jpg',
  storyText:
    "From the moment we met, life became a little more meaningful, a little more exciting, and a lot more fun. Now we're ready to begin our next chapter together, and we'd love to have the people we love most there to celebrate with us.",
  milestones: [
    { label: 'First met', year: '2019' },
    { label: 'First date', year: '2020' },
    { label: 'The proposal', year: '2025' },
    { label: 'The wedding', year: '2027' },
  ],
  galleryImages: [
    '/images/wishes/demo/couple-1.jpg',
    '/images/wishes/demo/couple-2.jpg',
    '/images/wishes/demo/couple-5.jpg',
    '/images/wishes/demo/couple-4.jpg',
  ],
  ceremony: { time: '15:00', venue: 'Willow Creek Estate', location: 'Pretoria, South Africa' },
  reception: { time: '17:00', venue: 'Willow Creek Estate' },
  schedule: [
    { time: '15:00', label: 'Wedding Ceremony', icon: 'ceremony' },
    { time: '16:00', label: 'Canapés & Champagne', icon: 'cocktail' },
    { time: '17:30', label: 'Reception & Dinner', icon: 'reception' },
    { time: '19:30', label: 'First Dance & Celebrations', icon: 'party' },
    { time: '23:30', label: 'Last Dance', icon: 'party' },
  ],
  rsvpDeadline: '14 January 2027',
  rsvpUrl: 'https://script.google.com/macros/s/AKfycbyDhgT4SAax1aO-wYa7vkbDCp0Z7nKhR7vhz1ige0k9S7dh55JMi2m09vQ_aYc1gtsn/exec',
  rsvpWaNumber: '27728393087',
  weddingParty: [
    { initial: 'H', name: 'Hannah Miller', role: 'Maid of Honour', note: "Emma's sister, and the reason the dress fits." },
    { initial: 'T', name: 'Thabo Nkosi', role: 'Best Man', note: 'Knows every story and has promised to tell only two.' },
    { initial: 'A', name: 'Arno du Toit', role: 'The Man With the Mic', note: 'Our MC, who will keep the evening moving.' },
    { initial: 'K', name: 'Kelvin Adams', role: 'The Man Making It Official', note: 'Our officiant, and the one who introduced us.' },
  ],
  registryLinks: [
    { label: 'Our Takealot registry', href: '#' },
    { label: 'Kitchen at Yuppiechef', href: '#' },
    { label: 'Woolworths list', href: '#' },
  ],
  faqs: [
    { q: 'Can I bring a plus one?', a: 'Please refer to the number of guests named on your invitation.' },
    { q: 'Are children welcome?', a: 'We kindly ask guests to follow the invitation details shared with their family.' },
    { q: 'What should I wear?', a: 'Formal / Garden Formal — soft neutrals welcome.' },
    { q: 'Is there parking?', a: 'Yes, free parking is available at the venue.' },
  ],
}

const storyImageByStyle = {
  'romantic-soft': '/images/wishes/styles/romantic-soft.jpg',
  'botanical': '/images/wishes/styles/botanical.jpg',
  'timeless-classic': '/images/wishes/styles/timeless-classic.jpg',
  'modern-minimal': '/images/wishes/styles/modern-minimal.jpg',
}

export function buildDemoContent(styleKey) {
  const content = {
    ...baseContent,
    storyImage: storyImageByStyle[styleKey] || storyImageByStyle['romantic-soft'],
  }

  if (styleKey === 'coastal-minimal') {
    return {
      ...content,
      coupleNames: 'Mark & Sammy',
      weddingDateLong: '28 March 2027',
      weddingDateISO: '2027-03-28T15:00:00',
      rsvpDeadline: '28 February 2027',
      // Emma & James's baseContent.rsvpUrl points at their actual live RSVP
      // sheet — never inherit that here. Mark & Sammy need their own
      // Sheet + Apps Script deployment (same pattern as every other
      // wedding) before this can be a real URL. Until then, empty string
      // tells InvitationTemplate to show "coming soon" instead of a live
      // (wrong) form.
      rsvpUrl: '',
      storyImage: '/images/wishes/demo-coastal/beach-1.jpg',
      heroVideoSrc: '/videos/wishes/hero-waves.mp4',
      heroVideoPoster: '/videos/wishes/hero-waves-poster.jpg',
      photoWallUrl: 'https://script.google.com/macros/s/AKfycbwDgtDpVXkH4vofVddBdIvtE1O1zeeSebBVWfxlzCCt7Ogz7uPxJCecLiMvIekkmE5LIA/exec',
      ceremony: { time: content.ceremony.time, venue: 'Langebaan Beachfront', location: 'Langebaan, Western Cape' },
      reception: { time: content.reception.time, venue: 'Langebaan Beachfront' },
      galleryImages: [
        '/images/wishes/demo-coastal/beach-1.jpg',
        '/images/wishes/demo-coastal/beach-2.jpg',
        '/images/wishes/demo-coastal/beach-3.jpg',
        '/images/wishes/demo-coastal/beach-4.jpg',
      ],
    }
  }

  return content
}