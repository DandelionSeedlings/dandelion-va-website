'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const products = [
  {
    name: 'PayAbility',
    price: 'R499',
    priceNote: 'once-off',
    desc: 'Invoices, quotes, payment links and VAT reports from your own Google Sheet, with no monthly fee.',
    href: '/payability',
    img: '/images/payability/invoices.webp',
    alt: 'PayAbility invoices screen',
    tint: '#F3EBD6',
  },
  {
    name: 'AceIQ',
    price: 'R199',
    priceNote: 'R499 from 2027',
    desc: 'Turn school notes into summaries, flashcards, mind maps and practice tests, in English or Afrikaans.',
    href: '/aceiq',
    img: '/images/aceiq/dashboard.webp',
    alt: 'AceIQ student dashboard',
    tint: '#ECE7F8',
  },
  {
    name: 'ConnectAbility',
    price: 'Free',
    priceNote: 'forever',
    desc: 'A simple CRM to manage leads, log every conversation, and never miss a follow-up again.',
    href: '/connectability',
    img: '/images/connectability/dashboard.webp',
    alt: 'ConnectAbility dashboard',
    tint: '#E1F0E7',
    free: true,
  },
]

export default function FlagshipProducts() {
  return (
    <section id="flagship-systems" className="py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">Start With One. Add More Later.</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Each app works on its own, in your own Google account, and you pay once.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <Link
                href={product.href}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gold/10 shadow-sm hover:shadow-xl hover:shadow-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden" style={{ background: product.tint }}>
                  <img
                    src={product.img}
                    alt={product.alt}
                    loading="lazy"
                    className="absolute left-8 top-10 w-[120%] max-w-none rounded-tl-2xl shadow-2xl shadow-navy-900/20 transition-transform duration-500 group-hover:-translate-y-1.5"
                  />
                  <span className={`absolute top-4 right-4 text-sm font-bold px-4 py-1.5 rounded-full ${product.free ? 'bg-signal-green text-white' : 'bg-navy-900 text-gold'}`}>
                    {product.price}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{product.priceNote}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-navy-900 font-bold text-sm group-hover:text-gold transition-colors">
                    Learn more <FaArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/abilitysuite"
            className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold transition-colors underline"
          >
            See all our apps <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  )
}