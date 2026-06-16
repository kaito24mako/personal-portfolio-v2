import { frontendTech, backendTech } from "@/_utils/mappedArrays";

import SectionContainer from "@/_components/common/container/SectionContainer";
import TechSegment from "./components/TechSegment";
import FadeOutOnScroll from "@/_components/animations/FadeOutOnScroll";

function AboutSection() {
  return (
    <SectionContainer className="flex flex-col text-center gap-6">
      <FadeOutOnScroll className="flex flex-col gap-4">
        <h1 className="text-accent text-5xl font-heading font-semibold">
          A little about me
        </h1>

        <p className="text-background text-base md:text-lg">
          Welcome to my portfolio! I&apos;m Kaito and I have been studying web
          development since 2025. I have a sharp eye for detail, passion in
          learning new technologies, and mostly importantly, I love creating
          stunning websites. In my spare time, playing basketball and going to
          karaoke is my passion. Here are some technologies that I am familiar
          with:
        </p>
      </FadeOutOnScroll>

      <FadeOutOnScroll className="flex flex-col gap-5" sudden>
        <TechSegment tech={frontendTech} heading="Front-End" />
      </FadeOutOnScroll>

      <FadeOutOnScroll className="flex flex-col gap-5" sudden>
        <TechSegment tech={backendTech} heading="Back-End" />
      </FadeOutOnScroll>
    </SectionContainer>
  );
}

export default AboutSection;
