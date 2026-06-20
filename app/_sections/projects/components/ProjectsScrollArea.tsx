"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";

import Button from "@/_components/common/button/Button";
import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";

type Props = {
  children: React.ReactNode;
  sectionLabels: string[];
};

type ProgressBarProps = {
  index: number;
  isActive: boolean;
};

function ProgressBar({ isActive }: ProgressBarProps) {
  return (
    <div className="relative h-0.5 flex-1 overflow-hidden rounded-sm bg-border">
      <motion.div
        // transform starts from the left
        className="absolute inset-0 origin-left bg-accent"
        initial={false}
        // if the section is active, the progress bar should be 100% wide
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </div>
  );
}

function ProjectsScrollAreaV1({ children, sectionLabels }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null); // creates a ref that stores the scroll position
  const scrollSection = useMotionValue(0); // creates a motion value that can animate the scroll position
  const [activeIndex, setActiveIndex] = useState(0); // state that stores the active index (0 = Featured, 1 = 2026, etc.)

  const sectionCount = sectionLabels.length; // stores the number of sections

  //* Updates the scroll section based on the scroll position (0 = Featured, 1 = 2026, etc.)
  const updateScrollSection = useCallback(() => {
    // get the current section
    const container = scrollRef.current;
    if (!container) return;

    // get the section width
    const sectionWidth = container.clientWidth;
    if (sectionWidth === 0) return;

    // update the scroll section based on the scroll position
    const position = container.scrollLeft / sectionWidth;
    scrollSection.set(position);

    // update the active index based on the scroll position
    const index = Math.min(Math.round(position), sectionCount - 1);

    setActiveIndex(index);
  }, [scrollSection, sectionCount]);

  //* Scroll to section on click
  const scrollToSection = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const sectionWidth = container.clientWidth;
    if (sectionWidth === 0) return;

    container.scrollTo({
      left: index * sectionWidth,
      behavior: "smooth",
    });
  }, []);

  //* useEffect to update the scroll section based on the scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollSection();

    container.addEventListener("scroll", updateScrollSection, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollSection);

    return () => {
      container.removeEventListener("scroll", updateScrollSection);
      window.removeEventListener("resize", updateScrollSection);
    };
  }, [updateScrollSection]);

  return (
    <div className="flex flex-col">
      <FadeOutOnScroll className="mb-4 px-7 sm:px-25 md:px-40 xl:px-60 3xl:px-100">
        <div className="mx-auto flex flex-col max-w-2xl gap-1">
          {/* progress bar labels */}
          <div className="flex">
            {sectionLabels.map((label, index) => (
              <Button
                key={label}
                ariaLabel={label}
                onClick={() => scrollToSection(index)}
                className={`flex-1 text-center font-heading text-2xl lg:text-3xl transition-colors duration-300 ${
                  index === activeIndex
                    ? "text-accent"
                    : "text-foreground-muted!"
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
          {/* scroll bar */}
          <div className="flex gap-4">
            {sectionLabels.map((label, index) => (
              <ProgressBar
                key={label}
                index={index}
                // if current section's index equals the activeIndex state, conditionally play animations in ProgressBar if isActive is true
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </FadeOutOnScroll>

      {/* parent container for projects with ref for scrolling logic */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
      >
        {children}
      </div>
    </div>
  );
}

export default ProjectsScrollAreaV1;
