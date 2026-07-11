import {
  Container,
  Grid,
  Heading,
  Section,
  Stack,
} from "@/components/layout";

const experiences = [
  {
    title: "Live Beautifully",
    description:
      "Spaces that respond naturally to daily rhythms, lighting, and comfort without intervention.",
  },
  {
    title: "Entertain Effortlessly",
    description:
      "Immersive sound and cinema environments designed for seamless enjoyment and control.",
  },
  {
    title: "Feel Secure",
    description:
      "Intelligent protection systems that operate quietly in the background with absolute reliability.",
  },
  {
    title: "Stay Connected",
    description:
      "Robust networking infrastructure engineered for uninterrupted performance across all devices.",
  },
];

export default function Experiences() {
  return (
    <Section
      spacing="showcase"
      className="border-t border-white/10 bg-black text-white"
    >
      <Container>
        <Stack space="2xl">
          <Heading
            eyebrow="Experiences"
            title="What We Create"
          />

          <Grid columns={2} gap="lg">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 p-8 transition-colors duration-300 hover:border-white/30"
              >
                <Stack space="lg">
                  <h3 className="text-xl font-light">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </Stack>
              </article>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}