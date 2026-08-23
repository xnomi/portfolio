import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiMail, FiHeart, FiLinkedin } from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const SOCIAL_LINKS = [
  { icon: <FiGithub size={16} />,   href: 'https://github.com/NomiDevx',                                                   label: 'GitHub' },
  { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/nomidevx',                                          label: 'LinkedIn' },
  { icon: <SiFiverr size={14} />,   href: 'https://www.fiverr.com/s/DBvdoDa',                                              label: 'Fiverr' },
  { icon: <SiUpwork size={14} />,   href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share',        label: 'Upwork' },
  { icon: <FiMail size={16} />,     href: 'mailto:nomi.devx@gmail.com',                                                    label: 'Email' },
];

const NAV_ITEMS = [
  { label: 'Home',     id: 'hero' },
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'contact' },
];

function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        .portfolio-footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          padding: 3rem 1.25rem 2rem;
          width: 100%;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }
        .footer-logo {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          letter-spacing: -0.5px;
          text-decoration: none;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem;
          justify-content: center;
          list-style: none;
          margin: 0; padding: 0;
        }
        .footer-nav li button,
        .footer-nav li a {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: color var(--transition);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          text-decoration: none;
        }
        .footer-nav li button:hover,
        .footer-nav li a:hover { color: var(--accent); }

        .footer-socials {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          text-decoration: none;
          transition: border-color var(--transition), color var(--transition), transform var(--transition), background var(--transition);
        }
        .footer-social-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background: var(--accent-glow2);
          transform: translateY(-3px);
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: var(--border);
        }

        .footer-copy {
          font-size: 0.82rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 5px;
          flex-wrap: wrap;
          justify-content: center;
          line-height: 1.5;
        }
        .footer-copy svg { color: #ef4444; }
        .footer-copy strong {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <footer className="portfolio-footer">
        <div className="footer-inner">
          <Link to="/" className="footer-logo">NomiDevX</Link>

          <ul className="footer-nav">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>{label}</button>
              </li>
            ))}
            <li><Link to="/blog">Blog</Link></li>
          </ul>

          <div className="footer-socials">
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="footer-social-btn"
                aria-label={label}
                title={label}
              >{icon}</a>
            ))}
          </div>

          <div className="footer-divider" />

          <p className="footer-copy">
            © {new Date().getFullYear()} Made with <FiHeart size={12} fill="#ef4444" /> by{' '}
            <strong>Muhammad Noman Ashraf</strong>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
