import { ReactNode } from "react";
import { containers } from "@/design/tokens";

type ContainerSize = "narrow" | "default" | "wide";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

export default function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full",
        containers.widths[size],
        containers.padding.mobile,
        containers.padding.tablet,
        containers.padding.desktop,
        containers.padding.wide,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}