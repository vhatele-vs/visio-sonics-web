import { contactFAQ } from "@/lib/content/contact";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

import { Card } from "@/components/ui";

export default function ContactFAQ() {
  return (
    <Section spacing="editorial">
      <Container>

        <Heading
          title={contactFAQ.heading}
          description={contactFAQ.description}
          align="left"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {contactFAQ.items.map((item, index) => (
            <Card
              key={item.question}
            >

              <article>

                <div className="mb-5 flex items-start gap-4">

                  <span
                    className="
                      pt-1
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
                      leading-snug
                      tracking-wide
                    "
                  >
                    {item.question}
                  </h3>

                </div>

                <p
                  className="
                    leading-relaxed
                    text-white/70
                  "
                >
                  {item.answer}
                </p>

              </article>

            </Card>
          ))}

        </div>

      </Container>
    </Section>
  );
}