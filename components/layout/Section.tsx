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
    "py-20 md:py-24 xl:py-28",

  default:
    "py-24 md:py-32 xl:py-40",

  editorial:
    "py-32 md:py-40 xl:py-48",

  showcase:
    "py-36 md:py-44 xl:py-56",

  hero:
    "pt-36 pb-28 md:pt-44 md:pb-36 xl:pt-52 xl:pb-44",
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