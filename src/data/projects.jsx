import { FiGithub } from "react-icons/fi";
import { SiFiverr, SiUpwork } from "react-icons/si";
export const PROJECTS = [
  {
    id: "langgraph-job-agent",
    image: "/images/langgraph-job-search-1.png",
    title: "Autonomous Job Search Agent (LangGraph & Python)",
    badge: "LangGraph State Graph",
    categoryBadge: "Agentic AI",
    categoryColor: "#8b5cf6",
    description:
      "A multi-stage autonomous LangGraph agent that automates the job application pipeline. Scrapes job boards, executes vector cosine similarity matching against candidate memory, auto-drafts personalized cover letters, and dispatches rich Slack notifications.",
    highlights: [
      "Multi-Stage LangGraph State Machine",
      "Vector Cosine Similarity Matching",
      "Auto-Drafted Cover Letters",
      "Slack Real-time Alerts",
    ],
    tags: [
      "LangGraph",
      "Python",
      "Vector DB",
      "Slack API",
      "OpenAI",
      "Agentic AI",
    ],
    category: "agentic-ai",
    isHero: true,
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        primary: true,
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "n8n-customer-support",
    image: "/images/workflow-customer-support.png",
    title: "AI Customer Support Triage & Auto-Routing (n8n)",
    badge: "Autonomous Ticket Triage",
    categoryBadge: "AI Automation",
    categoryColor: "#00f5a0",
    description:
      "Autonomous multi-agent customer support workflow. Ingests incoming tickets, classifies intent and urgency via LLMs, retrieves documentation from Vector DB, drafts empathetic responses, and routes escalations to Slack.",
    highlights: [
      "Multi-Agent Support Engine",
      "Intent & Urgency Classification",
      "Vector Knowledge Retrieval",
      "Slack Smart Escalations",
    ],
    tags: [
      "n8n",
      "Vector DB",
      "LLM Classifier",
      "Slack API",
      "Customer Support",
      "Automation",
    ],
    category: "automation",
    isHero: true,
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        primary: true,
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "crewai-medical",
    image: "/images/crewai-medical.png",
    title: "Medical Research Intelligence System (CrewAI)",
    badge: "6-Agent CrewAI Swarm",
    categoryBadge: "Agentic AI",
    categoryColor: "#8b5cf6",
    description:
      "Coordinating six specialized AI agents to automate medical literature reviews. Fetches PubMed & Semantic Scholar data, validates cross-references, maps citations, and generates clinical research summaries.",
    highlights: [
      "6 Specialized Autonomous Agents",
      "PubMed & Semantic Scholar API",
      "Citation & Cross-Reference Mapping",
    ],
    tags: [
      "CrewAI",
      "DeepSeek",
      "Python",
      "PubMed API",
      "Literature Review",
      "Multi-Agent",
    ],
    category: "agentic-ai",
    links: [
      {
        href: "https://github.com/NomiDevx/-Medical-Research-Intelligence-System",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "app-scanova",
    image: "/images/app-scanova.png",
    title: "Scanova – AI Vision & Object Detection App",
    badge: "AI Vision Mobile App",
    categoryBadge: "Mobile App",
    categoryColor: "#00d2ff",
    description:
      "AI-powered image recognition and contextual analysis mobile application. Users scan any object or document to receive instant classification, real-time AI conversational Q&A, and smart gallery categorization.",
    highlights: [
      "On-Device Computer Vision",
      "Real-Time Conversational AI Q&A",
      "Clean Provider State Management",
    ],
    tags: ["Flutter", "OpenAI Vision API", "Dart", "Firebase", "Mobile UI"],
    category: "mobile",
    links: [
      {
        href: "https://github.com/NomiDevx/Scanova-imageDetection",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
      {
        href: "https://www.fiverr.com/s/DBvdoDa",
        label: "Hire on Fiverr",
        primary: true,
        icon: <SiFiverr size={13} />,
      },
    ],
  },
  {
    id: "crewai-financial",
    image: "/images/crewai-financial.png",
    title: "Financial Market Intelligence Swarm (CrewAI)",
    badge: "Multi-Agent Financial Team",
    categoryBadge: "Agentic AI",
    categoryColor: "#8b5cf6",
    description:
      "Multi-agent financial analyst team built using CrewAI and DeepSeek. Features specialized agents performing stock evaluations, querying real-time market sentiment APIs, conducting technical trend analysis, and generating PDF reports.",
    highlights: [
      "Sentiment Analysis API Integrations",
      "Technical Trend Modeling",
      "Automated PDF Report Synthesis",
    ],
    tags: [
      "CrewAI",
      "DeepSeek",
      "Python",
      "Market Sentiment",
      "PDF Generator",
      "Financial AI",
    ],
    category: "agentic-ai",
    links: [
      {
        href: "https://github.com/NomiDevx/Financial-Researcher-Muilti-Agent-CrewAI-",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "crewai-stock",
    image: "/images/crewai-stock.png",
    title: "Autonomous Stock Trend Predictor (CrewAI)",
    badge: "Quantitative AI Crew",
    categoryBadge: "Agentic AI",
    categoryColor: "#8b5cf6",
    description:
      "Collaborative multi-agent framework built with CrewAI. Coordinates a Market Researcher agent, Quantitative Analyst agent, and Financial Report Writer agent to evaluate trend momentum and execute predictive modeling.",
    highlights: [
      "Quantitative Algorithmic Swarm",
      "Predictive Momentum Modeling",
      "DeepSeek Reasoning Integration",
    ],
    tags: ["CrewAI", "DeepSeek", "Python", "Predictive Modeling", "Agents"],
    category: "agentic-ai",
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "n8n-invoice",
    image: "/images/workflow-product-launch.png",
    title: "Autonomous Accounts Payable & Invoice Triage (n8n)",
    badge: "Enterprise Invoice Pipeline",
    categoryBadge: "AI Automation",
    categoryColor: "#00f5a0",
    description:
      "Autonomous financial pipeline in n8n. Ingests incoming invoices from Gmail, extracts schema-validated structured data with GPT-4o-mini, detects duplicates, and executes threshold-based Slack approvals.",
    highlights: [
      "OCR Schema Data Extraction",
      "Duplicate Prevention Database",
      "Dynamic Multi-Tier Slack Approvals",
    ],
    tags: [
      "n8n",
      "GPT-4o-mini",
      "Gmail API",
      "Slack API",
      "Google Sheets",
      "OCR Parser",
    ],
    category: "automation",
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "bluenav-web",
    emoji: "📖",
    title: "BlueNav – Full Stack Novel Reading Platform",
    badge: "Full Stack React & Node",
    categoryBadge: "Web App",
    categoryColor: "#6366f1",
    description:
      "A responsive full-stack dark-theme web reading platform with user bookmarking, progress tracking, custom-tailored typography reader settings, and a high-speed Node.js / Express API backend.",
    highlights: [
      "Custom Typography & Reader Engine",
      "Progress & Bookmark Sync",
      "High-Speed Express REST API",
    ],
    tags: ["React.js", "Node.js", "Express", "MySQL", "Vercel", "REST API"],
    category: "web",
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "n8n-story-gen",
    image: "/images/workflow-social-media.png",
    title: "Autonomous Kids Story Publishing Pipeline (n8n)",
    badge: "Cron Content Pipeline",
    categoryBadge: "AI Automation",
    categoryColor: "#00f5a0",
    description:
      "A recurring cron-triggered publishing engine in n8n. Generates narrative scripts using Claude, translates to Urdu, synthesizes voiceovers via TTS, generates scene illustrations with DALL-E 3, and uploads to Drive.",
    highlights: [
      "Claude Narrative Generator",
      "DALL-E 3 Scene Generation",
      "TTS Voiceover & Drive Auto-Upload",
    ],
    tags: [
      "n8n",
      "Claude API",
      "DALL-E 3",
      "TTS API",
      "Google Drive",
      "Automation",
    ],
    category: "automation",
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "n8n-whatsapp",
    image: "/images/workflow-whatsapp.png",
    title: "Intelligent WhatsApp Customer AI Agent (n8n)",
    badge: "Live WhatsApp Bot",
    categoryBadge: "AI Automation",
    categoryColor: "#00f5a0",
    description:
      "Automated WhatsApp business assistant. Ingests customer queries, maintains conversational context across sessions in memory databases, resolves questions via LLMs, and triggers live agent handoffs in Slack.",
    highlights: [
      "Persistent Session Memory",
      "LLM Business Logic Resolution",
      "Slack Live Agent Handoff",
    ],
    tags: ["n8n", "WhatsApp API", "LLM Agent", "Chat Memory", "Slack Webhooks"],
    category: "automation",
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "n8n-image-cluster",
    image: "/images/workflow-image-clustering.png",
    title: "High-Scale Image Clustering & Embedding Pipeline (n8n)",
    badge: "Vector Embeddings Pipeline",
    categoryBadge: "AI Automation",
    categoryColor: "#00f5a0",
    description:
      "High-scale media asset processing workflow. Monitors media uploads, converts images to vector embeddings using OpenAI CLIP, and writes vectors to ChromaDB to enable similarity search and clustering.",
    highlights: [
      "OpenAI CLIP Multi-Modal Vectors",
      "ChromaDB Vector Store",
      "Automated Image Deduplication",
    ],
    tags: [
      "n8n",
      "Vector Embeddings",
      "OpenAI CLIP",
      "ChromaDB",
      "Metadata Scraper",
    ],
    category: "automation",
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "n8n-shopify-odoo",
    image: "/images/workflow-shopify-odoo.png",
    title: "Shopify-to-Odoo ERP Bi-Directional Sync (n8n)",
    badge: "Enterprise ERP Sync",
    categoryBadge: "AI Automation",
    categoryColor: "#00f5a0",
    description:
      "Enterprise data integration pipeline. Synchronizes Shopify e-commerce orders, customer profiles, and product inventory levels with Odoo ERP dynamically, featuring robust webhook retry logic and failure alerts.",
    highlights: [
      "Bi-Directional Order & Stock Sync",
      "Webhook Retry & Dead-Letter Queue",
      "Real-time Telegram Failure Alerts",
    ],
    tags: ["n8n", "Shopify API", "Odoo ERP", "CRM Sync", "Data Integrity"],
    category: "automation",
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "app-cafeshop",
    image: "/images/app-cafeshop.png",
    title: "Cafe Shop – Modern Mobile Ordering App",
    badge: "Flutter Mobile App",
    categoryBadge: "Mobile App",
    categoryColor: "#00d2ff",
    description:
      "E-commerce Flutter application for a coffee shop chain. Features catalog browsing, order customization, delivery mode toggles, and payment checkout, built with a premium dark design.",
    highlights: [
      "Cart & Order Customizer",
      "Real-time Order State Management",
      "Fluid Flutter Animations",
    ],
    tags: ["Flutter", "Dart", "Firebase", "State Management", "Mobile UI"],
    category: "mobile",
    links: [
      {
        href: "https://github.com/NomiDevx/Coffee-Shop-Flutter-application",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
      {
        href: "https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share",
        label: "Hire on Upwork",
        primary: true,
        icon: <SiUpwork size={13} />,
      },
    ],
  },
  {
    id: "app-fitbody",
    image: "/images/app-fitbody.png",
    title: "FitBody – Health & Workout Tracking Platform",
    badge: "Flutter Health App",
    categoryBadge: "Mobile App",
    categoryColor: "#00d2ff",
    description:
      "A comprehensive fitness tracking dashboard with personalized workout plans, diet monitoring, community chat groups, weekly challenges, and a local SQL database for offline performance.",
    highlights: [
      "Offline SQLite Database Storage",
      "Personalized Routine Generator",
      "Community Health Dashboard",
    ],
    tags: ["Flutter", "Dart", "Local SQL", "Provider", "Health Dashboard"],
    category: "mobile",
    links: [
      {
        href: "https://github.com/NomiDevx/Fit-Body-Fitness-App",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
  {
    id: "app-ideapress",
    image: "/images/app-ideapress.png",
    title: "IdeaPress – AI Startup Idea Validator",
    badge: "Flutter AI App",
    categoryBadge: "Mobile App",
    categoryColor: "#00d2ff",
    description:
      "A startup validation platform where users submit business concepts and instantly receive LLM-powered ratings, potential feasibility predictions, and market gap assessments.",
    highlights: [
      "Automated Feasibility Scoring",
      "Market Gap Analysis Matrix",
      "Firebase Cloud Sync",
    ],
    tags: ["Flutter", "OpenAI SDK", "Firebase", "Startup Feasibility"],
    category: "mobile",
    links: [
      {
        href: "https://github.com/NomiDevx",
        label: "GitHub Repo",
        icon: <FiGithub size={13} />,
      },
    ],
  },
];
