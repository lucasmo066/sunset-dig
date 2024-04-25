

const BlackLinkCard = () => {
  return (
    <div className="bg-neutral-900 text-white px-6 py-10 rounded-lg flex-1 sm:flex-initial">
      <h3 className="text-6xl mb-20">Join <br /> Sunset Today</h3>
      <div className="mb-4 flex items-center ">
        <div className="p-4 hover:bg-neutral-800">
          <h4 className="text-lg font-bold">Book a 15 min intro call</h4>
          <p>Learn more about how Sunset works and how it can help you.</p>
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="p-4 hover:bg-neutral-800">
          <h4 className="text-lg font-bold">Need something bigger?</h4>
          <p>For enterprise teams, agencies, and more. Get in touch.</p>
        </div>
      </div>
    </div>
  );
};

export default BlackLinkCard;
