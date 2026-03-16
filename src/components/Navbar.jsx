import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { SiFlutter } from 'react-icons/si';

/**
 * Navbar – fixed top, collapses on mobile.
 * Receives `activeSection` string from App (powered by IntersectionObserver).
 */
const NAV_LINKS = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'skills',   label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
];

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  // Add background shadow once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on link click
  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .portfolio-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: background 0.4s ease, box-shadow 0.4s ease;
          padding: 0 1.5rem;
          height: 68px;
          display: flex;
          align-items: center;
        }
        .portfolio-nav.scrolled {
          background: rgba(7,7,15,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 2px 24px rgba(0,0,0,0.5);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          cursor: pointer;
        }
        .nav-logo span { color: var(--accent); }
        .nav-logo svg { color: var(--accent); }

        /* Desktop links */
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nav-links li a, .nav-links li button {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.93rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          padding: 4px 0;
          position: relative;
          cursor: pointer;
          transition: color var(--transition);
        }
        .nav-links li a::after, .nav-links li button::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-accent);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform var(--transition);
        }
        .nav-links li a:hover, .nav-links li button:hover,
        .nav-links li a.active, .nav-links li button.active {
          color: var(--text-primary);
        }
        .nav-links li a:hover::after, .nav-links li button:hover::after,
        .nav-links li a.active::after, .nav-links li button.active::after {
          transform: scaleX(1);
        }
        .nav-links li a.active, .nav-links li button.active {
          color: var(--accent);
        }

        /* Hamburger */
        .nav-hamburger {
          display: none;
          background: none;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--accent);
          padding: 6px;
          cursor: pointer;
          font-size: 1.25rem;
          line-height: 1;
        }

        /* Mobile drawer */
        .mobile-drawer {
          position: fixed;
          top: 68px; right: 0;
          width: min(280px, 80vw);
          height: calc(100vh - 68px);
          background: rgba(10,10,20,0.97);
          backdrop-filter: blur(20px);
          border-left: 1px solid var(--border);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transform: translateX(110%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: 999;
        }
        .mobile-drawer.open { transform: translateX(0); }
        .mobile-drawer button {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.05rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
          transition: color var(--transition);
        }
        .mobile-drawer button:hover,
        .mobile-drawer button.active { color: var(--accent); }

        @media (max-width: 768px) {
          .nav-links    { display: none; }
          .nav-hamburger { display: flex; align-items: center; }
        }
      `}</style>

      <nav className={`portfolio-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <div className="nav-logo" onClick={() => handleNav('hero')}>
            <SiFlutter size={20} />
            <span>Nomi</span>DevX
          </div>

          {/* Desktop nav */}
          <ul className="nav-links">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => handleNav(id)}
                  aria-label={`Navigate to ${label}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            className={activeSection === id ? 'active' : ''}
            onClick={() => handleNav(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;
