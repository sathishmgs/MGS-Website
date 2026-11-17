import { useState } from 'react';
<<<<<<< HEAD
import {
  Code2,
  Database,
  Layers,
  Server,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Custom lightweight SVG icons for skills
function SkillIcon({ skillKey }) {
  switch (skillKey) {
    case 'react':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
=======
import { SKILL_GROUPS } from '../data/portfolioData';

function TechIcon({ techKey }) {
  switch (techKey) {
    case 'react':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          <circle cx="16" cy="16" r="2.8" fill="#38bdf8" />
          <ellipse cx="16" cy="16" rx="12" ry="4.8" stroke="#38bdf8" strokeWidth="1.6" fill="none" />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.8"
            stroke="#38bdf8"
            strokeWidth="1.6"
            fill="none"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.8"
            stroke="#38bdf8"
            strokeWidth="1.6"
            fill="none"
            transform="rotate(120 16 16)"
          />
        </svg>
      );
    case 'javascript':
      return (
<<<<<<< HEAD
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
=======
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          <rect x="4" y="4" width="24" height="24" rx="5" fill="#facc15" fillOpacity="0.18" stroke="#facc15" strokeWidth="1.5" />
          <text x="16" y="21" textAnchor="middle" fill="#fde047" fontSize="11" fontWeight="800" fontFamily="monospace">
            JS
          </text>
        </svg>
      );
    case 'html5':
      return (
<<<<<<< HEAD
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
=======
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          <path d="M6 5h20l-1.8 18.5L16 27l-8.2-3.5L6 5z" fill="#f97316" fillOpacity="0.18" stroke="#fb923c" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M11 11h10l-.4 3.5H12l.4 3.2h7.8l-.6 4.3-3.6 1.2-3.6-1.2-.2-2" stroke="#fdba74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'css3':
      return (
<<<<<<< HEAD
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
=======
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          <path d="M6 5h20l-1.8 18.5L16 27l-8.2-3.5L6 5z" fill="#3b82f6" fillOpacity="0.18" stroke="#60a5fa" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M10.8 11h10.4l-.6 4.2H13.5m6.9 0l-.5 5.4-3.9 1.3-3.8-1.3-.3-2.3" stroke="#93c5fd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
<<<<<<< HEAD
    case 'bootstrap':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="#7952b3" fillOpacity="0.22" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="16" y="21" textAnchor="middle" fill="#c4b5fd" fontSize="13" fontWeight="800" fontFamily="sans-serif">
            B
          </text>
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
=======
    case 'php':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          <ellipse cx="16" cy="16" rx="13" ry="8.5" fill="#8b5cf6" fillOpacity="0.18" stroke="#a78bfa" strokeWidth="1.6" />
          <text x="16" y="19.5" textAnchor="middle" fill="#c4b5fd" fontSize="9.5" fontWeight="800" fontFamily="monospace">
            PHP
          </text>
        </svg>
      );
    case 'laravel':
      return (
<<<<<<< HEAD
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <path
            d="M6 9l5-3 5 3v7l5 3v7l-5 3-5-3v-7l-5-3V9zm15 4l5-3v7l-5 3v-7z"
            fill="#f43f5e"
            fillOpacity="0.18"
=======
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <path
            d="M6 9l5-3 5 3v7l5 3v7l-5 3-5-3v-7l-5-3V9zm15 4l5-3v7l-5 3v-7z"
            fill="#f43f5e"
            fillOpacity="0.16"
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
            stroke="#fb7185"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'nodejs':
      return (
<<<<<<< HEAD
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <polygon
            points="16,4 27,10 27,22 16,28 5,22 5,10"
            fill="#10b981"
            fillOpacity="0.18"
=======
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <polygon
            points="16,4 27,10 27,22 16,28 5,22 5,10"
            fill="#10b981"
            fillOpacity="0.16"
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
            stroke="#34d399"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <text x="16" y="19.5" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontWeight="800" fontFamily="monospace">
            JS
          </text>
        </svg>
      );
    case 'mysql':
      return (
<<<<<<< HEAD
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
=======
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
          <ellipse cx="16" cy="9" rx="9" ry="3.5" fill="#0ea5e9" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.6" />
          <path d="M7 9v14c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V9" stroke="#38bdf8" strokeWidth="1.6" fill="none" />
          <path d="M7 16c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.7" fill="none" />
        </svg>
      );
<<<<<<< HEAD
    case 'sql':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <rect x="4" y="5" width="24" height="22" rx="4" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="16" y="19" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="800" fontFamily="monospace">
            SQL
          </text>
        </svg>
      );
    case 'database-design':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <rect x="5" y="6" width="10" height="8" rx="2" stroke="#60a5fa" strokeWidth="1.5" fill="#1e3a8a" fillOpacity="0.4" />
          <rect x="17" y="18" width="10" height="8" rx="2" stroke="#a78bfa" strokeWidth="1.5" fill="#4c1d95" fillOpacity="0.4" />
          <path d="M15 10h4v12h-2" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="#f97316" fillOpacity="0.16" stroke="#fb923c" strokeWidth="1.5" />
          <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fdba74" />
          <path d="M13 16h3a4 4 0 0 0 4-4v-1m-4 5v3" stroke="#fdba74" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="#f8fafc" fillOpacity="0.12" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M11 22v-2.5a3 3 0 0 1 1-2.2c-2.3-.3-4-1.2-4-4a3.3 3.3 0 0 1 .8-2.2 3.1 3.1 0 0 1 .1-2.2s.8-.2 2.6 1a9 9 0 0 1 4.7 0c1.8-1.2 2.6-1 2.6-1a3.1 3.1 0 0 1 .1 2.2 3.3 3.3 0 0 1 .8 2.2c0 2.8-1.7 3.7-4 4a3 3 0 0 1 1 2.2V22" stroke="#f8fafc" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <rect x="5" y="5" width="22" height="22" rx="4" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M23 7l-9 8 9 10V7z" fill="#38bdf8" fillOpacity="0.4" />
          <path d="M9 11l6 5-6 5" stroke="#93c5fd" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'postman':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="#ff6c37" fillOpacity="0.2" stroke="#ff6c37" strokeWidth="1.5" />
          <path d="M11 16l4 4 6-8" stroke="#fdba74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'xampp':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <rect x="5" y="5" width="22" height="22" rx="5" fill="#ea580c" fillOpacity="0.18" stroke="#fb923c" strokeWidth="1.5" />
          <text x="16" y="20" textAnchor="middle" fill="#fed7aa" fontSize="8" fontWeight="800" fontFamily="sans-serif">
            XAMPP
          </text>
        </svg>
      );
    case 'rest-api':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <rect x="4" y="6" width="24" height="20" rx="4" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M9 16h14m-4-4l4 4-4 4" stroke="#7dd3fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'crud':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="#10b981" fillOpacity="0.18" stroke="#34d399" strokeWidth="1.5" />
          <text x="16" y="19" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontWeight="800" fontFamily="monospace">
            CRUD
          </text>
        </svg>
      );
    case 'responsive-design':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <rect x="4" y="6" width="16" height="12" rx="2" stroke="#60a5fa" strokeWidth="1.4" fill="none" />
          <rect x="18" y="12" width="10" height="14" rx="2" stroke="#a78bfa" strokeWidth="1.4" fill="#1e1b4b" />
          <circle cx="23" cy="23" r="1" fill="#c4b5fd" />
        </svg>
      );
    case 'debugging':
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="6" stroke="#f43f5e" strokeWidth="1.5" fill="#be123c" fillOpacity="0.2" />
          <path d="M16 7v3m0 12v3M7 16h3m12 0h3M10 10l2 2m8 8l2 2M10 22l2-2m8-8l2-2" stroke="#fb7185" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'software-dev':
    default:
      return (
        <svg viewBox="0 0 32 32" className="skill-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="11" fill="#6366f1" fillOpacity="0.18" stroke="#818cf8" strokeWidth="1.5" />
          <path d="M12 13l-3 3 3 3m8-6l3 3-3 3" stroke="#c7d2fe" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
=======
    case 'bootstrap':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="#7952b3" fillOpacity="0.25" stroke="#9333ea" strokeWidth="1.5" />
          <text x="16" y="21" textAnchor="middle" fill="#c084fc" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            B
          </text>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="#f97316" fillOpacity="0.18" stroke="#ea580c" strokeWidth="1.5" />
          <text x="16" y="21" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="800" fontFamily="monospace">
            Java
          </text>
        </svg>
      );
    case 'problemsolving':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="#10b981" fillOpacity="0.18" stroke="#10b981" strokeWidth="1.5" />
          <path d="M12 16l3 3 6-6" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'designthinking':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="10" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="4" fill="#c084fc" />
        </svg>
      );
    case 'leadership':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <polygon points="16,6 20,13 27,14 22,20 23,27 16,23 9,27 10,20 5,14 12,13" fill="#f59e0b" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="1.5" />
        </svg>
      );
    case 'sql':
    default:
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="6" width="24" height="20" rx="5" fill="#8b5cf6" fillOpacity="0.18" stroke="#a855f7" strokeWidth="1.6" />
          <text x="16" y="19.5" textAnchor="middle" fill="#d8b4fe" fontSize="9.5" fontWeight="800" fontFamily="monospace">
            SQL
          </text>
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09
        </svg>
      );
  }
}

