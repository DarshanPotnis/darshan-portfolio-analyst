"use client";

import Image from "next/image";
import { resume } from "@/data/resume";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 md:px-10 py-20 border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Education
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resume.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6
                         shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
                         flex items-center justify-between gap-6"
            >
              {/* LEFT: Text */}
              <div className="pr-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-white/70">
                  {edu.institution} · {edu.location}
                </p>
                <p className="mt-2 text-sm text-white/50">{edu.date}</p>
              </div>

              {/* RIGHT: Logo */}
              <div className="flex-shrink-0">
                <div
                  className="h-14 w-14 rounded-xl border border-white/15 bg-black/40
                             flex items-center justify-center
                             transition
                             hover:border-white/40
                             hover:shadow-[0_0_16px_rgba(255,255,255,0.25)]"
                >
                  <Image
                    src={`/logos/${edu.logo}.svg`}
                    alt={edu.institution}
                    width={36}
                    height={36}
                    unoptimized
                    className="invert brightness-200"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
