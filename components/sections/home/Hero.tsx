export default function Hero() {
  return (
    <section className="h-screen flex items-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <p className="text-white/60 text-sm mb-4 tracking-widest uppercase">
          Visio Sonics
        </p>

        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          The Build Starts Here
        </h1>

        <p className="mt-6 max-w-2xl text-white/70 text-lg">
          Engineering intelligent environments where technology becomes invisible and architecture remains in control.
        </p>

        <div className="mt-10 flex gap-6">
          <button className="bg-white text-black px-6 py-3 text-sm">
            Start Your Project
          </button>

          <button className="text-white border border-white/30 px-6 py-3 text-sm">
            Explore Our Process
          </button>
        </div>
      </div>
    </section>
  );
}