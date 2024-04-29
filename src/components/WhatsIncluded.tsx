'use client'

import { Check } from "lucide-react";
import React, { useState } from "react";

interface WhatsIncludedProps {
  selectedPlan: string;
}

const WhatsIncluded: React.FC<WhatsIncludedProps> = ({ selectedPlan }) => {
  const initialShowMoreState = false;
  const [showMore, setShowMore] = useState<boolean>(initialShowMoreState);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const basicIncludedItems = [
    "AI Powered CMS",
    "Up to 1 team member",
    "Up to 1 requests at a time",
    "Analytics Integrations",
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

  const growthIncludedItems = [
    "AI Powered CMS",
    "Up to 5 team members",
    "Up to 2 requests at a time",
    "Analytics Integrations", 
    "Up to 2 brands or companies",
    "4 SEO blog posts per month",
    "Fully SEO Optimized Website",
    "Lifetime Website Support",
    "Lifetime Software Updates",
    "Unlimited Design Requests",
    "Unlimited Development Requests",
    "Unlimited Content/SEO Requests",
    "Hosting & API Uptime Guarantee",
    "Advanced AI Workflows & Automation",
    "All-in-One HIPAA Compliant Website",
  ];

  const includedItems = selectedPlan === 'growth' ? growthIncludedItems : basicIncludedItems;
  
  const displayedItems = showMore ? includedItems : includedItems.slice(0, 8);

  return (
    <div className="m-2">
      <p className="font-semibold mb-4">What&apos;s Included</p>
      <div className="grid grid-cols-2 gap-2">
        {displayedItems.map((item, index) => (
          <div key={index}>
            <ul className="flex align-middle gap-1">
              <Check size={20} className="text-primary" />
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
