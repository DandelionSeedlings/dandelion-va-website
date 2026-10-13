import { redirect } from 'next/navigation'

// The save the date is now the one page for Theoné & Ra (details + RSVP link),
// so the old invitation address simply opens it.
export const metadata = {
  title: 'Theoné & Ra | 21 November 2026',
}

export default function TheoneAndRaInvitation() {
  redirect('/wishes/theone-and-ra/save-the-date')
}
