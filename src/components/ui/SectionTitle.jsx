import React from 'react';

function SectionTitle({ overline, title, subtitle }) {
  return (
    <>
      <style>{`
        .section-title-wrap {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .section-overline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1rem;
        }
        .section-overline::before,
        .section-overline::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--gradient-accent);
        }
        .section-heading {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.12;
          letter-spacing: -1px;
          color: var(--text-primary);
        }
        .section-heading .accent-word {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.75;
        }
      `}</style>
      <div className="section-title-wrap">
        {overline && <span className="section-overline">{overline}</span>}
        <h2 className="section-heading" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </>
  );
}

export default SectionTitle;
