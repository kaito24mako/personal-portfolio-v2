"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function FadeOutOnScroll({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Stay fully visible until the h1 starts leaving, then fade out
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}

export default FadeOutOnScroll;
