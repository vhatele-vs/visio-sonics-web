export default function Philosophy() {
  return (
    <section className="py-28 border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        
        {/* Heading */}
        <div>
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-4">
            Our Philosophy
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Technology Should Disappear.
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
          <p>
            We believe the most advanced environments are the ones where
            technology is never the focus. It simply works—quietly, reliably,
            and in harmony with architecture.
          </p>

          <p>
            Visio Sonics engineers spaces where lighting, sound, security,
            connectivity, and automation integrate seamlessly into everyday
            life, without drawing attention to themselves.
          </p>

          <p>
            The result is not a smarter home. It is a more effortless way of
            living and working.
          </p>
        </div>

      </div>
    </section>
  );
}