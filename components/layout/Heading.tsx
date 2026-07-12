interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "hero" | "section";
  className?: string;
}

export default function Heading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "section",
  className = "",
}: HeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-4xl text-center"
      : "max-w-4xl";

  const titleSize =
    variant === "hero"
      ? "text-6xl md:text-7xl xl:text-8xl"
      : "text-5xl md:text-6xl xl:text-7xl";

  const descriptionWidth =
    variant === "hero"
      ? "max-w-3xl"
      : "max-w-2xl";

  return (
    <header className={`${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/45">
          {eyebrow}
        </p>
      )}

      <h2
        className={`mt-8 font-light leading-[0.94] tracking-tight ${titleSize}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-10 text-lg leading-9 text-white/68 ${descriptionWidth} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
}