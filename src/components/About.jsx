import { useState } from 'react';
import {
  ChevronDown,
  GraduationCap,
  HelpCircle,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { FAQS, PERSONAL_INFO } from '../data/portfolioData';
import mgsLogo from '../assets/images/mgs-logo.png';

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="about" className="section section--about reveal" aria-labelledby="about-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Behind MGS Freelance</span>
          <h2 id="about-heading" className="section-title">
            About <span className="text-gradient">MGS Freelance &amp; Sathish M</span>
          </h2>
          <p className="section-subtitle">
            A trusted digital development partner based in Rajapalayam, helping small businesses, automobile
            workshops, and retail stores embrace modern technology with ease.
          </p>
        </div>

        <div className="about__layout">
          {/* Left Column: MGS Story & Founder Info */}
          <div className="about__bio glass-card">
            <div className="about__company-banner">
              <img
                src={mgsLogo}
                alt="MGS Logo"
                className="about__company-logo"
                width="56"
                height="56"
              />
              <div className="about__company-info">
                <span className="about__company-title">MGS Freelance</span>
              </div>
            </div>

            <div className="about__badge-header">
              <span className="pill pill--brand">
                <UserCheck size={14} aria-hidden="true" />
                <span>Freelance Software Developer</span>
              </span>
              <span className="pill pill--status">
                <span className="status-dot status-dot--pulse" aria-hidden="true" />
                <span>Available for New Projects</span>
              </span>
            </div>

            <h3 className="about__headline">
              Bringing modern, easy-to-use software solutions to growing businesses.
            </h3>

            <p className="about__text">{PERSONAL_INFO.aboutIntro}</p>

            <div className="about__credentials-grid">
              <div className="credential-item">
                <GraduationCap size={18} className="text-cyan credential-icon" />
                <div>
                  <strong>BCA &bull; Ayya Nadar Janaki Ammal College, Sivakasi</strong>
                  <p>Ayya Nadar Janaki Ammal College (Autonomous, NAAC A+ Accredited)</p>
                </div>
              </div>

              <div className="credential-item">
                <MapPin size={16} className="text-cyan" />
                <div>
                  <strong>Local Presence &bull; Rajapalayam</strong>
                  <p>Serving workshops and shops across Virudhunagar, Sivakasi, Madurai &amp; Tamil Nadu</p>
                </div>
              </div>

              <div className="credential-item">
                <ShieldCheck size={16} className="text-cyan" />
                <div>
                  <strong>Dedicated Post-Launch Support</strong>
                  <p>We train you and assist your staff anytime you have questions</p>
                </div>
              </div>
            </div>

            <div className="about__cta-row">
              <a
                href={PERSONAL_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
              >
                <MessageSquare size={16} />
                <span>Connect on WhatsApp</span>
              </a>
              <a href={PERSONAL_INFO.phoneHref} className="btn btn--ghost btn--sm">
                <Phone size={15} />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="about__faq glass-card">
            <div className="faq-header">
              <HelpCircle size={20} className="text-gradient" />
              <h3>Frequently Asked Questions</h3>
            </div>

            <div className="faq-list">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-question-btn"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`faq-icon ${isOpen ? 'faq-icon--rotated' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
