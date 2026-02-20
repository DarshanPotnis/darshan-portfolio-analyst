"use client";

import React from "react";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

function AnalyticsViz() {
  // One shared dataset drives BOTH bars + line (so they always match)
  const points = [
    { x: 90, y: 215, bar: 52 },
    { x: 145, y: 200, bar: 68 },
    { x: 200, y: 195, bar: 62 },
    { x: 255, y: 185, bar: 78 },
    { x: 310, y: 165, bar: 92 },
    { x: 365, y: 170, bar: 86 },
    { x: 420, y: 145, bar: 104 },
    { x: 475, y: 120, bar: 118 },
  ] as const;

  const linePath = `M ${points
    .map((p, i) => (i === 0 ? `${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ")}`;

  const baseY = 270; // baseline for bars
  const barW = 28;
  const rx = 10;

  // --- live legend values (subtle realistic deltas) ---
  const [latency, setLatency] = React.useState(18); // ↓ 18%
  const [freshness, setFreshness] = React.useState(12); // ↑ 12%
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    const clamp = (v: number, min: number, max: number) =>
      Math.max(min, Math.min(max, v));

    const id = window.setInterval(() => {
      const dLat = Math.random() * 1.2 - 0.6; // [-0.6, +0.6]
      const dFresh = Math.random() * 1.0 - 0.5; // [-0.5, +0.5]

      setLatency((v) => clamp(Math.round((v + dLat) * 10) / 10, 14.8, 22.4));
      setFreshness((v) =>
        clamp(Math.round((v + dFresh) * 10) / 10, 8.5, 16.8)
      );
      setTick((t) => t + 1);
    }, 2600);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[520px]">
      <div className="absolute -inset-6 rounded-[32px] bg-white/5 blur-2xl opacity-60" />

      <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/60">Live KPI Trend</div>
          <div className="text-xs text-white/50">Last 30 days</div>
        </div>

        {/* Floating KPI legend */}
        <div className="pointer-events-none absolute top-12 left-6 flex gap-2">
          <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] text-white/75 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            p95 latency{" "}
            <span className="text-white inline-flex items-center gap-1">
              ↓
              <span className="inline-grid">
                <motion.span
                  key={`lat-${tick}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {latency.toFixed(1)}%
                </motion.span>
              </span>
            </span>
          </span>

          <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] text-white/75 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            freshness{" "}
            <span className="text-white inline-flex items-center gap-1">
              ↑
              <span className="inline-grid">
                <motion.span
                  key={`fr-${tick}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {freshness.toFixed(1)}%
                </motion.span>
              </span>
            </span>
          </span>
        </div>

        <svg viewBox="0 0 520 340" className="mt-4 h-[260px] w-full" role="img">
          <defs>
            <linearGradient id="trendStroke" x1="40" y1="0" x2="500" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0.25" />
              <stop offset="45%" stopColor="white" stopOpacity="0.95" />
              <stop offset="100%" stopColor="white" stopOpacity="0.35" />
              <animate attributeName="x1" values="0;120;0" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="x2" values="520;640;520" dur="2.8s" repeatCount="indefinite" />
            </linearGradient>

            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* grid */}
          <g opacity="0.35">
            {[70, 120, 170, 220, 270].map((y) => (
              <line
                key={y}
                x1="40"
                x2="500"
                y1={y}
                y2={y}
                stroke="white"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
            ))}
            {[140, 240, 340, 440].map((x) => (
              <line
                key={x}
                y1="55"
                y2="285"
                x1={x}
                x2={x}
                stroke="white"
                strokeOpacity="0.06"
                strokeWidth="1"
              />
            ))}
          </g>

          {/* bars */}
          <g>
            {points.map((p, i) => (
              <motion.rect
                key={p.x}
                x={p.x - barW / 2}
                y={baseY - p.bar}
                width={barW}
                height={p.bar}
                rx={rx}
                initial={{ opacity: 0, scaleY: 0.7, transformOrigin: "bottom" }}
                animate={{ opacity: 0.35, scaleY: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.12 + i * 0.06,
                  ease: "easeOut",
                }}
                fill="white"
                fillOpacity="0.12"
                stroke="white"
                strokeOpacity="0.12"
              />
            ))}
          </g>

          {/* base line glow */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="white"
            strokeOpacity="0.14"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* main gradient line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="url(#trendStroke)"
            strokeWidth="3.6"
            strokeLinecap="round"
            filter="url(#softGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.05 }}
          />

          {/* streaming overlay */}
          <path
            d={linePath}
            fill="none"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 14"
          >
            <animate attributeName="stroke-dashoffset" values="0;-80" dur="1.8s" repeatCount="indefinite" />
          </path>

          {/* moving dot */}
          <motion.circle
            r="7"
            fill="white"
            fillOpacity="0.92"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <animateMotion
              dur="3.6s"
              repeatCount="indefinite"
              keyTimes="0;1"
              keySplines="0.4 0 0.2 1"
              calcMode="spline"
              path={linePath}
            />
          </motion.circle>

          {/* pulse ring */}
          <motion.circle
            r="14"
            fill="none"
            stroke="white"
            strokeOpacity="0.22"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.0, 0.45, 0.0], scale: [0.85, 1.1, 1.25] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          >
            <animateMotion dur="3.6s" repeatCount="indefinite" path={linePath} />
          </motion.circle>

          {/* baseline */}
          <line
            x1="40"
            x2="500"
            y1={baseY}
            y2={baseY}
            stroke="white"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        </svg>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-white/70">
            p95_ms
          </span>
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-white/70">
            freshness_sla
          </span>
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-white/70">
            cohort_retention
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="px-6 md:px-10 pt-16 md:pt-20 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <p className="text-white/60">{resume.location}</p>

            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
              {resume.name}
            </h1>

            <p className="mt-4 text-2xl md:text-3xl text-white/70">
              {resume.headline}
            </p>

            <p className="mt-7 max-w-xl text-white/65 leading-relaxed">
              {resume.summary}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#work"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                View Work
              </a>

              <a
                href="/Darshan_Potnis_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white
                           transition hover:border-white/40 hover:bg-white/5"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <AnalyticsViz />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}