import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import StarsBackGround from "@/components/StarsBackGround";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albin Hasanaj | Portfolio",
  description: "Welcome to my portfolio! My name is Albin Hasanaj, and I am a Fullstack Developer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#09090B] text-white`} suppressHydrationWarning={true}>
        <header className="w-full">
          <Navbar />
        </header>
        {children}
        <StarsBackGround />
        <PageTransition />
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
