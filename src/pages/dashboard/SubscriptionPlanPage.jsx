import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SubscriptionPlanPage = () => {
  const planFeatures = [
    {
      title: "Profile Visibility",
      description: "Get discovered by potential customers",
    },
    {
      title: "Secure Dashboard",
      description: "Manage your business profile safely",
    },
    {
      title: "Mobile Optimized",
      description: "Perfect experience on all devices",
    },
    {
      title: "Regular Updates",
      description: "New features added monthly",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F8F9FD] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title - Serif Hook */}
        <h1 className="text-3xl font-serif text-gray-900 mb-10">
          Your Subscription Plan
        </h1>

        {/* Subscription Details Card */}
        <Card className="bg-white rounded-[20px] border-none shadow-[0_2px_15px_rgba(0,0,0,0.05)] p-8 mb-10">
          <div className="space-y-4">
            {/* Subscription */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border border-gray-200 rounded-[12px]">
              <span className="text-[15px] font-medium text-gray-700">
                Subscription
              </span>
              <span className="text-[15px] text-gray-500">1-month plan</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border border-gray-200 rounded-[12px]">
              <span className="text-[15px] font-medium text-gray-700">Price</span>
              <span className="text-[15px] text-gray-900 font-semibold">$79</span>
            </div>

            {/* Next Billing Date */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border border-gray-200 rounded-[12px]">
              <span className="text-[15px] font-medium text-gray-700">
                Next billing date
              </span>
              <span className="text-[15px] text-gray-500">January 20, 2026</span>
            </div>

            {/* Cancel Button - Right Aligned */}
            <div className="flex justify-end pt-4">
              <Button className="bg-[#D4A017] hover:bg-[#B8860B] text-white px-10 py-6 rounded-[12px] text-sm font-semibold transition-all">
                Cancel subscription
              </Button>
            </div>
          </div>
        </Card>

        {/* All Plans Include Section */}
        <div className="bg-white rounded-[20px] border-none shadow-[0_2px_15px_rgba(0,0,0,0.05)] p-12">
          <h2 className="text-[22px] font-bold text-gray-900 text-center mb-12">
            All Plans Include
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {planFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container with Gold Styling */}
                <div className="w-10 h-10 bg-[#FFF9E6] rounded-full flex items-center justify-center mb-5 border border-amber-100">
                  <Check className="w-5 h-5 text-[#C4A24C]" />
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-[180px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanPage;
