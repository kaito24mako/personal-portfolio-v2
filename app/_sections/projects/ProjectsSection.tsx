import { featuredProjects } from "@/_utils/mappedArrays/projects";

import FadeOutOnScroll from "@/_components/animations/FadeOutOnScroll";
import ProjectCardLarge from "@/_components/common/card/ProjectCardLarge";
import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

function ProjectsSection() {
  return (
    <SectionContainer className="text-center bg-background text-foreground">
      <FadeOutOnScroll className="flex flex-col">
        <Heading>Projects Showcase</Heading>
        <h2 className="text-foreground-muted text-5xl font-heading">2026</h2>
      </FadeOutOnScroll>

      {featuredProjects.map((project) => (
        <ProjectCardLarge
          key={project.growth}
          title={project.title}
          description={project.description}
          tech={project.tech}
          growth={project.growth}
        />
      ))}
    </SectionContainer>
  );
}

export default ProjectsSection;
