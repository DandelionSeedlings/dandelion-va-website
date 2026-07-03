"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaEye, FaShoppingCart, FaTimes, 
  FaUsers, FaFileInvoice, FaBoxes, FaChartLine, 
  FaCalendarAlt, FaBullhorn, FaTshirt, FaClock,
  FaBuilding, FaCogs, FaReceipt, FaArrowRight
} from 'react-icons/fa';

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbyUAtVX_pKihPq2iBqb_bq4ctso-v8z52YHHlSX3TflJaz_DlaMsTq8FUSoCw7hmQqPNw/exec';

const products = [
  {
    id: 'connectability',
    name: 'Connectability',
    subtitle: 'CRM Mini',
    price: 0,
    priceLabel: 'FREE',
    description: 'Client tracking foundations for front-facing sales and administrative workflows.',
    tagline: 'Cultivating client connections from the very first touch.',
    icon: FaUsers,
    color: 'from-emerald-500 to-teal-600',
    badge: 'FREE',
    badgeColor: 'bg-emerald-500',
    available: true,
    features: ['Contact management', 'Lead tracking', 'Basic pipeline', 'Email integration'],
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
  },
  {
    id: 'visibility',
    name: 'Visibility',
    subtitle: 'Content Planner',
    price: 299,
    priceLabel: 'R299',
    description: 'Marketing calendars, content scheduling, and social media production workflows.',
    tagline: 'Putting your brand in front of the right audience, consistently.',
    icon: FaCalendarAlt,
    color: 'from-violet-500 to-purple-600',
    badge: null,
    badgeColor: '',
    available: true,
    features: ['Content calendar', 'Social scheduling', 'Post tracking', 'Campaign planning'],
  },
  {
    id: 'scalability',
    name: 'Scalability',
    subtitle: 'CRM Pro',
    price: 499,
    priceLabel: 'R499',
    description: 'Advanced sales pipelines, relationship metrics, and growth tracking for account managers.',
    tagline: 'Expanding your reach with systematic precision.',
    icon: FaUsers,
    color: 'from-blue-500 to-indigo-600',
    badge: 'POPULAR',
    badgeColor: 'bg-blue-500',
    available: true,
    features: ['Full pipeline tracking', 'Deal management', 'Team collaboration', 'Growth analytics'],
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
  },
  {
    id: 'profitability',
    name: 'Profitability',
    subtitle: 'Income & Expenses',
    price: 799,
    priceLabel: 'R799',
    description: 'Automated banking ledger and CSV data importing for business owners and accountants.',
    tagline: 'Unlocking real-time financial clarity at a glance.',
    icon: FaChartLine,
    color: 'from-rose-500 to-pink-600',
    badge: null,
    badgeColor: '',
    available: true,
    features: ['Banking ledger', 'CSV import', 'Profit/loss reports', 'Category tracking'],
  },
  {
    id: 'marketability',
    name: 'Marketability',
    subtitle: 'SMM & Web Framework',
    price: 0,
    priceLabel: 'POA',
    description: 'Tiered digital strategies, social media management intake, and fast GitHub/Vercel website launch workflows.',
    tagline: 'Engineered for high-speed digital authority and conversions.',
    icon: FaBullhorn,
    color: 'from-gray-400 to-gray-500',
    badge: 'COMING SOON',
    badgeColor: 'bg-gray-400',
    available: false,
    features: ['Strategy intake', 'Social media management', 'Website launch', 'Conversion tracking'],
  },
  {
    id: 'promotability',
    name: 'Promotability',
    subtitle: 'Corporate Swag Tracker',
    price: 0,
    priceLabel: 'POA',
    description: 'Visual proofing, local South African supplier directory linking, and markup calculators for physical branded merchandise.',
    tagline: 'Transforming your visual identity into tangible corporate impact.',
    icon: FaTshirt,
    color: 'from-gray-400 to-gray-500',
    badge: 'COMING SOON',
    badgeColor: 'bg-gray-400',
    available: false,
    features: ['Visual proofing', 'Supplier directory', 'Markup calculator', 'Order tracking'],
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
  },
  {
    id: 'capability',
    name: 'Capability',
    subtitle: 'Main Office Dashboard',
    price: 1499,
    priceLabel: 'R1,499',
    description: 'The ultimate master executive view compiling metrics from across the entire suite.',
    tagline: 'The complete C-suite command center for operational health.',
    icon: FaBuilding,
    color: 'from-gray-400 to-gray-500',
    badge: 'COMING SOON',
    badgeColor: 'bg-gray-400',
    available: false,
    features: ['Unified dashboard', 'Cross-suite metrics', 'Executive reports', 'Real-time overview'],
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
  },
];

export default function TemplateShop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    if (product.available) {
      setSelectedProduct(product);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const getOrderUrl = (product) => {
    return `${ORDER_FORM_URL}?product=${encodeURIComponent(product.name + ' — ' + product.subtitle)}`;
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
            AbilitySuite™
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Professional Google Sheets templates that automate your business.
            No subscriptions. No monthly fees. Yours forever.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 ${
                product.available 
                  ? 'border-transparent hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 cursor-pointer' 
                  : 'border-gray-200 opacity-70 cursor-not-allowed'
              }`}
              onClick={() => openModal(product)}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${product.color} p-6 text-white relative`}>
                {product.badge && (
                  <span className={`absolute top-4 right-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
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
                <p className="text-navy-400 text-xs italic mb-4">"{product.tagline}"</p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gold">{product.priceLabel}</div>
                  {product.available ? (
                    <span className="text-gold text-sm font-medium flex items-center gap-1">
                      <FaShoppingCart size={14} /> Order
                    </span>
                  ) : (
                    <span className="text-gray-400 text-sm font-medium">Coming Soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Form CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-serif text-white mb-4">
            Ready to Automate Your Business?
          </h3>
          <p className="text-white/70 max-w-lg mx-auto mb-6">
            Select your products, fill in your details, and pay via bank transfer or QR code.
            Your license keys are delivered within 24 hours.
          </p>
          <a
            href={ORDER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
          >
            <FaShoppingCart /> Order Now — One Form, Everything You Need
          </a>
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
              <p className="text-navy-400 text-sm italic mb-6">"{selectedProduct.tagline}"</p>

              <h4 className="font-bold text-navy-900 mb-3">Features:</h4>
              <ul className="space-y-2 mb-6">
                {selectedProduct.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-navy-600">
                    <FaCheckCircle className="text-gold flex-shrink-0" size={14} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mb-6 p-4 bg-gold-pale/30 rounded-xl">
                <span className="text-navy-600 text-sm">Price</span>
                <span className="text-3xl font-bold text-gold">{selectedProduct.priceLabel}</span>
              </div>

              <a
                href={ORDER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold hover:bg-[#c4a030] text-navy-900 text-center py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaShoppingCart /> Order {selectedProduct.name}
              </a>
              <p className="text-center text-navy-400 text-xs mt-3">
                You can add more products in the order form
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}