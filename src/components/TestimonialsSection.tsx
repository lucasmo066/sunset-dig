import { CardStack } from "@/components/ui/card-stack";
import { QuoteCard } from "@/components/QuoteCard";
import Image from "next/image";
import {cn} from '@/lib/utils';
import { Button } from "./ui/button";

export function TestimonialsSection() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-10 px-4 lg:w-3/4">
      {/* Section Header */}
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent pb-3 mb-2">
          See What Our Clients Are Saying
        </h2>
        <p className="text-center font-extralight px-5 md:px-10 mb-10 md:text-lg">
          We take pride in our customer service and strive to provide the best
          experience possible. We are always looking for feedback and ways to
          improve our services.
        </p>
      </div>


      <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 gap-8 p-8 my-10">
      {/* Testimonials */}
      <div className="md:col-span-2">
        <div className="col-span-1 md:col-span-2">
          <CardStack items={CARDS} />
        </div>
      </div>
      {/* Quote Card and Content */}
      <div className="">
  <div className="flex flex-col justify-center"> {/* Center content */}
    {/* On Small Screens */}
    <div className="my-8 md:hidden">
      <h3 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent pb-3 mb-2">It’s “you’ll never go<br></br> back” better.</h3>
      <p className="text-center font-extralight my-5 px-10">Sunset Digital replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs and final product delivered so fast that it will blow your mind.</p>
      <div className="flex justify-center">
    
      <Button className="m-10 py-6 px-8 align-middle text-center justify-center">See Plans</Button>
      </div>
    </div>
    {/* On Larger Screens */}
    <div className="hidden md:block items-center justify-center">
      <h3 className="bg-gradient-to-br from-orange-400 to-orange-800 bg-clip-text font-medium tracking-tight text-transparent text-xl sm:text-5xl lg:text-7xl text-center relative z-50 mb-3">It’s “you’ll never go<br></br> back” better.</h3>
    </div>
    <div className="hidden md:block">
      <p className="lg:text-xl text-center font-light mb-10">Sunset Digital replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs and final product delivered so fast that it will blow your mind.</p>
      <div className="flex justify-center mt-2">
        <Button className="py-6 px-10 align-middle text-center justify-center">See Plans</Button>
      </div>
    </div>
  </div>
</div>

      {/* Quote Card */}
      <div className="">
        <div className="col-span-1 md:col-span-1">
          <QuoteCard />
        </div>
      </div>
    </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-orange-200 text-orange-700 dark:bg-orange-700/[0.2] dark:text-orange-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Julio Ferreira Sr.",
    designation: "CEO, Alliance Auto Brokers",
    content: (
      <p>
        &quot;Sunset Digital has been a game-changer. Their expertise in innovative solutions has propelled our online presence and credibility. I can focus on doing my job because I know they&apos;ll handle the site!&quot;
      </p>
    ),
  },
  {
    id: 1,
    name: "Teddy Edwar",
    designation: "Owner, Sahara Grill",
    content: (
      <p>
        &quot;We did not have much of an online presence before Lucas and Sunset came along. They have helped us immensely with a top of the line website that does well on SEO. They really do go above and beyond! &quot;
      </p>
    ),
  },
  {
    id: 2,
    name: "David Shakur",
    designation: "Marketing Manager, LMN Corporation",
    content: (
      <p>
        &quot;Sunset Digital provides outstanding customer service and websites that surpass the competition. With their membership program, managing our website has been a breeze!&quot;
      </p>
    ),
  },
];
