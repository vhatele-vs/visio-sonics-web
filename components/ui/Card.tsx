type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <article
      className={[
        "rounded-[32px]",
        "border border-white/10",
        "bg-[var(--vs-surface)]",
        "transition-all duration-500",
        "hover:border-[var(--vs-accent)]/50",
        "hover:-translate-y-1",
        className,
      ].join(" ")}
    >
      {children}
    </article>
  );
}