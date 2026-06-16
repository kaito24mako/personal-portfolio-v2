import Bounce from "@/_components/animations/Bounce";
import SectionContainer from "@/_components/common/container/SectionContainer";
import FadeInX from "@/_components/animations/FadeInX";
import FadeOutOnScroll from "@/_components/animations/FadeOutOnScroll";

import arrow from "@/public/arrow.png";

import Image from "next/image";

function HomeSection() {
  return (
    <SectionContainer className="flex flex-col h-full pt-80 text-center text-background">
      <FadeOutOnScroll className="flex flex-col">
        <FadeInX position={60} duration={1.4}>
          <h1 className="font-heading text-6xl md:text-8xl">I&apos;m Kaito</h1>
        </FadeInX>

        <FadeInX position={80} duration={1.3} delay={0.1}>
          <h2 className="font-heading text-2xl md:text-4xl opacity-60">
            With passion in web development
          </h2>
        </FadeInX>
      </FadeOutOnScroll>

      <Bounce
        position={10}
        className={`sm:flex sm:justify-center mt-auto hidden`}
      >
        <Image src={arrow} alt="Arrow pointing down" width={230} height={230} />
      </Bounce>
    </SectionContainer>
  );
}

export default HomeSection;
