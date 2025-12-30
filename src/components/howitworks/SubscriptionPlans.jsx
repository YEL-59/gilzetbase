import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingCard = ({ plan }) => {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative flex flex-col p-8 rounded-xl border-2 transition-all duration-200 ${
        isPopular
          ? "border-[#C4A24C] bg-[#FFFBF0] shadow-lg"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#C4A24C] text-white text-xs font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3
        className={`text-2xl font-bold mb-6 text-center ${
          isPopular ? "text-[#C4A24C]" : "text-gray-900"
        }`}
      >
        {plan.name}
      </h3>

      {/* Features */}
      <div className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                isPopular ? "text-[#C4A24C]" : "text-gray-900"
              }`}
            />
            <span className="text-gray-700 text-sm leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          isPopular
            ? "bg-[#C4A24C] hover:bg-[#B39340] text-white"
            : "bg-white hover:bg-gray-50 text-[#C4A24C] border-2 border-[#C4A24C]"
        }`}
      >
        Get Started
      </Button>
    </div>
  );
};

const plans = [
  {
    id: 1,
    name: "Free Plan",
    popular: false,
    features: [
      "1 photo",
      "1 category",
      "Participation in the monthly contest.",
    ],
  },
  {
    id: 2,
    name: "Creator Plan",
    popular: true,
    features: [
      "6 photos per Month",
      "Up to 3 categories",
      "Participation in the monthly contest.",
    ],
  },
  {
    id: 3,
    name: "Premium Plan",
    popular: false,
    features: [
      "10 photos",
      "All categories",
      "Participation in the monthly contest.",
    ],
  },
];

const SubscriptionPlans = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-3">
            Choose your subscription
          </h2>
          <p className="text-gray-600 text-base">
            Select the plan that fits your creative workflow
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
