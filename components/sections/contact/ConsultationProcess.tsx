import { consultationProcess } from "@/lib/content/contact";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

export default function ConsultationProcess() {
  return (
    <Section spacing="editorial">
      <Container size="narrow">

        <Heading
          title={consultationProcess.heading}
          description={consultationProcess.description}
          align="left"
        />

        <div className="mt-20 space-y-14 border-l border-white/10 pl-8 md:pl-10">

          {consultationProcess.steps.map((step, index) => (
            <article
              key={step.title}
              className="relative"
            >

              <div
                aria-hidden="true"
                className="
                  absolute
                  -left-[37px]
                  top-2
                  h-3
                  w-3
                  rounded-full
                  bg-[var(--vs-accent)]
                  ring-8
                  ring-black
                  md:-left-[41px]
                "
              />

              <div className="mb-4 flex items-baseline gap-4">

                <span
                  className="
                    text-xs
                    font-medium
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    text-xl
                    font-light
                    tracking-wide
                  "
                >
                  {step.title}
                </h3>

              </div>

              <p
                className="
                  max-w-2xl
                  leading-relaxed
                  text-white/70
                "
              >
                {step.description}
              </p>

            </article>
          ))}

        </div>

      </Container>
    </Section>
  );
}