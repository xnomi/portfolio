import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import {
  FiMail, FiPhone, FiGithub, FiSend, FiUser, FiMessageSquare, FiLinkedin,
} from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const INFO_ITEMS = [
  { icon: <FiMail size={18} />,    label: 'Email',    value: 'nomi.devx@gmail.com',         href: 'mailto:nomi.devx@gmail.com' },
  { icon: <FiPhone size={18} />,   label: 'Phone',    value: '0331 902 5470',               href: 'tel:+923319025470' },
  { icon: <FiLinkedin size={18} />,label: 'LinkedIn', value: 'linkedin.com/in/nomidevx',    href: 'https://www.linkedin.com/in/nomidevx' },
  { icon: <FiGithub size={18} />,  label: 'GitHub',   value: 'github.com/NomiDevx',         href: 'https://github.com/NomiDevx' },
  { icon: <SiFiverr size={16} />,  label: 'Fiverr',   value: 'Hire Me on Fiverr',           href: 'https://www.fiverr.com/s/DBvdoDa' },
  { icon: <SiUpwork size={16} />,  label: 'Upwork',   value: 'Hire Me on Upwork',           href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share' },
];

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Name is required.';
  if (!f.email.trim()) e.email = 'Email is required.';
  else if (!/\S+@\S+\.\S+/.test(f.email)) e.email = 'Enter a valid email address.';
  if (!f.message.trim()) e.message = 'Message cannot be empty.';
  else if (f.message.trim().length < 10) e.message = 'Message too short (minimum 10 characters).';
  return e;
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
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setFields({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <>
      <style>{`
        #contact {
          background: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 2.75rem;
          max-width: 1050px;
          margin: 0 auto;
          align-items: start;
        }
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .contact-intro {
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          text-decoration: none;
          color: var(--text-primary);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .contact-info-card:hover {
          border-color: var(--accent);
          transform: translateX(4px);
          box-shadow: 0 4px 20px var(--accent-glow);
          color: var(--text-primary);
        }
        .contact-info-icon {
          width: 38px; height: 38px;
          background: var(--accent-glow2);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .contact-info-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .contact-info-value {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Form */
        .contact-form-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2rem;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
        }
        .form-group { margin-bottom: 1.25rem; }
        .form-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        .form-label svg { color: var(--accent); }
        .form-control-custom {
          width: 100%;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 11px 14px;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: inherit;
          transition: border-color var(--transition), box-shadow var(--transition);
          outline: none;
          resize: vertical;
        }
        .form-control-custom::placeholder { color: var(--text-muted); }
        .form-control-custom:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px var(--cyan-glow);
        }
        .form-control-custom.is-error { border-color: #ef4444; }
        .form-error {
          font-size: 0.77rem;
          color: #ef4444;
          margin-top: 4px;
          font-weight: 500;
        }
        .form-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          font-size: 0.94rem;
          font-weight: 700;
          cursor: pointer;
          border: none;
          border-radius: var(--radius-full);
          background: var(--gradient-accent);
          color: #fff;
          transition: opacity var(--transition), transform var(--transition), box-shadow var(--transition);
          margin-top: 0.5rem;
          box-shadow: 0 4px 18px var(--accent-glow);
        }
        .form-submit-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-2px);
          box-shadow: 0 6px 24px var(--accent-glow);
        }
        .form-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .form-success {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: var(--radius-md);
          color: #10b981;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 12px 16px;
          margin-top: 1rem;
          animation: fadeUp 0.4s ease;
        }

        @media (max-width: 480px) {
          .contact-form-card {
            padding: 1.5rem 1.25rem;
          }
        }
      `}</style>

      <section id="contact">
        <div className="container">
          <div className="reveal">
            <SectionTitle
              overline="Let's build together"
              title="Get In <span class='accent-word'>Touch</span>"
              subtitle="Have a full-stack project or AI workflow in mind? Let's discuss requirements, timelines, and solutions."
            />
          </div>

          <div className="contact-grid">
            <div className="reveal-left">
              <p className="contact-intro">
                Whether you need to <strong>hire a React developer</strong>, engineer autonomous multi-agent pipelines with <strong>LangGraph / CrewAI</strong>, or build custom <strong>n8n workflows</strong>, my inbox is open.
              </p>
              <div className="contact-info-list">
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
            </div>

            <div className="contact-form-card reveal-right">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    <FiUser size={13} /> Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`form-control-custom ${errors.name ? 'is-error' : ''}`}
                    placeholder="Muhammad Noman Ashraf"
                    value={fields.name}
                    onChange={onChange}
                  />
                  {errors.name && <div className="form-error">⚠ {errors.name}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    <FiMail size={13} /> Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`form-control-custom ${errors.email ? 'is-error' : ''}`}
                    placeholder="name@example.com"
                    value={fields.email}
                    onChange={onChange}
                  />
                  {errors.email && <div className="form-error">⚠ {errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    <FiMessageSquare size={13} /> Project Details / Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className={`form-control-custom ${errors.message ? 'is-error' : ''}`}
                    placeholder="Hi Noman, we are looking for a full stack engineer for..."
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
                  {loading ? 'Sending Message…' : <><FiSend size={14} /> Send Message</>}
                </button>

                {sent && (
                  <div className="form-success">
                    ✓ Message received! I will get back to you within 24 hours.
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
