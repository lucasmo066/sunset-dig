'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button } from "@/components/ui/button";

interface Step {
  step: string;
  title: string;
  explanation: string;
}

export function StepsSection() {
  const steps: Step[] = [
    {
      step: "1",
      title: "Set Up Initial Meeting",
      explanation:
        "We set up a quick 15-minute meeting to go over what the client wants.",
    },
    {
      step: "2",
      title: "Sit Back and Relax",
      explanation:
        "Once subscribed, the client can sit back and relax while our team of experts build your all-in-one premium healthcare website. We'll keep you updated every step of the way.",
    },
    {
      step: "3",
      title: "Review and Launch!",
      explanation:
        "Once your site is ready, we'll send you a link to review it. If the client is happy with everything, we'll launch your site and you're good to go! It's that simple.",
    },
  ];

  return (
    <div className="mx-auto mt-10 px-8 py-10 lg:w-3/4">
      <h2 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent mb-4">
        How it works
      </h2>
      <p className="text-center font-extralight mb-10 md:text-lg">
        We make the process of getting your website up and running as simple as
        possible. Here&apos;s how it works:
      </p>
      <HoverEffect
        items={steps.map((step, index) => ({
          title: step.step,
          description: step.explanation,
          link: `#${index}`,
        }))}
      />
      <div className="flex justify-center">
        <Button className="my-8 px-10 py-6">See Plans</Button>
      </div>
    </div>
  );
}
