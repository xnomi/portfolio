import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { SiFlutter, SiAndroid, SiN8N, SiZapier, SiOpenai, SiPython } from 'react-icons/si';
import { FiCpu, FiGitBranch, FiSmartphone, FiCheck, FiLayers, FiActivity, FiZap } from 'react-icons/fi';
import { FaRobot, FaBrain } from 'react-icons/fa';

const SKILL_PILLARS = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Swarms',
    badge: 'Core Specialization',
    icon: <FaBrain size={26} />,
    color: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    description: 'Engineering autonomous multi-agent swarms, stateful execution graphs, and self-healing LLM pipelines with memory & validation.',
    coreTools: [
      { name: 'LangGraph', highlight: true, note: 'Stateful Graphs' },
      { name: 'CrewAI', highlight: true, note: 'Multi-Agent Teams' },
      { name: 'AutoGen', highlight: true, note: 'Conversational Swarms' },
      { name: 'LangSmith', highlight: true, note: 'Tracing & Evals' },
      { name: 'ChromaDB / Pinecone', highlight: false, note: 'Vector DB / RAG' },
      { name: 'OpenAI / DeepSeek SDK', highlight: false, note: 'LLM Reasoning' },
    ],
    capabilities: [
      'Multi-Agent Coordination & Supervisor Routing',
      'LangGraph State Charts with Human-in-the-Loop',
      'Semantic Search & Vector Cosine Embeddings',
      'Prompt Optimization & Schema-Enforced JSON Outputs',
      'LangSmith Performance Tracing & Token Optimization',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Webhooks',
    badge: 'Enterprise Integration',
    icon: <FiGitBranch size={26} />,
    color: '#00f5a0',
    glowColor: 'rgba(0, 245, 160, 0.25)',
    description: 'Architecting high-scale workflow automations, API event listeners, and business logic pipelines across enterprise apps.',
    coreTools: [
      { name: 'n8n', highlight: true, note: 'Enterprise Self-Hosted' },
      { name: 'Zapier', highlight: true, note: 'Multi-App Integrations' },
      { name: 'Make.com', highlight: true, note: 'Visual Logic Flows' },
      { name: 'Webhooks & REST APIs', highlight: false, note: 'Real-Time Sync' },
      { name: 'Slack & Telegram Bots', highlight: false, note: 'ChatOps Bots' },
      { name: 'Gmail & Drive APIs', highlight: false, note: 'Document Ingest' },
    ],
    capabilities: [
      'Automated Customer Triage & Smart Ticket Routing',
      'Accounts Payable & OCR Invoice Processing',
      'Bi-Directional E-Commerce CRM Sync (Shopify/Odoo)',
      'Scheduled Cron Pipelines & Data Scrubbing Workflows',
      'Fault-Tolerant Error Handling & Webhook Retry Queues',
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    badge: 'Cross-Platform Native',
    icon: <FiSmartphone size={26} />,
    color: '#00d2ff',
    glowColor: 'rgba(0, 210, 255, 0.25)',
    description: 'Building high-performance, pixel-perfect iOS & Android mobile applications with offline storage and on-device AI.',
    coreTools: [
      { name: 'Flutter', highlight: true, note: 'iOS & Android' },
      { name: 'Android (Java/Kotlin)', highlight: true, note: 'Native Components' },
      { name: 'Dart Language', highlight: true, note: 'Object-Oriented' },
      { name: 'Provider / Bloc', highlight: false, note: 'State Management' },
      { name: 'Google ML Kit', highlight: false, note: 'On-Device Vision' },
      { name: 'Firebase / SQLite', highlight: false, note: 'Backend & Offline DB' },
    ],
    capabilities: [
      'Pixel-Perfect Responsive Mobile UI / UX (Figma)',
      'Clean Architecture & Modular Codebase Structure',
      'Real-Time Computer Vision & Image Classification',
      'Secure Local Database Caching & State Management',
      'App Store & Google Play Store Deployment Ready',
    ],
  },
];

