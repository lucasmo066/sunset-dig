import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import {Button} from "@/components/ui/button";

export interface PricingSectionProps {
    plan: string;
    period: string;
    
}

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
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Black background div */}
          <div className="bg-neutral-900 text-white p-6 rounded-lg flex-1 sm:flex-initial">
            <h3 className="text-3xl mb-4">Join <br /> Sunset Today</h3>
            <div className="mb-4 flex items-center">
              <div className="p-4 hover:bg-neutral-800">
                <h4 className="text-lg font-bold">Book a 15 min intro call</h4>
                <p>Learn more about how Sunset works and how it can help you.</p>
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <div className="p-4 hover:bg-neutral-800">
                <h4 className="text-lg font-bold">Need something bigger?</h4>
                <p>For enterprise teams, agencies, and more. Get in touch.</p>
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
  
          {/* White background div */}
          <div className="bg-white text-black p-6 rounded-lg flex-1 sm:flex-initial">
            <div className="border border-red-600">
              <h3 className="text-2xl mb-4">Membership</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
                <div className="border rounded-full bg-neutral-950 flex justify-between">
                  <button
                    className={`${
                      selectedPlan === "basic" ? "bg-white text-black" : "bg-neutral-950 text-white"
                    } px-4 py-2 rounded-full`}
                    onClick={() => handlePlanToggle("basic")}
                  >
                    Basic
                  </button>
                  <button
                    className={`${
                      selectedPlan === "growth" ? "bg-white text-black" : "bg-neutral-950 text-white"
                    } px-4 py-2 rounded-full`}
                    onClick={() => handlePlanToggle("growth")}
                  >
                    Growth
                  </button>
                </div>
                <div className="border rounded-full flex justify-between">
                  <button
                    className={`${
                      selectedPeriod === "monthly" ? "bg-blue-600 text-white" : "bg-white text-black"
                    } px-4 py-2 rounded-full`}
                    onClick={() => handlePeriodToggle("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`${
                      selectedPeriod === "yearly" ? "bg-blue-600 text-white" : "bg-white text-black"
                    } px-4 py-2 rounded-full`}
                    onClick={() => handlePeriodToggle("yearly")}
                  >
                    Yearly & Save
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-3xl">
                {selectedPeriod === "monthly"
                  ? `$${membershipPlans[selectedPlan].monthlyPrice}/mo`
                  : `$${membershipPlans[selectedPlan].yearlyPrice}/mo`}
              </p>
            </div>

            <div className="text-sm mb-4">
              <p>{membershipPlans[selectedPlan].description}</p>
            </div>
            <div className="border flex items-center justify-center gap-4">
            <Button className="bg-primary text-white px-4 py-2">Get Started</Button>
            <p className="">or book a call</p>
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
