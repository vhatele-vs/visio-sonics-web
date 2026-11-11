import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
}

const sizes = {
  narrow: "max-w-[var(--vs-container-narrow)]",
  default: "max-w-[var(--vs-container)]",
  wide: "max-w-[var(--vs-container-wide)]",
  full: "max-w-none",
};

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "site-container",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
