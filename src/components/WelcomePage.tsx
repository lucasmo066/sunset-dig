'use client'
import Image from 'next/image';

const WelcomePage = ({ onEnter }: { onEnter: () => void }) => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
            src="/5.svg"
            alt="Sunset Digital Logo"
            width={300}
            height={300}
        />
        <button onClick={onEnter} className="bg-transparent border-2 border-orange-600 text-primary px-6 py-4 rounded-lg">Enter Site</button>
      </div>
    );
  }
  
  export default WelcomePage;