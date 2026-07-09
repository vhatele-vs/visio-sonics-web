import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

import { experiences } from "@/lib/content/experiences";

export default function Experiences() {
  return (
    <Section className="bg-black">
      <Container>
        <Heading
          eyebrow="CURATED EXPERIENCES"
          title="Technology designed around the way you live."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="group overflow-hidden rounded-3xl bg-zinc-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-light">
                  {experience.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-8">
                  {experience.description}
                </p>

                <Link
                  href={experience.href}
                  className="mt-8 inline-flex text-sm uppercase tracking-[0.25em] text-[var(--vs-accent)]"
                >
                  Discover →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}