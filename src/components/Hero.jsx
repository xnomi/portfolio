import React, { useState, useEffect, useRef } from 'react';
import {
  FiGithub, FiMail, FiLinkedin, FiDownload, FiArrowRight,
  FiPlay, FiCheck, FiCpu, FiGitBranch, FiActivity, FiLayers
} from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { FaRobot, FaBrain } from 'react-icons/fa';

const ROLES = [
  'Agentic AI Architect (AutoGen & CrewAI)',
  'LangGraph State Graph Engineer',
  'Full Stack React & Node.js Developer',
  'n8n Enterprise Automation Specialist',
];

const AGENT_NODES = [
  { id: 'trigger', name: 'Trigger & Intake', type: 'Webhook / Event', icon: <FiActivity />, color: '#00f2fe', status: 'Listening' },
  { id: 'supervisor', name: 'Supervisor Agent', type: 'AutoGen Planner', icon: <FaBrain />, color: '#9d4edd', status: 'Decomposing Tasks' },
  { id: 'researcher', name: 'Worker Swarm', type: 'CrewAI Multi-Agent', icon: <FaRobot />, color: '#10b981', status: 'Active Search' },
  { id: 'graph', name: 'State Graph', type: 'LangGraph Memory', icon: <FiGitBranch />, color: '#f59e0b', status: 'Vector Cosine Check' },
  { id: 'dispatch', name: 'Dispatcher', type: 'Slack / DB / API', icon: <FiCpu />, color: '#38bdf8', status: 'Real-time Sync' },
];

const SIMULATION_PRESETS = [
  { id: 'job', label: 'Job Search Agent', desc: 'Scraping boards → Vector match → Slack alerts' },
  { id: 'triage', label: 'Support Triage', desc: 'Gmail ingest → GPT-4o triage → Auto draft' },
  { id: 'research', label: 'Medical Research', desc: 'PubMed fetch → Cross-reference → PDF report' },
];

