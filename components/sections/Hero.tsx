export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center bg-[var(--vs-bg)]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* Content container */}
      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-12">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wider text-[var(--vs-text-muted)]">
            Architectural Intelligence Systems
          </p>

          {/* Main headline */}
          <h1 className="mt-6 text-5xl font-light leading-tight tracking-tight text-white lg:text-6xl">
            Invisible Technology.
            <br />
            Exceptional Spaces.
          </h1>

          {/* Supporting text */}
          <p className="mt-6 text-base leading-relaxed text-[var(--vs-text-muted)] lg:text-lg">
            We design and engineer integrated audio-visual environments for luxury residences, 
            private cinemas, and high-performance commercial spaces.
          </p>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="rounded-full bg-[var(--vs-accent)] px-6 py-3 text-sm uppercase tracking-wider text-black transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white transition hover:border-white/40"
            >
              Book Consultation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}