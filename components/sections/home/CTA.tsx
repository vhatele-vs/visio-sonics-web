import {
  Container,
  Section,
} from "@/components/layout";

import {
  Button,
  Eyebrow,
  TextLink,
} from "@/components/ui";

import { homeCTA } from "@/lib/content/home";

export default function CTA() {
  return (
    <Section
      spacing="hero"
      className="border-t border-white/10"
    >
      <Container size="narrow">

        <div className="mx-auto max-w-4xl text-center">

          <Eyebrow>
            {homeCTA.eyebrow}
          </Eyebrow>

          <h2 className="mt-8 text-5xl font-light leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
            {homeCTA.heading}
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-xl leading-9 text-white/68">
            {homeCTA.description}
          </p>

          <div className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row">

            <Button href={homeCTA.primaryButton.href}>
              {homeCTA.primaryButton.label}
            </Button>

            <TextLink href={homeCTA.secondaryButton.href}>
              {homeCTA.secondaryButton.label}
            </TextLink>

          </div>

        </div>

      </Container>
    </Section>
  );
}