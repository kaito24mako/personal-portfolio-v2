"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  image: StaticImageData;
  alt: string;
};

function Background({ image, alt }: Props) {
  // parallax effect using useScroll and useTransform
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // move the div container down by 25% as scroll progresses
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y }}
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
