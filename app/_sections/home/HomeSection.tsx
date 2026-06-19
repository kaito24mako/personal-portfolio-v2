import Image from "next/image";

import BounceY from "@/_components/animations/bounce/BounceY";
import SectionContainer from "@/_components/common/container/SectionContainer";
import FadeInX from "@/_components/animations/fade/FadeInX";
import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";

import arrow from "@/public/arrow.png";
import Heading from "@/_components/common/text/Heading";

function HomeSection() {
  return (
    <SectionContainer className="flex flex-col min-h-screen pt-80 text-center text-background">
      <FadeOutOnScroll className="flex flex-col">
        <FadeInX position={60} duration={1.4}>
          <Heading className="font-heading" size="xl">
            I&apos;m Kaito
          </Heading>
        </FadeInX>

        <FadeInX position={80} duration={1.3} delay={0.1}>
          <h2 className="font-heading text-2xl md:text-4xl opacity-60">
            With passion in web development
          </h2>
        </FadeInX>
      </FadeOutOnScroll>

      <BounceY position={10} className="flex justify-center mt-auto">
        <Image src={arrow} alt="Arrow pointing down" width={230} height={230} />
      </BounceY>
    </SectionContainer>
  );
}

export default HomeSection;
