import { consultationProcess } from "@/lib/content/contact";
import {
  Container,
 Heading,
  Section,
} from "@/components/layout";

export default function ConsultationProcess() {
  return (
    <Section spacing="editorial">
      <Container>

        <Heading
          title={consultationProcess.heading}
          description={consultationProcess.description}
          align="left"
        />

        <div className="mt-16 space-y-12 border-l border-white/10 pl-8">
          {consultationProcess.steps.map((step, index) => (
            <div key={step.title} className="relative">

              <div className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-white" />

              <h3 className="mb-2 text-xl font-light">
                {String(index + 1).padStart(2, "0")}. {step.title}
              </h3>

              <p className="max-w-2xl leading-relaxed text-white/70">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}