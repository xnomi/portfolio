import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { FiCode, FiBriefcase, FiStar } from 'react-icons/fi';

/**
 * About section – two-column layout: avatar + bio cards.
 */
const STATS = [
  { icon: <FiCode />, value: '2+', label: 'Years Building Apps' },
  { icon: <FiBriefcase />, value: '12+', label: 'Mobile Apps Shipped' },
  { icon: <FiStar />, value: '4.5★', label: 'Freelance Rating' },
];

function About() {
  return (
    <>
      <style>{`
        #about { background: var(--bg-secondary); }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .about-avatar-side { display: flex; flex-direction: column; align-items: center; }
        }

        /* Avatar */
        .about-avatar-wrap {
          position: relative;
          width: 280px;
          height: 280px;
          margin: 0 auto;
        }
        .about-avatar-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px dashed rgba(0,180,255,0.3);
          animation: rotateRing 20s linear infinite;
        }
        @keyframes rotateRing { to { transform: rotate(360deg); } }
        .about-avatar-ring::before {
          content: '';
          position: absolute;
          top: -4px; left: 50%;
          width: 10px; height: 10px;
          background: var(--accent);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 14px var(--accent);
        }
        .about-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid var(--accent);
          box-shadow: 0 0 40px var(--accent-glow);
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .about-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.05); /* slightly zoom in to frame face nicely */
        }

        /* Stats */
        .about-stats {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          text-align: center;
          flex: 1;
          min-width: 90px;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .stat-card:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 20px var(--accent-glow);
        }
        .stat-icon {
          color: var(--accent);
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.55rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }
        .stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.5px;
          margin-top: 2px;
        }

        /* Text side */
        .about-text h3 {
          font-size: 1.65rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        .about-text p {
          color: var(--text-secondary);
          font-size: 0.97rem;
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .about-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        .about-badge {
          background: var(--accent-glow2);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 4px 14px;
          letter-spacing: 0.3px;
        }
      `}</style>

      <section id="about">
        <div className="container-fluid px-0">
          <div className="reveal">
            <SectionTitle
              overline="Get to know me"
              title="About <span class='accent-word'>Me</span>"
              subtitle="Passionate developer with a drive to build impactful products."
            />
          </div>

          <div className="about-grid">
            {/* ── Avatar side ── */}
            <div className="about-avatar-side reveal-left">
              <div className="about-avatar-wrap">
                <div className="about-avatar-ring" />
                <div className="about-avatar">
                  <img src="/images/profile_photo.png" alt="Muhammad Noman Ashraf - Freelance Full Stack Developer & AI Automation Expert" loading="lazy" />
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

            {/* ── Text side ── */}
            <div className="about-text reveal-right">
              <h3>
                Building Digital Experiences <span style={{ color: 'var(--accent)' }}>That Matter</span>
              </h3>

              <p>
                I'm a passionate <strong style={{ color: 'var(--text-primary)' }}>freelance full stack developer</strong> and mobile app builder with over
                2 years of hands-on experience crafting high-performance applications — from
                concept to deployment. Whether you want to <strong style={{ color: 'var(--text-primary)' }}>hire React developer</strong> for your next web platform or need a pixel-perfect mobile app, I've got you covered.
              </p>

              <p>
                Beyond traditional development, I am an <strong style={{ color: 'var(--text-primary)' }}>AI automation expert</strong> and <strong style={{ color: 'var(--text-primary)' }}>LangGraph & CrewAI developer</strong>{' '}
                — building intelligent multi-agent automation pipelines using n8n, the OpenAI SDK, CrewAI, AutoGen, and LangGraph. I love making
                complex workflows simple, powerful, and autonomous.
              </p>

              <p>
                As an active freelancer on{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Upwork &amp; Fiverr</strong>, I've collaborated with
                international clients to deliver scalable, maintainable solutions — always on time and beyond
                expectations.
              </p>

              <div className="about-badge-row">
                {['Flutter', 'Dart', 'AI Automation', 'n8n', 'React', 'Freelancer', 'Upwork', 'Fiverr'].map((b) => (
                  <span className="about-badge" key={b}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
