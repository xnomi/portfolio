import React from 'react';

/**
 * Reusable section title with accent underline and optional subtitle.
 */
function SectionTitle({ overline, title, subtitle }) {
  return (
    <>
      <style>{`
        .section-title-wrap {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .section-overline {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }
        .section-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 4vw, 2.75rem);
          font-weight: 800;
          margin-bottom: 0.75rem;
          line-height: 1.15;
        }
        .section-heading .accent-word {
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 1rem;
        }
        .section-divider span {
          display: block;
          height: 2px;
          border-radius: 2px;
        }
        .divider-line { width: 60px; background: var(--border); }
        .divider-dot  { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; }
        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
          max-width: 540px;
          margin: 0 auto;
        }
      `}</style>
      <div className="section-title-wrap">
        {overline && <span className="section-overline">{overline}</span>}
        <h2 className="section-heading" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="section-divider">
          <span className="divider-line" />
          <span className="divider-dot" />
          <span className="divider-line" />
        </div>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </>
  );
}

export default SectionTitle;
