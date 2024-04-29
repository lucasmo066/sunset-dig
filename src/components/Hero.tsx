'use client'

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {SkeletonHomePage} from '@/components/Skeleton';


export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col w-full overflow-hidden">
      <div className="w-full relative z-10 flex justify-center items-center h-300 pb-20 bg-black">
        <div className="absolute inset-x-0 bottom-12 md:bottom-40 flex flex-row justify-center">
          <Button variant="outline" className="border border-primary text-primary bg-transparent mx-2 px-4 py-6 md:px-6 md:py-6 lg:px-10">
            <Link href="#pricing">See Plans</Link>
          </Button>
          <Button className="mx-2 px-4 py-6 md:px-6 md:py-6 lg:px-10">
            <Link href="https://calendly.com/lmoraes-zay4/30min">Schedule Call</Link>
          </Button>
        </div>
        <div className="w-full max-h-screen">
          {loading ? (
            /* Show Skeleton component here */
            <SkeletonHomePage />
          ) : (
            /* Once loading is complete, show Spline component */
            <Spline scene="https://prod.spline.design/OIHZKF-QfaUqZJvC/scene.splinecode" />
          )}
        </div>
      </div>
    </section>
  );
}
