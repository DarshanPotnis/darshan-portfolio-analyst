"use client";

import { resume } from "@/data/resume";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="px-6 md:px-10 py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Achievements
        </h2>

        <div className="mt-8 space-y-4 max-w-3xl">
          {resume.achievements.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm md:text-base text-white/80"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
