// One place for prices. The amount charged is always worked out on the server
// from this file, never taken from the browser, so it cannot be changed by the person paying.
export const PRICE_RANDS = 880
export const PRICE_CENTS = PRICE_RANDS * 100
export const PRICE_LABEL = `R${PRICE_RANDS}`
export const USUAL_PRICE_LABEL = 'R1,250'

export const ADDONS = {
  rsvpbloom: { label: 'RSVPBloom', rands: 400, blurb: 'Guest list and RSVP tracking in your own Google Sheet.' },
  memorybloom: { label: 'MemoryBloom', rands: 350, blurb: 'A QR code so guests can add photos to a live gallery. 30 days online.' },
}

// Keeps only add-ons we really sell, each once.
export function cleanAddons(list) {
  const arr = Array.isArray(list) ? list : []
  return [...new Set(arr.filter((k) => typeof k === 'string' && Object.prototype.hasOwnProperty.call(ADDONS, k)))]
}
export const totalRands = (addons) => PRICE_RANDS + cleanAddons(addons).reduce((s, k) => s + ADDONS[k].rands, 0)
export const totalCents = (addons) => totalRands(addons) * 100
export const rand = (n) => `R${n.toLocaleString('en-ZA').replace(/\s/g, ',')}`

// ---------------------------------------------------------------------------
// Everything else on /wishes that can be paid for online.
// Change a price here and it changes everywhere (the amount is worked out on the server).
// `deposit: true` means the 50% deposit option is offered for that product.
// ---------------------------------------------------------------------------
export const PRODUCTS = {
  interactive: { label: 'Interactive Suite', rands: 2650, group: 'Invitation suites', deposit: true, blurb: 'Custom domain, countdown, MemoryBloom, song requests, Add to Calendar and an animated WhatsApp invite.' },
  bespoke: { label: 'Bespoke Suite (starting price)', rands: 4500, group: 'Invitation suites', deposit: true, blurb: 'Fully custom design. Final price is confirmed with you after we chat, so this secures your date at the starting price.' },
  memorybloom: { label: 'MemoryBloom', rands: 350, group: 'Standalone products', blurb: 'Live guest photo gallery with a QR code, online for 30 days.' },
  weddingbloom: { label: 'The Wedding Bloom', rands: 750, group: 'Standalone products', blurb: 'The Wedding Bloom guest experience.' },
  rsvpbloom: { label: 'RSVPBloom', rands: 400, group: 'Standalone products', blurb: 'Guest list and RSVP tracking in your own Google Sheet.' },
  domain: { label: 'Custom .co.za domain (per year)', rands: 250, group: 'Add-ons', blurb: 'Your own web address for your invitation.' },
  hosting: { label: 'Extended 6-month hosting', rands: 200, group: 'Add-ons', blurb: 'Keep your invitation online for six more months.' },
  pdfsuite: { label: 'Matching printable PDF suite', rands: 450, group: 'Add-ons', blurb: 'Print-ready stationery that matches your invitation.' },
  seating: { label: 'Welcome and seating board bundle', rands: 550, group: 'Add-ons', blurb: 'A welcome sign and seating board to match.' },
}
export const DEPOSIT_PERCENT = 50

export function cleanItems(list) {
  const arr = Array.isArray(list) ? list : []
  return [...new Set(arr.filter((k) => typeof k === 'string' && Object.prototype.hasOwnProperty.call(PRODUCTS, k)))]
}
export const itemsTotalRands = (items) => cleanItems(items).reduce((s, k) => s + PRODUCTS[k].rands, 0)
export const depositAllowed = (items) => cleanItems(items).some((k) => PRODUCTS[k].deposit)
// Returns the amount to charge now, in cents, and what is still owing.
export function orderAmounts(items, mode) {
  const total = itemsTotalRands(items) * 100
  const deposit = mode === 'deposit' && depositAllowed(items)
  const now = deposit ? Math.round((total * DEPOSIT_PERCENT) / 100) : total
  return { total, now, balance: total - now, deposit }
}