function Hero() {
  const roleRef = useRef(null);
  const [activeSim, setActiveSim] = useState('job');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false, timeout;
    const type = () => {
      const word = ROLES[roleIdx];
      if (roleRef.current) roleRef.current.textContent = word.slice(0, charIdx);
      if (!deleting) {
        if (charIdx < word.length) { charIdx++; timeout = setTimeout(type, 50); }
        else { timeout = setTimeout(() => { deleting = true; type(); }, 2200); }
      } else {
        if (charIdx > 0) { charIdx--; timeout = setTimeout(type, 28); }
        else { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; timeout = setTimeout(type, 350); }
      }
    };
    timeout = setTimeout(type, 400);
    return () => clearTimeout(timeout);
  }, []);

  // Agent execution simulation timer
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodeIdx((prev) => (prev + 1) % AGENT_NODES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const triggerSimulation = (simId) => {
    setActiveSim(simId);
    setIsSimulating(true);
    setActiveNodeIdx(0);
    let step = 0;
    const simInterval = setInterval(() => {
      step++;
      if (step < AGENT_NODES.length) {
        setActiveNodeIdx(step);
      } else {
        clearInterval(simInterval);
        setIsSimulating(false);
      }
    }, 800);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        #hero {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 105px 1.25rem 60px;
          width: 100%;
        }

        /* Ambient Glow & Grid */
        .hero-ambient-glow {
          position: absolute;
          width: min(700px, 90vw);
          height: min(700px, 90vw);
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 68%);
          top: -150px;
          right: -100px;
          filter: blur(100px);
          pointer-events: none;
          animation: float 14s ease-in-out infinite;
        }
        .hero-ambient-glow-2 {
          position: absolute;
          width: min(500px, 80vw);
          height: min(500px, 80vw);
          border-radius: 50%;
          background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
          filter: blur(90px);
          pointer-events: none;
          animation: floatReverse 16s ease-in-out infinite;
        }
        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, var(--border-subtle) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          opacity: 0.5;
        }

        /* Split Hero Container */
        .hero-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .hero-split-grid {
            grid-template-columns: 1fr;
            gap: 2.75rem;
            text-align: center;
          }
          .hero-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-tagline {
            justify-content: center;
          }
          .hero-stats-bar {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
        }

        /* Left Side: Headline & Content */
        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--accent-cyan);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 16px var(--cyan-glow);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .hero-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981, 0 0 20px #10b981;
          animation: pulseGlow 2s infinite;
        }

        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.3rem, 5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin-bottom: 1.1rem;
        }
        .hero-name-gradient {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .hero-tagline {
          font-size: clamp(1rem, 2.2vw, 1.25rem);
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          min-height: 2.2em;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 5px;
          line-height: 1.4;
        }
        .hero-role-text {
          color: var(--accent-cyan);
          font-weight: 700;
        }
        .hero-cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background: var(--gradient-accent);
          vertical-align: middle;
          animation: blink 0.85s step-end infinite;
        }

        .hero-description {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 2rem;
          max-width: 600px;
        }
        .hero-description strong {
          color: var(--text-primary);
        }

        /* CTA Buttons */
        .hero-actions {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 2.25rem;
        }

        /* Telemetry Stats Bar */
        .hero-stats-bar {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          margin-bottom: 1.75rem;
        }
        .hero-stat-item {
          display: flex;
          flex-direction: column;
        }
        .hero-stat-num {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        /* Social Icons */
        .hero-socials {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }
        .hero-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          font-size: 1.1rem;
          transition: border-color var(--transition), color var(--transition), box-shadow var(--transition), transform var(--transition), background var(--transition);
        }
        .hero-social-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background: var(--accent-glow2);
          transform: translateY(-3px);
          box-shadow: 0 4px 18px var(--cyan-glow);
        }

        /* ── Right Side: Agentic Graph Visualizer ── */
        .hero-agent-console {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px var(--accent-glow2);
          position: relative;
          overflow: hidden;
        }
        .hero-agent-console::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-accent);
        }

        .console-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .console-title-group {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .console-title-group svg {
          color: var(--accent-cyan);
        }
        .console-status-tag {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          font-weight: 600;
        }

        /* Swarm Pipeline Nodes */
        .agent-node-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .agent-node-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: border-color var(--transition), background var(--transition), transform var(--transition), box-shadow var(--transition);
          position: relative;
        }
        .agent-node-card.active {
          border-color: var(--accent-cyan);
          background: var(--accent-glow2);
          box-shadow: 0 4px 20px var(--cyan-glow);
          transform: translateX(4px);
        }
        .node-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .node-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          flex-shrink: 0;
        }
        .node-info-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .node-info-type {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        .node-status-badge {
          font-size: 0.72rem;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-weight: 500;
        }
        .agent-node-card.active .node-status-badge {
          background: var(--accent-cyan);
          color: #000;
          font-weight: 700;
          border-color: transparent;
        }

        /* Preset Triggers */
        .preset-triggers-wrap {
          border-top: 1px solid var(--border-subtle);
          padding-top: 1rem;
        }
        .preset-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          margin-bottom: 0.65rem;
          font-weight: 600;
        }
        .preset-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .preset-btn {
          flex: 1;
          min-width: 100px;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.76rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .preset-btn:hover, .preset-btn.active {
          background: var(--accent-glow2);
          border-color: var(--accent);
          color: var(--text-primary);
        }

        @media (max-width: 640px) {
          .hero-agent-console {
            padding: 1.25rem 1rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
          }
          .hero-actions .btn-accent,
          .hero-actions .btn-outline {
            width: 100%;
          }
        }
      `}</style>

      <section id="hero">
        <div className="hero-grid-pattern" />
        <div className="hero-ambient-glow" />
        <div className="hero-ambient-glow-2" />

        <div className="hero-split-grid">
          {/* Left Column */}
          <div className="hero-left reveal-left">
            <div className="hero-status-pill">
              <span className="hero-pulse-dot" />
              Autonomous Swarm Engine Active
            </div>

            <h1 className="hero-headline">
              Muhammad <br />
              <span className="hero-name-gradient">Noman Ashraf</span>
            </h1>

            <div className="hero-tagline">
              <span>Specializing in&nbsp;</span>
              <span ref={roleRef} className="hero-role-text" />
              <span className="hero-cursor" />
            </div>

            <p className="hero-description">
              Architecting <strong>autonomous multi-agent swarms</strong> with AutoGen &amp; CrewAI, stateful <strong>LangGraph execution graphs</strong>, high-scale <strong>n8n automation pipelines</strong>, and production-grade <strong>React web platforms</strong>.
            </p>

            <div className="hero-actions">
              <button className="btn-accent" onClick={() => scrollTo('projects')}>
                Explore Agentic Projects <FiArrowRight size={15} />
              </button>
              <a
                href="/doc/Noman Ashraf Automation Engineer.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <FiDownload size={15} /> Download CV (PDF)
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Hire on Upwork
              </a>
            </div>

            <div className="hero-stats-bar">
              <div className="hero-stat-item">
                <span className="hero-stat-num">6+</span>
                <span className="hero-stat-label">Agent Architectures</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-num">14+</span>
                <span className="hero-stat-label">Shipped Workflows</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-num">99.4%</span>
                <span className="hero-stat-label">Pipeline Reliability</span>
              </div>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/NomiDevx" target="_blank" rel="noreferrer" className="hero-social-btn" aria-label="GitHub Profile" title="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/nomidevx" target="_blank" rel="noreferrer" className="hero-social-btn" aria-label="LinkedIn Profile" title="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://www.fiverr.com/s/DBvdoDa" target="_blank" rel="noreferrer" className="hero-social-btn" aria-label="Fiverr Profile" title="Fiverr">
                <SiFiverr />
              </a>
              <a href="https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share" target="_blank" rel="noreferrer" className="hero-social-btn" aria-label="Upwork Profile" title="Upwork">
                <SiUpwork />
              </a>
              <a href="mailto:nomi.devx@gmail.com" className="hero-social-btn" aria-label="Send Email" title="Email">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right Column: Agentic AI Swarm Visualizer Console */}
          <div className="hero-right reveal-right">
            <div className="hero-agent-console">
              <div className="console-header">
                <div className="console-title-group">
                  <FiLayers />
                  <span>Agentic Execution Pipeline</span>
                </div>
                <span className="console-status-tag">
                  {isSimulating ? '⚡ EXECUTING' : '● IDLE / READY'}
                </span>
              </div>

              <div className="agent-node-list">
                {AGENT_NODES.map((node, i) => {
                  const isActive = activeNodeIdx === i;
                  return (
                    <div
                      key={node.id}
                      className={`agent-node-card ${isActive ? 'active' : ''}`}
                    >
                      <div className="node-left">
                        <div
                          className="node-icon-box"
                          style={{
                            background: `${node.color}18`,
                            color: node.color,
                            boxShadow: isActive ? `0 0 14px ${node.color}60` : 'none'
                          }}
                        >
                          {node.icon}
                        </div>
                        <div>
                          <div className="node-info-name">{node.name}</div>
                          <div className="node-info-type">{node.type}</div>
                        </div>
                      </div>
                      <div className="node-status-badge">
                        {isActive ? node.status : (i < activeNodeIdx ? '✓ Done' : 'Waiting')}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="preset-triggers-wrap">
                <div className="preset-title">Simulate Live Agent Workflow</div>
                <div className="preset-buttons">
                  {SIMULATION_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      className={`preset-btn ${activeSim === preset.id ? 'active' : ''}`}
                      onClick={() => triggerSimulation(preset.id)}
                    >
                      <FiPlay size={10} />
                      <span>{preset.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
