import Image from "next/image";
import Link from "next/link";
import EdgeContainer from "../_common/_container/EdgeContainer";

function Header() {
  return (
    <EdgeContainer className="flex justify-between items-center bg-transparent">
      <Link href="/">
        <Image
          src="/icon/logo-transparent.png"
          alt="logo of Kaito Watanabe"
          width={70}
          height={70}
        ></Image>
      </Link>

      <ul className="flex gap-5 sm:gap-8">
        <li className="hover:text-accent">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:text-accent">
          <Link href="/contact">Contact</Link>
        </li>
        {/* <li>
          <Link href="/">Blog</Link>
        </li> */}
      </ul>
    </EdgeContainer>
  );
}

export default Header;
