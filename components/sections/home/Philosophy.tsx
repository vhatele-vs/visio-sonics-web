import {
  Container,
  Grid,
  Heading,
  Section,
  Stack,
} from "@/components/layout";

export default function Philosophy() {
  return (
    <Section
      spacing="editorial"
      className="border-t border-white/10 bg-black text-white"
    >
      <Container>
        <Grid columns={2} gap="xl">
          <Heading
            eyebrow="Our Philosophy"
            title="Technology Should Disappear."
          />

          <Stack space="xl" className="text-lg leading-relaxed text-white/70">
            <p>
              We believe the most advanced environments are the ones where
              technology is never the focus. It simply works—quietly,
              reliably, and in harmony with architecture.
            </p>

            <p>
              Visio Sonics engineers spaces where lighting, sound,
              security, connectivity, and automation integrate seamlessly
              into everyday life without drawing attention to themselves.
            </p>

            <p>
              The result is not a smarter home. It is a more effortless
              way of living and working.
            </p>
          </Stack>
        </Grid>
      </Container>
    </Section>
  );
}