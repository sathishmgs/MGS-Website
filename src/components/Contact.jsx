import {
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section section--contact reveal" aria-labelledby="contact-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 40px auto' }}>
          <span className="section-eyebrow">Get in Touch</span>
          <h2 id="contact-heading" className="section-title">
            Let&apos;s Build Your <span className="text-gradient">Website or Software</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need a price quote, or want to discuss your business requirements?
            Reach out directly via WhatsApp, Phone Call, or Email.
          </p>
        </div>

        <div className="contact-direct-layout">
          {/* Direct Collaboration Hub Card */}
          <div className="contact-hub-card glass-card">
            <div className="contact-hub-card__top">
              <div className="availability-pill">
                <span className="status-dot status-dot--pulse" aria-hidden="true" />
                <span>Ready for New Client Projects</span>
              </div>
              <span className="role-tag">Tamil Nadu &bull; Online Delivery</span>
            </div>

            <h3 className="contact-hub-card__title">
              Ready to take your business to the next level?
            </h3>

            <p className="contact-hub-card__text">
              Whether you need a billing software for your shop or workshop, an online store to sell products, or a
              stunning website for your business, we are here to help. Get in touch today for an instant free
              quote and friendly consultation.
            </p>

            <div className="contact-hub-card__actions">
              <a
                href={PERSONAL_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--large contact-cta-btn"
              >
                <MessageSquare size={18} aria-hidden="true" />
                <span>Chat on WhatsApp (+91 7708691940)</span>
              </a>

              <a
                href={PERSONAL_INFO.phoneHref}
                className="btn btn--primary btn--large contact-cta-btn"
              >
                <Phone size={18} aria-hidden="true" />
                <span>Call Sathish Directly (+91 7708691940)</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20for%20MGS%20Freelance`}
                className="btn btn--secondary btn--large contact-cta-btn"
              >
                <Mail size={18} aria-hidden="true" />
                <span>Send Email Inquiry ({PERSONAL_INFO.email})</span>
              </a>

              <a
                href="#calculator"
                className="btn btn--ghost btn--large contact-cta-btn"
              >
                <Sparkles size={18} aria-hidden="true" />
                <span>Configure Project in Cost Estimator</span>
              </a>
            </div>

            <div className="contact-hub-card__footer">
              <div className="footer-metric">
                <Clock size={16} aria-hidden="true" />
                <span>Fast response within 1 hour on WhatsApp</span>
              </div>
              <div className="footer-metric">
                <UserCheck size={16} aria-hidden="true" />
                <span>Direct communication &bull; No middlemen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
