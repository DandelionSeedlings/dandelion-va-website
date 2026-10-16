// src/lib/wishes/paystack.js  (server only)
//
// Talks to Paystack with the SECRET key (env var PAYSTACK_SECRET_KEY, never
// NEXT_PUBLIC_). Test keys start sk_test_, live keys sk_live_; the code is identical.

import { ADDONS, cleanAddons, totalCents } from './pricing'

const BASE = 'https://api.paystack.co'

const ENQUIRY_API_URL =
  process.env.WISHES_ENQUIRY_API_URL ||
  'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

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
// invitation that reference belongs to. Safe to call more than once: only the
// first call that flips draft to published sends you the notification.
export async function publishIfPaid(admin, reference, origin = '') {
  const { data: row } = await admin
    .from('wishes_invitations').select('addons').eq('paystack_reference', reference).maybeSingle()
  if (!row) return { paid: false }
  const addons = cleanAddons(row.addons)

  const { json } = await paystack(`/transaction/verify/${encodeURIComponent(reference)}`)
  const d = json?.data
  const paid = json?.status === true && d?.status === 'success' && d?.currency === 'ZAR' && Number(d?.amount) >= totalCents(addons)
  if (!paid) return { paid: false }

  const { data: updated, error } = await admin
    .from('wishes_invitations')
    .update({ status: 'published', paid_at: new Date().toISOString(), amount_paid: d.amount, updated_at: new Date().toISOString() })
    .eq('paystack_reference', reference)
    .eq('status', 'draft')
    .select('slug, edit_token, customer_email, content')
  if (error) throw error

  if (updated?.length) {
    const r = updated[0]
    try {
      await fetch(ENQUIRY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          enquiryType: 'invitation',
          coupleNames: r.content?.coupleNames || '',
          email: r.customer_email || '',
          phone: r.content?.rsvpWaNumber || '',
          weddingDate: r.content?.weddingDateLong || '',
          venueName: r.content?.ceremony?.venue || '',
          package: `PAID R${Math.round(d.amount / 100)}: Essential Suite${addons.length ? ' + ' + addons.map((k) => ADDONS[k].label).join(' + ') : ''}`,
          style: '',
          notes: `PAID via Paystack (ref ${reference}). ${addons.length ? 'ADD-ONS TO SET UP: ' + addons.map((k) => ADDONS[k].label).join(', ') + '. Paste their links into the editor when ready. ' : ''}Live: ${origin}/wishes/${r.slug} | Edit link: ${origin}/wishes/edit/${r.edit_token}`,
        }),
        signal: AbortSignal.timeout(8000),
      })
    } catch (err) {
      console.error('paid notify failed', err)
    }
  }
  return { paid: true, addons }
}
