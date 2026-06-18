"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  sudden?: boolean;
};

function FadeOutOnScroll({ children, className, sudden = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // ref targets the element to be animated
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollRange = sudden ? [0, 0.7, 0.9, 1] : [0, 0.3, 0.7, 1];
  const opacityRange = sudden ? [1, 0.9, 0.7, 0] : [1, 0.8, 0.5, 0];

  const opacity = useTransform(scrollYProgress, scrollRange, opacityRange);

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}

export default FadeOutOnScroll;

// NATIVE CSS VERSION:

// .fade-on-scroll {
//   animation: fade-out linear both;
//   animation-timeline: view();
//   animation-range: exit 0% exit 40%;
// }

// @keyframes fade-out {
//   to { opacity: 0; }
// }
