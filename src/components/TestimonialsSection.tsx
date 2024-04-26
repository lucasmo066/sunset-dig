import { CardStack } from "@/components/ui/card-stack";
import { QuoteCard } from "@/components/QuoteCard";
import Image from "next/image";
import {cn} from '@/lib/utils';
import { Button } from "./ui/button";

export function TestimonialsSection() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8">
      {/* Section Header */}
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent mb-4">
          See What Our Clients Are Saying
        </h2>
        <p className="text-md sm:text-md text-center font-extralight px-10">
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
        {/* On Small Screens */}
        <div className="my-8 md:hidden">
          <h3 className="text-4xl font-semibold text-center text-black dark:text-white">It’s “you’ll never go<br></br> back” better.</h3>
          <p className="text-center font-extralight my-5 px-10">Sunset Digital replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs and final product delivered so fast that it will blow your mind.</p>
          <Button className="m-10 py-6 px-8">Get Started</Button>
        </div>
        {/* On Larger Screens */}
        <div className="hidden md:block">
          <h3 className=" mb-10 text-5xl font-semibold text-center text-black dark:text-white">It’s “you’ll never go<br></br> back” better.</h3>
        </div>
        <div className="hidden md:block">
          <p className="text-center font-light mb-10">Sunset Digital replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs and final product delivered so fast that it will blow your mind.</p>
          <div className="flex justify-center mt-2">
          <Button className="py-6 px-10 align-middle text-center justify-center">See Plans</Button>
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
    name: "John Doe",
    designation: "Founder, ABC Company",
    content: (
      <p>
        &quot;Working with Sunset Digital has been a game-changer. Their expertise in technology and innovative solutions has propelled our online presence. They&apos;ve delivered tailored strategies that significantly drove our growth.&qout;
      </p>
    ),
  },
  {
    id: 1,
    name: "Jane Smith",
    designation: "CEO, XYZ Enterprises",
    content: (
      <p>
        &qout;Our experience with Sunset Digital has been exceptional. Their e-commerce-focused approach has boosted our online sales. Highly recommended for effective online solutions.&qout;
      </p>
    ),
  },
  {
    id: 2,
    name: "David Williams",
    designation: "Marketing Manager, LMN Corporation",
    content: (
      <p>
        &qout;Sunset Digital provides outstanding customer service and websites that surpass the competition. With their membership program, managing our website has been a breeze.&qout;
      </p>
    ),
  },
];
