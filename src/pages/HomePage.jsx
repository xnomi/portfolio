import { createElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
  FiCode,
  FiCpu,
  FiZap,
  FiSmartphone,
  FiMail,
  FiPhone,
  FiSun,
  FiMoon,
  FiBriefcase,
  FiGitBranch,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiPostgresql,
  SiDocker,
  SiFastapi,
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import { LIVE_PROJECTS } from "../data/projects";
import { BLOGS } from "../data/blogs";
import LiveProjectsGrid from "../components/LiveProjectsGrid";
import ReviewsCarousel from "../components/ReviewsCarousel";
import "../styles/portfolio.css";

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01f61b582dd79d0ae4?mp_source=share";
const FIVERR_URL = "https://www.fiverr.com/s/DBvdoDa";

const TOOLKIT = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "LangGraph", icon: FiGitBranch },
  { name: "CrewAI", icon: FaRobot },
  { name: "n8n", icon: FiZap },
  { name: "Flutter", icon: SiFlutter },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
];

const services = [
  [
    FiCpu,
    "01",
    "AI agents & intelligent systems",
    "Automate research, lead qualification, support triage, and internal decision workflows with custom multi-agent AI.",
    ["LangGraph", "CrewAI", "Python", "RAG"],
  ],
  [
    FiZap,
    "02",
    "n8n workflow automation",
    "Eliminate manual busywork by connecting your CRM, Gmail, Slack, and databases into reliable automated pipelines.",
    ["n8n", "REST APIs", "Webhooks", "OpenAI"],
  ],
  [
    FiCode,
    "03",
    "Full stack web applications",
    "Launch fast, responsive web platforms, SaaS MVPs, and client portals backed by clean, scalable APIs.",
    ["React", "Node.js", "Express", "PostgreSQL"],
  ],
  [
    FiSmartphone,
    "04",
    "Cross-platform mobile apps",
    "Ship polished iOS and Android apps with smooth UX, real-time sync, and integrated AI features.",
    ["Flutter", "Dart", "Firebase", "Mobile UI"],
  ],
];
const processSteps = [
  [
    "01",
    "Discovery & scope",
    "We align on your business bottleneck, technical architecture, and fixed milestones.",
  ],
  [
    "02",
    "Rapid build & demos",
    "Weekly working increments with transparent updates so you see progress early.",
  ],
  [
    "03",
    "Launch & handover",
    "Production deployment, clean documentation, and post-launch support.",
  ],
];

