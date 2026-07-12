import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
}

const sizes = {
  narrow: "max-w-[840px]",
  default: "max-w-[1200px]",
  wide: "max-w-[1440px]",
  full: "max-w-none",
};

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-16 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}