export default function CTA() {
  return (
    <section className="py-28 border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-4">
          Start Your Project
        </p>

        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Ready to Build Something Extraordinary?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
          Begin a conversation with Visio Sonics and explore how intelligent,
          invisible technology can transform the way you experience your space.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          <button className="bg-white text-black px-8 py-3 text-sm">
            Start Your Project
          </button>

          <button className="border border-white/30 text-white px-8 py-3 text-sm">
            Book Consultation
          </button>

        </div>

      </div>
    </section>
  );
}