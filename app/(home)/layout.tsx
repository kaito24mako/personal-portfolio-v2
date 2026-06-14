import Image from "next/image";

import mountains from "@/public/bg/mountain-bg.png";
import Header from "@/_components/layout/Header";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0 -z-10">
        <Image
          src={mountains}
          fill
          quality={100}
          priority
          alt="mountains"
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {children}
    </div>
  );
}

export default HomeLayout;
