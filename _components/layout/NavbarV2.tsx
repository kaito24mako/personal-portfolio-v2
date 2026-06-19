"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav
      className={`fixed top-3 inset-x-0 z-50 mx-auto w-fit flex items-center gap-5 sm:gap-10
        px-10 py-1 text-xs md:text-base text-background rounded-md transition-colors duration-500 
        ${scrolled ? "bg-surface text-foreground shadow-md" : "bg-transparent"}`}
    >
      <Link href="#home">
        <Image
          src="/icon/logo.png"
          alt="Logo of Kaito Watanabe"
          width={55}
          height={55}
        ></Image>
      </Link>

      <ul className="flex gap-5 md:gap-7 font-semibold font-heading text-base sm:text-lg">
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
    </nav>
  );
}

export default Navbar;
