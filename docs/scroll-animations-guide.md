# Scroll Animations Guide (Framer Motion)

A practical guide for adding **fade-in-on-scroll** and **parallax** effects to this portfolio site using [Framer Motion](https://motion.dev/docs/react).

---

## What you have today

| File                                             | Relevant setup                                                         |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| `app/layout.tsx`                                 | Fixed header, `<main className="flex-1">` — **not** a scroll container |
| `app/globals.css`                                | `html { scroll-behavior: smooth; }` for anchor links                   |
| `app/page.tsx`                                   | Two full-screen sections: `#home` and `#projects`                      |
| `app/_sections/home/HomeSection.tsx`             | Heading text to animate                                                |
| `app/_sections/projects/ProjectsSection.tsx`     | "Projects" heading to animate                                          |
| `_components/features/background/Background.tsx` | Mountain image behind the home section                                 |
| `_components/layout/Header.tsx`                  | Fixed nav with `#home` / `#projects` anchor links                      |

**Important:** Scrolling happens on the **document** (`window` / `html`), not on `<main>`. Framer Motion's defaults already target this — you do **not** need to pass a `container` to `useScroll` or configure a custom root for `whileInView`.

---

## Install

```bash
npm install motion
```

Import from `motion/react` (the current package name; `framer-motion` is the legacy alias):

```tsx
import { motion, useScroll, useTransform } from "motion/react";
```

---

## Two effects, one library

| Effect                | What the user sees                                                          | Framer Motion API                    |
| --------------------- | --------------------------------------------------------------------------- | ------------------------------------ |
| **Fade-in on scroll** | Text/elements start hidden and fade + slide in when they enter the viewport | `whileInView` on `motion.*` elements |
| **Parallax**          | Background moves slower than scroll, creating depth                         | `useScroll` + `useTransform`         |

Both work out of the box with document scroll — no custom scroll listeners or Intersection Observer boilerplate.

---

## 1. Fade-in when elements enter the viewport

### Basic pattern

Wrap any element in `motion.*` and use `whileInView`:

```tsx
"use client";

import { motion } from "motion/react";
import EdgeContainer from "@/_components/common/container/EdgeContainer";

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

### Key props

| Prop               | Purpose                                                         |
| ------------------ | --------------------------------------------------------------- |
| `initial`          | Starting state before the element is in view                    |
| `whileInView`      | Target state when the element enters the viewport               |
| `viewport.once`    | `true` = animate only the first time (recommended for headings) |
| `viewport.amount`  | `0.3` = trigger when 30% of the element is visible              |
| `transition.delay` | Stagger sibling elements (e.g. `0.15` on the second heading)    |

Apply the same pattern in `ProjectsSection.tsx` for the "Projects" heading and any project cards you add later.

---

### Reusable `FadeIn` wrapper (optional)

If you want less repetition, create `_components/common/FadeIn.tsx`:

```tsx
"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type Props = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  ...props
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
```

Usage:

```tsx
<FadeIn>
  <h1 className="font-heading text-6xl md:text-7xl">I&apos;m Kaito</h1>
</FadeIn>
<FadeIn delay={0.15}>
  <h2 className="font-heading text-2xl md:text-3xl opacity-60">
    With passion in web development
  </h2>
</FadeIn>
```

---

### Staggered lists (project cards)

Use `motion` variants on a parent container:

```tsx
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="grid gap-6"
>
  {projects.map((project) => (
    <motion.article key={project.id} variants={item}>
      {/* card content */}
    </motion.article>
  ))}
</motion.div>;
```

---

## 2. Parallax on the mountain background

**How it works:** `useScroll` tracks how far a target element has scrolled through the viewport. `useTransform` maps that progress to a `y` offset so the image moves slower than the content.

Because scroll is on the document, you only need a `ref` on the section — no `container` option.

Update `_components/features/background/Background.tsx`:

```tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  image: StaticImageData;
  alt: string;
};

export default function Background({ image, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image shifts down by up to 25% of its height as the section scrolls away
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
          className="object-cover object-top scale-110"
        />
      </motion.div>
    </div>
  );
}
```

The `ref` must live on an ancestor of the parallax element. Here the background wrapper sits inside `#home`, so scrolling that section drives the effect.

### Tuning parallax

| `useTransform` output | Feel                                                |
| --------------------- | --------------------------------------------------- |
| `["0%", "15%"]`       | Subtle — good default for portfolios                |
| `["0%", "25%"]`       | Noticeable depth                                    |
| `["0%", "40%"]`       | Strong — may reveal image edges unless `scale-110`+ |

