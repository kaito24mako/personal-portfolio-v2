import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

import Shine from "@/_components/animations/other/Shine";

function HomeSection() {
  return (
    <SectionContainer className="flex flex-col pt-80 text-center text-background">
      <div className="flex flex-col">
        <Heading size="xl">
          <Shine firstColor="background" secondColor="foreground-muted/60%">
            I&apos;m Kaito
          </Shine>
        </Heading>

        <h2 className="font-heading text-border/90 text-2xl md:text-4xl">
          With passion in web development
        </h2>
      </div>

      {/* <BounceY position={10} className="flex justify-center mt-auto">
        <Image src={arrow} alt="Arrow pointing down" width={230} height={230} />
      </BounceY> */}
    </SectionContainer>
  );
}

export default HomeSection;
