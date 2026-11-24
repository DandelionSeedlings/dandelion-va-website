import html from './mini-cash-up-html';

export const metadata = {
  title: 'Mini Cash-Up | Daily till cash-up you own',
  description: 'Close each till in a few minutes: float, takings, payouts and the counted cash, with alerts when a drawer is out. In your own Google Sheet. R499 once, no subscription.',
  alternates: { canonical: '/mini-cash-up' },
  openGraph: {
    title: 'Mini Cash-Up | Daily till cash-up you own',
    description: 'Pay once. Know the till balances before you lock the door.',
    url: '/mini-cash-up',
    images: [{ url: '/images/mini-cash-up/dashboard.webp', width: 1800, height: 1250 }],
  },
};

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Mini Cash-Up: Daily Cash Reconciliation',
  description: 'Lightweight daily cash-up tool for retail and hospitality businesses. Reconcile tills, track floats, and spot discrepancies in minutes.',
  brand: { '@type': 'Brand', name: 'Dandelion Creations' },
  offers: { '@type': 'Offer', price: '499', priceCurrency: 'ZAR', availability: 'https://schema.org/InStock', url: 'https://dandelioncreations.co.za/mini-cash-up' },
};

export default function MiniCashUpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
