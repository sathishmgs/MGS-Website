<<<<<<< HEAD
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
} from 'lucide-react';
=======
import { Briefcase, Calendar, CheckCircle2, Building2, MapPin } from 'lucide-react';
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
import { EXPERIENCE_LIST } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section reveal" aria-labelledby="experience-heading">
      <div className="container">
<<<<<<< HEAD
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
=======
        <div className="section-header">
          <span className="section-eyebrow">Career Journey</span>
          <h2 id="experience-heading" className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on training and practical application development across frontend interfaces,
            backend APIs, and relational databases.
          </p>
        </div>

        <div className="experience-list">
          {EXPERIENCE_LIST.map((item) => (
            <article key={item.id} className="experience-card glass-card">
              <div className="experience-card__header">
                <div className="experience-card__role-wrap">
                  <div className="experience-card__icon" aria-hidden="true">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 className="experience-card__role">{item.role}</h3>
                    <div className="experience-card__meta">
                      <span className="experience-card__meta-item placeholder-chip">
                        <Building2 size={14} aria-hidden="true" />
                        <span>{item.company}</span>
                      </span>
                      <span className="experience-card__meta-item placeholder-chip">
                        <Calendar size={14} aria-hidden="true" />
                        <span>{item.duration}</span>
                      </span>
                      <span className="experience-card__meta-item">
                        <MapPin size={14} aria-hidden="true" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-card__body">
                <h4 className="experience-card__subheading">Key Responsibilities &amp; Focus Areas</h4>
                <ul className="experience-card__tasks">
                  {item.responsibilities.map((task) => (
                    <li key={task} className="experience-card__task">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
