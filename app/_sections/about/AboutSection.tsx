import FadeInOnView from "@/_components/animations/FadeInOnView";
import SectionContainer from "@/_components/common/container/SectionContainer";

function AboutSection() {
  return (
    <SectionContainer className="flex flex-col items-center">
      <FadeInOnView className="flex flex-col text-center gap-5">
        <h1 className="text-accent text-5xl font-heading font-semibold">
          A little about me
        </h1>
        <p className="text-foreground text-base md:text-lg">
          Welcome to my portfolio! I&apos;m Kaito and I have been studying web
          development since 2025. I have a sharp eye for detail, am passionate
          in learning new technologies, and mostly important, I love creating
          stunning websites. In my spare time, playing basketball and going to
          karaoke is my passion. Here are some technologies that I am familiar
          with:
        </p>
      </FadeInOnView>
    </SectionContainer>
  );
}

export default AboutSection;
