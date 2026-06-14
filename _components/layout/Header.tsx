import Image from "next/image";
import Link from "next/link";
import EdgeContainer from "../common/container/EdgeContainer";

function Header() {
  return (
    <EdgeContainer className="flex justify-between items-center bg-transparent fixed top-0 left-0 right-0 z-50">
      <Link href="#home">
        <Image
          src="/icon/logo-transparent.png"
          alt="logo of Kaito Watanabe"
          width={70}
          height={70}
        ></Image>
      </Link>

      <ul className="flex gap-5 sm:gap-8">
        <li className="hover:text-accent">
          <Link href="#home">Home</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="#contact">Contact</Link>
        </li>
        {/* <li>
          <Link href="/">Blog</Link>
        </li> */}
      </ul>
    </EdgeContainer>
  );
}

export default Header;
