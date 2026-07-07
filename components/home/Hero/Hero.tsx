import Container from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <Container>
        <HeroContent />
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}