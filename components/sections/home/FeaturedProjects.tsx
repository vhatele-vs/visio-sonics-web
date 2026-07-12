"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";
import ImageFrame from "@/components/ui/ImageFrame";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { featuredProjects } from "@/lib/content/projects";

export default function FeaturedProjects() {
  return (
    <Section id="featured-projects" spacing="editorial">
      <Container>
        <Heading
          eyebrow="SELECTED WORK"
          title={featuredProjects.heading}
          description={featuredProjects.description}
          align="center"
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {featuredProjects.items.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
            >
              <div className="relative aspect-[4/3]">
                <ImageFrame
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full rounded-none border-0 bg-transparent"
                />
              </div>

              <div className="space-y-5 p-8">
                <Badge variant="accent">{project.category}</Badge>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--vs-text-muted)]">
                    {project.location}
                  </p>

                  <h3 className="mt-3 text-2xl font-light text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="leading-8 text-[var(--vs-text-muted)]">
                  {project.description}
                </p>

                <Button
                  href={project.href}
                  variant="secondary"
                  className="mt-2"
                >
                  View Project
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
