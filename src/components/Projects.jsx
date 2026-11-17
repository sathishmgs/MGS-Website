import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Info,
  MessageSquare,
  Sparkles,
  X,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

const FILTERS = ['All Demos', 'Billing & Fleet', 'Websites & Stores', 'Interactive Apps'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Demos');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All Demos') return true;
    if (activeFilter === 'Billing & Fleet') {
      return (
        project.id.includes('billing') ||
        project.id.includes('logistics')
      );
    }
    if (activeFilter === 'Websites & Stores') {
      return project.id.includes('flower') || project.id.includes('aquarium');
    }
    if (activeFilter === 'Interactive Apps') {
      return project.id.includes('cinema') || project.id.includes('logistics');
    }
    return true;
  });

  return (
    <section id="projects" className="section section--projects reveal" aria-labelledby="projects-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Proof of Work</span>
          <h2 id="projects-heading" className="section-title">
            Live Projects &amp; <span className="text-gradient">Working Demos</span>
          </h2>
          <p className="section-subtitle">
            See real examples of software and websites we build. From POS billing systems and logistics
            fleet tracking to live e-commerce stores and interactive booking portals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project filter categories">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`filter-tab ${activeFilter === filter ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              <span>{filter}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const hasLiveSite =
              project.liveUrl &&
              !project.liveUrl.includes('github.com') &&
              project.liveUrl.startsWith('http');

            return (
              <article key={project.id} className="project-card glass-card">
                <div
                  className="project-card__media"
                  onClick={() => setSelectedProject(project)}
                  style={{ cursor: 'pointer' }}
                  title="Click to view full project specifications"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-card__img"
                    loading="lazy"
                    width="640"
                    height="380"
                  />
                  <span className="project-card__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div className="project-card__overlay-hint">
                    <Info size={16} />
                    <span>View Specifications</span>
                  </div>
                </div>

                <div className="project-card__body">
                  <div className="project-card__header-meta">
                    <span className="project-card__category">{project.category}</span>
                    <span className="project-badge">{project.demoType}</span>
                  </div>

                  <h3 className="project-card__title">{project.title}</h3>

                  <p className="project-card__desc">{project.description}</p>

                  {project.clientBenefit && (
                    <div className="project-benefit-box">
                      <Sparkles size={15} className="text-cyan" aria-hidden="true" />
                      <span>{project.clientBenefit}</span>
                    </div>
                  )}

                  <ul className="project-card__highlights" aria-label={`${project.title} features`}>
                    {project.highlights.slice(0, 3).map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={15} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-card__tech" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__actions">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="btn btn--primary btn--sm"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Info size={15} aria-hidden="true" />
                      <span>Full Details</span>
                    </button>

                    {hasLiveSite ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--secondary btn--sm"
                        title={`Open live site for ${project.title}`}
                      >
                        <ExternalLink size={15} aria-hidden="true" />
                        <span>Open Live Site</span>
                      </a>
                    ) : (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--secondary btn--sm"
                        title={`View ${project.title} repository`}
                      >
                        <FolderGit2 size={15} aria-hidden="true" />
                        <span>View Source</span>
                      </a>
                    )}

                    <a
                      href={`https://wa.me/917708691940?text=Hi%20Sathish%2C%20I%20saw%20your%20${encodeURIComponent(
                        project.title
                      )}%20demo%20and%20want%20something%20similar%20for%20my%20business.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost btn--sm"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare size={15} aria-hidden="true" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Accessible Project Details Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-card glass-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-card__header">
              <div>
                <span className="project-card__category">{selectedProject.category}</span>
                <h3 id="modal-project-title" className="modal-card__title">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                className="modal-card__close"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-card__media">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} preview`}
                width="640"
                height="380"
              />
            </div>

            <p className="modal-card__desc">{selectedProject.description}</p>

            {selectedProject.clientBenefit && (
              <div className="project-benefit-box" style={{ marginBottom: '16px' }}>
                <Sparkles size={16} className="text-cyan" />
                <strong>Business Value: {selectedProject.clientBenefit}</strong>
              </div>
            )}

            <div className="modal-card__section">
              <h4>Key Capabilities &amp; Features</h4>
              <ul className="project-card__highlights">
                {selectedProject.highlights.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-card__section">
              <h4>Architecture &amp; Technologies</h4>
              <div className="project-card__tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-card__actions">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  <span>Launch Demo / Site</span>
                </a>
              )}
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--sm"
              >
                <FolderGit2 size={16} aria-hidden="true" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={`https://wa.me/917708691940?text=Hi%20Sathish%2C%20I%20am%20interested%20in%20a%20solution%20like%20${encodeURIComponent(
                  selectedProject.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--sm"
              >
                <MessageSquare size={16} aria-hidden="true" />
                <span>Order Similar Software</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="btn btn--ghost btn--sm"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
