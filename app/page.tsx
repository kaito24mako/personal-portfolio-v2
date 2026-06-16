import Background from "@/_components/common/background/Background";
import HomeSection from "./_sections/home/HomeSection";
import ProjectsSection from "./_sections/projects/ProjectsSection";
import AboutSection from "./_sections/about/AboutSection";

import mountains from "@/public/bg/mountains.png";
import land from "@/public/bg/land.png";

function MainPage() {
  return (
    <>
      <section id="home" className="relative min-h-screen">
        <Background
          image={mountains}
          alt="Mountain landscape with a sakura tree"
        />
        <HomeSection />
      </section>

      <section id="about" className="relative min-h-screen">
        <Background image={land} alt="Hills, grass, and a single pathway" />
        <AboutSection />
      </section>

      <section id="projects" className="min-h-screen">
        <ProjectsSection />
      </section>
    </>
  );
}

export default MainPage;
