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
      title: "Book a Consultation",
      explanation: "Schedule a quick call with our team to discuss your business goals and website needs. No strings attached. If we’re a good fit, we’ll send you a detailed project quote.",
    },
    {
      step: "2",
      title: "Approve Quote & Pay Deposit",
      explanation: "Once you’re happy with the plan and pricing, you’ll pay a small deposit to secure your spot in our production schedule.",
    },
    {
      step: "3",
      title: "Development & Collaboration",
      explanation: "Sit back while we build your custom website. You’ll receive regular updates, and you can track progress from your personal dashboard.",
    },
    {
      step: "4",
      title: "Launch & Ongoing Support",
      explanation: "After final approval, we launch your site. Enjoy ongoing maintenance, updates, and support via our monthly or annual subscription plans.",
    },
  ];

  return (
    <div className="mx-auto mt-10 px-8 py-10 lg:w-3/4">
      <h2 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent mb-4">
        Our Streamlined Process
      </h2>
      <p className="text-center font-extralight mb-10 md:text-lg">
        We’ve simplified the entire experience so you know exactly what to expect—every step of the way.
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
        {/* TODO: Add link to calendly */}
        <a href="">
          <Button className="py-6 px-10 align-middle text-center justify-center">
            Ready to Get Started? Book a Consultation
          </Button>
        </a>
      </div>
    </div>
  );
}
