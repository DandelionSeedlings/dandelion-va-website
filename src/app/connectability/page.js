import ConnectabilityPage from '../../components/ConnectabilityPage'

export const metadata = {
  title: 'ConnectAbility: a free CRM you own, inside your own Google Sheet',
  description: 'ConnectAbility is a free CRM that runs from your own Google Sheet. Contacts, interaction log and follow-ups. Free, own it, no subscription.',
  alternates: { canonical: '/connectability' },
  openGraph: {
    title: 'ConnectAbility: a free CRM you own',
    description: 'Contacts, conversations and follow-ups from your own Google Sheet. Free. No subscription.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/connectability',
  },
}

export default function ConnectAbility() {
  return <ConnectabilityPage />
}
