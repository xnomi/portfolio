import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getPostBySlug, getRelatedPosts } from '../data/blogs';
import { FiClock, FiArrowLeft, FiCalendar } from 'react-icons/fi';
import BackToTop from '../components/BackToTop';

function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const related = post ? getRelatedPosts(slug) : [];

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Muhammad Noman Ashraf`;

    const setMeta = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', 'content', post.excerpt.slice(0, 155));
    setMeta('meta[property="og:title"]', 'content', `${post.title} | Muhammad Noman Ashraf`);
    setMeta('meta[property="og:description"]', 'content', post.excerpt.slice(0, 155));
    setMeta('meta[property="og:image"]', 'content', post.image);

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <style>{`
        .bp-page {
          min-height: 100vh;
          background: var(--bg-primary);
          padding-top: 72px;
        }

        /* Hero Image */
        .bp-hero {
          position: relative;
          width: 100%;
          height: min(480px, 50vw);
          overflow: hidden;
          background: var(--bg-secondary);
        }
        @media (max-width: 640px) { .bp-hero { height: 260px; } }
        .bp-hero-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .bp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.65) 60%,
            var(--bg-primary) 100%
          );
        }
        .bp-hero-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem 1.25rem;
          max-width: 860px;
          margin: 0 auto;
        }
        .bp-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.75);
          font-size: 0.85rem;
          text-decoration: none;
          margin-bottom: 1rem;
          transition: color var(--transition);
        }
        .bp-back:hover { color: var(--accent-cyan); }
        .bp-cat {
          display: inline-block;
          background: var(--gradient-accent);
          color: #fff;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 3px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .bp-title {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 3.8vw, 2.4rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 0.75rem;
        }
        .bp-meta-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .bp-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.7);
        }

        /* Article layout */
        .bp-layout {
          max-width: 800px;
          margin: 0 auto;
          padding: 2.5rem 1.25rem 5rem;
        }

        /* Article body */
        .bp-article h2 {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 2.25rem 0 0.85rem;
          letter-spacing: -0.3px;
        }
        .bp-article h3 {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 1.75rem 0 0.75rem;
        }
        .bp-article p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.85;
          margin-bottom: 1.25rem;
        }
        .bp-article strong { color: var(--text-primary); }
        .bp-article em { color: var(--accent); font-style: italic; }
        .bp-article code {
          background: var(--accent-glow2);
          border: 1px solid var(--border);
          color: var(--accent-cyan);
          padding: 2px 7px;
          border-radius: 5px;
          font-size: 0.88em;
          font-family: 'Fira Code', 'Courier New', monospace;
        }
        .bp-article ul {
          list-style: none;
          padding: 0;
          margin: 0.75rem 0 1.25rem;
        }
        .bp-article ul li {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.75;
          padding: 5px 0 5px 1.4rem;
          position: relative;
        }
        .bp-article ul li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 0.85rem;
          top: 6px;
        }
        .bp-article ul li strong { color: var(--text-primary); }

        /* Tags */
        .bp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin: 2.5rem 0;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .bp-tag {
          background: var(--accent-glow2);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          color: var(--accent-cyan);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 13px;
        }

        /* Author box */
        .bp-author-box {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          margin-bottom: 3rem;
          backdrop-filter: blur(12px);
        }
        @media (max-width: 500px) { .bp-author-box { flex-direction: column; text-align: center; } }
        .bp-author-avatar {
          width: 64px; height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--border);
          flex-shrink: 0;
        }
        .bp-author-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 3px;
        }
        .bp-author-role {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 5px;
        }
        .bp-author-bio {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Related posts */
        .bp-related-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }
        .bp-related-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 600px) { .bp-related-grid { grid-template-columns: 1fr; } }
        .bp-related-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-decoration: none;
          color: var(--text-primary);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .bp-related-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 12px 36px var(--accent-glow);
          color: var(--text-primary);
        }
        .bp-related-img { height: 140px; overflow: hidden; }
        .bp-related-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .bp-related-card:hover .bp-related-img img { transform: scale(1.05); }
        .bp-related-body { padding: 1rem; }
        .bp-related-cat {
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 5px;
        }
        .bp-related-ttl {
          font-size: 0.88rem; font-weight: 700; line-height: 1.35; color: var(--text-primary);
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .bp-related-meta {
          font-size: 0.73rem; color: var(--text-muted); margin-top: 5px;
          display: flex; align-items: center; gap: 4px;
        }
        .bp-more-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 22px; border-radius: var(--radius-full);
          background: var(--gradient-accent); color: #fff !important; font-weight: 600; font-size: 0.9rem;
          text-decoration: none; margin-bottom: 2rem;
          transition: opacity var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .bp-more-link:hover { opacity: 0.92; transform: translateY(-2px); box-shadow: 0 6px 20px var(--accent-glow); }
      `}</style>

      <div className="bp-page">
        <div className="bp-hero">
          <img src={post.image} alt={post.title} className="bp-hero-img" />
          <div className="bp-hero-overlay" />
          <div className="bp-hero-content">
            <Link to="/blog" className="bp-back">
              <FiArrowLeft size={14} /> All Posts
            </Link>
            <div>
              <span className="bp-cat">{post.category}</span>
              <h1 className="bp-title">{post.title}</h1>
              <div className="bp-meta-row">
                <span className="bp-meta-item"><FiCalendar size={13} /> {post.date}</span>
                <span className="bp-meta-item"><FiClock size={13} /> {post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bp-layout">
          <article
            className="bp-article reveal"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <div className="bp-tags reveal">
            {post.tags.map((t) => <span key={t} className="bp-tag">{t}</span>)}
          </div>

          <div className="bp-author-box reveal">
            <img src={post.authorImage} alt="Muhammad Noman Ashraf" className="bp-author-avatar" />
            <div>
              <div className="bp-author-name">Muhammad Noman Ashraf</div>
              <div className="bp-author-role">Full Stack React Developer &amp; AI Automation Architect</div>
              <p className="bp-author-bio">
                Building scalable web applications, n8n automation pipelines, and multi-agent systems with AutoGen, LangGraph, and CrewAI. Available for hire on Upwork and Fiverr.
              </p>
            </div>
          </div>

          {related.length > 0 && (
            <div className="reveal">
              <h2 className="bp-related-title">Related Posts</h2>
              <div className="bp-related-grid">
                {related.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="bp-related-card">
                    <div className="bp-related-img">
                      <img src={r.image} alt={r.title} loading="lazy" />
                    </div>
                    <div className="bp-related-body">
                      <div className="bp-related-cat">{r.category}</div>
                      <div className="bp-related-ttl">{r.title}</div>
                      <div className="bp-related-meta"><FiClock size={11} /> {r.readTime} min · {r.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link to="/blog" className="bp-more-link">
            <FiArrowLeft size={15} /> Back to All Posts
          </Link>
        </div>
      </div>

      <BackToTop />
    </>
  );
}

export default BlogPostPage;
