import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  spacing?:
    | "none"
    | "compact"
    | "default"
    | "editorial"
    | "showcase"
    | "hero";
}

const spacingMap = {
  none: "",

  compact:
    "py-[calc(var(--vs-section-space)*0.75)]",

  default:
    "py-[var(--vs-section-space)]",

  editorial:
    "py-[var(--vs-editorial-space)]",

  showcase:
    "py-[var(--vs-editorial-space)]",

  hero:
    "pt-[var(--vs-hero-top)] pb-[var(--vs-section-space)]",
};

export default function Section({
  children,
  id,
  className,
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        spacingMap[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}
