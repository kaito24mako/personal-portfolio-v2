import { StaticImageData } from "next/image";

import ProjectCardLarge from "./components/ProjectCardLarge";
import ProjectCardSmall from "./components/ProjectCardSmall";
import SectionContainer from "@/_components/common/container/SectionContainer";
import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";

type Project = {
  title: string;
  image: StaticImageData;
  description?: string;
  tech?: string[];
  growth?: string;
  grid: string;
};

type Props = {
  sectionLabel?: string;
  gridTemplate: string;
  projects: Project[];
};

function ProjectsSection({ sectionLabel, gridTemplate, projects }: Props) {
  return (
    <SectionContainer className="text-center bg-background text-foreground py-0! w-screen snap-start shrink-0">
      <FadeOutOnScroll className="flex flex-col" sudden>
        <h2 className="text-foreground-muted text-3xl md:text-4xl font-heading">
          {sectionLabel}
        </h2>
      </FadeOutOnScroll>

      <div className={`${gridTemplate} grid gap-8`}>
        {projects.map((project) =>
          project.growth ? (
            <ProjectCardLarge
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech ?? project.tech}
              growth={project.growth}
              grid={project.grid}
            />
          ) : (
            <ProjectCardSmall
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              grid={project.grid}
            />
          ),
        )}
      </div>
    </SectionContainer>
  );
}

export default ProjectsSection;
