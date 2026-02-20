"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { resume } from "@/data/resume";
import React from "react";

/* =========================
   Magnetic Icon Button
   ========================= */

type MagneticProps = {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
};

function MagneticIconButton({
  href,
  label,
  external,
  children,
}: MagneticProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const strength = 0.18;
    el.style.transform = `translate3d(${x * strength}px, ${
      y * strength
    }px, 0) scale(1.03)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0) scale(1)";
  };

  return (
    <a
      ref={ref}
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative grid place-items-center
                 h-14 w-14 md:h-16 md:w-16
                 rounded-2xl border border-white/15 bg-black/45
                 transition-[border,box-shadow] duration-200
                 hover:border-white/40
                 hover:shadow-[0_0_22px_rgba(255,255,255,0.28)]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      style={{
        willChange: "transform",
        transition: "transform 180ms ease",
      }}
    >
      {/* Icon */}
      <div className="text-white">{children}</div>

      {/* Tooltip */}
      <span
        className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2
                   whitespace-nowrap rounded-full border border-white/10
                   bg-black/80 px-3 py-1 text-xs text-white/80
                   opacity-0 translate-y-1
                   transition duration-200
                   group-hover:opacity-100 group-hover:translate-y-0"
      >
        {label}
      </span>
    </a>
  );
}

/* =========================
   Footer Component
   ========================= */

const iconWrap: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const iconItem: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-6 md:px-10 py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Let’s connect
            </h2>

            <p className="mt-4 text-white/70 max-w-md">
              Interested in analytics, data engineering, or product insights?
              I’m always open to meaningful conversations.
            </p>

            {/* ICONS */}
            <motion.div
              variants={iconWrap}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              className="mt-8 flex items-center gap-5"
            >
              <motion.div variants={iconItem}>
                <MagneticIconButton
                  href={`mailto:${resume.email}`}
                  label="Email"
                >
                  <Mail className="h-7 w-7" />
                </MagneticIconButton>
              </motion.div>

              <motion.div variants={iconItem}>
                <MagneticIconButton
                  href={resume.links.linkedin}
                  label="LinkedIn"
                  external
                >
                  <Linkedin className="h-7 w-7" />
                </MagneticIconButton>
              </motion.div>

              <motion.div variants={iconItem}>
                <MagneticIconButton
                  href={resume.links.github}
                  label="GitHub"
                  external
                >
                  <Github className="h-7 w-7" />
                </MagneticIconButton>
              </motion.div>
            </motion.div>

            {/* Meta */}
            <div className="mt-7 space-y-2 text-sm text-white/55">
              <p>{resume.email}</p>
              <p>{resume.location}</p>
            </div>
          </div>

          {/* RIGHT spacer */}
          <div className="hidden md:block" />
        </motion.div>

        <p className="mt-20 text-center text-xs text-white/40">
          © 2026 {resume.name}
        </p>
      </div>
    </footer>
  );
}