"use client";

import { useEffect, useState } from "react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () =>
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav">
      <a href="#" className="nav-logo">
        林 <span>Hayashi</span>
      </a>
      <ul
        className={`nav-links${menuOpen ? " open" : ""}`}
        id="nav-links"
      >
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>
        </li>
        <li>
          <a
            href="mailto:hayashiyuto.dev@gmail.com"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="nav-toggle"
        id="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
