import Image from "next/image";
import Link from "next/link";

import { experiences } from "@/lib/content/home";

import {
  Container,
  Section,
} from "@/components/layout";

import {
  Eyebrow,
  TextLink,
} from "@/components/ui";

export default function Experiences() {
  return (
    <Section spacing="editorial">

      <Container>

        <div className="max-w-3xl">

          <Eyebrow>
            {experiences.eyebrow}
          </Eyebrow>

          <h2 className="mt-8 text-5xl font-light leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
            {experiences.heading}
          </h2>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-white/68">
            {experiences.description}
          </p>

        </div>

        <div className="mt-28 space-y-40">

          {experiences.items.map((item, index) => (
            <article
              key={item.title}
              className="grid items-center gap-20 lg:grid-cols-12"
            >
              <div
                className={`${
                  index % 2 === 0
                    ? "lg:col-span-7"
                    : "lg:col-span-5 lg:order-2"
                }`}
              >
                <Link href={item.href}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[40px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </div>

              <div
                className={`${
                  index % 2 === 0
                    ? "lg:col-span-5"
                    : "lg:col-span-7 lg:order-1"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.30em] text-white/40">
                  {item.category}
                </p>

                <h3 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
                  {item.title}
                </h3>

                <p className="mt-8 max-w-xl text-xl leading-9 text-white/68">
                  {item.description}
                </p>

                <div className="mt-12">
                  <TextLink href={item.href}>
                    Explore Environment
                  </TextLink>
                </div>
              </div>
            </article>
          ))}

        </div>

      </Container>

    </Section>
  );
}