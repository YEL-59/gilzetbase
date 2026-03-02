import React, { useState } from "react";
import {
  Copy,
  Check,
  Download,
  Instagram,
  Share2,
  Layout,
  Globe,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  useGetPromotionalBanners,
  useGetReferralLink,
  useGetSocialAssets,
} from "@/hooks/affiliate.hook";

export default function AffiliatePromotions() {
  const [copied, setCopied] = useState(false);

  const {
    data: referralData,
    isLoading: isReferralLoading,
    isError: isReferralError,
  } = useGetReferralLink();
  const {
    data: bannersData,
    isLoading: isBannersLoading,
    isError: isBannersError,
  } = useGetPromotionalBanners();
  const {
    data: socialAssetsData,
    isLoading: isSocialLoading,
    isError: isSocialError,
  } = useGetSocialAssets();

  const affiliateLink = referralData?.data?.referral_link || "";

  const handleCopyScript = (imgUrl) => {
    const script = `<a href="${affiliateLink}" target="_blank" rel="noopener noreferrer">\n  <img src="${imgUrl}" alt="Promotional Banner" style="width:100%; max-width:100%; border-radius: 8px;" />\n</a>`;
    navigator.clipboard.writeText(script);
    toast.success("Ready-to-use script copied!");
  };

  const handleCopy = () => {
    if (!affiliateLink) return;
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    toast.success("Referral link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async (url, filename) => {
    const toastId = toast.loading("Preparing download...");
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename || "marketing-asset.jpg";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      }, 100);

      toast.success("Download started!", { id: toastId });
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Direct download blocked by browser security. Opening in new tab...", {
        id: toastId,
        duration: 4000
      });
      // Fallback: Open in new tab so user can manually save
      window.open(url, "_blank");
    }
  };

  const banners = bannersData?.data?.data || [];
  const socialAssets = socialAssetsData?.data?.data || [];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Marketing Kit</h1>
        <p className="text-gray-500 text-sm">
          Download assets or copy pre-configured scripts for your website.
        </p>
      </div>

      {/* 🔗 Primary Link Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#d4af37]/10 rounded-lg text-[#d4af37]">
            <Globe size={20} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Your Referral URL</h2>
        </div>

        <p className="text-gray-500 text-sm mb-6 max-w-2xl">
          Share this unique link to track your referrals. Any user who registers
          via this link within 30 days will be attributed to your account.
        </p>

        {isReferralLoading ? (
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="animate-spin" size={18} />
            <span>Loading referral link...</span>
          </div>
        ) : isReferralError ? (
          <div className="text-red-500 text-sm">Failed to load referral link.</div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-sm text-gray-700 flex items-center overflow-hidden">
              <span className="truncate">{affiliateLink}</span>
            </div>
            <button
              onClick={handleCopy}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2
                                ${copied ? "bg-green-600 text-white" : "bg-[#d4af37] text-black hover:bg-[#bfa030]"}`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy Link"}
            </button>
          </div>
        )}
      </div>

      {/* 🖼 Banner Ads */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Layout className="text-[#d4af37]" size={20} />
          <h3 className="text-lg font-bold text-gray-900">
            Promotional Banners
          </h3>
        </div>

        {isBannersLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-[#d4af37]" size={40} />
          </div>
        ) : isBannersError ? (
          <div className="text-center py-12 text-red-500">
            Failed to load promotional banners.
          </div>
        ) : banners.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No banners available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col"
              >
                <div className="aspect-video relative bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={banner.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={banner.title}
                  />

                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        {banner.title}
                      </h4>

                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {banner.sub_title}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        handleDownload(banner.image, `banner-${banner.id}.jpg`)
                      }
                      className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-[#d4af37] hover:text-black transition-all"
                      title="Download Image"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                  {/* <button
                    onClick={() => handleCopyScript(banner.image)}
                    className="w-full mt-auto py-2.5 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2"
                  >
                    <Copy size={14} />
                    <span>Copy Embed Script</span>
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 📱 Social Media */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Instagram className="text-[#d4af37]" size={20} />
          <h3 className="text-lg font-bold text-gray-900">
            Social Media Assets
          </h3>
        </div>

        {isSocialLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-[#d4af37]" size={40} />
          </div>
        ) : isSocialError ? (
          <div className="text-center py-12 text-red-500">
            Failed to load social media assets.
          </div>
        ) : socialAssets.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No social assets available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialAssets.map((asset) => (
              <div
                key={asset.id}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center"
              >
                <img
                  src={asset.image}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={asset.title}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 p-4 text-center">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleDownload(asset.image, `social-${asset.id}.jpg`)
                      }
                      className="p-3 bg-white rounded-full text-black hover:bg-[#d4af37] transition-all transform hover:scale-110"
                      title="Download"
                    >
                      <Download size={20} />
                    </button>
                    <button
                      onClick={() => handleCopyScript(asset.image)}
                      className="p-3 bg-white rounded-full text-black hover:bg-[#d4af37] transition-all transform hover:scale-110"
                      title="Copy Link"
                    >
                      <Share2 size={20} />
                    </button>
                  </div>
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">
                    {asset.platform || "Social Asset"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
