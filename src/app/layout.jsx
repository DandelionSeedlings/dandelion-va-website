import './globals.css'

export const metadata = {
  title: 'Dandelion Creations VA | Premium Virtual Assistant & Technical Automation',
  description: 'Expert Virtual Assistant and custom Google Apps Script development. Streamline your business with professional admin support and scalable automation solutions.',
  keywords: 'Virtual Assistant, Google Apps Script, Business Automation, Admin Support, South Africa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
