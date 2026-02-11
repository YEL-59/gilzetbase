import React, { useState } from "react";
import { Check, Star, Building2, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useGetPricingPlans } from "../hooks/pricingPlan.hook";

const PricingCard = ({
  title,
  price,
  description,
  features,
  icon: Icon,
  isPopular,
  isYearly,
}) => (
  <div
    className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-500 ${
      isPopular
        ? "border-[#D4AF37] shadow-xl scale-105 z-10 bg-white"
        : "border-gray-100 bg-white"
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
        Most Popular
      </div>
    )}

    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
        isPopular
          ? "bg-[#D4AF37]/10 text-[#D4AF37]"
          : "bg-blue-50 text-blue-500"
      }`}
    >
      <Icon size={24} />
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-6 leading-relaxed min-h-[40px]">
      {description}
    </p>

    <div className="flex items-baseline mb-8">
      <span className="text-4xl font-bold text-gray-900 transition-all duration-300">
        ${isYearly ? price * 10 : price}
      </span>
      <span className="text-gray-400 text-sm ml-2">
        {isYearly ? "/year" : "/month"}
      </span>
    </div>

    <div className="flex-grow">
      <p className="text-sm font-semibold text-gray-900 mb-4">
        Everything included:
      </p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`mt-0.5 rounded-full p-0.5 ${
                isPopular ? "text-[#D4AF37]" : "text-blue-500"
              }`}
            >
              <Check size={14} strokeWidth={3} />
            </div>
            <span className="text-sm text-gray-600 leading-tight">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <Button
      className={`w-full mt-10 py-6 rounded-xl font-bold transition-all ${
        isPopular
          ? "bg-[#D4AF37] hover:bg-[#B8962E] text-white shadow-lg shadow-[#D4AF37]/20"
          : "bg-gray-50 hover:bg-gray-100 text-gray-600"
      }`}
    >
      Get Started
    </Button>
  </div>
);

const BusinessSubscriptions = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { data: pricingPlans = [], isLoading } = useGetPricingPlans();

  // Map API data to component format with icons
  const getIconForPlan = (index) => {
    const icons = [Building2, Star, Crown];
    return icons[index] || Building2;
  };

  const plans = pricingPlans.map((plan, idx) => ({
    title: plan.name || "Plan",
    icon: getIconForPlan(idx),
    price: parseFloat(plan.price) || 0,
    description: plan.description || "",
    features: plan.features || [],
    isPopular: plan.is_recommended || false,
    offerDescription: plan.offer_description || "",
    billingInterval: plan.billing_interval || "month",
  }));

  if (isLoading) {
    return (
      <section className="w-full min-h-screen bg-white py-24 px-6 flex flex-col items-center justify-center">
        <p className="text-gray-500">Loading pricing plans...</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-white py-24 px-6 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-16">
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-1.5 rounded-full mb-6">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold uppercase tracking-widest">
            Business Subscriptions
          </span>
        </div>

        <p className="text-gray-500 text-base leading-relaxed mb-10">
          Lorem ipsum dolor sit amet consectetur. Ac morbi vestibulum et
          habitant a. Nibh enim aliquam facilisi amet arcu. Sollicitudin id id
          odio.
        </p>

        {/* Toggle with Labels */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setIsYearly(false)}
            className={`text-sm font-semibold transition-colors ${
              !isYearly ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Monthly
          </button>

          <div className="relative flex items-center">
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-[#D4AF37] data-[state=unchecked]:bg-gray-200"
            />
            {/* Visual indicator for discount */}
            {isYearly && (
              <span className="absolute -right-32 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                SAVE 2 MONTHS!
              </span>
            )}
          </div>

          <button
            onClick={() => setIsYearly(true)}
            className={`text-sm font-semibold transition-colors ${
              isYearly ? "text-gray-900" : "text-gray-400"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} isYearly={isYearly} />
        ))}
      </div>
    </section>
  );
};

export default BusinessSubscriptions;
