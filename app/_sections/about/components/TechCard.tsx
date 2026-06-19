"use client";

import { motion } from "motion/react";
import { forwardRef } from "react";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  text: string;
};

// 1. to add motion animation to the card component, attach ref to the outer div
const TechCard = forwardRef<HTMLDivElement, Props>(function TechCard(
  { src, alt, text },
  ref,
) {
  return (
    <div ref={ref} className="p-3 rounded-xs bg-border/85">
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded-sm bg-border">
          <Image src={src} width={30} height={30} alt={alt} />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
});

// 2. create a motion component from the card
export const MotionTechCard = motion.create(TechCard);

export default TechCard;
