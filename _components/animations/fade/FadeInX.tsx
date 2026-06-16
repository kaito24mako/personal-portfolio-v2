"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type Props = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  position?: number;
  duration?: number;
  delay?: number;
};

function FadeInX({
  children,
  position = 40,
  duration = 0.8,
  delay = 0,
  ...props
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeInX;
