import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

import Shine from "@/_components/animations/other/Shine";
import FadeInY from "@/_components/animations/fade/FadeInY";

function HomeSection() {
  return (
    <SectionContainer className="flex flex-col min-h-screen pt-80 text-center text-background">
      <div className="flex flex-col">
        <FadeInY position={10} duration={1.2}>
          <Heading size="xl">
            <Shine firstColor="background" secondColor="foreground-muted/60%">
              I&apos;m Kaito
            </Shine>
          </Heading>
        </FadeInY>

        <FadeInY position={10} duration={1.2}>
          <h2 className="font-heading text-border/90 text-2xl md:text-4xl">
            With passion in web development
          </h2>
        </FadeInY>
      </div>

      {/* <BounceY position={10} className="flex justify-center mt-auto">
        <Image src={arrow} alt="Arrow pointing down" width={230} height={230} />
      </BounceY> */}
    </SectionContainer>
  );
}

export default HomeSection;
