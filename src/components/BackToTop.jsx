import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 32px; right: 28px;
          z-index: 900;
          width: 48px; height: 48px;
          border-radius: 50%;
          background: var(--gradient-accent);
          border: none;
          color: #fff;
          font-size: 1.15rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 24px rgba(124,58,237,0.4);
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          pointer-events: none;
          transition: opacity 0.35s ease, transform 0.35s ease, box-shadow var(--transition);
        }
        .back-to-top.show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .back-to-top:hover {
          box-shadow: 0 8px 36px rgba(124,58,237,0.6);
          transform: translateY(-4px) scale(1.05);
        }
        .back-to-top:active { transform: scale(0.92); }
      `}</style>
      <button
        id="back-to-top"
        className={`back-to-top ${visible ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </>
  );
}

export default BackToTop;
