import { aboutHero } from "@/lib/content/about";
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
        </Stack>
      </Container>
    </Section>
  );
}