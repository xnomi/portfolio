import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const PROJECTS = [
  {
    image: '/images/app-scanova.png',
    title: 'Scanova – AI Image Scanner',
    description: 'AI-powered image recognition app — scan, categorize, and chat about any photo. Smart gallery, real-time AI Q&A, and category exploration.',
    tags: ['Flutter', 'AI / OpenAI', 'Dart', 'Firebase'],
    featured: true,
    span: 2,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
      { href: 'https://www.fiverr.com/s/DBvdoDa', label: 'Hire Me', primary: true, icon: <SiFiverr size={13} /> },
    ],
  },
  {
    image: '/images/app-cafeshop.png',
    title: 'Cafe Shop – Coffee Ordering',
    description: 'E-commerce Flutter app for a coffee shop chain. Browsing, favorites, customisation, checkout, and delivery modes — with a warm premium UI.',
    tags: ['Flutter', 'Dart', 'Firebase', 'E-Commerce'],
    featured: true,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
      { href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share', label: 'Upwork', primary: true, icon: <SiUpwork size={13} /> },
    ],
  },
  {
    image: '/images/app-fitbody.png',
    title: 'FitBody – Fitness & Nutrition',
    description: 'Health & fitness app featuring workout plans, meal tracking, community forums, weekly challenges, and a vibrant profile dashboard.',
    tags: ['Flutter', 'Dart', 'Health', 'Community'],
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
      { href: 'https://www.fiverr.com/s/DBvdoDa', label: 'Fiverr', primary: true, icon: <SiFiverr size={13} /> },
    ],
  },
  {
    emoji: '💡',
    title: 'IdeaPress – AI Idea Validator',
    description: 'Innovation platform where users submit startup concepts and receive instant AI-powered ratings, predictions, and market-gap analysis.',
    tags: ['Flutter', 'AI', 'OpenAI SDK', 'Firebase'],
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'View on GitHub', primary: true, icon: <FiGithub size={13} /> },
    ],
  },
  {
    emoji: '📖',
    title: 'BlueNav – Novel Reading Platform',
    description: 'Full-stack dark-theme novel reading web platform with chapter navigation, reading progress, curated library, and immersive reader UI.',
    tags: ['React', 'Node.js', 'MySQL', 'Vercel'],
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'View on GitHub', primary: true, icon: <FiGithub size={13} /> },
    ],
  },
  {
    emoji: '📱',
    title: '12+ More Mobile Apps',
    description: 'A growing collection of production-ready Flutter apps spanning productivity, social networking, finance, and more — each crafted for high performance.',
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'Firebase'],
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'View All on GitHub', primary: true, icon: <FiGithub size={13} /> },
    ],
  },
];

function ProjectCard({ image, emoji, title, description, tags, links, featured, span }) {
  return (
    <div
      className={`project-card${span === 2 ? ' project-card-wide' : ''}`}
    >
      {featured && <span className="project-badge">⭐ Featured</span>}

      <div className="project-img-wrap">
        {image ? (
          <>
            <img src={image} alt={`${title} app screenshot`} loading="lazy" />
            <div className="project-img-overlay" />
          </>
        ) : (
          <div className="project-emoji">{emoji}</div>
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
              className={`project-link-btn${primary ? ' primary' : ''}`}
            >
              {icon}{label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <style>{`
        #projects { background: var(--bg-secondary); }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: 1fr 1fr; }
          .project-card-wide { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .bento-grid { grid-template-columns: 1fr; }
          .project-card-wide { grid-column: span 1; }
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .project-card-wide { grid-column: span 2; }
        .project-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-accent);
          opacity: 0;
          transition: opacity var(--transition);
        }
        .project-card:hover {
          border-color: rgba(124,58,237,0.45);
          transform: translateY(-7px);
          box-shadow: 0 20px 60px rgba(124,58,237,0.18);
        }
        .project-card:hover::after { opacity: 1; }

        .project-badge {
          position: absolute;
          top: 12px; right: 12px;
          background: var(--gradient-accent);
          color: #fff;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          z-index: 3;
        }

        .project-img-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: var(--bg-secondary);
          flex-shrink: 0;
        }
        .project-card-wide .project-img-wrap { height: 240px; }

        .project-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s ease;
        }
        .project-card:hover .project-img-wrap img { transform: scale(1.06); }

        .project-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.95) 100%);
        }
        .project-emoji {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 4.5rem;
          background: linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.08));
        }

        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }
        .project-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.7;
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
          background: rgba(124,58,237,0.08);
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: var(--radius-full);
          color: #c4b5fd;
          font-size: 0.68rem;
          font-weight: 600;
          padding: 2px 9px;
        }
        .project-links {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.79rem;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-secondary);
          background: transparent;
          text-decoration: none;
          transition: border-color var(--transition), color var(--transition), background var(--transition), transform var(--transition);
        }
        .project-link-btn:hover {
          border-color: rgba(6,182,212,0.4);
          color: var(--accent-cyan);
          background: rgba(6,182,212,0.06);
          transform: translateY(-2px);
        }
        .project-link-btn.primary {
          background: var(--gradient-accent);
          border-color: transparent;
          color: #fff;
        }
        .project-link-btn.primary:hover {
          opacity: 0.88;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(124,58,237,0.4);
        }

        .projects-cta {
          text-align: center;
          margin-top: 2.5rem;
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

          <div className="bento-grid">
            {PROJECTS.map((p, i) => (
              <div
                key={p.title}
                className={`reveal delay-${Math.min(i + 1, 5)}${p.span === 2 ? ' project-card-wide' : ''}`}
                style={p.span === 2 ? { gridColumn: 'span 2' } : {}}
              >
                <ProjectCard {...p} />
              </div>
            ))}
          </div>

          <div className="projects-cta reveal">
            <a
              href="https://github.com/NomiDevx"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
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
