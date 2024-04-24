'use client'
import React, { useState } from 'react';
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
          </>
        )}
      </main>
    </RootLayout>
  );
}
