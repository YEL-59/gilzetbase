import { Check, Loader2, ArrowRight, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetUserInfo } from "@/hooks/auth.hook";
import { useNavigate } from "react-router";

const SubscriptionPlanPage = () => {
    const { data: response, isLoading } = useGetUserInfo();
    const navigate = useNavigate();

    const user = response?.data;
    const subscription = user?.subscription;
    const plan = subscription?.plan;

    if (isLoading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center bg-[#F8F9FD]">
                <Loader2 className="w-8 h-8 animate-spin text-[#C4A24C]" />
            </div>
        );
    }

    // Fallback if no subscription exists
    if (!subscription) {
        return (
            <div className="w-full min-h-screen bg-[#F8F9FD] py-12">
                <div className="max-w-4xl mx-auto px-6 text-center pt-20">
                    <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-100">
                        <Wallet className="w-10 h-10 text-[#C4A24C]" />
                    </div>
                    <h1 className="text-3xl font-serif text-gray-900 mb-4">No Active Subscription</h1>
                    <p className="text-gray-500 mb-10 max-w-md mx-auto">
                        You don't have an active subscription plan. Choose a plan to unlock premium features and start participating in contests.
                    </p>
                    <Button
                        onClick={() => navigate("/subscription")} // Adjusted path as per need
                        className="bg-[#C4A24C] hover:bg-[#B39340] text-white px-8 py-6 rounded-xl font-bold flex items-center justify-center gap-2 mx-auto"
                    >
                        Browse Pricing Plans
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[#F8F9FD] py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Page Title */}
                <h1 className="text-3xl font-serif text-gray-900 mb-10">
                    Your Subscription Plan
                </h1>

                {/* Subscription Details Card */}
                <Card className="bg-white rounded-[20px] border-none shadow-[0_2px_15px_rgba(0,0,0,0.05)] p-8 mb-10">
                    <div className="space-y-4">
                        {/* Subscription Name */}
                        <div className="flex items-center justify-between px-6 py-4 bg-white border border-gray-100 rounded-[12px]">
                            <span className="text-[15px] font-medium text-gray-700">
                                Current Plan
                            </span>
                            <span className="text-[15px] text-gray-900 font-semibold">
                                {plan?.name || "Standard"}
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between px-6 py-4 bg-white border border-gray-100 rounded-[12px]">
                            <span className="text-[15px] font-medium text-gray-700">Price</span>
                            <span className="text-[15px] text-gray-900 font-semibold">
                                ${plan?.price || subscription?.amount_paid}{" "}
                                <span className="text-gray-400 font-normal">/{plan?.billing_interval || "month"}</span>
                            </span>
                        </div>

                        {/* Next Billing Date */}
                        <div className="flex items-center justify-between px-6 py-4 bg-white border border-gray-100 rounded-[12px]">
                            <span className="text-[15px] font-medium text-gray-700">
                                {subscription?.status === "active" ? "Expires on" : "Cancelled on"}
                            </span>
                            <span className="text-[15px] text-gray-500">
                                {subscription?.ends_at
                                    ? new Date(subscription.ends_at).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                    : "N/A"}
                            </span>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                            <Button
                                variant="outline"
                                onClick={() => navigate("/subscription")}
                                className="px-8 py-6 rounded-[12px] text-sm font-semibold border-gray-200"
                            >
                                Change Plan
                            </Button>
                            {/* <Button className="bg-[#D4A017] hover:bg-[#B8860B] text-white px-10 py-6 rounded-[12px] text-sm font-semibold transition-all shadow-md active:scale-95">
                                Cancel subscription
                            </Button> */}
                        </div>
                    </div>
                </Card>

                {/* Features for the active plan */}
                <div className="bg-white rounded-[20px] border-none shadow-[0_2px_15_rgba(0,0,0,0.05)] p-12">
                    <h2 className="text-[22px] font-bold text-gray-900 text-center mb-12">
                        Your Premium Benefits
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(plan?.features || []).map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 rounded-xl border border-gray-50 bg-gray-50/30 group hover:border-[#C4A24C]/20 transition-all"
                            >
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-amber-50">
                                    <Check className="w-5 h-5 text-[#C4A24C]" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-bold text-gray-900 mb-1">
                                        {feature.name}
                                    </h3>
                                    <p className="text-[13px] text-gray-500 leading-relaxed">
                                        Included in your {plan?.name} plan
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlanPage;
