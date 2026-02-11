import { useState } from "react";
import { toast } from "react-hot-toast";

export default function JuryProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "Jury Member",
        email: "jury@example.com",
        role: "Senior Judge",
        specialization: "Photography, Digital Art",
        bio: "Experienced art critic and photographer with over 10 years of experience in verifying digital art authenticity and composition.",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setIsEditing(false);
        toast.success("Profile updated successfully!");
        // Logic to update backend would go here
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Jury Profile Settings</h1>
                <p className="text-gray-500 text-sm">Manage your personal information and security settings.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column: Avatar & Basic Info */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden relative group">
                            <img
                                src="https://ui-avatars.com/api/?name=Jury+Member&background=0D8ABC&color=fff&size=128"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <span className="text-white text-xs">Change</span>
                            </div>
                        </div>
                        <h2 className="text-lg font-bold text-gray-900">{formData.name}</h2>
                        <p className="text-sm text-gray-500 mb-4">{formData.role}</p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-medium">
                            Verified Jury Member
                        </div>
                    </div>

                    {/* Security Box */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Security</h3>
                        <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors mb-2 group">
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded border border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>
                                <div className="text-left">
                                    <span className="block text-sm font-medium text-gray-700 group-hover:text-black">Password</span>
                                    <span className="block text-xs text-gray-500">Last changed 30 days ago</span>
                                </div>
                            </div>
                            <span>›</span>
                        </button>
                    </div>
                </div>

                {/* Right Column: Edit Details */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-800">Personal Details</h3>
                            <button
                                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isEditing
                                        ? 'bg-black text-white hover:bg-gray-800'
                                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {isEditing ? 'Save Changes' : 'Edit Profile'}
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-black focus:border-black disabled:text-gray-500 disabled:bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-black focus:border-black disabled:text-gray-500 disabled:bg-gray-100"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Specialization</label>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-black focus:border-black disabled:text-gray-500 disabled:bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1">Bio / Expertise</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    rows={4}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-black focus:border-black disabled:text-gray-500 disabled:bg-gray-100"
                                />
                            </div>
                        </div>

                        {/* Preferences Toggle (Visual only for now) */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-800 mb-4">Notification Preferences</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Email me when new contest starts</span>
                                    <div className="w-10 h-6 bg-[#d4af37] rounded-full flex items-center justify-end px-1 cursor-pointer"><div className="w-4 h-4 bg-white rounded-full"></div></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Email me daily voting reminders</span>
                                    <div className="w-10 h-6 bg-gray-200 rounded-full flex items-center px-1 cursor-pointer"><div className="w-4 h-4 bg-white rounded-full shadow"></div></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
