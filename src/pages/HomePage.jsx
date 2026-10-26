import { createElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiDownload,
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
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { PROJECTS } from "../data/projects";
import { BLOGS } from "../data/blogs";
import "../styles/portfolio.css";

const resume = "/doc/Noman%20Ashraf%20Automation%20Engineer.pdf";
const categories = [
  ["all", "All work"],
  ["agentic-ai", "AI agents"],
  ["automation", "Automation"],
  ["web", "Web apps"],
  ["mobile", "Mobile apps"],
];
const services = [
  [
    FiCpu,
    "01",
    "AI agents & intelligent systems",
    "Turn complex research and decision workflows into connected, purpose-built AI systems.",
    ["LangGraph", "CrewAI", "Python", "RAG"],
  ],
  [
    FiZap,
    "02",
    "Workflow automation",
    "Connect your tools, reduce repetitive work, and keep your business moving with custom integrations.",
    ["n8n", "REST APIs", "Webhooks", "OpenAI"],
  ],
  [
    FiCode,
    "03",
    "Full stack web development",
    "Responsive interfaces and dependable APIs, built together for a smooth end-to-end experience.",
    ["React", "Node.js", "Express", "MySQL"],
  ],
  [
    FiSmartphone,
    "04",
    "Mobile app development",
    "Thoughtful cross-platform applications that make everyday tasks feel simple.",
    ["Flutter", "Dart", "Firebase", "Mobile UI"],
  ],
];

export default function HomePage() {
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const filtered = PROJECTS.filter(
    (p) => category === "all" || p.category === category,
  );
  const visible = expanded ? filtered : filtered.slice(0, 4);

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
  }, [category, expanded]);

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
              ["projects", "Work"],
              ["services", "Services"],
              ["about", "About"],
              ["journal", "Journal"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="p-nav-cta"
              onClick={() => setMenu(false)}
            >
              Let’s talk <FiArrowUpRight />
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
              <span className="p-status-dot" /> OPEN TO OPPORTUNITIES &
              COLLABORATIONS
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
              and AI automation engineer. I build web experiences, AI agents,
              and workflows that make work easier.
            </p>
            <div className="p-actions">
              <a className="p-button" href="#projects">
                Explore my work <FiArrowUpRight />
              </a>
              <a className="p-text-link" href={resume} download>
                <FiDownload /> Download résumé
              </a>
            </div>
            <div className="p-hero-note">
              <span>BASED IN PAKISTAN</span>
              <span className="p-note-line" />
              <span>BUILDING FOR THE WORLD</span>
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
            <div>
              {[
                "React",
                "Node.js",
                "Python",
                "LangGraph",
                "CrewAI",
                "n8n",
                "Flutter",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
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
          <div className="p-filters" aria-label="Filter projects">
            {categories.map(([id, label]) => (
              <button
                key={id}
                aria-pressed={category === id}
                onClick={() => {
                  setCategory(id);
                  setExpanded(false);
                }}
              >
                {label}
                <span>
                  {id === "all"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === id).length}
                </span>
              </button>
            ))}
          </div>
          <div className="p-project-grid">
            {visible.map((p, index) => (
              <article className="p-project p-reveal" key={p.id}>
                <div className={`p-project-image tone-${index % 4}`}>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} project preview`}
                      width="800"
                      height="500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="p-project-placeholder">
                      <FiCode />
                      <span>{p.title.split("–")[0]}</span>
                    </div>
                  )}
                  <span className="p-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-project-body">
                  <span className="p-eyebrow">{p.categoryBadge}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="p-tags">
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="p-project-links">
                    {p.links.map((l) => (
                      <a
                        key={l.href + l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.href.replace(/\/$/, "").toLowerCase() ===
                        "https://github.com/nomidevx"
                          ? "Explore GitHub profile"
                          : l.label}{" "}
                        <FiArrowUpRight />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="p-project-bottom">
            <p aria-live="polite">
              Showing {visible.length} of {filtered.length} projects
            </p>
            {filtered.length > 4 && (
              <button
                className="p-button p-button-outline"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show selected work" : "Explore all projects"}{" "}
                <FiArrowRight />
              </button>
            )}
          </div>
        </section>
        <section id="services" className="p-services">
          <div className="p-wrap p-section">
            <div className="p-section-heading p-reveal">
              <div>
                <span className="p-eyebrow">02 / HOW I CAN HELP</span>
                <h2>
                  Your next idea.
                  <br />
                  <span>Let’s build it right.</span>
                </h2>
              </div>
              <p>
                From a focused integration to a complete product, I bring the
                interface, logic, and automation together.
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
                    Discuss a project <FiArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="p-section p-wrap p-about">
          <div className="p-reveal">
            <span className="p-eyebrow">03 / A LITTLE ABOUT ME</span>
            <h2>
              Curious by nature.
              <br />
              <span>Builder by choice.</span>
            </h2>
            <p>
              I’m Noman, a developer based in Pakistan, working across full
              stack development, AI systems, and business automation.
            </p>
            <p>
              I enjoy connecting the dots between a good idea and a useful
              product: shaping the interface, building the API, and automating
              what happens behind the scenes.
            </p>
            <div className="p-actions">
              <a className="p-button p-button-outline" href={resume} download>
                Get my résumé <FiDownload />
              </a>
              <a
                className="p-text-link"
                href="https://www.linkedin.com/in/nomidevx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <FiArrowUpRight />
              </a>
            </div>
          </div>
          <div className="p-about-panel p-reveal">
            <span className="p-eyebrow">FOR RECRUITERS & COLLABORATORS</span>
            <h3>Where I can contribute</h3>
            {[
              [
                "Full stack engineering",
                "React interfaces, Node.js services, and API integrations.",
              ],
              [
                "AI & automation",
                "Agent orchestration, retrieval workflows, and n8n integrations.",
              ],
              [
                "Cross-platform development",
                "Flutter applications with Firebase and connected AI features.",
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
              Have a role in mind? Let’s connect <FiArrowRight />
            </a>
          </div>
        </section>
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
                  <span className="p-status-dot" /> LET’S MAKE SOMETHING USEFUL
                </span>
                <h2>
                  A project, a role,
                  <br />
                  or a <span>new possibility?</span>
                </h2>
                <p>
                  Tell me what you have in mind. Let’s find out how I can help.
                </p>
                <a className="p-button" href="mailto:nomi.devx@gmail.com">
                  Start a conversation <FiArrowUpRight />
                </a>
              </div>
              <div className="p-contact-details">
                <a href="mailto:nomi.devx@gmail.com">
                  <FiMail />
                  <span>
                    <small>DROP ME A LINE</small>nomi.devx@gmail.com
                  </span>
                  <FiArrowUpRight />
                </a>
                <a href="tel:+923319025470">
                  <FiPhone />
                  <span>
                    <small>LET’S TALK</small>+92 331 902 5470
                  </span>
                  <FiArrowUpRight />
                </a>
                <a href={resume} download>
                  <FiDownload />
                  <span>
                    <small>HIRING FOR YOUR TEAM?</small>Download my résumé
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
