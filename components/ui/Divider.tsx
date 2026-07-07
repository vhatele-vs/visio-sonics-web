interface DividerProps {
  className?: string;
}

export default function Divider({
  className = "",
}: DividerProps) {
  return (
    <div
      className={`h-px w-full bg-white/10 ${className}`}
    />
  );
}