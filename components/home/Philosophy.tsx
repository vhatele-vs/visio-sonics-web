import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import FadeUp from "@/components/motion/FadeUp";

import { philosophyContent } from "@/lib/content/philosophy";

export default function Philosophy() {
  return (
    <Section className="bg-zinc-950">
      <Container>

        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

          <FadeUp>

            <div>

              <Heading
                eyebrow={philosophyContent.eyebrow}
                title={philosophyContent.title}
              />

              <div className="mt-8 space-y-6 text-lg leading-9 text-zinc-400">

                {philosophyContent.description.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}

              </div>

            </div>

          </FadeUp>

          <FadeUp delay={0.2}>

            <div className="relative overflow-hidden rounded-3xl">

              <Image
                src="/images/philosophy.png"
                alt="Luxury architectural interior"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />

            </div>

          </FadeUp>

        </div>

      </Container>
    </Section>
  );
}