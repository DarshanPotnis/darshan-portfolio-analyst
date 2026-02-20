import { resume } from "@/data/resume";
import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  highlights: readonly string[];
};

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Selected Work
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Real-world analytics and data engineering projects focused on business
          impact, performance, and decision-making.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resume.projects.map((project: Project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}