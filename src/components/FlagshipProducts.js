'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaUsers, FaReceipt, FaCalendarCheck, FaArrowRight, FaGift } from 'react-icons/fa'

const products = [
  {
    icon: FaUsers,
    name: 'ConnectAbility',
    price: 'Free',
    priceNote: 'forever',
    desc: 'A simple CRM to manage leads, log every conversation, and never miss a follow-up again.',
    href: '/connectability',
    badge: true,
  },
  {
    icon: FaReceipt,
    name: 'ReceiptSnap',
    price: 'R299',
    priceNote: 'once-off',
    desc: 'Snap a photo of any receipt, AI extracts vendor, amount, date, and VAT automatically.',
    href: '/receiptsnap',
  },
  {
    icon: FaCalendarCheck,
    name: 'Bookability',
    price: 'R499',
    priceNote: 'once-off',
    desc: 'A live booking page and approval dashboard, no more back-and-forth to confirm a slot.',
    href: '/bookability',
  },
]

export default function FlagshipProducts() {
  return (
    <section id="flagship-systems" className="py-24 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">Three Systems. Start Anywhere.</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Each one is engineered to work alone or together, as part of the full AbilitySuite&trade; ecosystem.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gold/10 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/30 transition-all duration-300 relative"
            >
              {product.badge && (
                <div className="absolute -top-3 right-6 bg-signal-green text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <FaGift size={10} /> FREE
                </div>
              )}
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-5">
                <product.icon size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-1">{product.name}</h3>
              <p className="text-gold font-bold text-sm mb-3">{product.price} <span className="text-gray-400 font-normal">{product.priceNote}</span></p>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.desc}</p>
              <Link
                href={product.href}
                className="inline-flex items-center gap-2 text-navy-900 font-bold text-sm hover:text-gold transition-colors"
              >
                Learn more <FaArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/abilitysuite"
            className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold transition-colors underline"
          >
            See the full AbilitySuite&trade; ecosystem <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  )
}