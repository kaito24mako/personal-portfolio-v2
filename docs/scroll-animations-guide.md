# Scroll Animations Guide

A practical guide for adding **parallax scrolling** and **fade-in-on-scroll** effects to this portfolio site.

---

## What you have today

Your site already has a good foundation for scroll-based effects:

| File | Relevant setup |
|------|----------------|
| `app/layout.tsx` | `<main>` is the scroll container (`overflow-y-auto snap-y snap-mandatory`) |
| `app/page.tsx` | Two full-screen sections: `#home` and `#projects`, both with `snap-start` |
| `app/_sections/home/HomeSection.tsx` | Heading text to animate |
| `app/_sections/projects/ProjectsSection.tsx` | "Projects" heading to animate |
| `_components/features/background/Background.tsx` | Mountain image behind the home section |

**Important:** Scrolling happens on `<main>`, not the browser window. Any parallax or viewport detection must use `<main>` as the scroll root — not `window`.

---

## Two effects, two techniques

| Effect | What the user sees | Best approach for this project |
|--------|-------------------|--------------------------------|
| **Parallax** | Background or content moves at a different speed than the scroll, creating depth | Custom scroll listener or **Framer Motion** `useScroll` |
| **Fade-in on scroll** | Text/elements start invisible and fade + slide in when they enter the viewport | **Intersection Observer** (native) or **Framer Motion** `whileInView` |

You can implement both with **zero new dependencies** (CSS + Intersection Observer), or use **Framer Motion** for a cleaner React API. Both paths are covered below.

---

## Option A — No extra libraries (recommended to learn the concepts)

### 1. Fade-in when elements enter the viewport

**How it works:** The browser's [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) watches an element and fires a callback when it crosses into (or out of) the viewport.

#### Step 1: Create a reusable hook

Create `_hooks/useInView.ts`:

```ts
"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;   // 0 = any pixel visible, 1 = fully visible
  rootMargin?: string;  // e.g. "0px 0px -10% 0px" triggers slightly before fully in view
};

export function useInView(options: Options = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Your scroll container is <main>, not the window
    const root = document.querySelector("main");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el); // animate once; remove this line to repeat on scroll
        }
      },
      { root, threshold: options.threshold ?? 0.2, rootMargin: options.rootMargin ?? "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
}
```

#### Step 2: Create a fade-in wrapper component

Create `_components/common/FadeIn.tsx`:

```tsx
"use client";

import { useInView } from "@/_hooks/useInView";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds, for staggered text
};

export default function FadeIn({ children, className = "", delay = 0 }: Props) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
```

#### Step 3: Wrap text in your sections

In `HomeSection.tsx`:

```tsx
import FadeIn from "@/_components/common/FadeIn";

// inside the component:
<FadeIn>
  <h1 className="font-heading text-6xl md:text-7xl">I&apos;m Kaito</h1>
</FadeIn>
<FadeIn delay={0.15}>
  <h2 className="font-heading text-2xl md:text-3xl opacity-60">
    With passion in web development
  </h2>
</FadeIn>
```

Do the same in `ProjectsSection.tsx` for the "Projects" heading and any project cards you add later.

---

### 2. Parallax on the home → projects transition

**How it works:** As the user scrolls, you move the background image slower than the content (`translateY` at ~30–50% of scroll speed). This creates a sense of depth.

Because your scroll container is `<main>`, listen to its `scroll` event — not `window`.

#### Step 1: Make Background a client component with parallax

Update `_components/features/background/Background.tsx`:

```tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  image: StaticImageData;
  alt: string;
  speed?: number; // 0 = fixed, 1 = moves with scroll; try 0.3–0.5 for parallax
};

export default function Background({ image, alt, speed = 0.4 }: Props) {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const mainRect = main.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();

      // How far the section has scrolled past the top of <main>
      const scrolled = mainRect.top - sectionRect.top;
      setOffset(scrolled * speed);
    };

    main.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => main.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src={image}
          fill
          quality={100}
          priority
          alt={alt}
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-top scale-110" // scale-110 prevents gaps when shifting
        />
      </div>
    </div>
  );
}
```

#### Step 2: Optional — parallax on the projects section entering

