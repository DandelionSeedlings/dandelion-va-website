import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SITE, whatsappLink } from '../../lib/site'

export const metadata = {
  title: 'Refund policy',
  description: 'Not happy with a system? We help first with a free setup call, then refund you if it still is not right.',
  alternates: { canonical: '/refunds' },
}

export default function Refunds() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <section className="px-4 pb-24 pt-36">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Refund policy</p>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Not happy? We help first.</h1>
          <div className="space-y-5 text-lg leading-relaxed text-gray-300">
            <p>Our systems run in your own Google account, so there is a one-time setup. If something is too technical or does not work for you, we want to fix that before anything else.</p>
            <ol className="list-decimal space-y-3 pl-6">
              <li>Within 7 days of ordering, <a className="text-gold underline" href="/book?type=setup">book a free setup call</a>. We share screens and sort it out together, up to 20 minutes.</li>
              <li>If it still is not right for you after that call, we refund you in full within 5 working days.</li>
            </ol>
            <p>Please <a className="text-gold underline" href="/setup-call">get ready for the call</a> first, so we can use the time well.</p>
            <p>Done-With-You setup services are set up for you on a call, so they are handled case by case. Talk to us before you order if you are unsure.</p>
            <p>Questions? WhatsApp <a className="text-gold underline" href={whatsappLink('Hi, I have a question about a refund.')}>{SITE.whatsappDisplay}</a> or email <a className="text-gold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
