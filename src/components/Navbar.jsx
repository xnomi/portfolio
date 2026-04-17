import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

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
          height: 68px;
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .nav-root.scrolled {
          background: rgba(10,10,15,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(124,58,237,0.2);
          box-shadow: 0 4px 32px rgba(0,0,0,0.5);
        }
        .nav-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: -0.5px;
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
          padding: 6px 14px;
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
        .nav-links li button.active { color: #a78bfa; }
        .nav-blog-link {
          color: var(--text-secondary) !important;
        }
        .nav-hire-btn {
          margin-left: 0.5rem;
          padding: 7px 20px !important;
          background: var(--gradient-accent) !important;
          color: #fff !important;
          border-radius: var(--radius-full) !important;
          font-weight: 600 !important;
          font-size: 0.88rem !important;
          transition: opacity var(--transition), transform var(--transition), box-shadow var(--transition) !important;
        }
        .nav-hire-btn::after { display: none !important; }
        .nav-hire-btn:hover {
          opacity: 0.88 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 24px rgba(124,58,237,0.4) !important;
        }
        .nav-hamburger {
          display: none;
          background: rgba(124,58,237,0.1);
          border: 1px solid rgba(124,58,237,0.3);
          border-radius: var(--radius-sm);
          color: #a78bfa;
          padding: 7px;
          cursor: pointer;
          font-size: 1.2rem;
          line-height: 1;
          transition: background var(--transition);
        }
        .nav-hamburger:hover { background: rgba(124,58,237,0.2); }
        .mobile-drawer {
          position: fixed;
          top: 68px; right: 0;
          width: min(280px, 85vw);
          height: calc(100vh - 68px);
          background: rgba(10,10,20,0.97);
          backdrop-filter: blur(24px);
          border-left: 1px solid rgba(124,58,237,0.2);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transform: translateX(110%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: 999;
        }
        .mobile-drawer.open { transform: translateX(0); }
        .mobile-drawer button,
        .mobile-drawer a {
          background: none;
          border: none;
          border-bottom: 1px solid rgba(124,58,237,0.1);
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          padding: 12px 8px;
          transition: color var(--transition), padding var(--transition);
          display: block;
          text-decoration: none;
        }
        .mobile-drawer button:hover,
        .mobile-drawer a:hover,
        .mobile-drawer button.active { color: #a78bfa; padding-left: 16px; }
        @media (max-width: 820px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; align-items: center; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">NomiDevX</Link>

          <ul className="nav-links">
            {NAV_LINKS.map(({ id, label, href }) => (
              <li key={id}>
                <button
                  className={isHome && activeSection === id ? 'active' : ''}
                  onClick={() => handleNavClick(href)}
                  aria-label={`Go to ${label}`}
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
                href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share"
                target="_blank"
                rel="noreferrer"
                className="nav-hire-btn"
              >Hire Me</a>
            </li>
          </ul>

          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {NAV_LINKS.map(({ id, label, href }) => (
          <button
            key={id}
            className={isHome && activeSection === id ? 'active' : ''}
            onClick={() => handleNavClick(href)}
          >{label}</button>
        ))}
        <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <a
          href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          style={{ color: '#a78bfa', fontWeight: 700 }}
        >Hire Me →</a>
      </div>
    </>
  );
}

export default Navbar;
