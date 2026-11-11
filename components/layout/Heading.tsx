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
      ? "text-[clamp(2.5rem,6vw,5.5rem)]"
      : "text-[clamp(2rem,4vw,3.75rem)]";

  const descriptionWidth =
    variant === "hero"
      ? "max-w-3xl"
      : "max-w-2xl";

  return (
    <header className={cn(alignment, className)}>

      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
      )}

      <Title
        className={cn(
          "mt-6 font-display font-normal leading-[1.1] tracking-tight text-balance",
          titleSize
        )}
      >
        {title}
      </Title>

      {description && (
        <p
          className={cn(
            "mt-8 text-base leading-8 text-muted md:text-lg",
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
