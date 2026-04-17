import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { SiFlutter, SiDart, SiPython } from 'react-icons/si';
import { FiSmartphone } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

const CATEGORIES = [
  {
    icon: <FiSmartphone size={26} />,
    title: 'Mobile Development',
    color: '#06b6d4',
    gradientFrom: 'rgba(6,182,212,0.15)',
    gradientTo: 'rgba(6,182,212,0.03)',
    description: 'Crafting high-performance, pixel-perfect Android & iOS applications from concept to App Store.',
    skills: [
      { icon: <SiFlutter size={20} />, name: 'Flutter', level: 90 },
      { icon: <SiDart size={20} />,    name: 'Dart',    level: 88 },
    ],
    tags: ['Android', 'iOS', 'State Management', 'REST APIs', 'Firebase', 'App Store'],
  },
  {
    icon: <FaRobot size={26} />,
    title: 'AI Automation',
    color: '#a78bfa',
    gradientFrom: 'rgba(124,58,237,0.15)',
    gradientTo: 'rgba(124,58,237,0.03)',
    description: 'Building intelligent multi-agent systems and automation pipelines using modern AI frameworks.',
    skills: [
      { icon: <SiPython size={20} />, name: 'AutoGen',   level: 85 },
      { icon: <SiPython size={20} />, name: 'LangGraph', level: 82 },
      { icon: <SiPython size={20} />, name: 'CrewAI',    level: 80 },
    ],
    tags: ['AutoGen', 'LangGraph', 'CrewAI', 'LLM Pipelines', 'Multi-Agent', 'Python'],
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
          style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}aa, ${color})` }}
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
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        @media (max-width: 700px) { .skills-grid { grid-template-columns: 1fr; } }

        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2rem;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          position: relative;
          overflow: hidden;
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--gradient-accent);
          opacity: 0;
          transition: opacity var(--transition);
        }
        .skill-card:hover { transform: translateY(-8px); }
        .skill-card:hover::before { opacity: 1; }

        .skill-card-bg {
          position: absolute;
          bottom: -40px; right: -40px;
          width: 200px; height: 200px;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          opacity: 0.5;
          transition: opacity var(--transition);
        }
        .skill-card:hover .skill-card-bg { opacity: 0.8; }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.75rem;
        }
        .skill-card-icon {
          width: 54px; height: 54px;
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }
        .skill-card-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
        }
        .skill-card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* Progress bars */
        .skill-bar-item { margin-bottom: 1.1rem; }
        .skill-bar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 6px;
        }
        .skill-bar-icon { flex-shrink: 0; }
        .skill-bar-name {
          font-size: 0.87rem;
          font-weight: 500;
          color: var(--text-secondary);
          flex: 1;
        }
        .skill-bar-pct { font-size: 0.78rem; font-weight: 700; }
        .skill-bar-track {
          height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          box-shadow: 0 0 8px currentColor;
          transition: width 1.5s ease;
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
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-full);
          color: var(--text-muted);
          font-size: 0.71rem;
          padding: 3px 10px;
          transition: color var(--transition), border-color var(--transition);
        }
        .skill-card:hover .skill-tag {
          color: var(--text-secondary);
          border-color: rgba(255,255,255,0.12);
        }
      `}</style>

      <section id="skills">
        <div className="container-fluid px-0">
          <div className="reveal">
            <SectionTitle
              overline="What I work with"
              title="My <span class='accent-word'>Skills</span>"
              subtitle="Technologies and frameworks I use to build intelligent, production-ready solutions."
            />
          </div>

          <div className="skills-grid">
            {CATEGORIES.map(({ icon, title, color, gradientFrom, description, skills, tags }, i) => (
              <div
                className={`skill-card reveal delay-${i + 1}`}
                key={title}
                style={{ borderColor: `${color}20` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}60`;
                  e.currentTarget.style.boxShadow   = `0 12px 48px ${color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${color}20`;
                  e.currentTarget.style.boxShadow   = 'none';
                }}
              >
                <div className="skill-card-bg" style={{ background: gradientFrom }} />

                <div className="skill-card-header">
                  <div className="skill-card-icon" style={{ background: `${color}15`, color }}>
                    {icon}
                  </div>
                  <h3 className="skill-card-title" style={{ color }}>{title}</h3>
                </div>

                {description && <p className="skill-card-desc">{description}</p>}

                {skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={color} />
                ))}

                <div className="skill-tags">
                  {tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
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
