import { Button } from "@/components/ui";

import {
  Container,
  Heading,
  Section,
} from "@/components/layout";

export type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;

  primaryLabel: string;
  primaryHref: string;

  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  eyebrow = "Get Started",
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  const hasSecondary =
    secondaryLabel && secondaryHref;

  return (
    <Section
      spacing="hero"
      className="bg-black text-white"
    >
      <Container
        size="wide"
        className="text-center"
      >
        <Heading
          eyebrow={eyebrow}
          title={title}
          description={description}
          as="h2"
          variant="hero"
        />

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <Button
            href={primaryHref}
            size="lg"
          >
            {primaryLabel}
          </Button>

          {hasSecondary && (
            <Button
              href={secondaryHref}
              variant="secondary"
              size="lg"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </Section>
  );
}