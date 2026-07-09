import Image from "next/image";
import Link from "next/link";

import type { FeaturedProject } from "./featured-projects.types";

interface ProjectCardProps {
  project: FeaturedProject;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-[var(--vs-accent)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--vs-accent)]">
          {project.category}
        </p>

        <h3 className="mt-4 text-3xl font-light text-white transition-colors duration-300 group-hover:text-[var(--vs-accent)]">
          {project.title}
        </h3>

        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--vs-text-muted)]">
          {project.location}
        </p>

        <p className="mt-6 leading-8 text-[var(--vs-text-muted)]">
          {project.description}
        </p>

        <span className="mt-8 inline-flex items-center text-sm uppercase tracking-[0.25em] text-[var(--vs-accent)]">
          View Project →
        </span>
      </div>
    </Link>
  );
}