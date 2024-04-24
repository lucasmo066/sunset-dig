'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Hero from "@/components/Hero";
import WelcomePage from "@/components/WelcomePage";
import RootLayout from "@/app/layout";
import MeteorSection from '@/components/MeteorSection';

import { StepsSection } from '@/components/StepsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';


export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);

    // Save to local storage
    localStorage.setItem('visited', 'true');
  };

  return (
    <RootLayout showNav={!showWelcome}> {/* Pass showNav={!showWelcome} */}
      <main className="flex min-h-screen flex-col items-center">
        {showWelcome ? <WelcomePage onEnter={handleEnter} /> : (
          <>
            <Hero />
            <MeteorSection h2Content="Harnessing the latest technologies, we craft innovative solutions to propel your online presence and drive growth. Whether you're diving into e-commerce or a small business seeking digital transformation, we're here to deliver tailored strategies for success." buttonText="Explore Projects" />
           <StepsSection />
           <TestimonialsSection />
           <h4 className='my-10'>What you get section here</h4>
           <MeteorSection h2Content="Backed by a 100% Money-Back Guarantee. We're confident in our ability to deliver results, and we stand by our work. If you're not satisfied with our services, we'll refund your money—no questions asked." buttonText="Where Do I Start?" />
           <h4 className="my-10">Pricing section here</h4>
           <h4 className="my-10">FAQ section here</h4>
           <h4 className="my-10">Contact Us section here</h4>
           <footer className="w-full bg-neutral-950 border border-neutral-700 text-primary text-center py-10">
           <Image
                src="/3.svg"
                alt="Sunset Digital Logo"
                width={100}
                height={100}
                className='mx-auto mt-5'
              />
              
             <p>&copy; 2024 Sunset Digital</p>
            </footer>
          </>
        )}
      </main>
    </RootLayout>
  );
}
