'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-40"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.1, duration: 0.3, ease: 'easeInOut' },
          }}
        />
      </div>
      {children}
    </AnimatePresence>
  );
}
