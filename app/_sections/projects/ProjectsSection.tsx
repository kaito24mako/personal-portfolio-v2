import { StaticImageData } from "next/image";

import ProjectCardLarge from "./components/ProjectCardLarge";
import ProjectCardSmall from "./components/ProjectCardSmall";
import SectionContainer from "@/_components/common/container/SectionContainer";
import MarqueeX from "@/_components/animations/other/MarqueeX";

type Project = {
  title: string;
  image: StaticImageData;
  description?: string;
  tech?: string[];
  githubUrl?: string;
  siteUrl?: string;
  growth?: string;
  grid: string;
};

type Props = {
  sectionLabel?: string;
  sectionSummary: string[];
  gridTemplate: string;
  projects: Project[];
};

function ProjectsSection({ sectionSummary, gridTemplate, projects }: Props) {
  return (
    <SectionContainer className="text-center bg-background text-foreground py-0! w-screen snap-start shrink-0">
      <div className=" border-border/40 mt-5 mb-2">
        <MarqueeX
          contents={sectionSummary}
          size="xs"
          color="primary"
          textStyle="font-subHeading tracking-widest"
          fadeEdges
          separator
        />
      </div>

      <div className={`${gridTemplate} grid gap-8`}>
        {projects.map((project) =>
          project.growth ? (
            <ProjectCardLarge
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              siteUrl={project.siteUrl}
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
              githubUrl={project.githubUrl}
              siteUrl={project.siteUrl}
              grid={project.grid}
            />
          ),
        )}
      </div>
    </SectionContainer>
  );
}

export default ProjectsSection;
