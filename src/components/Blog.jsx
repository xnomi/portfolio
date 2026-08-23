import React from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogs';
import SectionTitle from './ui/SectionTitle';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const PREVIEW = BLOGS.slice(0, 3);

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-preview-card">
      <div className="blog-card-img">
        <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
        <div className="blog-card-img-overlay" />
        <span className="blog-card-cat">{post.category}</span>
      </div>
      <div className="blog-card-body">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-footer">
          <div className="blog-card-author">
            <img src={post.authorImage} alt="Muhammad Noman Ashraf" className="blog-author-avatar" loading="lazy" />
            <div>
              <div className="blog-author-name">Muhammad Noman</div>
              <div className="blog-card-meta">
                <FiClock size={11} /> {post.readTime} min read · {post.date}
              </div>
            </div>
          </div>
          <span className="blog-read-more">Read <FiArrowRight size={13} /></span>
        </div>
      </div>
    </Link>
  );
}

function Blog() {
  return (
    <>
      <style>{`
        #blog {
          background: var(--bg-primary);
        }

        .blog-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 992px) {
          .blog-preview-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .blog-preview-grid { grid-template-columns: 1fr; }
        }

        .blog-preview-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          text-decoration: none;
          color: var(--text-primary);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
          position: relative;
          height: 100%;
        }
        .blog-preview-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-accent);
          opacity: 0;
          transition: opacity var(--transition);
        }
        .blog-preview-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: 0 16px 48px var(--accent-glow);
          color: var(--text-primary);
        }
        .blog-preview-card:hover::after { opacity: 1; }

        .blog-card-img {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: var(--bg-secondary);
        }
        .blog-card-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blog-preview-card:hover .blog-card-img img { transform: scale(1.06); }
        .blog-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, var(--bg-card) 100%);
          opacity: 0.6;
        }
        .blog-card-cat {
          position: absolute;
          bottom: 12px; left: 14px;
          background: var(--gradient-accent);
          color: #fff;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .blog-card-body {
          padding: 1.35rem 1.4rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-card-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.55rem;
          line-height: 1.35;
          color: var(--text-primary);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-card-excerpt {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          border-top: 1px solid var(--border);
          padding-top: 0.9rem;
        }
        .blog-card-author {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }
        .blog-author-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid var(--border);
        }
        .blog-author-name {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .blog-read-more {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent);
          white-space: nowrap;
          transition: gap var(--transition), color var(--transition);
        }
        .blog-preview-card:hover .blog-read-more {
          gap: 7px;
          color: var(--accent-cyan);
        }

        .blog-section-cta {
          text-align: center;
          margin-top: 2.5rem;
        }
      `}</style>

      <section id="blog">
        <div className="container">
          <div className="reveal">
            <SectionTitle
              overline="Engineering Journal"
              title="Latest <span class='accent-word'>Insights</span>"
              subtitle="Deep dives into AI automation, LangGraph, CrewAI multi-agent systems, and scalable frontend architectures."
            />
          </div>

          <div className="blog-preview-grid">
            {PREVIEW.map((post, i) => (
              <div key={post.slug} className={`reveal delay-${i + 1}`}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className="blog-section-cta reveal">
            <Link to="/blog" className="btn-outline">
              View All Articles <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
