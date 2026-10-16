// Starts a Paystack payment for one invitation and returns the Paystack checkout address.
import { NextResponse } from 'next/server'
import { randomBytes } from 'crypto'
import { getAdminClient } from '../../../../../lib/wishes/supabase'
import { paystack } from '../../../../../lib/wishes/paystack'
import { PRICE_CENTS } from '../../../../../lib/wishes/pricing'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TOKEN_RE = /^[a-f0-9]{32}$/
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/

export async function POST(request) {
  let body
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Bad request.' }, { status: 400 }) }
  const token = String(body?.token || '')
  const email = String(body?.email || '').trim().slice(0, 200)
  if (!TOKEN_RE.test(token)) return NextResponse.json({ error: 'This edit link is not valid.' }, { status: 404 })
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })

  try {
    const admin = getAdminClient()
    const { data: row, error } = await admin
      .from('wishes_invitations').select('slug, status, form').eq('edit_token', token).maybeSingle()
    if (error) throw error
    if (!row || !row.form || row.status === 'archived') return NextResponse.json({ error: 'This edit link is not valid.' }, { status: 404 })
    if (row.status === 'published') return NextResponse.json({ error: 'This invitation is already published.' }, { status: 409 })

    const reference = `dw-${randomBytes(10).toString('hex')}`
    const { error: upErr } = await admin
      .from('wishes_invitations').update({ paystack_reference: reference, customer_email: email }).eq('edit_token', token)
    if (upErr) throw upErr

    const origin = new URL(request.url).origin
    const { httpOk, json } = await paystack('/transaction/initialize', {
      method: 'POST',
      body: JSON.stringify({
        email,
        amount: PRICE_CENTS,
        currency: 'ZAR',
        reference,
        callback_url: `${origin}/wishes/edit/${token}`,
        metadata: { slug: row.slug, product: 'Dandelion Wishes Essential Suite' },
      }),
    })
    if (!httpOk || !json?.status || !json?.data?.authorization_url) {
      console.error('paystack init failed', json)
      return NextResponse.json({ error: 'Could not start the payment. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ url: json.data.authorization_url })
  } catch (err) {
    console.error('pay init failed', err)
    return NextResponse.json({ error: 'Could not start the payment. Please try again.' }, { status: 500 })
  }
}
