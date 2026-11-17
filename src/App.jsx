<<<<<<< HEAD
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
=======
import { useCallback, useEffect, useState } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import './App.css';

const TRACKED_SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const showToast = useCallback((type, message) => {
    setToast({ type, message, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(timer);
  }, [toast]);

  // Active nav link observer
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
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
<<<<<<< HEAD
        rootMargin: '-30% 0px -55% 0px',
=======
        rootMargin: '-35% 0px -55% 0px',
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
        threshold: 0.01,
      }
    );

    sectionElements.forEach((el) => navObserver.observe(el));
    return () => navObserver.disconnect();
  }, []);

<<<<<<< HEAD
  // Scroll reveal observer for subtle entrance animations
=======
  // Section scroll reveal observer
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
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

<<<<<<< HEAD
  return (
    <div className="app-shell">
      {/* Accessibility Skip Link */}
=======
  const handleDownloadResume = () => {
    showToast(
      'success',
      'Resume file ready! You can also click "View Resume" to view, inspect, or print the exact resume.'
    );
  };

  const handleSocialPlaceholder = (platform, placeholderLabel) => {
    showToast('info', `${platform}: ${placeholderLabel}`);
  };

  return (
    <div className="app-shell">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

<<<<<<< HEAD
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
=======
      <Navbar
        activeSection={activeSection}
        onDownloadResume={handleDownloadResume}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main id="main-content">
        <Hero
          onDownloadResume={handleDownloadResume}
          onOpenResume={() => setResumeModalOpen(true)}
          onSocialPlaceholder={handleSocialPlaceholder}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      <Footer onSocialPlaceholder={handleSocialPlaceholder} />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {toast && (
        <div
          className={`toast toast--${toast.type}`}
          role="status"
          aria-live="polite"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 size={18} aria-hidden="true" />
          ) : (
            <Info size={18} aria-hidden="true" />
          )}
          <span>{toast.message}</span>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="toast__close"
            aria-label="Dismiss notification"
          >
            <X size={15} />
          </button>
        </div>
      )}
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
    </div>
  );
}
