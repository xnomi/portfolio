import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle({ className = '', showLabel = false }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <style>{`
        .theme-toggle-btn {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
          transition: background var(--transition), border-color var(--transition), transform var(--transition), color var(--transition), box-shadow var(--transition);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .theme-toggle-btn:hover {
          background: var(--accent-glow2);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-2px) rotate(15deg);
          box-shadow: 0 4px 16px var(--accent-glow);
        }
        .theme-toggle-btn:active {
          transform: scale(0.92);
        }
        .theme-toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
        }
        .theme-toggle-with-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: background var(--transition), border-color var(--transition);
        }
        .theme-toggle-with-label:hover {
          border-color: var(--accent);
          background: var(--accent-glow2);
        }
      `}</style>
      
      {showLabel ? (
        <button
          onClick={toggleTheme}
          className={`theme-toggle-with-label ${className}`}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? <FiSun className="theme-toggle-icon" /> : <FiMoon className="theme-toggle-icon" />}
          <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          className={`theme-toggle-btn ${className}`}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          <span className="theme-toggle-icon" key={isDark ? 'sun' : 'moon'}>
            {isDark ? <FiSun /> : <FiMoon />}
          </span>
        </button>
      )}
    </>
  );
}

export default ThemeToggle;
