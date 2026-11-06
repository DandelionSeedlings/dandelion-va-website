import html from './scalability-html';

export const metadata = {
  title: 'Scalability | A sales pipeline you own',
  description: 'Deals, owners, follow-ups and tasks for a small team, in your own Google Sheet and opened from one private link. R499 once, no subscription.',
  alternates: { canonical: '/scalability' },
  openGraph: {
    title: 'Scalability | A sales pipeline you own',
    description: 'Pay once. Keep your data. A pipeline board, dashboard and team list on your own Google Sheet.',
    url: '/scalability',
    images: [{ url: '/images/scalability/dashboard.webp', width: 1800, height: 1250 }],
  },
};

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Scalability: CRM Pro',
  description: 'A sales pipeline for small teams that runs from your own Google Sheet. Deals, stages, owners, follow-ups and tasks.',
  brand: { '@type': 'Brand', name: 'Dandelion Creations' },
  offers: { '@type': 'Offer', price: '499', priceCurrency: 'ZAR', availability: 'https://schema.org/InStock', url: 'https://dandelioncreations.co.za/scalability' },
};

export default function ScalabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
