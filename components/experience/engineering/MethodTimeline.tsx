"use client";

import MethodStage from "./MethodStage";
import { engineeringStages } from "./engineering.data";

export default function MethodTimeline() {
  return (
    <section
      id="engineering-method"
      className="relative overflow-hidden bg-background"
    >
      {/* Editorial Chapter Header */}

      <div className="site-container pt-[var(--vs-editorial-space)]">

        <span className="text-[11px] uppercase tracking-[0.55em] text-[var(--vs-accent)]">
          ENGINEERING METHODOLOGY
        </span>

        <div className="mt-6 h-px w-24 bg-white/10" />

        <h2 className="mt-12 max-w-5xl text-5xl md:text-6xl xl:text-[6rem] font-light leading-[1.02] tracking-[-0.045em] text-white">
          Engineering
          <br />
          Extraordinary Environments
        </h2>

        <p className="mt-12 max-w-2xl text-lg leading-10 text-muted">
          Every extraordinary home begins long before the first light turns on. Behind every effortless experience is a disciplined process of planning, engineering and meticulous commissioning
        </p>

      </div>

      {/* Method Stages */}

      <div className="mt-48">

        {engineeringStages.map((stage, index) => (
          <MethodStage
            key={stage.id}
            stage={stage}
            reverse={index % 2 === 1}
          />
        ))}

      </div>

    </section>
  );
}