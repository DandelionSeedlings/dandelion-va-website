import AceIQPage from '../../components/AceIQPage'

export const metadata = {
  title: 'AceIQ: study notes turned into summaries, flashcards, mind maps, tests and an exam plan',
  description: 'AceIQ turns your notes into colour coded summaries, flashcards, mind maps and practice tests, plans your exam timetable and shows your progress. English and Afrikaans. Runs in your own Google Sheet. Pay once.',
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
