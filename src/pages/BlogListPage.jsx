import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogs';
import { FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import BackToTop from '../components/BackToTop';

function BlogCard({ post, index }) {
  return (
    <Link to={`/blog/${post.slug}`} className={`bl-card reveal delay-${Math.min(index + 1, 5)}`}>
      <div className="bl-card-img">
        <img src={post.image} alt={post.title} loading="lazy" />
        <div className="bl-card-overlay" />
        <span className="bl-card-cat">{post.category}</span>
      </div>
      <div className="bl-card-body">
        <h2 className="bl-card-title">{post.title}</h2>
        <p className="bl-card-excerpt">{post.excerpt}</p>
        <div className="bl-card-tags">
          {post.tags.slice(0, 3).map((t) => <span key={t} className="bl-tag">{t}</span>)}
        </div>
        <div className="bl-card-footer">
          <div className="bl-author">
            <img src={post.authorImage} alt="Author" className="bl-avatar" />
            <div>
              <div className="bl-author-name">Muhammad Noman</div>
              <div className="bl-meta"><FiClock size={11} /> {post.readTime} min · {post.date}</div>
            </div>
          </div>
          <span className="bl-more">Read <FiArrowRight size={13} /></span>
        </div>
      </div>
    </Link>
  );
}

function BlogListPage() {
  useEffect(() => {
    document.title = 'Blog | Muhammad Noman Ashraf';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Insights on AI automation, multi-agent systems, LangGraph, CrewAI, and the future of software development by Muhammad Noman Ashraf.');

    // Reveal on scroll
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .bl-page {
          min-height: 100vh;
          background: var(--bg-primary);
          padding-top: 80px;
        }

        /* Hero */
        .bl-hero {
          position: relative;
          padding: 80px 1.5rem 70px;
          text-align: center;
          overflow: hidden;
        }
        .bl-hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .bl-hero-blob-1 {
          width: 600px; height: 400px;
          background: radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%);
          top: -100px; left: 50%; transform: translateX(-50%);
        }
        .bl-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1.25rem;
        }
        .bl-hero-eyebrow::before, .bl-hero-eyebrow::after {
          content: ''; display:block; width: 22px; height:1px; background: var(--gradient-accent);
        }
        .bl-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 1rem;
        }
        .bl-hero-title span {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bl-hero-sub {
          color: var(--text-secondary);
          font-size: 1.05rem;
          max-width: 520px;
          margin: 0 auto 1.5rem;
        }
        .bl-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.88rem;
          text-decoration: none;
          transition: color var(--transition);
          position: relative;
          z-index: 2;
          margin-bottom: 0.5rem;
        }
        .bl-back-link:hover { color: #a78bfa; }

        /* Grid */
        .bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem 100px;
        }
        @media (max-width: 992px) { .bl-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 620px) { .bl-grid { grid-template-columns: 1fr; } }

        .bl-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          text-decoration: none;
          color: var(--text-primary);
          backdrop-filter: blur(12px);
          position: relative;
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .bl-card::after {
          content:''; position:absolute; top:0;left:0;right:0; height:2px;
          background: var(--gradient-accent); opacity:0; transition: opacity var(--transition);
        }
        .bl-card:hover { border-color: rgba(124,58,237,0.45); transform:translateY(-8px); box-shadow: 0 20px 60px rgba(124,58,237,0.18); color: var(--text-primary); }
        .bl-card:hover::after { opacity:1; }

        .bl-card-img { position:relative; height:200px; overflow:hidden; }
        .bl-card-img img { width:100%; height:100%; object-fit:cover; transition: transform 0.6s ease; }
        .bl-card:hover .bl-card-img img { transform: scale(1.06); }
        .bl-card-overlay { position:absolute; inset:0; background: linear-gradient(to bottom, rgba(10,10,15,0.1), rgba(10,10,15,0.8)); }
        .bl-card-cat {
          position:absolute; bottom:12px; left:14px;
          background: rgba(124,58,237,0.85); color:#fff; font-size:0.65rem;
          font-weight:700; letter-spacing:0.8px; text-transform:uppercase;
          padding:3px 10px; border-radius: var(--radius-full);
        }

        .bl-card-body { padding:1.4rem 1.5rem 1.5rem; display:flex; flex-direction:column; flex:1; }
        .bl-card-title {
          font-family: var(--font-heading); font-size:1.02rem; font-weight:700;
          margin-bottom:0.6rem; line-height:1.4; color: var(--text-primary);
          display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
        }
        .bl-card-excerpt {
          font-size:0.85rem; color: var(--text-secondary); line-height:1.7; flex:1;
          margin-bottom:0.9rem; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;
        }
        .bl-card-tags { display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:1.1rem; }
        .bl-tag {
          background: rgba(6,182,212,0.07); border:1px solid rgba(6,182,212,0.18);
          border-radius: var(--radius-full); color: var(--accent-cyan); font-size:0.68rem; font-weight:600; padding:2px 9px;
        }
        .bl-card-footer {
          display:flex; align-items:center; justify-content:space-between; gap:0.5rem;
          border-top:1px solid rgba(255,255,255,0.06); padding-top:0.9rem;
        }
        .bl-author { display:flex; align-items:center; gap:0.6rem; }
        .bl-avatar { width:30px; height:30px; border-radius:50%; object-fit:cover; border:1px solid rgba(124,58,237,0.3); }
        .bl-author-name { font-size:0.76rem; font-weight:600; color: var(--text-primary); }
        .bl-meta { display:flex; align-items:center; gap:4px; font-size:0.7rem; color: var(--text-muted); }
        .bl-more {
          display:flex; align-items:center; gap:4px; font-size:0.78rem; font-weight:600;
          color:#a78bfa; white-space:nowrap; transition: gap var(--transition), color var(--transition);
        }
        .bl-card:hover .bl-more { gap:8px; color: var(--accent-cyan); }
      `}</style>

      <div className="bl-page">
        {/* Hero Header */}
        <div className="bl-hero">
          <div className="bl-hero-blob bl-hero-blob-1" />
          <Link to="/" className="bl-back-link reveal">
            <FiArrowLeft size={14} /> Back to Portfolio
          </Link>
          <div className="reveal">
            <span className="bl-hero-eyebrow">From my journal</span>
            <h1 className="bl-hero-title">
              The <span>Blog</span>
            </h1>
            <p className="bl-hero-sub">
              Thoughts on AI automation, multi-agent systems, and the future of software development.
            </p>
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="bl-grid">
          {BLOGS.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>

      <BackToTop />
    </>
  );
}

export default BlogListPage;
