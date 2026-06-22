import Image, { StaticImageData } from "next/image";

import Badge from "@/_components/common/badge/Badge";
import Divider from "@/_components/common/divider/Divider";
import Button from "@/_components/common/button/Button";
import IconTextWrapper from "@/_components/common/wrapper/IconTextWrapper";
import GithubIcon from "@/_components/common/icon/GithubIcon";
import SiteIcon from "@/_components/common/icon/SiteIcon";
import ArrowRightIcon from "@/_components/common/icon/ArrowRightIcon";

import BounceX from "@/_components/animations/bounce/BounceX";
import Shine from "@/_components/animations/other/Shine";

type Props = {
  title: string;
  image: StaticImageData;
  description?: string;
  tech?: string[];
  githubUrl?: string;
  siteUrl?: string;
  growth: string;
  grid: string;
};

// todo: fade out or stagger animation for every element in projects section

function ProjectCardLarge({
  title,
  image,
  description,
  tech,
  githubUrl,
  siteUrl,
  growth,
  grid,
}: Props) {
  return (
    <div
      className={`${grid} flex flex-col h-full bg-surface border border-border rounded-xs overflow-hidden`}
    >
      <Image src={image} alt={title} quality={90} placeholder="blur" />

      {/* content */}
      <div className="flex flex-col items-start text-start justify-between h-full gap-4 p-8 pb-6">
        {/* top content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-4xl font-heading font-semibold">
            {title}
          </h3>

          <p className="text-sm md:text-base opacity-80 mb-1">{description}</p>

          <div className="flex gap-2">
            {tech?.map((t) => (
              <Badge
                size="small"
                textColor="foreground"
                bgColor="surface"
                key={t}
              >
                <Shine>{t}</Shine>
              </Badge>
            ))}
          </div>
        </div>

        {/* middle divider */}
        <Divider className="mx-auto w-[95%] mt-1" />

        {/* bottom content */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h4 className="text-accent-light text-xs md:text-sm mb-0.5">
              Personal Growth
            </h4>
            <p className="text-xs md:text-sm opacity-70 mb-10">{growth}</p>
          </div>

          <div className="flex justify-between items-center">
            <Button
              href="/blog"
              ariaLabel="Link to blog page"
              size="small"
              color="background"
            >
              <IconTextWrapper gap="small">
                <BounceX position={-2.1} ease="easeIn">
                  <ArrowRightIcon />
                </BounceX>
                <span>Read Blog</span>
              </IconTextWrapper>
            </Button>

            <div className="flex gap-3">
              <Button
                size="small"
                color="accent"
                href={githubUrl}
                ariaLabel="View code on GitHub"
                toNewTab
              >
                <IconTextWrapper>
                  <GithubIcon />
                  <span className="md:hidden">Code</span>
                  <span className="hidden md:inline">View Code</span>
                </IconTextWrapper>
              </Button>

              <Button
                size="small"
                color="accent"
                href={siteUrl}
                ariaLabel="View live site"
                toNewTab
              >
                <IconTextWrapper>
                  <SiteIcon />
                  <span className="md:hidden">Visit</span>
                  <span className="hidden md:inline">Visit Site</span>
                </IconTextWrapper>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardLarge;
