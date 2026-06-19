import "./globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP, Inter } from "next/font/google";

import Navbar from "@/_components/layout/Navbar";
import Footer from "@/_components/layout/FooterV2";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const notoSans = Noto_Sans_JP({
  variable: "--font-notoSans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaito Watanabe",
  description: "Kaito Watanabe's portfolio site",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${cormorant.variable} ${inter.variable} min-h-screen snap-y snap-proximity antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default RootLayout;
