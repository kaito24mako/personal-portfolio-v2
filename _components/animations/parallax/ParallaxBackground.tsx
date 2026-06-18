"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  image: StaticImageData;
  alt: string;
  className?: string;
};

function Background({ image, alt, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // * Parallax
  // move the div container down by 25% as scroll progresses
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // * Blur
  const filter = useTransform(
    scrollYProgress,
    [0, 0.9, 1],
    ["blur(0px)", "blur(1px)", "blur(3px)"],
  );

  return (
    <div
      ref={ref}
      className={`${className} absolute inset-0 -z-10 overflow-hidden`}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y, filter }}
      >
        <Image
          src={image}
          fill
          quality={100}
          priority
          alt={alt}
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-left sm:object-top scale-110"
        />
      </motion.div>
    </div>
  );
}

export default Background;
