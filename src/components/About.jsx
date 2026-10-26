import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { FiCode, FiBriefcase, FiStar, FiDownload, FiCheckCircle } from 'react-icons/fi';

const STATS = [
  { icon: <FiCode />, value: '2+', label: 'Years Exp.' },
  { icon: <FiBriefcase />, value: '14+', label: 'Projects Shipped' },
  { icon: <FiStar />, value: '5.0★', label: 'Client Rating' },
];

const BADGES = [
  'AutoGen', 'LangGraph', 'CrewAI', 'n8n Automation',
  'React.js', 'Node.js', 'Python / FastAPI', 'Flutter & Dart', 'PostgreSQL', 'Docker'
];

function About() {
  return (
    <>
      <style>{`
        #about {
          background: var(--bg-secondary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3.5rem;
          align-items: center;
          max-width: 1120px;
          margin: 0 auto;
        }

        @media (max-width: 920px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .about-avatar-side {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .about-badge-row {
            justify-content: center;
          }
          .about-cta-row {
            justify-content: center;
          }
        }

        /* Avatar */
        .about-avatar-wrap {
          position: relative;
          width: min(280px, 70vw);
          height: min(280px, 70vw);
          margin: 0 auto;
        }
        .about-avatar-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 2px dashed var(--accent-purple);
          opacity: 0.6;
          animation: rotateRing 20s linear infinite;
        }
        .about-avatar-ring::before {
          content: '';
          position: absolute;
          top: -6px; left: 50%;
          width: 12px; height: 12px;
          background: var(--gradient-accent);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 16px var(--accent-cyan);
        }
        .about-avatar-ring-2 {
          position: absolute;
          inset: -22px;
          border-radius: 50%;
          border: 1px solid var(--accent-glow);
          animation: rotateRing 32s linear infinite reverse;
        }
        .about-avatar-img-wrap {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid var(--border);
          box-shadow: 0 10px 40px var(--accent-glow);
          overflow: hidden;
          background: var(--bg-card);
        }
        .about-avatar-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transform: scale(1.05);
        }

        /* Stats */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-top: 2rem;
          width: 100%;
          max-width: 380px;
        }
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 0.95rem 0.6rem;
          text-align: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
        }
        .stat-card:hover {
          border-color: var(--accent-cyan);
          box-shadow: 0 6px 20px var(--cyan-glow);
          transform: translateY(-3px);
        }
        .stat-icon {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
          color: var(--accent-cyan);
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }
        .stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.3px;
          margin-top: 3px;
        }

        /* Text side */
        .about-text h3 {
          font-size: clamp(1.45rem, 3.2vw, 1.95rem);
          margin-bottom: 1.15rem;
          font-weight: 700;
          line-height: 1.25;
        }
        .about-text h3 span {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-text p {
          color: var(--text-secondary);
          font-size: 0.96rem;
          margin-bottom: 1rem;
          line-height: 1.8;
        }
        .about-text p strong {
          color: var(--text-primary);
        }

        .about-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          margin: 1.35rem 0;
          text-align: left;
        }
        .about-highlight-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 0.92rem;
          color: var(--text-primary);
        }
        .about-highlight-item svg {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .about-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 1.35rem;
        }
        .about-badge {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.76rem;
          font-weight: 600;
          padding: 4px 13px;
          transition: background var(--transition), border-color var(--transition), color var(--transition);
        }
        .about-badge:hover {
          background: var(--accent-glow2);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .about-cta-row {
          margin-top: 2rem;
          display: flex;
        }

        @media (max-width: 480px) {
          .about-stats {
            gap: 0.5rem;
          }
          .stat-card {
            padding: 0.75rem 0.4rem;
          }
          .stat-value {
            font-size: 1.2rem;
          }
          .stat-label {
            font-size: 0.65rem;
          }
          .about-cta-row .btn-accent {
            width: 100%;
          }
        }
      `}</style>

      <section id="about">
        <div className="container">
          <div className="reveal">
            <SectionTitle
              overline="Engineering Background"
              title="About <span class='accent-word'>Me</span>"
              subtitle="Specializing in multi-agent orchestration, autonomous business pipelines, and scalable full-stack web platforms."
            />
          </div>

          <div className="about-grid">
            {/* Avatar side */}
            <div className="about-avatar-side reveal-left">
              <div className="about-avatar-wrap">
                <div className="about-avatar-ring-2" />
                <div className="about-avatar-ring" />
                <div className="about-avatar-img-wrap">
                  <img
                    src="/images/profile-image.jpg"
                    alt="Muhammad Noman Ashraf - Automation & Agentic AI Engineer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="about-stats">
                {STATS.map(({ icon, value, label }) => (
                  <div className="stat-card" key={label}>
                    <div className="stat-icon">{icon}</div>
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text side */}
            <div className="about-text reveal-right">
              <h3>
                Pioneering Autonomous Swarms &amp; <span>Scalable Architecture</span>
              </h3>

              <p>
                I am a <strong>Software Engineer &amp; AI Automation Architect</strong> with deep specialization in autonomous multi-agent systems, LangGraph graphs, and high-performance React frontends.
              </p>

              <p>
                My expertise spans <strong>AutoGen, LangGraph, CrewAI, and n8n</strong> — building self-directed agent swarms that scrape data, synthesize insights, automate ticket triage, and synchronize enterprise CRMs without manual overhead.
              </p>

              <div className="about-highlights">
                <div className="about-highlight-item">
                  <FiCheckCircle /> <span>Multi-Agent Swarms with AutoGen, LangGraph, and CrewAI</span>
                </div>
                <div className="about-highlight-item">
                  <FiCheckCircle /> <span>Enterprise n8n Workflow Automation with Webhooks &amp; Vector DBs</span>
                </div>
                <div className="about-highlight-item">
                  <FiCheckCircle /> <span>Full Stack Web with React.js, Node.js, Python FastAPI &amp; PostgreSQL</span>
                </div>
                <div className="about-highlight-item">
                  <FiCheckCircle /> <span>Top-rated delivery on Upwork &amp; Fiverr with international clients</span>
                </div>
              </div>

              <div className="about-badge-row">
                {BADGES.map((b) => (
                  <span className="about-badge" key={b}>{b}</span>
                ))}
              </div>

              <div className="about-cta-row">
                <a
                  href="/doc/Noman Ashraf Automation Engineer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent"
                >
                  <FiDownload size={16} /> Download Updated CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
