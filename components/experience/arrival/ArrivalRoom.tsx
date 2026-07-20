"use client";

import GlassHeader from "./GlassHeader/GlassHeader";
import Hero from "./Hero/Hero";

export default function ArrivalRoom() {
  return (
    <section
      id="arrival"
      aria-label="Visio Sonics introduction"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
      "
    >
      <GlassHeader />

      <Hero />
    </section>
  );
}