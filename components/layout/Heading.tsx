import { typography } from "@/design";

type HeadingVariant = "hero" | "section";
type HeadingAlign = "left" | "center";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: HeadingVariant;
  align?: HeadingAlign;
  className?: string;
}

export default function Heading({
  eyebrow,
  title,
  description,
  variant = "section",
  align = "left",
  className = "",
}: HeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  const titleStyle =
    variant === "hero"
      ? {
          fontSize: typography.hero.size,
          lineHeight: typography.hero.lineHeight,
          fontWeight: typography.hero.weight,
          letterSpacing: typography.hero.tracking,
        }
      : {
          fontSize: typography.section.size,
          lineHeight: typography.section.lineHeight,
          fontWeight: typography.section.weight,
          letterSpacing: typography.section.tracking,
        };

  return (
    <header
      className={[
        "max-w-3xl",
        "space-y-6",
        alignment,
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <p
          className="uppercase text-orange-500"
          style={{
            fontSize: typography.eyebrow.size,
            lineHeight: typography.eyebrow.lineHeight,
            fontWeight: typography.eyebrow.weight,
            letterSpacing: typography.eyebrow.tracking,
          }}
        >
          {eyebrow}
        </p>
      )}

      <h2 style={titleStyle}>{title}</h2>

      {description && (
        <p
          className="text-neutral-300"
          style={{
            fontSize: typography.lead.size,
            lineHeight: typography.lead.lineHeight,
            fontWeight: typography.lead.weight,
          }}
        >
          {description}
        </p>
      )}
    </header>
  );
}