import Link from "next/link";

import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";
import ContactForm from "@/_components/common/form/ContactForm";
import SocialsList from "@/_components/features/footer/SocialsList";
import Footer from "@/_components/layout/Footer";
import GroupHeading from "@/_components/common/text/GroupHeading";

import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";
import MarqueeX from "@/_components/animations/other/MarqueeX";
import Shine from "@/_components/animations/other/Shine";

// ? Don't need fadeout animation for elements, since it can affect performance?

function ContactSection() {
  return (
    <>
      <SectionContainer className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-15 h-full text-background">
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <FadeOutOnScroll>
            <Heading className="font-semibold" color="secondary" size="md">
              <Shine>Get in touch</Shine>
            </Heading>
          </FadeOutOnScroll>

          <FadeOutOnScroll className="flex flex-col gap-2 text-border">
            <p>
              I am always looking for new opportunities to collaborate on
              projects and work on building beautiful applications.
            </p>
            <p>
              Contact me via email or social media, and I will respond as soon
              as possible.
            </p>
          </FadeOutOnScroll>

          <FadeOutOnScroll>
            <MarqueeX
              contents={[
                "Living in Melbourne, Australia",
                "Living in Melbourne, Australia",
                // "Living in Melbourne, Australia",
                // "Living in Melbourne, Australia",
              ]}
              size="sm"
              color="muted"
              textStyle="font-heading"
              italic
            />
          </FadeOutOnScroll>

          <FadeOutOnScroll className="flex flex-col gap-7 text-center lg:text-left">
            {/* <div className="flex flex-col gap-0.5">
              <h2 className="font-semibold">Location</h2>
              <Divider opacity="low" />
              <div className="flex mx-auto lg:mx-0 gap-4 mt-1">
                <p>
                  Australia, Victoria
                  <br />
                  Melbourne 3006
                </p>
              </div>
            </div> */}

            <GroupHeading heading="Email">
              <Link
                href="mailto:kaitowatanabemcc@gmail.com"
                className="link link-hover"
              >
                kaitowatanabemcc@gmail.com
              </Link>
            </GroupHeading>

            <GroupHeading heading="Social Network">
              <SocialsList />
            </GroupHeading>
          </FadeOutOnScroll>
        </div>

        <ContactForm />
      </SectionContainer>

      <Footer />
    </>
  );
}

export default ContactSection;
