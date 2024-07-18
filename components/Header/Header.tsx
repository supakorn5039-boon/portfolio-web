import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import MobileNav from "../Navbar/MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Boon
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DesTop  */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
