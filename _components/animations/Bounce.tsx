"use client";

import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  midPosition?: number;
  duration?: number;
  delay?: number;
};

function Bounce({
  children,
  duration = 1,
  midPosition = -10,
  delay = 0,
}: Props) {
  return (
    <motion.div
      animate={{ y: [0, midPosition, 0] }} // array acts as keyframes
      transition={{
        duration,
        repeat: Infinity,
        repeatDelay: 0.2,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Bounce;
