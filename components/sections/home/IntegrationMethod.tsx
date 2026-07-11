import {
  Container,
  Heading,
  Section,
  Stack,
} from "@/components/layout";

const steps = [
  {
    title: "Discovery & Design",
    description:
      "We begin by understanding the architecture, lifestyle, and technical requirements of the environment.",
  },
  {
    title: "Engineering",
    description:
      "Detailed system design is developed across lighting, networking, automation, security, and entertainment.",
  },
  {
    title: "Technology Selection",
    description:
      "We select and align technologies that meet performance, reliability, and integration standards.",
  },
  {
    title: "Programming & Commissioning",
    description:
      "Systems are configured and tested for seamless, one-touch operation.",
  },
  {
    title: "Precision Installation",
    description:
      "Installation is executed with strict adherence to architectural integrity and engineering detail.",
  },
  {
    title: "Lifecycle Support",
    description:
      "Long-term system care ensures continued performance, reliability, and adaptability.",
  },
];

export default function IntegrationMethod() {
  return (
    <Section
      spacing="editorial"
      className="border-t border-white/10 bg-black text-white"
    >
      <Container>
        <Stack space="2xl">
          <Heading
            eyebrow="The Process"
            title="The Integration Method"
          />

          <div className="border-l border-white/10 pl-8">
            <Stack space="2xl">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative"
                >
                  <div className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-white" />

                  <Stack space="md">
                    <h3 className="text-xl font-light">
                      {String(index + 1).padStart(2, "0")}. {step.title}
                    </h3>

                    <p className="max-w-2xl leading-relaxed text-white/70">
                      {step.description}
                    </p>
                  </Stack>
                </article>
              ))}
            </Stack>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}