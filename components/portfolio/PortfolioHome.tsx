"use client";

/* Dynamic galleries, flags, and remote avatars — <img> matches original markup */
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Project, ProjectCategory } from "@/lib/projects";
import { PROJECTS } from "@/lib/projects";
import type { Review } from "@/lib/reviews";
import { REVIEWS } from "@/lib/reviews";
import { CAT_LABELS, REVIEW_GENDER, REVIEWS_PER_PAGE } from "./constants";
import { HeroSection } from "./HeroSection";
import { Navigation } from "./Navigation";
import { initials, starString } from "./utils";

function useRevealOnChange(filter: ProjectCategory | "all", reviewPage: number) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      io.observe(el);
    });
    return () => io.disconnect();
  }, [filter, reviewPage]);
}

function useScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const top = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    top();
    document.addEventListener("DOMContentLoaded", top);
    window.addEventListener("load", top);
    return () => {
      document.removeEventListener("DOMContentLoaded", top);
      window.removeEventListener("load", top);
    };
  }, []);
}

function ReviewCard({ r }: { r: Review & { photo: string } }) {
  const [photoBroken, setPhotoBroken] = useState(false);
  const init = initials(r.name);
  const showPhoto = r.photo && !photoBroken;

  return (
    <div className="review-card reveal">
      <div className="review-header">
        <div
          className="review-avatar"
          style={{
            background: showPhoto ? "#111827" : r.color,
            ...(showPhoto ? {} : {}),
          }}
        >
          {showPhoto ? (
            <img
              src={r.photo}
              alt={r.name}
              translate="no"
              onError={() => setPhotoBroken(true)}
            />
          ) : (
            <span translate="no">{init}</span>
          )}
        </div>
        <div className="review-meta">
          <div className="review-name-row">
            <span className="review-name">{r.name}</span>
            <span className="review-stars">{starString(r.stars)}</span>
          </div>
          <div className="review-origin">
            <img
              src={`https://flagcdn.com/w40/${r.code}.png`}
              alt={r.country}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span>{r.country}</span>
          </div>
        </div>
      </div>
      <p className="review-text">&ldquo;{r.text}&rdquo;</p>
      <div className="review-project">
        <i
          className="fa-solid fa-diagram-project"
          style={{ marginRight: 6 }}
          aria-hidden
        />
        {r.project}
      </div>
    </div>
  );
}

