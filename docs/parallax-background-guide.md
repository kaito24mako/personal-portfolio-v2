# Parallax Background — How It Works in This Project

This guide explains the mountain parallax on the home section: what you see when scrolling, which files are involved, and how the Motion library drives the effect.

---

## What is parallax?

**Parallax** is when layers move at different speeds as you scroll. Foreground content (headings, buttons) scrolls at normal speed. The background image moves **slower**, so it feels farther away — like looking out a car window: nearby trees zip past, distant mountains barely shift.

On this site, that happens on the **home section** (`#home`) as you scroll toward **Projects**.

---

## What changed in the code (and why)

Only **one file** was edited to add parallax. Everything else was already in place.

| File | Changed? | Notes |
| ---- | -------- | ----- |
| `_components/features/background/Background.tsx` | **Yes** | All parallax logic lives here |
| `app/page.tsx` | No | Already had `#home` as `relative min-h-screen` with `<Background />` inside — correct layout for parallax |
| `package.json` | No | `motion` was already installed (used by `Navbar`, fade-in components, etc.) |

### Before — static background

Previously, `Background.tsx` was a server component that rendered a fixed image. It scrolled away with the section like any normal element — no depth effect.

```tsx
import Image, { StaticImageData } from "next/image";

function Background({ image, alt }: Props) {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={image}
        fill
        ...
        className="object-cover object-top"
      />
    </div>
  );
}
```

### After — scroll-linked parallax

```tsx
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function Background({ image, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <Image ... className="object-cover object-top scale-110" />
      </motion.div>
    </div>
  );
}
```

### Change-by-change breakdown

