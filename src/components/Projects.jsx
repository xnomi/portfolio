import React, { useState, useMemo } from 'react';
import SectionTitle from './ui/SectionTitle';
import {
  FiGithub, FiPlay, FiX, FiArrowRight, FiExternalLink,
  FiCpu, FiLayers, FiCode, FiSmartphone, FiSearch, FiCheck, FiVideo
} from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const CATEGORIES = [
  { id: 'all', label: 'All Projects', icon: <FiLayers size={14} /> },
  { id: 'agentic-ai', label: 'Agentic AI', icon: <FiCpu size={14} />, color: '#8b5cf6' },
  { id: 'automation', label: 'AI Automation (n8n)', icon: <FiCode size={14} />, color: '#00f5a0' },
  { id: 'mobile', label: 'Mobile Apps (Flutter)', icon: <FiSmartphone size={14} />, color: '#00d2ff' },
  { id: 'web', label: 'Web Apps (React)', icon: <FiExternalLink size={14} />, color: '#6366f1' },
];

const PROJECTS = [
  {
    id: 'langgraph-job-agent',
    image: '/images/langgraph-job-search-1.png',
    title: 'Autonomous Job Search Agent (LangGraph & Python)',
    badge: 'LangGraph State Graph',
    categoryBadge: 'Agentic AI',
    categoryColor: '#8b5cf6',
    description: 'A multi-stage autonomous LangGraph agent that automates the job application pipeline. Scrapes job boards, executes vector cosine similarity matching against candidate memory, auto-drafts personalized cover letters, and dispatches rich Slack notifications.',
    highlights: ['Multi-Stage LangGraph State Machine', 'Vector Cosine Similarity Matching', 'Auto-Drafted Cover Letters', 'Slack Real-time Alerts'],
    tags: ['LangGraph', 'Python', 'Vector DB', 'Slack API', 'OpenAI', 'Agentic AI'],
    category: 'agentic-ai',
    video: '/videos/job-search-agent.mp4',
    isHero: true,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'n8n-customer-support',
    image: '/images/workflow-customer-support.png',
    title: 'AI Customer Support Triage & Auto-Routing (n8n)',
    badge: 'Autonomous Ticket Triage',
    categoryBadge: 'AI Automation',
    categoryColor: '#00f5a0',
    description: 'Autonomous multi-agent customer support workflow. Ingests incoming tickets, classifies intent and urgency via LLMs, retrieves documentation from Vector DB, drafts empathetic responses, and routes escalations to Slack.',
    highlights: ['Multi-Agent Support Engine', 'Intent & Urgency Classification', 'Vector Knowledge Retrieval', 'Slack Smart Escalations'],
    tags: ['n8n', 'Vector DB', 'LLM Classifier', 'Slack API', 'Customer Support', 'Automation'],
    category: 'automation',
    isHero: true,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'crewai-medical',
    image: '/images/crewai-medical.png',
    title: 'Medical Research Intelligence System (CrewAI)',
    badge: '6-Agent CrewAI Swarm',
    categoryBadge: 'Agentic AI',
    categoryColor: '#8b5cf6',
    description: 'Coordinating six specialized AI agents to automate medical literature reviews. Fetches PubMed & Semantic Scholar data, validates cross-references, maps citations, and generates clinical research summaries.',
    highlights: ['6 Specialized Autonomous Agents', 'PubMed & Semantic Scholar API', 'Citation & Cross-Reference Mapping'],
    tags: ['CrewAI', 'DeepSeek', 'Python', 'PubMed API', 'Literature Review', 'Multi-Agent'],
    category: 'agentic-ai',
    links: [
      { href: 'https://github.com/NomiDevx/-Medical-Research-Intelligence-System', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'app-scanova',
    image: '/images/app-scanova.png',
    title: 'Scanova – AI Vision & Object Detection App',
    badge: 'AI Vision Mobile App',
    categoryBadge: 'Mobile App',
    categoryColor: '#00d2ff',
    description: 'AI-powered image recognition and contextual analysis mobile application. Users scan any object or document to receive instant classification, real-time AI conversational Q&A, and smart gallery categorization.',
    highlights: ['On-Device Computer Vision', 'Real-Time Conversational AI Q&A', 'Clean Provider State Management'],
    tags: ['Flutter', 'OpenAI Vision API', 'Dart', 'Firebase', 'Mobile UI'],
    category: 'mobile',
    links: [
      { href: 'https://github.com/NomiDevx/Scanova-imageDetection', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
      { href: 'https://www.fiverr.com/s/DBvdoDa', label: 'Hire on Fiverr', primary: true, icon: <SiFiverr size={13} /> },
    ],
  },
  {
    id: 'crewai-financial',
    image: '/images/crewai-financial.png',
    title: 'Financial Market Intelligence Swarm (CrewAI)',
    badge: 'Multi-Agent Financial Team',
    categoryBadge: 'Agentic AI',
    categoryColor: '#8b5cf6',
    description: 'Multi-agent financial analyst team built using CrewAI and DeepSeek. Features specialized agents performing stock evaluations, querying real-time market sentiment APIs, conducting technical trend analysis, and generating PDF reports.',
    highlights: ['Sentiment Analysis API Integrations', 'Technical Trend Modeling', 'Automated PDF Report Synthesis'],
    tags: ['CrewAI', 'DeepSeek', 'Python', 'Market Sentiment', 'PDF Generator', 'Financial AI'],
    category: 'agentic-ai',
    links: [
      { href: 'https://github.com/NomiDevx/Financial-Researcher-Muilti-Agent-CrewAI-', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'crewai-stock',
    image: '/images/crewai-stock.png',
    title: 'Autonomous Stock Trend Predictor (CrewAI)',
    badge: 'Quantitative AI Crew',
    categoryBadge: 'Agentic AI',
    categoryColor: '#8b5cf6',
    description: 'Collaborative multi-agent framework built with CrewAI. Coordinates a Market Researcher agent, Quantitative Analyst agent, and Financial Report Writer agent to evaluate trend momentum and execute predictive modeling.',
    highlights: ['Quantitative Algorithmic Swarm', 'Predictive Momentum Modeling', 'DeepSeek Reasoning Integration'],
    tags: ['CrewAI', 'DeepSeek', 'Python', 'Predictive Modeling', 'Agents'],
    category: 'agentic-ai',
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'n8n-invoice',
    image: '/images/workflow-product-launch.png',
    title: 'Autonomous Accounts Payable & Invoice Triage (n8n)',
    badge: 'Enterprise Invoice Pipeline',
    categoryBadge: 'AI Automation',
    categoryColor: '#00f5a0',
    description: 'Autonomous financial pipeline in n8n. Ingests incoming invoices from Gmail, extracts schema-validated structured data with GPT-4o-mini, detects duplicates, and executes threshold-based Slack approvals.',
    highlights: ['OCR Schema Data Extraction', 'Duplicate Prevention Database', 'Dynamic Multi-Tier Slack Approvals'],
    tags: ['n8n', 'GPT-4o-mini', 'Gmail API', 'Slack API', 'Google Sheets', 'OCR Parser'],
    category: 'automation',
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'bluenav-web',
    emoji: '📖',
    title: 'BlueNav – Full Stack Novel Reading Platform',
    badge: 'Full Stack React & Node',
    categoryBadge: 'Web App',
    categoryColor: '#6366f1',
    description: 'A responsive full-stack dark-theme web reading platform with user bookmarking, progress tracking, custom-tailored typography reader settings, and a high-speed Node.js / Express API backend.',
    highlights: ['Custom Typography & Reader Engine', 'Progress & Bookmark Sync', 'High-Speed Express REST API'],
    tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'Vercel', 'REST API'],
    category: 'web',
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'n8n-story-gen',
    image: '/images/workflow-social-media.png',
    title: 'Autonomous Kids Story Publishing Pipeline (n8n)',
    badge: 'Cron Content Pipeline',
    categoryBadge: 'AI Automation',
    categoryColor: '#00f5a0',
    description: 'A recurring cron-triggered publishing engine in n8n. Generates narrative scripts using Claude, translates to Urdu, synthesizes voiceovers via TTS, generates scene illustrations with DALL-E 3, and uploads to Drive.',
    highlights: ['Claude Narrative Generator', 'DALL-E 3 Scene Generation', 'TTS Voiceover & Drive Auto-Upload'],
    tags: ['n8n', 'Claude API', 'DALL-E 3', 'TTS API', 'Google Drive', 'Automation'],
    category: 'automation',
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'n8n-whatsapp',
    image: '/images/workflow-whatsapp.png',
    title: 'Intelligent WhatsApp Customer AI Agent (n8n)',
    badge: 'Live WhatsApp Bot',
    categoryBadge: 'AI Automation',
    categoryColor: '#00f5a0',
    description: 'Automated WhatsApp business assistant. Ingests customer queries, maintains conversational context across sessions in memory databases, resolves questions via LLMs, and triggers live agent handoffs in Slack.',
    highlights: ['Persistent Session Memory', 'LLM Business Logic Resolution', 'Slack Live Agent Handoff'],
    tags: ['n8n', 'WhatsApp API', 'LLM Agent', 'Chat Memory', 'Slack Webhooks'],
    category: 'automation',
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'n8n-image-cluster',
    image: '/images/workflow-image-clustering.png',
    title: 'High-Scale Image Clustering & Embedding Pipeline (n8n)',
    badge: 'Vector Embeddings Pipeline',
    categoryBadge: 'AI Automation',
    categoryColor: '#00f5a0',
    description: 'High-scale media asset processing workflow. Monitors media uploads, converts images to vector embeddings using OpenAI CLIP, and writes vectors to ChromaDB to enable similarity search and clustering.',
    highlights: ['OpenAI CLIP Multi-Modal Vectors', 'ChromaDB Vector Store', 'Automated Image Deduplication'],
    tags: ['n8n', 'Vector Embeddings', 'OpenAI CLIP', 'ChromaDB', 'Metadata Scraper'],
    category: 'automation',
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'n8n-shopify-odoo',
    image: '/images/workflow-shopify-odoo.png',
    title: 'Shopify-to-Odoo ERP Bi-Directional Sync (n8n)',
    badge: 'Enterprise ERP Sync',
    categoryBadge: 'AI Automation',
    categoryColor: '#00f5a0',
    description: 'Enterprise data integration pipeline. Synchronizes Shopify e-commerce orders, customer profiles, and product inventory levels with Odoo ERP dynamically, featuring robust webhook retry logic and failure alerts.',
    highlights: ['Bi-Directional Order & Stock Sync', 'Webhook Retry & Dead-Letter Queue', 'Real-time Telegram Failure Alerts'],
    tags: ['n8n', 'Shopify API', 'Odoo ERP', 'CRM Sync', 'Data Integrity'],
    category: 'automation',
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'app-cafeshop',
    image: '/images/app-cafeshop.png',
    title: 'Cafe Shop – Modern Mobile Ordering App',
    badge: 'Flutter Mobile App',
    categoryBadge: 'Mobile App',
    categoryColor: '#00d2ff',
    description: 'E-commerce Flutter application for a coffee shop chain. Features catalog browsing, order customization, delivery mode toggles, and payment checkout, built with a premium dark design.',
    highlights: ['Cart & Order Customizer', 'Real-time Order State Management', 'Fluid Flutter Animations'],
    tags: ['Flutter', 'Dart', 'Firebase', 'State Management', 'Mobile UI'],
    category: 'mobile',
    links: [
      { href: 'https://github.com/NomiDevx/Coffee-Shop-Flutter-application', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
      { href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share', label: 'Hire on Upwork', primary: true, icon: <SiUpwork size={13} /> },
    ],
  },
  {
    id: 'app-fitbody',
    image: '/images/app-fitbody.png',
    title: 'FitBody – Health & Workout Tracking Platform',
    badge: 'Flutter Health App',
    categoryBadge: 'Mobile App',
    categoryColor: '#00d2ff',
    description: 'A comprehensive fitness tracking dashboard with personalized workout plans, diet monitoring, community chat groups, weekly challenges, and a local SQL database for offline performance.',
    highlights: ['Offline SQLite Database Storage', 'Personalized Routine Generator', 'Community Health Dashboard'],
    tags: ['Flutter', 'Dart', 'Local SQL', 'Provider', 'Health Dashboard'],
    category: 'mobile',
    links: [
      { href: 'https://github.com/NomiDevx/Fit-Body-Fitness-App', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
  {
    id: 'app-ideapress',
    image: '/images/app-ideapress.png',
    title: 'IdeaPress – AI Startup Idea Validator',
    badge: 'Flutter AI App',
    categoryBadge: 'Mobile App',
    categoryColor: '#00d2ff',
    description: 'A startup validation platform where users submit business concepts and instantly receive LLM-powered ratings, potential feasibility predictions, and market gap assessments.',
    highlights: ['Automated Feasibility Scoring', 'Market Gap Analysis Matrix', 'Firebase Cloud Sync'],
    tags: ['Flutter', 'OpenAI SDK', 'Firebase', 'Startup Feasibility'],
    category: 'mobile',
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub Repo', icon: <FiGithub size={13} /> },
    ],
  },
];

function HeroProjectCard({ project, onWatchVideo }) {
  return (
    <div
      className="hero-project-card"
      style={{ '--hero-card-color': project.categoryColor }}
    >
      <div className="hero-card-media-col">
        <div className="hero-media-wrapper">
          <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
          <div className="hero-media-overlay" />
          <span className="hero-category-pill" style={{ color: project.categoryColor }}>
            {project.categoryBadge}
          </span>
          {project.video && (
            <button
              className="hero-play-pulse-btn"
              onClick={() => onWatchVideo(project.video)}
              aria-label="Play demo video"
              title="Watch Demo Video"
            >
              <FiPlay size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="hero-card-content-col">
        <div className="hero-badge-row">
          <span className="hero-arch-badge">{project.badge}</span>
        </div>

        <h3 className="hero-card-title">{project.title}</h3>
        <p className="hero-card-description">{project.description}</p>

        <div className="hero-highlights-list">
          {project.highlights.map((h) => (
            <div key={h} className="hero-highlight-item">
              <FiCheck size={14} style={{ color: project.categoryColor }} />
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="hero-tags-row">
          {project.tags.map((t) => (
            <span key={t} className="project-tech-pill">{t}</span>
          ))}
        </div>

        <div className="hero-action-row">
          {project.video && (
            <button
              onClick={() => onWatchVideo(project.video)}
              className="project-action-btn primary"
            >
              <FiVideo size={14} /> Watch Demo Video
            </button>
          )}
          {project.links.map(({ href, label, primary, icon }) => (
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

function GridProjectCard({ project, onWatchVideo }) {
  return (
    <div
      className="grid-project-card"
      style={{ '--card-accent': project.categoryColor || '#00f5a0' }}
    >
      <div className="grid-card-media">
        {project.image ? (
          <>
            <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
            <div className="grid-media-overlay" />
          </>
        ) : (
          <div className="grid-emoji-cover">{project.emoji}</div>
        )}
        <span className="grid-category-tag" style={{ color: project.categoryColor }}>
          {project.categoryBadge || 'Project'}
        </span>
      </div>

      <div className="grid-card-body">
        <span className="grid-arch-sub">{project.badge}</span>
        <h4 className="grid-card-heading">{project.title}</h4>
        <p className="grid-card-text">{project.description}</p>

        {project.highlights && (
          <div className="grid-card-highlights">
            {project.highlights.slice(0, 2).map((h) => (
              <div key={h} className="grid-highlight-bullet">
                <FiCheck size={12} style={{ color: project.categoryColor }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}

        <div className="grid-tags-wrap">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="project-tech-pill">{t}</span>
          ))}
        </div>

        <div className="grid-footer-actions">
          {project.links.map(({ href, label, primary, icon }) => (
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
  const [searchQuery, setSearchQuery] = useState('');
  const [videoSrc, setVideoSrc] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: PROJECTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = PROJECTS.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const heroProjects = filteredProjects.filter((p) => p.isHero);
  const regularProjects = filteredProjects.filter((p) => !p.isHero);
  const visibleRegular = showAll ? regularProjects : regularProjects.slice(0, 6);

  return (
    <>
      <style>{`
        #projects {
          background: var(--bg-secondary);
          position: relative;
        }

        /* Search & Filter Header */
        .projects-control-panel {
          max-width: 1240px;
          margin: 0 auto 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: center;
        }

        .projects-search-box {
          position: relative;
          width: 100%;
          max-width: 460px;
        }
        .projects-search-input {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 10px 18px 10px 42px;
          color: var(--text-primary);
          font-size: 0.88rem;
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .projects-search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .projects-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        /* Filter Tab Bar */
        .projects-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.55rem;
          flex-wrap: wrap;
        }
        .filter-tab-pill {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 9px 18px;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 8px;
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
        .tab-count-badge {
          font-size: 0.72rem;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.25);
          font-weight: 700;
        }

        /* ── Hero Showcase Cards ── */
        .hero-projects-container {
          max-width: 1240px;
          margin: 0 auto 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .hero-project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          overflow: hidden;
          box-shadow: var(--shadow-elevated);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position: relative;
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .hero-project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--hero-card-color, var(--gradient-accent));
          box-shadow: 0 0 16px var(--hero-card-color, var(--accent-glow));
        }
        .hero-project-card:hover {
          border-color: var(--hero-card-color, var(--accent-cyan));
          transform: translateY(-5px);
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.6);
        }

        .hero-card-media-col {
          position: relative;
          background: var(--bg-primary);
          overflow: hidden;
          min-height: 280px;
        }
        .hero-media-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .hero-media-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-project-card:hover .hero-media-wrapper img {
          transform: scale(1.05);
        }
        .hero-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, var(--bg-card) 100%);
          opacity: 0.6;
        }
        .hero-category-pill {
          position: absolute;
          top: 16px; left: 16px;
          background: var(--nav-bg);
          border: 1px solid var(--border);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
          z-index: 3;
        }

        .hero-play-pulse-btn {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 58px; height: 58px;
          border-radius: 50%;
          background: var(--gradient-accent);
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 25px var(--accent-glow), 0 0 50px var(--accent-glow);
          z-index: 4;
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .hero-play-pulse-btn:hover {
          transform: translate(-50%, -50%) scale(1.15);
          box-shadow: 0 0 35px var(--accent-glow), 0 0 70px var(--cyan-glow);
        }

        .hero-card-content-col {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-badge-row {
          margin-bottom: 0.65rem;
        }
        .hero-arch-badge {
          font-size: 0.76rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .hero-card-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .hero-card-description {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .hero-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.35rem;
        }
        .hero-highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .hero-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .hero-action-row {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
          margin-top: auto;
        }

        @media (max-width: 960px) {
          .hero-project-card {
            grid-template-columns: 1fr;
          }
          .hero-card-media-col {
            min-height: 220px;
          }
          .hero-card-content-col {
            padding: 1.6rem 1.4rem;
          }
        }

        /* ── Grid of Regular Projects ── */
        .projects-regular-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1240px;
          margin: 0 auto;
        }
        @media (max-width: 1080px) {
          .projects-regular-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 720px) {
          .projects-regular-grid { grid-template-columns: 1fr; }
        }

        .grid-project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: var(--shadow-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .grid-project-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--card-accent, var(--gradient-accent));
          opacity: 0;
          transition: opacity var(--transition);
        }
        .grid-project-card:hover {
          border-color: var(--card-accent, var(--accent-cyan));
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.4);
        }
        .grid-project-card:hover::after { opacity: 1; }

        .grid-card-media {
          position: relative;
          width: 100%;
          height: 180px;
          background: var(--bg-primary);
          overflow: hidden;
        }
        .grid-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .grid-project-card:hover .grid-card-media img {
          transform: scale(1.06);
        }
        .grid-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, var(--bg-card) 100%);
          opacity: 0.65;
        }
        .grid-emoji-cover {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 3.8rem;
          background: var(--accent-glow2);
        }
        .grid-category-tag {
          position: absolute;
          top: 12px; right: 12px;
          background: var(--nav-bg);
          border: 1px solid var(--border);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          z-index: 3;
        }

        .grid-card-body {
          padding: 1.4rem 1.4rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .grid-arch-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
        .grid-card-heading {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.6rem;
        }
        .grid-card-text {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.1rem;
          flex: 1;
        }
        .grid-card-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1.1rem;
        }
        .grid-highlight-bullet {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-primary);
        }
        .grid-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
        }

        .project-tech-pill {
          background: var(--tag-bg);
          border: 1px solid var(--tag-border);
          border-radius: var(--radius-full);
          color: var(--tag-text);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 9px;
        }

        .grid-footer-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .project-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 7px 15px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
          color: var(--text-primary);
          background: var(--bg-card);
          text-decoration: none;
          cursor: pointer;
          transition: all var(--transition);
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

        /* Video Modal */
        .video-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.25rem;
        }
        .video-modal-body {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          max-width: 880px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8);
          overflow: hidden;
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
      `}</style>

      <section id="projects">
        <div className="container">
          <div className="reveal">
            <SectionTitle
              overline="Engineering Portfolio"
              title="Featured <span class='accent-word'>Projects</span>"
              subtitle="Production multi-agent frameworks, enterprise workflow automations, and scalable mobile & web applications."
            />
          </div>

          {/* Control Panel: Search & Filter Tabs */}
          <div className="projects-control-panel reveal">
            <div className="projects-search-box">
              <FiSearch className="projects-search-icon" size={16} />
              <input
                type="text"
                placeholder="Search projects (e.g. LangGraph, n8n, Flutter, Python)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="projects-search-input"
              />
            </div>

            <div className="projects-filter-bar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-tab-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span className="tab-count-badge">{categoryCounts[cat.id] || 0}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hero Featured Cards */}
          {heroProjects.length > 0 && (
            <div className="hero-projects-container reveal">
              {heroProjects.map((p) => (
                <HeroProjectCard key={p.id} project={p} onWatchVideo={setVideoSrc} />
              ))}
            </div>
          )}

          {/* Regular Projects Grid */}
          {visibleRegular.length > 0 ? (
            <div className="projects-regular-grid reveal">
              {visibleRegular.map((p) => (
                <GridProjectCard key={p.id} project={p} onWatchVideo={setVideoSrc} />
              ))}
            </div>
          ) : (
            heroProjects.length === 0 && (
              <div className="reveal" style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                <p>No projects match your search criteria.</p>
              </div>
            )
          )}

          {regularProjects.length > 6 && (
            <div className="reveal" style={{ textAlign: 'center', marginTop: '2.75rem' }}>
              <button
                className="btn-accent"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less Projects' : `View All ${filteredProjects.length} Projects`}
              </button>
            </div>
          )}

          <div className="projects-footer-cta reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <a
              href="https://github.com/NomiDevx"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FiGithub /> Explore All 15+ Repositories on GitHub <FiArrowRight size={14} />
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
