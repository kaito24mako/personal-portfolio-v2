"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  // hide navbar on scrolling down - show on scrolling up
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={`flex justify-between items-center bg-transparent fixed top-0 left-0 right-0 z-50 px-7 sm:px-25 md:px-40 xl:px-60 3xl:px-100 py-4 ${hidden ? "pointer-events-none" : "pointer-events-auto"}`}
      animate={{
        y: hidden ? -10 : 0,
        opacity: hidden ? 0 : 1,
      }}
    >
      <Link href="#home">
        <Image
          src="/icon/logo-transparent.png"
          alt="logo of Kaito Watanabe"
          width={70}
          height={70}
        ></Image>
      </Link>

      <ul className="flex gap-5 sm:gap-8">
        <li className="hover:text-accent">
          <Link href="#home">Home</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
