"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFileInvoice, 
  FaChartLine, 
  FaEnvelope, 
  FaBell, 
  FaCalculator, 
  FaDownload, 
  FaCheckCircle,
  FaCreditCard,
  FaWhatsapp,
  FaQuestionCircle
} from 'react-icons/fa';

const features = [
  { icon: FaFileInvoice, text: 'Auto invoice numbering (INV-2025-0001)' },
  { icon: FaChartLine, text: 'Professional PDF generation with your branding' },
  { icon: FaEnvelope, text: 'Send invoices directly via Gmail' },
  { icon: FaBell, text: 'Automated payment reminders (7 days, due, overdue)' },
  { icon: FaCalculator, text: 'VAT calculations & reports' },
  { icon: FaDownload, text: 'CSV import — bring your existing invoices' },
  { icon: FaCheckCircle, text: 'Quote → Invoice conversion' },
  { icon: FaCreditCard, text: 'Payment link integration (PayFast/Yoco)' },
];

const faqs = [
  {
    q: 'Do I need to know coding?',
    a: 'No! The DIY option includes a step-by-step guide with screenshots. If you can use Google Sheets, you can set this up.',
  },
  {
    q: 'What happens after I pay?',
    a: 'You will receive your license key via email within 24 hours. For Done-With-You, we will schedule a 30-minute video call to set everything up together.',
  },
  {
    q: 'Can I import my existing invoices?',
    a: 'Yes! The built-in CSV import wizard lets you bring all your existing invoice data in one click.',
  },
  {
    q: 'Is this a one-time payment or subscription?',
    a: 'One-time payment only. No monthly fees. The template is yours forever.',
  },
  {
    q: 'What if I need help later?',
    a: 'Email support is included. For ongoing help, you can book a VA support session at my standard hourly rate.',
  },
];

export default function TemplateShop() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="templates" className="section-padding bg-cream">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-script text-2xl mb-2 block">Digital Products</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">
            Ready-Made Solutions
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Professional Google Sheets templates that automate your business. 
            No subscriptions. No monthly fees. Yours forever.
          </p>
        </motion.div>

        {/* Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto"
        >
          {/* Product Header */}
          <div className="bg-navy-900 p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="/images/logo-icon.png" 
                alt="Invoice Sorter Pro" 
                className="h-16 w-auto"
              />
              <h3 className="text-3xl md:text-4xl font-serif text-gold">
                Invoice Sorter Pro
              </h3>
            </div>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Turn your Google Sheet into a full invoice management system. 
              Generate PDFs, send emails, track payments, and never chase invoices again.
            </p>
          </div>

          <div className="p-8 md:p-12">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gold-pale/30 transition-smooth"
                >
                  <feature.icon className="text-gold text-xl flex-shrink-0" />
                  <span className="text-navy-800 text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* DIY Plan */}
              <div className="border-2 border-gold/30 rounded-2xl p-6 hover:border-gold transition-smooth">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-serif text-navy-900 mb-2">DIY Setup</h4>
                  <div className="text-4xl font-bold text-gold">R499</div>
                  <p className="text-navy-600 text-sm mt-1">One-time payment</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-navy-700">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> Complete template</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> Step-by-step setup guide</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> Email support</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> Lifetime updates</li>
                </ul>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdWtinsZBL_jaWainRoBDnr0UiQDNTKPczHJbCqXMwnh5yDlg/viewform?usp=pp_url&entry.1149832351=DIY+Setup+%E2%80%94+R499+(Template+%2B+Step-by-Step+Guide)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center block"
                >
                  Get DIY Setup
                </a>
              </div>

              {/* Done-With-You Plan */}
              <div className="border-2 border-gold rounded-2xl p-6 bg-gold-pale/20 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy-900 px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-4">
                  <h4 className="text-xl font-serif text-navy-900 mb-2">Done-With-You</h4>
                  <div className="text-4xl font-bold text-gold">R999</div>
                  <p className="text-navy-600 text-sm mt-1">One-time payment</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-navy-700">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> Everything in DIY</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> 30-min video call setup</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> Import your existing data</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> Branding configured for you</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-gold text-xs" /> Personal walkthrough</li>
                </ul>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdWtinsZBL_jaWainRoBDnr0UiQDNTKPczHJbCqXMwnh5yDlg/viewform?usp=pp_url&entry.1149832351=Done-With-You+%E2%80%94+R999+(I+set+it+up+live+with+you+on+video+call)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Get Done-With-You
                </a>
              </div>
            </div>

            {/* Banking Details */}
            <div className="bg-navy-900/5 rounded-2xl p-6 mb-10">
              <h4 className="text-lg font-serif text-navy-900 mb-4 flex items-center gap-2">
                <FaCreditCard className="text-gold" /> Payment Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-bold text-navy-900">FNB</p>
                  <p className="text-navy-700">Account Name: S Theron</p>
                  <p className="text-navy-700">Account No: 631 4425 1509</p>
                  <p className="text-navy-700">Branch: 250655</p>
                </div>
                <div>
                  <p className="font-bold text-navy-900">Reference Format</p>
                  <p className="text-navy-700">[Your Business Name] + ISP</p>
                  <p className="text-navy-700">Example: SmithConsulting ISP</p>
                  <p className="text-gold font-bold mt-2 flex items-center gap-2">
                    <FaWhatsapp /> Or WhatsApp POP: +27 72 839 3087
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h4 className="text-lg font-serif text-navy-900 mb-4 flex items-center gap-2">
                <FaQuestionCircle className="text-gold" /> Frequently Asked Questions
              </h4>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gold/20 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-gold-pale/20 transition-smooth"
                    >
                      <span className="font-medium text-navy-900 text-sm">{faq.q}</span>
                      <span className="text-gold text-lg">{openFaq === index ? '−' : '+'}</span>
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="px-4 pb-4 text-sm text-navy-700"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
