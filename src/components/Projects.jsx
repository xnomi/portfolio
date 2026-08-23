import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { FiGithub, FiPlay, FiX, FiArrowRight, FiExternalLink, FiCpu, FiLayers, FiCode, FiSmartphone } from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const CATEGORIES = [
  { id: 'all', label: 'All Projects', icon: <FiLayers size={14} /> },
  { id: 'agentic-ai', label: 'Agentic AI (AutoGen/LangGraph/CrewAI)', icon: <FiCpu size={14} /> },
  { id: 'automation', label: 'AI Automation (n8n)', icon: <FiCode size={14} /> },
  { id: 'web', label: 'Web Apps (React/Node.js)', icon: <FiExternalLink size={14} /> },
  { id: 'mobile', label: 'Mobile Apps (Flutter)', icon: <FiSmartphone size={14} /> },
];

const PROJECTS = [
  {
    image: '/images/langgraph-job-search-1.png',
    title: 'Autonomous Job Search Agent (LangGraph & Python)',
    badge: 'LangGraph State Graph',
    description: 'A multi-stage LangGraph agent that automates the job search funnel. Ingests candidate profile, scrapes active job boards, runs vector cosine similarity matching, auto-drafts tailored cover letters, and dispatches formatted alerts directly to Slack.',
    tags: ['LangGraph', 'Python', 'Vector DB', 'Slack API', 'Agentic AI', 'OpenAI'],
    category: 'agentic-ai',
    video: '/videos/job-search-agent.mp4',
    featured: true,
    span: 2,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-customer-support.png',
    title: 'AI Customer Support Triage & Auto-Routing (n8n)',
    badge: 'Autonomous Ticket Triage',
    description: 'Autonomous multi-agent customer support workflow. Ingests incoming tickets, classifies intent and urgency via LLMs, retrieves documentation from Vector DB, drafts empathetic responses, and routes escalations to Slack with pre-filled drafts.',
    tags: ['n8n', 'Vector DB', 'LLM Classifier', 'Slack API', 'Customer Support', 'AI Routing'],
    category: 'automation',
    featured: true,
    span: 2,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/crewai-medical.png',
    title: 'Medical Research Intelligence System (CrewAI)',
    badge: '6-Agent CrewAI Swarm',
    description: 'A high-performance CrewAI system coordinating six specialized agents to automate medical literature reviews. Fetches PubMed & Semantic Scholar data, validates cross-references, maps citations, and generates clinical research summaries.',
    tags: ['CrewAI', 'DeepSeek', 'Python', 'PubMed API', 'Literature Review', 'Multi-Agent'],
    category: 'agentic-ai',
    featured: true,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/-Medical-Research-Intelligence-System', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/app-scanova.png',
    title: 'Scanova – AI Vision & Object Detection App',
    badge: 'AI Vision Mobile App',
    description: 'AI-powered image recognition and contextual analysis mobile application. Users scan any object or document to receive instant classification, real-time AI conversational Q&A, and smart gallery categorization.',
    tags: ['Flutter', 'OpenAI Vision API', 'Dart', 'Firebase', 'Mobile UI'],
    category: 'mobile',
    featured: true,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/Scanova-imageDetection', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
      { href: 'https://www.fiverr.com/s/DBvdoDa', label: 'Hire on Fiverr', primary: true, icon: <SiFiverr size={13} /> },
    ],
  },
  {
    image: '/images/crewai-financial.png',
    title: 'Financial Market Intelligence Swarm (CrewAI)',
    badge: 'Multi-Agent Financial Team',
    description: 'Multi-agent financial analyst team built using CrewAI and DeepSeek. Features specialized agents performing stock evaluations, querying real-time market sentiment APIs, conducting technical trend analysis, and generating PDF reports.',
    tags: ['CrewAI', 'DeepSeek', 'Python', 'Market Sentiment', 'PDF Generator', 'Financial AI'],
    category: 'agentic-ai',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/Financial-Researcher-Muilti-Agent-CrewAI-', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/crewai-stock.png',
    title: 'Autonomous Stock Trend Predictor (CrewAI)',
    badge: 'Quantitative AI Crew',
    description: 'Collaborative multi-agent framework built with CrewAI. Coordinates a Market Researcher agent, Quantitative Analyst agent, and Financial Report Writer agent to evaluate trend momentum and execute predictive modeling.',
    tags: ['CrewAI', 'DeepSeek', 'Python', 'Predictive Modeling', 'Agents'],
    category: 'agentic-ai',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-product-launch.png',
    title: 'Autonomous Accounts Payable & Invoice Triage (n8n)',
    badge: 'Enterprise Invoice Pipeline',
    description: 'Autonomous financial pipeline in n8n. Ingests incoming invoices from Gmail, extracts schema-validated structured data with GPT-4o-mini, detects duplicates, and executes threshold-based Slack approvals.',
    tags: ['n8n', 'GPT-4o-mini', 'Gmail API', 'Slack API', 'Google Sheets', 'OCR Parser'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    emoji: '📖',
    title: 'BlueNav – Full Stack Novel Reading Platform',
    badge: 'Full Stack React & Node',
    description: 'A responsive full-stack dark-theme web reading platform with user bookmarking, progress tracking, custom-tailored typography reader settings, and a high-speed Node.js / Express API backend.',
    tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'Vercel', 'REST API'],
    category: 'web',
    featured: true,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-social-media.png',
    title: 'Autonomous Kids Story Publishing Pipeline (n8n)',
    badge: 'Cron Content Pipeline',
    description: 'A recurring cron-triggered publishing engine in n8n. Generates narrative scripts using Claude, translates to Urdu, synthesizes voiceovers via TTS, generates scene illustrations with DALL-E 3, and uploads to Drive.',
    tags: ['n8n', 'Claude API', 'DALL-E 3', 'TTS API', 'Google Drive', 'Automation'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-whatsapp.png',
    title: 'Intelligent WhatsApp Customer AI Agent (n8n)',
    badge: 'Live WhatsApp Bot',
    description: 'Automated WhatsApp business assistant. Ingests customer queries, maintains conversational context across sessions in memory databases, resolves questions via LLMs, and triggers live agent handoffs in Slack.',
    tags: ['n8n', 'WhatsApp API', 'LLM Agent', 'Chat Memory', 'Slack Webhooks'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-image-clustering.png',
    title: 'High-Scale Image Clustering & Embedding Pipeline (n8n)',
    badge: 'Vector Embeddings Pipeline',
    description: 'High-scale media asset processing workflow. Monitors media uploads, converts images to vector embeddings using OpenAI CLIP, and writes vectors to ChromaDB to enable similarity search and clustering.',
    tags: ['n8n', 'Vector Embeddings', 'OpenAI CLIP', 'ChromaDB', 'Metadata Scraper'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-shopify-odoo.png',
    title: 'Shopify-to-Odoo ERP Bi-Directional Sync (n8n)',
    badge: 'Enterprise ERP Sync',
    description: 'Enterprise data integration pipeline. Synchronizes Shopify e-commerce orders, customer profiles, and product inventory levels with Odoo ERP dynamically, featuring robust webhook retry logic and failure alerts.',
    tags: ['n8n', 'Shopify API', 'Odoo ERP', 'CRM Sync', 'Data Integrity'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/app-cafeshop.png',
    title: 'Cafe Shop – Modern Mobile Ordering App',
    badge: 'Flutter Mobile App',
    description: 'E-commerce Flutter application for a coffee shop chain. Features catalog browsing, order customization, delivery mode toggles, and payment checkout, built with a premium dark design.',
    tags: ['Flutter', 'Dart', 'Firebase', 'State Management', 'Mobile UI'],
    category: 'mobile',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/Coffee-Shop-Flutter-application', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
      { href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share', label: 'Hire on Upwork', primary: true, icon: <SiUpwork size={13} /> },
    ],
  },
  {
    image: '/images/app-fitbody.png',
    title: 'FitBody – Health & Workout Tracking Platform',
    badge: 'Flutter Health App',
    description: 'A comprehensive fitness tracking dashboard with personalized workout plans, diet monitoring, community chat groups, weekly challenges, and a local SQL database for offline performance.',
    tags: ['Flutter', 'Dart', 'Local SQL', 'Provider', 'Health Dashboard'],
    category: 'mobile',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/Fit-Body-Fitness-App', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/app-ideapress.png',
    title: 'IdeaPress – AI Startup Idea Validator',
    badge: 'Flutter AI App',
    description: 'A startup validation platform where users submit business concepts and instantly receive LLM-powered ratings, potential feasibility predictions, and market gap assessments.',
    tags: ['Flutter', 'OpenAI SDK', 'Firebase', 'Startup Feasibility'],
    category: 'mobile',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
];

function ProjectCard({ image, emoji, title, badge, description, tags, links, featured, span, video, onWatchVideo }) {
  return (
    <div className={`project-card-v2${span === 2 ? ' card-span-2' : ''}`}>
      {badge && <span className="project-badge-pill">{badge}</span>}

      <div className="project-media-wrap">
        {image ? (
          <>
            <img src={image} alt={`${title} screenshot`} loading="lazy" decoding="async" />
            <div className="project-media-overlay" />
          </>
        ) : (
          <div className="project-emoji-box">{emoji}</div>
        )}
      </div>

      <div className="project-content-v2">
        <h3 className="project-heading-v2">{title}</h3>
        <p className="project-summary-v2">{description}</p>

        <div className="project-tech-tags">
          {tags.map((t) => (
            <span className="project-tech-pill" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-action-row">
          {video && (
            <button
              onClick={() => onWatchVideo(video)}
              className="project-action-btn primary"
            >
              <FiPlay size={13} /> Watch Demo Video
            </button>
          )}
          {links.map(({ href, label, primary, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`project-action-btn${primary ? ' primary' : ''}`}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [videoSrc, setVideoSrc] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setShowAll(false);
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <>
      <style>{`
        #projects {
          background: var(--bg-secondary);
        }

        /* Category Filter Tabs */
        .projects-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.55rem;
          margin-bottom: 2.75rem;
          flex-wrap: wrap;
        }
        .filter-tab-pill {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 9px 18px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: background var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition), transform var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }
        .filter-tab-pill:hover {
          border-color: var(--accent-cyan);
          color: var(--text-primary);
          background: var(--accent-glow2);
          transform: translateY(-2px);
        }
        .filter-tab-pill.active {
          background: var(--gradient-accent);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 18px var(--accent-glow);
          transform: translateY(-2px);
        }

        /* Bento Grid */
        .projects-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1240px;
          margin: 0 auto;
        }

        @media (max-width: 1080px) {
          .projects-bento-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
          .card-span-2 { grid-column: span 2; }
        }
        @media (max-width: 768px) {
          .projects-bento-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .card-span-2 { grid-column: span 1; }
        }

        /* Project Card */
        .project-card-v2 {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          height: 100%;
          box-shadow: var(--shadow-card);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .card-span-2 {
          grid-column: span 2;
        }
        .project-card-v2::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-accent);
          opacity: 0;
          transition: opacity var(--transition);
        }
        .project-card-v2:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px var(--accent-glow);
        }
        .project-card-v2:hover::after { opacity: 1; }

        .project-badge-pill {
          position: absolute;
          top: 14px; right: 14px;
          background: var(--nav-bg);
          border: 1px solid var(--border);
          color: var(--accent-cyan);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          z-index: 3;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
        }

        .project-media-wrap {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
          background: var(--bg-secondary);
          flex-shrink: 0;
        }
        .card-span-2 .project-media-wrap {
          height: 240px;
        }
        @media (max-width: 768px) {
          .project-media-wrap,
          .card-span-2 .project-media-wrap {
            height: 190px;
          }
        }

        .project-media-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card-v2:hover .project-media-wrap img {
          transform: scale(1.06);
        }
        .project-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 35%, var(--bg-card) 100%);
          opacity: 0.75;
        }
        .project-emoji-box {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4.5rem;
          background: var(--accent-glow2);
        }

        .project-content-v2 {
          padding: 1.5rem 1.6rem 1.65rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-heading-v2 {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.65rem;
          color: var(--text-primary);
          line-height: 1.35;
        }
        .project-summary-v2 {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
          flex: 1;
          margin-bottom: 1.25rem;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.35rem;
        }
        .project-tech-pill {
          background: var(--tag-bg);
          border: 1px solid var(--tag-border);
          border-radius: var(--radius-full);
          color: var(--tag-text);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 10px;
        }

        .project-action-row {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .project-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
          color: var(--text-primary);
          background: var(--bg-card);
          text-decoration: none;
          cursor: pointer;
          transition: border-color var(--transition), color var(--transition), background var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .project-action-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background: var(--accent-glow2);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px var(--cyan-glow);
        }
        .project-action-btn.primary {
          background: var(--gradient-accent);
          border-color: transparent;
          color: #fff !important;
          box-shadow: 0 4px 14px var(--accent-glow);
        }
        .project-action-btn.primary:hover {
          opacity: 0.94;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--accent-glow);
        }

        .projects-footer-cta {
          text-align: center;
          margin-top: 3rem;
        }

        /* Video Modal */
        .video-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.25rem;
          animation: modalFadeIn 0.3s ease;
        }
        .video-modal-body {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          max-width: 880px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
          overflow: hidden;
          animation: modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .video-modal-exit-btn {
          position: absolute;
          top: 12px; right: 12px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background var(--transition), transform var(--transition);
          z-index: 10;
        }
        .video-modal-exit-btn:hover {
          background: var(--accent-purple);
          transform: rotate(90deg);
        }
        .video-modal-screen {
          width: 100%;
          aspect-ratio: 16/9;
          background: #000;
        }
        .video-modal-screen video {
          width: 100%; height: 100%;
          display: block;
        }
        .video-modal-meta {
          padding: 1.25rem 1.6rem;
          border-top: 1px solid var(--border);
        }
        .video-modal-meta h3 {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }
        .video-modal-meta p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .project-content-v2 {
            padding: 1.25rem 1rem 1.4rem;
          }
          .filter-tab-pill {
            padding: 7px 14px;
            font-size: 0.78rem;
          }
        }
      `}</style>

      <section id="projects">
        <div className="container">
          <div className="reveal">
            <SectionTitle
              overline="Engineering Portfolio"
              title="Featured <span class='accent-word'>Projects</span>"
              subtitle="Production multi-agent frameworks, enterprise n8n workflows, and full-stack applications."
            />
          </div>

          <div className="projects-filter-bar reveal">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="projects-bento-grid">
            {visibleProjects.map((p) => (
              <ProjectCard key={p.title} {...p} onWatchVideo={setVideoSrc} />
            ))}
          </div>

          {filteredProjects.length > 6 && (
            <div className="reveal" style={{ textAlign: 'center', marginTop: '2.75rem' }}>
              <button
                className="btn-accent"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less Projects' : `View All ${filteredProjects.length} Projects`}
              </button>
            </div>
          )}

          <div className="projects-footer-cta reveal">
            <a
              href="https://github.com/NomiDevx"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FiGithub /> Explore All Repositories on GitHub <FiArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {videoSrc && (
        <div className="video-modal-backdrop" onClick={() => setVideoSrc(null)}>
          <div className="video-modal-body" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-exit-btn" onClick={() => setVideoSrc(null)} aria-label="Close demo video">
              <FiX size={18} />
            </button>
            <div className="video-modal-screen">
              <video src={videoSrc} controls autoPlay />
            </div>
            <div className="video-modal-meta">
              <h3>Autonomous Job Search Agent (LangGraph) – Live Demo</h3>
              <p>Watch the multi-stage LangGraph execution graph scan active boards, compute vector cosine similarity against profile memory, draft custom cover letters, and send Slack notifications in real-time.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
