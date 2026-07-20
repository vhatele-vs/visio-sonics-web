export default function PhilosophyStatement() {
  return (
    <div className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-32 sm:px-10 lg:px-16">
        <div className="max-w-5xl">
          <p
            id="philosophy-heading"
            className="max-w-4xl text-balance text-[clamp(2.75rem,6vw,7rem)] font-light leading-[0.95] tracking-[-0.045em] text-[var(--vs-text)]"
          >
            Technology should never compete with architecture.
          </p>

          <p className="mt-10 max-w-3xl text-[clamp(2rem,4vw,4.5rem)] font-light leading-[1] tracking-[-0.04em] text-[var(--vs-text-muted)]">
            It should disappear into it.
          </p>
        </div>
      </div>
    </div>
  );
}