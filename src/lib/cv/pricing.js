// src/lib/cv/pricing.js
// One price for the CV builder. Paystack works in cents.
export const CV_PRICE_CENTS = 14900
export const CV_PRICE_LABEL = 'R149'
// How long a paid download stays unlocked in the buyer's browser.
export const CV_UNLOCK_DAYS = 30
// Every CV payment reference starts with this, so the shared Paystack webhook can tell them apart.
export const CV_REF_PREFIX = 'dcv-'
