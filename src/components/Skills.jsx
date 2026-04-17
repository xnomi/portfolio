import React from 'react';
import SectionTitle from './ui/SectionTitle';
import {
  SiFlutter, SiDart, SiPython
} from 'react-icons/si';
import { FiSmartphone } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

/**
 * Skills section – three cards: Mobile Dev, AI & Automation, Web Dev.
 */
const CATEGORIES = [
  {
    icon: <FiSmartphone size={28} />,
    title: 'Mobile Development',
    color: '#00b4ff',
    description: 'Crafting high-performance, pixel-perfect Android & iOS applications from concept to App Store.',
    skills: [
      { icon: <SiFlutter size={22} />, name: 'Flutter', level: 90 },
      { icon: <SiDart size={22} />,    name: 'Dart',    level: 88 },
    ],
    tags: ['Android', 'iOS', 'State Management', 'REST APIs', 'Firebase'],
  },
  {
    icon: <FaRobot size={28} />,
    title: 'AI Automation',
    color: '#a855f7',
    description: 'Building intelligent multi-agent systems and automation pipelines using modern AI frameworks.',
    skills: [
      { icon: <SiPython size={22} />, name: 'AutoGen',   level: 85 },
      { icon: <SiPython size={22} />, name: 'LangGraph', level: 82 },
      { icon: <SiPython size={22} />, name: 'CrewAI',    level: 80 },
    ],
    tags: ['Generative AI', 'LLM Pipelines', 'Multi-Agent', 'Python'],
  },
];

function SkillBar({ name, icon, level, color }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-icon" style={{ color }}>{icon}</span>
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${level}%`, background: color }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <>
      <style>{`
        #skills { background: var(--bg-primary); }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        @media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr; } }

        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2rem 1.75rem;
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .skill-card:hover {
          transform: translateY(-6px);
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .skill-card-icon {
          width: 52px; height: 52px;
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        .skill-card-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
        }
        .skill-card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        /* Skill progress bars */
        .skill-bar-item { margin-bottom: 1.1rem; }
        .skill-bar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 5px;
        }
        .skill-bar-icon { flex-shrink: 0; }
        .skill-bar-name {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          flex: 1;
        }
        .skill-bar-pct {
          font-size: 0.8rem;
          font-weight: 700;
        }
        .skill-bar-track {
          height: 6px;
          background: rgba(255,255,255,0.06);
          border-radius: 3px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1.2s ease;
          box-shadow: 0 0 8px currentColor;
        }

        /* Tags */
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 1.25rem;
        }
        .skill-tag {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-full);
          color: var(--text-muted);
          font-size: 0.72rem;
          padding: 3px 10px;
        }
      `}</style>

      <section id="skills">
        <div className="container-fluid px-0">
          <div className="reveal">
            <SectionTitle
              overline="What I work with"
              title="My <span class='accent-word'>Skills</span>"
              subtitle="Technologies and tools I use to craft my projects."
            />
          </div>

          <div className="skills-grid">
            {CATEGORIES.map(({ icon, title, color, description, skills, tags }, i) => (
              <div
                className={`skill-card reveal delay-${i + 1}`}
                key={title}
                style={{ borderColor: `${color}22` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}66`;
                  e.currentTarget.style.boxShadow = `0 8px 32px ${color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${color}22`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="skill-card-header">
                  <div
                    className="skill-card-icon"
                    style={{ background: `${color}18`, color }}
                  >
                    {icon}
                  </div>
                  <h3 className="skill-card-title">{title}</h3>
                </div>
                {description && <p className="skill-card-desc">{description}</p>}

                {skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={color} />
                ))}

                <div className="skill-tags">
                  {tags.map((t) => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
