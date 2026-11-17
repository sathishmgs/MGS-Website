import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
} from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section reveal" aria-labelledby="experience-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Career Timeline</span>
          <h2 id="experience-heading" className="section-title">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical background covering software development tasks, frontend and backend development, database operations, and application troubleshooting.
          </p>
        </div>

        {/* Modern Timeline Layout */}
        <div className="timeline-container">
          <div className="timeline-track" aria-hidden="true" />

          <div className="timeline-items">
            {EXPERIENCE_LIST.map((exp) => (
              <div
                key={exp.id}
                className={`timeline-entry ${exp.isCurrent ? 'timeline-entry--current' : ''}`}
              >
                {/* Timeline Node Marker */}
                <div className="timeline-marker" aria-hidden="true">
                  <div className="timeline-marker__dot">
                    {exp.isCurrent ? (
                      <span className="timeline-marker__pulse" />
                    ) : (
                      <Briefcase size={14} className="timeline-marker__icon" />
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <article className="timeline-card glass-card">
                  <div className="timeline-card__header">
                    <div className="timeline-card__title-row">
                      <div className="timeline-card__role-group">
                        <span className={`pill ${exp.isCurrent ? 'pill--current' : 'pill--secondary'}`}>
                          {exp.isCurrent && <Clock size={12} aria-hidden="true" />}
                          <span>{exp.badge}</span>
                        </span>
                        <h3 className="timeline-card__role">{exp.role}</h3>
                      </div>
                    </div>

                    <div className="timeline-card__meta">
                      <span className="timeline-meta-item timeline-meta-item--placeholder" title="Company Name (Editable in src/data/portfolioData.js)">
                        <Building2 size={14} aria-hidden="true" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="timeline-meta-item timeline-meta-item--placeholder" title="Duration (Editable in src/data/portfolioData.js)">
                        <Calendar size={14} aria-hidden="true" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="timeline-meta-item">
                        <MapPin size={14} aria-hidden="true" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className="timeline-card__desc">{exp.description}</p>

                  <div className="timeline-card__highlights">
                    <h4 className="timeline-card__highlights-title">Key Responsibilities &amp; Outcomes</h4>
                    <ul className="timeline-card__list">
                      {exp.highlights.map((point) => (
                        <li key={point} className="timeline-card__list-item">
                          <CheckCircle2 size={15} className="timeline-check-icon" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
