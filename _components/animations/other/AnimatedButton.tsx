import { motion } from "motion/react";

type Props = {
  children: string;
  stiffness?: number;
  damping?: number;
};

function AnimatedButton({ children, stiffness = 300, damping = 15 }: Props) {
  return (
    <motion.button
      className="border p-2 rounded-md bg-background text-foreground"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness, damping }}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;

// easeIn - for dropping fast (fast at end)
// easeOut - for soft animations (slows at end)
