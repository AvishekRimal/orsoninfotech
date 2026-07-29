import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orson Info Tech | Enterprise Software Development & AI Solutions",
  description:
    "We build software that drives success. Premium web, mobile, AI, and cloud software solutions for startups and enterprise businesses worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className={`${inter.className} antialiased bg-white text-[#0F2742]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}