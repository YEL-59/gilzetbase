import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SubscriptionPlanPage = () => {
  const planFeatures = [
    {
      icon: <Check className="w-5 h-5 text-[#C4A24C]" />,
      title: "Profile Visibility",
      description: "Get discovered by potential customers",
    },
    {
      icon: <Check className="w-5 h-5 text-[#C4A24C]" />,
      title: "Secure Dashboard",
      description: "Manage your business profile safely",
    },
    {
      icon: <Check className="w-5 h-5 text-[#C4A24C]" />,
      title: "Mobile Optimized",
      description: "Perfect experience on all devices",
    },
    {
      icon: <Check className="w-5 h-5 text-[#C4A24C]" />,
      title: "Regular Updates",
      description: "New features added monthly",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className=" mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-normal text-gray-900 mb-8">
          Your Subscription Plan
        </h1>

        {/* Subscription Details Card */}
        <Card className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
          <div className="space-y-6">
            {/* Subscription */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">
                Subscription
              </span>
              <span className="text-sm text-gray-600">1-month plan</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">Price</span>
              <span className="text-sm text-gray-900 font-semibold">$79</span>
            </div>

            {/* Next Billing Date */}
            <div className="flex items-center justify-between pb-6">
              <span className="text-sm font-medium text-gray-700">
                Next billing date
              </span>
              <span className="text-sm text-gray-600">January 20, 2026</span>
            </div>

            {/* Cancel Button */}
            <div className="pt-2">
              <Button className="w-full md:w-auto md:ml-auto md:flex bg-[#C4A24C] hover:bg-[#B39340] text-white px-8 py-3 rounded-lg">
                Cancel subscription
              </Button>
            </div>
          </div>
        </Card>

        {/* All Plans Include Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            All Plans Include
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {planFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#FFF9F0] rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
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
