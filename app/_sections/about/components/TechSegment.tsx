"use client";

import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
} from "@/_components/animations/FadeInStaggered";
import { MotionTechCard } from "@/_components/common/card/TechCard";

import Divider from "@/_components/common/divider/Divider";

type Tech = {
  text: string;
  src: string;
  alt: string;
};

type Props = {
  tech: Tech[];
  heading: string;
};

function TechSegment({ tech, heading }: Props) {
  return (
    <>
      <Divider className="mt-5 font-heading text-xl font-semibold">
        {heading}
      </Divider>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {tech.map((t) => (
          <MotionTechCard
            key={t.text}
            src={t.src}
            alt={t.alt}
            text={t.text}
            variants={staggerItem}
          />
        ))}
      </motion.div>
    </>
  );
}

export default TechSegment;
