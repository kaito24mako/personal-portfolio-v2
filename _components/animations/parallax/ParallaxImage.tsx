"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
  /** How far the image shifts — keep subtle for cards */
  range?: [string, string];
};

export default function ParallaxImage({
  src,
  alt,
  className = "",
  // How far the image shifts — keep subtle for cards
  range = ["-8%", "8%"],
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Card enters from bottom, exits at top
    offset: ["start end", "end start"],
  });

  // The image shifts based on the scroll progress
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="will-change-transform" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          quality={90}
          placeholder="blur"
          className="scale-110"
        />
      </motion.div>
    </div>
  );
}
