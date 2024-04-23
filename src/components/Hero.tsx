'use client'

import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import Link from 'next/link';

// need to set h1 and p tag as metadata since its in the spline scene

export default function Hero() {
  return (
    <section className="relative flex flex-col w-full overflow-hidden">
      <div className="w-full relative z-10">
        <div className="absolute inset-x-0 bottom-5 sm:bottom-10 md:bottom-40 flex justify-center">
          <Button variant="outline" className="border border-primary text-primary bg-transparent mx-2 px-4 py-4">
            <Link href="#pricing">See Plans</Link>
          </Button>
          <Button className="mx-2 px-4 py-4">
            <Link href="/contact">Schedule Call</Link>
          </Button>
        </div>
        <div className="w-full overflow-hidden rounded-lg h-screen/2">
          <Spline scene="https://prod.spline.design/OIHZKF-QfaUqZJvC/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
