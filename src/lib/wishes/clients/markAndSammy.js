// src/lib/wishes/clients/markAndSammy.js
//
// Real content for Mark & Sammy's invitation — Langebaan beach wedding,
// 28 March 2027. This is NOT part of the generic demoContent.js system;
// it's this specific couple's actual data, built the same shape as
// baseContent so it drops straight into <InvitationTemplate theme={...}
// content={markAndSammyContent} />.
//
// Everything marked TODO is a placeholder — swap in the real detail
// before this goes live. Gallery images are the 4 stock beach photos
// from the asset pack; replace with Mark & Sammy's actual photos as
// soon as they're available.

export const markAndSammyContent = {
  coupleNames: 'Mark & Sammy',
  weddingDateLong: '28 March 2027',
  // TODO: placeholder 15:00 — swap for the real ceremony time once you have it
  weddingDateISO: '2027-03-28T15:00:00',
  tagline: 'Sand between our toes, forever in our hearts.',
  heroVideoSrc: '/videos/wishes/hero-waves.mp4',
  heroVideoPoster: '/videos/wishes/hero-waves-poster.jpg',
  photoWallUrl: 'https://script.google.com/macros/s/AKfycbwDgtDpVXkH4vofVddBdIvtE1O1zeeSebBVWfxlzCCt7Ogz7uPxJCecLiMvIekkmE5LIA/exec',

  // TODO: real story text from the couple
  storyText:
    "We met by the sea and it only felt right to say 'I do' by it too. We can't wait to share our favourite place with the people we love most.",

  milestones: [
    { label: 'First met', year: 'TODO' },
    { label: 'First date', year: 'TODO' },
    { label: 'The proposal', year: 'TODO' },
    { label: 'The wedding', year: '2027' },
  ],

  // TODO: swap for Mark & Sammy's actual photos
  galleryImages: [
    '/images/wishes/demo-coastal/beach-1.jpg',
    '/images/wishes/demo-coastal/beach-2.jpg',
    '/images/wishes/demo-coastal/beach-3.jpg',
    '/images/wishes/demo-coastal/beach-4.jpg',
  ],

  // TODO: confirm venue name(s) — Langebaan confirmed, exact venue not yet supplied
  ceremony: { time: 'TODO', venue: 'TODO — Langebaan venue name', location: 'Langebaan, Western Cape' },
  reception: { time: 'TODO', venue: 'TODO — Langebaan venue name' },

  schedule: [
    { time: 'TODO', label: 'Wedding Ceremony', icon: 'ceremony' },
    { time: 'TODO', label: 'Sundowner Cocktails', icon: 'cocktail' },
    { time: 'TODO', label: 'Beachside Reception & Dinner', icon: 'reception' },
    { time: 'TODO', label: 'Dancing on the Sand', icon: 'party' },
  ],

  rsvpDeadline: 'TODO',
  // TODO: this needs its own Apps Script + Sheet deployment, per your RSVP-per-wedding
  // pattern. Left as '' (not a placeholder string) so InvitationTemplate shows the
  // "coming soon" message instead of a broken link — fill in the real /exec URL once deployed.
  rsvpUrl: '',
  rsvpWaNumber: 'TODO — Mark & Sammy contact number, or your business number if you are relaying RSVPs',

  // TODO: wedding party names/roles
  weddingParty: [
    { initial: '?', name: 'TODO', role: 'TODO', note: 'TODO' },
  ],

  // TODO: real registry links
  registryLinks: [
    { label: 'TODO registry link', href: '#' },
  ],

  // TODO: confirm/adjust FAQs for a beach wedding (footwear, sand, wind, shade)
  faqs: [
    { q: 'What should I wear?', a: 'Beach formal — think barefoot-friendly. Flat sandals are your friend on the sand.' },
    { q: 'Is there parking?', a: 'TODO' },
    { q: 'Will there be shade / seating?', a: 'TODO' },
  ],
}