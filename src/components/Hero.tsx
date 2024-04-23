'use client'

import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex flex-col w-full overflow-hidden">
      <div className="w-full h-screen/2 relative z-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
            <Button variant="outline" className="border border-primary text-primary bg-transparent mx-2">
                <Link href="#pricing">See Plans</Link>
            </Button>
            <Button className="mx-2">
                <Link href="/contact">Schedule Call</Link>
            </Button>
        </div>
        <Spline scene="https://prod.spline.design/OIHZKF-QfaUqZJvC/scene.splinecode" />
      </div>
    </section>
  );
}
