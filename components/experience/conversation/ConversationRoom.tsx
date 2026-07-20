"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import Link from "next/link";

const luxuryEase: Transition["ease"] = [0.22, 1, 0.36, 1];

const reveal = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: "-100px",
  },
  transition: {
    duration: 0.8,
    ease: luxuryEase,
  },
};

export default function ConversationRoom() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="conversation"
      aria-labelledby="conversation-title"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* Ambient atmosphere */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.08),transparent_75%)]
        "
      />


      <div
        className="
          relative
          mx-auto
          flex
          min-h-[85vh]
          max-w-[1680px]
          items-center
          px-8
          py-32
          md:px-14
          md:py-40
          xl:px-24
        "
      >

        <div className="max-w-5xl">

          {/* Eyebrow */}

          <motion.span
            {...reveal}
            className="
              block
              text-[11px]
              uppercase
              tracking-[0.55em]
              text-[var(--vs-accent)]
            "
          >
            Begin the Conversation
          </motion.span>


          {/* Divider */}

          <motion.div
            initial={
              reducedMotion
                ? { width: 96 }
                : { width: 0 }
            }
            whileInView={{
              width: 96,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: luxuryEase,
            }}
            className="
              mt-6
              h-px
              bg-white/10
            "
          />


          {/* Main statement */}

          <motion.h2
            {...reveal}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: luxuryEase,
            }}
            id="conversation-title"
            className="
              mt-12
              max-w-5xl
              text-balance
              text-[clamp(3rem,5vw,6rem)]
              font-light
              leading-[1.02]
              tracking-[-0.045em]
              text-white
            "
          >
            Every extraordinary
            <br />
            home begins with
            <br />
            one conversation.
          </motion.h2>


          {/* Supporting copy */}

          <motion.p
            {...reveal}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: luxuryEase,
            }}
            className="
              mt-10
              max-w-3xl
              text-base
              leading-8
              text-white/65
              md:mt-12
              md:text-lg
              md:leading-10
            "
          >
            From the earliest stages of a project, we work alongside the people
            shaping the space — bringing architecture, technology and experience
            together before complexity ever reaches the surface.
          </motion.p>


          {/* Primary action only */}

          <motion.div
            {...reveal}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: luxuryEase,
            }}
            className="
              mt-10
              flex
              md:mt-12
            "
          >

            <Link
              href="/contact"
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                rounded-full
                bg-[var(--vs-accent)]
                px-10
                text-sm
                uppercase
                tracking-[0.2em]
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--vs-accent)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#050505]
              "
            >
              Begin a Conversation

              <span
                className="
                  ml-3
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}