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
          </p>
        </div>

        <div className="education-layout">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
