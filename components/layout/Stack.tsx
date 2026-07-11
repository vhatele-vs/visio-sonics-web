import { ReactNode } from "react";

type StackSpace =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

interface StackProps {
  children: ReactNode;
  space?: StackSpace;
  className?: string;
}

const spacingMap: Record<StackSpace, string> = {
  xs: "space-y-1",
  sm: "space-y-2",
  md: "space-y-4",
  lg: "space-y-6",
  xl: "space-y-8",
  "2xl": "space-y-12",
  "3xl": "space-y-16",
};

export default function Stack({
  children,
  space = "lg",
  className = "",
}: StackProps) {
  return (
    <div
      className={[
        spacingMap[space],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}