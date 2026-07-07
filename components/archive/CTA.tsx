import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-[24px] border border-white/10 bg-[#101010] px-10 py-24 text-center md:px-20">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[var(--vs-accent)]">
            Begin Your Journey
          </p>

          <h2 className="mx-auto mb-8 max-w-4xl text-4xl font-light leading-tight md:text-6xl">
            Let&apos;s design an intelligent environment that feels effortless every day.
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-[var(--vs-text-muted)]">
            Whether you&apos;re building a new home, renovating an existing space,
            or developing a commercial environment, we&apos;d love to help bring
            your vision to life.
          </p>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Button href="/contact">
              Schedule a Consultation
            </Button>

            <Button
              href="/projects"
              variant="secondary"
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}