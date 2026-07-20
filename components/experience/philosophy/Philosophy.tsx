import PhilosophyBackground from "./PhilosophyBackground";
import PhilosophyNarrative from "./PhilosophyNarrative";
import PhilosophySignature from "./PhilosophySignature";
import PhilosophyStatement from "./PhilosophyStatement";

export default function Philosophy() {
  return (
    <div className="relative min-h-screen">

      <PhilosophyBackground />

      <div className="relative z-10">
        <PhilosophyStatement />
        <PhilosophyNarrative />
        <PhilosophySignature />
      </div>

    </div>
  );
}