For a transition effect as projects slides in, you can offset the projects content based on scroll progress between the two sections. A simple version: give `#projects` a slight upward transform that eases to `0` as it snaps into view (same scroll listener pattern, keyed off `#projects`'s position relative to `<main>`).

---

### Scroll snap + parallax note

CSS scroll snap (`snap-y snap-mandatory`) and parallax can feel slightly at odds — snap "jumps" between sections while parallax expects continuous scroll. Options:

1. **Keep snap, subtle parallax** — use a low `speed` (0.2–0.3) on the background only; content stays normal.
2. **Remove snap on desktop** — keep snap on mobile for touch UX, disable on larger screens.
3. **Parallax only on the background** — least conflict; what most portfolio sites do.

---

## Option B — Framer Motion (cleaner React API)

[Framer Motion](https://www.framer.com/motion/) is the most popular animation library for React/Next.js. It handles viewport detection and scroll-linked motion with less boilerplate.

### Install

```bash
npm install framer-motion
```

### Fade-in with `whileInView`

```tsx
"use client";

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <EdgeContainer className="pt-30">
      <motion.h1
        className="font-heading text-6xl md:text-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        I&apos;m Kaito
      </motion.h1>

      <motion.h2
        className="font-heading text-2xl md:text-3xl opacity-60"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        With passion in web development
      </motion.h2>
    </EdgeContainer>
  );
}
```

- `initial` — starting state (hidden, slightly below)
- `whileInView` — target state when visible
- `viewport.once: true` — animate only the first time
- `viewport.amount: 0.3` — trigger when 30% of the element is visible

### Parallax with `useScroll` + `useTransform`

Framer Motion can tie motion to scroll progress. Because your scroll root is `<main>`, pass it as the `container`:

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: document.querySelector("main") ?? undefined, // set via ref in useEffect in practice
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
```

See Framer Motion's scroll docs (linked below) for the full pattern with a ref on `<main>`.

---

## Suggested implementation order

1. **Fade-in on home text** — quick win, no scroll conflicts
2. **Fade-in on projects heading** — same component/hook
3. **Subtle parallax on mountain background** — low speed, test with scroll snap
4. **Stagger project cards** — when you add them, use `delay={index * 0.1}` on each `FadeIn`
5. **Tune and reduce motion** — see accessibility section below

---

## Accessibility: respect `prefers-reduced-motion`

Some users disable animations in their OS settings. Wrap motion in a check:

```tsx
// _hooks/usePrefersReducedMotion.ts
"use client";

import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
```

If `reduced` is true, skip transforms and show content immediately at full opacity.

- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

## Performance tips

- Use `transform` and `opacity` only — they are GPU-friendly and don't trigger layout reflows.
- Add `will-change: transform` sparingly on elements that actually animate.
- Use `{ passive: true }` on scroll listeners (shown above).
- Prefer `once: true` / unobserve after fade-in so observers don't keep running.
- Mark animated section components with `"use client"` — scroll hooks require the client.

---

## External references

### Core web APIs (no library)

| Topic | Link |
|-------|------|
| Intersection Observer | https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API |
| CSS transforms | https://developer.mozilla.org/en-US/docs/Web/CSS/transform |
| CSS transitions | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions |
| Scroll snap | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap |
| prefers-reduced-motion | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion |

### Framer Motion

| Topic | Link |
|-------|------|
| Getting started | https://motion.dev/docs/react |
| whileInView | https://motion.dev/docs/react-motion-value#while-in-view |
| Scroll animations | https://motion.dev/docs/react-scroll-animations |
| useScroll | https://motion.dev/docs/react-use-scroll |
| useTransform | https://motion.dev/docs/react-use-transform |

### Other libraries (alternatives)

| Library | Best for | Link |
|---------|----------|------|
| **GSAP + ScrollTrigger** | Complex timeline scroll sequences | https://gsap.com/docs/v3/Plugins/ScrollTrigger/ |
| **react-scroll-parallax** | Parallax-only, declarative | https://react-scroll-parallax.damnthat.tv/docs/usage |
| **AOS (Animate On Scroll)** | Quick fade/slide via HTML attributes | https://michalsnik.github.io/aos/ |
| **Lenis** | Smooth scroll (often paired with parallax) | https://lenis.darkroom.engineering/ |

### Tutorials and inspiration

| Resource | Link |
|----------|------|
| CSS-Tricks: parallax explained | https://css-tricks.com/pure-css-parallax-websites/ |
| web.dev: performant animations | https://web.dev/articles/animations-guide |
| Josh Comeau's scroll animation course | https://www.joshwcomeau.com/animation/scroll-animations/ |

---

## Quick decision guide

```
Want to learn how it works under the hood?
  → Option A (Intersection Observer + CSS transitions)

Want less code and easier stagger/orchestration?
  → Option B (Framer Motion)

Only need parallax on a background image?
  → Option A scroll listener, or react-scroll-parallax

Planning many complex scroll-linked timelines?
  → GSAP ScrollTrigger
```

---

## Files you will likely create or edit

| Action | File |
|--------|------|
| Create | `_hooks/useInView.ts` |
| Create | `_hooks/usePrefersReducedMotion.ts` (optional) |
| Create | `_components/common/FadeIn.tsx` |
| Edit | `_components/features/background/Background.tsx` (parallax) |
| Edit | `app/_sections/home/HomeSection.tsx` (wrap text) |
| Edit | `app/_sections/projects/ProjectsSection.tsx` (wrap text) |
| Optional | `app/layout.tsx` — add ref to `<main>` for Framer Motion scroll container |

Start with fade-in on the home section, verify it works with your scroll snap, then add parallax at a low speed.
