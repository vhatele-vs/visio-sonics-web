import Image from "next/image";
import Link from "next/link";

import { featuredProjects } from "@/lib/content/projects";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import { Card } from "@/components/ui";

export default function FeaturedProjects() {
  return (
    <Section spacing="editorial">
      <Container>

        <Heading
          title={featuredProjects.heading}
          description={featuredProjects.description}
          align="left"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">

          {featuredProjects.items.map((project) => (

            <Card key={project.id}>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />

              </div>

              <div className="mt-6">

                <p className="text-xs uppercase tracking-[0.25em] text-muted">

                  {project.category}

                </p>

                <h3 className="mt-3 text-2xl font-light">

                  {project.title}

                </h3>

                <p className="mt-2 text-sm text-muted">

                  {project.location}

                </p>

                <p className="mt-6 leading-relaxed text-muted">

                  {project.description}

                </p>

                <Link href={project.href} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                  {project.id === "luxury-living" ? "View project" : "Discuss a similar project"}
                  <span aria-hidden="true"> →</span>
                </Link>

              </div>

            </Card>

          ))}

        </div>

      </Container>
    </Section>
  );
}
