"use client";

import { motion } from "motion/react";

import EdgeContainer from "@/_components/common/container/EdgeContainer";
import HoverButton from "@/_components/animations/AnimatedButton";
import FadeOnScroll from "@/_components/animations/StaggeredFadeIn";

function HomeSection() {
  return (
    <EdgeContainer className="pt-50">
      <motion.h1
        className="font-heading text-6xl md:text-7xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        I&apos;m Kaito
      </motion.h1>
      <h2 className="font-heading text-2xl md:text-3xl opacity-60">
        With passion in web development
      </h2>

      <HoverButton>Click Me</HoverButton>

      <FadeOnScroll />
    </EdgeContainer>
  );
}

export default HomeSection;
