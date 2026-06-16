import Image from "next/image";

import BounceX from "@/_components/animations/bounce/BounceX";

import Badge from "../badge/Badge";
import Divider from "../divider/Divider";
import Button from "../button/Button";
import IconTextWrapper from "../wrapper/IconTextWrapper";

import GithubIcon from "../svg/GithubIcon";
import SiteIcon from "../svg/SiteIcon";
import ArrowRightIcon from "../svg/ArrowRightIcon";

import mako from "@/public/projects/mako.png";

type Props = {
  title: string;
  description: string;
  tech: string;
  growth?: string;
};

function ProjectCardLarge({ title, description, tech, growth }: Props) {
  return (
    <div className="mockup-window bg-surface w-[500px] rounded-md">
      <Image
        src={mako}
        alt="placeholder image"
        quality={90}
        placeholder="blur"
      />

      <div className="flex flex-col items-start text-start gap-1 p-5">
        {/* remove div to put elements on left side */}
        <div className="flex flex-col items-center text-center gap-1">
          <h3 className="text-4xl font-heading font-semibold">{title}</h3>

          <p className="text-sm mb-1 opacity-87 ">{description}</p>

          <Badge size="small" color="text-base">
            {tech}
          </Badge>
        </div>

        <Divider className="mx-auto w-[95%] mt-2 mb-1" />

        <h4 className="text-accent-light text-sm">Personal Growth</h4>
        <p className="text-sm mb-1 opacity-70">{growth}</p>

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
  );
}

export default ProjectCardLarge;
