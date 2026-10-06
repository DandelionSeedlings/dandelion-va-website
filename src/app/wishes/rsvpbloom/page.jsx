'use client'

import { useState } from 'react'
import WishesNav from '../../../components/wishes/WishesNav'
import WishesFooter from '../../../components/wishes/WishesFooter'
import Reveal from '../../../components/wishes/Reveal'
import PricingCard from '../../../components/wishes/PricingCard'
import { BloomIcon } from '../../../components/wishes/WishesDecor'

const WA_LINK = 'https://wa.me/27728393087'

// TODO: paste in the SAME central Enquiries Apps Script exec URL that the
// Wedding Bloom and Photo Album order forms already post to — one shared
// endpoint for the whole business, routed by enquiryType.
const ENQUIRY_ENDPOINT = 'PASTE_YOUR_CENTRAL_ENQUIRIES_EXEC_URL_HERE'

const includedItems = [
  { title: 'A guest list that lives in your own Sheet', desc: 'Add guests one at a time or import a list — name, side, party size, email, phone, dietary notes, all in one place.' },
  { title: 'Share one link, for everyone', desc: 'Drop your single RSVP link anywhere — WhatsApp, a printed card, your own site — and guests type their name to respond.' },
  { title: 'Or send everyone their own personal invite', desc: "Email each guest their own link straight from the Guests page, one at a time or all at once. It opens already filled in with their name, so there's nothing to retype." },
  { title: 'RSVPs land automatically', desc: 'Attending or not, party size, meal choice, dietary notes — it all writes straight into your guest list the moment they respond.' },
  { title: 'A simple dashboard', desc: "A countdown and a running tally of who's attending, declined, or still pending, so you're never guessing." },
  { title: 'Yours, no subscription', desc: 'One once-off payment. Your own copy, your own Google Sheet, no monthly fee, ever.' },
]

const howItWorks = [
  { n: '1', title: 'Tell me a bit about your wedding', desc: 'Your names, your date, your venue — a two-minute form.' },
  { n: '2', title: 'Your copy gets set up', desc: "I hand you your own RSVPBloom, ready to go, with a short Welcome page walking you through it." },
  { n: '3', title: 'Add your guests', desc: 'Type them in yourself, or send me a list and I\'ll load it for you.' },
  { n: '4', title: 'Share your link, or send invites', desc: 'Your choice, on a guest-by-guest basis — mix both if that suits your list.' },
]

export default function RsvpBloomPage() {
  const [form, setForm] = useState({ coupleNames: '', email: '', phone: '', weddingDate: '', venueName: '', notes: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.coupleNames || !form.email) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...form, enquiryType: 'rsvpbloom' }),
      })
      setStatus('sent')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <WishesNav />

      {/* Hero */}
      <section className="py-24 px-6 text-center" style={{ background: '#FAF6F0' }}>
        <Reveal className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-5">
            <BloomIcon size={26} style={{ color: '#7C8B68' }} />
          </div>
          <p className="uppercase tracking-[3px] text-xs mb-5 text-[#8B7355]">The bare essentials, done properly</p>
          <h1 className="text-5xl md:text-6xl mb-6 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            RSVPBloom
          </h1>
          <p className="max-w-md mx-auto leading-relaxed mb-9 text-[15px] text-[#3A3A3A]/85">
            Already have an invitation sorted, or just don&apos;t need a full planner? This is
            just your guest list and your RSVPs, nothing else, done properly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="px-8 py-4 rounded-full text-white font-medium shadow-lg transition-transform hover:-translate-y-0.5"
              style={{ background: '#7C8B68', boxShadow: '0 10px 25px -8px rgba(124,139,104,0.5)' }}
            >
              Get RSVPBloom — R400
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-medium border transition-transform hover:-translate-y-0.5"
              style={{ borderColor: '#8B7355', color: '#8B7355', background: 'rgba(255,255,255,0.5)' }}
            >
              Ask a question
            </a>
          </div>
        </Reveal>
      </section>

      {/* What's included */}
      <section className="bg-white/60 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>What&apos;s included</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12">
            {includedItems.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.06}
                className={`py-5 border-t border-[#E8C4C4]/40 ${i < 2 ? 'sm:border-t-0' : ''}`}
              >
                <p className="font-medium text-[#5C4A3A] mb-1">{f.title}</p>
                <p className="text-sm text-[#3A3A3A]/70">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="text-2xl text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>How it works</h2>
          </Reveal>
          <div className="relative">
            <div className="hidden sm:block absolute left-0 right-0 top-[7px] h-px bg-[#E8C4C4]/50" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.1} className="relative">
                  <div className="hidden sm:block w-3.5 h-3.5 rounded-full bg-[#E8C4C4] ring-4 ring-[#FAF6F0] mb-4" />
                  <p className="font-medium text-[#5C4A3A] mb-1">
                    <span className="sm:hidden text-[#8B7355] mr-1.5">{s.n}.</span>
                    {s.title}
                  </p>
                  <p className="text-sm text-[#3A3A3A]/70">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6" style={{ background: '#F3ECE3' }}>
        <div className="max-w-sm mx-auto">
          <Reveal>
            <PricingCard
              dark
              featured
              tier="RSVPBloom"
              price="R400"
              note="once-off"
              features={[
                'Your own guest list, in your own Sheet',
                'Shared RSVP link, or personal email invites',
                'Pre-filled, locked invite links per guest',
                'Simple RSVP dashboard & countdown',
                'No subscription, ever',
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="py-20 px-6">
        <div className="max-w-lg mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl mb-3 text-[#5C4A3A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Get RSVPBloom</h2>
            <p className="text-sm text-[#3A3A3A]/70">Tell me a bit about your wedding, and I&apos;ll be in touch to set you up.</p>
          </Reveal>

          {status === 'sent' ? (
            <Reveal className="text-center py-10">
              <p className="text-lg text-[#7C8B68]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Thank you!</p>
              <p className="text-sm text-[#3A3A3A]/70 mt-2">Your enquiry is through, I&apos;ll be in touch shortly.</p>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#8B7355] mb-1.5">Couple names</label>
                  <input
                    required
                    value={form.coupleNames}
                    onChange={(e) => update('coupleNames', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-white text-sm"
                    placeholder="Emma & James"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#8B7355] mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#8B7355] mb-1.5">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#8B7355] mb-1.5">Wedding date</label>
                  <input
                    type="date"
                    value={form.weddingDate}
                    onChange={(e) => update('weddingDate', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#8B7355] mb-1.5">Venue</label>
                  <input
                    value={form.venueName}
                    onChange={(e) => update('venueName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#8B7355] mb-1.5">Anything else?</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-white text-sm resize-none"
                    placeholder="Optional"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-[#B04A4A]">Please fill in your name and email, then try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-full text-white font-medium disabled:opacity-60"
                  style={{ background: '#7C8B68' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <WishesFooter />
    </>
  )
}