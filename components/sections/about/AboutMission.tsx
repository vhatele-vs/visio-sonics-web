import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

export default function AboutMission() {
  return (
    <Section spacing="editorial">
      <Container size="narrow">

        <Heading
          eyebrow="Our Mission"
          title="To engineer environments that improve how people live and work."
          align="left"
        />

        <p
          className="
            mt-10
            max-w-3xl
            text-lg
            leading-relaxed
            text-white/70
          "
        >
          Through disciplined engineering, architectural sensitivity, and
          intelligent system design, we create spaces where technology is
          invisible, reliable, and fully aligned with human experience.
        </p>

      </Container>
    </Section>
  );
}