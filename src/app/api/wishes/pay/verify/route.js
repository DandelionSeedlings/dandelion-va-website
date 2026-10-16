// The couple lands back on their editor after paying. The editor calls this to
// confirm the payment with Paystack and publish the invitation.
import { NextResponse } from 'next/server'
import { getAdminClient } from '../../../../../lib/wishes/supabase'
import { publishIfPaid } from '../../../../../lib/wishes/paystack'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TOKEN_RE = /^[a-f0-9]{32}$/

export async function POST(request) {
  let body
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Bad request.' }, { status: 400 }) }
  const token = String(body?.token || '')
  const reference = String(body?.reference || '').slice(0, 100)
  if (!TOKEN_RE.test(token) || !reference) return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  try {
    const admin = getAdminClient()
    const { data: row, error } = await admin
      .from('wishes_invitations').select('status, paystack_reference').eq('edit_token', token).maybeSingle()
    if (error) throw error
    if (!row || row.paystack_reference !== reference) return NextResponse.json({ error: 'Payment not found.' }, { status: 404 })
    if (row.status === 'published') return NextResponse.json({ published: true })
    const { paid } = await publishIfPaid(admin, reference)
    return NextResponse.json({ published: paid })
  } catch (err) {
    console.error('pay verify failed', err)
    return NextResponse.json({ error: 'Could not confirm the payment yet.' }, { status: 500 })
  }
}
