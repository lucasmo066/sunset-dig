import { ChevronRight } from "lucide-react";


const BlackLinkCard = () => {
  return (
    <div className="bg-neutral-900 text-white pt-10 px-6 rounded-lg flex-1 sm:flex-initial">
      <h3 className="text-6xl font-light mb-20">Join <br /> Sunset Today</h3>
      <div className="mb-4 flex items-center ">
        <div className="p-4 hover:bg-neutral-800">
          <h4 className="text-primary text-lg font-normal">Book a 15 min intro call</h4>
          <p className="font-extralight">Learn more about how Sunset works and how it can help you.</p>
          <ChevronRight size={34} />
        </div>
      </div>
      <div className="flex items-center">
        <div className="p-4 hover:bg-neutral-800">
          <h4 className="text-primary text-lg font-normal">Need something bigger?</h4>
          <p className="font-extralight">For enterprise teams, agencies, and more. Get in touch.</p>
          <ChevronRight size={34} />
        </div>
      </div>
    </div>
  );
};

export default BlackLinkCard;
