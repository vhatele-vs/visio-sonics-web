"use client";

import PrincipleGrid from "./PrincipleGrid";
import WhyClosing from "./WhyClosing";

export default function WhyRoom() {
  return (
    <section
      id="why"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050505]
      "
    >
      <PrincipleGrid />

      <WhyClosing />
    </section>
  );
}