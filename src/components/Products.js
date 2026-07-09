'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaEye, FaShoppingCart, FaTimes, 
  FaUsers, FaFileInvoice, FaBoxes, FaChartLine, 
  FaCalendarAlt, FaBullhorn, FaTshirt, FaClock,
  FaBuilding, FaCogs, FaReceipt, FaArrowRight,
  FaBalanceScale, FaMoneyBillWave, FaCalculator,
  FaTag, FaPercentage
} from 'react-icons/fa';

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec';

// Floating seeds configuration
const floatingSeeds = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 11) % 90}%`,
  top: `${10 + (i * 13) % 80}%`,
  size: 20 + (i % 4) * 15,
  delay: i * 1.2,
  duration: 16 + (i % 5) * 4,
  opacity: 0.08 + (i % 3) * 0.04
}));

const productCategories = [
  {
    id: 'client-management',
    title: 'Relationship Systems',
    icon: FaUsers,
    color: 'text-gold',
    bgColor: 'bg-navy-900/50',
    borderColor: 'border-gold/20',
    products: ['connectability', 'scalability']
  },
  {
    id: 'financial-operations',
    title: 'Financial Infrastructure',
    icon: FaMoneyBillWave,
    color: 'text-gold',
    bgColor: 'bg-navy-900/50',
    borderColor: 'border-gold/20',
    products: ['payability', 'profitability', 'mini-cash-up']
  },
  {
    id: 'inventory',
    title: 'Supply & Stock Control',
    icon: FaBoxes,
    color: 'text-gold',
    bgColor: 'bg-navy-900/50',
    borderColor: 'border-gold/20',
    products: ['availability']
  },
  {
    id: 'people-time',
    title: 'Workforce Systems',
    icon: FaClock,
    color: 'text-gray-400',
    bgColor: 'bg-navy-800/50',
    borderColor: 'border-gray-500/20',
    products: ['trackability']
  },
  {
    id: 'quick-solutions',
    title: 'Rapid Deployment Tools',
    icon: FaEye,
    color: 'text-gold',
    bgColor: 'bg-navy-900/50',
    borderColor: 'border-gold/20',
    products: ['receiptsnap', 'visibility']
  },
  {
    id: 'growth-branding',
    title: 'Growth Engineering',
    icon: FaBullhorn,
    color: 'text-gold',
    bgColor: 'bg-navy-900/50',
    borderColor: 'border-gold/20',
    products: ['marketability', 'promotability', 'cv-portfolio']
  },
  {
    id: 'custom',
    title: 'Bespoke Builds',
    icon: FaCogs,
    color: 'text-gold',
    bgColor: 'bg-navy-900/50',
    borderColor: 'border-gold/20',
    products: ['adaptability']
  }
];

const products = [
  {
    id: 'connectability',
    name: 'Connectability',
    subtitle: 'CRM Mini',
    price: 0,
    priceLabel: 'FREE',
    description: 'The relationship-tracking layer every operation needs before it can scale — deployed free, upgraded when you\'re ready.',
    tagline: 'The foundation layer for every client relationship you\'ll ever manage.',
    icon: FaUsers,
    color: 'from-emerald-500 to-teal-600',
    badge: 'FREE',
    badgeColor: 'bg-emerald-500',
    available: true,
    features: ['Contact management', 'Lead tracking', 'Basic pipeline', 'Email integration'],
    category: 'client-management'
  },
  {
    id: 'scalability',
    name: 'Scalability',
    subtitle: 'CRM Pro',
    price: 499,
    priceLabel: 'R499',
    description: 'A full pipeline architecture — deal stages, relationship metrics, and growth tracking — engineered for teams that have outgrown a contact list.',
    tagline: 'Expanding your reach with systematic precision.',
    icon: FaUsers,
    color: 'from-blue-500 to-indigo-600',
    badge: 'POPULAR',
    badgeColor: 'bg-blue-500',
    available: true,
    features: ['Full pipeline tracking', 'Deal management', 'Team collaboration', 'Growth analytics'],
    category: 'client-management'
  },
  {
    id: 'receiptsnap',
    name: 'ReceiptSnap',
    subtitle: 'Receipt Tracker',
    price: 299,
    priceLabel: 'R299',
    description: 'Snap photos of receipts, automatically extract data with AI, and export clean CSV files for your bookkeepers.',
    tagline: 'Snap. Save. Done.',
    icon: FaReceipt,
    color: 'from-amber-500 to-orange-600',
    badge: 'NEW',
    badgeColor: 'bg-amber-500',
    available: true,
    features: ['AI OCR extraction', 'Auto-categorization', 'CSV export', 'Cloud storage'],
    category: 'quick-solutions'
  },
  {
    id: 'visibility',
    name: 'Visibility',
    subtitle: 'Content Planner',
    price: 299,
    priceLabel: 'R299',
    description: 'Marketing calendars, content scheduling, and social media production workflows.',
    tagline: 'Content operations, engineered for consistency, not luck.',
    icon: FaCalendarAlt,
    color: 'from-violet-500 to-purple-600',
    badge: null,
    badgeColor: '',
    available: true,
    features: ['Content calendar', 'Social scheduling', 'Post tracking', 'Campaign planning'],
    category: 'quick-solutions'
  },
  {
    id: 'payability',
    name: 'Payability',
    subtitle: 'Invoice Sorter Pro',
    price: 499,
    priceLabel: 'R499',
    description: 'Automated accounts receivable workflows to track billing cycles and optimize collections.',
    tagline: 'Streamlining cash flow with effortless efficiency.',
    icon: FaFileInvoice,
    color: 'from-cyan-500 to-blue-600',
    badge: null,
    badgeColor: '',
    available: true,
    features: ['PDF generation', 'Email sending', 'Payment tracking', 'VAT reports'],
    category: 'financial-operations'
  },
  {
    id: 'availability',
    name: 'Availability',
    subtitle: 'Stock & Supplier Pro',
    price: 499,
    priceLabel: 'R499',
    description: 'Comprehensive inventory control, procurement tracking, and supply chain management.',
    tagline: 'Keeping your business perfectly supplied, never short.',
    icon: FaBoxes,
    color: 'from-sky-500 to-cyan-600',
    badge: null,
    badgeColor: '',
    available: true,
    features: ['Inventory tracking', 'Supplier management', 'Stock alerts', 'Reorder automation'],
    category: 'inventory'
  },
  {
    id: 'profitability',
    name: 'Profitability',
    subtitle: 'Income & Expenses',
    price: 799,
    priceLabel: 'R799',
    description: 'Real-time financial visibility, without a bookkeeper re-entering your data by hand.',
    tagline: 'Unlocking real-time financial clarity at a glance.',
    icon: FaChartLine,
    color: 'from-rose-500 to-pink-600',
    badge: null,
    badgeColor: '',
    available: true,
    features: ['Banking ledger', 'CSV import', 'Profit/loss reports', 'Category tracking'],
    category: 'financial-operations'
  },
  {
    id: 'marketability',
    name: 'Marketability',
    subtitle: 'SMM & Web Framework',
    price: 0,
    priceLabel: 'Request Quote',
    description: 'Tiered digital strategies, social media management intake, and fast GitHub/Vercel website launch workflows.',
    tagline: 'Engineered for high-speed digital authority and conversions.',
    icon: FaBullhorn,
    color: 'from-violet-500 to-purple-600',
    badge: 'REQUEST QUOTE',
    badgeColor: 'bg-violet-500',
    available: true,
    orderUrl: 'https://script.google.com/macros/s/AKfycbxYopxLBZudEeEFN5c44RkuQMdHns7pCZksPpFLBtZYy3E9UUVJhgtOUnomEEc82UFpgg/exec',
    features: ['Strategy intake', 'Social media management', 'Website launch', 'Conversion tracking'],
    category: 'growth-branding'
  },
  {
    id: 'promotability',
    name: 'Promotability',
    subtitle: 'Corporate Swag Tracker',
    price: 0,
    priceLabel: 'Request Quote',
    description: 'Visual proofing, local South African supplier directory linking, and markup calculators for physical branded merchandise.',
    tagline: 'Transforming your visual identity into tangible corporate impact.',
    icon: FaTshirt,
    color: 'from-pink-500 to-rose-600',
    badge: 'REQUEST QUOTE',
    badgeColor: 'bg-pink-500',
    available: true,
    orderUrl: 'https://script.google.com/macros/s/AKfycbwvyLaypTc0yWj5xcAIw0PmtngDvE2B4REgkzJr1u6nFcJIJ8Zz8o68RxNWRaI9gVyt/exec',
    features: ['Visual proofing', 'Supplier directory', 'Markup calculator', 'Order tracking'],
    category: 'growth-branding'
  },
  {
    id: 'trackability',
    name: 'Trackability',
    subtitle: 'Time & Payroll',
    price: 499,
    priceLabel: 'R499',
    description: 'Kiosk QR check-in/out interfaces and automated backend PDF payslip generators for HR managers.',
    tagline: 'Empowering workforce operations with absolute accountability.',
    icon: FaClock,
    color: 'from-gray-400 to-gray-500',
    badge: 'COMING SOON',
    badgeColor: 'bg-gray-400',
    available: false,
    features: ['QR check-in/out', 'Payslip generation', 'Attendance tracking', 'HR reporting'],
    category: 'people-time'
  },
  {
    id: 'mini-cash-up',
    name: 'Mini Cash-Up',
    subtitle: 'Daily Cash Reconciliation',
    price: 499,
    priceLabel: 'R499',
    description: 'Lightweight daily cash-up tool for retail and hospitality businesses. Reconcile tills, track floats, and spot discrepancies in minutes.',
    tagline: 'Balanced books before you lock the door.',
    icon: FaCalculator,
    color: 'from-teal-400 to-cyan-500',
    badge: 'COMING SOON',
    badgeColor: 'bg-gray-400',
    available: false,
    features: ['Daily till reconciliation', 'Float tracking', 'Discrepancy alerts', 'End-of-day reports'],
    category: 'financial-operations'
  },
  {
    id: 'cv-portfolio',
    name: 'CV/Portfolio Builder',
    subtitle: 'Professional Document Generator',
    price: 0,
    priceLabel: 'R299–R999',
    description: 'Generate polished CVs, portfolios, and proposal documents from your Google Sheets data. Perfect for freelancers and agencies.',
    tagline: 'Your experience, beautifully presented.',
    icon: FaFileInvoice,
    color: 'from-indigo-400 to-violet-500',
    badge: 'COMING SOON',
    badgeColor: 'bg-gray-400',
    available: false,
    features: ['Template library', 'Auto-populate from Sheets', 'PDF export', 'Branded styling'],
    category: 'growth-branding'
  },
  {
    id: 'adaptability',
    name: 'Adaptability',
    subtitle: 'Done-With-You Setup',
    price: 999,
    priceLabel: 'R999',
    description: 'The core onboarding engine and developer configuration block built for white-label reseller buyers.',
    tagline: 'Tailoring high-level automation to fit any business blueprint.',
    icon: FaCogs,
    color: 'from-gold to-amber-600',
    badge: 'RECOMMENDED',
    badgeColor: 'bg-gold',
    available: true,
    features: ['30-min video setup', 'Data import', 'Branding config', 'Personal walkthrough'],
    category: 'custom'
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [partnerCode, setPartnerCode] = useState('');
  const [globalPartnerCode, setGlobalPartnerCode] = useState('');

  const openModal = (product) => {
    if (product.available) {
      setSelectedProduct(product);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setPartnerCode('');
    document.body.style.overflow = 'auto';
  };

  const buildOrderUrl = (product, code) => {
    const base = product.orderUrl || ORDER_FORM_URL;
    const params = new URLSearchParams();

    if (!product.orderUrl) {
      params.set('product', product.name + ' — ' + product.subtitle);
    }
    if (code && code.trim()) {
      params.set('partner', code.trim().toUpperCase());
    }

    const query = params.toString();
    return query ? `${base}?${query}` : base;
  };

  const getProductById = (id) => products.find(p => p.id === id);

  const discountedPrice = (price) => {
    if (price === 0) return price;
    return Math.round(price * 0.9);
  };

  const formatPrice = (price) => {
    return 'R' + price.toLocaleString('en-ZA');
  };

  return (
    <section id="products" className="section-padding bg-cream relative overflow-hidden">
      {/* Floating Dandelion Seeds Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingSeeds.map((seed) => (
          <div
            key={seed.id}
            className="absolute"
            style={{
              left: seed.left,
              top: seed.top,
              width: `${seed.size}px`,
              height: `${seed.size}px`,
              opacity: seed.opacity,
              animation: `float-seed-products ${seed.duration}s ease-in-out ${seed.delay}s infinite`,
            }}
          >
            <img
              src="/images/dandelion-seed.png"
              alt=""
              className="w-full h-full"
              style={{
                transform: `rotate(${(seed.id * 47) % 360}deg)`,
                filter: 'drop-shadow(0 1px 2px rgba(201,162,39,0.15))'
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <style jsx>{`\n        @keyframes float-seed-products {\n          0%, 100% {\n            transform: translate(0, 0) rotate(0deg);\n          }\n          25% {\n            transform: translate(12px, -18px) rotate(4deg);\n          }\n          50% {\n            transform: translate(-8px, -28px) rotate(-2deg);\n          }\n          75% {\n            transform: translate(15px, -12px) rotate(6deg);\n          }\n        }\n      `}</style>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Engineered Systems</p>
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">
            AbilitySuite™
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            A Modular Operations Architecture
          </p>
          <p className="text-navy-500 text-base max-w-3xl mx-auto mt-4">
            Each Ability is a purpose-engineered automation solving one operational problem precisely — deployed inside your existing Google Workspace, owned outright, and built to interoperate as your business scales. This isn&apos;t a bundle of templates. It&apos;s infrastructure, assembled module by module, exactly to the shape of your operation.
          </p>
          <p className="text-gold-dark font-bold text-sm mt-4">
            No subscriptions. No rented software. Build it once, and it&apos;s yours — permanently.
          </p>
        </motion.div>

        {/* Partner Code Banner — Glass Morphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gold/20 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPercentage className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-navy-900 font-bold text-lg">Have a Partner Code?</h3>
                  <p className="text-navy-600 text-sm">Enter it below and get <span className="text-gold font-bold">10% off</span> any paid module.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400 w-4 h-4" />
                  <input
                    type="text"
                    value={globalPartnerCode}
                    onChange={(e) => setGlobalPartnerCode(e.target.value.toUpperCase())}
                    placeholder="e.g. PARTNER-SARAH"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 border border-gold/30 text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>
                {globalPartnerCode.trim() && (
                  <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 whitespace-nowrap">
                    <FaCheckCircle size={14} /> 10% Active
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Grouped Products */}
        <div className="space-y-16 mb-16">
          {productCategories.map((category) => {
            const categoryProducts = category.products.map(id => getProductById(id)).filter(Boolean);
            if (categoryProducts.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Header — Glass */}
                <div className={`flex items-center gap-3 mb-6 px-5 py-3.5 rounded-xl ${category.bgColor} backdrop-blur-sm ${category.borderColor} border`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                  <h3 className={`text-lg font-bold tracking-wide ${category.color}`}>{category.title}</h3>
                  <div className="h-px flex-1 bg-gold/20" />
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={`group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 ${
                        product.available 
                          ? 'border-transparent hover:border-gold/40 hover:shadow-xl hover:-translate-y-2 hover:shadow-gold/10 cursor-pointer' 
                          : 'border-gray-200 opacity-70 cursor-not-allowed'
                      }`}
                      onClick={() => product.orderUrl ? window.open(buildOrderUrl(product, globalPartnerCode), '_blank') : openModal(product)}
                    >
                      {/* Card Header */}
                      <div className={`bg-gradient-to-r ${product.color} p-6 text-white relative`}>
                        {product.badge && (
                          <span className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                            {product.badge}
                          </span>
                        )}
                        <product.icon className="w-10 h-10 mb-3 opacity-90" />
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-white/80 text-sm">{product.subtitle}</p>
                      </div>

                      {/* Card Body */}
                      <div className="p-6">
                        <p className="text-navy-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                        <p className="text-navy-400 text-xs italic mb-4">&quot;{product.tagline}&quot;</p>

                        <div className="flex items-center justify-between">
                          <div>
                            {globalPartnerCode.trim() && product.price > 0 ? (
                              <div className="flex items-center gap-2">
                                <span className="text-lg text-navy-400 line-through">{product.priceLabel}</span>
                                <span className="text-2xl font-bold text-emerald-600">{formatPrice(discountedPrice(product.price))}</span>
                              </div>
                            ) : (
                              <div className="text-2xl font-bold text-gold">{product.priceLabel}</div>
                            )}
                          </div>
                          {product.available ? (
                            <span className="text-emerald-500 text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              <FaArrowRight size={14} /> {product.price === 0 && !product.orderUrl ? 'Get Free' : 'Deploy Now'}
                            </span>
                          ) : (
                            <span className="text-gray-400 text-sm font-medium">Coming Soon</span>
                          )}
                        </div>

                        {globalPartnerCode.trim() && product.price > 0 && (
                          <p className="text-emerald-600 text-xs mt-2 font-medium">
                            <FaTag className="inline mr-1" size={10} />
                            Partner code applied — 10% off
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ReceiptSnap vs Payability Comparison — Glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-gold/20 p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-10">
            <span className="text-gold font-script text-xl mb-2 block">Two Financial Systems. Two Different Jobs.</span>
            <h3 className="text-3xl font-serif text-navy-900 mb-3">ReceiptSnap vs Payability</h3>
            <p className="text-navy-600 max-w-xl mx-auto">Both handle money, but solve completely different problems. Here&apos;s how to choose.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ReceiptSnap */}
            <div className="bg-amber-50/80 backdrop-blur-sm rounded-xl p-8 border-2 border-amber-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                  <FaReceipt size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-900">ReceiptSnap</h4>
                  <p className="text-amber-600 font-bold">
                    {globalPartnerCode.trim() ? formatPrice(discountedPrice(299)) : 'R299'} — One Time
                    {globalPartnerCode.trim() && <span className="text-navy-400 text-sm line-through ml-2">R299</span>}
                  </p>
                </div>
              </div>
              <p className="text-navy-600 mb-6 text-sm leading-relaxed">
                <strong>You buy things and need proof.</strong> ReceiptSnap captures, reads, and categorizes every receipt you photograph. Built for business owners who need clean expense records for SARS, bookkeepers, or tax season.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <FaCheckCircle className="text-amber-500 flex-shrink-0" size={14} /> Snap receipts with your phone
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <FaCheckCircle className="text-amber-500 flex-shrink-0" size={14} /> AI extracts date, vendor, amount
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <FaCheckCircle className="text-amber-500 flex-shrink-0" size={14} /> Auto-categorize expenses
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <FaCheckCircle className="text-amber-500 flex-shrink-0" size={14} /> Export CSV for your accountant
                </li>
              </ul>
              <div className="bg-white/80 rounded-lg p-4 border border-amber-100">
                <p className="text-xs text-navy-500 font-medium">Best for:</p>
                <p className="text-sm text-navy-700">Freelancers, small businesses, anyone who needs to track expenses and stay SARS-compliant.</p>
              </div>
            </div>

            {/* Payability */}
            <div className="bg-cyan-50/80 backdrop-blur-sm rounded-xl p-8 border-2 border-cyan-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                  <FaFileInvoice size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-900">Payability</h4>
                  <p className="text-cyan-600 font-bold">
                    {globalPartnerCode.trim() ? formatPrice(discountedPrice(499)) : 'R499'} — One Time
                    {globalPartnerCode.trim() && <span className="text-navy-400 text-sm line-through ml-2">R499</span>}
                  </p>
                </div>
              </div>
              <p className="text-navy-600 mb-6 text-sm leading-relaxed">
                <strong>You sell things and need to get paid.</strong> Payability is a full accounts receivable system — generate branded PDF invoices, track payments, send reminders, and know exactly who owes you what.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <FaCheckCircle className="text-cyan-500 flex-shrink-0" size={14} /> Generate branded PDF invoices
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <FaCheckCircle className="text-cyan-500 flex-shrink-0" size={14} /> Email invoices directly from Sheets
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <FaCheckCircle className="text-cyan-500 flex-shrink-0" size={14} /> Track payment status & overdue
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <FaCheckCircle className="text-cyan-500 flex-shrink-0" size={14} /> VAT reports & monthly summaries
                </li>
              </ul>
              <div className="bg-white/80 rounded-lg p-4 border border-cyan-100">
                <p className="text-xs text-navy-500 font-medium">Best for:</p>
                <p className="text-sm text-navy-700">Service businesses, agencies, consultants — anyone who invoices clients and needs cash flow visibility.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-gold-pale/30 rounded-xl p-6 border border-gold/20">
            <p className="text-navy-700 font-medium mb-2">
              <FaBalanceScale className="inline mr-2 text-gold" size={18} />
              The Simple Rule
            </p>
            <p className="text-navy-600 text-sm max-w-2xl mx-auto">
              <strong>ReceiptSnap</strong> governs what leaves your business. <strong>Payability</strong> governs what comes back in. Most operations eventually need both — they&apos;re built to run side by side inside the same Workspace.
            </p>
          </div>
        </motion.div>

        {/* Adaptability White-Label Section — Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-16 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-gold/30">
                Custom Engineering
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Every Module, Rebuilt as Yours.
              </h3>
              <p className="text-cream/80 text-lg mb-6 leading-relaxed">
                Adaptability is where engineering becomes bespoke. We take any Ability module and rebuild it entirely around your identity — your colors, your logo, your business name, on every sheet — and hand it back as a system that looks, and functions, like it was built from scratch for you alone.
              </p>
              <div className="bg-white/10 rounded-xl p-6 border border-white/10 mb-6 backdrop-blur-sm">
                <p className="text-gold font-bold mb-2">Example:</p>
                <p className="text-cream/80 text-sm">
                  Scalability (CRM Pro) + Adaptability White-Label = <span className="text-gold font-bold">Your own custom CRM</span> for just <span className="text-gold font-bold">R1,498 total</span>
                </p>
                <p className="text-cream/60 text-xs mt-2">
                  That&apos;s R499 for the module + R999 for the white-label setup. You get a fully branded system that looks like it was built just for you.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-cream/80">
                  <FaCheckCircle className="text-gold flex-shrink-0" size={16} />
                  Your logo, colors, and business name on every sheet
                </li>
                <li className="flex items-center gap-3 text-cream/80">
                  <FaCheckCircle className="text-gold flex-shrink-0" size={16} />
                  Custom domain email integration
                </li>
                <li className="flex items-center gap-3 text-cream/80">
                  <FaCheckCircle className="text-gold flex-shrink-0" size={16} />
                  30-minute personal setup walkthrough
                </li>
                <li className="flex items-center gap-3 text-cream/80">
                  <FaCheckCircle className="text-gold flex-shrink-0" size={16} />
                  Resell it to your own clients (reseller license available)
                </li>
              </ul>
              <a
                href={buildOrderUrl({ name: 'Adaptability', subtitle: 'White-Label Setup', price: 999, orderUrl: null }, globalPartnerCode)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
              >
                <FaShoppingCart /> Commission Adaptability — {globalPartnerCode.trim() ? formatPrice(discountedPrice(999)) : 'R999'}
              </a>
              {globalPartnerCode.trim() && (
                <p className="text-emerald-400 text-sm mt-2">
                  <FaTag className="inline mr-1" size={10} /> Partner code applied — 10% off
                </p>
              )}
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <p className="text-gold font-script text-xl">White-Label Example</p>
                  <p className="text-cream/60 text-sm">What your custom system could look like</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-gold font-bold text-sm">
                        YOUR
                      </div>
                      <div>
                        <p className="text-navy-900 font-bold text-sm">Your Business CRM</p>
                        <p className="text-navy-500 text-xs">Powered by AbilitySuite™</p>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-gold font-bold text-sm">
                        YOUR
                      </div>
                      <div>
                        <p className="text-navy-900 font-bold text-sm">Your Business Invoice System</p>
                        <p className="text-navy-500 text-xs">Powered by AbilitySuite™</p>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-2/3"></div>
                  </div>
                </div>
                <p className="text-center text-cream/40 text-xs mt-4">
                  * Visual mockup — actual branding uses your real assets
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Order Form CTA — Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 backdrop-blur-md rounded-2xl p-8 text-center border border-gold/20 shadow-lg"
        >
          <h3 className="text-2xl font-serif text-navy-900 mb-4">
            Ready to Deploy Your Infrastructure?
          </h3>
          <p className="text-navy-600 max-w-lg mx-auto mb-6">
            Select your modules, fill in your details, and pay via bank transfer or QR code.
            Your license keys are delivered within 24 hours.
          </p>

          {globalPartnerCode.trim() && (
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-600 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-emerald-500/30">
              <FaTag size={12} /> Partner code <span className="uppercase">{globalPartnerCode}</span> active — 10% off at checkout
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={buildOrderUrl({ name: 'Multiple Modules', subtitle: 'Custom Order', price: 0, orderUrl: null }, globalPartnerCode)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
            >
              <FaShoppingCart /> Deploy Now — One Form, Everything You Need
            </a>
          </div>

          {!globalPartnerCode.trim() && (
            <p className="text-navy-400 text-sm">
              <FaTag className="inline mr-1" size={10} />
              Have a partner code? <button onClick={() => document.querySelector('input[placeholder*="PARTNER"]').scrollIntoView({ behavior: 'smooth' })} className="text-gold underline hover:no-underline">Enter it above</button> for 10% off.
            </p>
          )}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-r ${selectedProduct.color} p-6 text-white relative`}>
              <button onClick={closeModal} className="absolute top-4 right-4 text-white/70 hover:text-white">
                <FaTimes size={20} />
              </button>
              <selectedProduct.icon className="w-12 h-12 mb-3 opacity-90" />
              <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              <p className="text-white/80">{selectedProduct.subtitle}</p>
            </div>

            <div className="p-6">
              <p className="text-navy-700 mb-4">{selectedProduct.description}</p>
              <p className="text-navy-400 text-sm italic mb-6">&quot;{selectedProduct.tagline}&quot;</p>

              <h4 className="font-bold text-navy-900 mb-3">Features:</h4>
              <ul className="space-y-2 mb-6">
                {selectedProduct.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-navy-600">
                    <FaCheckCircle className="text-gold flex-shrink-0" size={14} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mb-4 p-4 bg-gold-pale/30 rounded-xl">
                <span className="text-navy-600 text-sm">Price</span>
                {globalPartnerCode.trim() && selectedProduct.price > 0 ? (
                  <div className="text-right">
                    <span className="text-lg text-navy-400 line-through block">{selectedProduct.priceLabel}</span>
                    <span className="text-3xl font-bold text-emerald-600">{formatPrice(discountedPrice(selectedProduct.price))}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gold">{selectedProduct.priceLabel}</span>
                )}
              </div>

              {globalPartnerCode.trim() && selectedProduct.price > 0 && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2">
                  <FaTag className="text-emerald-500" size={14} />
                  <span className="text-emerald-700 text-sm font-medium">
                    Partner code <span className="font-bold uppercase">{globalPartnerCode}</span> applied — 10% off
                  </span>
                </div>
              )}

              {/* Partner Code Input in Modal */}
              <div className="mb-6">
                <label className="text-navy-600 text-sm font-medium mb-2 block">Partner Code (optional)</label>
                <div className="relative">
                  <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400 w-4 h-4" />
                  <input
                    type="text"
                    value={partnerCode}
                    onChange={(e) => setPartnerCode(e.target.value.toUpperCase())}
                    placeholder="Enter code for 10% off"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>
                {partnerCode.trim() && !globalPartnerCode.trim() && (
                  <p className="text-emerald-600 text-xs mt-2 font-medium">
                    <FaCheckCircle className="inline mr-1" size={10} /> 10% discount will be applied at checkout
                  </p>
                )}
              </div>

              {selectedProduct.id === 'connectability' ? (
                <a
                  href="https://dandelioncreations.co.za/get-connectability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaArrowRight /> Get Connectability Free
                </a>
              ) : (
                <a
                  href={buildOrderUrl(selectedProduct, partnerCode || globalPartnerCode)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gold hover:bg-[#c4a030] text-navy-900 text-center py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Deploy {selectedProduct.name}
                </a>
              )}
              <p className="text-center text-navy-400 text-xs mt-3">
                You can add more modules in the order form
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}