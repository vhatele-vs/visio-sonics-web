type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="rounded-full border border-[var(--vs-accent)] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[var(--vs-accent)]">
      {children}
    </span>
  );
}