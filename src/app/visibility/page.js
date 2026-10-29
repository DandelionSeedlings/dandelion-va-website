import VisibilityPage from '../../components/VisibilityPage'

export const metadata = {
  title: 'Visibility: plan your social media content in your own Google Sheet',
  description: 'Visibility keeps your AI written posts in one calendar, checks they are ready, and lets clients approve them from a link. R299 once off, no subscription.',
  alternates: { canonical: '/visibility' },
  openGraph: {
    title: 'Visibility: your AI creates, Visibility organises',
    description: 'A content calendar with client approval that runs in your own Google Sheet. R299 once off. No subscription.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/visibility',
  },
}

export default function Visibility() {
  return <VisibilityPage />
}
