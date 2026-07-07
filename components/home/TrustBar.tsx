import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";
import { trustIndicators } from "@/lib/content/trust";

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-black">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {trustIndicators.map((item, index) => (
            <FadeUp key={item.label} delay={index * 0.12}>
              <div className="py-10 text-center">
                <div className="font-display text-3xl font-light tracking-wide text-white">
                  {item.value}
                </div>

                <div className="mt-3 text-xs uppercase tracking-[0.28em] text-zinc-400">
                  {item.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}