'use client'

import React, { useState } from "react";
import BlackLinkCard from "./BlackLinkCard";
import PricingCard from "./PricingCard"; 

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const handlePlanToggle = (plan:string) => {
    setSelectedPlan(plan);
  };

  const handlePeriodToggle = (period:string) => {
    setSelectedPeriod(period);
  };

  const membershipPlans = {
    basic: {
      name: "Basic",
      description: "One request at a time. Best for single location businesses.",
      monthlyPrice: 400,
      yearlyPrice: 250,
    },
    growth: {
      name: "Growth",
      description: "Double the requests. Best for growing, multi-location businesses.",
      monthlyPrice: 700,
      yearlyPrice: 550,
    },
  };

  return (
    <section id="pricing" className="flex flex-col w-full px-5 py-10 sm:px-10">
      <div>
        <h2 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent pt-10 pb-3 mb-4">Pricing</h2>
        <p className="text-center font-extralight px-5 md:px-10 lg:px-20 mb-10 md:text-lg">Choose the plan that works best for you.</p>
        
        <div className="flex flex-col justify-center md:flex-row gap-8">
          {/* Black background div */}
          <BlackLinkCard />
  
          {/* White background div */}
          <PricingCard
            selectedPlan={selectedPlan}
            selectedPeriod={selectedPeriod}
            handlePlanToggle={handlePlanToggle}
            handlePeriodToggle={handlePeriodToggle}
            membershipPlans={membershipPlans}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
