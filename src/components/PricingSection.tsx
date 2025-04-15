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
      monthlyPrice: 50,
      yearlyPrice: 45,
    },
    growth: {
      name: "Premium",
      description: "Double the requests. Best for growing, multi-location businesses.",
      monthlyPrice: 400,
      yearlyPrice: 350,
    },
  };

  return (
    <section id="pricing" className="flex flex-col w-full px-5 py-10 sm:px-10">
      <div>
        <h2 className="text-5xl md:text-6xl text-center bg-gradient-to-br from-orange-400 to-orange-700 bg-clip-text font-semibold tracking-tight text-transparent pt-10 pb-3 mb-4">Pricing</h2>
        <p className="text-center font-extralight px-5 md:px-10 lg:px-20 mb-10 md:text-lg">For new projects, we charge an initial build fee that varies depending on the scope and complexity of the project. Typically, for projects comprising three pages, we charge a flat fee of $1500 for the initial build. For each additional page beyond the initial three, there is an incremental charge of $200 per page.</p>
        <p className="text-center font-extralight px-5 md:px-10 lg:px-20 mb-10 md:text-lg">Following the initial build, our clients transition to a monthly plan that covers ongoing support, maintenance, and hosting services.</p>
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
        <p className="text-center font-extralight px-5 md:px-10 lg:px-20 my-10 md:text-lg">Our pricing model ensures that you only pay for what you need, with clear visibility into costs from the outset. By charging an initial build fee and transitioning to a monthly plan, we aim to provide you with a cost-effective solution that meets your requirements both now and in the future.<br /><br />
At Sunset Digital, we are committed to delivering professional and efficient service while providing excellent value for your investment.</p>
      </div>
    </section>
  );
};

export default PricingSection;
