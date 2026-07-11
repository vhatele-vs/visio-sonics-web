interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <article
      className={`rounded-3xl border border-white/10 p-8 ${className}`}
    >
      {children}
    </article>
  );
}