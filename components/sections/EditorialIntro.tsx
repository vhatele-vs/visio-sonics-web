import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export interface EditorialIntroProps {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
}

export default function EditorialIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: EditorialIntroProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <Section>
      <Container>
        <div className={`max-w-4xl ${alignment}`}>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--vs-accent)]">
            {eyebrow}
          </p>

          <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-6xl">
            {title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-[var(--vs-text-muted)]">
            {body}
          </p>
        </div>
      </Container>
    </Section>
  );
}