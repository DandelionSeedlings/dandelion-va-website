// src/lib/wishes/i18n.js
//
// Every fixed word an invitation shows (headings, buttons, labels) lives here, so a
// couple can pick the language. Their own words (story, venue, FAQs and so on) are
// shown exactly as they typed them. To add a language, copy the `en` block, translate
// the values, and add it to LANGUAGES. Have a first-language speaker check it.

export const LANGUAGES = [
  { key: 'en', label: 'English' },
  { key: 'af', label: 'Afrikaans' },
]

export const normalizeLang = (v) => (LANGUAGES.some((l) => l.key === v) ? v : 'en')

const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  af: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
}
export const getMonths = (lang) => MONTHS[normalizeLang(lang)]

// Used by buildContent when the couple leaves a field blank.
const DEFAULTS = {
  en: {
    tagline: 'Two hearts. One journey. A lifetime together.',
    story: "We can't wait to celebrate this day with the people we love most.",
    ceremony: 'Wedding Ceremony',
    reception: 'Reception',
    theWedding: 'The wedding',
  },
  af: {
    tagline: 'Twee harte. Een reis. ’n Lewe lank saam.',
    story: 'Ons kan nie wag om hierdie dag te vier saam met die mense wat ons die liefste het nie.',
    ceremony: 'Trouseremonie',
    reception: 'Onthaal',
    theWedding: 'Die Troue',
  },
}
export const getDefaults = (lang) => DEFAULTS[normalizeLang(lang)]

const STRINGS = {
  en: {
    together: 'Together with their families, invite you to celebrate',
    days: 'days', hrs: 'hrs', min: 'min', sec: 'sec',
    rsvp: 'RSVP',
    ourStory: 'Our Story',
    storyHeading: 'Two people. One beautiful story.',
    ourGallery: 'Our Gallery',
    favouriteMoments: 'Our Favourite Moments',
    addPhotos: 'Add your photos',
    viewWall: 'View the live wall',
    theDay: 'The Day',
    weddingDetails: 'Wedding Details',
    ceremony: 'Ceremony',
    reception: 'Reception',
    directions: 'Get directions →',
    orderOfDay: 'Order of the Day',
    whatToWear: 'What to Wear',
    dressCode: 'Dress Code',
    ladies: 'Ladies:',
    gentlemen: 'Gentlemen:',
    willYouCelebrate: 'Will you celebrate with us?',
    rsvpBy: (d) => `Please let us know by ${d}.`,
    rsvpSoon: 'Online RSVP form coming soon. For now, please RSVP on WhatsApp below.',
    yourName: 'Your name',
    rsvpWhatsapp: 'Send RSVP on WhatsApp instead',
    stayingOver: 'Staying Over',
    accommodation: 'Accommodation',
    bookHere: 'Book here',
    ourPeople: 'Our People',
    standingUp: 'The ones standing up with us',
    giftRegistry: 'Gift Registry',
    giftText: "Your presence really is the greatest gift. If you'd like to spoil us anyway, we've put a few things together below.",
    quickAnswers: 'Quick Answers',
    questionsOnDay: 'Questions on the Day',
    needHelp: 'Need a Little Help?',
    whatsapp: 'WhatsApp',
    cantWait: "We can't wait to celebrate with you",
    withLove: 'With love,',
    likeStyle: 'Like this style? This could be yours.',
    startInvitation: 'Start Your Invitation',
    waText: (name, couple) => `Hi! It's ${name || '[your name]'}, RSVPing for ${couple}'s wedding. `,
  },
  af: {
    together: 'Saam met hul families, nooi hulle jou graag om die troue te vier van',
    days: 'dae', hrs: 'uur', min: 'min', sec: 'sek',
    rsvp: 'RSVP',
    ourStory: 'Ons Storie',
    storyHeading: 'Twee mense. Een pragtige storie.',
    ourGallery: 'Ons Galery',
    favouriteMoments: 'Ons Gunsteling-oomblikke',
    addPhotos: "Voeg jou foto's by",
    viewWall: 'Sien die lewendige muur',
    theDay: 'Die Dag',
    weddingDetails: 'Trou-inligting',
    ceremony: 'Die Seremonie',
    reception: 'Die Onthaal',
    directions: 'Kry aanwysings →',
    orderOfDay: 'Program van die Dag',
    whatToWear: 'Wat om te Dra',
    dressCode: 'Kleredrag',
    ladies: 'Dames:',
    gentlemen: 'Here:',
    willYouCelebrate: 'Gaan jy saam met ons vier?',
    rsvpBy: (d) => `Laat weet ons asseblief teen ${d}.`,
    rsvpSoon: 'Aanlyn RSVP-vorm kom binnekort. Stuur asseblief intussen jou RSVP via WhatsApp hier onder.',
    yourName: 'Jou naam',
    rsvpWhatsapp: 'Stuur eerder RSVP op WhatsApp',
    stayingOver: 'Oornag',
    accommodation: 'Akkommodasie',
    bookHere: 'Bespreek hier',
    ourPeople: 'Ons Mense',
    standingUp: 'Die mense wat langs ons staan',
    giftRegistry: 'Geskenklys',
    giftText: "Jou teenwoordigheid is werklik die grootste geskenk. As jy ons tog wil bederf, het ons 'n paar dinge hieronder bymekaargemaak.",
    quickAnswers: 'Vinnige Antwoorde',
    questionsOnDay: 'Vrae op die Dag',
    needHelp: 'Hulp nodig?',
    whatsapp: 'WhatsApp',
    cantWait: 'Ons kan nie wag om saam met jou te vier nie',
    withLove: 'Met baie liefde,',
    likeStyle: 'Hou jy van hierdie styl? Dit kan joune wees.',
    startInvitation: 'Begin Jou Uitnodiging',
    waText: (name, couple) => `Hallo! Dit is ${name || '[jou naam]'}, ek RSVP vir ${couple} se troue. `,
  },
}

export const getStrings = (lang) => STRINGS[normalizeLang(lang)]
