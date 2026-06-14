import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";

import Footer from "@/_components/layout/Footer";
import Header from "@/_components/layout/Header";

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
      <body className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 overflow-y-auto snap-y snap-mandatory">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
