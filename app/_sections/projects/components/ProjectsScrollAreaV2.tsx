// ! NOT in use - for a vertical progress bar

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Button from "@/_components/common/button/Button";

type Props = {
  children: React.ReactNode;
  sectionLabels: string[];
  isSectionVisible?: boolean;
  sectionRef?: React.RefObject<HTMLElement | null>;
};

function ProjectsScrollAreaV2({
  children,
  sectionLabels,
  isSectionVisible = true,
  sectionRef,
}: Props) {
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
  const scrollToSection = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;

      const sectionWidth = container.clientWidth;
      if (sectionWidth === 0) return;

      // scroll to top of section
      sectionRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // scroll to respective section
      container.scrollTo({
        left: index * sectionWidth,
        behavior: "smooth",
      });
    },
    [sectionRef],
  );

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
      {/* IF projects section is in view, render progress tabs */}
      {isSectionVisible && (
        <div className="fixed right-12 top-1/2 -translate-y-1 z-50">
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
      )}

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

export default ProjectsScrollAreaV2;
