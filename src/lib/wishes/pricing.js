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
