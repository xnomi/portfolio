import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { id: 'hero',     label: 'Home',     href: '/#hero' },
  { id: 'about',    label: 'About',    href: '/#about' },
  { id: 'skills',   label: 'Skills',   href: '/#skills' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'contact',  label: 'Contact',  href: '/#contact' },
];

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const id = href.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: 72px;
          display: flex;
          align-items: center;
          padding: 0 1.25rem;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          background: transparent;
        }
        @media (min-width: 768px) {
          .nav-root { padding: 0 2rem; }
        }
        .nav-root.scrolled {
          background: var(--nav-bg, rgba(10, 10, 18, 0.88));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
        }
        .nav-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: -0.5px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .nav-links {
          display: flex;
          gap: 0.25rem;
          list-style: none;
          margin: 0; padding: 0;
          align-items: center;
        }
        .nav-links li button,
        .nav-links li a {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.92rem;
          font-weight: 500;
          padding: 8px 14px;
          position: relative;
          cursor: pointer;
          transition: color var(--transition);
          border-radius: var(--radius-sm);
          text-decoration: none;
          display: block;
        }
        .nav-links li button::after,
        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 14px; right: 14px;
          height: 2px;
          background: var(--gradient-accent);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform var(--transition);
        }
        .nav-links li button:hover,
        .nav-links li button.active,
        .nav-links li a:hover,
        .nav-links li a.blog-active {
          color: var(--text-primary);
        }
        .nav-links li button:hover::after,
        .nav-links li button.active::after,
        .nav-links li a:hover::after,
        .nav-links li a.blog-active::after { transform: scaleX(1); }
        .nav-links li button.active { color: var(--accent); }
        .nav-blog-link {
          color: var(--text-secondary) !important;
        }
        .nav-hire-btn {
          margin-left: 0.4rem;
          padding: 8px 18px !important;
          background: var(--gradient-accent) !important;
          color: #fff !important;
          border-radius: var(--radius-full) !important;
          font-weight: 600 !important;
          font-size: 0.88rem !important;
          box-shadow: 0 4px 14px var(--accent-glow);
          transition: opacity var(--transition), transform var(--transition), box-shadow var(--transition) !important;
        }
        .nav-hire-btn::after { display: none !important; }
        .nav-hire-btn:hover {
          opacity: 0.92 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 22px var(--accent-glow) !important;
        }
        .nav-hamburger {
          display: none;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          padding: 8px;
          cursor: pointer;
          font-size: 1.3rem;
          line-height: 1;
          transition: background var(--transition), border-color var(--transition);
          align-items: center;
          justify-content: center;
        }
        .nav-hamburger:hover {
          background: var(--accent-glow2);
          border-color: var(--border-hover);
        }

        /* Mobile Drawer Backdrop */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: min(300px, 85vw);
          height: 100vh;
          height: 100dvh;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          transform: translateX(105%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 999;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.4);
          overflow-y: auto;
        }
        .mobile-drawer.open { transform: translateX(0); }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          margin-bottom: 0.5rem;
          border-bottom: 1px solid var(--border);
        }
        .mobile-drawer-close {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .mobile-drawer button,
        .mobile-drawer a {
          background: none;
          border: none;
          border-bottom: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 1.05rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          padding: 12px 10px;
          transition: color var(--transition), padding var(--transition), background var(--transition);
          display: block;
          text-decoration: none;
          border-radius: var(--radius-sm);
        }
        .mobile-drawer button:hover,
        .mobile-drawer a:hover,
        .mobile-drawer button.active {
          color: var(--accent);
          padding-left: 16px;
          background: var(--accent-glow2);
        }
        .mobile-drawer-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="NomiDevX Homepage">
            NomiDevX
          </Link>

          <div className="nav-actions">
            <ul className="nav-links">
              {NAV_LINKS.map(({ id, label, href }) => (
                <li key={id}>
                  <button
                    className={isHome && activeSection === id ? 'active' : ''}
                    onClick={() => handleNavClick(href)}
                    aria-label={`Navigate to ${label}`}
                  >{label}</button>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className={`nav-blog-link ${location.pathname.startsWith('/blog') ? 'blog-active' : ''}`}
                >Blog</Link>
              </li>
              <li>
                <a
                  href="/doc/Noman Ashraf Automation Engineer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-blog-link"
                >Resume</a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-hire-btn"
                >Hire Me</a>
              </li>
            </ul>

            <ThemeToggle />

            <button
              className="nav-hamburger"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`mobile-backdrop ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${open ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <span className="nav-logo">NomiDevX</span>
          <button
            className="mobile-drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        {NAV_LINKS.map(({ id, label, href }) => (
          <button
            key={id}
            className={isHome && activeSection === id ? 'active' : ''}
            onClick={() => handleNavClick(href)}
          >{label}</button>
        ))}
        <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <a
          href="/doc/Noman Ashraf Automation Engineer.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >Resume (PDF)</a>

        <div className="mobile-drawer-footer">
          <ThemeToggle showLabel={true} />
          <a
            href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share"
            target="_blank"
            rel="noreferrer"
            className="btn-accent"
            onClick={() => setOpen(false)}
            style={{ width: '100%', justifyContent: 'center' }}
          >Hire Me on Upwork →</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