function Skills() {
  return (
    <>
      <style>{`
        #skills {
          background: var(--bg-primary);
          position: relative;
        }

        .skills-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
          max-width: 1240px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .skills-pillars-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .skill-pillar-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 2.25rem 1.85rem;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .skill-pillar-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          opacity: 0.8;
          transition: opacity var(--transition), height var(--transition);
        }
        .skill-pillar-card:hover {
          transform: translateY(-7px);
        }
        .skill-pillar-card:hover::before {
          height: 4px;
          opacity: 1;
        }

        .pillar-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .pillar-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform var(--transition);
        }
        .skill-pillar-card:hover .pillar-icon-wrap {
          transform: scale(1.08) rotate(3deg);
        }

        .pillar-badge {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
          background: var(--bg-secondary);
        }

        .pillar-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
          line-height: 1.25;
        }
        .pillar-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        /* Core Tools Section */
        .pillar-tools-section {
          margin-bottom: 1.5rem;
        }
        .section-mini-label {
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .tool-chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .tool-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          transition: border-color var(--transition), background var(--transition), transform var(--transition);
        }
        .tool-chip.featured {
          border-color: var(--chip-border, var(--border));
          background: var(--chip-bg, var(--bg-secondary));
          color: var(--chip-text, var(--text-primary));
        }
        .tool-chip:hover {
          transform: translateY(-2px);
          border-color: var(--accent-cyan);
        }
        .tool-chip-note {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Capabilities List */
        .pillar-capabilities {
          margin-top: auto;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }
        .capability-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .capability-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .capability-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        @media (max-width: 640px) {
          .skill-pillar-card {
            padding: 1.6rem 1.25rem;
          }
          .pillar-title {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <section id="skills">
        <div className="container">
          <div className="reveal">
            <SectionTitle
              overline="Core Engineering Pillars"
              title="Technical <span class='accent-word'>Proficiency</span>"
              subtitle="Specialized expertise across autonomous Agentic AI swarms, enterprise workflow automation, and cross-platform mobile applications."
            />
          </div>

          <div className="skills-pillars-grid">
            {SKILL_PILLARS.map((pillar, i) => (
              <div
                key={pillar.id}
                className={`skill-pillar-card reveal delay-${i + 1}`}
                style={{
                  '--pillar-color': pillar.color,
                  '--chip-bg': `${pillar.color}12`,
                  '--chip-border': `${pillar.color}35`,
                  '--chip-text': pillar.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${pillar.color}75`;
                  e.currentTarget.style.boxShadow   = `0 16px 45px ${pillar.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow   = 'var(--shadow-card)';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '3px',
                    background: pillar.color,
                    boxShadow: `0 0 16px ${pillar.color}`,
                  }}
                />

                <div className="pillar-header">
                  <div
                    className="pillar-icon-wrap"
                    style={{
                      background: `${pillar.color}15`,
                      color: pillar.color,
                      border: `1px solid ${pillar.color}30`,
                      boxShadow: `0 0 20px ${pillar.color}20`
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    className="pillar-badge"
                    style={{ color: pillar.color, borderColor: `${pillar.color}40` }}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>

                <div className="pillar-tools-section">
                  <div className="section-mini-label">
                    <FiLayers size={12} style={{ color: pillar.color }} />
                    <span>Core Frameworks &amp; Tools</span>
                  </div>
                  <div className="tool-chips-grid">
                    {pillar.coreTools.map((t) => (
                      <div
                        key={t.name}
                        className={`tool-chip ${t.highlight ? 'featured' : ''}`}
                      >
                        <span>{t.name}</span>
                        {t.note && <span className="tool-chip-note">· {t.note}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pillar-capabilities">
                  <div className="section-mini-label">
                    <FiZap size={12} style={{ color: pillar.color }} />
                    <span>Production Capabilities</span>
                  </div>
                  <ul className="capability-list">
                    {pillar.capabilities.map((cap) => (
                      <li key={cap} className="capability-item">
                        <FiCheck size={14} className="capability-icon" style={{ color: pillar.color }} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
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
