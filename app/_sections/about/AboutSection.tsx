import FadeInOnView from "@/_components/animations/FadeInOnView";
import SectionContainer from "@/_components/common/container/SectionContainer";
import Divider from "@/_components/common/divider/Divider";

function AboutSection() {
  return (
    <SectionContainer className="flex flex-col items-center shadow-lg">
      <div className="flex flex-col text-center gap-6">
        <FadeInOnView>
          <h1 className="text-accent text-5xl font-heading font-semibold">
            A little about me
          </h1>
        </FadeInOnView>

        <FadeInOnView>
          <p className="text-base md:text-lg">
            Welcome to my portfolio! I&apos;m Kaito and I have been studying web
            development since 2025. I have a sharp eye for detail, am passionate
            in learning new technologies, and mostly important, I love creating
            stunning websites. In my spare time, playing basketball and going to
            karaoke is my passion. Here are some technologies that I am familiar
            with:
          </p>
        </FadeInOnView>

        <Divider className="mt-5">Front-end</Divider>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
