"use client";

import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
} from "@/_components/animations/fade/FadeInStaggered";
import { MotionTechCard } from "@/app/_sections/about/components/TechCard";

import DividerWithText from "@/_components/common/divider/DividerWithText";

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
      <DividerWithText
        className="mt-5"
        textStyle="font-heading font-semibold text-xl"
      >
        {heading}
      </DividerWithText>
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
