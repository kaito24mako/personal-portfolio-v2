import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";
import ContactForm from "@/_components/common/form/ContactForm";
import SocialsList from "@/_components/features/footer/SocialsList";
import Divider from "@/_components/common/divider/Divider";

function ContactSection() {
  return (
    <>
      <SectionContainer className="text-background grid grid-cols-1 md:grid-cols-2 gap-10">
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
    </>
  );
}

export default ContactSection;
