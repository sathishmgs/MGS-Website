<<<<<<< HEAD
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import mgsLogo from '../assets/images/mgs-logo.png';
=======
import { ArrowUp, GraduationCap, Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { socials } = PERSONAL_INFO;

  return (
    <footer className="footer">
      <div className="container footer__inner">
<<<<<<< HEAD
        {/* Brand Information */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo" aria-label="MGS Freelance">
            <img
              src={mgsLogo}
              alt="MGS Logo"
              className="footer__logo-img"
              width="44"
              height="44"
            />
            <div className="footer__logo-text">
              <span className="footer__logo-title">
                MGS <span className="navbar__logo-accent">Freelance</span>
              </span>
            </div>
          </a>

          <p className="footer__tagline">
            Smart Websites &amp; Custom Workshop / POS Billing Software Built for Growing Businesses.
          </p>

          <p className="footer__founder">
            Developed by <strong>{PERSONAL_INFO.founder}</strong>
          </p>

          <p className="footer__location">
            <MapPin size={14} className="footer__location-icon" aria-hidden="true" />
            <span>{PERSONAL_INFO.locationFull}</span>
          </p>
        </div>

        {/* Quick Links Navigation */}
        <div className="footer__nav-group">
          <h4 className="footer__nav-heading">Quick Links</h4>
          <nav className="footer__nav" aria-label="Footer Navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social & Contact Actions */}
        <div className="footer__socials-group">
          <h4 className="footer__nav-heading">Direct Connect</h4>
          <div className="footer__contact-quick">
            <a
              href={PERSONAL_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <MessageSquare size={15} className="text-cyan" />
              <span>Chat on WhatsApp</span>
            </a>
            <a href={PERSONAL_INFO.phoneHref} className="footer-contact-item">
              <Phone size={15} className="text-cyan" />
              <span>Direct Phone Call</span>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="footer-contact-item">
              <Mail size={15} className="text-cyan" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          <div className="footer__social-icons">
            <a
              href={socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub profile: sathishmgs"
              title="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>

            <a
              href={socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn profile: sathish-m2005"
              title="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {CURRENT_YEAR} <strong>MGS Freelance</strong>. Built with React &amp; Modern Web Tech. All rights reserved.
          </p>
        </div>
=======
        <div className="footer__brand">
          <a href="#home" className="navbar__logo" aria-label="Sathish M Back to Top">
            <span className="navbar__logo-text">
              Sathish <span className="navbar__logo-accent">M</span>
            </span>
          </a>
          <p className="footer__role">{PERSONAL_INFO.role}</p>
          <p className="footer__college">
            <GraduationCap size={14} aria-hidden="true" />
            <span>Ayya Nadar Janaki Ammal College, Sivakasi</span>
          </p>
          <p className="footer__location">
            <MapPin size={14} aria-hidden="true" />
            <span>{PERSONAL_INFO.locationShort}</span>
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer Navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a
            href={socials.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub Profile: sathishmgs"
            title="GitHub: sathishmgs"
          >
            <GitHubIcon size={18} />
          </a>

          <a
            href={socials.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn Profile: sathish-m2005"
            title="LinkedIn: sathish-m2005"
          >
            <LinkedInIcon size={18} />
          </a>

          <a
            href={socials.email.href}
            className="icon-btn"
            aria-label="Send direct email"
            title={`Email: ${socials.email.value}`}
          >
            <Mail size={18} />
          </a>

          <a href="#home" className="icon-btn icon-btn--top" aria-label="Scroll to top of page" title="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">
          &copy; {CURRENT_YEAR} {PERSONAL_INFO.brand}. All rights reserved.
        </p>

>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
      </div>
    </footer>
  );
}
