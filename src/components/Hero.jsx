import React, { useEffect, useRef } from 'react';
import { FiGithub, FiMail, FiChevronDown, FiLinkedin } from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

/**
 * Hero section – full-viewport greeting with typewriter tagline,
 * CTA buttons, and an animated gradient background blob.
 */
const ROLES = [
  'Flutter Developer',
  'AI Agent Developer',
  'Web Enthusiast',
];

function Hero() {
  const roleRef   = useRef(null);
  const cursorRef = useRef(null);

  // ── Typewriter effect ──────────────────────────────────────────────────
  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const currentRole = ROLES[roleIdx];
      if (roleRef.current) {
        roleRef.current.textContent = currentRole.slice(0, charIdx);
      }

      if (!deleting) {
        if (charIdx < currentRole.length) {
          charIdx++;
          timeout = setTimeout(type, 80);
        } else {
          // pause at full word
          timeout = setTimeout(() => { deleting = true; type(); }, 1600);
        }
      } else {
        if (charIdx > 0) {
          charIdx--;
          timeout = setTimeout(type, 45);
        } else {
          deleting = false;
          roleIdx  = (roleIdx + 1) % ROLES.length;
          timeout  = setTimeout(type, 300);
        }
      }
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
          padding: 100px 1.5rem 80px;
          text-align: center;
        }

        /* Animated gradient blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.55;
        }
        .hero-blob-1 {
          width: 620px; height: 620px;
          background: radial-gradient(circle, rgba(0,100,255,0.35) 0%, transparent 70%);
          top: -180px; left: 50%;
          transform: translateX(-50%);
          animation: float 8s ease-in-out infinite;
        }
        .hero-blob-2 {
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(0,180,255,0.2) 0%, transparent 70%);
          bottom: 0; right: -80px;
          animation: float 10s ease-in-out infinite reverse;
        }

        /* Grid dots background */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(0,180,255,0.08) 1px, transparent 1px);
          background-size: 42px 42px;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 780px;
          animation: fadeUp 0.9s ease both;
        }

        .hero-greeting {
          font-size: 1.05rem;
          color: var(--accent);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 1rem;
          animation: fadeUp 0.9s 0.1s ease both;
        }

        .hero-name {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 6vw, 4.4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.2rem;
          animation: fadeUp 0.9s 0.2s ease both;
        }
        .hero-name .highlight {
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-tagline {
          font-size: clamp(1rem, 2.5vw, 1.35rem);
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          min-height: 2em;
          animation: fadeUp 0.9s 0.3s ease both;
        }
        .hero-role {
          color: var(--accent);
          font-weight: 600;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--accent);
          margin-left: 2px;
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
          gap: 1rem;
          justify-content: center;
          animation: fadeUp 0.9s 0.5s ease both;
        }
        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 1.1rem;
          transition: border-color var(--transition), color var(--transition), box-shadow var(--transition), transform var(--transition);
        }
        .hero-social-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 16px var(--accent-glow);
          transform: translateY(-3px);
        }

        .hero-scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-muted);
          font-size: 1.5rem;
          cursor: pointer;
          animation: bounceDown 2s infinite;
          z-index: 2;
        }
        .hero-scroll:hover { color: var(--accent); }
      `}</style>

      <section id="hero">
        {/* Background elements */}
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        {/* Main content */}
        <div className="hero-content">
          <p className="hero-greeting">👋 Welcome to my portfolio</p>

          <h1 className="hero-name">
            Hi, I'm <span className="highlight">Muhammad Noman Ashraf</span>
          </h1>

          <p className="hero-tagline">
            <span ref={roleRef} className="hero-role"></span>
            <span ref={cursorRef} className="typewriter-cursor" />
          </p>

          <div className="hero-cta">
            <button className="btn-accent" onClick={() => scrollTo('projects')}>
              View My Work
            </button>
            <button className="btn-outline-accent" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/NomiDevx" target="_blank" rel="noreferrer"
              className="hero-social-link" aria-label="GitHub Profile" title="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/nomidevx" target="_blank" rel="noreferrer"
              className="hero-social-link" aria-label="LinkedIn" title="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.fiverr.com/s/DBvdoDa" target="_blank" rel="noreferrer"
              className="hero-social-link" aria-label="Fiverr" title="Hire me on Fiverr">
              <SiFiverr />
            </a>
            <a href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share" target="_blank" rel="noreferrer"
              className="hero-social-link" aria-label="Upwork" title="Hire me on Upwork">
              <SiUpwork />
            </a>
            <a href="mailto:nomi.devx@gmail.com"
              className="hero-social-link" aria-label="Send Email" title="Email">
              <FiMail />
            </a>
          </div>
        </div>

        {/* Scroll-down indicator */}
        <div className="hero-scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">
          <FiChevronDown />
        </div>
      </section>
    </>
  );
}

export default Hero;
