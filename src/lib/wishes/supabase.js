// src/lib/wishes/supabase.js
//
// Server-only Supabase client. Uses the SERVICE ROLE key, which bypasses row
// level security, so it must never be imported from a client component and
// the env var must NOT start with NEXT_PUBLIC_.

import { createClient } from '@supabase/supabase-js'

export const PHOTO_BUCKET = 'wishes-photos'

export function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error('Supabase environment variables are missing (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).')
  }
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
}
