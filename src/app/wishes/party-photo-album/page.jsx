import { redirect } from 'next/navigation'

// This page moved to /wishes/memorybloom. Kept as a redirect so any
// already-shared links (WhatsApp messages, the main page's old href
// before this rename, printed material) still resolve.
export default function PhotoAlbumRedirect() {
  redirect('/wishes/memorybloom')
}