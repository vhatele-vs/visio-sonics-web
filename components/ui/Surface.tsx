type SurfaceProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Surface({
  children,
  className = "",
}: SurfaceProps) {
  return (
    <div
      className={[
        "rounded-[40px]",
        "bg-[var(--vs-surface)]",
        "border border-white/10",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}