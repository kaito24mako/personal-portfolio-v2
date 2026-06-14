"use client";

import { motion } from "motion/react";

// staggerChildren = adds delay to each child's animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function StaggeredFadeIn() {
  const features = ["Fast", "Declarative", "Powerful", "Fun"];

  // variants are used to not repeat code
  return (
    <motion.ul variants={container} initial="hidden" animate="visible">
      {features.map((feature) => (
        <motion.li key={feature} variants={item}>
          {feature}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default StaggeredFadeIn;
