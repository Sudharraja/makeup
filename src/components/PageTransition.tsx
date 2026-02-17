import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.main className="route-page" {...pageMotion}>
      {children}
    </motion.main>
  );
}
