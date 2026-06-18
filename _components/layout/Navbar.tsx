"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  // * Change navbar's styling on scroll
  useEffect(() => {
    const threshold = 100;

    function handleScroll() {
      setScrolled(window.scrollY > threshold);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // * Hide navbar when past a scroll threshold
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const threshold = 150;

    if (current > previous && current > threshold) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={`flex justify-between items-center fixed top-0 left-0 w-full z-50 py-1 px-7 sm:px-25 md:px-40 xl:px-60 3xl:px-100 text-sm md:text-base text-background transition-colors duration-500 
        ${scrolled ? "bg-foreground-muted shadow-md" : "bg-transparent"} 
        ${hidden ? "pointer-events-none" : "pointer-events-auto"}`}
      animate={{
        y: hidden ? -20 : 0,
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
