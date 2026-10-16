// src/app/api/wishes/edit/[token]/route.js
//
// The private edit link is the key: whoever holds the token can read and change
// that one invitation. GET loads the answers for the editor, PUT saves them.
// Every save re-runs buildContent, the same cleaning the first submit goes through.

import { NextResponse } from 'next/server'
import { getAdminClient, PHOTO_BUCKET } from '../../../../../lib/wishes/supabase'
import { buildContent, isThemeKey } from '../../../../../lib/wishes/buildContent'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TOKEN_RE = /^[a-f0-9]{32}$/

async function findByToken(token) {
  if (!TOKEN_RE.test(token)) return null
  const { data, error } = await getAdminClient()
    .from('wishes_invitations')
    .select('slug, status, theme_key, form, addons')
    .eq('edit_token', token)
    .maybeSingle()
  if (error) throw error
  if (!data || data.status === 'archived') return null
  return data
}

export async function GET(_request, { params }) {
  const { token } = await params
  try {
    const row = await findByToken(token)
    if (!row) return NextResponse.json({ error: 'This edit link is not valid.' }, { status: 404 })
    if (!row.form) {
      return NextResponse.json({ error: 'This invitation was made before editing existed. Please message us and we will help.' }, { status: 404 })
    }
    return NextResponse.json({ slug: row.slug, status: row.status, form: row.form, addons: row.addons || [] })
  } catch (err) {
    console.error('edit load failed', err)
    return NextResponse.json({ error: 'Could not load your invitation. Please try again.' }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  const { token } = await params
  let body
  try {
    const text = await request.text()
    if (text.length > 200000) return NextResponse.json({ error: 'That is too much text.' }, { status: 413 })
    body = JSON.parse(text)
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  }

  const form = body?.form
  if (!form || typeof form !== 'object') return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  if (!isThemeKey(form.theme)) return NextResponse.json({ error: 'Please choose a style.' }, { status: 400 })

  let content
  try {
    const photoBase = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${PHOTO_BUCKET}/`
    content = buildContent(form, { photoBase })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  try {
    const row = await findByToken(token)
    if (!row) return NextResponse.json({ error: 'This edit link is not valid.' }, { status: 404 })
    const { hpCheck, ...cleanForm } = form
    const { error } = await getAdminClient()
      .from('wishes_invitations')
      .update({ content, form: cleanForm, theme_key: form.theme, updated_at: new Date().toISOString() })
      .eq('edit_token', token)
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('edit save failed', err)
    return NextResponse.json({ error: 'Could not save. Please try again.' }, { status: 500 })
  }
}
