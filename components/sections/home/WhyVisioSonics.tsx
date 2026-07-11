import {
  Container,
  Grid,
  Heading,
  Section,
  Stack,
} from "@/components/layout";

const reasons = [
  {
    title: "Engineering Before Installation",
    description:
      "Every decision is defined at design level to ensure precision, scalability, and long-term performance.",
  },
  {
    title: "Invisible Technology",
    description:
      "Systems are integrated into the environment so seamlessly that they disappear into daily life.",
  },
  {
    title: "Architectural Harmony",
    description:
      "Technology is designed to respect and enhance architectural intent, not compete with it.",
  },
  {
    title: "Future-Proof Infrastructure",
    description:
      "We design systems that remain relevant, adaptable, and reliable as technology evolves.",
  },
  {
    title: "Long-Term Reliability",
    description:
      "Every installation is engineered for stability, durability, and consistent performance over time.",
  },
  {
    title: "End-to-End Responsibility",
    description:
      "From concept to lifecycle support, we remain accountable for every stage of delivery.",
  },
];

export default function WhyVisioSonics() {
  return (
    <Section
      spacing="showcase"
      className="border-t border-white/10 bg-black text-white"
    >
      <Container>
        <Stack space="2xl">
          <Heading
            eyebrow="Why Visio Sonics"
            title="Engineering Without Compromise"
          />

          <Grid columns={2} gap="lg">
            {reasons.map((item) => (
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