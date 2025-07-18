'use client';

import Header from '@/components/Header/Header';
import PageTransition from '@/components/PageTransition/PageTransition';
import StairEffectTransition from '@/components/Stair/StairEffectTransition';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);
  const [pendingChildren, setPendingChildren] = useState(children);

  useEffect(() => {
    setShowContent(false);

    const timeout = setTimeout(() => {
      setPendingChildren(children);
      setShowContent(true);
    }, 700);

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <>
      <Header />
      <StairEffectTransition />
      <PageTransition />
      {showContent && (
        <div id="page-content-wrapper">
          <main className="flex-grow overflow-auto">{pendingChildren}</main>
        </div>
      )}
    </>
  );
}
