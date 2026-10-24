import PayabilityPage from '../../components/PayabilityPage'

export const metadata = {
  title: 'PayAbility: invoicing you own, inside your own Google Sheet',
  description: 'PayAbility is an invoicing system that runs from your own Google Sheet. Invoices, quotes, VAT reports and payment links. Pay once, own it, no subscription.',
  alternates: { canonical: '/payability' },
  openGraph: {
    title: 'PayAbility: invoicing you own',
    description: 'Invoices, quotes, VAT reports and payment links from your own Google Sheet. Pay once. No subscription.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/payability',
  },
}

export default function PayAbility() {
  return <PayabilityPage />
}
