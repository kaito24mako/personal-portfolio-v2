"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type Props = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  position?: number;
  duration?: number;
  delay?: number;
};

function FadeIn({
  children,
  position = 40,
  duration = 0.8,
  delay = 0,
  className = "",
  ...props
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: position }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
