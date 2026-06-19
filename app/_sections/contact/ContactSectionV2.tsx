import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";
import ContactForm from "@/_components/common/form/ContactForm";
import SocialsList from "@/_components/features/footer/SocialsList";
import Divider from "@/_components/common/divider/Divider";
import FooterV2 from "@/_components/layout/FooterV2";
import MarqueeX from "@/_components/animations/other/MarqueeX";

function ContactSection() {
  return (
    <>
      <SectionContainer className="text-background mgrid grid-cols-1 md:grid-cols-2 gap-10 h-full">
        <div className="flex flex-col justify-center items-center text-center md:text-left gap-5 h-full">
          <FadeOutOnScroll>
            <Heading className="font-semibold" color="secondary" size="md">
              Get in touch
            </Heading>
          </FadeOutOnScroll>

          <FadeOutOnScroll className="flex flex-col gap-2 mb-3">
            <p>
              I am always looking for new opportunities to collaborate on
              projects and work on building beautiful applications.
            </p>
            <p>
              Contact me via email or social media, and I will respond as soon
              as possible!
            </p>
          </FadeOutOnScroll>

          <FadeOutOnScroll className="flex flex-col text-center md:text-left gap-0.5">
            <h3 className="font-semibold">Social Network</h3>
            <Divider opacity="low" />
            <div className="flex mx-auto md:mx-0 gap-2 mt-2">
              <SocialsList />
            </div>
            {/* <MarqueeX
              contents={["連絡先", "連絡先"]}
              size="md"
              color="muted"
              textStyle="font-japanese!"
              containerStyle="py-10"
            /> */}
          </FadeOutOnScroll>
        </div>

        <ContactForm />
      </SectionContainer>

      {/* <MarqueeX
        contents={["Thank you for visiting...", "Hello I'm Kaito"]}
        size="lg"
        color="secondary"
        containerStyle="absolute bottom-0"
      /> */}

      <FooterV2 />
    </>
  );
}

export default ContactSection;
