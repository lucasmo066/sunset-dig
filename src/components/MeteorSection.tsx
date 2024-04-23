'use client'

import { Meteors } from "./ui/meteors";

interface MeteorSectionProps {
  h2Content: string;
  buttonText: string;
}

function MeteorSection({ h2Content, buttonText }: MeteorSectionProps): JSX.Element {
  return (
    <div className="">
      <div className="w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-500 to-orange-400 transform scale-[0.80] bg-orange-500 blur-3xl" />
        {/*need to add a gradient to the letters*/}
        <div className=" flex flex-col justify-center items-center relative opacity-90 shadow-xl bg-neutral-950 border border-gray-600 px-5 py-10 mx-5 my-10 h-full overflow-hidden rounded-lg sm:mx-10 sm:py-20 md:mx-20 xl:mx-40">
          <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text font-medium tracking-tight text-transparent text-xl sm:text-3xl lg:text-4xl text-center mb-4 relative z-50">
            {h2Content}
          </h2>

          <button className="border px-4 py-1 rounded-lg text-slate-500 border-slate-500">
            <p className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text font-medium tracking-tight text-transparent">
            {buttonText}
            </p>
          </button>

          <Meteors number={25} />
        </div>
      </div>
    </div>
  );
}

export default MeteorSection;
