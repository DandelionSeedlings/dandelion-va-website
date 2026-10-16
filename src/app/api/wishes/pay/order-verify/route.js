import { NextResponse } from 'next/server'
import { getAdminClient } from '../../../../../lib/wishes/supabase'
import { completeOrderIfPaid } from '../../../../../lib/wishes/paystack'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request) {
  let body
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Bad request.' }, { status: 400 }) }
  const reference = String(body?.reference || '')
  if (!/^dwo-[a-f0-9]{20}$/.test(reference)) return NextResponse.json({ error: 'Not found.' }, { status: 404 })
  try {
    const r = await completeOrderIfPaid(getAdminClient(), reference)
    return NextResponse.json({ paid: !!r.paid, items: r.items || [], mode: r.mode || 'full', balance: r.balance || 0 })
  } catch (err) {
    console.error('order verify failed', err)
    return NextResponse.json({ error: 'Could not check the payment.' }, { status: 500 })
  }
}
