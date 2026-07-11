import { aboutHero } from "@/lib/content/about";
import { Button } from "@/components/ui";
import {
  Container,
  Heading,
  Section,
  Stack,
} from "@/components/layout";

export default function AboutHero() {
  return (
    <Section
      spacing="hero"
      className="bg-black text-white"
    >
      <Container size="wide">
        <Stack space="3xl">
          <Heading
            variant="hero"
            eyebrow={aboutHero.eyebrow}
            title={aboutHero.title}
            description={aboutHero.description}
          />

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={aboutHero.primaryButton.href}>
              {aboutHero.primaryButton.label}
            </Button>

            <Button
              href={aboutHero.secondaryButton.href}
              variant="outline"
            >
              {aboutHero.secondaryButton.label}
            </Button>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}