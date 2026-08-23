import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { SiFlutter, SiPython, SiReact, SiNodedotjs } from 'react-icons/si';
import { FiLayout, FiServer, FiCpu, FiGitBranch } from 'react-icons/fi';
import { FaRobot, FaBrain } from 'react-icons/fa';

const CATEGORIES = [
  {
    icon: <FiLayout size={24} />,
    title: 'Frontend & React Ecosystem',
    color: '#06b6d4',
    gradientFrom: 'rgba(6,182,212,0.15)',
    description: 'Crafting pixel-perfect, accessible, and ultra-fast responsive web frontends and mobile apps.',
    skills: [
      { icon: <SiReact size={18} />,   name: 'React.js / Web Architecture', level: 92 },
      { icon: <SiFlutter size={18} />, name: 'Flutter & Dart (iOS/Android)', level: 88 },
    ],
    tags: ['React.js', 'State Management (Redux/Context)', 'TailwindCSS / Vanilla CSS', 'REST & GraphQL APIs', 'Responsive Design', 'Next.js / Vite'],
  },
  {
    icon: <FiServer size={24} />,
    title: 'Backend & Cloud Architecture',
    color: '#10b981',
    gradientFrom: 'rgba(16,185,129,0.15)',
    description: 'Engineering robust RESTful APIs, distributed microservices, and high-performance databases.',
    skills: [
      { icon: <SiNodedotjs size={18} />, name: 'Node.js (Express / Fastify)', level: 90 },
      { icon: <SiPython size={18} />,    name: 'Python (FastAPI / Django)', level: 88 },
    ],
    tags: ['Node.js (Express)', 'FastAPI', 'PostgreSQL / MySQL', 'MongoDB / Redis', 'Firebase / Supabase', 'Docker', 'AWS (EC2/S3)'],
  },
  {
    icon: <FaRobot size={24} />,
    title: 'Agentic AI & LLMs',
    color: '#8b5cf6',
    gradientFrom: 'rgba(139,92,246,0.15)',
    description: 'Building autonomous multi-agent coordination frameworks and stateful LLM graph charts.',
    skills: [
      { icon: <FaBrain size={18} />,   name: 'AutoGen & CrewAI Systems', level: 92 },
      { icon: <FiCpu size={18} />,     name: 'LangGraph State Charts & RAG', level: 90 },
    ],
    tags: ['AutoGen', 'LangGraph', 'CrewAI', 'OpenAI & DeepSeek APIs', 'RAG & Vector DBs (ChromaDB)', 'Prompt Engineering', 'LangSmith Monitoring'],
  },
  {
    icon: <FiGitBranch size={24} />,
    title: 'n8n & Workflow Automation',
    color: '#f59e0b',
    gradientFrom: 'rgba(245,158,11,0.15)',
    description: 'Building end-to-end webhook pipelines, automated data synchronizations, and Slack/Telegram bots.',
    skills: [
      { icon: <FiGitBranch size={18} />, name: 'n8n Enterprise Automation', level: 94 },
      { icon: <FiCpu size={18} />,       name: 'Webhook & Third-Party APIs', level: 90 },
    ],
    tags: ['n8n Workflows', 'Slack & Telegram Bots', 'Gmail / Drive APIs', 'OAuth2 / Webhooks', 'Automated Triage', 'Error Recovery Pipelines'],
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
          style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <>
      <style>{`
        #skills {
          background: var(--bg-primary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 800px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 2rem 1.75rem;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          position: relative;
          overflow: hidden;
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-accent);
          opacity: 0;
          transition: opacity var(--transition);
        }
        .skill-card:hover {
          transform: translateY(-5px);
        }
        .skill-card:hover::before { opacity: 1; }

        .skill-card-bg {
          position: absolute;
          bottom: -40px; right: -40px;
          width: 180px; height: 180px;
          border-radius: 50%;
          filter: blur(50px);
          pointer-events: none;
          opacity: 0.4;
          transition: opacity var(--transition);
        }
        .skill-card:hover .skill-card-bg { opacity: 0.7; }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.75rem;
        }
        .skill-card-icon {
          width: 48px; height: 48px;
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .skill-card-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
        }
        .skill-card-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.4rem;
        }

        /* Progress bars */
        .skill-bar-item { margin-bottom: 1rem; }
        .skill-bar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 6px;
        }
        .skill-bar-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .skill-bar-name {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-primary);
          flex: 1;
        }
        .skill-bar-pct {
          font-size: 0.78rem;
          font-weight: 700;
        }
        .skill-bar-track {
          height: 6px;
          background: var(--border);
          border-radius: 3px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 1.2s ease;
        }

        /* Tags */
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 1.25rem;
        }
        .skill-tag {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.72rem;
          font-weight: 500;
          padding: 3px 10px;
          transition: color var(--transition), border-color var(--transition);
        }
        .skill-card:hover .skill-tag {
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        @media (max-width: 480px) {
          .skill-card {
            padding: 1.5rem 1.25rem;
          }
          .skill-card-title {
            font-size: 1.05rem;
          }
        }
      `}</style>

      <section id="skills">
        <div className="container">
          <div className="reveal">
            <SectionTitle
              overline="Technical Arsenal"
              title="My <span class='accent-word'>Skills</span>"
              subtitle="Production-tested technologies across full-stack web, scalable backends, and agentic AI architectures."
            />
          </div>

          <div className="skills-grid">
            {CATEGORIES.map(({ icon, title, color, gradientFrom, description, skills, tags }, i) => (
              <div
                className={`skill-card reveal delay-${i + 1}`}
                key={title}
                style={{ borderColor: `${color}30` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}80`;
                  e.currentTarget.style.boxShadow   = `0 12px 36px ${color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${color}30`;
                  e.currentTarget.style.boxShadow   = 'none';
                }}
              >
                <div className="skill-card-bg" style={{ background: gradientFrom }} />

                <div className="skill-card-header">
                  <div className="skill-card-icon" style={{ background: `${color}18`, color }}>
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
