'use client'
import React, { useState } from 'react';
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDoSection";
import WelcomePage from "@/components/WelcomePage";
import RootLayout from "@/app/layout";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
    // You can add additional logic here, like navigating to another page.
  };

  return (
    <RootLayout showNav={!showWelcome}> {/* Pass showNav={!showWelcome} */}
      <main className="flex min-h-screen flex-col items-center">
        {showWelcome ? <WelcomePage onEnter={handleEnter} /> : (
          <>
            <Hero />
            <WhatWeDo />
          </>
        )}
      </main>
    </RootLayout>
  );
}
