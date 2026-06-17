"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Button from "@/_components/common/button/Button";

type Props = {
  children: React.ReactNode;
  sectionLabels: string[];
};

function ProjectsScrollArea({ children, sectionLabels }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0); // 0 = Featured, 1 = 2026, etc.
  const sectionCount = sectionLabels.length;

  // Update the active index based on the scroll position
  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const sectionWidth = container.clientWidth;
    if (sectionWidth === 0) return;

    const position = container.scrollLeft / sectionWidth;
    const index = Math.min(Math.round(position), sectionCount - 1);

    setActiveIndex(index);
  }, [sectionCount]);

  // Scroll to section on click
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

  // Update the active index based on the scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateActiveIndex();

    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    // Cleanup the event listeners
    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  return (
    <>
      {/* progress tabs */}
      <div className="fixed right-12 top-1/2 z-50 -translate-y-1/2">
        <div className="flex flex-col gap-1.5">
          {sectionLabels.map((label, index) => (
            <div key={label} className="flex items-center gap-3">
              {/* dot indicator */}
              <span
                className={`size-2.5 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-accent" : "bg-border"
                }`}
              />

              {/* label button */}
              <Button
                ariaLabel={label}
                onClick={() => scrollToSection(index)}
                className={`text-right font-heading text-2xl lg:text-3xl transition-colors duration-300 ${
                  index === activeIndex
                    ? "text-accent!"
                    : "text-foreground-muted!"
                }`}
              >
                {label}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* scroll area/div for projects */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
      >
        {children}
      </div>
    </>
  );
}

export default ProjectsScrollArea;
