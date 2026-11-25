// src/app/api/cv/pay/verify/route.js
//
// The buyer lands back on /cv/build after paying. The builder calls this to ask
// Paystack whether the payment really went through before it unlocks the download.
import { NextResponse } from 'next/server'
import { paystack } from '../../../../../lib/wishes/paystack'
import { CV_PRICE_CENTS, CV_REF_PREFIX, CV_UNLOCK_DAYS } from '../../../../../lib/cv/pricing'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const REF_RE = /^dcv-[a-f0-9]{20}$/

export async function POST(request) {
  let body
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Bad request.' }, { status: 400 }) }
  const reference = String(body?.reference || '')
  if (!REF_RE.test(reference) || !reference.startsWith(CV_REF_PREFIX)) {
    return NextResponse.json({ error: 'That payment reference is not valid.' }, { status: 400 })
  }
  try {
    const { json } = await paystack(`/transaction/verify/${encodeURIComponent(reference)}`)
    const d = json?.data
    const paid = json?.status === true && d?.status === 'success' && d?.currency === 'ZAR' && Number(d?.amount) >= CV_PRICE_CENTS
    if (!paid) return NextResponse.json({ paid: false })
    // Counted from when they paid, so coming back to the same link later does not extend it.
    const paidAt = Date.parse(d.paid_at || d.paidAt || d.transaction_date || '') || Date.now()
    return NextResponse.json({ paid: true, until: paidAt + CV_UNLOCK_DAYS * 86400000 })
  } catch (err) {
    console.error('cv pay verify failed', err)
    return NextResponse.json({ error: 'Could not confirm the payment yet.' }, { status: 500 })
  }
}
