import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import BlackLinkCard from "./BlackLinkCard";
import { Button } from "@/components/ui/button";
import PricingCard from "./PricingCard"; // Adjust the path as needed

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const handlePlanToggle = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePeriodToggle = (period) => {
    setSelectedPeriod(period);
  };

  const membershipPlans = {
    basic: {
      name: "Basic",
      description: "One request at a time. Best for single location businesses.",
      monthlyPrice: 500,
      yearlyPrice: 300,
    },
    growth: {
      name: "Growth",
      description: "Double the requests. Best for growing, multi-location businesses.",
      monthlyPrice: 1000,
      yearlyPrice: 700,
    },
  };

  return (
    <section className="flex flex-col w-full px-5 py-10 sm:px-8 border-4 border-red-500">
      <div>
        <h2 className="text-5xl font-bold text-center text-primary mb-4">Pricing</h2>
        <p className="text-center mb-8">Choose the plan that works best for you.</p>
        
        <div className="border flex flex-col justify-center md:flex-row gap-4">
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
