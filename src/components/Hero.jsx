import {
  ArrowRight,
<<<<<<< HEAD
  Calculator,
  CheckCircle2,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Receipt,
  ShoppingCart,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import mgsLogo from '../assets/images/mgs-logo.png';

export default function Hero() {
=======
  Code2,
  Database,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Server,
  Sparkles,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onDownloadResume, onOpenResume }) {
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
  const { socials } = PERSONAL_INFO;

  return (
    <section id="home" className="hero section" aria-labelledby="hero-heading">
<<<<<<< HEAD
      {/* Background Ambient Glows */}
      <div className="hero__glow hero__glow--cyan" aria-hidden="true" />
      <div className="hero__glow hero__glow--purple" aria-hidden="true" />
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />

      <div className="container hero__grid">
        {/* Left Content */}
        <div className="hero__content">
          {/* Logo & Freelance Status Pill */}
          <div className="hero__brand-header">
            <div className="hero__logo-pill">
              <img
                src={mgsLogo}
                alt="MGS Logo"
                className="hero__brand-logo"
                width="42"
                height="42"
              />
              <span className="hero__brand-name">MGS FREELANCE</span>
            </div>
            <span className="hero__availability-pill">
              <span className="status-dot status-dot--pulse" aria-hidden="true" />
              <span className="hero__availability-text">OPEN FOR CLIENTS &bull; WORLDWIDE</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 id="hero-heading" className="hero__title">
            Smart Websites &amp; Easy{' '}
            <span className="gradient-text gradient-text--name">Billing Software</span> Built For Your Business.
          </h1>

          {/* Tamil Friendly Tagline */}
          <div className="hero__tamil-highlight">
            <Sparkles size={16} className="text-cyan" aria-hidden="true" />
            <span>உங்கள் தொழிலுக்கான நவீன இணையதளங்கள் &amp; எளிய பில்லிங் சாப்ட்வேர்!</span>
          </div>

          {/* Description */}
          <p className="hero__description">{PERSONAL_INFO.heroIntro}</p>

          {/* Key Value Points for Clients */}
          <div className="hero__client-perks">
            <div className="perk-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>100% Mobile &amp; Computer Friendly</span>
            </div>
            <div className="perk-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>Free Training in Tamil &amp; English</span>
            </div>
            <div className="perk-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>Two-Wheeler Workshops &amp; Retail Ready</span>
            </div>
            <div className="perk-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>Fast 3 to 7 Days Delivery</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero__cta-group">
            <a href="#services" className="btn btn--primary">
              <span>What We Build</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            <a
              href={PERSONAL_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare size={17} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a href="#calculator" className="btn btn--secondary">
              <Calculator size={17} aria-hidden="true" />
              <span>Free Price Estimator</span>
            </a>
          </div>

          {/* Quick Direct Connect */}
          <div className="hero__socials" aria-label="Direct contact links">
            <span className="hero__socials-label">Direct Reach:</span>
            <a
              href={PERSONAL_INFO.phoneHref}
              className="social-pill"
              title="Call Sathish M"
            >
              <Phone size={15} />
              <span>Call Us</span>
            </a>

            <a
              href={socials.email.href}
              className="social-pill"
              title="Send an email"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>

=======
      <div className="hero__glow hero__glow--cyan" aria-hidden="true" />
      <div className="hero__glow hero__glow--purple" aria-hidden="true" />
      <div className="hero__grid-overlay" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__title">
            Hi, I&apos;m <span className="text-gradient">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="hero__role">
            <Sparkles size={18} className="hero__role-icon" aria-hidden="true" />
            <span>{PERSONAL_INFO.role} &amp; Full-Stack Builder</span>
          </p>

          <p className="hero__headline">{PERSONAL_INFO.tagline}</p>

          <p className="hero__description">{PERSONAL_INFO.heroIntro}</p>

          <div className="hero__cta-group">
            <a href="#projects" className="btn btn--primary">
              <span>View Projects</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="btn btn--secondary"
              title="Preview official resume with work experience"
            >
              <FileText size={17} aria-hidden="true" />
              <span>View Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeFile}
              download={PERSONAL_INFO.resumeDownloadName}
              onClick={onDownloadResume}
              className="btn btn--ghost"
              title="Download resume file"
            >
              <Download size={17} aria-hidden="true" />
              <span>Download</span>
            </a>

            <a href="#contact" className="btn btn--ghost">
              <Mail size={17} aria-hidden="true" />
              <span>Contact</span>
            </a>
          </div>

          <div className="hero__socials" aria-label="Social Links">
            <span className="hero__socials-label">Connect:</span>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
            <a
              href={socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
<<<<<<< HEAD
              title="View GitHub code"
            >
              <GitHubIcon size={15} />
=======
              aria-label="GitHub profile: sathishmgs"
              title="GitHub Profile (github.com/sathishmgs)"
            >
              <GitHubIcon size={17} />
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
              <span>GitHub</span>
            </a>

            <a
              href={socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
<<<<<<< HEAD
              title="View LinkedIn"
            >
              <LinkedInIcon size={15} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Business Profile Card */}
=======
              aria-label="LinkedIn profile: sathish-m2005"
              title="LinkedIn Profile (sathish-m2005)"
            >
              <LinkedInIcon size={17} />
              <span>LinkedIn</span>
            </a>

            <a
              href={socials.email.href}
              className="social-pill"
              aria-label="Send direct email"
              title="Send direct email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Developer Visual with Sathish M's Photo */}
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
        <div className="hero__visual">
          <div className="dev-card glass-card">
            <div className="dev-card__topbar">
              <div className="dev-card__dots" aria-hidden="true">
                <span className="dot dot--red" />
                <span className="dot dot--amber" />
                <span className="dot dot--green" />
              </div>
<<<<<<< HEAD
              <div className="dev-card__brand-header">
                <img src={mgsLogo} alt="MGS Logo" className="dev-card__mini-logo" width="24" height="24" />
                <span className="dev-card__filename">MGS Freelance</span>
              </div>
              <span className="dev-card__tag">VERIFIED</span>
=======
              <span className="dev-card__filename">Sathish M</span>
              <span className="dev-card__tag">PRO</span>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
            </div>

            <div className="dev-card__body">
              <div className="dev-card__profile-wrap">
                <div className="dev-card__avatar-ring">
                  <img
                    src={PERSONAL_INFO.profileImage}
<<<<<<< HEAD
                    alt="Sathish M — MGS Freelance"
                    className="dev-card__avatar"
                    width="120"
                    height="120"
                  />
                  <span className="avatar-status-badge" title="Active & Ready" />
                </div>
                <div className="dev-card__identity">
                  <span className="dev-card__name">MGS Freelance</span>
                  <span className="dev-card__founder">Developer: {PERSONAL_INFO.founder}</span>
=======
                    alt="Sathish M — Software Developer"
                    className="dev-card__avatar"
                    width="240"
                    height="240"
                  />
                  <span className="avatar-status-badge" title="Open to opportunities" />
                </div>
                <div className="dev-card__identity">
                  <span className="dev-card__name">{PERSONAL_INFO.name}</span>
                  <span className="dev-card__title">{PERSONAL_INFO.role}</span>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
                  <span className="dev-card__college">
                    <GraduationCap size={13} aria-hidden="true" />
                    Ayya Nadar Janaki Ammal College, Sivakasi (BCA)
                  </span>
                  <span className="dev-card__loc">
                    <MapPin size={13} aria-hidden="true" />
                    {PERSONAL_INFO.locationShort}
                  </span>
                </div>
              </div>

<<<<<<< HEAD
              {/* What We Specialize In */}
              <div className="dev-card__services-preview">
                <span className="dev-card__section-label">Core Solutions for Clients:</span>
                <div className="service-mini-tags">
                  <span className="mini-service-tag mini-service-tag--billing">
                    <Receipt size={13} />
                    <span>Retail POS Billing</span>
                  </span>
                  <span className="mini-service-tag mini-service-tag--workshop">
                    <Wrench size={13} />
                    <span>Two-Wheeler &amp; Workshop Billing</span>
                  </span>
                  <span className="mini-service-tag mini-service-tag--store">
                    <ShoppingCart size={13} />
                    <span>E-Commerce Stores</span>
                  </span>
                  <span className="mini-service-tag">
                    <Code2 size={13} />
                    <span>Business Websites</span>
                  </span>
                </div>
              </div>

              <div className="dev-card__footer-cta">
                <a
                  href={PERSONAL_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm dev-card__whatsapp-btn"
                >
                  <MessageSquare size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
=======
              <div className="dev-card__code" aria-label="Developer stack summary">
                <pre>
                  <code>
                    <span className="code-kw">const</span>{' '}
                    <span className="code-var">developer</span> = {'{\n'}
                    {'  '}name: <span className="code-str">&quot;Sathish M&quot;</span>,{'\n'}
                    {'  '}location: <span className="code-str">&quot;Rajapalayam, TN&quot;</span>,{'\n'}
                    {'  '}college: <span className="code-str">&quot;Ayya Nadar Janaki Ammal College, Sivakasi (BCA)&quot;</span>,{'\n'}
                    {'  '}frontend: [<span className="code-str">&quot;React JS&quot;</span>, <span className="code-str">&quot;JavaScript&quot;</span>],{'\n'}
                    {'  '}backend: [<span className="code-str">&quot;PHP&quot;</span>, <span className="code-str">&quot;Laravel&quot;</span>, <span className="code-str">&quot;Node.js&quot;</span>],{'\n'}
                    {'  '}database: [<span className="code-str">&quot;MySQL&quot;</span>, <span className="code-str">&quot;SQL&quot;</span>]{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>

              <div className="dev-card__stack-chips" aria-hidden="true">
                <span className="stack-chip">
                  <Code2 size={14} />
                  React UI
                </span>
                <span className="stack-chip">
                  <Server size={14} />
                  PHP / Laravel
                </span>
                <span className="stack-chip">
                  <Database size={14} />
                  MySQL / SQL
                </span>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
