"use client";

import { resume } from "@/data/resume";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Skills
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Core analytics, data engineering, and tooling skills used across
          production systems and decision-making workflows.
        </p>

        <div className="mt-10 space-y-8">
          {resume.skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <h3 className="text-sm font-medium text-white/80 mb-3">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs md:text-sm text-white/80 bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
