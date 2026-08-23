import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 96px;
          right: 24px;
          z-index: 990;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          opacity: 0;
          transform: translateY(16px) scale(0.85);
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        }
        .back-to-top.show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .back-to-top:hover {
          background: var(--gradient-accent);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 6px 24px var(--accent-glow);
          transform: translateY(-3px) scale(1.06);
        }
        .back-to-top:active {
          transform: scale(0.94);
        }

        @media (max-width: 768px) {
          .back-to-top {
            bottom: 84px;
            right: 18px;
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          .back-to-top {
            bottom: 78px;
            right: 16px;
            width: 38px;
            height: 38px;
            font-size: 0.95rem;
          }
        }
      `}</style>
      <button
        id="back-to-top"
        className={`back-to-top ${visible ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll back to top"
      >
        <FiArrowUp />
      </button>
    </>
  );
}

export default BackToTop;
