"use client";

type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  highlights: readonly string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm text-white/65 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* stack pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
          >
            {s}
          </span>
        ))}
      </div>

      {/* highlights */}
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/35" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}