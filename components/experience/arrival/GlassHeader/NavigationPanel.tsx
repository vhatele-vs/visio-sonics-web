"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "./glass-header.data";

interface NavigationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationPanel({
  isOpen,
  onClose,
}: NavigationPanelProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Background overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-40
              bg-black/75
              backdrop-blur-xl
            "
          />


          {/* Navigation panel */}

          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-y-0
              right-0
              z-50
              flex
              w-full
              max-w-md
              overflow-y-auto
              flex-col
              border-l
              border-white/10
              bg-[#050505]
              lg:max-w-xl
              xl:max-w-2xl
            "
          >

            {/* Header */}

            <div
              className="
                flex
                h-24
                shrink-0
                items-center
                justify-between
                border-b
                border-white/10
                px-8
                lg:px-12
              "
            >

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-white/50
                "
              >
                Navigation
              </span>


              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white
                  transition
                  duration-300
                  hover:border-[var(--vs-accent)]
                  hover:text-[var(--vs-accent)]
                "
              >
                ✕
              </button>

            </div>


            {/* Brand */}

            <div
              className="
                shrink-0
                border-b
                border-white/10
                px-8
                py-10
                lg:px-12
              "
            >

              <div className="flex items-center gap-5">

                <Image
                  src="/logos/visio-sonics-favicon-dark.svg"
                  alt="Visio Sonics"
                  width={56}
                  height={56}
                  priority
                />


                <div>

                  <h2
                    className="
                      text-sm
                      uppercase
                      tracking-[0.35em]
                      text-white
                    "
                  >
                    Visio Sonics
                  </h2>


                  <p
                    className="
                      mt-2
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-white/40
                    "
                  >
                    Integrate · Engineer · Elevate
                  </p>

                </div>

              </div>

            </div>


            {/* Links */}

            <nav
              aria-label="Main navigation"
              className="
                flex
                flex-1
                items-center
                px-8
                py-12
                lg:px-12
              "
            >

              <div className="w-full space-y-8">

                {navigation.map((item, index) => (

                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                  >

                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/5
                        pb-4
                        text-4xl
                        font-light
                        tracking-[-0.04em]
                        text-white
                        transition
                        duration-300
                        lg:text-5xl
                        hover:text-[var(--vs-accent)]
                      "
                    >

                      {item.label}


                      <span
                        className="
                          opacity-0
                          transition
                          duration-300
                          group-hover:opacity-100
                        "
                      >
                        →
                      </span>

                    </Link>

                  </motion.div>

                ))}

              </div>

            </nav>


            {/* Footer */}

            <div
              className="
                shrink-0
                border-t
                border-white/10
                px-8
                py-10
                lg:px-12
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.28em]
                  text-white/40
                "
              >
                Where Vision Meets Sound
              </p>

            </div>

          </motion.aside>

        </>
      )}
    </AnimatePresence>
  );
}