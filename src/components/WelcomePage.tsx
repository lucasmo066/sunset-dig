'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Clock } from './Clock';

const WelcomePage = ({ onEnter }: { onEnter: () => void }) => {
  const handleEnterSite = () => {
    // Call onEnter if needed
    onEnter();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/5.svg"
        alt="Sunset Digital Logo"
        width={300}
        height={300}
      />
      <Clock />
      <Link href="/" prefetch={true}>
        <button
          onClick={handleEnterSite}
          className="bg-transparent border-2 border-orange-600 text-primary px-6 py-4 rounded-lg"
        >
          Enter Site
        </button>
      </Link>
    </div>
  );
};

export default WelcomePage;
