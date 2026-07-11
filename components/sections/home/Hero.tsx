import {
  Container,
  Heading,
  Section,
  Stack,
} from "@/components/layout";

export default function Hero() {
  return (
    <Section
      spacing="hero"
      className="min-h-screen flex items-center bg-black text-white"
    >
      <Container size="wide">
        <Stack space="3xl">
          <Heading
            variant="hero"
            eyebrow="Visio Sonics"
            title="The Build Starts Here"
            description="Engineering intelligent environments where technology becomes invisible and architecture remains the focus."
          />

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Start Your Project
            </button>

            <button className="border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white">
              Explore Our Process
            </button>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}