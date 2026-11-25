// Paystack calls this itself after a payment, so an invitation still gets published
// even if the couple closes their browser before returning. The signature proves it is Paystack.
import { NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { getAdminClient } from '../../../../../lib/wishes/supabase'
import { publishIfPaid, completeOrderIfPaid } from '../../../../../lib/wishes/paystack'
import { CV_REF_PREFIX, CV_PRICE_CENTS } from '../../../../../lib/cv/pricing'

const ENQUIRY_API_URL =
  process.env.WISHES_ENQUIRY_API_URL ||
  'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

// CV builder sales. Nothing to publish (the CV lives in the buyer's browser), so this only
// tells you about the sale in the same Enquiries sheet as everything else.
async function notifyCvSale(d) {
  if (d?.status !== 'success' || d?.currency !== 'ZAR' || Number(d?.amount) < CV_PRICE_CENTS) return
  try {
    await fetch(ENQUIRY_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        enquiryType: 'cv',
        coupleNames: d?.metadata?.name || '',
        email: d?.customer?.email || '',
        phone: '',
        weddingDate: '',
        venueName: '',
        package: `PAID R${Math.round(Number(d.amount) / 100)}: CV Builder`,
        style: '',
        notes: `CV Builder sale. Paystack ref ${d.reference}. The CV itself is only in the buyer's browser.`,
      }),
      signal: AbortSignal.timeout(8000),
    })
  } catch (err) {
    console.error('cv sale notify failed', err)
  }
}

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request) {
  const secret = process.env.PAYSTACK_SECRET_KEY
  const raw = await request.text()
  const sig = request.headers.get('x-paystack-signature') || ''
  if (!secret || !sig) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const expected = createHmac('sha512', secret).update(raw).digest('hex')
  const a = Buffer.from(expected), b = Buffer.from(sig)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const event = JSON.parse(raw)
    if (event?.event === 'charge.success' && event?.data?.reference) {
      const ref = String(event.data.reference)
      if (ref.startsWith(CV_REF_PREFIX)) await notifyCvSale(event.data)
      else if (ref.startsWith('dwo-')) await completeOrderIfPaid(getAdminClient(), ref)
      else await publishIfPaid(getAdminClient(), ref, new URL(request.url).origin)
    }
  } catch (err) {
    console.error('paystack webhook failed', err)
    return NextResponse.json({ error: 'error' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
