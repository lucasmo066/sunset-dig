import ToggleButton from "./ToggleButton";
import { Button } from "@/components/ui/button";
import WhatsIncluded from "./WhatsIncluded";

export interface PricingCardProps {
  selectedPlan: string;
  selectedPeriod: string;
  handlePlanToggle: (plan: string) => void;
  handlePeriodToggle: (period: string) => void;
  membershipPlans: {
    [key: string]: {
      name: string;
      description: string;
      monthlyPrice: number;
      yearlyPrice: number;
    };
  };
}

const PricingCard: React.FC<PricingCardProps> = ({
  selectedPlan,
  selectedPeriod,
  handlePlanToggle,
  handlePeriodToggle,
  membershipPlans,
}) => {
  return (
    <div className="bg-zinc-100 text-black px-6 py-10 rounded-lg">
      <div>
        <div className="flex justify-between items-start">
            <h3 className="text-3xl font-normal mb-4">
                Membership
            </h3>
            <div className="border border-gray-300 bg-white rounded-full flex justify-between">
                <ToggleButton
                active={selectedPlan === "basic"}
                onClick={() => handlePlanToggle("basic")}
                >
                    Basic
                </ToggleButton>
                <ToggleButton
                active={selectedPlan === "growth"}
                onClick={() => handlePlanToggle("growth")}
                >
                    Growth
                </ToggleButton>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start mt-2 mb-8">
          <div className="bg-white rounded-full flex justify-between">
            <ToggleButton
              active={selectedPeriod === "monthly"}
              onClick={() => handlePeriodToggle("monthly")}
            >
              Monthly
            </ToggleButton>
            <ToggleButton
              active={selectedPeriod === "yearly"}
              onClick={() => handlePeriodToggle("yearly")}
            >
              Yearly & Save
            </ToggleButton>
          </div>
        </div>
      </div>
        <div className="border-b">
            <p className="text-3xl">
            {selectedPeriod === "monthly"
                ? `$${membershipPlans[selectedPlan].monthlyPrice}/mo`
                : `$${membershipPlans[selectedPlan].yearlyPrice}/mo`}
            </p>
            <div className="text-left font-light mb-4">
                <p>{membershipPlans[selectedPlan].description}</p>
            </div>
      </div>
      <WhatsIncluded />

      
      <div className="flex items-center justify-center gap-4">
        <Button className="bg-primary text-white px-10 py-6">Get Started</Button>
        <p className="text-sm font-light">or <u>book a call</u></p>
      </div>
    </div>
  );
};

export default PricingCard;
