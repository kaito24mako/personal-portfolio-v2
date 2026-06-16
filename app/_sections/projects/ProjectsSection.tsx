import FadeOnScroll from "@/_components/animations/FadeInStaggered";
import FadeOutOnScroll from "@/_components/animations/FadeOutOnScroll";
import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

function ProjectsSection() {
  return (
    <SectionContainer className="text-center bg-background text-foreground">
      <FadeOutOnScroll className="flex flex-col">
        <Heading>Projects Showcase</Heading>
        <h2 className="text-foreground-muted text-5xl font-heading">2026</h2>
      </FadeOutOnScroll>

      <FadeOnScroll />
    </SectionContainer>
  );
}

export default ProjectsSection;
