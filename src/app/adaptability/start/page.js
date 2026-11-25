import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import IntakeForm from '../../../components/adaptability/IntakeForm'

export const metadata = {
  title: 'Adaptability setup form',
  description: 'Tell us about your business so we can set up your Ability app with your own branding.',
  alternates: { canonical: '/adaptability/start' },
  robots: { index: false },
}

export default function AdaptabilityStart() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-navy-900">
      <Navbar />
      <section className="bg-navy-900 px-5 pb-14 pt-36 text-white md:pt-40">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">Adaptability setup</p>
          <h1 className="font-display text-[36px] font-semibold leading-tight tracking-tight md:text-[46px]">Tell us about your business</h1>
          <p className="mt-4 max-w-[34em] text-[17px] leading-relaxed text-slate-300">About five minutes. We use this to set up your app before our call. <Link href="/adaptability" className="text-gold underline">What's included?</Link></p>
        </div>
      </section>
      <section className="px-5 py-12">
        <div className="mx-auto max-w-3xl"><IntakeForm /></div>
      </section>
      <Footer />
    </div>
  )
}
