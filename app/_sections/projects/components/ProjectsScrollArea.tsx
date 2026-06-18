"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "motion/react";

import Button from "@/_components/common/button/Button";

type Props = {
  children: React.ReactNode;
  sectionLabels: string[];
};

type ProgressBarProps = {
  index: number;
  scrollSection: MotionValue<number>;
};

function ProgressBar({ index, scrollSection }: ProgressBarProps) {
  //* Fill progress bar with color
  // position is a value between 0 and 1, representing the scroll position
  const fillScale = useTransform(scrollSection, (position) =>
    Math.min(Math.max(position - index + 1, 0), 1),
  );

  return (
    <div className="relative h-0.5 flex-1 overflow-hidden rounded-sm bg-border">
      {/* fill the progress bar with color based on the scroll position */}
      <motion.div
        className="absolute inset-0 origin-left bg-accent"
        style={{ scaleX: fillScale }}
      />
    </div>
  );
}

function ProjectsScrollAreaV1({ children, sectionLabels }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSection = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0); // 0 = Featured, 1 = 2026, etc.

  const sectionCount = sectionLabels.length;

  //* Map scroll position to a 0-based "section index" (0 = Featured, 1 = 2026, etc.)
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
      <div className="mb-8 px-7 sm:px-25 md:px-40 xl:px-60 3xl:px-100">
        <div className="mx-auto flex flex-col max-w-2xl gap-1">
          {/* progress bar labels */}
          <div className="flex">
            {sectionLabels.map((label, index) => (
              <Button
                key={label}
                ariaLabel={label}
                onClick={() => scrollToSection(index)}
                className={`flex-1 text-center font-heading text-2xl lg:text-3xl transition-colors duration-300  ${
                  index === activeIndex
                    ? "text-accent!"
                    : "text-foreground-muted!"
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
          {/* progress bar */}
          <div className="flex gap-4">
            {sectionLabels.map((label, index) => (
              <ProgressBar
                key={label}
                index={index}
                scrollSection={scrollSection}
              />
            ))}
          </div>
        </div>
      </div>

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
