type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <header className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[var(--vs-accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-light leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-[var(--vs-text-muted)]">
          {description}
        </p>
      )}
    </header>
  );
}