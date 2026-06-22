import "./globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";

import Navbar from "@/_components/layout/Navbar";
import Footer from "@/_components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const inter = Inter_Tight({
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
      className={`${cormorant.variable} ${inter.variable}  antialiased`}
    >
      <body className="flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default RootLayout;
