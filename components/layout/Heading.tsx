import { cn } from "@/lib/utils";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "hero" | "section";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function Heading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "section",
  as = "h2",
  className,
}: HeadingProps) {
  const Title = as;

  const alignment =
    align === "center"
      ? "mx-auto max-w-4xl text-center"
      : "max-w-4xl";

  const titleSize =
    variant === "hero"
      ? "text-6xl md:text-7xl xl:text-8xl"
      : "text-4xl md:text-5xl xl:text-6xl";

  const descriptionWidth =
    variant === "hero"
      ? "max-w-3xl"
      : "max-w-2xl";

  return (
    <header className={cn(alignment, className)}>

      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/45">
          {eyebrow}
        </p>
      )}

      <Title
        className={cn(
          "mt-8 font-light leading-[0.96] tracking-tight",
          titleSize
        )}
      >
        {title}
      </Title>

      {description && (
        <p
          className={cn(
            "mt-10 text-lg leading-relaxed text-white/68",
            descriptionWidth,
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}

    </header>
  );
}