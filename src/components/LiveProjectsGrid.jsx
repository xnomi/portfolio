import { useState } from "react";
import { FiArrowUpRight, FiImage, FiMonitor } from "react-icons/fi";
import { LIVE_PROJECTS } from "../data/projects";

export default function LiveProjectsGrid() {
  const [liveFrames, setLiveFrames] = useState({});
  const toggleLiveFrame = (id) =>
    setLiveFrames((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="p-live-showcase">
      <div className="p-live-header p-reveal">
        <span className="p-eyebrow">
          <span className="p-status-dot" /> LIVE SHIPPED PRODUCTS &amp; APPS (
          {LIVE_PROJECTS.length})
        </span>
        <p>
          Real production apps and web platforms—previewed in their live
          homescreen windows.
        </p>
      </div>
      <div className="p-live-grid">
        {LIVE_PROJECTS.map((item, idx) => {
          const isLive = Boolean(liveFrames[item.id]);
          return (
            <article className="p-window-card p-reveal" key={item.id}>
              <div className="p-window-bar">
                <div className="p-window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="p-window-url" title={item.url}>
                  {item.displayUrl}
                </span>
                <div className="p-window-controls">
                  {item.canEmbed && (
                    <button
                      type="button"
                      className={`p-window-toggle${isLive ? " is-active" : ""}`}
                      onClick={() => toggleLiveFrame(item.id)}
                      aria-pressed={isLive}
                      title={
                        isLive
                          ? "Show static homescreen"
                          : "Load interactive live window"
                      }
                    >
                      {isLive ? <FiImage /> : <FiMonitor />}
                      <span>{isLive ? "Snapshot" : "Live"}</span>
                    </button>
                  )}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-window-open"
                    aria-label={`Open ${item.title} in new tab`}
                    title="Open in new tab"
                  >
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
              <div
                className={`p-window-viewport${item.imageFit === "contain" ? " is-contain" : ""}`}
              >
                {isLive && item.canEmbed ? (
                  <iframe
                    src={item.url}
                    title={`${item.title} live preview`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={`${item.title} homescreen preview`}
                    width="1200"
                    height="750"
                    loading="lazy"
                  />
                )}
                <span className="p-project-number">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-window-body">
                <span className="p-eyebrow">{item.categoryBadge}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="p-tags">
                  {item.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="p-project-links">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.ctaLabel} <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
