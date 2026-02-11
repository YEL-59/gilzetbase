import React, { useState } from 'react';
import {
    User,
    Mail,
    Globe,
    CreditCard,
    Shield,
    Save,
    Bell,
    Lock
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function AffiliateSettings() {
    const handleSave = () => toast.success("Settings updated successfully!");
    const [notifications, setNotifications] = useState([true, true, false]);

    const toggleNotification = (index) => {
        const newNotifs = [...notifications];
        newNotifs[index] = !newNotifs[index];
        setNotifications(newNotifs);
        toast.success(`Preference ${newNotifs[index] ? 'enabled' : 'disabled'}`);
    };

    return (
        <div className="max-w-4xl space-y-6 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Settings & Preferences</h1>
                <p className="text-gray-500 text-sm">Manage your profile, payout methods, and account security.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                {/* 👤 Identity Section */}
                <section className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <User className="text-[#d4af37]" size={20} />
                        <h2 className="text-lg font-bold text-gray-900">Profile Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                            <input
                                type="text"
                                defaultValue="John Doe"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                            <input
                                type="email"
                                defaultValue="john@example.com"
                                disabled
                                className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-400 text-sm cursor-not-allowed"
                            />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase">Website / Social Media</label>
                            <div className="relative">
                                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    defaultValue="https://instagram.com/johndoe_photo"
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-[#d4af37] focus:border-[#d4af37] outline-none text-sm transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 💳 Financial Section */}
                <section className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <CreditCard className="text-[#d4af37]" size={20} />
                        <h2 className="text-lg font-bold text-gray-900">Payout Configuration</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "paypal", title: "PayPal", desc: "john@example.com", active: true },
                            { id: "wire", title: "Bank Transfer", desc: "Swift / IBAN Required", active: false }
                        ].map((method) => (
                            <div
                                key={method.id}
                                className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${method.active ? 'border-[#d4af37] bg-[#d4af37]/5' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-gray-900">{method.title}</span>
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method.active ? 'border-[#d4af37] bg-[#d4af37]' : 'border-gray-300'}`}>
                                        {method.active && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500">{method.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 🔒 Security & Notifications */}
                <section className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <Shield className="text-[#d4af37]" size={20} />
                        <h2 className="text-lg font-bold text-gray-900">Notifications & Security</h2>
                    </div>

                    <div className="space-y-3">
                        {[
                            { label: "Email notifications on new referrals", icon: Bell },
                            { label: "Monthly performance reports", icon: Globe },
                            { label: "Two-factor authentication for payouts", icon: Lock }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-all">
                                <div className="flex items-center gap-3">
                                    <item.icon size={18} className="text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                </div>
                                <button
                                    onClick={() => toggleNotification(i)}
                                    className={`w-10 h-5 rounded-full relative transition-colors ${notifications[i] ? 'bg-[#d4af37]' : 'bg-gray-300'}`}
                                >
                                    <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${notifications[i] ? 'translate-x-5' : ''}`}></div>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 💾 Actions */}
                <div className="p-6 md:p-8 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 max-w-sm text-center md:text-left leading-relaxed">
                        Setting changes take effect immediately across all tracking engines.
                    </p>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg font-bold text-sm hover:bg-black transition-all shadow-sm"
                    >
                        <Save size={18} />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

