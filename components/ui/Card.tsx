interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`border border-white/10 bg-white/[0.02] p-10 transition-all duration-500 hover:border-[var(--vs-accent)]/40 hover:bg-white/[0.04] ${className}`}
    >
      {children}
    </div>
  );
}