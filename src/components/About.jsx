<<<<<<< HEAD
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

=======
import {
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Layout,
  MapPin,
  Server,
  Sparkles,
} from 'lucide-react';
import { ABOUT_HIGHLIGHTS, PERSONAL_INFO, STATS } from '../data/portfolioData';

const ICON_MAP = {
  Code2,
  Layout,
  Server,
  Database,
};

export default function About() {
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
  return (
    <section id="about" className="section section--about reveal" aria-labelledby="about-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
<<<<<<< HEAD
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
=======
        <div className="section-header">
          <span className="section-eyebrow">About Me</span>
          <h2 id="about-heading" className="section-title">
            Crafting Reliable <span className="text-gradient">Full-Stack</span> Web Solutions
          </h2>
          <p className="section-subtitle">
            BCA at Ayya Nadar Janaki Ammal College, Sivakasi, bridging interactive React
            frontends with secure PHP / Laravel backend architectures.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="about__stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="about__stat-card glass-card">
              <span className="about__stat-value text-gradient">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about__layout">
          <div className="about__bio glass-card">
            <div className="about__meta">
              <span className="about__badge">
                <MapPin size={15} aria-hidden="true" />
                {PERSONAL_INFO.locationFull}
              </span>
              <span className="about__badge about__badge--college">
                <GraduationCap size={15} aria-hidden="true" />
                <span>Ayya Nadar Janaki Ammal College, Sivakasi (BCA)</span>
              </span>
              <span className="about__badge about__badge--role">
                {PERSONAL_INFO.role}
              </span>
            </div>

            <p className="about__text">{PERSONAL_INFO.aboutIntro}</p>

            <div className="about__focus-list" aria-label="Core Focus Areas">
              <div className="about__focus-item">
                <span className="about__focus-label">College</span>
                <span className="about__focus-value">
                  <a
                    href={PERSONAL_INFO.collegeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link"
                    title="Visit Ayya Nadar Janaki Ammal College website"
                  >
                    <span>{PERSONAL_INFO.college}</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </span>
              </div>
              <div className="about__focus-item">
                <span className="about__focus-label">Degree</span>
                <span className="about__focus-value">{PERSONAL_INFO.degree}</span>
              </div>
              <div className="about__focus-item">
                <span className="about__focus-label">Frontend</span>
                <span className="about__focus-value">React JS, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div className="about__focus-item">
                <span className="about__focus-label">Backend</span>
                <span className="about__focus-value">PHP, Laravel, Node.js, REST APIs</span>
              </div>
              <div className="about__focus-item">
                <span className="about__focus-label">Database</span>
                <span className="about__focus-value">MySQL, Relational Schema Design, SQL</span>
              </div>
            </div>

            <div className="about__bio-cta">
              <a href="#education" className="btn btn--secondary btn--sm">
                <GraduationCap size={15} />
                <span>View Academic Profile</span>
              </a>
              <a href="#projects" className="btn btn--ghost btn--sm">
                <Sparkles size={15} />
                <span>Explore Projects</span>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
              </a>
            </div>
          </div>

<<<<<<< HEAD
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
=======
          <div className="about__highlights">
            {ABOUT_HIGHLIGHTS.map((item) => {
              const IconComponent = ICON_MAP[item.icon] || Code2;
              return (
                <article key={item.id} className="highlight-card glass-card">
                  <div
                    className="highlight-card__icon"
                    style={{ color: item.accentColor }}
                    aria-hidden="true"
                  >
                    <IconComponent size={22} />
                  </div>
                  <h3 className="highlight-card__title">{item.title}</h3>
                  <p className="highlight-card__desc">{item.description}</p>
                </article>
              );
            })}
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          </div>
        </div>
      </div>
    </section>
  );
}
