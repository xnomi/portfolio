import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

/**
 * BackToTop – floating action button that appears after scrolling 300px.
 * Clicking smoothly scrolls back to the top of the page.
 */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 32px;
          right: 28px;
          z-index: 900;
          width: 46px; height: 46px;
          border-radius: 50%;
          background: var(--gradient-accent);
          border: none;
          color: #fff;
          font-size: 1.15rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,180,255,0.35);
          opacity: 0;
          transform: translateY(16px) scale(0.85);
          pointer-events: none;
          transition: opacity 0.35s ease, transform 0.35s ease, box-shadow var(--transition);
        }
        .back-to-top.show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .back-to-top:hover {
          box-shadow: 0 6px 28px rgba(0,180,255,0.55);
          transform: translateY(-3px) scale(1.05);
        }
        .back-to-top:active {
          transform: scale(0.95);
        }
      `}</style>

      <button
        id="back-to-top"
        className={`back-to-top ${visible ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </>
  );
}

export default BackToTop;
