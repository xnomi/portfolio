import React, { useEffect, useRef } from 'react';
import { FiGithub, FiMail, FiChevronDown, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const ROLES = [
  'Full Stack React & Node.js Developer',
  'AI Automation & Agent Architect',
  'LangGraph & CrewAI Engineer',
  'Multi-Agent System Builder',
];

// Pre-computed particle positions
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
  const roleRef = useRef(null);

  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false, timeout;
    const type = () => {
      const word = ROLES[roleIdx];
      if (roleRef.current) roleRef.current.textContent = word.slice(0, charIdx);
      if (!deleting) {
        if (charIdx < word.length) { charIdx++; timeout = setTimeout(type, 65); }
        else { timeout = setTimeout(() => { deleting = true; type(); }, 2000); }
      } else {
        if (charIdx > 0) { charIdx--; timeout = setTimeout(type, 35); }
        else { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; timeout = setTimeout(type, 400); }
      }
    };
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        #hero {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 110px 1.25rem 70px;
          text-align: center;
          width: 100%;
        }

        /* Animated mesh background blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          will-change: transform;
        }
        .hero-blob-1 {
          width: min(600px, 90vw);
          height: min(600px, 90vw);
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          top: -150px; left: 50%;
          transform: translateX(-50%);
          animation: float 10s ease-in-out infinite;
        }
        .hero-blob-2 {
          width: min(450px, 80vw);
          height: min(450px, 80vw);
          background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
          bottom: -60px; right: -80px;
          animation: floatReverse 12s ease-in-out infinite;
        }
        .hero-blob-3 {
          width: min(350px, 70vw);
          height: min(350px, 70vw);
          background: radial-gradient(circle, var(--accent-glow2) 0%, transparent 70%);
          bottom: 80px; left: -60px;
          animation: float 14s ease-in-out infinite 2s;
        }

        /* Dot grid */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          opacity: 0.6;
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
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
          animation: fadeUp 0.8s ease both;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          background: var(--accent-glow2);
          border: 1px solid var(--border);
          color: var(--accent-purple);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          box-shadow: 0 2px 12px var(--accent-glow2);
        }
        .hero-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .hero-name {
          font-family: var(--font-heading);
          font-size: clamp(2.1rem, 5.8vw, 4.4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 1.2rem;
        }
        .hero-name .name-gradient {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-tagline {
          font-size: clamp(1rem, 2.4vw, 1.35rem);
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          min-height: 2em;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 4px;
        }
        .hero-role {
          color: var(--accent-cyan);
          font-weight: 600;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background: var(--gradient-accent);
          vertical-align: middle;
          border-radius: 2px;
          animation: blink 0.85s step-end infinite;
        }

        .hero-cta {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .hero-socials {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          font-size: 1.15rem;
          transition: border-color var(--transition), color var(--transition), box-shadow var(--transition), transform var(--transition), background var(--transition);
        }
        .hero-social-link:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background: var(--accent-glow2);
          box-shadow: 0 0 20px var(--cyan-glow);
          transform: translateY(-3px);
        }

        .hero-scroll {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-muted);
          font-size: 1.4rem;
          cursor: pointer;
          animation: bounceDown 2.2s infinite;
          z-index: 2;
          transition: color var(--transition);
          padding: 8px;
        }
        .hero-scroll:hover { color: var(--accent); }

        @media (max-width: 768px) {
          #hero {
            padding: 95px 1rem 50px;
          }
          .hero-cta {
            gap: 0.75rem;
          }
          .hero-scroll {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .hero-cta {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            margin: 0 auto 2.25rem;
          }
          .hero-cta .btn-accent,
          .hero-cta .btn-outline {
            width: 100%;
          }
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
              opacity: 0.45,
            }}
          />
        ))}

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for Freelance &amp; Full-Time
          </div>

          <h1 className="hero-name">
            Hi, I'm{' '}
            <span className="name-gradient">Muhammad Noman</span>
            <br />
            <span className="name-gradient">Ashraf</span>
          </h1>

          <div className="hero-tagline">
            <span>Specializing in&nbsp;</span>
            <span ref={roleRef} className="hero-role" />
            <span className="typewriter-cursor" />
          </div>

          <div className="hero-cta">
            <button className="btn-accent" onClick={() => scrollTo('projects')}>
              View Featured Projects <FiArrowRight size={15} />
            </button>
            <a
              href="/doc/Noman Ashraf SE-AI.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FiDownload size={15} /> Resume (PDF)
            </a>
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
            <a href="https://github.com/NomiDevx" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub Profile" title="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/nomidevx" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn Profile" title="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.fiverr.com/s/DBvdoDa" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="Fiverr Profile" title="Fiverr">
              <SiFiverr />
            </a>
            <a href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="Upwork Profile" title="Upwork">
              <SiUpwork />
            </a>
            <a href="mailto:nomi.devx@gmail.com" className="hero-social-link" aria-label="Send Email" title="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-scroll" onClick={() => scrollTo('about')} aria-label="Scroll down to About section">
          <FiChevronDown />
        </div>
      </section>
    </>
  );
}

export default Hero;
