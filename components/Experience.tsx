"use client";

import { resume } from "@/data/resume";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Experience
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Internships focused on analytics engineering, KPI reporting, ETL pipelines, and
          production-grade data quality.
        </p>

        <div className="mt-10 space-y-6">
          {resume.experience.map((job, idx) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-white/70">
                    {job.company} • {job.location}
                  </p>
                </div>

                <div className="text-sm text-white/60 md:text-right">
                  {job.date}
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm md:text-base text-white/70 leading-relaxed">
                {job.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
