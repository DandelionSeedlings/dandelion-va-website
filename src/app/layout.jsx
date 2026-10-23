import { Inter, Sora, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-display',
})

const script = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-script',
})

export const viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://dandelioncreations.co.za'),
  title: {
    default: 'Dandelion Creations | Operations Engineering for Small Business',
    template: '%s | Dandelion Creations',
  },
  description:
    'Invoicing, bookings, stock and reporting built inside your own Google Workspace. You pay once and keep it. No subscriptions. Pretoria, South Africa.',
  authors: [{ name: 'Simone Theron' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dandelion Creations | Your business, running on systems you own',
    description: 'Operations engineering for small businesses. Systems built inside your own Google Workspace, paid for once.',
    type: 'website',
    url: 'https://dandelioncreations.co.za',
    siteName: 'Dandelion Creations',
    locale: 'en_ZA',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Dandelion Creations: your business, running on systems you own' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dandelion Creations | Your business, running on systems you own',
    description: 'Operations engineering for small businesses. Systems built inside your own Google Workspace, paid for once.',
    images: ['/images/og-image.jpg'],
  },
  icons: { icon: '/images/logo-icon.png', apple: '/images/logo-icon.png' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Dandelion Creations',
  url: 'https://dandelioncreations.co.za',
  logo: 'https://dandelioncreations.co.za/images/logo-icon.png',
  image: 'https://dandelioncreations.co.za/images/og-image.jpg',
  description: 'Operations engineering studio building business systems inside Google Workspace for small businesses in South Africa.',
  telephone: '+27728393087',
  founder: { '@type': 'Person', name: 'Simone Theron' },
  address: { '@type': 'PostalAddress', addressLocality: 'Pretoria', addressCountry: 'ZA' },
  areaServed: 'ZA',
  sameAs: [
    'https://www.facebook.com/DandelionCreations01',
    'https://www.instagram.com/dandelion.creat/',
    'https://www.linkedin.com/in/simone-theron-va',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${script.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <div id="main" tabIndex={-1} style={{ outline: "none" }}>{children}</div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
