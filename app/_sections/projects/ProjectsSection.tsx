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
  sectionSummary?: string[];
  gridTemplate: string;
  projects: Project[];
};

function ProjectsSection({
  sectionLabel,
  sectionSummary,
  gridTemplate,
  projects,
}: Props) {
  return (
    <SectionContainer className="text-center bg-background text-foreground py-0! w-screen snap-start shrink-0">
      <div className="flex flex-col gap-5 mb-5">
        <h2 className="text-3xl md:text-4xl font-heading">{sectionLabel}</h2>

        {/* <h3 className="text-lg md:text-2xl">{sectionSummary}</h3> */}

        <MarqueeX
          contents={sectionSummary ?? []}
          size="md"
          color="primary"
          textStyle="font-heading"
          italic
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
              tech={project.tech ?? project.tech}
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
