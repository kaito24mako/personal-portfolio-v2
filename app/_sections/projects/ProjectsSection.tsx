import FadeOutOnScroll from "@/_components/animations/FadeOutOnScroll";
import Badge from "@/_components/common/badge/Badge";
import Button from "@/_components/common/button/Button";
import SectionContainer from "@/_components/common/container/SectionContainer";
import Divider from "@/_components/common/divider/Divider";
import Heading from "@/_components/common/text/Heading";

function ProjectsSection() {
  return (
    <SectionContainer className="text-center bg-background text-foreground">
      <FadeOutOnScroll className="flex flex-col">
        <Heading>Projects Showcase</Heading>
        <h2 className="text-foreground-muted text-5xl font-heading">2026</h2>
      </FadeOutOnScroll>

      <div className="mockup-window bg-surface">
        <div>image</div>

        <div className="flex flex-col items-start text-start gap-1 p-5">
          <h3 className="text-2xl">Mako</h3>

          <p className="text-sm mb-1 opacity-87 ">
            A CMS for customizing a portfolio site via API endpoints. Utilizes
            Next.js with postgreSQL for the backend.
          </p>

          <Badge size="small" color="text-base">
            Next.js
          </Badge>

          <Divider className="mx-auto w-[95%] mt-2 mb-1" />

          <h4 className="text-accent-light text-sm">Personal Growth</h4>

          <p className="text-sm mb-1 opacity-70">
            &quot;First dive into Next.js and full-stack programming. Learned
            about the intricacies of communicating between the front and
            back-end.&quot;
          </p>

          <div className="flex justify-between w-full">
            <Button size="small" color="accent">
              Read Blog
            </Button>
            <div className="flex gap-3">
              <Button size="small" color="accent">
                View Code
              </Button>
              <Button size="small" color="accent">
                View Site
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ProjectsSection;
