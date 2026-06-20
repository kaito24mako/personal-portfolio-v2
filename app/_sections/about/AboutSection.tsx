import { frontendTech, backendTech } from "@/_utils/mappedArrays/tech.js";

import SectionContainer from "@/_components/common/container/SectionContainer";
import TechSegment from "./components/TechSegment";
import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";
import Heading from "@/_components/common/text/Heading";
import Shine from "@/_components/animations/other/Shine";

function AboutSection() {
  return (
    <SectionContainer className="text-center">
      <FadeOutOnScroll className="flex flex-col gap-4">
        <Heading className="font-semibold" color="secondary" size="md">
          <Shine firstColor="background" secondColor="foreground-muted/60%">
            A little about me
          </Shine>
        </Heading>

        <p className="text-border text-base md:text-lg">
          Welcome to my portfolio! I&apos;m Kaito and I have been studying web
          development since 2025. I have a sharp eye for detail, passion in
          learning new technologies, and mostly importantly, I love creating
          stunning websites. In my spare time, playing basketball and going to
          karaoke is my passion. Here are some technologies that I am familiar
          with:
        </p>
      </FadeOutOnScroll>

      <FadeOutOnScroll className="flex flex-col gap-5">
        <TechSegment tech={frontendTech} heading="Front-End" />
      </FadeOutOnScroll>

      <FadeOutOnScroll className="flex flex-col gap-5">
        <TechSegment tech={backendTech} heading="Back-End" />
      </FadeOutOnScroll>
    </SectionContainer>
  );
}

export default AboutSection;
