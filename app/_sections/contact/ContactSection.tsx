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
      <SectionContainer className="min-h-screen justify-center text-background text-center text-base lg:text-lg">
        <div className="flex flex-col gap-4 mb-5">
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
              as possible!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mx-auto">
            <GroupHeading heading="Location" className="col-span-1">
              <p className="mx-auto">Melbourne, Australia</p>
            </GroupHeading>

            <GroupHeading heading="Email">
              <Link
                href="mailto:kaitowatanabemcc@gmail.com"
                className=" hover:text-accent mx-auto"
              >
                kaitowatanabemcc@gmail.com
              </Link>
            </GroupHeading>

            <GroupHeading heading="Phone number">
              <Link
                href="tel:+61416127431"
                className="hover:text-accent mx-auto"
              >
                (+61) 416 127 431
              </Link>
            </GroupHeading>

            <GroupHeading heading="Social network">
              <SocialsList />
            </GroupHeading>
          </div>
        </div>

        {/* <div className="w-[400px] mx-auto">
          <ContactForm />
        </div> */}
      </SectionContainer>

      <Footer />
    </>
  );
}

export default ContactSection;
