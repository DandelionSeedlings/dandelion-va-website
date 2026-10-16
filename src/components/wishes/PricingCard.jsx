'use client'

import { motion } from 'framer-motion'

// `actions` is optional: [{ label, href, primary }] buttons shown under the feature list.
export default function PricingCard({ tier, price, note, features, featured, dark, actions }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[1.5rem] p-8 flex flex-col relative ${
        dark
          ? 'text-white shadow-[0_25px_50px_-15px_rgba(92,74,58,0.4)]'
          : 'bg-white border border-[#E5DED2]'
      }`}
      style={dark ? { background: 'linear-gradient(160deg,#8B7355,#5C4A3A)' } : undefined}
    >
      {featured && (
        <span className="absolute -top-3 left-8 text-xs px-4 py-1.5 rounded-full bg-[#E8C4C4] text-[#5C4A3A]">
          Most loved
        </span>
      )}
      <p className={`uppercase tracking-[2px] text-xs mb-2 ${dark ? 'opacity-70' : 'text-[#A8B89C]'}`}>
        {tier}
      </p>
      <p className={`font-serif text-4xl mb-1 ${dark ? '' : 'text-[#5C4A3A]'}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {price}
      </p>
      <p className={`text-xs mb-6 ${dark ? 'opacity-60' : 'text-[#A8B89C]'}`}>{note}</p>
      <ul className={`space-y-2.5 text-sm flex-1 ${dark ? 'opacity-90' : 'text-[#3A3A3A]/85'}`}>
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className={dark ? 'text-[#E8C4C4]' : 'text-[#A8B89C]'}>✦</span>
            {f}
          </li>
        ))}
      </ul>
      {actions && actions.length > 0 && (
        <div className="mt-6 flex flex-col gap-2">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className={`text-center px-5 py-2.5 rounded-full text-sm font-medium border ${
                a.primary
                  ? dark ? 'bg-white text-[#5C4A3A] border-white' : 'bg-[#7C8B68] text-white border-[#7C8B68]'
                  : dark ? 'border-white/60 text-white' : 'border-[#7C8B68] text-[#7C8B68]'
              }`}
            >
              {a.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  )
}
