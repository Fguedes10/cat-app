import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/www/shared/Navbar/page";
import Footer from "../www/shared/Footer/page";
import ClientProvider from "./ClientProvider";

const jersey25 = localFont({
  src: "./fonts/Jersey25.woff",
  variable: "--font-jersey25-mono",
  weight: "100 900",
  style: "normal",
});

const jotiOne = localFont({
  src: "./fonts/JotiOne.woff",
  variable: "--font-jotiOne-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cats Website",
  description: "Website to visualize all kinds of cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jersey25.variable} ${jotiOne.variable}`}>
        <ClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
