export const revealTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const revealProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: revealTransition,
};
