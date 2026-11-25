import AdaptabilityLanding from '../../components/adaptability/AdaptabilityLanding'

export const metadata = {
  title: 'Adaptability | Your Ability app, set up with your own branding',
  description: 'We put your logo, colours and business name on one of our Ability apps, bring your records across and walk you through it on a video call. R999 once.',
  alternates: { canonical: '/adaptability' },
  openGraph: {
    title: 'Adaptability | Dandelion Creations',
    description: 'Your app, with your name on it. R999 once, per app.',
    url: 'https://dandelioncreations.co.za/adaptability',
    images: [{ url: '/images/adaptability/card.webp' }],
  },
}

export default function AdaptabilityPage() {
  return <AdaptabilityLanding />
}
