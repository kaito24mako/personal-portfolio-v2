"use client";

import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  position?: number;
  duration?: number;
  delay?: number;
};

function Bounce({
  children,
  duration = 1,
  position = -10,
  delay = 0,
  ...props
}: Props) {
  return (
    <motion.div
      animate={{ y: [0, position, 0] }} // array acts as keyframes
      transition={{
        duration,
        repeat: Infinity,
        repeatDelay: 0.2,
        delay,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Bounce;
