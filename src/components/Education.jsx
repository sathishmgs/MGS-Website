<<<<<<< HEAD
import {
  Award,
  BarChart3,
  CheckCircle2,
  FileCode2,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  School,
} from 'lucide-react';
import { CERTIFICATIONS_LIST, EDUCATION_DATA } from '../data/portfolioData';

const CERT_ICONS = {
  Layers,
  FileCode2,
  BarChart3,
  Globe,
};

export default function Education() {
  return (
    <section id="education" className="section reveal" aria-labelledby="education-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Academic &amp; Credentials</span>
          <h2 id="education-heading" className="section-title">
            Education &amp; <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal computer applications degree and verified skill certifications in web technologies and programming principles.
=======
import { Award, Calendar, ExternalLink, GraduationCap, School, Trophy } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION_TIMELINE } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section section--education reveal" aria-labelledby="education-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Academic &amp; Qualifications</span>
          <h2 id="education-heading" className="section-title">
            Education &amp; <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Formal computer applications degree from Ayya Nadar Janaki Ammal College, Sivakasi, alongside practical web development certifications.
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          </p>
        </div>

        <div className="education-layout">
<<<<<<< HEAD
          {/* Left Column: Formal Education */}
          <div className="education-column">
            <div className="column-title-wrap">
              <GraduationCap size={22} className="column-title-icon" aria-hidden="true" />
              <h3 className="column-title">Formal Education</h3>
            </div>

            <article className="education-card glass-card">
              <div className="education-card__top">
                <span className="pill pill--current">
                  <CheckCircle2 size={13} aria-hidden="true" />
                  <span>{EDUCATION_DATA.status}</span>
                </span>
                <span className="education-card__short-tag">{EDUCATION_DATA.degreeShort}</span>
              </div>

              <h4 className="education-card__degree">{EDUCATION_DATA.degree}</h4>

              <div className="education-card__meta">
                <div className="education-card__meta-item placeholder-chip" title="College Name (Editable in src/data/portfolioData.js)">
                  <School size={15} aria-hidden="true" />
                  <span>{EDUCATION_DATA.college}</span>
                </div>
                <div className="education-card__meta-item">
                  <MapPin size={15} aria-hidden="true" />
                  <span>{EDUCATION_DATA.location}</span>
                </div>
              </div>

              <p className="education-card__details">{EDUCATION_DATA.details}</p>

              <div className="education-card__footer">
                <span className="education-card__degree-badge">Degree: {EDUCATION_DATA.degreeShort}</span>
                <span className="education-card__status-badge">Status: {EDUCATION_DATA.status}</span>
              </div>
            </article>
          </div>

          {/* Right Column: Professional Certifications */}
          <div className="education-column">
            <div className="column-title-wrap">
              <Award size={22} className="column-title-icon" aria-hidden="true" />
              <h3 className="column-title">Certifications</h3>
            </div>

            <div className="certs-grid">
              {CERTIFICATIONS_LIST.map((cert) => {
                const Icon = CERT_ICONS[cert.icon] || Award;
                return (
                  <article key={cert.id} className="cert-card glass-card">
                    <div className="cert-card__header">
                      <div className="cert-card__icon-box" aria-hidden="true">
                        <Icon size={20} className="cert-card__icon" />
                      </div>
                      <span className="cert-card__badge-tag">{cert.category}</span>
                    </div>

                    <h4 className="cert-card__title">{cert.title}</h4>
                    <p className="cert-card__desc">{cert.description}</p>

                    <div className="cert-card__issuer-row">
                      <span className="cert-card__issuer placeholder-chip" title="Issuing Organization (Editable in src/data/portfolioData.js)">
                        {cert.issuer}
                      </span>
                      <span className="cert-card__status">
                        <CheckCircle2 size={13} aria-hidden="true" />
                        {cert.status}
                      </span>
                    </div>
                  </article>
                );
              })}
=======
          {/* Education Timeline */}
          <div className="education-column">
            <h3 className="subsection-title">
              <GraduationCap size={20} aria-hidden="true" />
              <span>Academic Background</span>
            </h3>

            <div className="timeline">
              {EDUCATION_TIMELINE.map((edu) => (
                <article key={edu.id} className={`timeline-item glass-card ${edu.isCollege ? 'timeline-item--featured' : ''}`}>
                  <span className="timeline-item__node" aria-hidden="true" />

                  <div className="timeline-item__top">
                    <div className="timeline-item__period">
                      <Calendar size={14} aria-hidden="true" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.isCollege && (
                      <span className="timeline-item__featured-badge">Active Degree</span>
                    )}
                  </div>

                  <h4 className="timeline-item__title">{edu.degree}</h4>

                  <p className="timeline-item__institution">
                    <School size={15} aria-hidden="true" />
                    <span>{edu.institution}</span>
                  </p>

                  <p className="timeline-item__details">{edu.details}</p>

                  {edu.websiteUrl && (
                    <div className="timeline-item__action">
                      <a
                        href={edu.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--secondary btn--sm"
                        title="Open Ayya Nadar Janaki Ammal College official website"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>Visit Ayya Nadar Janaki Ammal College Website</span>
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Certification Cards */}
          <div className="education-column">
            <h3 className="subsection-title">
              <Award size={20} aria-hidden="true" />
              <span>Certifications &amp; Training</span>
            </h3>

            <div className="cert-grid">
              {CERTIFICATIONS.map((cert) => (
                <article key={cert.id} className="cert-card glass-card">
                  <div className="cert-card__icon" aria-hidden="true">
                    <Award size={22} />
                  </div>
                  <div className="cert-card__content">
                    <div className="cert-card__header-row">
                      <span className="cert-card__date">{cert.date}</span>
                      <span className="cert-card__verified-badge">Verified</span>
                    </div>
                    <h4 className="cert-card__title">{cert.title}</h4>
                    <p className="cert-card__issuer">{cert.issuer}</p>
                    <p className="cert-card__note">{cert.credentialNote}</p>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-card__link"
                        title="View credential on LinkedIn"
                      >
                        <span>View on LinkedIn</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              ))}

              <div className="college-card-highlight glass-card">
                <div className="college-card-highlight__header">
                  <GraduationCap size={22} className="text-gradient" />
                  <h4>Ayya Nadar Janaki Ammal College</h4>
                </div>
                <p className="college-card-highlight__desc">
                  An Autonomous Institution re-accredited with &apos;A+&apos; Grade by NAAC, located in Sivakasi, Tamil Nadu. Known for academic excellence and top-tier computer application labs.
                </p>
                <div className="college-card-highlight__tags">
                  <span className="mini-tag">Sivakasi, Virudhunagar</span>
                  <span className="mini-tag">NAAC A+</span>
                  <span className="mini-tag">College of Excellence</span>
                </div>
                <a
                  href="https://anjac.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm college-link-btn"
                >
                  <ExternalLink size={14} />
                  <span>anjac.edu.in (Official Portal)</span>
                </a>
              </div>

              {/* Honors & Achievements from Resume */}
              <div className="achievements-card glass-card">
                <div className="achievements-card__header">
                  <Trophy size={20} className="text-gradient" />
                  <h4 className="achievements-card__title">Honors &amp; Achievements</h4>
                </div>
                <ul className="achievements-list">
                  {ACHIEVEMENTS.map((item) => (
                    <li key={item.id} className="achievement-item">
                      <div className="achievement-item__bullet" />
                      <div>
                        <strong className="achievement-item__title">{item.title}</strong>
                        <span className="achievement-item__inst"> &mdash; {item.institution}</span>
                        <p className="achievement-item__desc">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
