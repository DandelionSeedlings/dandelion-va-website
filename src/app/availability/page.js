import html from './availability-html';

export const metadata = {
  title: 'Availability | Stock and suppliers you own',
  description: 'Stock levels, a reorder list and purchase orders for your suppliers, in your own Google Sheet and opened from one private link. R499 once, no subscription.',
  alternates: { canonical: '/availability' },
  openGraph: {
    title: 'Availability | Stock and suppliers you own',
    description: 'Pay once. Keep your data. Know what to reorder and what is on its way.',
    url: '/availability',
    images: [{ url: '/images/availability/dashboard.webp', width: 1800, height: 1250 }],
  },
};

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Availability: Stock & Supplier Pro',
  description: 'Stock control for small businesses that runs from your own Google Sheet. Items, reorder alerts, suppliers, purchase orders and stock takes.',
  brand: { '@type': 'Brand', name: 'Dandelion Creations' },
  offers: { '@type': 'Offer', price: '499', priceCurrency: 'ZAR', availability: 'https://schema.org/InStock', url: 'https://dandelioncreations.co.za/availability' },
};

export default function AvailabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
