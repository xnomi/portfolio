import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { PROJECTS } from "../data/projects";
import LiveProjectsGrid from "../components/LiveProjectsGrid";
import "../styles/portfolio.css";

const categories = [
  ["all", "All work"],
  ["agentic-ai", "AI agents"],
  ["automation", "Automation"],
  ["web", "Web apps"],
  ["mobile", "Mobile apps"],
];

export default function WorkPage() {
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState("all");
  const { isDark, toggleTheme } = useTheme();
  const filtered = PROJECTS.filter(
    (p) => category === "all" || p.category === category,
  );

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
  }, [category]);

  return (
    <div className="portfolio">
      <a className="p-skip" href="#main-content">
        Skip to content
      </a>
      <header className="p-header">
        <div className="p-wrap p-nav">
          <Link className="p-brand" to="/" aria-label="Noman Ashraf home">
            <span className="p-monogram">
              n<span>.</span>
            </span>
            <span>
              Noman Ashraf
              <span className="p-brand-caption">
                DEVELOPER & AUTOMATION ENGINEER
              </span>
            </span>
          </Link>
          <nav
            id="portfolio-navigation"
            aria-label="Main navigation"
            className={menu ? "p-links is-open" : "p-links"}
          >
            <Link to="/#services" onClick={() => setMenu(false)}>
              Services
            </Link>
            <Link to="/work" onClick={() => setMenu(false)}>
              Work
            </Link>
            <Link to="/#about" onClick={() => setMenu(false)}>
              About
            </Link>
            <Link to="/blog" onClick={() => setMenu(false)}>
              Journal
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nomi.devx@gmail.com&su=Project%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
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
        <section className="p-section p-wrap">
          <Link
            className="p-text-link"
            to="/"
            style={{ marginBottom: "18px" }}
          >
            <FiArrowLeft /> Back to home
          </Link>
          <div className="p-section-heading p-reveal">
            <div>
              <span className="p-eyebrow">ALL WORK &amp; CASE STUDIES</span>
              <h1
                style={{
                  fontSize: "clamp(34px, 4vw, 54px)",
                  lineHeight: 1.12,
                  letterSpacing: "-2px",
                  marginTop: "14px",
                }}
              >
                Live products, AI agents,
                <br />
                <span>and automation systems.</span>
              </h1>
            </div>
            <p>
              Browse every shipped web platform, Google Play app, multi-agent
              AI pipeline, and n8n workflow in one place.
            </p>
          </div>

          <LiveProjectsGrid />

          <div className="p-archive-heading p-reveal">
            <span className="p-eyebrow">
              AI AGENTS, AUTOMATION &amp; ENGINEERING ARCHIVE ({PROJECTS.length})
            </span>
          </div>
          <div className="p-filters" aria-label="Filter projects">
            {categories.map(([id, label]) => (
              <button
                key={id}
                aria-pressed={category === id}
                onClick={() => setCategory(id)}
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
            {filtered.map((p, index) => (
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
              Showing {filtered.length} of {PROJECTS.length} case studies
            </p>
            <Link className="p-button" to="/#contact">
              Start a project <FiArrowUpRight />
            </Link>
          </div>
        </section>
      </main>
      <footer className="p-wrap p-footer">
        <Link className="p-brand" to="/">
          <span className="p-monogram">
            n<span>.</span>
          </span>
          <span>Noman Ashraf</span>
        </Link>
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
