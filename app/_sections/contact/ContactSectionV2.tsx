import SectionContainer from "@/_components/common/container/SectionContainer";
import Heading from "@/_components/common/text/Heading";

import FadeOutOnScroll from "@/_components/animations/fade/FadeOutOnScroll";
import ContactForm from "@/_components/common/form/ContactForm";
import SocialsList from "@/_components/features/footer/SocialsList";
import Divider from "@/_components/common/divider/Divider";
import Image from "next/image";

import ocean from "@/public/bg/ocean.png";

function ContactSectionV2() {
  return (
    <SectionContainer className=" text-background grid grid-cols-5 px-0! pl-40! py-0! h-full">
      <div className="flex flex-col col-span-2">
        <h1 className="font-heading text-foreground text-9xl">Get In</h1>
        <h1 className="font-heading text-foreground text-9xl">Touch</h1>
      </div>

      <div className="relative col-span-3">
        <Image src={ocean} alt="ocean waves" fill />
      </div>
    </SectionContainer>
  );
}

export default ContactSectionV2;
