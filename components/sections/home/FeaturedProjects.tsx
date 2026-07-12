"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

const projects = [
  {
    title: "Luxury Residence",
    location: "Johannesburg",
    description:
      "Whole-home automation integrating lighting, audio, security, networking and climate into one invisible ecosystem.",
    href: "/projects/luxury-residence",
  },
  {
    title: "Executive Penthouse",
    location: "Cape Town",
    description:
      "Architectural lighting, cinematic entertainment and enterprise-grade connectivity engineered as one experience.",
    href: "/projects/executive-penthouse",
  },
  {
    title: "Private Estate",
    location: "Pretoria",
    description:
      "Future-ready infrastructure supporting intelligent living across every space of the property.",
    href: "/projects/private-estate",
  },
];

export default function FeaturedProjects() {
  return (
    <Section id="featured-projects">
      <Container>
        <Heading
          eyebrow="SELECTED WORK"
          title="Engineered around architecture. Designed for life."
          description="Every project begins long before the equipment arrives. Our work starts with design, planning and engineering."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[var(--vs-accent)]"
            >
              <div className="aspect-[4/3] bg-white/5" />

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--vs-accent)]">
                  {project.location}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[var(--vs-text-muted)]">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="mt-8 inline-flex items-center text-sm font-medium text-white transition-colors hover:text-[var(--vs-accent)]"
                >
                  View Project →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}