// src/app/api/cv/pay/init/route.js
//
// Starts a R149 Paystack payment for the CV builder. Nothing about the CV itself
// is sent here or stored anywhere: the CV stays in the buyer's own browser.
import { NextResponse } from 'next/server'
import { randomBytes } from 'crypto'
import { paystack } from '../../../../../lib/wishes/paystack'
import { CV_PRICE_CENTS, CV_REF_PREFIX } from '../../../../../lib/cv/pricing'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/

export async function POST(request) {
  let body
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Bad request.' }, { status: 400 }) }
  const email = String(body?.email || '').trim().slice(0, 200)
  const name = String(body?.name || '').trim().slice(0, 120)
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })

  try {
    const reference = CV_REF_PREFIX + randomBytes(10).toString('hex')
    const origin = new URL(request.url).origin
    const { httpOk, json } = await paystack('/transaction/initialize', {
      method: 'POST',
      body: JSON.stringify({
        email,
        amount: CV_PRICE_CENTS,
        currency: 'ZAR',
        reference,
        callback_url: `${origin}/cv/build`,
        metadata: { product: 'CV Builder', name },
      }),
    })
    if (!httpOk || !json?.status || !json?.data?.authorization_url) {
      console.error('cv pay init failed', json)
      return NextResponse.json({ error: 'Could not start the payment. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ url: json.data.authorization_url, reference })
  } catch (err) {
    console.error('cv pay init failed', err)
    return NextResponse.json({ error: 'Could not start the payment. Please try again.' }, { status: 500 })
  }
}
