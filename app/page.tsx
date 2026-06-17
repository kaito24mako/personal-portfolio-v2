"use client";

import { useRef } from "react";
import {
  projectsFeatured,
  projects2026,
  projects2025,
} from "@/_utils/mappedArrays/projects";

import HomeSection from "./_sections/home/HomeSection";
import ProjectsSection from "./_sections/projects/ProjectsSection";
import ProjectsScrollArea from "./_sections/projects/components/ProjectsScrollAreaV2";
import AboutSection from "./_sections/about/AboutSection";

import ParallaxBackground from "@/_components/animations/parallax/ParallaxBackground";
import Heading from "@/_components/common/text/Heading";

import useIsVisible from "@/_utils/hooks/useIsVisible";

import mountains from "@/public/bg/mountains.png";
import land from "@/public/bg/land.png";

function MainPage() {
  // Create a ref for the element that should trigger the intended change
  const intersectionRef = useRef<HTMLElement>(null);

  // Pass it into our useIsVisible hook to determine if it's in view.
  // The hook will return true or false which we will use for conditional styling/rendering
  const isRefVisible = useIsVisible(intersectionRef);

  return (
    <>
      <section id="home" className="relative min-h-screen">
        <ParallaxBackground
          image={mountains}
          alt="Mountain landscape with a sakura tree"
        />
        <HomeSection />
      </section>

      <section id="about" className="relative min-h-screen">
        <ParallaxBackground
          image={land}
          alt="Countryside with shrubbery, mountains, and a lake"
        />
        <AboutSection />
      </section>

      <section
        id="projects"
        className="min-h-screen py-20"
        ref={intersectionRef}
      >
        <Heading className="text-center">Projects Showcase</Heading>

        {/* <div className="flex overflow-x-auto snap-x snap-mandatory"> */}
        <ProjectsScrollArea
          sectionLabels={["Featured", "2026", "2025"]}
          isSectionVisible={isRefVisible}
          sectionRef={intersectionRef}
        >
          <ProjectsSection
            subHeading="Featured"
            gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
            projects={projectsFeatured}
          />

          <ProjectsSection
            subHeading="2026"
            gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
            projects={projects2026}
          />

          <ProjectsSection
            subHeading="2025"
            gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
            projects={projects2025}
          />
        </ProjectsScrollArea>
      </section>
    </>
  );
}

export default MainPage;
