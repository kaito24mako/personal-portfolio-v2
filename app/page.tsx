import Background from "@/_components/features/background/Background";
import HomeSection from "./_sections/home/HomeSection";
import ProjectsSection from "./_sections/projects/ProjectsSection";

import mountains from "@/public/bg/mountain-bg.png";

function MainPage() {
  return (
    <>
      <section id="home" className="relative h-[80dvh] sm:min-h-screen">
        <Background image={mountains} alt="mountains" />
        <HomeSection />
      </section>

      <section id="projects" className="h-screen">
        <ProjectsSection />
      </section>
    </>
  );
}

export default MainPage;
