import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { FiCode, FiBriefcase, FiStar } from 'react-icons/fi';

const STATS = [
  { icon: <FiCode />, value: '2+', label: 'Years Experience' },
  { icon: <FiBriefcase />, value: '12+', label: 'Projects Shipped' },
  { icon: <FiStar />, value: '4.5★', label: 'Freelance Rating' },
];

const BADGES = ['Flutter', 'React', 'Node.js', 'AI Automation', 'Python', 'LangGraph', 'CrewAI', 'AutoGen', 'Upwork', 'Fiverr'];

function About() {
  return (
    <>
      <style>{`
        #about { background: var(--bg-secondary); }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4.5rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .about-avatar-side { display: flex; flex-direction: column; align-items: center; }
          .about-badge-row { justify-content: center; }
        }

        /* Avatar */
        .about-avatar-wrap {
          position: relative;
          width: 290px;
          height: 290px;
          margin: 0 auto;
        }
        .about-avatar-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 2px dashed rgba(124,58,237,0.4);
          animation: rotateRing 18s linear infinite;
        }
        .about-avatar-ring::before {
          content: '';
          position: absolute;
          top: -5px; left: 50%;
          width: 12px; height: 12px;
          background: var(--gradient-accent);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 18px #7c3aed;
        }
        .about-avatar-ring-2 {
          position: absolute;
          inset: -24px;
          border-radius: 50%;
          border: 1px solid rgba(6,182,212,0.15);
          animation: rotateRing 28s linear infinite reverse;
        }
        .about-avatar-img-wrap {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(124,58,237,0.4);
          box-shadow: 0 0 50px rgba(124,58,237,0.25), 0 0 100px rgba(6,182,212,0.1);
          overflow: hidden;
          background: var(--bg-card);
          animation: pulseGlow 4s ease-in-out infinite;
        }
        .about-avatar-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.05);
        }

        /* Stats */
        .about-stats {
          display: flex;
          gap: 0.75rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1rem 1.1rem;
          text-align: center;
          flex: 1;
          min-width: 85px;
          backdrop-filter: blur(12px);
          transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
        }
        .stat-card:hover {
          border-color: rgba(124,58,237,0.4);
          box-shadow: 0 4px 24px rgba(124,58,237,0.2);
          transform: translateY(-3px);
        }
        .stat-icon {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.5px;
          margin-top: 3px;
        }

        /* Text side */
        .about-text h3 {
          font-size: 1.7rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
          line-height: 1.2;
        }
        .about-text h3 span {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-text p {
          color: var(--text-secondary);
          font-size: 0.97rem;
          margin-bottom: 1rem;
          line-height: 1.85;
        }
        .about-text p strong { color: var(--text-primary); }

        .about-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 1.5rem;
        }
        .about-badge {
          background: rgba(124,58,237,0.08);
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: var(--radius-full);
          color: #c4b5fd;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 4px 14px;
          transition: background var(--transition), border-color var(--transition);
        }
        .about-badge:hover {
          background: rgba(124,58,237,0.18);
          border-color: rgba(124,58,237,0.45);
        }
      `}</style>

      <section id="about">
        <div className="container-fluid px-0">
          <div className="reveal">
            <SectionTitle
              overline="Get to know me"
              title="About <span class='accent-word'>Me</span>"
              subtitle="Passionate developer with a drive to build impactful, intelligent products."
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
                    alt="Muhammad Noman Ashraf - Freelance Full Stack Developer & AI Automation Expert"
                    loading="lazy"
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
                Building Digital Experiences <span>That Matter</span>
              </h3>

              <p>
                I'm a passionate <strong>freelance full stack developer</strong> and mobile app builder with over 2 years of hands-on experience crafting high-performance applications — from concept to deployment. Whether you want to <strong>hire a React developer</strong> for your next web platform or need a pixel-perfect mobile app, I've got you covered.
              </p>

              <p>
                Beyond traditional development, I am an <strong>AI automation expert</strong> and <strong>LangGraph &amp; CrewAI developer</strong> — building intelligent multi-agent automation pipelines using n8n, the OpenAI SDK, CrewAI, AutoGen, and LangGraph. I love making complex workflows simple, powerful, and autonomous.
              </p>

              <p>
                As an active freelancer on <strong>Upwork &amp; Fiverr</strong>, I've collaborated with international clients to deliver scalable, maintainable solutions — always on time and beyond expectations.
              </p>

              <div className="about-badge-row">
                {BADGES.map((b) => (
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
