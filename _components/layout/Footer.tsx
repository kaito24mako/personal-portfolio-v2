import Link from "next/link";

function Footer() {
  return (
    <div className="absolute bottom-0 flex justify-between w-full py-3 bg-surface text-xs sm:text-sm text-foreground-muted px-7 sm:px-25 md:px-40 xl:px-60 3xl:px-100">
      <p className="text-center">2026 © Kaito Watanabe</p>
      <p>
        Made with{" "}
        <Link
          href="https://nextjs.org/"
          className="text-accent"
          aria-label="Next.js site"
        >
          Next.js
        </Link>
      </p>
    </div>
  );
}

export default Footer;
