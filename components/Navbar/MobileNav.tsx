'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { NavLinks } from './nav';

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-center mt-8">
            <Link href="/" className="text-4xl font-semibold text-white" onClick={handleLinkClick}>
              Boon
            </Link>
          </SheetTitle>
          <SheetDescription className="text-center"></SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col justify-center items-center gap-8 mt-20">
          {NavLinks.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.id}
                onClick={handleLinkClick}
                className={`${
                  link.path === pathname && 'text-accent border-b-2 border-accent'
                } capitalize text-xl hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