export default function PortfolioHome() {
  useScrollToTop();

  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [reviewPage, setReviewPage] = useState(1);
  const reviewsGridRef = useRef<HTMLDivElement>(null);

  const reviewsWithPhotos = useMemo(() => {
    let mc = 0;
    let fc = 0;
    return REVIEWS.map((r, i) => {
      const isMale = REVIEW_GENDER[i] === "m";
      const n = isMale ? ++mc : ++fc;
      const photo = `https://randomuser.me/api/portraits/${isMale ? "men" : "women"}/${n}.jpg`;
      return { ...r, photo };
    });
  }, []);

  const totalReviewPages = Math.ceil(REVIEWS.length / REVIEWS_PER_PAGE);
  const reviewSlice = useMemo(() => {
    const start = (reviewPage - 1) * REVIEWS_PER_PAGE;
    return reviewsWithPhotos.slice(start, start + REVIEWS_PER_PAGE);
  }, [reviewPage, reviewsWithPhotos]);

  const goReviewPage = useCallback(
    (p: number) => {
      if (p < 1 || p > totalReviewPages) return;
      setReviewPage(p);
      queueMicrotask(() => {
        reviewsGridRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    },
    [totalReviewPages]
  );

  useRevealOnChange(filter, reviewPage);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxProject(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxProject]);

  return (
    <>
      <Navigation />
      <HeroSection />

      <div className="wave-divider">
        <svg
          viewBox="0 0 1440 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 0 Q360 50 720 25 Q1080 0 1440 40 L1440 0 Z" fill="#0a0e1a" />
        </svg>
      </div>

      <section id="about">
        <svg
          className="kamon-deco"
          style={{ top: "10%", right: "5%", width: 300, height: 300 }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="95" fill="none" stroke="#ff6fa8" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#ff6fa8" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="#ff6fa8" strokeWidth="1" />
          <g stroke="#ff6fa8" strokeWidth="0.5" fill="none">
            <line x1="100" y1="5" x2="100" y2="195" />
            <line x1="5" y1="100" x2="195" y2="100" />
            <line x1="33" y1="33" x2="167" y2="167" />
            <line x1="167" y1="33" x2="33" y2="167" />
            <path d="M100 55 C120 55 140 80 140 100 C140 120 120 145 100 145 C80 145 60 120 60 100 C60 80 80 55 100 55 Z" />
          </g>
          <circle cx="100" cy="100" r="8" fill="#ff6fa8" opacity="0.6" />
        </svg>

        <div className="container">
          <div className="about-grid">
            <div className="about-photo-wrap reveal">
              <div className="about-photo-deco" />
              <div className="about-photo-frame">
                <img src="/software-engineer.png" alt="Hayashi Yuto" />
              </div>
              <div className="about-photo-badge">
                <span className="kanji">林</span>
                <span className="romaji">HAYASHI</span>
              </div>
            </div>

            <div
              className="about-text reveal"
              style={{ transitionDelay: "0.15s" }}
            >
              <div className="section-tag">About Me</div>
              <h2 className="section-title">
                <span className="jp">自己紹介</span> Crafting Digital
                <br />
                Experiences
              </h2>
              <p className="about-bio">
                I&apos;m Hayashi Yuto, a full-stack developer and digital
                craftsman specializing in Web, Mobile, AI/SaaS, and Automation.
                I blend the precision of Japanese craftsmanship with modern
                technology to build products that are both functional and
                beautiful.
              </p>
              <p className="about-bio" style={{ marginTop: -16 }}>
                From cross-platform mobile apps and intelligent web platforms to
                immersive 3D browser games — I architect solutions end-to-end,
                with a focus on performance, elegance, and user experience.
              </p>

              <div className="about-highlights">
                <div className="about-hl-item">
                  <i className="fa-solid fa-globe" /> Web & SaaS Development
                </div>
                <div className="about-hl-item">
                  <i className="fa-solid fa-mobile-alt" /> iOS & Android Apps
                </div>
                <div className="about-hl-item">
                  <i className="fa-solid fa-brain" /> AI & Automation
                </div>
                <div className="about-hl-item">
                  <i className="fa-solid fa-gamepad" /> Game Development
                </div>
                <div className="about-hl-item">
                  <i className="fa-solid fa-cube" /> 3D Modeling & WebGL
                </div>
                <div className="about-hl-item">
                  <i className="fa-solid fa-wand-magic-sparkles" /> UI/UX Design
                </div>
              </div>

              <div className="about-quote">
                <span className="quote-jp">匠の技、現代へ</span> &quot;The spirit
                of the craftsman — applied to every pixel, every function,
                every experience.&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="skills-header reveal">
            <div className="section-tag">Expertise</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              <span className="jp" style={{ textAlign: "center" }}>
                技術スタック
              </span>{" "}
              Technology Stack
            </h2>
            <p className="section-sub" style={{ textAlign: "center" }}>
              A diverse arsenal of tools and technologies for building at every
              layer of the stack.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card reveal">
              <span className="skill-card-icon">🌐</span>
              <div className="skill-card-title">Web & Frontend</div>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Three.js</span>
                <span className="skill-tag">WebGL</span>
                <span className="skill-tag">HTML5 / CSS3</span>
              </div>
            </div>

            <div className="skill-card reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="skill-card-icon">⚙️</span>
              <div className="skill-card-title">Backend & APIs</div>
              <div className="skill-tags">
                <span className="skill-tag gold">Node.js</span>
                <span className="skill-tag gold">Python</span>
                <span className="skill-tag gold">Laravel / PHP</span>
                <span className="skill-tag gold">REST API</span>
                <span className="skill-tag gold">GraphQL</span>
                <span className="skill-tag gold">Firebase</span>
                <span className="skill-tag gold">PostgreSQL</span>
                <span className="skill-tag gold">MySQL</span>
              </div>
            </div>

            <div className="skill-card reveal" style={{ transitionDelay: "0.2s" }}>
              <span className="skill-card-icon">📱</span>
              <div className="skill-card-title">Mobile</div>
              <div className="skill-tags">
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Android (Kotlin)</span>
                <span className="skill-tag">iOS (Swift)</span>
                <span className="skill-tag">Dart</span>
                <span className="skill-tag">Push Notifications</span>
                <span className="skill-tag">In-App Payments</span>
              </div>
            </div>

            <div className="skill-card reveal" style={{ transitionDelay: "0.3s" }}>
              <span className="skill-card-icon">🤖</span>
              <div className="skill-card-title">AI & Automation</div>
              <div className="skill-tags">
                <span className="skill-tag cyan">OpenAI API</span>
                <span className="skill-tag cyan">TensorFlow</span>
                <span className="skill-tag cyan">LangChain</span>
                <span className="skill-tag cyan">Computer Vision</span>
                <span className="skill-tag cyan">NLP</span>
                <span className="skill-tag cyan">Python ML</span>
                <span className="skill-tag cyan">Zapier / n8n</span>
                <span className="skill-tag cyan">Web Scraping</span>
              </div>
            </div>

            <div className="skill-card reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="skill-card-icon">🎮</span>
              <div className="skill-card-title">Game Dev & 3D</div>
              <div className="skill-tags">
                <span className="skill-tag">Unity</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">Construct 3</span>
                <span className="skill-tag">Three.js</span>
                <span className="skill-tag">Blender</span>
                <span className="skill-tag">Low Poly Modeling</span>
                <span className="skill-tag">UV Mapping</span>
                <span className="skill-tag">Game Design</span>
              </div>
            </div>

            <div className="skill-card reveal" style={{ transitionDelay: "0.2s" }}>
              <span className="skill-card-icon">☁️</span>
              <div className="skill-card-title">DevOps & Tools</div>
              <div className="skill-tags">
                <span className="skill-tag gold">Git / GitHub</span>
                <span className="skill-tag gold">Docker</span>
                <span className="skill-tag gold">AWS</span>
                <span className="skill-tag gold">Vercel / Netlify</span>
                <span className="skill-tag gold">CI/CD</span>
                <span className="skill-tag gold">Figma</span>
                <span className="skill-tag gold">VS Code</span>
                <span className="skill-tag gold">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="projects-header reveal">
            <div className="section-tag">Portfolio</div>
            <h2 className="section-title">
              <span className="jp">作品集</span> Selected Works
            </h2>
          </div>

          <div
            className="project-filters reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            {(
              [
                ["all", "All Projects"],
                ["web", "Web & SaaS"],
                ["mobile", "Mobile"],
                ["game", "Games"],
                ["3d", "3D Art"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`filter-btn${filter === key ? " active" : ""}`}
                data-filter={key}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="projects-grid" id="projects-grid">
            {PROJECTS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`project-card reveal${filter !== "all" && filter !== p.cat ? " hidden" : ""}`}
                data-cat={p.cat}
                onClick={() => setLightboxProject(p)}
              >
                <div className="project-thumb">
                  <img
                    src={p.thumb}
                    alt={p.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0.2";
                    }}
                  />
                  <div className="project-overlay">
                    <span className="project-cat-badge">{CAT_LABELS[p.cat]}</span>
                    <span className="project-view-btn">View Project</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews">
        <div className="container">
          <div className="reviews-header reveal">
            <div className="section-tag">Client Reviews</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              <span className="jp" style={{ textAlign: "center" }}>
                クライアントの声
              </span>{" "}
              What Clients Say
            </h2>
            <p className="section-sub" style={{ textAlign: "center" }}>
              Trusted by clients across 8 countries — from Tokyo to Toronto, São
              Paulo to Berlin.
            </p>
          </div>

          <div
            className="reviews-summary reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="reviews-avg">
              <div className="reviews-avg-num">5.0</div>
              <div className="reviews-avg-stars">★★★★★</div>
              <div className="reviews-total">30 reviews</div>
              <div className="reviews-avg-label">Overall Rating</div>
            </div>
            <div className="reviews-flags">
              <div className="flag-chip">
                <img src="https://flagcdn.com/w40/jp.png" alt="JP" /> Japan (4)
              </div>
              <div className="flag-chip">
                <img src="https://flagcdn.com/w40/br.png" alt="BR" /> Brasil (5)
              </div>
              <div className="flag-chip">
                <img src="https://flagcdn.com/w40/es.png" alt="ES" /> España (5)
              </div>
              <div className="flag-chip">
                <img src="https://flagcdn.com/w40/mx.png" alt="MX" /> México (6)
              </div>
              <div className="flag-chip">
                <img src="https://flagcdn.com/w40/ca.png" alt="CA" /> Canada (3)
              </div>
              <div className="flag-chip">
                <img src="https://flagcdn.com/w40/us.png" alt="US" /> United
                States (5)
              </div>
              <div className="flag-chip">
                <img src="https://flagcdn.com/w40/pt.png" alt="PT" /> Portugal
                (4)
              </div>
              <div className="flag-chip">
                <img src="https://flagcdn.com/w40/de.png" alt="DE" /> Deutschland
                (4)
              </div>
            </div>
          </div>

          <div ref={reviewsGridRef} className="reviews-grid" id="reviews-grid">
            {reviewSlice.map((r) => (
              <ReviewCard key={`${r.name}-${r.project}`} r={r} />
            ))}
          </div>

          <div className="reviews-pagination" id="reviews-pagination">
            <button
              type="button"
              className="page-btn arrow"
              disabled={reviewPage === 1}
              onClick={() => goReviewPage(reviewPage - 1)}
              aria-label="Previous page"
            >
              &#8592;
            </button>
            {Array.from({ length: totalReviewPages }, (_, i) => i + 1).map(
              (n) => (
                <button
                  key={n}
                  type="button"
                  className={`page-btn${reviewPage === n ? " active" : ""}`}
                  onClick={() => goReviewPage(n)}
                >
                  {n}
                </button>
              )
            )}
            <button
              type="button"
              className="page-btn arrow"
              disabled={reviewPage === totalReviewPages}
              onClick={() => goReviewPage(reviewPage + 1)}
              aria-label="Next page"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">林 雄斗</div>
            <p className="footer-copy">
              © {new Date().getFullYear()} Hayashi Yuto. Crafted with 🌸 & code.
            </p>
          </div>
        </div>
      </footer>

      <div
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-hidden={!lightboxProject}
        className={lightboxProject ? "open" : ""}
        onClick={(e) => {
          if (e.target === e.currentTarget) setLightboxProject(null);
        }}
      >
        <div className="lightbox-inner" id="lightbox-inner">
          <button
            type="button"
            className="lightbox-close"
            id="lightbox-close"
            aria-label="Close"
            onClick={() => setLightboxProject(null)}
          >
            ✕
          </button>
          <div id="lightbox-content">
            {lightboxProject ? (
              <>
                <div className="lightbox-cat">
                  {CAT_LABELS[lightboxProject.cat]}
                </div>
                <h2 className="lightbox-title">{lightboxProject.title}</h2>
                <p className="lightbox-desc">{lightboxProject.desc}</p>
                <div className="lightbox-tags">
                  {lightboxProject.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="lightbox-gallery">
                  {lightboxProject.gallery.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${lightboxProject.title} screenshot ${i + 1}`}
                      loading="lazy"
                      onError={(e) => e.currentTarget.remove()}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
