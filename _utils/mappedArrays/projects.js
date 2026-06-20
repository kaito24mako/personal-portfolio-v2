// * Projects (Projects section)
// add growth key to projects you want to use ProjectCardLarge (large size)
// omit growth key to projects you want to use ProjectCardSmall (small size)

import mako from "@/public/projects/2026/mako.png";
import searchEmAll from "@/public/projects/2026/search-em-all.png";
import portfolioV1 from "@/public/projects/2026/portfolio-v1.png";

import bookCollection from "@/public/projects/2025/book-collection.png";
import tictactoe from "@/public/projects/2025/tic-tac-toe.png";
import etchASketch from "@/public/projects/2025/etch-a-sketch.png";
import lastManStanding from "@/public/projects/2025/last-man-standing.png";
import adminDashboard from "@/public/projects/2025/admin-dashboard.png";
import calculator from "@/public/projects/2025/calculator.png";
import restaurant from "@/public/projects/2025/kanazawa-delights.png";

export const projectsFeatured = [
  {
    title: "Portfolio CMS",
    image: mako,
    description:
      "A CMS for customizing a portfolio site via API endpoints. Utilizes Next.js with postgreSQL for the backend.",
    tech: ["Next.js", "Supabase", "TailwindCSS", "DaisyUI"],
    githubUrl: "https://github.com/kaito24mako/portfolio-cms",
    siteUrl: "https://portfolio-cms-blond-five.vercel.app/login",
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-2",
  },
  {
    title: "Book Collection",
    image: bookCollection,
    description:
      "OOP programming with JavaScript to create and store books for tracking purposes.",
    // tech: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/kaito24mako/Book-Library",
    siteUrl: "https://kaito24mako.github.io/Book-Library/",
    grid: "row-span-1",
  },
  {
    title: "Search Em' All!",
    image: searchEmAll,
    description:
      "Search through the Pokemon TCG database via data fetching, and store cards in collections.",
    tech: ["React", "SCSS"],
    githubUrl: "https://github.com/kaito24mako/react-pokemon-app",
    siteUrl: "https://pokemon-app-five-murex.vercel.app/",
    growth:
      '"My first project utilising React.js, and the first from my Diploma of IT course. Implemented core React principles such as re-usable components and hooks."',
    grid: "row-span-2",
  },
  {
    title: "Last Man Standing",
    image: lastManStanding,
    description: "User vs CPU-based game of rock, paper, scissors.",
    // tech: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/kaito24mako/Last-Man-Standing",
    siteUrl: "https://kaito24mako.github.io/Last-Man-Standing/",
    grid: "row-span-1",
  },
];

export const projects2026 = [
  {
    title: "Personal Portfolio V1",
    image: portfolioV1,
    description: "My first portfolio site made with React and SCSS.",
    tech: ["React", "SCSS"],
    githubUrl: "https://github.com/kaito24mako/uxdd-personal-portfolio",
    siteUrl: "https://personal-portfolio-cyan-seven-25.vercel.app/",
    grid: "row-span-1",
  },
  {
    title: "Portfolio CMS",
    image: mako,
    description:
      "A CMS for customizing a portfolio site via API endpoints. Utilizes Next.js with postgreSQL for the backend.",
    tech: ["Next.js", "Supabase", "TailwindCSS", "DaisyUI"],
    githubUrl: "https://github.com/kaito24mako/portfolio-cms",
    siteUrl: "https://portfolio-cms-blond-five.vercel.app/login",
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-2",
  },
  {
    title: "Search Em' All!",
    image: searchEmAll,
    description:
      "Search through the Pokemon TCG database via data fetching, and store cards in collections.",
    tech: ["React", "SCSS"],
    githubUrl: "https://github.com/kaito24mako/react-pokemon-app",
    siteUrl: "https://pokemon-app-five-murex.vercel.app/",
    growth:
      '"My first project utilising React.js, and the first from my diploma of IT course. Implemented core React principles such as re-usable components and hooks."',
    grid: "row-span-2",
  },
  {
    title: "Working in progress...",
    image: portfolioV1,
    description: "My first portfolio site made with React and SCSS.",
    githubUrl: "https://github.com/kaito24mako/uxdd-personal-portfolio",
    siteUrl: "https://personal-portfolio-cyan-seven-25.vercel.app/",
    grid: "row-span-1",
  },
];

export const projects2025 = [
  {
    title: "Book Collection",
    image: bookCollection,
    description:
      "OOP programming with JavaScript to create and store books for tracking purposes.",
    tech: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/kaito24mako/Book-Library",
    siteUrl: "https://kaito24mako.github.io/Book-Library/",
    growth:
      '"Worked with class-based JavaScript which deepened my understanding of how objects are created and manipulated. Also a leap in terms of UI/UX design from my previous projects."',
    grid: "row-span-2",
  },
  {
    title: "Last Man Standing",
    image: lastManStanding,
    description: "User vs CPU-based game of rock, paper, scissors.",
    // tech: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/kaito24mako/Last-Man-Standing",
    siteUrl: "https://kaito24mako.github.io/Last-Man-Standing/",
    // growth:
    //   '"My first major project that incorporates JavaScript alongside a front-end UI. Implementing the logic and a fun yet clear UI to provide feedback was a steep learning curve."',
    grid: "row-span-1",
  },
  {
    title: "Tic Tac Toe",
    image: tictactoe,
    description: "Two-player game of tic tac toe, ran via JavaScript logic.",
    tech: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/kaito24mako/Tic-Tac-Toe",
    siteUrl: "https://kaito24mako.github.io/Tic-Tac-Toe/",
    growth:
      '"This foundational JS project from The Odin Project course taught me about various JavaScript logic, array methods, and mathematical calculations."',
    grid: "row-span-2",
  },
  {
    title: "Etch-a-Sketch",
    image: etchASketch,
    description:
      "Customisable drawing with a variety of colours and grid sizes.",
    // tech: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/kaito24mako/Etch-A-Sketch",
    siteUrl: "https://kaito24mako.github.io/Etch-A-Sketch/",
    grid: "row-span-1",
  },
];
