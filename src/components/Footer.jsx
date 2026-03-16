import React from 'react';
import { FiGithub, FiMail, FiHeart, FiLinkedin } from 'react-icons/fi';
import { SiFlutter, SiUpwork, SiFiverr } from 'react-icons/si';

/**
 * Footer – copyright, social links, tagline.
 */
const SOCIAL_LINKS = [
  { icon: <FiGithub size={17} />,   href: 'https://github.com/NomiDevx',                                                   label: 'GitHub' },
  { icon: <FiLinkedin size={17} />, href: 'https://www.linkedin.com/in/nomidevx',                                          label: 'LinkedIn' },
  { icon: <SiFiverr size={15} />,   href: 'https://www.fiverr.com/s/DBvdoDa',                                              label: 'Fiverr' },
  { icon: <SiUpwork size={15} />,   href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share',        label: 'Upwork' },
  { icon: <FiMail size={17} />,     href: 'mailto:nomi.devx@gmail.com',                                                    label: 'Email' },
];

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .portfolio-footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          padding: 3rem 1.5rem 2rem;
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
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          cursor: pointer;
        }
        .footer-logo span { color: var(--accent); }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          list-style: none;
          margin: 0; padding: 0;
        }
        .footer-nav li button {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.88rem;
          cursor: pointer;
          transition: color var(--transition);
          padding: 0;
        }
        .footer-nav li button:hover { color: var(--accent); }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border);
          color: var(--text-muted);
          text-decoration: none;
          transition: border-color var(--transition), color var(--transition), transform var(--transition);
        }
        .footer-social-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
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
        }
        .footer-copy svg { color: #ef4444; }
        .footer-copy strong { color: var(--accent); }
      `}</style>

      <footer className="portfolio-footer">
        <div className="footer-inner">
          {/* Logo */}
          <div className="footer-logo" onClick={() => scrollTo('hero')}>
            <SiFlutter color="var(--accent)" size={18} />
            <span>Nomi</span>DevX
          </div>

          {/* Nav links */}
          <ul className="footer-nav">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((id) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="footer-socials">
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="footer-social-btn"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="footer-divider" />

          {/* Copyright */}
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
