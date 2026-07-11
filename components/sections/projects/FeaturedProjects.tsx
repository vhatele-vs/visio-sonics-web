import Image from "next/image";

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
                  className="object-cover transition duration-500 hover:scale-105"
                />

              </div>

              <div className="mt-6">

                <p className="text-xs uppercase tracking-[0.25em] text-white/50">

                  {project.category}

                </p>

                <h3 className="mt-3 text-2xl font-light">

                  {project.title}

                </h3>

                <p className="mt-2 text-sm text-white/40">

                  {project.location}

                </p>

                <p className="mt-6 leading-relaxed text-white/70">

                  {project.description}

                </p>

              </div>

            </Card>

          ))}

        </div>

      </Container>
    </Section>
  );
}