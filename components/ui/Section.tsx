interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-32 lg:py-40 ${className}`}>
      {children}
    </section>
  );
}