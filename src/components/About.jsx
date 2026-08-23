import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { FiCode, FiBriefcase, FiStar, FiDownload, FiCheckCircle } from 'react-icons/fi';

const STATS = [
  { icon: <FiCode />, value: '2+', label: 'Years Exp.' },
  { icon: <FiBriefcase />, value: '14+', label: 'Projects Shipped' },
  { icon: <FiStar />, value: '5.0★', label: 'Client Rating' },
];

const BADGES = [
  'React.js', 'Node.js', 'AutoGen', 'LangGraph', 'CrewAI',
  'n8n Automation', 'Python / FastAPI', 'Flutter & Dart', 'PostgreSQL', 'Docker'
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
          grid-template-columns: 1fr 1.15fr;
          gap: 3.5rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.25rem;
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
          width: min(270px, 68vw);
          height: min(270px, 68vw);
          margin: 0 auto;
        }
        .about-avatar-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px dashed var(--accent-purple);
          opacity: 0.5;
          animation: rotateRing 20s linear infinite;
        }
        .about-avatar-ring::before {
          content: '';
          position: absolute;
          top: -5px; left: 50%;
          width: 12px; height: 12px;
          background: var(--gradient-accent);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 16px var(--accent);
        }
        .about-avatar-ring-2 {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          border: 1px solid var(--accent-glow);
          animation: rotateRing 30s linear infinite reverse;
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
          object-position: center;
        }

        /* Stats */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-top: 2rem;
          width: 100%;
          max-width: 360px;
        }
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 0.9rem 0.6rem;
          text-align: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
        }
        .stat-card:hover {
          border-color: var(--accent);
          box-shadow: 0 6px 20px var(--accent-glow);
          transform: translateY(-3px);
        }
        .stat-icon {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
          color: var(--accent-cyan);
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.4rem;
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
          margin-top: 2px;
        }

        /* Text side */
        .about-text h3 {
          font-size: clamp(1.4rem, 3vw, 1.85rem);
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
          gap: 0.5rem;
          margin: 1.25rem 0;
          text-align: left;
        }
        .about-highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
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
          margin-top: 1.25rem;
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
              overline="Executive Summary"
              title="About <span class='accent-word'>Me</span>"
              subtitle="Full-stack engineer and AI automation specialist turning complex logic into polished, production-ready software."
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
                    src="/images/profile_photo.png"
                    alt="Muhammad Noman Ashraf - Full Stack Developer & AI Automation Specialist"
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
                Engineering Intelligent Systems &amp; <span>Scalable Frontends</span>
              </h3>

              <p>
                I am a <strong>Full Stack React &amp; Node.js Developer</strong> with a deep focus on <strong>Agentic AI Automation</strong>. I engineer high-performance web and mobile platforms with clean architecture, fluid responsiveness, and state-of-the-art AI capabilities.
              </p>

              <p>
                As an <strong>AI Automation Engineer</strong>, I build autonomous multi-agent pipelines with <strong>AutoGen, LangGraph, and CrewAI</strong>, alongside complex enterprise integrations via <strong>n8n</strong> and custom Python backends.
              </p>

              <div className="about-highlights">
                <div className="about-highlight-item">
                  <FiCheckCircle /> <span>Proven freelance delivery across Upwork &amp; Fiverr clients worldwide</span>
                </div>
                <div className="about-highlight-item">
                  <FiCheckCircle /> <span>Specialist in React, Node.js, Python FastAPI, and Agentic AI graphs</span>
                </div>
                <div className="about-highlight-item">
                  <FiCheckCircle /> <span>Production RAG pipelines with Vector DBs (ChromaDB, Pinecone, OpenAI)</span>
                </div>
              </div>

              <div className="about-badge-row">
                {BADGES.map((b) => (
                  <span className="about-badge" key={b}>{b}</span>
                ))}
              </div>

              <div className="about-cta-row">
                <a
                  href="/doc/Noman Ashraf SE-AI.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent"
                >
                  <FiDownload size={16} /> Download Resume (PDF)
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
