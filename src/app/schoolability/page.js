import html from './schoolability-html';

export const metadata = {
  title: 'SchoolAbility | Aftercare records you own',
  description: 'A safety gate register on the teacher\'s phone, pickup lists, parent messages, birthday reminders, notes and fees for Grade 1 to 7 aftercare. Afrikaans and English, in your own Google Sheet. R1,499 once, no subscription.',
  alternates: { canonical: '/schoolability' },
  openGraph: {
    title: 'SchoolAbility | Aftercare records you own',
    description: 'Know who fetched every child, every day. Pay once.',
    url: '/schoolability',
    images: [{ url: '/images/schoolability/dashboard.webp', width: 1800, height: 1251 }],
  },
};

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SchoolAbility: Aftercare Records',
  description: 'Registration forms, a safety gate register with pickup lists, parent messages, birthday reminders, notes, fees and a private page for each parent, for Grade 1 to 7 aftercare, in your own Google Sheet.',
  brand: { '@type': 'Brand', name: 'Dandelion Creations' },
  offers: { '@type': 'Offer', price: '1499', priceCurrency: 'ZAR', availability: 'https://schema.org/InStock', url: 'https://dandelioncreations.co.za/schoolability' },
};

export default function SchoolAbilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
