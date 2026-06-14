"use client";

import { motion } from "motion/react";

import EdgeContainer from "@/_components/common/container/EdgeContainer";
import HoverButton from "@/_components/animations/AnimatedButton";
import StaggeredFadeIn from "@/_components/animations/StaggeredFadeIn";
import FadeIn from "@/_components/animations/FadeIn";

function HomeSection() {
  return (
    <EdgeContainer className="pt-50">
      <FadeIn position={60} duration={1.4}>
        <h1 className="font-heading text-6xl md:text-7xl">I&apos;m Kaito</h1>
      </FadeIn>

      <FadeIn position={80} duration={1.3} delay={0.1}>
        <h2 className="font-heading text-2xl md:text-3xl opacity-60">
          With passion in web development
        </h2>
      </FadeIn>

      {/* <HoverButton>Click Me</HoverButton> */}

      <StaggeredFadeIn />
    </EdgeContainer>
  );
}

export default HomeSection;
