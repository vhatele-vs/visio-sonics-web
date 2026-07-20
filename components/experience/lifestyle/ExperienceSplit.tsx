"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceSplitProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ExperienceSplit({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: ExperienceSplitProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="mx-auto max-w-[1680px] px-8 py-40 md:px-14 lg:py-56 xl:px-24">

        <div
          className={[
            "grid items-center gap-20 xl:grid-cols-12",
            reverse ? "xl:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >

          {/* Editorial Content */}

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
            className="xl:col-span-5"
          >

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.55em]
                text-[var(--vs-accent)]
              "
            >
              {eyebrow}
            </span>


            <div
              aria-hidden="true"
              className="
                mt-6
                h-px
                w-20
                bg-white/10
              "
            />


            <h2
              className="
                mt-10
                max-w-xl
                text-[clamp(2.5rem,4vw,4rem)]
                font-light
                leading-[1.04]
                tracking-[-0.045em]
                text-white
              "
            >
              {title}
            </h2>


            <p
              className="
                mt-12
                max-w-lg
                text-lg
                leading-10
                text-white/70
              "
            >
              {description}
            </p>

          </motion.div>


          {/* Architectural Image */}

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
            className="xl:col-span-7"
          >

            <div
              className="
                relative
                aspect-[16/10]
                overflow-hidden
                rounded-[40px]
              "
            >

              <Image
                src={image}
                alt={imageAlt}
                fill
                loading="lazy"
                sizes="
                  (min-width:1280px) 60vw,
                  100vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />


              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/15
                  via-transparent
                  to-transparent
                "
              />


              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  rounded-[40px]
                  ring-1
                  ring-inset
                  ring-white/10
                "
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}