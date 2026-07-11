import { ReactNode } from "react";
import { spacing } from "@/design";

type SectionSpacing =
  | "hero"
  | "editorial"
  | "showcase"
  | "finale"
  | "compact"
  | "default";

interface SectionProps {
  id?: string;
  children: ReactNode;
  spacing?: SectionSpacing;
  className?: string;
}

export default function Section({
  id,
  children,
  spacing: spacingVariant = "default",
  className = "",
}: SectionProps) {
  const spacingClass =
    spacingVariant === "compact"
      ? spacing.section.compact
      : spacingVariant === "default"
      ? spacing.section.default
      : spacing.editorial[spacingVariant];

  return (
    <section
      id={id}
      className={[
        "relative",
        spacingClass,
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}