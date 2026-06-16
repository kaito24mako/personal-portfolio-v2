import { featuredProjects } from "@/_utils/mappedArrays/projects";

import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";

import ProjectCardLarge from "@/_components/common/card/ProjectCardLarge";
import ProjectCardSmall from "@/_components/common/card/ProjectCardSmall";
import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

function ProjectsSection() {
  return (
    <SectionContainer className="text-center bg-background text-foreground">
      <FadeOutOnScroll className="flex flex-col">
        <Heading>Projects Showcase</Heading>
        <h2 className="text-foreground-muted text-5xl font-heading">2026</h2>
      </FadeOutOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-5">
        {featuredProjects.map((project) => (
          <ProjectCardLarge
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            tech={project.tech}
            growth={project.growth}
            grid={project.grid}
          />
        ))}
      </div>

      {featuredProjects.map((project) => (
        <ProjectCardSmall
          key={project.title}
          title={project.title}
          image={project.image}
          description={project.description}
          tech={project.tech}
          grid={project.grid}
        />
      ))}
    </SectionContainer>
  );
}

export default ProjectsSection;
