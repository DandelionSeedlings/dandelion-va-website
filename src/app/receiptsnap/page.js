'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaReceipt, FaCamera, FaBrain, FaFileCsv, FaCloud, 
  FaCheckCircle, FaArrowRight, FaShoppingCart, FaShieldAlt,
  FaMobileAlt, FaWhatsapp
} from 'react-icons/fa'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbyUAtVX_pKihPq2iBqb_bq4ctso-v8z52YHHlSX3TflJaz_DlaMsTq8FUSoCw7hmQqPNw/exec'

const features = [
  {
    icon: FaCamera,
    title: 'Snap Any Receipt',
    desc: 'Take a photo with your phone. Paper, email screenshot, or PDF — ReceiptSnap handles them all.'
  },
  {
    icon: FaBrain,
    title: 'AI Reads Everything',
    desc: 'Groq AI automatically extracts date, vendor, amount, and VAT. No typing. No spreadsheets.'
  },
  {
    icon: FaFileCsv,
    title: 'SARS-Ready CSV Export',
    desc: 'Download clean expense reports your accountant will actually thank you for.'
  },
  {
    icon: FaCloud,
    title: 'Organized in Your Drive',
    desc: 'Every receipt stores in your own Google Drive, categorized and searchable forever.'
  }
]

const steps = [
  { num: '1', title: 'Snap', desc: 'Photograph any receipt with your phone' },
  { num: '2', title: 'Extract', desc: 'AI reads the data in under 3 seconds' },
  { num: '3', title: 'Export', desc: 'Download CSV or view in your Sheets dashboard' }
]

const faqs = [
  { q: 'Do I need a special phone?', a: 'Any smartphone works. iPhone, Android, Samsung — if it has a camera, it works.' },
  { q: 'Is my data safe?', a: 'Everything lives in your own Google Drive and Sheets. We never host or see your data.' },
  { q: 'What about VAT?', a: 'ReceiptSnap extracts VAT amounts where visible and tags expenses by category for easy SARS filing.' },
  { q: 'Can I use it for multiple businesses?', a: 'Each license covers one Google account. Buy additional licenses for separate businesses.' },
  { q: 'What if I need help?', a: 'WhatsApp support at +27 72 839 3087. Most issues resolved in minutes.' }
]

export default function ReceiptSnapPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Navbar spacer */}
      <div className="h-20" />

      {/* Hero */}
      <section className="relative bg-[#0a1628] pt-16 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-amber-500/30">
              <FaReceipt /> R299 Once-Off • No Monthly Fees
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Losing Receipts.<br />
              <span className="text-[#D4AF37]">Start Claiming Tax.</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              ReceiptSnap uses AI to read, categorize, and store every receipt you photograph. 
              Built for South African business owners who need SARS-compliant records without the admin headache.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={`${ORDER_FORM_URL}?product=ReceiptSnap`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center gap-2"
              >
                <FaShoppingCart /> Get ReceiptSnap — R299
              </a>
              <a 
                href="#how-it-works"
                className="text-white/70 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 border border-white/20 hover:border-white/40"
              >
                See How It Works <FaArrowRight />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> Works on any phone</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> Google Sheets based</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-400" /> SARS compliant exports</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0a1628] mb-3">Sound Familiar?</h2>
            <p className="text-gray-600">If any of these hurt, ReceiptSnap was built for you.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Shoeboxes full of crumpled receipts?',
              'Hours typing data into spreadsheets?',
              'Missing VAT claims at tax time?',
              'No proof when SARS asks questions?'
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-red-50 border border-red-100 rounded-xl p-6 text-center"
              >
                <p className="text-[#0a1628] font-medium text-sm">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">How It Works</h2>
            <p className="text-gray-600">From chaos to organized in 30 seconds.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#D4AF37]/10 text-center relative"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0a1628] font-bold text-lg">
                  {step.num}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#0a1628] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0a1628] mb-3">See It In Action</h2>
            <p className="text-gray-600">30 seconds from photo to organized data.</p>
          </motion.div>
          
          <div className="bg-[#0a1628] rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center relative">
            {/* Replace this with your actual video embed when ready */}
            <div className="text-center text-white/50">
              <FaMobileAlt className="w-16 h-16 mx-auto mb-4 opacity-40" />
              <p className="text-lg font-medium">Your ReceiptSnap Demo Video</p>
              <p className="text-sm mt-2 opacity-60">Upload to YouTube/Vimeo and embed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">What You Get</h2>
            <p className="text-gray-600">Everything you need to never lose a receipt again.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-[#D4AF37]/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a1628] mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price & CTA */}
      <section className="py-24 px-4 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-500/30">
              <FaShieldAlt /> One Payment. Yours Forever.
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              R299 Once.<br />Not R299/Month.
            </h2>
            
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              Other receipt apps charge monthly subscriptions. ReceiptSnap is a one-time purchase 
              that lives in your Google Workspace. No recurring fees. No data lock-in.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/10 mb-10">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">R299</div>
              <p className="text-gray-400 text-sm mb-6">One-time purchase • Instant license delivery</p>
              
              <ul className="text-left space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> AI receipt extraction</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Unlimited receipts</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> CSV export for SARS</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Google Drive storage</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-[#D4AF37]" /> Lifetime access</li>
              </ul>
              
              <a
                href={`${ORDER_FORM_URL}?product=ReceiptSnap`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaShoppingCart /> Buy ReceiptSnap Now
                </span>
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <FaWhatsapp className="text-emerald-400" />
              <span>Questions? WhatsApp <a href="https://wa.me/27728393087" className="text-[#D4AF37] hover:underline">+27 72 839 3087</a></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0a1628] mb-3">Common Questions</h2>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#F5F1E8] rounded-xl p-6"
              >
                <h3 className="font-bold text-[#0a1628] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-[#F5F1E8] border-t border-[#D4AF37]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
            Ready to Ditch the Shoebox?
          </h2>
          <a
            href={`${ORDER_FORM_URL}?product=ReceiptSnap`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30"
          >
            <FaShoppingCart /> Get ReceiptSnap — R299
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Or <Link href="/" className="text-[#D4AF37] underline hover:no-underline">browse all products</Link>
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#0a1628] py-8 px-4 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 Dandelion Creations. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          dandelioncreations.co.za • dandelioncreat@outlook.com
        </p>
      </footer>
    </div>
  )
}