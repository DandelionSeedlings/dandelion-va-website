import html from './trackability-html';

export const metadata = {
  title: 'TrackAbility | Staff time, leave and payslips you own',
  description: 'Staff clock in on a tablet or with a QR code and their own PIN. Overtime, leave balances and printable payslips with UIF, in your own Google Sheet. R799 once, no subscription.',
  alternates: { canonical: '/trackability' },
  openGraph: {
    title: 'TrackAbility | Staff time, leave and payslips you own',
    description: 'Pay once. Hours, leave and payslips without the Friday scramble.',
    url: '/trackability',
    images: [{ url: '/images/trackability/dashboard.webp', width: 1800, height: 1250 }],
  },
};

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'TrackAbility: Staff Time, Leave & Payslips',
  description: 'Clock-in with a tablet or QR code and a PIN, overtime and public holiday hours, BCEA leave balances and printable payslips with UIF, in your own Google Sheet.',
  brand: { '@type': 'Brand', name: 'Dandelion Creations' },
  offers: { '@type': 'Offer', price: '799', priceCurrency: 'ZAR', availability: 'https://schema.org/InStock', url: 'https://dandelioncreations.co.za/trackability' },
};

export default function TrackAbilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
