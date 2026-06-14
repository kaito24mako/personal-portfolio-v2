import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";

import Footer from "@/_components/layout/Footer";
import Navbar from "@/_components/layout/Navbar";

const notoSans = Noto_Sans_JP({
  variable: "--font-notoSans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
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
      className={`${notoSans.variable} ${cormorant.variable} min-h-screen antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
