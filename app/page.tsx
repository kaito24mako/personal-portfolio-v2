import Header from "@/_components/layout/Header";
import Background from "@/_components/features/background/Background";
import HomeSection from "./_sections/HomeSection";

import mountains from "@/public/bg/mountain-bg.png";

function MainPage() {
  return (
    <>
      <section id="home" className="relative min-h-screen">
        <Header />
        <Background image={mountains} alt="mountains" />
        <HomeSection />
      </section>

      <section id="projects">
        <p>this is the projects page</p>
      </section>
    </>
  );
}

export default MainPage;
