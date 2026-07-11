interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({
  children,
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`text-sm uppercase tracking-[0.3em] text-white/50 ${className}`}
    >
      {children}
    </p>
  );
}