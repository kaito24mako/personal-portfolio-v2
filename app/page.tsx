import {
  projectsFeatured,
  projects2026,
  projects2025,
} from "@/_utils/mappedArrays/projects";

import HomeSection from "@/app/_sections/home/HomeSection";
import ProjectsSection from "@/app/_sections/projects/ProjectsSection";
import ProjectsScrollArea from "@/app/_sections/projects/components/ProjectsScrollArea";
import AboutSection from "@/app/_sections/about/AboutSection";
import ContactSection from "./_sections/contact/ContactSection";

import ParallaxBackground from "@/_components/animations/parallax/ParallaxBackground";
import Heading from "@/_components/common/text/Heading";

import mountains from "@/public/bg/mountains.png";
import land from "@/public/bg/land.png";
import ocean from "@/public/bg/ocean.png";
import Shine from "@/_components/animations/other/Shine";

function MainPage() {
  return (
    <>
      <section id="home" className="relative h-[80dvh] md:min-h-screen">
        <ParallaxBackground
          image={mountains}
          alt="Mountain landscape with a sakura tree"
        />
        <HomeSection />
      </section>

      <section id="about" className="relative">
        <ParallaxBackground
          image={land}
          alt="Countryside with shrubbery, mountains, and a lake"
        />
        <AboutSection />
      </section>

      <section id="projects" className="pt-25 pb-25">
        <Heading className="text-center mb-8" color="accent" size="md">
          <Shine firstColor="foreground-muted" secondColor="border">
            Projects showcase
          </Shine>
        </Heading>

        <ProjectsScrollArea sectionLabels={["Featured", "2026", "2025"]}>
          <ProjectsSection
            gridTemplate="grid-cols-1 xl:grid-cols-2 grid-rows-6 xl:grid-rows-3"
            sectionSummary={[
              "My best works",
              "Personal milestone projects",
              "Highly up-skiled my dev skills",
            ]}
            projects={projectsFeatured}
          />

          <ProjectsSection
            gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-6 lg:grid-rows-3"
            sectionSummary={[
              "Diploma of IT",
              "CSS frameworks",
              "Front-end frameworks",
              "Back-end development",
            ]}
            projects={projects2026}
          />

          <ProjectsSection
            gridTemplate="grid-cols-1 lg:grid-cols-2 grid-rows-6 lg:grid-rows-3"
            sectionSummary={[
              "First year of web development",
              "HTML, CSS, JavaScript",
              "The Odin Project course",
            ]}
            projects={projects2025}
          />
        </ProjectsScrollArea>
      </section>

      <section
        id="contact"
        className="relative min-h-screen my-auto pt-0 md:pt-10"
      >
        <ParallaxBackground image={ocean} alt="Ocean waves" />
        <ContactSection />
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
