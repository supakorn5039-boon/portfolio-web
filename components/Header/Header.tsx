import Link from 'next/link';
import MobileNav from '../Navbar/MobileNav';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Boon
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DesTop  */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
        </div>

        {/* Mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
