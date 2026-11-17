import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { ArrowRight, Menu, MessageSquare, Phone, Sparkles, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import mgsLogo from '../assets/images/mgs-logo.png';

export default function Navbar({ activeSection }) {
=======
import { FileText, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export default function Navbar({ activeSection, onOpenResume }) {
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
<<<<<<< HEAD
      setScrolled(window.scrollY > 25);
=======
      setScrolled(window.scrollY > 20);
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

<<<<<<< HEAD
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

=======
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
<<<<<<< HEAD
        {/* Brand Logo */}
        <a href="#home" className="navbar__logo" aria-label="MGS Freelance Home" onClick={handleLinkClick}>
          <img
            src={mgsLogo}
            alt="MGS Logo"
            className="navbar__logo-img"
            width="42"
            height="42"
          />
          <div className="navbar__logo-text-group">
            <span className="navbar__logo-brand">
              MGS <span className="navbar__logo-accent">Freelance</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar__nav" aria-label="Main Navigation">
=======
        <a href="#home" className="navbar__logo" aria-label="Sathish M Home">
          <span className="navbar__logo-text">
            Sathish <span className="navbar__logo-accent">M</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Primary Navigation">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          <ul className="navbar__list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${
                    activeSection === link.id ? 'navbar__link--active' : ''
                  }`}
                >
                  {link.label}
<<<<<<< HEAD
                  {activeSection === link.id && (
                    <span className="navbar__active-indicator" aria-hidden="true" />
                  )}
=======
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
                </a>
              </li>
            ))}
          </ul>
        </nav>

<<<<<<< HEAD
        {/* Action Buttons */}
        <div className="navbar__actions">
          <a
            href={PERSONAL_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--sm navbar__quote-btn"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare size={15} aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#calculator"
            className="btn btn--primary btn--sm navbar__hire-btn"
            aria-label="Calculate project cost"
          >
            <Sparkles size={14} className="hire-sparkle" aria-hidden="true" />
            <span>Free Quote</span>
          </a>

          <button
            type="button"
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
=======
        <div className="navbar__actions">
          <button
            type="button"
            onClick={onOpenResume}
            className="btn btn--primary btn--sm navbar__resume-btn"
            title="View full resume with work experience"
          >
            <FileText size={16} aria-hidden="true" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            className="navbar__toggle"
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar__mobile-header">
          <div className="navbar__mobile-brand-group">
            <img
              src={mgsLogo}
              alt="MGS Logo"
              className="navbar__mobile-logo-img"
              width="40"
              height="40"
            />
            <div className="navbar__logo-text-group">
              <span className="navbar__logo-brand">MGS Freelance</span>
            </div>
          </div>
          <button
            type="button"
            className="modal-card__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="navbar__mobile-nav" aria-label="Mobile Navigation">
=======
      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
      >
        <nav aria-label="Mobile Navigation">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          <ul className="navbar__mobile-list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
<<<<<<< HEAD
                  className={`navbar__mobile-link ${
                    activeSection === link.id ? 'navbar__mobile-link--active' : ''
                  }`}
                  onClick={handleLinkClick}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={14} className="navbar__mobile-arrow" aria-hidden="true" />
=======
                  onClick={handleLinkClick}
                  className={`navbar__mobile-link ${
                    activeSection === link.id ? 'navbar__mobile-link--active' : ''
                  }`}
                >
                  {link.label}
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
                </a>
              </li>
            ))}
          </ul>
<<<<<<< HEAD

          <div className="navbar__mobile-actions">
            <a
              href={PERSONAL_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp navbar__mobile-whatsapp"
              onClick={handleLinkClick}
            >
              <MessageSquare size={17} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#calculator"
              className="btn btn--primary navbar__mobile-quote"
              onClick={handleLinkClick}
            >
              <Sparkles size={16} aria-hidden="true" />
              <span>Get Free Quote</span>
            </a>

            <a
              href={PERSONAL_INFO.phoneHref}
              className="btn btn--ghost navbar__mobile-call"
              onClick={handleLinkClick}
            >
              <Phone size={16} aria-hidden="true" />
              <span>Direct Phone Call</span>
            </a>
          </div>
=======
          <button
            type="button"
            onClick={() => {
              onOpenResume();
              handleLinkClick();
            }}
            className="btn btn--primary navbar__mobile-resume"
          >
            <FileText size={17} aria-hidden="true" />
            <span>View Full Resume</span>
          </button>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
        </nav>
      </div>
    </header>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
