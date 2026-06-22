import Link from "next/link";

import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";
import ContactForm from "@/_components/common/form/ContactForm";
import SocialsList from "@/_components/features/footer/SocialsList";
import Footer from "@/_components/layout/Footer";
import GroupHeading from "@/_components/common/text/GroupHeading";

import Shine from "@/_components/animations/other/Shine";

function ContactSection() {
  return (
    <>
      <SectionContainer className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-15 h-full text-background">
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <Heading className="font-semibold" color="secondary" size="md">
            <Shine firstColor="background" secondColor="foreground-muted/60%">
              Get in touch
            </Shine>
          </Heading>

          <div className="flex flex-col gap-2">
            <p>
              I am always looking for new opportunities to collaborate on
              projects and work on building beautiful applications.
            </p>
            <p>
              Contact me via email or social media, and I will respond as soon
              as possible.
            </p>
          </div>

          {/* <MarqueeX
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
          /> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <GroupHeading heading="Location" className="col-span-1">
              <p>Melbourne, Australia</p>
            </GroupHeading>

            <GroupHeading heading="Email">
              <Link
                href="mailto:kaitowatanabemcc@gmail.com"
                className=" hover:text-accent-dark"
              >
                kaitowatanabemcc@gmail.com
              </Link>
            </GroupHeading>

            <GroupHeading heading="Phone number">
              <Link
                href="tel:+61416127431"
                className="hover:text-accent-dark cursor-pointer"
              >
                (+61) 0416 127 431
              </Link>
            </GroupHeading>

            <GroupHeading heading="Social Network">
              <SocialsList />
            </GroupHeading>
          </div>
        </div>

        <ContactForm />
      </SectionContainer>

      <Footer />
    </>
  );
}

export default ContactSection;
