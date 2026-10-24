import html from './bookability-html';

export const metadata = {
  title: 'BookAbility | Online booking you own',
  description: 'Clients book from a link or QR code. You manage everything in a private app on your own Google Sheet. R499 once, no subscription.',
  alternates: { canonical: '/bookability' },
  openGraph: {
    title: 'BookAbility | Online booking you own',
    description: 'Pay once. Keep your data. A booking page and private admin on your own Google Sheet.',
    url: '/bookability',
    images: [{ url: '/images/bookability/dashboard.webp', width: 1800, height: 1400 }],
  },
};

export default function BookabilityPage() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
