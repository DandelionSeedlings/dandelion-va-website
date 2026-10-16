// Starts a Paystack payment for products from the /wishes page.
import { NextResponse } from 'next/server'
import { randomBytes } from 'crypto'
import { getAdminClient } from '../../../../../lib/wishes/supabase'
import { paystack } from '../../../../../lib/wishes/paystack'
import { cleanItems, orderAmounts } from '../../../../../lib/wishes/pricing'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/
const clip = (v, n) => String(v || '').trim().slice(0, n)

export async function POST(request) {
  let body
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Bad request.' }, { status: 400 }) }
  const items = cleanItems(body?.items)
  const email = clip(body?.email, 200)
  const name = clip(body?.name, 120)
  if (!items.length) return NextResponse.json({ error: 'Please choose what you would like to pay for.' }, { status: 400 })
  if (!name) return NextResponse.json({ error: 'Please tell us your name or the couple names.' }, { status: 400 })
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  if (typeof body?.elapsedMs === 'number' && body.elapsedMs < 3000) return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 400 })

  const { total, now, deposit } = orderAmounts(items, body?.mode)
  const reference = `dwo-${randomBytes(10).toString('hex')}`
  try {
    const admin = getAdminClient()
    const { error } = await admin.from('wishes_orders').insert({
      reference, items, mode: deposit ? 'deposit' : 'full', amount_due: now, total_amount: total,
      name, email, phone: clip(body?.phone, 40), wedding_date: clip(body?.weddingDate, 60), notes: clip(body?.notes, 1000),
    })
    if (error) throw error

    const origin = new URL(request.url).origin
    const { httpOk, json } = await paystack('/transaction/initialize', {
      method: 'POST',
      body: JSON.stringify({
        email, amount: now, currency: 'ZAR', reference,
        callback_url: `${origin}/wishes/pay/thanks`,
        metadata: { items: items.join(','), mode: deposit ? 'deposit' : 'full', name },
      }),
    })
    if (!httpOk || !json?.status || !json?.data?.authorization_url) {
      console.error('paystack order init failed', json)
      return NextResponse.json({ error: 'Could not start the payment. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ url: json.data.authorization_url })
  } catch (err) {
    console.error('order init failed', err)
    return NextResponse.json({ error: 'Could not start the payment. Please try again.' }, { status: 500 })
  }
}
