interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center border border-[var(--vs-accent)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--vs-accent)]">
      {children}
    </span>
  );
}