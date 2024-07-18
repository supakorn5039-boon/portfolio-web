import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import PageTransition from "@/components/PageTransition/PageTransition";
import StairEffectTransition from "@/components/Stair/StairEffectTransition";

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Build a Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetbrainsMono.variable}>
        <Header />
        <StairEffectTransition />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
