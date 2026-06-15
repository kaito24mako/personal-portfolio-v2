import FadeInOnView from "@/_components/animations/FadeInOnView";
import TechCard from "@/_components/common/card/TechCard";
import SectionContainer from "@/_components/common/container/SectionContainer";
import Divider from "@/_components/common/divider/Divider";

const frontendTech = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React.js logo",
    text: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "Typescript logo",
    text: "Typescript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS logo",
    text: "Tailwind CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    alt: "SASS logo",
    text: "SASS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    alt: "Bootstrap logo",
    text: "Bootstrap",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    alt: "Framer Motion logo",
    text: "Framer Motion",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript logo",
    text: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    alt: "CSS3 logo",
    text: "CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    alt: "HTML logo",
    text: "HTML",
  },
];

const backendTech = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "Next.js logo",
    text: "Next.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    alt: "SQLite logo",
    text: "SQLite",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    alt: "Supabase logo",
    text: "Supabase",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    alt: "Express logo",
    text: "Express",
  },
];

function AboutSection() {
  return (
    <SectionContainer className="flex flex-col items-center">
      <div className="flex flex-col text-center gap-6">
        <FadeInOnView>
          <h1 className="text-accent text-5xl font-heading font-semibold">
            A little about me
          </h1>
        </FadeInOnView>

        <FadeInOnView>
          <p className="text-background text-base md:text-lg">
            Welcome to my portfolio! I&apos;m Kaito and I have been studying web
            development since 2025. I have a sharp eye for detail, am passionate
            in learning new technologies, and mostly important, I love creating
            stunning websites. In my spare time, playing basketball and going to
            karaoke is my passion. Here are some technologies that I am familiar
            with:
          </p>
        </FadeInOnView>

        <Divider className="mt-5 font-heading text-lg font-semibold">
          Front-End
        </Divider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {frontendTech.map((tech) => (
            <TechCard
              key={tech.text}
              src={tech.src}
              alt={tech.alt}
              text={tech.text}
            />
          ))}
        </div>

        <Divider className="mt-5 font-heading text-lg font-semibold">
          Back-End
        </Divider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {backendTech.map((tech) => (
            <TechCard
              key={tech.text}
              src={tech.src}
              alt={tech.alt}
              text={tech.text}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
