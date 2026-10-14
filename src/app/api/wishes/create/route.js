// src/app/api/wishes/create/route.js
//
// Receives the "build your own" form, cleans it, stores it in Supabase as a
// DRAFT, and pings the existing central enquiries script so the new build shows
// up in the same Enquiries sheet (and email) as every other lead.

import { NextResponse } from 'next/server'
import { getAdminClient, PHOTO_BUCKET } from '../../../../lib/wishes/supabase'
import {
  buildContent, slugify, isThemeKey, RESERVED_SLUGS, THEME_LABELS,
} from '../../../../lib/wishes/buildContent'

export const runtime = 'nodejs'

const ENQUIRY_API_URL =
  process.env.WISHES_ENQUIRY_API_URL ||
  'https://script.google.com/macros/s/AKfycby9eYADuyLFGddnIoK83R_9hEzIwQtm5S2ZRe0lnc-OybRjo_S5ou0jvGeYuV6vGGJ9mw/exec'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  }

  // Honeypot: real people never fill in the hidden "website" field.
  if (body?.website) return NextResponse.json({ ok: true, slug: 'thank-you' })

  const email = String(body?.email || '').trim().slice(0, 200)
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (!isThemeKey(body?.theme)) {
    return NextResponse.json({ error: 'Please choose a style.' }, { status: 400 })
  }

  let content
  try {
    const photoBase = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${PHOTO_BUCKET}/`
    content = buildContent(body, { photoBase })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  try {
    const supabase = getAdminClient()

    let base = slugify(content.coupleNames) || 'our-wedding'
    if (base.length < 3 || RESERVED_SLUGS.has(base)) base = `${base}-wedding`
    let slug = base
    let saved = false

    for (let attempt = 0; attempt < 5 && !saved; attempt++) {
      const { error } = await supabase.from('wishes_invitations').insert({
        slug,
        status: 'draft',
        package: 'essential',
        theme_key: body.theme,
        owner_email: email,
        content,
      })
      if (!error) {
        saved = true
      } else if (error.code === '23505') {
        // slug already taken: add a short random suffix and try again
        slug = `${base}-${Math.random().toString(36).slice(2, 6)}`
      } else {
        throw error
      }
    }
    if (!saved) throw new Error('Could not find a free web address.')

    // Best effort: a failure here must never lose the couple's build.
    try {
      const origin = new URL(request.url).origin
      await fetch(ENQUIRY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          enquiryType: 'invitation',
          coupleNames: content.coupleNames,
          email,
          phone: content.rsvpWaNumber,
          weddingDate: content.weddingDateLong,
          venueName: content.ceremony.venue,
          venueLocation: content.ceremony.location,
          package: 'Essential Suite (self-serve build)',
          style: THEME_LABELS[body.theme],
          notes: `Self-serve build, saved as a draft. Preview: ${origin}/wishes/${slug}`,
        }),
        signal: AbortSignal.timeout(8000),
      })
    } catch (err) {
      console.error('enquiry notify failed', err)
    }

    return NextResponse.json({ ok: true, slug })
  } catch (err) {
    console.error('create invitation failed', err)
    return NextResponse.json({ error: 'Something went wrong saving your invitation. Please try again.' }, { status: 500 })
  }
}