export default function HomePage() {
  const [menu, setMenu] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    document
      .querySelectorAll(".p-reveal")
      .forEach((el) => observer.observe(el));
    const escape = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", escape);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <div className="portfolio">
      <a className="p-skip" href="#main-content">
        Skip to content
      </a>
      <header className="p-header">
        <div className="p-wrap p-nav">
          <a className="p-brand" href="#hero" aria-label="Noman Ashraf home">
            <span className="p-monogram">
              n<span>.</span>
            </span>
            <span>
              Noman Ashraf
              <span className="p-brand-caption">
                DEVELOPER & AUTOMATION ENGINEER
              </span>
            </span>
          </a>
          <nav
            id="portfolio-navigation"
            aria-label="Main navigation"
            className={menu ? "p-links is-open" : "p-links"}
          >
            {[
              ["services", "Services"],
              ["projects", "Work"],
              ["about", "About"],
              ["journal", "Journal"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a
              href="mailto:nomi.devx@gmail.com?subject=Project%20Inquiry"
              className="p-nav-cta"
              onClick={() => setMenu(false)}
            >
              Book a project <FiArrowUpRight />
            </a>
          </nav>
          <div className="p-nav-tools">
            <button
              className="p-icon-button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button
              className="p-menu p-icon-button"
              aria-expanded={menu}
              aria-controls="portfolio-navigation"
              aria-label={menu ? "Close navigation" : "Open navigation"}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main-content">
        <section id="hero" className="p-hero p-wrap">
          <div className="p-hero-copy">
            <div className="p-eyebrow">
              <span className="p-status-dot" /> AVAILABLE FOR CLIENT PROJECTS &amp;
              RETAINERS
            </div>
            <h1>
              Thoughtful code.
              <br />
              Intelligent systems.
              <br />
              <span>Real possibilities.</span>
            </h1>
            <p className="p-hero-intro">
              I’m <strong>Muhammad Noman Ashraf</strong>, a full stack developer
              and AI automation architect. I help startups and growing teams
              ship custom AI agents, n8n workflows, and scalable web apps that
              save hours and drive growth.
            </p>
            <div className="p-actions">
              <a className="p-button" href="#contact">
                Start a project <FiArrowUpRight />
              </a>
              <a className="p-text-link" href="#services">
                Explore services <FiArrowRight />
              </a>
            </div>
            <div className="p-hero-note">
              <span>4K+ LINKEDIN FOLLOWERS</span>
              <span className="p-note-line" />
              <span>24H RESPONSE · WORLDWIDE</span>
            </div>
          </div>
          <div className="p-portrait-area">
            <div className="p-portrait-frame">
              <div className="p-portrait-label">
                <span>THE PERSON BEHIND THE CODE</span>
                <FiArrowUpRight />
              </div>
              <img
                src="/images/profile-image.jpg"
                alt="Muhammad Noman Ashraf, full stack developer and AI automation engineer"
                width="600"
                height="700"
                fetchPriority="high"
              />
              <div className="p-portrait-caption">
                <span>Noman Ashraf</span>
                <span>Developer. Builder. Problem solver.</span>
              </div>
            </div>
            <div className="p-floating-note">
              <span className="p-note-icon">
                <FiCode />
              </span>
              <div>
                Built with purpose.
                <small>From the first idea to the final detail.</small>
              </div>
            </div>
            <span className="p-orbit" aria-hidden="true" />
          </div>
        </section>
        <div className="p-stack-strip">
          <div className="p-wrap">
            <span>MY EVERYDAY TOOLKIT</span>
            <div className="p-marquee" aria-label="Technology stack">
              <div className="p-marquee-track">
                {[...TOOLKIT, ...TOOLKIT].map(({ icon, name }, idx) => (
                  <span
                    className="p-tool-pill"
                    key={`${name}-${idx}`}
                    aria-hidden={idx >= TOOLKIT.length}
                  >
                    {createElement(icon)}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <section id="projects" className="p-section p-wrap">
          <div className="p-section-heading p-reveal">
            <div>
              <span className="p-eyebrow">01 / SELECTED WORK</span>
              <h2>
                Ideas turned into
                <br />
                <span>working solutions.</span>
              </h2>
            </div>
            <p>
              A selection of AI systems, connected workflows, and applications.
              Explore the approach, tools, and code behind each build.
            </p>
          </div>
          <LiveProjectsGrid />
          <div className="p-project-bottom">
            <p aria-live="polite">
              Showing {LIVE_PROJECTS.length} live shipped products &amp; apps
            </p>
            <Link className="p-button p-button-outline" to="/work">
              Explore all projects &amp; case studies <FiArrowRight />
            </Link>
          </div>
        </section>
        <section id="services" className="p-services">
          <div className="p-wrap p-section">
            <div className="p-section-heading p-reveal">
              <div>
                <span className="p-eyebrow">02 / CLIENT SERVICES</span>
                <h2>
                  Built for growth.
                  <br />
                  <span>Engineered to scale.</span>
                </h2>
              </div>
              <p>
                From a focused n8n automation to a complete AI-powered product,
                I deliver production-ready systems tailored to your business
                goals.
              </p>
            </div>
            <div className="p-service-grid">
              {services.map(([icon, number, title, description, tags]) => (
                <article className="p-service p-reveal" key={number}>
                  <div className="p-service-top">
                    {createElement(icon)}
                    <span>/{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="p-tags">
                    {tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    href={`mailto:nomi.devx@gmail.com?subject=${encodeURIComponent(`Project inquiry: ${title}`)}`}
                  >
                    Request a quote <FiArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
            <div className="p-process-strip p-reveal">
              {processSteps.map(([step, heading, copy]) => (
                <div className="p-process-item" key={step}>
                  <span className="p-eyebrow">STEP {step}</span>
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="p-section p-wrap p-about">
          <div className="p-reveal">
            <span className="p-eyebrow">03 / WHY WORK WITH ME</span>
            <h2>
              Business-first thinking.
              <br />
              <span>Clean execution.</span>
            </h2>
            <p>
              I’m Noman, a full stack developer and AI automation architect
              partnering with founders, agencies, and businesses worldwide.
            </p>
            <p>
              I bridge the gap between strategy and shipping: designing clean
              interfaces, engineering dependable APIs, and automating repetitive
              operations so your team can scale without adding headcount.
            </p>
            <div className="p-actions">
              <a className="p-button" href="#contact">
                Start a project <FiArrowUpRight />
              </a>
              <a
                className="p-text-link"
                href="https://www.linkedin.com/in/nomidevx"
                target="_blank"
                rel="noopener noreferrer"
              >
                4K+ Followers on LinkedIn <FiArrowUpRight />
              </a>
              <a
                className="p-text-link"
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire on Upwork <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="p-about-panel p-reveal">
            <span className="p-eyebrow">FOR FOUNDERS &amp; TEAMS</span>
            <h3>How I help clients win</h3>
            {[
              [
                "Autonomous AI & RAG systems",
                "Custom LangGraph, CrewAI, and AutoGen agents for research, triage, and ops.",
              ],
              [
                "Zero-bottleneck automation",
                "n8n pipelines connecting your CRM, Gmail, Slack, and databases reliably.",
              ],
              [
                "Production web & mobile apps",
                "Fast React/Node.js platforms and Flutter apps shipped with clean architecture.",
              ],
            ].map(([a, b]) => (
              <div className="p-capability" key={a}>
                <FiArrowUpRight />
                <div>
                  <h4>{a}</h4>
                  <p>{b}</p>
                </div>
              </div>
            ))}
            <a href="#contact" className="p-text-link">
              Have a project in mind? Let’s scope it <FiArrowRight />
            </a>
          </div>
        </section>
        <ReviewsCarousel />
        <section id="journal" className="p-section p-wrap p-journal">
          <div className="p-section-heading p-reveal">
            <div>
              <span className="p-eyebrow">04 / NOTES FROM THE BUILD</span>
              <h2>
                Learning. Building.
                <br />
                <span>Sharing along the way.</span>
              </h2>
            </div>
            <Link className="p-text-link" to="/blog">
              All articles <FiArrowUpRight />
            </Link>
          </div>
          <div className="p-journal-grid">
            {BLOGS.slice(0, 3).map((post) => (
              <Link
                className="p-article p-reveal"
                key={post.slug}
                to={`/blog/${post.slug}`}
              >
                <span className="p-eyebrow">
                  {post.category} · {post.readTime} MIN READ
                </span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="p-text-link">
                  Read the article <FiArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section id="contact" className="p-contact">
          <div className="p-wrap p-section">
            <div className="p-contact-top p-reveal">
              <div>
                <span className="p-eyebrow">
                  <span className="p-status-dot" /> ACCEPTING NEW CLIENT PROJECTS
                </span>
                <h2>
                  Ready to automate,
                  <br />
                  build, or <span>launch?</span>
                </h2>
                <p>
                  Share your project goals, timeline, or workflow bottleneck.
                  I’ll reply within 24 hours with a clear technical plan.
                </p>
                <a
                  className="p-button"
                  href="mailto:nomi.devx@gmail.com?subject=Project%20Inquiry"
                >
                  Send project brief <FiArrowUpRight />
                </a>
              </div>
              <div className="p-contact-details">
                <a href="mailto:nomi.devx@gmail.com">
                  <FiMail />
                  <span>
                    <small>PROJECT INQUIRIES</small>nomi.devx@gmail.com
                  </span>
                  <FiArrowUpRight />
                </a>
                <a href="tel:+923319025470">
                  <FiPhone />
                  <span>
                    <small>WHATSAPP / DIRECT CALL</small>+92 331 902 5470
                  </span>
                  <FiArrowUpRight />
                </a>
                <a
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiBriefcase />
                  <span>
                    <small>HIRE VIA UPWORK</small>Book a contract on Upwork
                  </span>
                  <FiArrowUpRight />
                </a>
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiZap />
                  <span>
                    <small>HIRE VIA FIVERR</small>Order a gig on Fiverr
                  </span>
                  <FiArrowUpRight />
                </a>
                <a
                  href="https://www.linkedin.com/in/nomidevx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin />
                  <span>
                    <small>LINKEDIN · 4K+ FOLLOWERS</small>Connect with Noman Ashraf
                  </span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-wrap p-footer">
        <a className="p-brand" href="#hero">
          <span className="p-monogram">
            n<span>.</span>
          </span>
          <span>Noman Ashraf</span>
        </a>
        <p>© {new Date().getFullYear()} Muhammad Noman Ashraf</p>
        <div>
          <a
            href="https://github.com/NomiDevx"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nomidevx"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a href="mailto:nomi.devx@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </footer>
    </div>
  );
}
