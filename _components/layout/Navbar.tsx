"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // if current scroll position is over 150px height, hide navbar
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // track the position of the scroll to show/hide background color
  // const [isPastThreshold, setIsPastThreshold] = useState(false);

  // useEffect(() => {
  //   const threshold = 300;

  //   function handleScroll() {
  //     setIsPastThreshold(window.scrollY > threshold);
  //   }

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <motion.nav
      className={`flex justify-between items-center fixed top-0 left-0 right-0 z-50 py-1 px-7 sm:px-25 md:px-40 xl:px-60 3xl:px-100 bg-surface/20 text-sm md:text-base text-background ${hidden ? "pointer-events-none" : "pointer-events-auto"}`}
      animate={{
        y: hidden ? -10 : 0,
        opacity: hidden ? 0 : 1,
      }}
    >
      <Link href="#home">
        <Image
          src="/icon/logo.png"
          alt="Logo of Kaito Watanabe"
          width={70}
          height={70}
        ></Image>
      </Link>

      <ul className="flex gap-5 sm:gap-8 font-semibold font-heading text-lg">
        <li className="hover:text-accent">
          <Link href="#home">Home</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
