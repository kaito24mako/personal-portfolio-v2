import EdgeContainer from "@/_components/common/container/EdgeContainer";
import FadeIn from "@/_components/animations/FadeIn";
import FadeOutOnScroll from "@/_components/animations/FadeOutOnScroll";

function HomeSection() {
  return (
    <EdgeContainer className="pt-50">
      <FadeOutOnScroll>
        <FadeIn position={60} duration={1.4}>
          <h1 className="font-heading text-6xl md:text-7xl">I&apos;m Kaito</h1>
        </FadeIn>

        <FadeIn position={80} duration={1.3} delay={0.1}>
          <h2 className="font-heading text-2xl md:text-3xl opacity-60">
            With passion in web development
          </h2>
        </FadeIn>
      </FadeOutOnScroll>
    </EdgeContainer>
  );
}

export default HomeSection;
