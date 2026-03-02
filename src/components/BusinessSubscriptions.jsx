import React, { useEffect, useRef } from "react";
import { Check, Star, Building2, Crown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetPricingPlans } from "../hooks/pricingPlan.hook";
import { useNavigate, useLocation } from "react-router";
import { useCheckout } from "@/hooks/payment.hook";
import { useAuth } from "@/hooks/AuthContext";
import toast from "react-hot-toast";

const PricingCard = ({
  id,
  title,
  price,
  description,
  features,
  icon: Icon,
  isPopular,
  isSelected,
  onSelect,
  cardRef,
  isPending,
}) => (
  <div
    ref={cardRef}
    className={`relative flex flex-col p-8 rounded-2xl border-2 transition-all duration-500 ${isSelected
      ? "border-[#D4AF37] shadow-2xl scale-105 z-10 bg-white ring-4 ring-[#D4AF37]/20"
      : isPopular
        ? "border-[#D4AF37] shadow-xl scale-105 z-10 bg-white"
        : "border-gray-100 bg-white"
      }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
        Most Popular
      </div>
    )}

    {isSelected && !isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
        Selected
      </div>
    )}

    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isPopular || isSelected
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
        ${price}
      </span>
      <span className="text-gray-400 text-sm ml-2">/month</span>
    </div>

    <div className="flex-grow">
      <p className="text-sm font-semibold text-gray-900 mb-4">
        Everything included:
      </p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`mt-0.5 rounded-full p-0.5 ${isPopular || isSelected
                ? "text-[#D4AF37]"
                : "text-blue-500"
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
      onClick={() => onSelect(id)}
      disabled={isPending}
      className={`w-full mt-10 py-6 rounded-xl font-bold transition-all ${isPopular || isSelected
        ? "bg-[#D4AF37] hover:bg-[#B8962E] text-white shadow-lg shadow-[#D4AF37]/20"
        : "bg-gray-50 hover:bg-gray-100 text-gray-600"
        }`}
    >
      {isPending && isSelected ? (
        <div className="flex items-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Processing...</span>
        </div>
      ) : isSelected ? (
        "Subscribe Now"
      ) : (
        "Plan Selected"
      )}
    </Button>
  </div>
);

const BusinessSubscriptions = ({ selectedPlanId = null }) => {
  const { data: pricingPlans = [], isLoading } = useGetPricingPlans();
  const { mutate: checkout, isPending } = useCheckout();
  const navigate = useNavigate();
  const location = useLocation();
  const cardRefs = useRef({});

  // Map API data to component format with icons
  const getIconForPlan = (index) => {
    const icons = [Building2, Star, Crown];
    return icons[index] || Building2;
  };

  const plans = pricingPlans.map((plan, idx) => ({
    id: plan.id,
    title: plan.name || "Plan",
    icon: getIconForPlan(idx),
    price: parseFloat(plan.price) || 0,
    description: plan.description || "",
    features: (plan.features || []).map((f) =>
      typeof f === "string" ? f : f.name
    ),
    isPopular: plan.is_recommended || false,
    billingInterval: plan.billing_interval || "month",
  }));

  // Scroll to selected plan on load
  useEffect(() => {
    if (selectedPlanId && cardRefs.current[selectedPlanId]) {
      setTimeout(() => {
        cardRefs.current[selectedPlanId]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    }
  }, [selectedPlanId, plans.length]);

  const { user, isAuthenticated } = useAuth();

  const handleSelectPlan = (planId) => {
    const isSubscriptionPage = location.pathname.includes("subscription");
    const isAlreadySelected = selectedPlanId === planId;

    if (isSubscriptionPage && isAlreadySelected) {
      if (!isAuthenticated) {
        toast.error("Please sign in to subscribe to a plan.");
        navigate("/sign-in");
        return;
      }

      // Trigger Checkout API only if the plan is already selected
      const successUrl = `${window.location.origin}/payment-success`;
      const cancelUrl = `${window.location.origin}/payment-cancel`;
      checkout({ planId, successUrl, cancelUrl });
    } else {
      // Otherwise, just select the plan (update the URL)
      let targetPath = location.pathname;

      if (!isSubscriptionPage) {
        targetPath = location.pathname.startsWith("/dashboard")
          ? "/dashboard/subscription"
          : "/subscription";
      }

      navigate(`${targetPath}?plan=${planId}`);
    }
  };

  if (isLoading) {
    return (
      <section className="w-full min-h-screen bg-white py-24 px-6 flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-[#D4AF37]" />
        <p className="text-gray-500 mt-4">Loading pricing plans...</p>
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
          Unlock your potential with our flexible pricing plans. Whether you are
          just starting out or a seasoned professional, we have a plan that fits
          your needs.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            {...plan}
            isSelected={selectedPlanId === plan.id}
            isPending={isPending}
            onSelect={handleSelectPlan}
            cardRef={(el) => (cardRefs.current[plan.id] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default BusinessSubscriptions;
