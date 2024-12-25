import type { Metadata } from "next";
import {Poppins , Playfair_Display} from 'next/font/google'
import "./globals.css";
import Dashboard from "@/component/Dashboard";
import Navbar from "@/component/Navbar";
const geistPoppins = Poppins({
  subsets:['latin'],
  variable: "--font-poppins",
  weight:["100","200","300","400","500","600","700","800","900"]
});
const playFairDisplay = Playfair_Display({
  subsets:['latin'],
  variable: "--font-play-fair-display",
  weight:["400","500","600","700","800","900"]
});

export const metadata: Metadata = {
  title: "Coza store",
  description: "full stack ecommerce website create by Saher Saleem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${ geistPoppins.variable} ${playFairDisplay.variable} antialiased flex overscroll-y-none`}
      >
      
      {children}
      </body>
    </html>
  );
}
