import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { FiExternalLink, FiGithub, FiPlay, FiX } from 'react-icons/fi';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile', label: 'Mobile Apps (Flutter)' },
  { id: 'ai-agents', label: 'AI Agents (LangGraph/CrewAI)' },
  { id: 'automation', label: 'n8n Automations' }
];

const PROJECTS = [
  {
    image: '/images/workflow-customer-support.png',
    title: 'AI-Driven Customer Support Triage (n8n)',
    description: 'An advanced multi-agent customer support workflow. Ingests incoming tickets, automatically classifies intent and urgency with LLMs, retrieves relevant matching documentation from a Vector DB, drafts responses, and routes high-urgency tasks to human agents via Slack with pre-filled drafts.',
    tags: ['n8n', 'Vector DB', 'LLM Classifier', 'Slack API', 'Customer Support'],
    category: 'automation',
    featured: true,
    span: 2,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/langgraph-job-search-1.png',
    title: 'Autonomous Job Search Agent (LangGraph)',
    description: 'A multi-stage LangGraph agent designed to completely automate the job application funnel. Reads profile details, scrapes and searches active job boards, calculates cosine similarity against a vector database of my experience, drafts customized cover letters, and sends formatted listings to a dedicated Slack channel.',
    tags: ['LangGraph', 'Python', 'Vector DB', 'Slack API', 'Agentic AI'],
    category: 'ai-agents',
    video: '/videos/job-search-agent.mp4',
    featured: true,
    span: 2,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/app-scanova.png',
    title: 'Scanova – AI Image Scanner',
    description: 'AI-powered image recognition mobile app. Users scan, automatically categorize, and chat contextually about any photo. Features a smart gallery, real-time AI Q&A, and interactive category exploration.',
    tags: ['Flutter', 'AI / OpenAI', 'Dart', 'Firebase'],
    category: 'mobile',
    featured: true,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/Scanova-imageDetection', label: 'GitHub', icon: <FiGithub size={13} /> },
      { href: 'https://www.fiverr.com/s/DBvdoDa', label: 'Hire Me', primary: true, icon: <SiFiverr size={13} /> },
    ],
  },
  {
    image: '/images/crewai-medical.png',
    title: 'Medical Research Intelligence System (CrewAI)',
    description: 'A high-performance CrewAI system with six specialized agents that automates literature reviews. Ingests data from PubMed & Semantic Scholar APIs, runs medical cross-referencing, maps research citations, and generates verified research reports with complete citations.',
    tags: ['CrewAI', 'DeepSeek', 'Python', 'PubMed API', 'Literature Review'],
    category: 'ai-agents',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/-Medical-Research-Intelligence-System', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/crewai-financial.png',
    title: 'Financial Market Analysis System (CrewAI)',
    description: 'Multi-agent financial analyst team built using CrewAI and DeepSeek. Features specialized agents executing stock evaluations, querying real-time market sentiment APIs, performing trend analysis, and outputting PDF report formats.',
    tags: ['CrewAI', 'DeepSeek', 'Python', 'Market Sentiment', 'PDF Generator'],
    category: 'ai-agents',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/Financial-Researcher-Muilti-Agent-CrewAI-', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/crewai-stock.png',
    title: 'Stock Predictor Multi-Agent (CrewAI)',
    description: 'Collaborative multi-agent system built with CrewAI. Coordinates a Market Researcher agent, a Quantitative Analyst agent, and a Financial Report Writer agent to evaluate stock trends and perform predictive modeling.',
    tags: ['CrewAI', 'DeepSeek', 'Python', 'Financial Analysis', 'Agents'],
    category: 'ai-agents',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-product-launch.png',
    title: 'AI Invoice Processing & Approval (n8n)',
    description: 'Autonomous accounts payable pipeline. Automatically monitors a Gmail inbox for bills, extracts schema-validated invoice data using a GPT-4o-mini LangChain agent, checks for duplicates, and routes invoices dynamically based on total amount for Slack approvals.',
    tags: ['n8n', 'GPT-4o-mini', 'Gmail API', 'Slack API', 'Google Sheets'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-social-media.png',
    title: 'Kids Story Generation & Publishing (n8n)',
    description: 'A recurring cron-triggered content generator running every 12 hours. Generates creative stories using Claude, translates to Urdu, creates TTS narrations and DALL-E illustrations, uploads to Google Drive, and alerts Slack/Gmail.',
    tags: ['n8n', 'Claude API', 'DALL-E 3', 'TTS API', 'Google Drive'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-whatsapp.png',
    title: 'Intelligent WhatsApp AI Agent (n8n)',
    description: 'Automated WhatsApp business assistant. Ingests chat messages, maintains context and user profiles in memory databases, processes requests using LLM nodes, and alerts support teams via Slack for human handoff.',
    tags: ['n8n', 'WhatsApp API', 'LLM Agent', 'Chat Memory', 'Slack Integration'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-image-clustering.png',
    title: 'Image Clustering & Embedding Pipeline (n8n)',
    description: 'High-scale media asset processing workflow. Automatically monitors media uploads, converts images to vector embeddings using OpenAI CLIP, and writes vectors to ChromaDB to enable similarity search and clustering.',
    tags: ['n8n', 'Vector Embeddings', 'OpenAI CLIP', 'ChromaDB', 'Metadata Scraper'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-shopify-odoo.png',
    title: 'Shopify-to-Odoo CRM Synchronization (n8n)',
    description: 'Enterprise data integration pipeline. Synchronizes Shopify e-commerce orders, customer profiles, and product stock levels with Odoo ERP dynamically, featuring robust webhook retry logic and Slack failure notifications.',
    tags: ['n8n', 'Shopify API', 'Odoo ERP', 'CRM Synchronization', 'Data Integrity'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-slack-clickup.png',
    title: 'Slack-to-ClickUp Task Automation (n8n)',
    description: 'Internal operations pipeline. Automatically triggers task creation, categorization, and assignee assignment in ClickUp whenever a specific emoji reaction is added to messages in project Slack channels.',
    tags: ['n8n', 'Slack Webhooks', 'ClickUp API', 'Team Operations', 'Task Automation'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-twitter-slack.png',
    title: 'Twitter Mention Sentiment Tracker (n8n)',
    description: 'Real-time brand listening workflow. Monitores Twitter (X) for brand mentions, triggers sentiment classification via LLMs, and flags negative sentiment posts directly to customer support teams on Slack.',
    tags: ['n8n', 'Twitter API', 'Sentiment Analysis', 'Slack Notifier', 'Customer Care'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-youtube-telegram.png',
    title: 'YouTube to Telegram Broadcaster (n8n)',
    description: 'Automated content syndication workflow. Detects new YouTube uploads via RSS feeds, generates engaging summaries using AI, maps video titles, and publishes stylized notification cards to Telegram channels.',
    tags: ['n8n', 'YouTube RSS', 'Telegram Bot API', 'AI Summarization', 'Media Distribution'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-social-media.png',
    title: 'Social Media Prompt Parser (n8n)',
    description: 'Inbound content automation system. Accepts dynamic text prompts from web forms, parses variables against strict content schemas using code nodes, and publishes structured marketing copy to multiple social channels.',
    tags: ['n8n', 'Schema Parser', 'Dynamic Prompts', 'Social Publishing', 'Validation Nodes'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/workflow-product-launch.png',
    title: 'Multi-Channel Product Notifier (n8n)',
    description: 'Marketing deployment automation. Orchestrates simultaneous product launch notifications across email (Gmail), team channels (Slack), and user groups (Telegram) with customized template assets.',
    tags: ['n8n', 'Product Launch', 'Multi-Channel Push', 'Email Marketing', 'Integrations'],
    category: 'automation',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/app-cafeshop.png',
    title: 'Cafe Shop – Coffee Ordering App',
    description: 'E-commerce Flutter application for a coffee shop chain. Features catalog browsing, order customization, delivery mode toggles, and payment checkout, built with a premium dark HSL design.',
    tags: ['Flutter', 'Dart', 'Firebase', 'State Management'],
    category: 'mobile',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/Coffee-Shop-Flutter-application', label: 'GitHub', icon: <FiGithub size={13} /> },
      { href: 'https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share', label: 'Upwork', primary: true, icon: <SiUpwork size={13} /> },
    ],
  },
  {
    image: '/images/app-fitbody.png',
    title: 'FitBody – Fitness & Nutrition App',
    description: 'A comprehensive fitness tracking dashboard with personalized workout plans, diet monitoring, community chat groups, weekly challenges, and a local SQL database for offline performance.',
    tags: ['Flutter', 'Dart', 'SQL', 'State Management'],
    category: 'mobile',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx/Fit-Body-Fitness-App', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    image: '/images/app-ideapress.png',
    title: 'IdeaPress – AI Idea Validator',
    description: 'A startup validation platform where users submit business ideas and instantly receive LLM-powered ratings, potential feasibility predictions, and market gap assessments.',
    tags: ['Flutter', 'OpenAI SDK', 'Firebase', 'Business Feasibility'],
    category: 'mobile',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    emoji: '📖',
    title: 'BlueNav – Novel Reading Platform',
    description: 'A responsive full-stack dark-theme novel reading platform. Features bookmarking, user reading progression tracking, custom-tailored reader UI settings, and a fast Node.js/MySQL api backend.',
    tags: ['React', 'Node.js', 'MySQL', 'Vercel'],
    category: 'mobile',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'GitHub', icon: <FiGithub size={13} /> },
    ],
  },
  {
    emoji: '📱',
    title: '12+ More Mobile Apps',
    description: 'A collection of production-ready Flutter and Android apps covering productivity tools, social networks, utility apps, and fintech dashboards published on github.',
    tags: ['Flutter', 'Dart', 'Android', 'Firebase', 'API Integrations'],
    category: 'mobile',
    featured: false,
    span: 1,
    links: [
      { href: 'https://github.com/NomiDevx', label: 'View All on GitHub', primary: true, icon: <FiGithub size={13} /> },
    ],
  },
];

function ProjectCard({ image, emoji, title, description, tags, links, featured, span, video, onWatchVideo }) {
  return (
    <div className={`project-card${span === 2 ? ' project-card-wide' : ''}`}>
      {featured && <span className="project-badge">⭐ Featured</span>}

      <div className="project-img-wrap">
        {image ? (
          <>
            <img src={image} alt={`${title} screenshot`} loading="lazy" />
            <div className="project-img-overlay" />
          </>
        ) : (
          <div className="project-emoji">{emoji}</div>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((t) => <span className="project-tag" key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          {video && (
            <button
              onClick={() => onWatchVideo(video)}
              className="project-link-btn primary"
              style={{ cursor: 'pointer', border: 'none', outline: 'none' }}
            >
              <FiPlay size={13} /> Demo Video
            </button>
          )}
          {links.map(({ href, label, primary, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`project-link-btn${primary ? ' primary' : ''}`}
            >
              {icon}{label}
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

  // Reset showAll when switching categories to avoid layout confusion
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setShowAll(false);
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 7);

  return (
    <>
      <style>{`
        #projects { background: var(--bg-secondary); }

        .projects-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          padding: 0 1.5rem;
        }
        .tab-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 9px 20px;
          border-radius: var(--radius-full);
          font-size: 0.86rem;
          font-weight: 600;
          cursor: pointer;
          transition: background var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
        }
        .tab-btn:hover {
          border-color: rgba(6,182,212,0.3);
          color: var(--text-primary);
          background: rgba(6,182,212,0.03);
        }
        .tab-btn.active {
          background: var(--gradient-accent);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(124,58,237,0.3);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .project-card-wrap {
          animation: cardFadeIn 0.5s ease forwards;
        }

        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: 1fr 1fr; }
          .project-card-wide { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .bento-grid { grid-template-columns: 1fr; }
          .project-card-wide { grid-column: span 1; }
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          height: 100%;
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .project-card-wide { grid-column: span 2; }
        .project-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-accent);
          opacity: 0;
          transition: opacity var(--transition);
        }
        .project-card:hover {
          border-color: rgba(124,58,237,0.45);
          transform: translateY(-7px);
          box-shadow: 0 20px 60px rgba(124,58,237,0.18);
        }
        .project-card:hover::after { opacity: 1; }

        .project-badge {
          position: absolute;
          top: 12px; right: 12px;
          background: var(--gradient-accent);
          color: #fff;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          z-index: 3;
        }

        .project-img-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: var(--bg-secondary);
          flex-shrink: 0;
        }
        .project-card-wide .project-img-wrap { height: 240px; }

        .project-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s ease;
        }
        .project-card:hover .project-img-wrap img { transform: scale(1.06); }

        .project-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.95) 100%);
        }
        .project-emoji {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 4.5rem;
          background: linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.08));
        }

        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }
        .project-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.7;
          flex: 1;
          margin-bottom: 1rem;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.1rem;
        }
        .project-tag {
          background: rgba(124,58,237,0.08);
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: var(--radius-full);
          color: #c4b5fd;
          font-size: 0.68rem;
          font-weight: 600;
          padding: 2px 9px;
        }
        .project-links {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.79rem;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-secondary);
          background: transparent;
          text-decoration: none;
          transition: border-color var(--transition), color var(--transition), background var(--transition), transform var(--transition);
        }
        .project-link-btn:hover {
          border-color: rgba(6,182,212,0.4);
          color: var(--accent-cyan);
          background: rgba(6,182,212,0.06);
          transform: translateY(-2px);
        }
        .project-link-btn.primary {
          background: var(--gradient-accent);
          border-color: transparent;
          color: #fff;
        }
        .project-link-btn.primary:hover {
          opacity: 0.88;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(124,58,237,0.4);
        }

        .projects-cta {
          text-align: center;
          margin-top: 2.5rem;
        }

        /* Video Modal Styles */
        .video-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
          animation: modalFadeIn 0.3s ease;
        }
        .video-modal-container {
          background: var(--bg-secondary);
          border: 1px solid rgba(124,58,237,0.3);
          border-radius: var(--radius-lg);
          max-width: 900px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(124,58,237,0.15);
          overflow: hidden;
          animation: modalScaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .video-modal-close {
          position: absolute;
          top: 14px; right: 14px;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          width: 38px; height: 38px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background var(--transition), border-color var(--transition), transform var(--transition);
          z-index: 10;
        }
        .video-modal-close:hover {
          background: rgba(124,58,237,0.4);
          border-color: rgba(124,58,237,0.5);
          transform: rotate(90deg);
        }
        .video-modal-player-wrap {
          width: 100%;
          aspect-ratio: 16/9;
          background: #000;
        }
        .video-modal-player {
          width: 100%; height: 100%;
          display: block;
        }
        .video-modal-info {
          padding: 1.5rem 2rem;
          border-top: 1px solid var(--border);
        }
        .video-modal-info h3 {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .video-modal-info p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScaleUp {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 640px) {
          .video-modal-overlay { padding: 0.75rem; }
          .video-modal-info { padding: 1.25rem 1rem; }
          .video-modal-info h3 { font-size: 1.1rem; }
          .video-modal-info p { font-size: 0.8rem; }
        }
      `}</style>

      <section id="projects">
        <div className="container-fluid px-0">
          <div className="reveal">
            <SectionTitle
              overline="Things I've built"
              title="My <span class='accent-word'>Projects</span>"
              subtitle="A selection of things I've built — from AI-powered agents to production-ready automation workflows."
            />
          </div>

          <div className="projects-tabs reveal">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="bento-grid">
            {visibleProjects.map((p, i) => (
              <div
                key={p.title}
                className={`project-card-wrap${p.span === 2 ? ' project-card-wide' : ''}`}
              >
                <ProjectCard {...p} onWatchVideo={setVideoSrc} />
              </div>
            ))}
          </div>

          {filteredProjects.length > 7 && (
            <div className="projects-view-more reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button
                className="btn-accent"
                onClick={() => setShowAll(!showAll)}
                style={{ cursor: 'pointer', border: 'none' }}
              >
                {showAll ? 'Show Less Projects' : 'View More Projects'}
              </button>
            </div>
          )}

          <div className="projects-cta reveal">
            <a
              href="https://github.com/NomiDevx"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FiGithub /> View More on GitHub
            </a>
          </div>
        </div>
      </section>

      {videoSrc && (
        <div className="video-modal-overlay" onClick={() => setVideoSrc(null)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setVideoSrc(null)} aria-label="Close video">
              <FiX size={20} />
            </button>
            <div className="video-modal-player-wrap">
              <video src={videoSrc} controls autoPlay className="video-modal-player" />
            </div>
            <div className="video-modal-info">
              <h3>LangGraph Job Search Agent - Demo Video</h3>
              <p>Watch how the multi-stage LangGraph agent scans boards, evaluates compatibility, drafts cover letters, and triggers real-time Slack alerts.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
