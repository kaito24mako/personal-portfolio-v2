"use client";

import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  position?: number;
  duration?: number;
  delay?: number;
  ease?: "easeIn" | "easeOut" | "easeInOut";
};

function Bounce({
  children,
  className = "",
  duration = 1,
  position = -10,
  delay = 0,
  ease = "easeOut",
  ...props
}: Props) {
  return (
    <motion.div
      animate={{ x: [0, position, 0] }} // array acts as keyframes
      transition={{
        duration,
        repeat: Infinity,
        repeatDelay: 0.2,
        delay,
        ease,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Bounce;
