import { useEffect, useState } from 'react';
import {
<<<<<<< HEAD
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
=======
  Briefcase,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Info,
  Layers,
  X,
} from 'lucide-react';
import { ACADEMIC_PROJECTS, WORK_EXPERIENCE_PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'academic' | 'work-experience'
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09

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

<<<<<<< HEAD
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
=======
  const showAcademic = activeTab === 'all' || activeTab === 'academic';
  const showWorkExp = activeTab === 'all' || activeTab === 'work-experience';

  const renderProjectCard = (project, index, badgeType) => (
    <article key={project.id} className="project-card glass-card">
      <div
        className="project-card__media"
        onClick={() => setSelectedProject(project)}
        style={{ cursor: 'pointer' }}
        title="Click to view full project details"
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
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="project-card__overlay-hint">
          <Info size={16} />
          <span>Click to view details</span>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__header-meta">
          <span className="project-card__category">{project.category}</span>
          {badgeType === 'work' ? (
            <span className="project-badge project-badge--work">
              <Briefcase size={12} aria-hidden="true" />
              <span>Work Exp</span>
            </span>
          ) : (
            <span className="project-badge project-badge--academic">
              <GraduationCap size={12} aria-hidden="true" />
              <span>Academic</span>
            </span>
          )}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

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
            <span>Project Details</span>
          </button>

          <a
            href={project.repoUrl || 'https://github.com/sathishmgs'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            title={`View ${project.title} source code on GitHub`}
          >
            <FolderGit2 size={15} aria-hidden="true" />
            <span>Source Code</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--sm"
              title={`Open live demo / site for ${project.title}`}
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09

  return (
    <section id="projects" className="section section--projects reveal" aria-labelledby="projects-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
<<<<<<< HEAD
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
=======
        {/* Main Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Featured Work</span>
          <h2 id="projects-heading" className="section-title">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Split into Academic &amp; Personal Web Applications and Production Work Experience Systems
            (Hospital Management, Inventory &amp; Billing, Logistics).
          </p>
        </div>

        {/* Section Filter Switcher */}
        <div className="project-tabs-container">
          <div className="filter-tabs" role="tablist" aria-label="Filter project sections">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              className={`filter-tab ${activeTab === 'all' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <Layers size={14} aria-hidden="true" />
              <span>All Projects ({ACADEMIC_PROJECTS.length + WORK_EXPERIENCE_PROJECTS.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'academic'}
              className={`filter-tab ${activeTab === 'academic' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveTab('academic')}
            >
              <GraduationCap size={14} aria-hidden="true" />
              <span>Academic &amp; Web Projects ({ACADEMIC_PROJECTS.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'work-experience'}
              className={`filter-tab ${activeTab === 'work-experience' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveTab('work-experience')}
            >
              <Briefcase size={14} aria-hidden="true" />
              <span>Work Experience Projects ({WORK_EXPERIENCE_PROJECTS.length})</span>
            </button>
          </div>
        </div>

        <div className="projects-split-layout">
          {/* SECTION 1: Academic & Personal Projects */}
          {showAcademic && (
            <div className="projects-sub-section">
              <div className="projects-sub-header">
                <div className="sub-header-pill sub-header-pill--academic">
                  <GraduationCap size={15} aria-hidden="true" />
                  <span>Section 1 &bull; Academic &amp; Personal Projects</span>
                </div>
                <h3 className="projects-sub-title">
                  Academic &amp; Web <span className="text-gradient">Applications</span>
                </h3>
                <p className="projects-sub-desc">
                  Responsive frontend web apps and database-backed portals including Flower Shop,
                  Aquarium Shop, Book Store &amp; College Management System.
                </p>
              </div>

              <div className="projects-grid">
                {ACADEMIC_PROJECTS.map((project, index) =>
                  renderProjectCard(project, index, 'academic')
                )}
              </div>
            </div>
          )}

          {/* SECTION 2: Work Experience Projects */}
          {showWorkExp && (
            <div className="projects-sub-section projects-sub-section--work">
              <div className="projects-sub-header">
                <div className="sub-header-pill sub-header-pill--work">
                  <Briefcase size={15} aria-hidden="true" />
                  <span>Section 2 &bull; Work Experience Projects</span>
                </div>
                <h3 className="projects-sub-title">
                  Enterprise &amp; Work Experience <span className="text-gradient">Projects</span>
                </h3>
                <p className="projects-sub-desc">
                  Production-grade enterprise software systems built for Hospital Management (HMS),
                  Point-of-Sale Inventory &amp; Billing, and Logistics Fleet tracking.
                </p>
              </div>

              <div className="projects-grid">
                {WORK_EXPERIENCE_PROJECTS.map((project, index) =>
                  renderProjectCard(project, index, 'work')
                )}
              </div>
            </div>
          )}
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
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

<<<<<<< HEAD
            {selectedProject.clientBenefit && (
              <div className="project-benefit-box" style={{ marginBottom: '16px' }}>
                <Sparkles size={16} className="text-cyan" />
                <strong>Business Value: {selectedProject.clientBenefit}</strong>
              </div>
            )}

            <div className="modal-card__section">
              <h4>Key Capabilities &amp; Features</h4>
=======
            <div className="modal-card__section">
              <h4>Key Capabilities &amp; Highlights</h4>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
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
<<<<<<< HEAD
              <h4>Architecture &amp; Technologies</h4>
=======
              <h4>Technologies &amp; Architecture</h4>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
              <div className="project-card__tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-card__actions">
<<<<<<< HEAD
=======
              <a
                href={selectedProject.repoUrl || 'https://github.com/sathishmgs'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
              >
                <FolderGit2 size={16} aria-hidden="true" />
                <span>View on GitHub</span>
              </a>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
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
=======
                  className="btn btn--secondary btn--sm"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  <span>Open Live Project</span>
                </a>
              )}
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
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
