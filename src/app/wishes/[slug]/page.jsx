// src/app/wishes/[slug]/page.jsx
//
// One page for every self-serve invitation: looks the couple up by slug in
// Supabase and renders them through the same InvitationTemplate the demos use.
// Static routes under /wishes (demo, start, memorybloom, theone-and-ra and so
// on) always win over this dynamic one.

import { notFound } from 'next/navigation'
import InvitationTemplate from '../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../lib/wishes/themes'
import { getAdminClient } from '../../../lib/wishes/supabase'

export const dynamic = 'force-dynamic'

async function loadInvitation(slug) {
  if (!/^[a-z0-9-]{3,60}$/.test(slug)) return null
  const { data, error } = await getAdminClient()
    .from('wishes_invitations')
    .select('slug, status, theme_key, content')
    .eq('slug', slug)
    .maybeSingle()
  if (error) throw error
  if (!data || data.status === 'archived') return null
  return data
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const inv = await loadInvitation(slug)
  if (!inv) return { title: 'Dandelion Wishes' }
  return {
    title: `${inv.content.coupleNames} | ${inv.content.weddingDateLong}`,
    // Guests get the link directly; there is no reason for search engines to list it.
    robots: { index: false, follow: false },
  }
}

export default async function InvitationPage({ params }) {
  const { slug } = await params
  const inv = await loadInvitation(slug)
  if (!inv) notFound()

  const isDraft = inv.status !== 'published'

  return (
    <>
      {isDraft && (
        <div className="text-center text-xs py-2.5 px-4" style={{ background: '#5C4A3A', color: '#fff' }}>
          Preview only. This invitation is not live yet, so please do not share this link with guests.
        </div>
      )}
      <InvitationTemplate
        theme={getTheme(inv.theme_key)}
        content={inv.content}
        showPreviewBanner={false}
      />
    </>
  )
}
