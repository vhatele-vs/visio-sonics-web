import Philosophy from "./Philosophy";

export default function PhilosophyRoom() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      aria-label="Visio Sonics philosophy"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[var(--vs-background)]
      "
    >
      <Philosophy />
    </section>
  );
}