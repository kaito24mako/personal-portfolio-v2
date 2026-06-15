"use client";

import { motion } from "motion/react";

import {
  staggerContainer,
  staggerItem,
} from "@/_components/animations/FadeInStaggered";
import { MotionTechCard } from "@/_components/common/card/TechCard";
import { frontendTech, backendTech } from "@/_utils/mappedArrays";

import FadeInOnView from "@/_components/animations/FadeInOnView";
import SectionContainer from "@/_components/common/container/SectionContainer";
import Divider from "@/_components/common/divider/Divider";

function AboutSection() {
  return (
    <SectionContainer className="flex flex-col items-center">
      <div className="flex flex-col text-center gap-6">
        <FadeInOnView>
          <h1 className="text-accent text-5xl font-heading font-semibold">
            A little about me
          </h1>
        </FadeInOnView>

        <FadeInOnView>
          <p className="text-background text-base md:text-lg">
            Welcome to my portfolio! I&apos;m Kaito and I have been studying web
            development since 2025. I have a sharp eye for detail, am passionate
            in learning new technologies, and mostly important, I love creating
            stunning websites. In my spare time, playing basketball and going to
            karaoke is my passion. Here are some technologies that I am familiar
            with:
          </p>
        </FadeInOnView>

        <Divider className="mt-5 font-heading text-lg font-semibold">
          Front-End
        </Divider>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {frontendTech.map((tech) => (
            <MotionTechCard
              key={tech.text}
              src={tech.src}
              alt={tech.alt}
              text={tech.text}
              variants={staggerItem}
            />
          ))}
        </motion.div>

        <Divider className="mt-5 font-heading text-lg font-semibold">
          Back-End
        </Divider>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {backendTech.map((tech) => (
            <MotionTechCard
              key={tech.text}
              src={tech.src}
              alt={tech.alt}
              text={tech.text}
              variants={staggerItem}
            />
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
