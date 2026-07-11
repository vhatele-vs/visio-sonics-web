import { companyStory } from "@/lib/content/about";
import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

export default function AboutStory() {
  return (
    <Section spacing="editorial">
      <Container size="narrow">
        <Heading
          title={companyStory.heading}
          align="left"
        />

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-white/70">
          {companyStory.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
}