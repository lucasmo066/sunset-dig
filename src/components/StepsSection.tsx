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
      title: "Initial Consultation",
      explanation: "We schedule a brief 15-minute consultation to discuss your requirements.",
    },
    {
      step: "2",
      title: "Development Phase",
      explanation: "Sit back and relax as our team crafts your premium healthcare website. We provide regular updates throughout the process.",
    },
    {
      step: "3",
      title: "Final Review and Launch",
      explanation: "Once your website is ready, we'll share a preview link for your review. Upon approval, we'll launch your site and you're ready to go!",
    },
  ];

  return (
    <div className="mx-auto mt-10 px-8 py-10 lg:w-3/4">
      <h2 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent mb-4">
        How it works
      </h2>
      <p className="text-center font-extralight mb-10 md:text-lg">
        We make the process of getting your website up and running as simple as possible. Here&apos;s how it works:
      </p>
      <HoverEffect
        items={steps.map((step, index) => ({
          step: step.step,
          title: step.title,
          description: step.explanation,
          link: `#${index}`,
        }))}
      />
      <div className="flex justify-center">
      <a href="#pricing">
        <Button className="py-6 px-10 align-middle text-center justify-center">
          See Plans
            </Button>
            </a>
      </div>
    </div>
  );
}
