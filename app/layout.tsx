import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";

import Header from "@/_components/_layout/Header";

import "./globals.css";
import Footer from "@/_components/_layout/Footer";

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
      className={`${notoSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
