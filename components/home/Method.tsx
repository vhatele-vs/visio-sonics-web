import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

import MethodStep from "./MethodStep";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Every remarkable environment begins with understanding how people live, work and experience a space. We listen first so every solution reflects the people who inhabit it.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Technology is engineered around architecture rather than added afterwards. Lighting, audio, security and control become one cohesive design language.",
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "Precision installation and commissioning ensure every system performs beautifully while remaining virtually invisible within the architecture.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Our relationship continues beyond completion through optimisation, maintenance and future-ready upgrades that protect your investment.",
  },
];

export default function Method() {
  return (
    <Section
  id="method"
  className="bg-black"
>

      <Container>

        <Heading
          eyebrow="THE VISIO SONICS METHOD"
          title="Extraordinary environments begin long before installation."
        />

        <div className="mt-24">

          {steps.map((step) => (
            <MethodStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}