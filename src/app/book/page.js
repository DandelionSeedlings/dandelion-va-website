import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BookingFlow from '../../components/BookingFlow'

export const metadata = {
  title: 'Book a Systems Audit',
  description:
    'Pick a time for a free 15 to 30 minute Systems Audit. We look at how your business runs today and tell you what to fix first.',
  alternates: { canonical: '/book' },
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <section className="px-4 pb-24 pt-36">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Systems Audit</p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Book a Systems Audit</h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-300">
            A free 15 to 30 minute call about how your business runs today. You leave knowing what to fix first,
            whether you hire us or not.
          </p>
          <BookingFlow />
        </div>
      </section>
      <Footer />
    </main>
  )
}
