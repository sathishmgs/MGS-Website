import { useState } from 'react';
import {
  Check,
  CheckCircle2,
  MessageSquare,
  Phone,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const PROJECT_TYPES = [
  {
    id: 'workshop_billing',
    title: 'Two-Wheeler & Workshop Billing Software',
    desc: 'For bike service centers, car garages & workshops with job cards, spare parts & labor.',
    typicalTime: '5 – 10 Days',
    popular: true,
  },
  {
    id: 'retail_billing',
    title: 'Smart Retail Billing & POS Software',
    desc: 'For retail shops, supermarkets, provision, textile, medical & wholesale stores.',
    typicalTime: '5 – 10 Days',
    popular: true,
  },
  {
    id: 'business',
    title: 'Business & Company Website',
    desc: 'For businesses, agencies, factories & service providers to attract new clients.',
    typicalTime: '3 – 7 Days',
    popular: false,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Online Store',
    desc: 'To sell your products online with cart, catalog & instant WhatsApp orders.',
    typicalTime: '7 – 12 Days',
    popular: true,
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Digital QR Food Menu',
    desc: 'Digital food menu, table reservation & takeaway orders for cafes & restaurants.',
    typicalTime: '4 – 7 Days',
    popular: false,
  },
  {
    id: 'logistics',
    title: 'Logistics & Fleet Transport System',
    desc: 'For transport & courier operators to track dispatches, vehicles & parcels.',
    typicalTime: '10 – 14 Days',
    popular: false,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio / Professional Site',
    desc: 'For doctors, lawyers, photographers, freelancers & job seekers.',
    typicalTime: '3 – 5 Days',
    popular: false,
  },
];

const EXTRA_FEATURES = [
  {
    id: 'whatsapp_orders',
    label: '1-Click WhatsApp Ordering / Enquiry Button',
    shortLabel: 'WhatsApp Ordering',
    default: true,
  },
  {
    id: 'job_card_system',
    label: 'Job Card Maker & Vehicle Service Due Reminder (Workshops)',
    shortLabel: 'Job Cards & Reminders',
    default: false,
  },
  {
    id: 'payment_gateway',
    label: 'Online Payment Integration (UPI, GPay, PhonePe, Cards)',
    shortLabel: 'UPI & Card Payments',
    default: true,
  },
  {
    id: 'barcode_support',
    label: 'Barcode Scanner & Thermal Receipt Print (For Billing)',
    shortLabel: 'Barcode & Thermal Print',
    default: false,
  },
  {
    id: 'admin_panel',
    label: 'Simple Admin Dashboard to Edit Products & View Reports',
    shortLabel: 'Admin Dashboard',
    default: true,
  },
  {
    id: 'domain_hosting',
    label: 'Custom Domain (.com / .in) & Fast Secure Cloud Hosting',
    shortLabel: 'Domain & Cloud Hosting',
    default: true,
  },
  {
    id: 'training_support',
    label: 'Free Tamil & English Video/Phone Training & Support',
    shortLabel: 'Training & Live Support',
    default: true,
  },
];

export default function QuoteCalculator() {
  const [selectedType, setSelectedType] = useState('workshop_billing');
  const [selectedFeatures, setSelectedFeatures] = useState([
    'whatsapp_orders',
    'payment_gateway',
    'admin_panel',
    'domain_hosting',
    'training_support',
  ]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
    );
  };

  const currentProject = PROJECT_TYPES.find((item) => item.id === selectedType) || PROJECT_TYPES[0];

  const buildWhatsAppUrl = () => {
    const featureLabels = selectedFeatures
      .map((id) => {
        const item = EXTRA_FEATURES.find((f) => f.id === id);
        return item ? `• ${item.label}` : null;
      })
      .filter(Boolean)
      .join('%0A');

    const nameText = clientName.trim() ? `Client Name: ${encodeURIComponent(clientName.trim())}%0A` : '';
    const phoneText = clientPhone.trim() ? `Contact: ${encodeURIComponent(clientPhone.trim())}%0A` : '';

    const text = `Hi Sathish (MGS Freelance),%0A%0AI want an instant free quote for my project:%0A%0A*Project Type:* ${encodeURIComponent(
      currentProject.title
    )}%0A*Estimated Timeline:* ${encodeURIComponent(currentProject.typicalTime)}%0A${nameText}${phoneText}%0A*Selected Features:*%0A${featureLabels}%0A%0APlease let me know the best price package and how we can get started!`;

    return `https://wa.me/917708691940?text=${text}`;
  };

  return (
    <section id="calculator" className="section section--calculator reveal" aria-labelledby="calc-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Instant Price Estimator</span>
          <h2 id="calc-heading" className="section-title">
            Configure Your Project &amp; <span className="text-gradient">Get a Free Quote</span>
          </h2>
          <p className="section-subtitle">
            Select what your business needs below. No technical jargon—pick your required features and
            receive an immediate, affordable quote directly on WhatsApp or Call.
          </p>
        </div>

        <div className="calculator-layout glass-card">
          <div className="calc-left">
            {/* Step 1: Project Type */}
            <div className="calc-step">
              <div className="calc-step__badge">
                <span>Step 1</span>
              </div>
              <h3 className="calc-step__title">Choose What You Want To Build</h3>

              <div className="calc-types-grid">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      className={`calc-type-card ${isSelected ? 'calc-type-card--selected' : ''}`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <div className="calc-type-card__header">
                        <span
                          className={`calc-type-card__radio ${isSelected ? 'calc-type-card__radio--selected' : ''}`}
                          aria-hidden="true"
                        >
                          {isSelected && <span className="radio-inner" />}
                        </span>
                        <div className="calc-type-card__titles">
                          <span className="calc-type-card__title">{type.title}</span>
                          {type.popular && <span className="calc-popular-badge">Popular</span>}
                        </div>
                      </div>
                      <p className="calc-type-card__desc">{type.desc}</p>
                      <div className="calc-type-card__meta">
                        <span className="meta-time">Timeline: {type.typicalTime}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Features */}
            <div className="calc-step">
              <div className="calc-step__badge">
                <span>Step 2</span>
              </div>
              <h3 className="calc-step__title">Select Features &amp; Add-ons</h3>

              <div className="calc-features-grid">
                {EXTRA_FEATURES.map((feat) => {
                  const checked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      className={`calc-feature-pill ${checked ? 'calc-feature-pill--active' : ''}`}
                      onClick={() => toggleFeature(feat.id)}
                    >
                      <span className="feature-check">
                        {checked ? <Check size={14} /> : null}
                      </span>
                      <span className="feature-label">{feat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Panel */}
          <div className="calc-right">
            <div className="calc-summary-card">
              <div className="calc-summary__badge">
                <span>Step 3 &bull; Instant Quote</span>
              </div>
              <div className="calc-summary__header">
                <Sparkles size={20} className="text-gradient" />
                <h4>Your Project Configuration</h4>
              </div>

              <div className="calc-summary__item">
                <span className="summary-label">Selected Solution</span>
                <span className="summary-val highlight">{currentProject.title}</span>
              </div>

              <div className="calc-summary__item">
                <span className="summary-label">Estimated Delivery</span>
                <span className="summary-val">{currentProject.typicalTime}</span>
              </div>

              <div className="calc-summary__item">
                <span className="summary-label">Selected Features</span>
                <span className="summary-val">{selectedFeatures.length} Features Included</span>
              </div>

              <div className="calc-features-preview">
                {selectedFeatures.slice(0, 4).map((id) => {
                  const f = EXTRA_FEATURES.find((item) => item.id === id);
                  return (
                    <div key={id} className="preview-chip">
                      <CheckCircle2 size={13} aria-hidden="true" />
                      <span>{f ? (f.shortLabel || f.label.split('(')[0]) : id}</span>
                    </div>
                  );
                })}
                {selectedFeatures.length > 4 && (
                  <span className="preview-more">+{selectedFeatures.length - 4} more features</span>
                )}
              </div>

              {/* Optional Quick Details */}
              <div className="calc-quick-inputs">
                <input
                  type="text"
                  name="clientName"
                  autoComplete="name"
                  aria-label="Your Name (Optional)"
                  placeholder="Your Name (Optional)"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="calc-input"
                />
                <input
                  type="tel"
                  name="clientPhone"
                  autoComplete="tel"
                  inputMode="tel"
                  aria-label="Your Phone / WhatsApp No."
                  placeholder="Your Phone / WhatsApp No."
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="calc-input"
                />
              </div>

              <div className="calc-summary__cta">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large calc-cta-btn"
                >
                  <MessageSquare size={18} aria-hidden="true" />
                  <span>Get Instant Quote on WhatsApp</span>
                </a>

                <a
                  href={PERSONAL_INFO.phoneHref}
                  className="btn btn--secondary btn--large calc-cta-btn"
                >
                  <Phone size={17} aria-hidden="true" />
                  <span>Direct Call</span>
                </a>
              </div>

              <div className="calc-guarantees">
                <div className="guarantee-item">
                  <CheckCircle2 size={14} className="text-cyan" />
                  <span>100% Free Consultation &bull; Zero Obligation</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle2 size={14} className="text-cyan" />
                  <span>Budget-Friendly Pricing for Small Businesses</span>
                </div>
                <div className="guarantee-item">
                  <CheckCircle2 size={14} className="text-cyan" />
                  <span>Personal Guidance in Tamil &amp; English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
