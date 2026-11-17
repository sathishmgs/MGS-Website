import { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  MessageSquare,
  Receipt,
  ShoppingCart,
  Sparkles,
  Truck,
  User,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';

const SERVICE_ICONS = {
  Receipt,
  Wrench,
  Briefcase,
  ShoppingCart,
  Truck,
  UtensilsCrossed,
  Calendar,
  User,
  Sparkles,
  Code2,
};

const CATEGORIES = ['All Solutions', 'Billing & Workshops', 'Websites & Stores', 'Specialized Systems'];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All Solutions');

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (activeCategory === 'All Solutions') return true;
    if (activeCategory === 'Billing & Workshops') {
      return (
        service.id.includes('billing') ||
        service.id.includes('workshop') ||
        service.id.includes('restaurant')
      );
    }
    if (activeCategory === 'Websites & Stores') {
      return (
        service.id.includes('business') ||
        service.id.includes('ecommerce') ||
        service.id.includes('portfolio') ||
        service.id.includes('redesign')
      );
    }
    if (activeCategory === 'Specialized Systems') {
      return service.id.includes('logistics') || service.id.includes('booking');
    }
    return true;
  });

  return (
    <section id="services" className="section section--services reveal" aria-labelledby="services-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Solutions We Deliver</span>
          <h2 id="services-heading" className="section-title">
            What Kind of Website or Software <span className="text-gradient">Do You Need?</span>
          </h2>
          <p className="section-subtitle">
            From two-wheeler workshop management and retail POS billing to e-commerce stores and custom business
            websites, we build simple, powerful, and affordable digital solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="services-filter-tabs" role="tablist" aria-label="Filter service types">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`filter-tab ${activeCategory === category ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon] || Code2;
            const whatsappUrl = `https://wa.me/917708691940?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <div key={service.id} className="service-card glass-card">
                <div className="service-card__top">
                  <div className="service-card__icon-box" aria-hidden="true">
                    <Icon size={24} className="service-card__icon" />
                  </div>
                  <div className="service-card__meta-right">
                    <span className="service-badge">{service.badge}</span>
                    <span className="service-card__num" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="service-card__titles">
                  <h3 className="service-card__title">{service.title}</h3>
                  {service.tamilTitle && (
                    <span className="service-card__tamil-title">{service.tamilTitle}</span>
                  )}
                </div>

                <p className="service-card__desc">{service.description}</p>

                <div className="service-card__target">
                  <span className="target-label">Best for:</span>
                  <span className="target-value">{service.targetClients}</span>
                </div>

                <div className="service-card__features">
                  <span className="features-heading">Key Features:</span>
                  <ul className="service-features-list">
                    {service.keyFeatures.map((feat) => (
                      <li key={feat}>
                        <CheckCircle2 size={14} className="text-cyan" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card__footer">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm service-action-btn"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <MessageSquare size={15} aria-hidden="true" />
                    <span>WhatsApp Enquiry</span>
                  </a>

                  <a
                    href="#calculator"
                    className="btn btn--ghost btn--sm service-calc-btn"
                    title="Calculate cost for this project"
                  >
                    <span>Cost Estimate</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="services-banner glass-card">
          <div className="services-banner__content">
            <h3 className="services-banner__title">
              Don&apos;t see exactly what you need? We build custom solutions too!
            </h3>
            <p className="services-banner__desc">
              Every business is unique. Tell us your requirements or daily challenges, and we will build a
              software or website tailored specifically for your workflow.
            </p>
          </div>
          <div className="services-banner__actions">
            <a
              href="https://wa.me/917708691940?text=Hi%20Sathish%2C%20I%20have%20a%20custom%20software%2Fwebsite%20requirement.%20Let%27s%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
            >
              <MessageSquare size={18} aria-hidden="true" />
              <span>Discuss Custom Requirement</span>
            </a>
            <a href="tel:+917708691940" className="btn btn--secondary btn--large">
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
