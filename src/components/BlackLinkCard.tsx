import { ChevronRight } from "lucide-react";
import Link from "next/link";


const BlackLinkCard = () => {
  return (
    <div className="bg-neutral-900 text-white pt-10 pb-6 px-6 rounded-lg flex-1 sm:flex-initial">
      <h3 className="text-6xl font-light mb-20">Join <br /> Sunset Today</h3>
      <div className="">
      <div className="border border-neutral-700 rounded-lg mb-4 flex items-center w-full">
        <Link href="https://www.calendly.com">
        <div className="p-4 hover:bg-neutral-800">
          <h4 className="text-primary text-lg font-normal">Book a 15 min intro call</h4>
          <p className="font-extralight">Learn more about how Sunset works and how it can help you.</p>
          <ChevronRight size={34} />
        </div>
        </Link>
      </div>
      <div className="border border-neutral-700 rounded-lg mb-4 flex items-center w-full">
      <Link href="#contact">
        <div className="w-full p-4 hover:bg-neutral-800">
          <h4 className="text-primary text-lg font-normal">Need something bigger?</h4>
          <p className="font-extralight">For enterprise teams, agencies, and more. Get in touch.</p>
          <ChevronRight size={34} />
        </div>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default BlackLinkCard;
