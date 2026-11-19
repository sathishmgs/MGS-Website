import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import QuoteCalculator from './components/QuoteCalculator';
import WorkProcess from './components/WorkProcess';
import ClientReviews from './components/ClientReviews';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './responsive.css';

const TRACKED_SECTIONS = [
  'home',
  'services',
  'projects',
  'calculator',
  'process',
  'reviews',
  'about',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Active section observer for sticky navbar highlight
  useEffect(() => {
    const sectionElements = TRACKED_SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    if (sectionElements.length === 0) return undefined;

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0.01,
      }
    );

    sectionElements.forEach((el) => navObserver.observe(el));
    return () => navObserver.disconnect();
  }, []);

  // Scroll reveal observer for subtle entrance animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('reveal--visible'));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="app-shell">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sticky Header Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <QuoteCalculator />
        <WorkProcess />
        <ClientReviews />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
