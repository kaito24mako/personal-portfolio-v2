import Link from "next/link";

import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";
import ContactForm from "./components/ContactForm";
import SocialsList from "@/_components/features/footer/SocialsList";
import Footer from "@/_components/layout/Footer";
import GroupHeading from "@/_components/common/text/GroupHeading";

import Shine from "@/_components/animations/other/Shine";

function ContactSection() {
  return (
    <>
      <SectionContainer className="h-full text-background text-center text-base lg:text-lg">
        <div className="flex flex-col gap-4">
          <Heading className="font-semibold" color="secondary" size="md">
            <Shine firstColor="background" secondColor="foreground-muted/60%">
              Get in touch
            </Shine>
          </Heading>

          <div className="flex flex-col gap-2 mb-5">
            <p>
              I am always looking for new opportunities to collaborate on
              projects and work on building beautiful sites.
            </p>
            <p>
              Contact me via email or social media, and I will respond as soon
              as possible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-10 mx-auto">
            <GroupHeading heading="Location" className="col-span-1">
              <p className="mx-auto">Melbourne, Australia</p>
            </GroupHeading>

            <GroupHeading heading="Email">
              <Link
                href="mailto:kaitowatanabemcc@gmail.com"
                className=" hover:text-accent-dark mx-auto"
              >
                kaitowatanabemcc@gmail.com
              </Link>
            </GroupHeading>

            <GroupHeading heading="Phone number">
              <Link
                href="tel:+61416127431"
                className="hover:text-accent-dark mx-auto"
              >
                (+61) 0416 127 431
              </Link>
            </GroupHeading>

            <GroupHeading heading="Social Network">
              <SocialsList />
            </GroupHeading>
          </div>
        </div>

        {/* <div className="mt-0 lg:mt-20">
          <ContactForm />
        </div> */}
      </SectionContainer>

      <Footer />
    </>
  );
}

export default ContactSection;
