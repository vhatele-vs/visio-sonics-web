import {
  Container,
  Heading,
  Section,
  Stack,
} from "@/components/layout";

export default function CTA() {
  return (
    <Section
      spacing="finale"
      className="border-t border-white/10 bg-black text-white"
    >
      <Container size="narrow">
        <Stack space="2xl" className="text-center">
          <Heading
            variant="section"
            align="center"
            eyebrow="Start Your Project"
            title="Ready to Build Something Extraordinary?"
            description="Begin a conversation with Visio Sonics and explore how intelligent, invisible technology can transform the way you experience your space."
          />

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Start Your Project
            </button>

            <button className="border border-white/20 px-8 py-3 text-sm font-medium text-white transition hover:border-white">
              Book Consultation
            </button>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}