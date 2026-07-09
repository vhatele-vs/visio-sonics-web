import Link from "next/link";

interface ConsultationActionsProps {
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
}

export default function ConsultationActions({
  primary,
  secondary,
}: ConsultationActionsProps) {
  return (
    <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
      <Link
        href={primary.href}
        className="rounded-full bg-[var(--vs-accent)] px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:opacity-90"
      >
        {primary.label}
      </Link>

      <Link
        href={secondary.href}
        className="rounded-full border border-white/15 px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[var(--vs-accent)] hover:text-[var(--vs-accent)]"
      >
        {secondary.label}
      </Link>
    </div>
  );
}