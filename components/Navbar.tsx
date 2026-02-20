"use client";

import { useEffect, useMemo, useState } from "react";
import { resume } from "@/data/resume";

type SectionId = "work" | "experience" | "skills" | "education" | "contact";

export default function Navbar() {
  const links = useMemo(
    () =>
      [
        { id: "work", label: "Work" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
      ] as const,
    []
  );

  const [active, setActive] = useState<SectionId>("work");

  useEffect(() => {
    const ids = links.map((l) => l.id) as SectionId[];

    const getActiveSection = () => {
      // If user is near the bottom, force Contact active (footer highlight fix)
      const scrollBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 20;
      if (scrollBottom) return "contact" as SectionId;

      // Choose the section whose top is closest to a “reading line” below navbar
      const targetY = 120; // px from top; tweak if you change navbar height
      let bestId: SectionId = "work";
      let bestDist = Number.POSITIVE_INFINITY;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - targetY);

        // Prefer sections that are above or near the target line
        if (rect.top <= targetY + 80 && dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }

      return bestId;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const next = getActiveSection();
        setActive((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    onScroll(); // initialize once
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [links]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Left brand */}
        <a
          href="#"
          className="text-sm md:text-base font-medium tracking-tight hover:text-white/90 transition"
        >
          {resume.name}
        </a>

        {/* Right nav */}
        <nav className="flex items-center gap-6">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`text-sm transition rounded-md px-1 py-1
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                  ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
