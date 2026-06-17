import { StaticImageData } from "next/image";

import Badge from "../badge/Badge";
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
  grid: string;
};

function ProjectCardSmall({ title, image, description, tech, grid }: Props) {
  return (
    <div className={`${grid} mockup-window bg-surface rounded-md`}>
      <div className="relative">
        {/* <Image src={image} alt={title} quality={90} placeholder="blur" /> */}
        <ParallaxImage
          src={image}
          alt={title}
          className="aspect-video w-full shrink-0"
          range={["-12%", "12%"]}
        />

        {/* image overlay */}
        <div className="absolute bg-black/60 inset-0 z-10" />

        {/* content */}
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-between text-start gap-1 px-6 py-5">
          {/* top content */}
          <div className="flex flex-col gap-1">
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

          {/* bottom content */}
          <div className="flex justify-between items-center w-full">
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
                ariaLabel="Button to view live site"
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

export default ProjectCardSmall;
