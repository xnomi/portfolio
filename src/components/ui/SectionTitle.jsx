import React from 'react';

function SectionTitle({ overline, title, subtitle }) {
  return (
    <>
      <style>{`
        .section-title-wrap {
          text-align: center;
          margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
          padding: 0 0.5rem;
        }
        .section-overline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.85rem;
        }
        .section-overline::before,
        .section-overline::after {
          content: '';
          display: block;
          width: 20px;
          height: 2px;
          background: var(--gradient-accent);
          border-radius: 1px;
        }
        .section-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 4.2vw, 2.85rem);
          font-weight: 800;
          margin-bottom: 0.85rem;
          line-height: 1.15;
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
          font-size: clamp(0.92rem, 1.8vw, 1.05rem);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.7;
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
