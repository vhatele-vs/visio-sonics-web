import FadeUp from "@/components/motion/FadeUp";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureListProps {
  eyebrow: string;
  title: string;
  items: FeatureItem[];
}

export default function FeatureList({
  eyebrow,
  title,
  items,
}: FeatureListProps) {
  return (
    <Section>
      <Container>
        <FadeUp>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
              {eyebrow}
            </p>

            <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl">
              {title}
            </h2>
          </div>
        </FadeUp>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {items.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <article className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-light text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-[var(--vs-text-muted)]">
                  {item.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}