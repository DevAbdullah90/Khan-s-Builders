import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Floating from "@/components/shared/Floating";
import CTASection from "@/components/sections/CTASection";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Khans Builder | Modern Solutions",
  description: "Senior engineering and construction solutions for the modern world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <CTASection />
        <Footer />
        <Floating />
      </body>
    </html>
  );
}
