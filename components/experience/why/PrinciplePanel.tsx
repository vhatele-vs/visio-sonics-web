"use client";

import { motion } from "framer-motion";

import type { Principle } from "./why.data";

interface PrinciplePanelProps {
  principle: Principle;
  reverse?: boolean;
}

export default function PrinciplePanel({
  principle,
  reverse = false,
}: PrinciplePanelProps) {
  const number = String(principle.id).padStart(2, "0");

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050505]
      "
    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.05),transparent_72%)]" />


      <div className="
        relative
        mx-auto
        max-w-[1680px]
        px-8
        py-40
        md:px-14
        lg:py-56
        xl:px-24
      ">

        <div
          className={[
            "grid items-center gap-20 xl:grid-cols-12",
            reverse ? "xl:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >

          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? 40 : -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="xl:col-span-3"
          >
            <span
              className="
                text-[9rem]
                font-extralight
                leading-none
                tracking-[-0.08em]
                text-white/[0.035]
                md:text-[11rem]
                xl:text-[13rem]
              "
            >
              {number}
            </span>
          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? -40 : 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="xl:col-span-9"
          >

            <span className="
              text-[11px]
              uppercase
              tracking-[0.55em]
              text-[var(--vs-accent)]
            ">
              Principle {number}
            </span>


            <div className="mt-6 h-px w-24 bg-white/10" />


            <h2 className="
              mt-10
              max-w-4xl
              text-balance
              text-5xl
              font-light
              leading-[1.02]
              tracking-[-0.045em]
              text-white
              md:text-6xl
              xl:text-[5.5rem]
            ">
              {principle.title}
            </h2>


            <p className="
              mt-12
              max-w-2xl
              text-lg
              leading-10
              text-white/70
            ">
              {principle.statement}
            </p>


            <div className="
              mt-16
              h-px
              w-32
              bg-gradient-to-r
              from-[var(--vs-accent)]/60
              to-transparent
            " />

          </motion.div>

        </div>

      </div>

    </section>
  );
}