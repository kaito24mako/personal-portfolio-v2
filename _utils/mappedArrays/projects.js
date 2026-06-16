// * Projects (Projects section)

import mako from "@/public/projects/mako.png";
import catchEmAll from "@/public/projects/catch-em-all.png";

export const featuredProjects = [
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
    title: "Catch Em' All!",
    image: catchEmAll,
    description:
      "Uses React.js to search and filter through the Pokemon TCG database, and store cards for tracking purposes. ",
    tech: ["React", "SCSS"],
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-1",
  },
  {
    title: "Admin Dashboard",
    image: catchEmAll,
    description:
      "Uses React.js to search and filter through the Pokemon TCG database, and store cards for tracking purposes. ",
    tech: ["React", "SCSS"],
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-2",
  },
  {
    title: "Calculator",
    image: catchEmAll,
    description:
      "Uses React.js to search and filter through the Pokemon TCG database, and store cards for tracking purposes. ",
    tech: ["React", "SCSS"],
    growth:
      '"First dive into Next.js and full-stack programming. Learned about the intricacies of communicating between the front and back-end."',
    grid: "row-span-1",
  },
];
