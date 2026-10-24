import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PartnerForm from '../../components/PartnerForm'

export const metadata = {
  title: 'Partner Program',
  description: 'Recommend Dandelion Creations systems and earn 20% of every sale you refer. Your clients get 10% off. Apply in two minutes.',
  alternates: { canonical: '/partners' },
}

const STEPS = [
  { n: '1', t: 'Apply', d: 'Tell us a little about you and how you would share the systems. It takes two minutes.' },
  { n: '2', t: 'We approve you', d: 'Simone reviews every application personally and emails you your code and link.' },
  { n: '3', t: 'Share your code', d: 'Anyone who uses your code or link gets 10% off their order.' },
  { n: '4', t: 'You earn 20%', d: 'Once their payment clears, 20% of what they paid is yours, once off per sale.' },
]

const FAQ = [
  { q: 'How much does it cost to join?', a: 'Nothing. There are no fees and no targets.' },
  { q: 'What do my clients get?', a: '10% off any paid module, applied automatically when they use your code or your link.' },
  { q: 'How and when do I get paid?', a: 'Your commission is calculated on what the customer actually paid, and only once the payment has cleared. Every product is a once-off purchase, so you earn once on each sale, not monthly. We pay you by EFT after the customer payment has cleared.' },
  { q: 'Can I use my own code on my own order?', a: 'No. Codes cannot be used by the partner who owns them. Your clients are the ones who save.' },
  { q: 'Who can join?', a: 'Accountants, bookkeepers, consultants, freelancers, business coaches and anyone whose clients run on spreadsheets. If you would recommend us anyway, this just rewards you for it.' },
]

export default function PartnersPage() {
  return (
    <main className="bg-[#0a1628] min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <header className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold font-bold text-xs tracking-[0.16em] uppercase mb-3">Partner Program</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Recommend us. Earn 20%.</h1>
            <p className="text-gray-300 text-lg">If your clients would benefit from systems that run on their own Google Workspace, share your code. They save 10%. You earn 20% of every sale.</p>
          </header>

          <section aria-labelledby="how" className="mb-14">
            <h2 id="how" className="sr-only">How it works</h2>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
              {STEPS.map((s) => (
                <li key={s.n} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-gold text-[#0a1628] font-bold text-sm mb-3">{s.n}</span>
                  <h3 className="text-white font-semibold mb-1">{s.t}</h3>
                  <p className="text-gray-400 text-sm">{s.d}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="apply" aria-labelledby="apply-h" className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-start mb-16 scroll-mt-28">
            <div>
              <h2 id="apply-h" className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Apply to join</h2>
              <p className="text-gray-300 mb-4">Applications are reviewed by hand, usually within a working day. Once approved, you get an email with your personal code and a ready-to-share link.</p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex gap-2"><span className="text-gold" aria-hidden="true">&#10003;</span> Free to join, no targets</li>
                <li className="flex gap-2"><span className="text-gold" aria-hidden="true">&#10003;</span> Your clients save 10%</li>
                <li className="flex gap-2"><span className="text-gold" aria-hidden="true">&#10003;</span> 20% of what they pay, once it clears</li>
              </ul>
            </div>
            <PartnerForm />
          </section>

          <section aria-labelledby="faq" className="max-w-3xl mx-auto">
            <h2 id="faq" className="font-display text-2xl font-bold text-white mb-5">Common questions</h2>
            <div className="space-y-3">
              {FAQ.map((x) => (
                <details key={x.q} className="group bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <summary className="cursor-pointer text-white font-medium list-none flex justify-between gap-4">{x.q}<span className="text-gold transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
                  <p className="text-gray-400 text-sm mt-3">{x.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
