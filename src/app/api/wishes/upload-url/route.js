// src/app/api/wishes/upload-url/route.js
//
// Hands the browser a short-lived signed URL so it can upload ONE photo
// straight into the wishes-photos bucket. The browser never gets a key that
// can do anything else.

import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { getAdminClient, PHOTO_BUCKET } from '../../../../lib/wishes/supabase'

export const runtime = 'nodejs'

const MAX_BYTES = 6 * 1024 * 1024

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  }

  // The form resizes every photo to a JPEG in the browser before uploading.
  if (body?.contentType !== 'image/jpeg') {
    return NextResponse.json({ error: 'Please upload a JPG or PNG photo.' }, { status: 400 })
  }
  const size = Number(body?.size)
  if (!Number.isFinite(size) || size <= 0 || size > MAX_BYTES) {
    return NextResponse.json({ error: 'That photo is too large.' }, { status: 400 })
  }

  try {
    const supabase = getAdminClient()
    const path = `${randomUUID()}.jpg`
    const { data, error } = await supabase.storage.from(PHOTO_BUCKET).createSignedUploadUrl(path)
    if (error) throw error
    const { data: pub } = supabase.storage.from(PHOTO_BUCKET).getPublicUrl(path)
    return NextResponse.json({ path, token: data.token, publicUrl: pub.publicUrl })
  } catch (err) {
    console.error('upload-url failed', err)
    return NextResponse.json({ error: 'Could not start the upload. Please try again.' }, { status: 500 })
  }
}
