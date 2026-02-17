import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeSculpted } from "../site/motion";

type PageTransitionProps = {
  children: ReactNode;
  variant?: "default" | "story";
};

const pageMotion = {
  initial: { opacity: 0, y: 30, scale: 0.992, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: -18, scale: 0.99, filter: "blur(6px)" },
  transition: { duration: 0.62, ease: easeSculpted },
};

export default function PageTransition({ children, variant = "default" }: PageTransitionProps) {
  const isStory = variant === "story";

  return (
    <motion.main className={isStory ? "route-page-story relative overflow-x-clip" : "route-page relative overflow-x-clip"} {...pageMotion}>
      <motion.div
        className={isStory ? "pointer-events-none absolute inset-0 z-0 route-shimmer route-shimmer-story" : "pointer-events-none absolute inset-0 z-0 route-shimmer"}
        initial={{ opacity: 0.28, x: "-18%" }}
        animate={{ opacity: 0, x: "14%" }}
        transition={{ duration: 0.72, ease: easeSculpted }}
      />
      <div className="relative z-10">{children}</div>
    </motion.main>
  );
}
