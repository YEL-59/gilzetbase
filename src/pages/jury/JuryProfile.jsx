import React, { useEffect, useState } from "react";
import { useGetUserInfo, useUpdateProfile, useUpdatePassword } from "@/hooks/auth.hook";
import { useForm } from "react-hook-form";
import {
    Loader2,
    Camera,
    Mail,
    Phone,
    User as UserIcon,
    MapPin,
    Link as LinkIcon,
    Lock,
    Globe,
    Languages,
    KeyRound,
    Eye,
    EyeOff,
    ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import toast from "react-hot-toast";

export default function JuryProfile() {
    const [activeTab, setActiveTab] = useState("profile"); // 'profile' or 'security'
    const { data: response, isLoading } = useGetUserInfo();
    const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
    const { mutate: updatePassword, isPending: isPasswordUpdating } = useUpdatePassword();
    const user = response?.data;

    const [avatarPreview, setAvatarPreview] = useState(null);
    const [coverPreview, setCoverPreview] = useState(null);
    const [avatarFile, setAvatarFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);

    // Security tab state
    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const {
        register: registerProfile,
        handleSubmit: handleSubmitProfile,
        reset: resetProfile,
        formState: { errors: profileErrors },
    } = useForm();

    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
        reset: resetPassword,
        watch: watchPassword,
        formState: { errors: passwordErrors },
    } = useForm();

    const newPassword = watchPassword("password");

    useEffect(() => {
        if (user) {
            resetProfile({
                first_name: user.first_name || "",
                last_name: user.last_name || "",
                phone: user.phone || "",
                address: user.address || "",
                country: user.country || "",
                language: user.language || "",
                website: user.website || "",
                about: user.about || "",
            });
            if (user.avatar) setAvatarPreview(user.avatar);
            if (user.cover_photo) setCoverPreview(user.cover_photo);
        }
    }, [user, resetProfile]);

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/svg+xml"];
            if (!validTypes.includes(file.type)) {
                toast.error("Invalid file type. Please upload an image.");
                return;
            }

            const maxSize = 2 * 1024 * 1024; // 2MB
            if (file.size > maxSize) {
                toast.error("File is too large. Maximum size allowed is 2MB.");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === "avatar") {
                    setAvatarPreview(reader.result);
                    setAvatarFile(file);
                } else {
                    setCoverPreview(reader.result);
                    setCoverFile(file);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const onProfileSubmit = (data) => {
        const formData = new FormData();
        formData.append("first_name", data.first_name || "");
        formData.append("last_name", data.last_name || "");
        formData.append("phone", data.phone || "");
        formData.append("address", data.address || "");
        formData.append("country", data.country || "");
        formData.append("language", data.language || "");
        formData.append("website", data.website || "");
        formData.append("about", data.about || "");

        if (avatarFile) {
            formData.append("avatar", avatarFile);
        }
        if (coverFile) {
            formData.append("cover_photo", coverFile);
        }

        updateProfile(formData);
    };

    const onPasswordSubmit = (data) => {
        updatePassword(data, {
            onSuccess: (res) => {
                if (res.status) {
                    resetPassword();
                }
            },
        });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8F9FD]">
                <Loader2 className="w-8 h-8 animate-spin text-[#d4af37]" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F9FD] pb-12">
            {/* Cover Photo Section */}
            <div className="relative h-48 md:h-64 bg-gray-200 overflow-hidden group">
                <img
                    src={coverPreview || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1500"}
                    alt="Cover"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <label className="cursor-pointer bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg transition-all">
                        <Camera size={18} />
                        Change Cover Photo
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "cover")}
                        />
                    </label>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-24 relative z-10">
                {/* Profile Header Card */}
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-end gap-8 mb-8">
                    <div className="relative group">
                        <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                            <img
                                src={avatarPreview || `https://ui-avatars.com/api/?name=${user?.first_name}+${user?.last_name}&background=d4af37&color=fff&size=200`}
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <label className="absolute bottom-2 right-2 p-2 bg-[#d4af37] text-white rounded-full cursor-pointer shadow-lg hover:bg-black transition-colors">
                            <Camera size={20} />
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, "avatar")}
                            />
                        </label>
                    </div>

                    <div className="flex-1 text-center md:text-left mb-4">
                        <h1 className="text-3xl font-bold text-gray-900 mb-1">
                            {user?.first_name} {user?.last_name}
                        </h1>
                        <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
                            <Mail size={14} className="text-[#d4af37]" />
                            {user?.email}
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                            <button
                                onClick={() => setActiveTab("profile")}
                                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${activeTab === "profile"
                                    ? "bg-[#d4af37] text-white shadow-lg"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                            >
                                Profile Info
                            </button>
                            <button
                                onClick={() => setActiveTab("security")}
                                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${activeTab === "security"
                                    ? "bg-[#d4af37] text-white shadow-lg"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                            >
                                Security Settings
                            </button>
                        </div>
                    </div>

                    {activeTab === "profile" && (
                        <div className="pb-4">
                            <Button
                                onClick={handleSubmitProfile(onProfileSubmit)}
                                disabled={isUpdating}
                                className="bg-black hover:bg-[#d4af37] text-white px-8 py-6 rounded-xl font-bold transition-all shadow-md active:scale-95 disabled:opacity-70"
                            >
                                {isUpdating ? <Loader2 size={18} className="animate-spin mr-2" /> : null}
                                Save Profile
                            </Button>
                        </div>
                    )}
                </div>

                {activeTab === "profile" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="p-8 rounded-[24px] border-none shadow-sm bg-white">
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                                    <UserIcon className="text-[#d4af37]" size={20} />
                                    <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[13px] font-bold text-gray-700">First Name</Label>
                                        <Input
                                            {...registerProfile("first_name", { required: "First name is required" })}
                                            className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all shadow-none"
                                        />
                                        {profileErrors.first_name && (
                                            <p className="text-red-500 text-xs mt-1">{profileErrors.first_name.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[13px] font-bold text-gray-700">Last Name</Label>
                                        <Input
                                            {...registerProfile("last_name", { required: "Last name is required" })}
                                            className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all shadow-none"
                                        />
                                        {profileErrors.last_name && (
                                            <p className="text-red-500 text-xs mt-1">{profileErrors.last_name.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[13px] font-bold text-gray-700">Phone Number</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-3 text-gray-400" size={16} />
                                            <Input
                                                {...registerProfile("phone")}
                                                className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11 shadow-none"
                                                placeholder="+1 234 567 890"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[13px] font-bold text-gray-700">Website</Label>
                                        <div className="relative">
                                            <LinkIcon className="absolute left-4 top-3 text-gray-400" size={16} />
                                            <Input
                                                {...registerProfile("website")}
                                                className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11 shadow-none"
                                                placeholder="https://example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <Label className="text-[13px] font-bold text-gray-700">Address</Label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-3 text-gray-400" size={16} />
                                            <Input
                                                {...registerProfile("address")}
                                                className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11 shadow-none"
                                                placeholder="123 Street, City, Country"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-8 rounded-[24px] border-none shadow-sm bg-white">
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                                    <UserIcon className="text-[#d4af37]" size={20} />
                                    <h2 className="text-xl font-bold text-gray-900">Expertise & Bio</h2>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-[13px] font-bold text-gray-700">About Me / Qualifications</Label>
                                    </div>
                                    <Textarea
                                        {...registerProfile("about")}
                                        className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white min-h-[150px] shadow-none"
                                        placeholder="Describe your artistic background or jury experience..."
                                    />
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <Card className="p-8 rounded-[24px] border-none shadow-sm bg-white">
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                                    <Globe className="text-[#d4af37]" size={20} />
                                    <h2 className="text-xl font-bold text-gray-900">Localization</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-[13px] font-bold text-gray-700">Country</Label>
                                        <Input
                                            {...registerProfile("country")}
                                            className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white shadow-none"
                                            placeholder="e.g. Canada"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[13px] font-bold text-gray-700">Interface Language</Label>
                                        <div className="relative">
                                            <Languages className="absolute left-4 top-3 text-gray-400" size={16} />
                                            <Input
                                                {...registerProfile("language")}
                                                className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11 shadow-none"
                                                placeholder="e.g. English"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* <div className="bg-gradient-to-br from-[#1a1c2c] to-[#4a192c] rounded-[24px] p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                        <ShieldCheck className="text-[#d4af37]" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Verification Badge</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                                        You are a recognized Jury Member. Your identity is verified for professional evaluation.
                                    </p>
                                    <div className="inline-block px-4 py-2 bg-[#d4af37] text-white text-xs font-bold rounded-full shadow-lg">
                                        VERIFIED EXPERT
                                    </div>
                                </div>
                               
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl group-hover:bg-[#d4af37]/40 transition-all"></div>
                            </div> */}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto">
                        <Card className="bg-white rounded-[24px] border-none shadow-sm p-8">
                            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                                <Lock className="text-[#d4af37]" size={20} />
                                <h2 className="text-xl font-bold text-gray-900">Change Password</h2>
                            </div>

                            <form onSubmit={handleSubmitPassword(onPasswordSubmit)} className="space-y-6">
                                <div className="space-y-2">
                                    <Label className="text-[13px] font-bold text-gray-700">Current Password</Label>
                                    <div className="relative">
                                        <KeyRound className="absolute left-4 top-3 text-gray-400" size={16} />
                                        <Input
                                            type={showOld ? "text" : "password"}
                                            {...registerPassword("old_password", { required: "Current password is required" })}
                                            className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11 pr-11 shadow-none transition-all"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowOld(!showOld)}
                                            className="absolute right-4 top-3 text-gray-400 hover:text-gray-600"
                                        >
                                            {showOld ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                    {passwordErrors.old_password && (
                                        <p className="text-red-500 text-xs mt-1">{passwordErrors.old_password.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[13px] font-bold text-gray-700">New Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-3 text-gray-400" size={16} />
                                        <Input
                                            type={showNew ? "text" : "password"}
                                            {...registerPassword("password", {
                                                required: "New password is required",
                                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                                            })}
                                            className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11 pr-11 shadow-none transition-all"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNew(!showNew)}
                                            className="absolute right-4 top-3 text-gray-400 hover:text-gray-600"
                                        >
                                            {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                    {passwordErrors.password && (
                                        <p className="text-red-500 text-xs mt-1">{passwordErrors.password.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[13px] font-bold text-gray-700">Confirm New Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-3 text-gray-400" size={16} />
                                        <Input
                                            type={showConfirm ? "text" : "password"}
                                            {...registerPassword("password_confirmation", {
                                                required: "Please confirm your new password",
                                                validate: (value) => value === newPassword || "Passwords do not match",
                                            })}
                                            className="rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11 pr-11 shadow-none transition-all"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirm(!showConfirm)}
                                            className="absolute right-4 top-3 text-gray-400 hover:text-gray-600"
                                        >
                                            {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                    {passwordErrors.password_confirmation && (
                                        <p className="text-red-500 text-xs mt-1">{passwordErrors.password_confirmation.message}</p>
                                    )}
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isPasswordUpdating}
                                        className="bg-[#d4af37] hover:bg-black text-white px-8 py-6 rounded-xl font-bold transition-all shadow-md"
                                    >
                                        {isPasswordUpdating ? (
                                            <Loader2 size={18} className="animate-spin mr-2" />
                                        ) : (
                                            <KeyRound size={18} className="mr-2" />
                                        )}
                                        Update Security Key
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                )}
            </div>

            <footer className="mt-16 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                    Gilzet Base Evaluation Portal &copy; 2026. SECURE JURY ACCESS ONLY.
                </p>
            </footer>
        </div>
    );
}
