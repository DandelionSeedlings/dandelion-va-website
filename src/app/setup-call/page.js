import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SCREENSHARE_URL, SITE, whatsappLink } from '../../lib/site'

export const metadata = {
  title: 'Get ready for your setup call',
  description: 'A short checklist so your free setup call starts with everything ready.',
  alternates: { canonical: '/setup-call' },
  robots: { index: false },
}

const STEPS = [
  ['Use a computer', 'A laptop or desktop works best. A phone is too small for the setup steps.'],
  ['Use Google Chrome', 'Open the call from Chrome, and make sure you are signed in to the Google account you want your app in. A free Gmail account is fine.'],
  ['Open your order email', 'It has your licence key and a Get your app button. If you can, press the button before the call and choose Make a copy. That saves time.'],
  ['Get your free AI key', 'ReceiptSnap and AceIQ need a free Groq key. Sign up at console.groq.com, create a key and keep the page open so you can copy it.'],
  ['For AceIQ, have some notes ready', 'A few pages of your learner\'s school notes, as files or photos, so we can try it on something real.'],
]

export default function SetupCall() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <section className="px-4 pb-24 pt-36">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Free setup call</p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Get ready for your setup call</h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-300">
            We share screens and switch your system on together, up to 20 minutes. A few minutes of preparation means we spend the call on the setup, not on searching for things.
          </p>

          <div className="mb-10 rounded-2xl border border-gold/40 bg-navy-800 p-6">
            <h2 className="mb-2 text-xl font-semibold text-white">Your call link</h2>
            {SCREENSHARE_URL ? (
              <>
                <p className="mb-4 text-gray-300">Join at your booked time:</p>
                <a href={SCREENSHARE_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gold px-6 py-3 font-semibold text-navy-900">Join the call</a>
              </>
            ) : (
              <p className="text-gray-300">
                I will send your link by email or WhatsApp before the call. Questions? WhatsApp{' '}
                <a className="text-gold underline" href={whatsappLink('Hi, I have a setup call booked.')}>{SITE.whatsappDisplay}</a>.
              </p>
            )}
          </div>

          <h2 className="mb-5 text-2xl font-bold text-white">Before the call</h2>
          <ol className="mb-10 space-y-5">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gold font-bold text-navy-900">{i + 1}</span>
                <div><p className="font-semibold text-white">{t}</p><p className="text-gray-300">{d}</p></div>
              </li>
            ))}
          </ol>

          <h2 className="mb-3 text-2xl font-bold text-white">During the call</h2>
          <ul className="mb-10 list-disc space-y-2 pl-6 text-gray-300">
            <li>I will ask you to share your screen. You choose what to share and you can stop at any time.</li>
            <li>Never tell anyone your Google password. We do not need it.</li>
            <li>If the setup does not suit you, say so. See our <a className="text-gold underline" href="/refunds">refund policy</a>.</li>
          </ul>

          <p className="text-gray-300">Need to move your time? Book again at <a className="text-gold underline" href="/book?type=setup">dandelioncreations.co.za/book</a> or WhatsApp me.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
