import { PROJECTS } from '../data/projects';
import React, { useState, useMemo } from 'react';
import SectionTitle from './ui/SectionTitle';
import {
  FiGithub, FiArrowRight, FiExternalLink,
  FiCpu, FiLayers, FiCode, FiSmartphone, FiSearch, FiCheck
} from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const CATEGORIES = [
  { id: 'all', label: 'All Projects', icon: <FiLayers size={14} /> },
  { id: 'agentic-ai', label: 'Agentic AI', icon: <FiCpu size={14} />, color: '#8b5cf6' },
  { id: 'automation', label: 'AI Automation (n8n)', icon: <FiCode size={14} />, color: '#00f5a0' },
  { id: 'mobile', label: 'Mobile Apps (Flutter)', icon: <FiSmartphone size={14} />, color: '#00d2ff' },
  { id: 'web', label: 'Web Apps (React)', icon: <FiExternalLink size={14} />, color: '#6366f1' },
];



function HeroProjectCard({ project }) {
  return (
    <div
      className="hero-project-card"
      style={{ '--hero-card-color': project.categoryColor }}
    >
      <div className="hero-card-media-col">
        <div className="hero-media-wrapper">
          <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
          <div className="hero-media-overlay" />
          <span className="hero-category-pill" style={{ color: project.categoryColor }}>
            {project.categoryBadge}
          </span>
        </div>
      </div>

      <div className="hero-card-content-col">
        <div className="hero-badge-row">
          <span className="hero-arch-badge">{project.badge}</span>
        </div>

        <h3 className="hero-card-title">{project.title}</h3>
        <p className="hero-card-description">{project.description}</p>

        <div className="hero-highlights-list">
          {project.highlights.map((h) => (
            <div key={h} className="hero-highlight-item">
              <FiCheck size={14} style={{ color: project.categoryColor }} />
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="hero-tags-row">
          {project.tags.map((t) => (
            <span key={t} className="project-tech-pill">{t}</span>
          ))}
        </div>

        <div className="hero-action-row">
          {project.links.map(({ href, label, primary, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`project-action-btn${primary ? ' primary' : ''}`}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function GridProjectCard({ project }) {
  return (
    <div
      className="grid-project-card"
      style={{ '--card-accent': project.categoryColor || '#00f5a0' }}
    >
      <div className="grid-card-media">
        {project.image ? (
          <>
            <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
            <div className="grid-media-overlay" />
          </>
        ) : (
          <div className="grid-emoji-cover">{project.emoji}</div>
        )}
        <span className="grid-category-tag" style={{ color: project.categoryColor }}>
          {project.categoryBadge || 'Project'}
        </span>
      </div>

      <div className="grid-card-body">
        <span className="grid-arch-sub">{project.badge}</span>
        <h4 className="grid-card-heading">{project.title}</h4>
        <p className="grid-card-text">{project.description}</p>

        {project.highlights && (
          <div className="grid-card-highlights">
            {project.highlights.slice(0, 2).map((h) => (
              <div key={h} className="grid-highlight-bullet">
                <FiCheck size={12} style={{ color: project.categoryColor }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}

        <div className="grid-tags-wrap">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="project-tech-pill">{t}</span>
          ))}
        </div>

        <div className="grid-footer-actions">
          {project.links.map(({ href, label, primary, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`project-action-btn${primary ? ' primary' : ''}`}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: PROJECTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = PROJECTS.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const heroProjects = filteredProjects.filter((p) => p.isHero);
  const regularProjects = filteredProjects.filter((p) => !p.isHero);
  const visibleRegular = showAll ? regularProjects : regularProjects.slice(0, 6);

  return (
    <>
      <style>{`
        #projects {
          background: var(--bg-secondary);
          position: relative;
        }

        /* Search & Filter Header */
        .projects-control-panel {
          max-width: 1240px;
          margin: 0 auto 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: center;
        }

        .projects-search-box {
          position: relative;
          width: 100%;
          max-width: 460px;
        }
        .projects-search-input {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 10px 18px 10px 42px;
          color: var(--text-primary);
          font-size: 0.88rem;
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .projects-search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .projects-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        /* Filter Tab Bar */
        .projects-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.55rem;
          flex-wrap: wrap;
        }
        .filter-tab-pill {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 9px 18px;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .filter-tab-pill:hover {
          border-color: var(--accent-cyan);
          color: var(--text-primary);
          background: var(--accent-glow2);
          transform: translateY(-2px);
        }
        .filter-tab-pill.active {
          background: var(--gradient-accent);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 18px var(--accent-glow);
          transform: translateY(-2px);
        }
        .tab-count-badge {
          font-size: 0.72rem;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.25);
          font-weight: 700;
        }

        /* ── Hero Showcase Cards ── */
        .hero-projects-container {
          max-width: 1240px;
          margin: 0 auto 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .hero-project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          overflow: hidden;
          box-shadow: var(--shadow-elevated);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position: relative;
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .hero-project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--hero-card-color, var(--gradient-accent));
          box-shadow: 0 0 16px var(--hero-card-color, var(--accent-glow));
        }
        .hero-project-card:hover {
          border-color: var(--hero-card-color, var(--accent-cyan));
          transform: translateY(-5px);
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.6);
        }

        .hero-card-media-col {
          position: relative;
          background: var(--bg-primary);
          overflow: hidden;
          min-height: 280px;
        }
        .hero-media-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .hero-media-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-project-card:hover .hero-media-wrapper img {
          transform: scale(1.05);
        }
        .hero-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, var(--bg-card) 100%);
          opacity: 0.6;
        }
        .hero-category-pill {
          position: absolute;
          top: 16px; left: 16px;
          background: var(--nav-bg);
          border: 1px solid var(--border);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
          z-index: 3;
        }

        .hero-card-content-col {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-badge-row {
          margin-bottom: 0.65rem;
        }
        .hero-arch-badge {
          font-size: 0.76rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .hero-card-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .hero-card-description {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .hero-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.35rem;
        }
        .hero-highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .hero-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .hero-action-row {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
          margin-top: auto;
        }

        @media (max-width: 960px) {
          .hero-project-card {
            grid-template-columns: 1fr;
          }
          .hero-card-media-col {
            min-height: 220px;
          }
          .hero-card-content-col {
            padding: 1.6rem 1.4rem;
          }
        }

        /* ── Grid of Regular Projects ── */
        .projects-regular-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1240px;
          margin: 0 auto;
        }
        @media (max-width: 1080px) {
          .projects-regular-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 720px) {
          .projects-regular-grid { grid-template-columns: 1fr; }
        }

        .grid-project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: var(--shadow-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .grid-project-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--card-accent, var(--gradient-accent));
          opacity: 0;
          transition: opacity var(--transition);
        }
        .grid-project-card:hover {
          border-color: var(--card-accent, var(--accent-cyan));
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.4);
        }
        .grid-project-card:hover::after { opacity: 1; }

        .grid-card-media {
          position: relative;
          width: 100%;
          height: 180px;
          background: var(--bg-primary);
          overflow: hidden;
        }
        .grid-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .grid-project-card:hover .grid-card-media img {
          transform: scale(1.06);
        }
        .grid-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, var(--bg-card) 100%);
          opacity: 0.65;
        }
        .grid-emoji-cover {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 3.8rem;
          background: var(--accent-glow2);
        }
        .grid-category-tag {
          position: absolute;
          top: 12px; right: 12px;
          background: var(--nav-bg);
          border: 1px solid var(--border);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          z-index: 3;
        }

        .grid-card-body {
          padding: 1.4rem 1.4rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .grid-arch-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
        .grid-card-heading {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.6rem;
        }
        .grid-card-text {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.1rem;
          flex: 1;
        }
        .grid-card-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1.1rem;
        }
        .grid-highlight-bullet {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-primary);
        }
        .grid-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
        }

        .project-tech-pill {
          background: var(--tag-bg);
          border: 1px solid var(--tag-border);
          border-radius: var(--radius-full);
          color: var(--tag-text);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 9px;
        }

        .grid-footer-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .project-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 7px 15px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
          color: var(--text-primary);
          background: var(--bg-card);
          text-decoration: none;
          cursor: pointer;
          transition: all var(--transition);
        }
        .project-action-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background: var(--accent-glow2);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px var(--cyan-glow);
        }
        .project-action-btn.primary {
          background: var(--gradient-accent);
          border-color: transparent;
          color: #fff !important;
          box-shadow: 0 4px 14px var(--accent-glow);
        }
        .project-action-btn.primary:hover {
          opacity: 0.94;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--accent-glow);
        }
      `}</style>

      <section id="projects">
        <div className="container">
          <div className="reveal">
            <SectionTitle
              overline="Engineering Portfolio"
              title="Featured <span class='accent-word'>Projects</span>"
              subtitle="Production multi-agent frameworks, enterprise workflow automations, and scalable mobile & web applications."
            />
          </div>

          {/* Control Panel: Search & Filter Tabs */}
          <div className="projects-control-panel reveal">
            <div className="projects-search-box">
              <FiSearch className="projects-search-icon" size={16} />
              <input
                type="text"
                placeholder="Search projects (e.g. LangGraph, n8n, Flutter, Python)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="projects-search-input"
              />
            </div>

            <div className="projects-filter-bar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-tab-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span className="tab-count-badge">{categoryCounts[cat.id] || 0}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hero Featured Cards */}
          {heroProjects.length > 0 && (
            <div className="hero-projects-container reveal">
              {heroProjects.map((p) => (
                <HeroProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}

          {/* Regular Projects Grid */}
          {visibleRegular.length > 0 ? (
            <div className="projects-regular-grid reveal">
              {visibleRegular.map((p) => (
                <GridProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            heroProjects.length === 0 && (
              <div className="reveal" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                <p>No projects match your search criteria.</p>
              </div>
            )
          )}

          {regularProjects.length > 6 && (
            <div className="reveal" style={{ textAlign: 'center', marginTop: '2.75rem' }}>
              <button
                className="btn-accent"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less Projects' : `View All ${filteredProjects.length} Projects`}
              </button>
            </div>
          )}

          <div className="projects-footer-cta reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <a
              href="https://github.com/NomiDevx"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FiGithub /> Explore All 15+ Repositories on GitHub <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
