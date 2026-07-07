export const motionConfig = {
  duration: 0.8,

  ease: [0.22, 1, 0.36, 1] as const,

  viewport: {
    once: true,
    amount: 0.25,
  },

  fadeUp: {
    hidden: {
      opacity: 0,
      y: 32,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeIn: {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },
  },

  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      scale: 1,
    },
  },
} as const;