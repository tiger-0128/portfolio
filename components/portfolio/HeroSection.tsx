"use client";

import { useEffect, useRef, useState } from "react";
import { TYPEWRITER_PHRASES } from "./constants";

export function HeroSection() {
  const [typed, setTyped] = useState("");
  const starCanvasRef = useRef<HTMLCanvasElement>(null);
  const sakuraCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const phrases = [...TYPEWRITER_PHRASES];
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    function typeLoop() {
      if (cancelled) return;
      const phrase = phrases[phraseIdx] ?? "";
      if (!deleting) {
        const next = phrase.slice(0, charIdx + 1);
        charIdx++;
        setTyped(next);
        if (charIdx === phrase.length) {
          deleting = true;
          timeoutId = setTimeout(typeLoop, 1800);
          return;
        }
      } else {
        const next = phrase.slice(0, charIdx - 1);
        charIdx--;
        setTyped(next);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(typeLoop, deleting ? 45 : 80);
    }

    typeLoop();
    return () => {
      cancelled = true;
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const starCanvas = starCanvasRef.current;
    if (!starCanvas) return;
    const ctx = starCanvas.getContext("2d");
    if (!ctx) return;

    const stars: {
      x: number;
      y: number;
      r: number;
      a: number;
      speed: number;
      phase: number;
    }[] = [];

    for (let i = 0; i < 280; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random() * 0.75,
        r: Math.random() * 1.3 + 0.2,
        a: Math.random(),
        speed: Math.random() * 0.008 + 0.002,
        phase: Math.random() * Math.PI * 2,
      });
    }

    function resize() {
      const el = starCanvasRef.current;
      if (!el) return;
      el.width = window.innerWidth;
      el.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    function drawStars(t: number) {
      const el = starCanvasRef.current;
      if (!el || !ctx) return;
      ctx.clearRect(0, 0, el.width, el.height);
      for (const s of stars) {
        const alpha = s.a * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(
          s.x * el.width,
          s.y * el.height,
          s.r,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255,255,240,${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(drawStars);
    }
    raf = requestAnimationFrame(drawStars);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const sakuraCanvas = sakuraCanvasRef.current;
    if (!sakuraCanvas) return;
    const ctx = sakuraCanvas.getContext("2d");
    if (!ctx) return;

    type Petal = {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotSpeed: number;
      speedX: number;
      speedY: number;
      alpha: number;
      hue: number;
    };

    const petals: Petal[] = [];

    function resize() {
      const el = sakuraCanvasRef.current;
      if (!el) return;
      el.width = window.innerWidth;
      el.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function randomPetal(fromTop: boolean): Petal {
      const el = sakuraCanvasRef.current;
      const w = el?.width ?? window.innerWidth;
      const h = el?.height ?? window.innerHeight;
      return {
        x: Math.random() * w,
        y: fromTop ? -20 : Math.random() * h,
        size: Math.random() * 7 + 4,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: Math.random() * 1.4 + 0.6,
        alpha: Math.random() * 0.6 + 0.2,
        hue: Math.random() * 20 + 340,
      };
    }

    for (let i = 0; i < 60; i++) petals.push(randomPetal(false));

    function drawPetal(c: CanvasRenderingContext2D, p: Petal) {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);
      c.globalAlpha = p.alpha;
      c.beginPath();
      c.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
      const grad = c.createRadialGradient(0, 0, 0, 0, 0, p.size);
      grad.addColorStop(0, `hsla(${p.hue},90%,85%,1)`);
      grad.addColorStop(1, `hsla(${p.hue},80%,72%,0)`);
      c.fillStyle = grad;
      c.fill();
      c.restore();
    }

    let raf = 0;
    function loop() {
      const el = sakuraCanvasRef.current;
      const c = ctx;
      if (!el || !c) return;
      c.clearRect(0, 0, el.width, el.height);
      for (const p of petals) {
        p.x += p.speedX + Math.sin(p.y * 0.015) * 0.5;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        if (p.y > el.height + 30) Object.assign(p, randomPetal(true));
        drawPetal(c, p);
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-sky" />
        <div className="hero-aurora">
          <div className="aurora-band" />
          <div className="aurora-band" />
          <div className="aurora-band" />
        </div>

        <canvas
          ref={starCanvasRef}
          id="star-canvas"
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
        />

        <svg
          className="hero-scene"
          viewBox="0 0 1440 420"
          preserveAspectRatio="xMidYMax meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 340 Q180 200 360 280 Q500 340 600 300 Q700 260 800 320 Q900 360 1000 300 Q1100 240 1200 290 Q1320 330 1440 280 L1440 420 L0 420 Z"
            fill="rgba(15,25,50,0.6)"
          />
          <path
            d="M580 420 L720 130 L730 110 L740 130 L880 420 Z"
            fill="#0a0e1e"
          />
          <path
            d="M680 420 L720 130 L730 110 L740 130 L790 420 Z"
            fill="#0c1228"
          />
          <path
            d="M715 135 Q723 120 730 108 Q737 120 745 135 Q738 128 730 130 Q722 128 715 135 Z"
            fill="rgba(240,240,255,0.85)"
          />
          <ellipse
            cx="720"
            cy="400"
            rx="120"
            ry="8"
            fill="rgba(100,130,200,0.08)"
          />
          <g opacity="0.7">
            <rect x="80" y="330" width="8" height="80" rx="4" fill="#2a1a0a" />
            <line
              x1="84"
              y1="360"
              x2="50"
              y2="330"
              stroke="#2a1a0a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="84"
              y1="360"
              x2="120"
              y2="325"
              stroke="#2a1a0a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="84" cy="310" r="35" fill="rgba(255,140,180,0.5)" />
            <circle cx="50" cy="318" r="25" fill="rgba(255,160,190,0.45)" />
            <circle cx="118" cy="314" r="28" fill="rgba(255,130,170,0.42)" />
            <circle cx="70" cy="295" r="22" fill="rgba(255,170,200,0.4)" />
            <circle cx="100" cy="292" r="20" fill="rgba(255,150,185,0.38)" />
          </g>
          <g opacity="0.7">
            <rect x="1352" y="330" width="8" height="80" rx="4" fill="#2a1a0a" />
            <line
              x1="1356"
              y1="360"
              x2="1320"
              y2="328"
              stroke="#2a1a0a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="1356"
              y1="360"
              x2="1390"
              y2="325"
              stroke="#2a1a0a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="1356" cy="308" r="38" fill="rgba(255,140,180,0.5)" />
            <circle cx="1320" cy="316" r="26" fill="rgba(255,160,190,0.45)" />
            <circle cx="1388" cy="312" r="30" fill="rgba(255,130,170,0.42)" />
            <circle cx="1340" cy="292" r="22" fill="rgba(255,170,200,0.4)" />
            <circle cx="1374" cy="290" r="20" fill="rgba(255,150,185,0.38)" />
          </g>
          <g opacity="0.5">
            <rect x="200" y="360" width="6" height="55" rx="3" fill="#1a0f06" />
            <circle cx="203" cy="342" r="26" fill="rgba(255,120,170,0.4)" />
            <circle cx="183" cy="348" r="18" fill="rgba(255,140,180,0.35)" />
            <circle cx="222" cy="346" r="20" fill="rgba(255,130,175,0.35)" />
          </g>
          <g opacity="0.5">
            <rect x="1220" y="360" width="6" height="55" rx="3" fill="#1a0f06" />
            <circle cx="1223" cy="342" r="26" fill="rgba(255,120,170,0.4)" />
            <circle cx="1203" cy="348" r="18" fill="rgba(255,140,180,0.35)" />
            <circle cx="1242" cy="346" r="20" fill="rgba(255,130,175,0.35)" />
          </g>
          <g opacity="0.25" transform="translate(630, 230)">
            <rect x="0" y="50" width="6" height="90" fill="#c0304a" />
            <rect x="164" y="50" width="6" height="90" fill="#c0304a" />
            <rect x="-14" y="46" width="198" height="12" rx="4" fill="#c0304a" />
            <rect x="-8" y="34" width="186" height="10" rx="3" fill="#c0304a" />
            <path
              d="M-8 34 Q85 16 178 34"
              stroke="#c0304a"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
          </g>
          <rect x="0" y="408" width="1440" height="12" fill="rgba(8,12,24,0.9)" />
        </svg>

        <div className="hero-moon" />
        <canvas ref={sakuraCanvasRef} id="sakura-canvas" />
      </div>

      <div className="container">
        <div className="hero-content reveal">
          <div className="hero-eyebrow">Portfolio 2025</div>
          <div className="hero-jp-name">中村 朝陽</div>
          <h1 className="hero-name">ASAHI NAKAMURA</h1>
          <p className="hero-role">
            <span className="typed-text">{typed}</span>
            <span className="cursor" />
          </p>
          <p className="hero-tagline">
            「コードは刀。一撃に魂を込める」— Every line of code carries purpose.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#reviews" className="btn-outline">
              Client Reviews
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">30+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div>
              <div className="hero-stat-num">5+</div>
              <div className="hero-stat-label">Years Exp.</div>
            </div>
            <div>
              <div className="hero-stat-num">4</div>
              <div className="hero-stat-label">Platforms</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
