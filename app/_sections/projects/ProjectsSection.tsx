import { StaticImageData } from "next/image";

import ProjectCardLarge from "@/_components/common/card/ProjectCardLarge";
import ProjectCardSmall from "@/_components/common/card/ProjectCardSmall";
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
  // children: React.ReactNode;
  subHeading: string;
  gridTemplate: string;
  projects: Project[];
};

function ProjectsSection({ subHeading, gridTemplate, projects }: Props) {
  return (
    <SectionContainer className="text-center bg-background text-foreground pt-2! pb-10! w-screen snap-start shrink-0">
      <FadeOutOnScroll className="flex flex-col">
        <h2 className="text-foreground-muted text-3xl md:text-4xl font-heading">
          {subHeading}
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
