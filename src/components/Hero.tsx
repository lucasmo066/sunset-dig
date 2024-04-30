'use client'

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";
 
export function Hero() {
  return (
    <WavyBackground className="h-1/2 mx-auto"> {/* Adjust the height here */}
      <div className="h-1/2 w-full flex flex-col items-center justify-center">
        <h1 className="text-7xl md:text-9xl text-center bg-gradient-to-br from-orange-300 to-orange-800 bg-clip-text font-semibold tracking-tight text-transparent pb-3 mb-4">
          Sunset Digital
        </h1>
        <p className="text-2xl md:text-3xl mt-4 text-white font-extralight inter-var text-center">
          Empowering Businesses with Cutting-Edge Digital Solutions
        </p>
        <div className="flex flex-row items-center justify-center mt-20">
          <Button variant="outline" className="mt-8 bg-transparent hover:bg-primary hover:border-primary border-2 border-white text-white">See Plans</Button>
          <Button className="mt-8 ml-4">Schedule Call</Button>
        </div>
      </div>
    </WavyBackground>
  );
}
