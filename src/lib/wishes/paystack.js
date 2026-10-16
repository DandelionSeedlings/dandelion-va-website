// src/lib/wishes/paystack.js  (server only)
//
// Talks to Paystack with the SECRET key (env var PAYSTACK_SECRET_KEY, never
// NEXT_PUBLIC_). Test keys start sk_test_, live keys sk_live_; the code is identical.

import { ADDONS, PRODUCTS, cleanAddons, totalCents } from './pricing'

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

// Same idea for product orders (/wishes/pay). Marks the order paid once, and only then emails you.
export async function completeOrderIfPaid(admin, reference) {
  const { data: o } = await admin.from('wishes_orders').select('*').eq('reference', reference).maybeSingle()
  if (!o) return { paid: false }
  const { json } = await paystack(`/transaction/verify/${encodeURIComponent(reference)}`)
  const d = json?.data
  const paid = json?.status === true && d?.status === 'success' && d?.currency === 'ZAR' && Number(d?.amount) >= o.amount_due
  if (!paid) return { paid: false }

  const { data: updated, error } = await admin
    .from('wishes_orders')
    .update({ status: 'paid', paid_at: new Date().toISOString(), amount_paid: d.amount })
    .eq('reference', reference).eq('status', 'pending').select('id')
  if (error) throw error

  if (updated?.length) {
    const names = (o.items || []).map((k) => PRODUCTS[k]?.label || k).join(' + ')
    const isDeposit = o.mode === 'deposit'
    const paidR = Math.round(d.amount / 100)
    const balR = Math.round((o.total_amount - o.amount_due) / 100)
    try {
      await fetch(ENQUIRY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          enquiryType: 'invitation',
          coupleNames: o.name || '',
          email: o.email || '',
          phone: o.phone || '',
          weddingDate: o.wedding_date || '',
          venueName: '',
          package: `${isDeposit ? 'DEPOSIT PAID' : 'PAID'} R${paidR}: ${names}`,
          style: '',
          notes: `${isDeposit ? `50% DEPOSIT PAID. Balance still to collect: R${balR}. ` : 'PAID IN FULL. '}Paystack ref ${reference}. ${o.notes ? 'Customer notes: ' + o.notes : ''}`,
        }),
        signal: AbortSignal.timeout(8000),
      })
    } catch (err) {
      console.error('order notify failed', err)
    }
  }
  return { paid: true, items: o.items, mode: o.mode, balance: o.total_amount - o.amount_due }
}
