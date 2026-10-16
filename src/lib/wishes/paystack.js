// src/lib/wishes/paystack.js  (server only)
//
// Talks to Paystack with the SECRET key (env var PAYSTACK_SECRET_KEY, never
// NEXT_PUBLIC_). Test keys start sk_test_, live keys sk_live_; the code is identical.

import { PRICE_CENTS } from './pricing'

const BASE = 'https://api.paystack.co'

export async function paystack(path, init = {}) {
  const secret = process.env.PAYSTACK_SECRET_KEY
  if (!secret) throw new Error('PAYSTACK_SECRET_KEY is not set.')
  const res = await fetch(BASE + path, {
    ...init,
    headers: { Authorization: `Bearer ${secret}`, 'Content-Type': 'application/json', ...(init.headers || {}) },
    cache: 'no-store',
  })
  const json = await res.json().catch(() => ({}))
  return { httpOk: res.ok, json }
}

// Asks Paystack whether this reference was really paid, and if so publishes the
// invitation that reference belongs to. Safe to call more than once.
export async function publishIfPaid(admin, reference) {
  const { json } = await paystack(`/transaction/verify/${encodeURIComponent(reference)}`)
  const d = json?.data
  const paid = json?.status === true && d?.status === 'success' && d?.currency === 'ZAR' && Number(d?.amount) >= PRICE_CENTS
  if (!paid) return { paid: false }
  const { error } = await admin
    .from('wishes_invitations')
    .update({ status: 'published', paid_at: new Date().toISOString(), amount_paid: d.amount, updated_at: new Date().toISOString() })
    .eq('paystack_reference', reference)
    .neq('status', 'archived')
  if (error) throw error
  return { paid: true }
}
