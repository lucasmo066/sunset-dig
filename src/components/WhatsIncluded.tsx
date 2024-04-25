import React, { useState } from "react";

const WhatsIncluded = () => {
  const initialShowMoreState = false;
  const [showMore, setShowMore] = useState(initialShowMoreState);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const includedItems = [
    "AI Powered CMS",
    "Up to 1 team member",
    "Up to 1 requests at a time",
    "Analytics Integrations",
    "Patient Education Tools",
    "Up to 1 brand or company",
    "2 SEO blog posts per month",
    "Fully SEO Optimized Website",
    "Lifetime Website Support",
    "Lifetime Software Updates",
    "Unlimited Design Requests",
    "Unlimited Development Requests",
    "Unlimited Content/SEO Requests",
    "Hosting & API Uptime Guarantee",
    "Basic AI Workflows & Automation",
    "All-in-One HIPAA Compliant Website",
  ];

  const displayedItems = showMore ? includedItems : includedItems.slice(0, 8);

  return (
    <div className="m-2">
      <p className="font-semibold mb-4">What&apos;s Included</p>
      <div className="grid grid-cols-2 gap-2">
        {displayedItems.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item}</li>
            </ul>
          </div>
        ))}
      </div>
      <p className="text-black font-extralight cursor-pointer underline my-4" onClick={toggleShowMore}>
        {showMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default WhatsIncluded;
