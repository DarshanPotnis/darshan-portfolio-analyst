"use client";

import Image from "next/image";
import { resume } from "@/data/resume";
import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <section className="px-6 md:px-10 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resume.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6
                         shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              {/* Logos */}
              <div className="flex items-center gap-3 mb-4">
                {h.logos?.map((logo) => (
                  <div
                    key={logo}
                    className="h-10 w-10 rounded-xl border border-white/15 bg-black/40
                               flex items-center justify-center
                               transition transform
                               hover:border-white/40 hover:-translate-y-0.5 hover:scale-[1.03]
                               hover:shadow-[0_0_14px_rgba(255,255,255,0.25)]"
                  >
                    <Image
                      src={`/logos/${logo}.svg`}
                      alt={logo}
                      width={20}
                      height={20}
                      unoptimized
                      className="invert brightness-200"
                    />
                  </div>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-white/60">{h.label}</p>
              <p className="mt-2 text-lg font-semibold tracking-tight">
                {h.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
