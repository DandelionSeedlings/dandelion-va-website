import PayabilityPage from '../../components/PayabilityPage'

export const metadata = {
  title: 'Payability: invoicing you own, inside your own Google Sheet | Dandelion Creations',
  description: 'Payability is an invoicing system that runs from your own Google Sheet. Invoices, quotes, VAT reports and payment links. Pay once, own it, no subscription.',
  alternates: { canonical: '/payability' },
  openGraph: {
    title: 'Payability: invoicing you own',
    description: 'Invoices, quotes, VAT reports and payment links from your own Google Sheet. Pay once. No subscription.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/payability',
  },
}

export default function Payability() {
  return <PayabilityPage />
}
