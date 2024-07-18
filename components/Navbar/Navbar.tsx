"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinks, NavType } from "./nav";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {NavLinks.map((link: NavType) => (
        <React.Fragment key={link.id}>
          <Link
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
