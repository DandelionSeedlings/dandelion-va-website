import AceIQPage from '../../components/AceIQPage'

export const metadata = {
  title: 'AceIQ: study notes turned into summaries, flashcards, mind maps and tests',
  description: 'AceIQ turns your notes into colour coded summaries, flashcards, mind maps and practice tests, in English or Afrikaans. It runs in your own Google Sheet. Pay once, no subscription.',
  alternates: { canonical: '/aceiq' },
  openGraph: {
    title: 'AceIQ: study smarter from your own notes',
    description: 'Upload notes, get summaries, flashcards, mind maps and tests. English and Afrikaans. Pay once.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/aceiq',
    images: ['/images/aceiq/summary.webp'],
  },
}

export default function AceIQ() {
  return <AceIQPage />
}
