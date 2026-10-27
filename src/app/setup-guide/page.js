import SetupGuide from '../../components/SetupGuide'

export const metadata = {
  title: 'How to set up your app: step by step guide',
  description: 'A simple step by step guide with screenshots for setting up your Dandelion Creations app in your own Google account. About 10 minutes, no technical knowledge needed.',
  alternates: { canonical: '/setup-guide' },
  openGraph: {
    title: 'How to set up your app',
    description: 'Step by step with screenshots. About 10 minutes, once off.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/setup-guide',
  },
}

export default function Page() {
  return <SetupGuide />
}
