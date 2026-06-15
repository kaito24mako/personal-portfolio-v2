"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function FadeOutOnScroll({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // ref targets the element to be animated
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // first array are the view points
  // second array is the opacity
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [1, 1, 0.5, 0],
  );

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
