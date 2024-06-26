'use client'

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Meteors } from "./ui/meteors";

interface MeteorSectionProps {
  h2Content: string;
  buttonText: string;
}

function MeteorSection({ h2Content, buttonText }: MeteorSectionProps): JSX.Element {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="mt-5 md:px-10 lg:px-10 xl:px-30">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
        className="w-full relative"
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-500 to-orange-400 transform scale-[0.75] md:scale-[.55] bg-orange-500 blur-3xl" />
        <div className=" border-gray-700 flex flex-col justify-center items-center relative opacity-90 shadow-xl bg-neutral-950 px-10 py-10 mx-5 my-10 h-full border-2 overflow-hidden rounded-lg sm:mx-10 sm:py-20 md:mx-40 lg:py-30 xl:mx-80">
          
          <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text font-medium tracking-tight text-transparent text-xl sm:text-3xl lg:text-4xl text-center mb-4 relative z-50">
            {h2Content}
          </h2>

          <button className="hidden border px-4 py-1 rounded-lg text-slate-500 border-slate-500">
            <p className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text font-medium tracking-tight text-transparent">
            {buttonText}
            </p>
          </button>

          <Meteors number={35} />
        </div>
      </motion.div>
    </div>
  );
}

export default MeteorSection;
