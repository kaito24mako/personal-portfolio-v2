"use client";

import { motion } from "motion/react";

import EdgeContainer from "@/_components/common/container/EdgeContainer";
import FadeOnScroll from "@/_components/animations/StaggeredFadeIn";

function ProjectsSection() {
  return (
    <EdgeContainer className="flex flex-col items-center bg-background">
      <motion.h1
        className="text-accent text-6xl font-heading"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{
          once: true,
          amount: "some",
        }}
      >
        Projects
      </motion.h1>
      <motion.h2 className="text-foreground-muted text-5xl font-heading">
        2026
      </motion.h2>

      <FadeOnScroll />
    </EdgeContainer>
  );
}

export default ProjectsSection;
