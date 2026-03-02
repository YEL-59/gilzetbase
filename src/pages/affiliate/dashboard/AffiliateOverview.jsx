import React from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ChevronRight,
  Copy,
  Clock,
  Gift,
  Info,
} from "lucide-react";
import toast from "react-hot-toast";

export default function AffiliateOverview() {
  const affiliateLink = "https://ava.art/ref/johndoe77";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    toast.success("Affiliate link copied to clipboard!");
  };

  const copyFullScript = () => {
    const script = `<a href="${affiliateLink}" target="_blank" rel="noopener noreferrer">Visit Taranga Market</a>`;
    navigator.clipboard.writeText(script);
    toast.success("Full HTML script copied!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Affiliate Dashboard
        </h1>
        <p className="text-gray-500 text-sm">
          Monitor your referrals, earnings, and tracking performance.
        </p>
      </div>

      {/* 🔗 Referral Link Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Active Partnership
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Your Referral Engine
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Earn 30% commission on every new member you bring to the platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="flex-1 bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg w-full">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block mb-1">
                Your Tracking URL
              </span>
              <span className="text-sm font-medium text-gray-700 truncate block">
                {affiliateLink}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="bg-[#d4af37] hover:bg-[#bfa030] text-black px-6 py-3 rounded-lg transition-colors flex items-center gap-2 font-medium w-full sm:w-auto justify-center"
            >
              <Copy size={18} />
              <span>Copy Link</span>
            </button>
            {/* <button
                            onClick={copyFullScript}
                            className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 font-medium w-full sm:w-auto justify-center whitespace-nowrap"
                        >
                            <TrendingUp size={18} />
                            <span>Copy Full Script</span>
                        </button> */}
          </div>
        </div>
      </div>

      {/* ℹ️ Payout Notice */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-4">
        <div className="bg-blue-500/10 p-2 rounded-lg mt-0.5">
          <Info size={18} className="text-blue-600" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-blue-900">
            Commission Payout Policy
          </h3>
          <p className="text-sm text-blue-700 mt-0.5">
            Please note that payments are processed only once a minimum
            threshold of <span className="font-bold">€100</span> in commissions
            is reached. Once reached, you can request a payout to your preferred
            payment method.
          </p>
        </div>
      </div>

      {/* 📊 Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Net Earnings",
            value: "€4,250.00",
            change: "+12.5%",
            icon: DollarSign,
            color: "text-green-600",
            bgColor: "bg-green-50",
          },
          {
            label: "Pending Payout",
            value: "€350.00",
            change: "In Review",
            icon: Clock,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
          },
          {
            label: "Direct Referrals",
            value: "128",
            change: "+5 today",
            icon: Users,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
          },
          {
            label: "Global ROI",
            value: "24.8%",
            change: "Optimized",
            icon: Activity,
            color: "text-[#d4af37]",
            bgColor: "bg-[#d4af37]/10",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
          >
            <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">
                {stat.label}
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div
                className={`text-xs mt-1 ${stat.change.includes("+") ? "text-green-600" : "text-gray-400"}`}
              >
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 📈 Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {/* Visual Data Representation */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Conversion History
              </h3>
              <p className="text-sm text-gray-500">
                Growth overview for the current period.
              </p>
            </div>
            <div className="flex gap-1 bg-gray-50 p-1 rounded-lg border border-gray-100">
              {["7D", "30D", "1Y"].map((t) => (
                <button
                  key={t}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all ${t === "30D" ? "bg-[#d4af37] text-white" : "text-gray-500 hover:bg-gray-100"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="h-64 bg-gray-50 rounded-lg flex items-end px-4 gap-2 relative overflow-hidden">
            {[40, 70, 45, 90, 65, 80, 55, 75, 60, 85, 40, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-[#d4af37] rounded-t opacity-40 hover:opacity-100 transition-opacity"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
            <span>Jan 01</span>
            <span>Jan 15</span>
            <span>Jan 30</span>
          </div>
        </div>

        {/* ⚡ Live Feed: Activity */}
      </div>
    </div>
  );
}

{
  /* Affiliate Overview
    
    
    
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Live Activity</h3>

                    <div className="space-y-6 flex-1 text-sm">
                        {[
                            { user: "Sarah M.", action: "Referral Awarded", time: "2h ago", icon: Gift, color: "text-green-600", bgColor: "bg-green-50" },
                            { user: "Payout", action: "Commission Approved", time: "1d ago", icon: DollarSign, color: "text-[#d4af37]", bgColor: "bg-[#d4af37]/10" },
                            { user: "Direct", action: "User Registration", time: "2d ago", icon: Users, color: "text-blue-600", bgColor: "bg-blue-50" },
                            { user: "System", action: "Milestone Reached", time: "3d ago", icon: TrendingUp, color: "text-purple-600", bgColor: "bg-purple-50" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-3 items-center">
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${item.bgColor} ${item.color}`}>
                                    <item.icon size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-gray-900">{item.action}</div>
                                    <div className="text-xs text-gray-500">{item.user} • {item.time}</div>
                                </div>
                              <ChevronRight className="text-gray-300" size={16} /> 
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => toast.info("Redirecting to activity log...")}
                        className="w-full mt-6 py-3 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        View All Activity
                    </button>
                </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    */
}