| Change | Why |
| ------ | --- |
| **`"use client"`** at the top | Motion hooks (`useScroll`, `useTransform`, `useRef` for scroll tracking) only run in client components. The old file had no hooks, so it could stay a server component. |
| **Import `motion`, `useScroll`, `useTransform` from `motion/react`** | These are the APIs that link scroll position to image movement. Same library already used elsewhere in the project (`Navbar`, `FadeIn`, etc.). |
| **Import `useRef` from React** | `useScroll` needs a DOM reference to know *which* element’s scroll progress to measure — here, the background wrapper inside `#home`. |
| **`const ref = useRef(...)` + `ref={ref}` on the wrapper** | Tells Motion to track this element as it moves through the viewport. Progress goes from 0 (section at top) to 1 (section scrolled past). |
| **`useScroll({ target: ref, offset: [...] })`** | Reads scroll progress for the home background area. `offset: ["start start", "end start"]` means parallax runs while the full home section scrolls off screen. |
| **`useTransform(scrollYProgress, [0, 1], ["0%", "25%"])`** | Converts 0→1 progress into a 0%→25% vertical shift. The image moves slower than the page content — that difference is the parallax. 25% is a noticeable but portfolio-friendly default (see [Tuning](#tuning-the-effect)). |
| **Wrap `Image` in `<motion.div style={{ y }}>`** | Applies the computed `y` offset via CSS `transform`, which is GPU-friendly and avoids layout reflow during scroll. |
| **`overflow-hidden` on the outer wrapper** | When the image shifts down, edges could peek outside the section. This clips anything outside the `#home` bounds. |
| **`will-change-transform` on the motion div** | Hints to the browser that `transform` will animate, which can smooth scroll-linked updates. |
| **`scale-110` on the `Image`** | Slightly zooms the image so shifting it by up to 25% does not reveal empty gaps at the top or bottom. Without this, parallax often exposes blank edges. |

### What was intentionally left unchanged

- **`app/page.tsx`** — No edits needed. `#home` already uses `relative min-h-screen`, and `Background` is the first child (behind content). That structure is exactly what parallax expects.
- **Image props** (`fill`, `priority`, `placeholder="blur"`, `quality={100}`, etc.) — Kept as-is so loading behavior and visual quality stay the same.
- **`object-cover object-top`** — Kept so the mountains stay cropped from the top; only `scale-110` was added for parallax headroom.

---

## Where it lives in the project

| File | Role |
| ---- | ---- |
| `app/page.tsx` | Wraps the mountain image in a full-screen `#home` section |
| `_components/features/background/Background.tsx` | Parallax logic — scroll tracking + image movement |
| `public/bg/mountain-bg.png` | The background image |

Layout on the home page:

```
┌─────────────────────────────────────┐
  #home section (min-h-screen, relative)
│  ┌───────────────────────────────┐  │
│  │ Background (absolute, -z-10)  │  │  ← mountain image, parallax layer
│  └───────────────────────────────┘  │
│  HomeSection (headings, content)    │  ← scrolls normally on top
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
  #projects section
└─────────────────────────────────────┘
```

Scrolling happens on the **browser window** (the document), not on `<main>`. Motion’s defaults already use window scroll — no extra scroll container setup is needed.

---

## Step-by-step: what happens when you scroll

### 1. You scroll the page

When you scroll down, the `#home` section moves up and eventually leaves the viewport. The headings in `HomeSection` move with the page at full scroll speed.

### 2. Motion measures scroll progress

`Background.tsx` attaches a `ref` to its wrapper and passes it to `useScroll`:

```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});
```

- **`target: ref`** — track this element (the background wrapper inside `#home`).
- **`scrollYProgress`** — a number from **0** to **1**:
  - **0** — home section top aligned with viewport top
  - **1** — home section bottom aligned with viewport top (section has scrolled fully past)

**`offset: ["start start", "end start"]`** in plain language:

| Part | Meaning |
| ---- | ------- |
| `"start start"` | Progress **starts at 0** when the **top** of `#home` hits the **top** of the screen |
| `"end start"` | Progress **reaches 1** when the **bottom** of `#home` hits the **top** of the screen |

So parallax runs for the whole time the home section is leaving the viewport.

### 3. Progress becomes vertical movement

`useTransform` maps `scrollYProgress` to a `y` offset:

```tsx
const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
```

| Scroll progress | Image `y` offset |
| --------------- | ---------------- |
| 0 (at top)      | 0% — normal position |
| 0.5 (halfway)   | 12.5% — shifted down a bit |
| 1 (section gone)| 25% — shifted down more |

The image moves **down** as you scroll **up** (content leaving the screen). Because 25% is less than 100% scroll distance, the image lags behind the text — that lag is the parallax effect.

### 4. The image is rendered with extra room

```tsx
<div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
  <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
    <Image ... className="object-cover object-top scale-110" />
  </motion.div>
</div>
```

| Piece | Why it’s there |
| ----- | -------------- |
| `absolute inset-0 -z-10` | Fills `#home` behind content |
| `overflow-hidden` | Clips the image so shifted edges don’t spill outside the section |
| `motion.div` + `style={{ y }}` | Applies the animated vertical offset (GPU-friendly `transform`) |
| `will-change-transform` | Hints to the browser that `transform` will change (helps smooth scrolling) |
| `scale-110` | Image is 10% larger than the box so shifting doesn’t reveal empty gaps at the edges |
| `"use client"` | Motion hooks (`useScroll`, `useTransform`) only run in client components |

---

## Mental model (simple)

Think of three layers:

1. **Your eyes / viewport** — what you see on screen  
2. **Text content** — glued to the scroll, moves 1:1 with the page  
3. **Mountain image** — same scroll event, but only moves 25% as much vertically  

Same scroll input → different movement speed → depth.

---

## Tuning the effect

All knobs are in `Background.tsx`.

### How strong the parallax feels

Change the second array in `useTransform`:

```tsx
const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]); // subtle
const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]); // current
const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]); // strong
```

Stronger values may need a larger scale (e.g. `scale-125`) to avoid showing empty edges.

### When parallax starts and ends

```tsx
offset: ["start start", "end start"]; // current — while home section scrolls away
offset: ["start end", "end start"]; // starts when section enters from bottom of screen
```

### Image cropping

- `object-top` — keeps the top of the mountains anchored while the image covers the area  
- `scale-110` — zoom in slightly for parallax headroom  

---

## Why Motion instead of a manual scroll listener?

A naive approach listens to `window.scroll` and sets `element.style.top` on every pixel scrolled. That works but is easy to get wrong (jank, no cleanup, fighting React).

Motion’s `useScroll` + `useTransform`:

- Tracks scroll progress relative to a **target element**
- Outputs motion values that update efficiently
- Animates via **`transform`** (GPU-friendly; avoids layout reflow)

For more patterns (fade-in, stagger, reduced motion), see [`docs/scroll-animations-guide.md`](./scroll-animations-guide.md).

---

## References — learning parallax on the web

### Motion (what this project uses)

| Topic | Link |
| ----- | ---- |
| Motion for React — getting started | https://motion.dev/docs/react |
| Scroll animations overview | https://motion.dev/docs/react-scroll-animations |
| `useScroll` API | https://motion.dev/docs/react-use-scroll |
| `useTransform` API | https://motion.dev/docs/react-use-transform |

### General concepts and CSS alternatives

| Topic | Link |
| ----- | ---- |
| Parallax scrolling (concept overview) | https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Parallax |
| CSS `scroll-driven animations` | https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations |
| Performant animations (`transform` / `opacity`) | https://web.dev/articles/animations-guide |
| `prefers-reduced-motion` (accessibility) | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion |

### Tutorials and examples (other stacks)

| Topic | Link |
| ----- | ---- |
| Framer Motion scroll-linked animations (video-friendly docs) | https://motion.dev/docs/react-scroll-animations |
| Pure CSS parallax (no JavaScript) | https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Parallax |
| Lenis — smooth scroll library (often paired with parallax sites) | https://lenis.darkroom.engineering/ |

> **Note:** This project uses **Motion** (`motion/react`), not the legacy `framer-motion` import path. The APIs are the same family; official docs live at [motion.dev](https://motion.dev).

---

## Quick checklist if something looks wrong

- [ ] Is `Background` inside a `relative` section? (`app/page.tsx` — yes, `#home` has `relative`)
- [ ] Is the component marked `"use client"`? (required for hooks)
- [ ] Does the wrapper have `overflow-hidden`? (prevents image bleeding outside the section)
- [ ] Do you see gaps at the image edge when scrolling? (try increasing `scale-110` → `scale-125`)
- [ ] Is parallax too subtle or too strong? (adjust the `"25%"` value in `useTransform`)

---

## Summary

1. **`#home`** is a full-screen section with the mountain behind the hero content.  
2. **`useScroll`** turns “how far has home scrolled past the viewport?” into a **0 → 1** progress value.  
3. **`useTransform`** turns that progress into a small **downward** shift (0% → 25%).  
4. The image moves slower than the text, so the mountains feel deep in the background.  
5. **`scale-110`** and **`overflow-hidden`** keep the effect clean with no visible gaps.

That’s the full parallax pipeline for this portfolio’s mountain background.
