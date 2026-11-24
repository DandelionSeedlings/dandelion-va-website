import html from './profitability-html';

export const metadata = {
  title: 'Profitability | Income, expenses and profit you own',
  description: 'Import your bank statement, sort it into categories and see income, expenses, VAT and profit, in your own Google Sheet opened from one private link. R799 once, no subscription.',
  alternates: { canonical: '/profitability' },
  openGraph: {
    title: 'Profitability | Income, expenses and profit you own',
    description: 'Pay once. Keep your data. Know what you made this month.',
    url: '/profitability',
    images: [{ url: '/images/profitability/dashboard.webp', width: 1800, height: 1250 }],
  },
};

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Profitability: Income & Expenses',
  description: 'Income and expense tracking for small businesses that runs from your own Google Sheet. Bank statement import, categories, VAT summary, budgets and profit and loss reports.',
  brand: { '@type': 'Brand', name: 'Dandelion Creations' },
  offers: { '@type': 'Offer', price: '799', priceCurrency: 'ZAR', availability: 'https://schema.org/InStock', url: 'https://dandelioncreations.co.za/profitability' },
};

export default function ProfitabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
