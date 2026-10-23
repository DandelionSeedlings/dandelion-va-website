import ConnectabilityPage from '../../components/ConnectabilityPage'

export const metadata = {
  title: 'Connectability: a free CRM you own, inside your own Google Sheet',
  description: 'Connectability is a free CRM that runs from your own Google Sheet. Contacts, interaction log and follow-ups. Free, own it, no subscription.',
  alternates: { canonical: '/connectability' },
  openGraph: {
    title: 'Connectability: a free CRM you own',
    description: 'Contacts, conversations and follow-ups from your own Google Sheet. Free. No subscription.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/connectability',
  },
}

export default function Connectability() {
  return <ConnectabilityPage />
}
