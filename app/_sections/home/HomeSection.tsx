import EdgeContainer from "@/_components/common/container/EdgeContainer";
import FadeIn from "@/_components/animations/FadeIn";
import FadeOutOnScroll from "@/_components/animations/FadeOutOnScroll";

import Image from "next/image";

import arrow from "@/public/arrow.png";
import Bounce from "@/_components/animations/Bounce";

function HomeSection() {
  return (
    <EdgeContainer className="flex h-full flex-col pt-60 text-center">
      <FadeOutOnScroll className="flex h-full flex-col">
        <FadeIn position={60} duration={1.4}>
          <h1 className="font-heading text-6xl md:text-8xl">I&apos;m Kaito</h1>
        </FadeIn>

        <FadeIn position={80} duration={1.3} delay={0.1}>
          <h2 className="font-heading text-2xl md:text-4xl opacity-60">
            With passion in web development
          </h2>
        </FadeIn>

        <div className="mt-auto flex justify-center">
          <Bounce midPosition={10}>
            <Image src={arrow} alt="arrow" width={230} height={230} />
          </Bounce>
        </div>
      </FadeOutOnScroll>
    </EdgeContainer>
  );
}

export default HomeSection;
