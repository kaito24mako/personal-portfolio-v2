// * Projects (Projects section)
// add growth key to projects you want to use ProjectCardLarge (large size)
// omit growth key to projects you want to use ProjectCardSmall (small size)

import mako from "@/public/projects/mako.png";
import searchEmAll from "@/public/projects/search-em-all.png";
import bookCollection from "@/public/projects/book-collection.png";
import tictactoe from "@/public/projects/tic-tac-toe.png";
import adminDashboard from "@/public/projects/admin-dashboard.png";
import portfolioV1 from "@/public/projects/portfolio-v1.png";

export const projectsFeatured = [
  {
    title: "Portfolio CMS",
    image: mako,
    description:
      "A CMS for customizing a portfolio site via API endpoints. Utilizes Next.js with postgreSQL for the backend.",
    tech: ["Next.js", "Supabase", "TailwindCSS", "DaisyUI"],
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-2",
  },
  {
    title: "Book Collection",
    image: bookCollection,
    description:
      "Uses React.js to search and filter through the Pokemon TCG database, and store cards for tracking purposes. ",
    tech: ["React", "SCSS"],
    grid: "row-span-1",
  },
  {
    title: "Search Em' All!",
    image: searchEmAll,
    description:
      "Uses React.js to search and filter through the Pokemon TCG database, and store cards for tracking purposes. ",
    tech: ["React", "SCSS"],
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-2",
  },
  {
    title: "Tic Tac Toe",
    image: tictactoe,
    description:
      "Uses React.js to search and filter through the Pokemon TCG database, and store cards for tracking purposes. ",
    tech: ["React", "SCSS"],
    grid: "row-span-1",
  },
];

export const projects2026 = [
  {
    title: "Portfolio CMS",
    image: mako,
    description:
      "A CMS for customizing a portfolio site via API endpoints. Utilizes Next.js with postgreSQL for the backend.",
    tech: ["Next.js", "Supabase", "TailwindCSS", "DaisyUI"],
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-2",
  },
  {
    title: "Personal Portfolio V1",
    image: portfolioV1,
    description: "My first personal portfolio site, using React.js and SCSS",
    // tech: ["React", "SCSS"],
    grid: "row-span-1",
  },
  {
    title: "Search Em' All!",
    image: searchEmAll,
    description:
      "Uses React.js to search and filter through the Pokemon TCG database, and store cards for tracking purposes. ",
    tech: ["React", "SCSS"],
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-2",
  },
  {
    title: "Working in progress...",
    image: portfolioV1,
    // description: "My first personal portfolio site, using React.js and SCSS",
    // tech: ["React", "SCSS"],
    grid: "row-span-1",
  },
];
