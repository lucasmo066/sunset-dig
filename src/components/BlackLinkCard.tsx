import Link from "next/link";
import Image from "next/image";

const BlackLinkCard = () => {
  return (
    <div className="relative bg-neutral-900 text-white pt-10 pb-6 px-6 rounded-lg flex-1 sm:flex-initial">
      <div className="z-100">
        <h3 className="text-6xl font-light mb-20">Join <br /> Sunset Today</h3>
      </div>
      <div className="z-10 relative">

        <div className="border border-neutral-700 rounded-lg mb-4 flex items-center w-full">
          <Link href="https://calendly.com/lmoraes-zay4/30min">
            <div className="w-full px-4 pt-4 pb-10 hover:bg-neutral-800">
              <h4 className="text-primary text-lg font-normal">Book a 15 min intro call</h4>
              <p className="font-extralight">Learn more about how Sunset works and how it can help you.</p>
            </div>
          </Link>
        </div>
        <div className="border border-neutral-700 rounded-lg mb-4 flex items-center w-full">
          <Link href="#contact">
            <div className="w-full px-4 pt-4 pb-10 hover:bg-neutral-800">
              <h4 className="text-primary text-lg font-normal">Need something bigger?</h4>
              <p className="font-extralight">For enterprise teams, agencies, and more. Get in touch.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlackLinkCard;
