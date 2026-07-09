import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ProjectCard from "./ProjectCard";
import { featuredProjects } from "./featured-projects.data";

export default function FeaturedProjects() {
  return (
    <Section
      id="featured-projects"
      className="bg-[var(--vs-background)]"
    >
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--vs-accent)]">
              Featured Projects
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight text-white lg:text-5xl">
              Every project is engineered
              <br />
              to become a lasting experience.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[var(--vs-text-muted)]">
              From luxury residences and private cinemas to executive
              boardrooms, our work demonstrates how thoughtful engineering,
              elegant design, and meticulous execution create environments that
              elevate everyday living and business.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center text-sm uppercase tracking-[0.25em] text-[var(--vs-accent)] transition-opacity hover:opacity-80"
          >
            View All Projects →
          </Link>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}