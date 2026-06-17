import { projectsFeatured, projects2026 } from "@/_utils/mappedArrays/projects";

import HomeSection from "./_sections/home/HomeSection";
import ProjectsSection from "./_sections/projects/ProjectsSection";
import AboutSection from "./_sections/about/AboutSection";

import ParallaxBackground from "@/_components/animations/parallax/ParallaxBackground";
import Heading from "@/_components/common/text/Heading";

import mountains from "@/public/bg/mountains.png";
import land from "@/public/bg/land.png";

function MainPage() {
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

      <section id="projects" className="min-h-screen py-20">
        <Heading className="text-center">Projects Showcase</Heading>

        <div className="flex overflow-x-auto snap-x snap-mandatory">
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

          <section className="w-screen shrink-0 snap-start">
            2025 Projects
          </section>
        </div>
      </section>
    </>
  );
}

export default MainPage;
