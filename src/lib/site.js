// Single place for contact details and backend addresses used across the site.
export const SITE = {
  name: 'Dandelion Creations',
  url: 'https://dandelioncreations.co.za',
  email: 'dandelioncreat@outlook.com',
  whatsapp: '27728393087',
  whatsappDisplay: '+27 72 839 3087',
  location: 'Pretoria, South Africa',
  cta: { label: 'Book a Systems Audit', href: '/book' },
}

// BookAbility web app that receives bookings and enquiries (Contacts sheet).
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  'https://script.google.com/macros/s/AKfycbzXZZYAh4RmDFPvTKjTNL6z9qG-E9ZFbGyqjiabCsTdQg1gBukJsJt1bBi9VVX3jlpN/exec'

// Order system web app (license keys, orders).
export const ORDER_URL =
  process.env.NEXT_PUBLIC_ORDER_URL ||
  'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export const whatsappLink = (text = '') =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
