import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

/**
 * ProjectCard – reusable card showing app mockup image + details.
 */
export function ProjectCard({ image, emoji, title, description, tags, links, featured }) {
  return (
    <>
      <style>{`
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--gradient-accent);
          opacity: 0;
          transition: opacity var(--transition);
          z-index: 2;
        }
        .project-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-8px);
          box-shadow: 0 16px 48px var(--accent-glow);
        }
        .project-card:hover::before { opacity: 1; }

        /* Image thumbnail */
        .project-img-wrap {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
          background: var(--bg-secondary);
          flex-shrink: 0;
        }
        .project-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-img-wrap img {
          transform: scale(1.04);
        }
        .project-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%);
        }

        /* No-image fallback */
        .project-emoji-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          background: var(--bg-secondary);
        }

        .project-featured-badge {
          position: absolute;
          top: 10px; right: 10px;
          background: var(--gradient-accent);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          z-index: 3;
        }

        /* Body */
        .project-body {
          padding: 1.4rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }
        .project-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.75;
          flex: 1;
          margin-bottom: 1rem;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.1rem;
        }
        .project-tag {
          background: var(--accent-glow2);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          color: var(--accent);
          font-size: 0.71rem;
          font-weight: 600;
          padding: 2px 10px;
        }
        .project-links {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          background: transparent;
          cursor: pointer;
          text-decoration: none;
          transition: border-color var(--transition), color var(--transition), background var(--transition);
        }
        .project-link-btn.primary {
          background: var(--gradient-accent);
          border-color: transparent;
          color: #fff;
        }
        .project-link-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .project-link-btn.primary:hover { opacity: 0.88; color: #fff; }
      `}</style>

      <div className="project-card">
        {featured && <span className="project-featured-badge">⭐ Featured</span>}

        {/* Image / fallback */}
        <div className="project-img-wrap">
          {image ? (
            <>
              <img src={image} alt={`${title} app screenshot`} loading="lazy" />
              <div className="project-img-overlay" />
            </>
          ) : (
            <div className="project-emoji-fallback">{emoji}</div>
          )}
        </div>

        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
          <div className="project-tags">
            {tags.map((t) => <span className="project-tag" key={t}>{t}</span>)}
          </div>
          <div className="project-links">
            {links.map(({ href, label, primary, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`project-link-btn ${primary ? 'primary' : ''}`}
              >
                {icon || (primary ? <FiExternalLink size={12} /> : <FiGithub size={12} />)}
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Projects section – showcasing apps with real mockup images.
 */
const PROJECTS = [
  {
    image: '/images/app-scanova.png',
    title: 'Scanova – AI Image Scanner',
    description:
      'An AI-powered image recognition app that lets users scan, categorize, and chat about any photo. Built with Flutter, it features a smart gallery, real-time AI Q&A chat, and category exploration.',
    tags: ['Flutter', 'AI / OpenAI', 'Dart', 'Firebase', 'REST API'],
    featured: true,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub' },
      { href: 'https://www.fiverr.com/s/DBvdoDa', label: 'Hire Me', primary: true },
    ],
  },
  {
    image: '/images/app-cafeshop.png',
    title: 'Cafe Shop – Coffee Ordering App',
    description:
      'A beautifully designed e-commerce Flutter app for a coffee shop chain. Supports browsing, favourites, item customisation, checkout, and delivery/pickup modes — with a warm premium UI.',
    tags: ['Flutter', 'Dart', 'Firebase', 'E-Commerce', 'Animation'],
    featured: true,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub' },
      { href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share', label: 'Upwork', primary: true },
    ],
  },
  {
    image: '/images/app-fitbody.png',
    title: 'FitBody – Fitness & Nutrition',
    description:
      'A comprehensive health & fitness Flutter app featuring workout plans, meal tracking, community forums, weekly challenges, and a profile dashboard — all in a vibrant, energetic design.',
    tags: ['Flutter', 'Dart', 'State Management', 'Health', 'Community'],
    featured: false,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub' },
      { href: 'https://www.fiverr.com/s/DBvdoDa', label: 'Fiverr', primary: true },
    ],
  },
  {
    emoji: '💡',
    title: 'IdeaPress – AI Idea Validator',
    description:
      'An innovation platform where users submit startup concepts and receive instant AI-powered ratings, success predictions, and market-gap analysis to validate their ideas before building.',
    tags: ['Flutter', 'AI Rating', 'OpenAI SDK', 'REST API', 'Firebase'],
    featured: false,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub' },
    ],
  },
  {
    emoji: '📖',
    title: 'BlueNav – Novel Reading Platform',
    description:
      'A full-stack dark-theme novel reading web platform with chapter navigation, reading progress tracking, curated library, and a slick immersive reader UI built with React & Node.js.',
    tags: ['React', 'Node.js', 'MySQL', 'Bootstrap', 'Vercel'],
    featured: false,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub' },
    ],
  },
  {
    emoji: '📱',
    title: '12+ More Mobile Apps',
    description:
      'A growing collection of production-ready Flutter apps spanning productivity, social networking, finance, and more — each crafted for high performance on Android & iOS.',
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'Firebase'],
    featured: false,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'View All on GitHub', primary: true },
    ],
  },
];

function Projects() {
  return (
    <>
      <style>{`
        #projects { background: var(--bg-secondary); }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        @media (max-width: 992px) { .projects-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 620px) { .projects-grid { grid-template-columns: 1fr; } }

        .projects-cta {
          text-align: center;
          margin-top: 3rem;
        }
      `}</style>

      <section id="projects">
        <div className="container-fluid px-0">
          <div className="reveal">
            <SectionTitle
              overline="Things I've built"
              title="My <span class='accent-word'>Projects</span>"
              subtitle="A selection of things I've built — from AI-powered apps to full-stack platforms."
            />
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={p.title} className={`reveal delay-${Math.min(i + 1, 5)}`}>
                <ProjectCard {...p} />
              </div>
            ))}
          </div>

          <div className="projects-cta reveal">
            <a
              href="https://github.com/NomiDevx"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-accent"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FiGithub /> View More on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
