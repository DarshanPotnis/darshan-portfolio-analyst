"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg md:text-xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {project.highlights.map((h) => (
            <li key={h}>• {h}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
