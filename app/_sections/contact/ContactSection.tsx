import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";
import ContactForm from "@/_components/common/form/ContactForm";
import SocialsList from "@/_components/features/footer/SocialsList";
import Divider from "@/_components/common/divider/Divider";
import Footer from "@/_components/layout/FooterV2";

function ContactSection() {
  return (
    <>
      <SectionContainer className="text-background grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
        <div className="flex flex-col text-center md:text-left gap-5 h-full">
          <FadeOutOnScroll>
            <Heading className="text-background">Get in touch</Heading>
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
            <h3 className="font-semibold">Socials</h3>
            <Divider opacity="low" />
            <div className="flex mx-auto md:mx-0 gap-2 mt-2">
              <SocialsList />
            </div>
          </FadeOutOnScroll>
        </div>

        <ContactForm />
      </SectionContainer>

      {/* absolute -bottom-15 */}

      {/* Marquee effect */}
      <div className=" overflow-hidden w-full py-20">
        {/* marquee track */}
        <div className="flex w-max animate-marquee">
          {/* original content block */}
          <div className="flex justify-around gap-40 pr-40 text-8xl font-heading text-background italic">
            <span>Thank you for visiting</span>
            {/* <span className="text-background">
              ポートフォリオをご覧いただき、ありがとうございます。
            </span> */}
          </div>
          {/* duplicate content block */}
          <div
            aria-hidden="true"
            className="flex justify-around gap-10 pr-10 text-9xl font-heading text-background italic"
          >
            <span>Thank you for visiting</span>
            {/* <span className="text-background">
              ポートフォリオをご覧いただき、ありがとうございます。
            </span> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactSection;
