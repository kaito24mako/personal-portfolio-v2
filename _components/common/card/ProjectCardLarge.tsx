import { StaticImageData } from "next/image";

import Badge from "../badge/Badge";
import Divider from "../divider/Divider";
import Button from "../button/Button";
import IconTextWrapper from "../wrapper/IconTextWrapper";
import BounceX from "@/_components/animations/bounce/BounceX";
import ParallaxImage from "@/_components/animations/parallax/ParallaxImage";

import GithubIcon from "../svg/GithubIcon";
import SiteIcon from "../svg/SiteIcon";
import ArrowRightIcon from "../svg/ArrowRightIcon";

type Props = {
  title: string;
  image: StaticImageData;
  description?: string;
  tech?: string[];
  growth: string;
  grid: string;
};

function ProjectCardLarge({
  title,
  image,
  description,
  tech,
  growth,
  grid,
}: Props) {
  return (
    <div
      className={`${grid} mockup-window flex flex-col h-full bg-surface rounded-md`}
    >
      <ParallaxImage
        src={image}
        alt={title}
        className="aspect-video w-full shrink-0"
        range={["-6%", "6%"]}
      />
      {/* <Image src={image} alt={title} quality={90} placeholder="blur" /> */}

      {/* content */}
      <div className="flex flex-col items-start text-start justify-between h-full gap-4 p-6">
        {/* top content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-4xl font-heading font-semibold">
            {title}
          </h3>

          <p className="text-xs md:text-sm opacity-87 mb-1">{description}</p>

          <div className="flex gap-2">
            {tech?.map((t) => (
              <Badge size="small" key={t}>
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* middle divider */}
        <Divider className="mx-auto w-[95%]" />

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
                <span>Read More</span>
              </IconTextWrapper>
            </Button>

            <div className="flex gap-3">
              <Button
                size="small"
                color="accent"
                href="https://nextjs.org/docs/app/api-reference/components/image"
                ariaLabel="View code on GitHub"
                toNewTab
              >
                <IconTextWrapper>
                  <GithubIcon />
                  <span>View Code</span>
                </IconTextWrapper>
              </Button>

              <Button
                size="small"
                color="accent"
                href="https://nextjs.org/docs/app/api-reference/components/image"
                ariaLabel="View live site"
                toNewTab
              >
                <IconTextWrapper>
                  <SiteIcon />
                  <span>View Site</span>
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
