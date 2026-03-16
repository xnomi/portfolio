import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import {
  FiMail, FiPhone, FiGithub, FiSend, FiUser, FiMessageSquare, FiLinkedin,
} from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

/**
 * Contact section – split layout: info cards on left, form on right.
 * Client-side validation only; no backend required.
 */
const INFO_ITEMS = [
  { icon: <FiMail size={20} />,    label: 'Email',    value: 'nomi.devx@gmail.com',         href: 'mailto:nomi.devx@gmail.com' },
  { icon: <FiPhone size={20} />,   label: 'Phone',    value: '0331 902 5470',               href: 'tel:+923319025470' },
  { icon: <FiLinkedin size={20} />,label: 'LinkedIn', value: 'linkedin.com/in/nomidevx',    href: 'https://www.linkedin.com/in/nomidevx' },
  { icon: <FiGithub size={20} />,  label: 'GitHub',   value: 'github.com/NomiDevx',         href: 'https://github.com/NomiDevx' },
  { icon: <SiFiverr size={18} />,  label: 'Fiverr',   value: 'fiverr.com/nomidevx',         href: 'https://www.fiverr.com/s/DBvdoDa' },
  { icon: <SiUpwork size={18} />,  label: 'Upwork',   value: 'upwork.com/freelancers/nomi', href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share' },
];

function validate(fields) {
  const errors = {};
  if (!fields.name.trim())                errors.name    = 'Name is required.';
  if (!fields.email.trim())               errors.email   = 'Email is required.';
  else if (!/\S+@\S+\.\S+/.test(fields.email)) errors.email = 'Enter a valid email.';
  if (!fields.message.trim())             errors.message = 'Message cannot be empty.';
  else if (fields.message.trim().length < 10)  errors.message = 'Message is too short (min 10 chars).';
  return errors;
}

function Contact() {
  const [fields, setFields]   = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate async send (no backend)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setFields({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <>
      <style>{`
        #contact { background: var(--bg-primary); }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
          align-items: start;
        }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        /* Info side */
        .contact-intro {
          font-size: 0.97rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 0.9rem;
          text-decoration: none;
          color: var(--text-primary);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .contact-info-card:hover {
          border-color: var(--accent);
          transform: translateX(6px);
          box-shadow: 0 4px 20px var(--accent-glow);
          color: var(--text-primary);
        }
        .contact-info-icon {
          width: 42px; height: 42px;
          background: var(--accent-glow2);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .contact-info-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .contact-info-value {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        /* Form side */
        .contact-form-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
        }

        .form-group { margin-bottom: 1.25rem; }
        .form-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.83rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .form-label svg { color: var(--accent); }

        .form-control-dark {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 11px 14px;
          color: var(--text-primary);
          font-size: 0.92rem;
          font-family: var(--font-body);
          transition: border-color var(--transition), box-shadow var(--transition);
          outline: none;
          resize: vertical;
        }
        .form-control-dark::placeholder { color: var(--text-muted); }
        .form-control-dark:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow2);
        }
        .form-control-dark.is-error { border-color: #ef4444; }

        .form-error {
          font-size: 0.78rem;
          color: #ef4444;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .form-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px;
          font-size: 0.97rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          border: none;
          border-radius: var(--radius-full);
          background: var(--gradient-accent);
          color: #fff;
          transition: opacity var(--transition), transform var(--transition), box-shadow var(--transition);
          margin-top: 0.5rem;
        }
        .form-submit-btn:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0,180,255,0.4);
        }
        .form-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .form-success {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: var(--radius-md);
          color: #10b981;
          font-size: 0.92rem;
          font-weight: 600;
          padding: 14px 18px;
          margin-top: 1rem;
          animation: fadeUp 0.5s ease;
        }
      `}</style>

      <section id="contact">
        <div className="container-fluid px-0">
          <div className="reveal">
            <SectionTitle
              overline="Let's work together"
              title="Get In <span class='accent-word'>Touch</span>"
              subtitle="Have a project in mind? I'd love to hear from you."
            />
          </div>

          <div className="contact-grid">
            {/* ── Info side ── */}
            <div className="reveal-left">
              <p className="contact-intro">
                Whether you have a project idea, need a freelance developer, or just want to chat — my inbox is
                always open. I typically respond within 24 hours.
              </p>

              {INFO_ITEMS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-info-card"
                >
                  <div className="contact-info-icon">{icon}</div>
                  <div>
                    <div className="contact-info-label">{label}</div>
                    <div className="contact-info-value">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* ── Form side ── */}
            <div className="contact-form-card reveal-right">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label">
                    <FiUser size={13} /> Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`form-control-dark ${errors.name ? 'is-error' : ''}`}
                    placeholder="Muhammad Noman Ashraf"
                    value={fields.name}
                    onChange={onChange}
                  />
                  {errors.name && <div className="form-error">⚠ {errors.name}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FiMail size={13} /> Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`form-control-dark ${errors.email ? 'is-error' : ''}`}
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={onChange}
                  />
                  {errors.email && <div className="form-error">⚠ {errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FiMessageSquare size={13} /> Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className={`form-control-dark ${errors.message ? 'is-error' : ''}`}
                    placeholder="Hi Noman, I'd love to discuss a project with you..."
                    value={fields.message}
                    onChange={onChange}
                  />
                  {errors.message && <div className="form-error">⚠ {errors.message}</div>}
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="form-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        style={{ borderColor: '#fff', borderRightColor: 'transparent' }}
                      />
                      Sending…
                    </>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </button>

                {sent && (
                  <div className="form-success">
                    ✅ Message sent! I'll get back to you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
