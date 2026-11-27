import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const REVIEWS = [
  {
    id: 1,
    image: "/images/ceo/1.jpg",
    name: "Daniel Mercer",
    role: "Founder & CEO, MediSynx Health",
    quote:
      "Noman built our EHR booking flow and A2A voice assistant ahead of schedule. Patients book without friction, and our front-desk workload dropped noticeably in week one.",
  },
  {
    id: 2,
    image: "/images/ceo/2.jpg",
    name: "Marcus Vance",
    role: "Founder, BlueNov Publishing",
    quote:
      "Clean architecture and zero fluff. He took our serialized reading platform from rough specs to a fast, SEO-ready product that handles daily traffic effortlessly.",
  },
  {
    id: 3,
    image: "/images/ceo/3.jpg",
    name: "Elena Rostova",
    role: "Operations Director, FlowScale",
    quote:
      "Our n8n pipelines used to break every other week. Noman rebuilt the entire webhook and Slack triage system with proper retries—it just runs.",
  },
  {
    id: 4,
    image: "/images/ceo/4.jpg",
    name: "Tariq Al-Mansoor",
    role: "CEO, Brickell Hospitality Group",
    quote:
      "From menu UX to DoorDash integration, Noman understood what actually converts local customers. We saw more direct orders within days of launch.",
  },
  {
    id: 5,
    image: "/images/ceo/5.jpg",
    name: "Sarah Jenkins",
    role: "Co-Founder, GridSnap Studio",
    quote:
      "Rare to find someone who handles both crisp React UI and solid backend logic equally well. Communication was fast, clear, and always on point.",
  },
  {
    id: 6,
    image: "/images/ceo/6.jpg",
    name: "David Chen",
    role: "Product Lead, ScanVault Mobile",
    quote:
      "He shipped our Android utility cleanly to Google Play with offline-first performance and great attention to detail. Already planning our next release together.",
  },
];

export default function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () =>
    setActive((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setActive((i) => (i + 1) % REVIEWS.length);

  return (
    <section
      id="reviews"
      className="p-reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="p-wrap p-section">
        <div className="p-section-heading p-reveal">
          <div>
            <span className="p-eyebrow">CLIENT REVIEWS</span>
            <h2>
              Trusted by founders.
              <br />
              <span>Proven in production.</span>
            </h2>
          </div>
          <div className="p-review-nav">
            <button
              type="button"
              className="p-icon-button"
              onClick={prev}
              aria-label="Previous review"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              className="p-icon-button"
              onClick={next}
              aria-label="Next review"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="p-carousel-viewport">
          <div
            className="p-carousel-track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {REVIEWS.map((r) => (
              <div className="p-carousel-slide" key={r.id}>
                <article className="p-review-card">
                  <div className="p-review-stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} />
                    ))}
                  </div>
                  <blockquote>“{r.quote}”</blockquote>
                  <div className="p-review-author">
                    <div className="p-review-avatar">
                      <img
                        src={r.image}
                        alt={r.name}
                        width="120"
                        height="120"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <strong>{r.name}</strong>
                      <span>{r.role}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="p-carousel-dots" role="tablist" aria-label="Review slides">
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Show review from ${r.name}`}
              className={active === i ? "is-active" : ""}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
