'use client'

import React from "react";
import { Meteors } from "./ui/meteors";

export default function WhatWeDo() {
  return (
    <div>
      <div className="w-full relative max-w-2xl m-5">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-500 to-orange-300 transform scale-[0.80] bg-orange-500 blur-3xl" />
        <div className="relative shadow-xl bg-neutral-950 border border-gray-700 px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-center items-center">
          <h2 className="font-normal text-primary text-center mb-4 relative z-50">
          Harnessing the latest technologies, we craft innovative solutions to propel your online presence and drive growth. Whether you&apos;re diving into e-commerce or a small business seeking digital transformation, we&apos;re here to deliver tailored strategies for success.
          </h2>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
