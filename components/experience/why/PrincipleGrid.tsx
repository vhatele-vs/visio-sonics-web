"use client";

import { motion } from "framer-motion";

import PrinciplePanel from "./PrinciplePanel";
import { principles } from "./why.data";

export default function PrincipleGrid() {
  return (
    <section
      id="why-visio-sonics"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050505]
      "
    >

      <div className="
        mx-auto
        max-w-[1680px]
        px-8
        pt-40
        md:px-14
        lg:pt-56
        xl:px-24
      ">

        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="
            text-[11px]
            uppercase
            tracking-[0.55em]
            text-[var(--vs-accent)]
          ">
            The Difference
          </span>


          <div className="mt-6 h-px w-24 bg-white/10" />


          <h2 className="
            mt-12
            max-w-5xl
            text-[clamp(3rem,5vw,5.5rem)]
            font-light
            leading-[1.02]
            tracking-[-0.045em]
            text-white
          ">
            Why
            <br />
            Visio Sonics
          </h2>


          <p className="
            mt-12
            max-w-2xl
            text-lg
            leading-10
            text-white/70
          ">
            We measure our work not by the technology we install,
            but by the experiences that become effortless,
            timeless, and invisible within exceptional architecture.
          </p>

        </motion.div>

      </div>


      <div className="mt-32">

        {principles.map((principle, index) => (
          <PrinciplePanel
            key={principle.id}
            principle={principle}
            reverse={index % 2 === 1}
          />
        ))}

      </div>

    </section>
  );
}