import html from './orderability-html';

export const metadata = {
  title: 'OrderAbility | Orders, invoices and payments you own',
  description: 'Take orders from WhatsApp, send invoices, track payments, stock and suppliers, and see your profit. In your own Google Sheet, opened from one private link. R799 once, no subscription.',
  alternates: { canonical: '/orderability' },
  openGraph: {
    title: 'OrderAbility | Orders, invoices and payments you own',
    description: 'Pay once. Keep your data. Know who has paid and what is left.',
    url: '/orderability',
    images: [{ url: '/images/orderability/today.webp', width: 780, height: 1600 }],
  },
};

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'OrderAbility',
  description: 'Orders, invoices, payments, stock and suppliers for small home businesses, running from your own Google Sheet.',
  brand: { '@type': 'Brand', name: 'Dandelion Creations' },
  offers: { '@type': 'Offer', price: '799', priceCurrency: 'ZAR', availability: 'https://schema.org/InStock', url: 'https://dandelioncreations.co.za/orderability' },
};

export default function OrderAbilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
