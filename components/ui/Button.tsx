import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-none border px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] transition-all duration-300";

  const styles = {
    primary:
      "border-[var(--vs-accent)] bg-[var(--vs-accent)] text-black hover:bg-transparent hover:text-white",

    secondary:
      "border-white/20 bg-transparent text-white hover:border-[var(--vs-accent)] hover:text-[var(--vs-accent)]",
  };

  return (
    <Link
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}