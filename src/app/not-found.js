import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = { title: 'Page not found', robots: { index: false } }

export default function NotFound() {
  return (
    <main className="bg-[#0a1628] min-h-screen">
      <Navbar />
      <div className="pt-40 pb-28 px-4 text-center max-w-xl mx-auto">
        <p className="text-gold font-bold text-xs tracking-[0.16em] uppercase mb-3">Error 404</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">That page has blown away</h1>
        <p className="text-gray-300 mb-8">The link may be old, or the page has moved. Head home, or see what we build.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl bg-gold text-[#0a1628] font-bold hover:brightness-110 transition">Back to home</Link>
          <Link href="/abilitysuite" className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-xl border border-white/20 text-white hover:border-gold transition">See the systems</Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
