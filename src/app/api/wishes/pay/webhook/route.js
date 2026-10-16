// Paystack calls this itself after a payment, so an invitation still gets published
// even if the couple closes their browser before returning. The signature proves it is Paystack.
import { NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { getAdminClient } from '../../../../../lib/wishes/supabase'
import { publishIfPaid } from '../../../../../lib/wishes/paystack'

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
      await publishIfPaid(getAdminClient(), String(event.data.reference))
    }
  } catch (err) {
    console.error('paystack webhook failed', err)
    return NextResponse.json({ error: 'error' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
