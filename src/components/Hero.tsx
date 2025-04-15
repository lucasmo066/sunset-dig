'use client'

import React from "react";
import { motion } from "framer-motion"; 
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <WavyBackground className="h-1/2 mx-auto px-10"> {/* Adjust the height here */}
      <div className="h-1/2 w-full flex flex-col items-center justify-center">
        {/* Wrap the h1 with motion.div */}
        <motion.div
          initial={{ y: -100 }} // Start position above the viewport
          animate={{ y: 0 }} // Animate to y position 0 (normal position)
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
        >
          <h1 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-300 to-orange-800 bg-clip-text font-semibold tracking-tight text-transparent pb-3 mb-4">
          Custom Websites That Fuel Your Business Growth.
          </h1>
        </motion.div>
        {/* The rest of the content */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
        <p className="text-xl md:text-xl mt-4 text-white font-extralight inter-var text-center">
        Skip the complexity and inflated costs of traditional agencies. We build, host, and maintain your website for one transparent fee—so you can focus on what matters most.
        </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
        <div className="flex flex-row gap-8 items-center justify-center mt-10">
           {/* TODO: Add link to calendly */}
           <Link href="">
          <Button className="mt-8">Let’s Talk Growth</Button>
          </Link>

          <Link href="#pricing">
          <Button variant="outline" className="mt-8 bg-transparent hover:bg-primary hover:border-primary border-2 border-white text-white">See Plan & Pricing</Button>
          </Link> 
        </div>
        </motion.div>
      </div>
    </WavyBackground>
  );
}