Adjust `offset` to control when parallax starts and ends:

```ts
offset: ["start end", "end start"]; // starts when section enters bottom of viewport
offset: ["start start", "end start"]; // starts when section top hits viewport top (current)
```

---

## 3. Scroll progress between sections (optional)

For a transition effect as `#projects` enters view, track scroll on the projects section:

```tsx
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);

  return (
    <section ref={ref} id="projects" className="h-screen">
      <motion.div style={{ opacity, y }}>{/* section content */}</motion.div>
    </section>
  );
}
```

This fades and slides the projects content in as the section approaches the top of the viewport — complementary to `whileInView` on individual headings (pick one approach per element to avoid double animation).

---

## Fixed header + anchor links

Your header is `fixed`, so content can sit under it when jumping to `#home` or `#projects`. Options:

1. **CSS scroll padding** (simplest) — add to `globals.css`:

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem; /* match header height */
}
```

2. **Per-section offset** — add `scroll-mt-20` (or similar) to each `section` id target.

`whileInView` and `useScroll` are unaffected — they use the element's position relative to the viewport, not anchor scroll position.

---

## Accessibility: respect `prefers-reduced-motion`

Create `_hooks/usePrefersReducedMotion.ts`:

```ts
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

Use it to skip motion:

```tsx
const reduced = usePrefersReducedMotion();

<motion.h1
  initial={reduced ? false : { opacity: 0, y: 24 }}
  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  I&apos;m Kaito
</motion.h1>;
```

For parallax, render a plain `<div>` with no `style={{ y }}` when `reduced` is true.

- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

## Performance tips

- Animate **`opacity`** and **`transform`** only — GPU-friendly, no layout reflow.
- Use `viewport.once: true` so animations don't re-run on every scroll pass.
- Add `will-change-transform` only on elements that actually parallax.
- Mark animated components with `"use client"` — Motion hooks require the client.
- Prefer `useTransform` over manual scroll listeners; Motion batches updates efficiently.

---

## Suggested implementation order

1. **Install Motion** — `npm install motion`
2. **Fade-in on home headings** — quick win in `HomeSection.tsx`
3. **Fade-in on projects heading** — same pattern in `ProjectsSection.tsx`
4. **Parallax on mountain background** — update `Background.tsx`
5. **Stagger project cards** — variants when you add a project grid
6. **Add `scroll-padding-top`** — fix anchor jumps under the fixed header
7. **Wire up `usePrefersReducedMotion`** — before shipping

---

## Files you will likely create or edit

| Action          | File                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| Install dep     | `package.json` — `motion`                                                     |
| Edit            | `app/_sections/home/HomeSection.tsx` — `whileInView` on headings              |
| Edit            | `app/_sections/projects/ProjectsSection.tsx` — `whileInView` on heading/cards |
| Edit            | `_components/features/background/Background.tsx` — parallax with `useScroll`  |
| Optional create | `_components/common/FadeIn.tsx` — reusable fade wrapper                       |
| Optional create | `_hooks/usePrefersReducedMotion.ts`                                           |
| Optional edit   | `app/globals.css` — `scroll-padding-top` for fixed header                     |

---

## External references

### Framer Motion

| Topic              | Link                                                     |
| ------------------ | -------------------------------------------------------- |
| Getting started    | https://motion.dev/docs/react                            |
| `whileInView`      | https://motion.dev/docs/react-motion-value#while-in-view |
| Scroll animations  | https://motion.dev/docs/react-scroll-animations          |
| `useScroll`        | https://motion.dev/docs/react-use-scroll                 |
| `useTransform`     | https://motion.dev/docs/react-use-transform              |
| Variants & stagger | https://motion.dev/docs/react-animation#variants         |

### Related web APIs

| Topic                    | Link                                                                           |
| ------------------------ | ------------------------------------------------------------------------------ |
| CSS `scroll-padding`     | https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding                |
| `prefers-reduced-motion` | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion |
| Performant animations    | https://web.dev/articles/animations-guide                                      |

---

## Migration note (old scroll root)

Previously, `<main>` was the scroll container (`overflow-y-auto snap-y snap-mandatory`). Code that passed `document.querySelector("main")` as the Intersection Observer `root` or Framer Motion `container` is **no longer needed**.

With document scroll:

- Remove any `container` prop from `useScroll`
- Remove custom `root` from Intersection Observer hooks
- Remove scroll-snap classes unless you add them back intentionally

`whileInView` and default `useScroll` already use the window viewport.
