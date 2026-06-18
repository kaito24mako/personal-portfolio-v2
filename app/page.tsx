import {
  projectsFeatured,
  projects2026,
  projects2025,
} from "@/_utils/mappedArrays/projects";

import HomeSection from "@/app/_sections/home/HomeSection";
import ProjectsSection from "@/app/_sections/projects/ProjectsSection";
import ProjectsScrollArea from "@/app/_sections/projects/components/ProjectsScrollArea";
import AboutSection from "@/app/_sections/about/AboutSection";

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
        <Heading className="text-center mb-8">Projects Showcase</Heading>

        <ProjectsScrollArea sectionLabels={["Featured", "2026", "2025"]}>
          <ProjectsSection
            gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
            projects={projectsFeatured}
          />

          <ProjectsSection
            gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
            projects={projects2026}
          />

          <ProjectsSection
            gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
            projects={projects2025}
          />
        </ProjectsScrollArea>
      </section>
    </>
  );
}

export default MainPage;

//* For rendering a vertical progress bar instead:
{
  /* <ProjectsScrollAreaV2
  sectionLabels={["Featured", "2026", "2025"]}
  isSectionVisible={isRefVisible}
  sectionRef={ref}
>
  <ProjectsSection
    // sectionLabel="Featured"
    gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
    projects={projectsFeatured}
  />

  <ProjectsSection
    sectionLabel="2026"
    gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
    projects={projects2026}
  />

  <ProjectsSection
    sectionLabel="2025"
    gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-3"
    projects={projects2025}
  />
</ProjectsScrollAreaV2>; */
}
