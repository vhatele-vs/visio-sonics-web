import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import { Button } from "@/components/ui";

export default function AboutPhilosophy() {
  return (
    <Section spacing="editorial">
      <Container>

        <div className="grid gap-16 lg:grid-cols-2">

          <Heading
            title="Technology is only meaningful when it disappears."
            align="left"
          />


          <div>

            <div
              className="
                space-y-6
                text-lg
                leading-relaxed
                text-white/70
              "
            >
              <p>
                We believe environments should respond to human intent without
                requiring interaction with complex systems.
              </p>

              <p>
                Every system we design is engineered to integrate seamlessly
                into architecture, preserving clarity, comfort, and control.
              </p>

              <p>
                Our focus is not on devices, but on the experience of living
                and working within intelligently designed spaces.
              </p>
            </div>


            <div
              className="
                mt-16
                flex
                justify-center
                lg:justify-start
              "
            >
              <Button
                href="/contact"
                size="lg"
              >
                Schedule a Consultation
              </Button>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}