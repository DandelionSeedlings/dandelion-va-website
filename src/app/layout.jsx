import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  metadataBase: new URL('https://dandelioncreations.co.za'),
  title: 'Dandelion Creations | Operations Engineering & Automation Systems',
  description: 'Custom automated systems built inside Google Workspace — precise, permanent, and engineered for how your business actually runs. No subscriptions. No bloated platforms. South African businesses only.',
  keywords: 'operations engineering, Google Apps Script, business automation, systems architecture, South Africa, SARS compliance, no subscription software, Pretoria',
  authors: [{ name: 'Simone Theron' }],
  openGraph: {
    title: 'Dandelion Creations — Operations Engineering Studio',
    description: 'Custom automated systems for businesses ready to run on clarity, not chaos.',
    type: 'website',
    url: 'https://dandelioncreations.co.za',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/images/logo-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-icon.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}