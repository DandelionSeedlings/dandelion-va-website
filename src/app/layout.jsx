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
  title: 'Dandelion Creations VA | Premium Virtual Assistant & Automation Services',
  description: 'High-level virtual assistant and technical automation services for businesses ready to scale. From R5,000/month. Based in Pretoria, South Africa.',
  keywords: 'virtual assistant, VA South Africa, Google Apps Script, automation, social media management, admin support, Pretoria VA',
  authors: [{ name: 'Simone Theron' }],
  openGraph: {
    title: 'Dandelion Creations VA',
    description: 'Premium Virtual Assistant & Technical Automation Services',
    type: 'website',
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