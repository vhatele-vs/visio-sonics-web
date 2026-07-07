import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full",
    "px-7 py-3",
    "text-sm uppercase tracking-[0.2em]",
    "transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-[var(--vs-accent)]",
    variant === "solid"
      ? "bg-[var(--vs-accent)] text-black hover:opacity-90"
      : "border border-[var(--vs-accent)] text-white hover:bg-[var(--vs-accent)] hover:text-black",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}