<<<<<<< HEAD
const CATEGORY_ICONS = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Terminal,
  additional: Layers,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);
=======
export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SKILL_GROUPS.map((group) => group.category)];

  const visibleGroups =
    selectedCategory === 'All'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.category === selectedCategory);
>>>>>>> 8db309981a72daacc371d1b9e3cb55c3db5dae09

  return (
    <section id="skills" className="section reveal" aria-labelledby="skills-heading">
      <div className="container">
<<<<<<< HEAD
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Technical Expertise</span>
          <h2 id="skills-heading" className="section-title">
            My Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Core technologies, programming languages, databases, and development tools I use to engineer robust digital solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skills categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`skills-tab ${activeTab === 'all' ? 'skills-tab--active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Sparkles size={14} aria-hidden="true" />
            <span>All Categories</span>
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Code2;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeTab === cat.id}
                className={`skills-tab ${activeTab === cat.id ? 'skills-tab--active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <Icon size={14} aria-hidden="true" />
                <span>{cat.title.replace(' Development', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;
            return (
              <div key={category.id} className="skill-category-box glass-card">
                <div className="skill-category-box__header">
                  <div className="skill-category-box__icon-wrap">
                    <Icon size={20} className="skill-category-box__icon" />
                  </div>
                  <div>
                    <h3 className="skill-category-box__title">{category.title}</h3>
                    <p className="skill-category-box__subtitle">{category.subtitle}</p>
                  </div>
                </div>

                <div className="skill-badges-grid">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-badge-card">
                      <div className="skill-badge-card__visual">
                        <SkillIcon skillKey={skill.key} />
                      </div>
                      <div className="skill-badge-card__info">
                        <span className="skill-badge-card__name">{skill.name}</span>
                        <span className="skill-badge-card__tag">{skill.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
=======
        <div className="section-header section-header--split">
          <div>
            <span className="section-eyebrow">Technical Skills</span>
            <h2 id="skills-heading" className="section-title">
              Core <span className="text-gradient">Technologies</span> &amp; Stack
            </h2>
            <p className="section-subtitle">
              Tools and technologies I use to design responsive interfaces, build server APIs, and
              manage relational databases.
            </p>
          </div>

          <div className="filter-tabs" role="tablist" aria-label="Filter skills by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-tab ${
                  selectedCategory === cat ? 'filter-tab--active' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-groups">
          {visibleGroups.map((group) => (
            <div key={group.category} className="skill-group glass-card">
              <div className="skill-group__header">
                <div>
                  <h3 className="skill-group__title">{group.category}</h3>
                  <p className="skill-group__subtitle">{group.subtitle}</p>
                </div>
                <span className="skill-group__count">
                  {group.skills.length} {group.skills.length === 1 ? 'Tech' : 'Technologies'}
                </span>
              </div>

              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-card__top">
                      <div className="skill-card__icon">
                        <TechIcon techKey={skill.key} />
                      </div>
                      <span className="skill-card__pulse" aria-hidden="true" />
                    </div>

                    <div className="skill-card__info">
                      <h4 className="skill-card__name">{skill.name}</h4>
                      <span className="skill-card__tag">{skill.tag}</span>
                    </div>

                    {/* Animated stack indicator without invented proficiency percentages */}
                    <div className="skill-card__indicator" aria-hidden="true">
                      <span className="skill-card__shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
