import React, { useState } from 'react';
import {
    Copy,
    Check,
    Download,
    Instagram,
    Share2,
    Layout,
    Globe
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function AffiliatePromotions() {
    const [copied, setCopied] = useState(false);
    const affiliateLink = "https://ava.art/ref/johndoe77";

    const handleCopyScript = (imgUrl) => {
        const script = `<a href="${affiliateLink}" target="_blank" rel="noopener noreferrer">\n  <img src="${imgUrl}" alt="Promotional Banner" style="width:100%; max-width:100%; border-radius: 8px;" />\n</a>`;
        navigator.clipboard.writeText(script);
        toast.success("Ready-to-use script copied!");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(affiliateLink);
        setCopied(true);
        toast.success("Referral link copied!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = (url, filename) => {
        toast.loading("Preparing download...", { duration: 1000 });
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const blobUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = filename || 'marketing-asset.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                toast.success("Download started!");
            })
            .catch(() => toast.error("Download failed. Please try again."));
    };

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Marketing Kit</h1>
                <p className="text-gray-500 text-sm">Download assets or copy pre-configured scripts for your website.</p>
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
                    Share this unique link to track your referrals. Any user who registers via this link within 30 days will be attributed to your account.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-sm text-gray-700 flex items-center overflow-hidden">
                        <span className="truncate">{affiliateLink}</span>
                    </div>
                    <button
                        onClick={handleCopy}
                        className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2
                            ${copied ? 'bg-green-600 text-white' : 'bg-[#d4af37] text-black hover:bg-[#bfa030]'}`}
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'Copied' : 'Copy Link'}
                    </button>
                </div>
            </div>

            {/* 🖼 Banner Ads */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <Layout className="text-[#d4af37]" size={20} />
                    <h3 className="text-lg font-bold text-gray-900">Promotional Banners</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "Standard Leaderboard", size: "728 x 90", type: "Web Header", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" },
                        { title: "Medium Rectangle", size: "300 x 250", type: "Sidebar Ad", img: "https://images.unsplash.com/photo-1492691523567-6170c8175363?q=80&w=2070&auto=format&fit=crop" }
                    ].map((banner, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col">
                            <div className="aspect-video relative bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img src={banner.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                                <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                                    {banner.size}
                                </div>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">{banner.title}</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">{banner.type}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDownload(banner.img, `banner-${i}.jpg`)}
                                        className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-[#d4af37] hover:text-black transition-all"
                                        title="Download Image"
                                    >
                                        <Download size={18} />
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleCopyScript(banner.img)}
                                    className="w-full mt-auto py-2.5 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2"
                                >
                                    <Copy size={14} />
                                    <span>Copy Embed Script</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 📱 Social Media */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <Instagram className="text-[#d4af37]" size={20} />
                    <h3 className="text-lg font-bold text-gray-900">Social Media Assets</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1516035069341-349198672877?q=80&w=1964&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop"
                    ].map((url, i) => (
                        <div key={i} className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
                            <img src={url} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 p-4 text-center">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleDownload(url, `social-${i}.jpg`)}
                                        className="p-3 bg-white rounded-full text-black hover:bg-[#d4af37] transition-all transform hover:scale-110"
                                        title="Download"
                                    >
                                        <Download size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleCopyScript(url)}
                                        className="p-3 bg-white rounded-full text-black hover:bg-[#d4af37] transition-all transform hover:scale-110"
                                        title="Copy Link"
                                    >
                                        <Share2 size={20} />
                                    </button>
                                </div>
                                <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Story / Post Size</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

