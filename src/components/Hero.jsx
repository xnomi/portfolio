import React, { useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiMail, FiChevronDown, FiLinkedin } from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const ROLES = [
  'Full Stack Developer',
  'AI Automation Engineer',
  'React Developer',
  'LangGraph & CrewAI Dev',
];

// Pre-computed particle positions (avoids Math.random re-runs on re-render)
const PARTICLES = [
  { left: '8%',  top: '15%', size: 3, delay: 0,   dur: 6 },
  { left: '18%', top: '72%', size: 2, delay: 1.2, dur: 8 },
  { left: '25%', top: '35%', size: 4, delay: 0.5, dur: 5 },
  { left: '35%', top: '85%', size: 2, delay: 2,   dur: 7 },
  { left: '42%', top: '20%', size: 3, delay: 0.8, dur: 9 },
  { left: '55%', top: '60%', size: 2, delay: 1.5, dur: 6 },
  { left: '62%', top: '10%', size: 4, delay: 3,   dur: 7 },
  { left: '70%', top: '80%', size: 3, delay: 0.3, dur: 5 },
  { left: '78%', top: '45%', size: 2, delay: 1.8, dur: 8 },
  { left: '88%', top: '25%', size: 3, delay: 2.5, dur: 6 },
  { left: '92%', top: '65%', size: 2, delay: 0.7, dur: 9 },
  { left: '12%', top: '50%', size: 2, delay: 4,   dur: 7 },
  { left: '48%', top: '90%', size: 3, delay: 1.1, dur: 5 },
  { left: '80%', top: '8%',  size: 4, delay: 2.2, dur: 8 },
  { left: '5%',  top: '88%', size: 2, delay: 3.5, dur: 6 },
];

function Hero() {
  const roleRef   = useRef(null);

  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false, timeout;
    const type = () => {
      const word = ROLES[roleIdx];
      if (roleRef.current) roleRef.current.textContent = word.slice(0, charIdx);
      if (!deleting) {
        if (charIdx < word.length) { charIdx++; timeout = setTimeout(type, 75); }
        else { timeout = setTimeout(() => { deleting = true; type(); }, 1800); }
      } else {
        if (charIdx > 0) { charIdx--; timeout = setTimeout(type, 40); }
        else { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; timeout = setTimeout(type, 350); }
      }
    };
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        #hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 1.5rem 80px;
          text-align: center;
        }

        /* Animated mesh background blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          will-change: transform;
        }
        .hero-blob-1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 65%);
          top: -200px; left: 50%;
          transform: translateX(-50%);
          animation: float 10s ease-in-out infinite;
        }
        .hero-blob-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 65%);
          bottom: -80px; right: -100px;
          animation: floatReverse 12s ease-in-out infinite;
        }
        .hero-blob-3 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%);
          bottom: 100px; left: -80px;
          animation: float 14s ease-in-out infinite 2s;
        }

        /* Dot grid */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(124,58,237,0.1) 1px, transparent 1px);
          background-size: 44px 44px;
          pointer-events: none;
        }

        /* Floating particles */
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: var(--gradient-accent);
          pointer-events: none;
          animation: particleDrift ease-in-out infinite;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
          animation: fadeUp 0.9s ease both;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: var(--radius-full);
          background: rgba(124,58,237,0.12);
          border: 1px solid rgba(124,58,237,0.3);
          color: #c4b5fd;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.9s 0.1s ease both;
        }
        .hero-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 8px #7c3aed;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .hero-name {
          font-family: var(--font-heading);
          font-size: clamp(2.6rem, 6.5vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 1.25rem;
          animation: fadeUp 0.9s 0.2s ease both;
        }
        .hero-name .name-gradient {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-tagline {
          font-size: clamp(1.05rem, 2.5vw, 1.4rem);
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          min-height: 2.2em;
          animation: fadeUp 0.9s 0.3s ease both;
        }
        .hero-role {
          color: #67e8f9;
          font-weight: 600;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--gradient-accent);
          margin-left: 3px;
          vertical-align: middle;
          border-radius: 2px;
          animation: blink 0.85s step-end infinite;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 3rem;
          animation: fadeUp 0.9s 0.4s ease both;
        }

        .hero-socials {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          animation: fadeUp 0.9s 0.5s ease both;
        }
        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(124,58,237,0.25);
          background: rgba(124,58,237,0.06);
          color: var(--text-secondary);
          font-size: 1.1rem;
          transition: border-color var(--transition), color var(--transition), box-shadow var(--transition), transform var(--transition), background var(--transition);
        }
        .hero-social-link:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background: rgba(6,182,212,0.1);
          box-shadow: 0 0 20px rgba(6,182,212,0.25);
          transform: translateY(-4px);
        }

        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-muted);
          font-size: 1.5rem;
          cursor: pointer;
          animation: bounceDown 2.2s infinite;
          z-index: 2;
          transition: color var(--transition);
        }
        .hero-scroll:hover { color: #a78bfa; }

        @media (max-width: 768px) {
          #hero {
            padding: 100px 1rem 60px;
          }
          .hero-blob-1 { width: 400px; height: 400px; top: -100px; }
          .hero-blob-2 { width: 300px; height: 300px; bottom: -40px; right: -50px; }
          .hero-blob-3 { width: 250px; height: 250px; bottom: 50px; left: -40px; }
          .hero-name { letter-spacing: -1px; }
          .hero-cta { flex-direction: column; gap: 0.75rem; width: 100%; max-width: 300px; margin: 0 auto 2.5rem; }
          .hero-cta button, .hero-cta a { width: 100%; justify-content: center; }
          .hero-socials { flex-wrap: wrap; }
        }
      `}</style>

      <section id="hero">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: p.left, top: p.top,
              width: p.size, height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              opacity: 0.5,
            }}
          />
        ))}

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for Freelance Work
          </div>

          <h1 className="hero-name">
            Hi, I'm{' '}
            <span className="name-gradient">Muhammad Noman</span>
            <br />
            <span className="name-gradient">Ashraf</span>
          </h1>

          <p className="hero-tagline">
            <span ref={roleRef} className="hero-role" />
            <span className="typewriter-cursor" />
          </p>

          <div className="hero-cta">
            <button className="btn-accent" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <a
              href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Hire Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/NomiDevx" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/nomidevx" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.fiverr.com/s/DBvdoDa" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="Fiverr">
              <SiFiverr />
            </a>
            <a href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="Upwork">
              <SiUpwork />
            </a>
            <a href="mailto:nomi.devx@gmail.com" className="hero-social-link" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">
          <FiChevronDown />
        </div>
      </section>
    </>
  );
}

export default Hero;
