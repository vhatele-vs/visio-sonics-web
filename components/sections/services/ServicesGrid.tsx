const services = [
  "Lighting Control",
  "Home Automation",
  "Networking",
  "Home Cinema",
  "Security Systems",
  "Audio Integration",
  "Infrastructure Design",
  "Lifecycle Support",
];

export default function ServicesGrid() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service}
            className="border border-white/10 p-8 hover:border-white/30 transition"
          >
            <h3 className="text-xl font-light">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}