import React, { useEffect, useState } from "react";
import { useGetUserInfo, useUpdateProfile } from "@/hooks/auth.hook";
import { useForm } from "react-hook-form";
import { Loader2, Camera, Upload, Trash2, Globe, Languages, Mail, Phone, User as UserIcon, MapPin, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ProfileSettingsPage = () => {
  const { data: response, isLoading } = useGetUserInfo();
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
  const user = response?.data;

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
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
  }, [user, reset]);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      // Client-side validation
      const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        toast.error("Invalid file type. Please upload an image (JPEG, PNG, JPG, GIF, SVG).");
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

  const onFormSubmit = (data) => {
    const formData = new FormData();

    // Explicitly append fields expected by server
    formData.append("first_name", data.first_name || "");
    formData.append("last_name", data.last_name || "");
    formData.append("phone", data.phone || "");
    formData.append("address", data.address || "");
    formData.append("country", data.country || "");
    formData.append("language", data.language || "");
    formData.append("website", data.website || "");
    formData.append("about", data.about || "");

    if (avatarFile) {
      formData.append("avatar", avatarFile, avatarFile.name);
    }
    if (coverFile) {
      formData.append("cover_photo", coverFile, coverFile.name);
    }

    updateProfile(formData);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FD]">
        <Loader2 className="w-8 h-8 animate-spin text-[#C4A24C]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FD] pb-12">
      {/* Cover Photo Section */}
      <div className="relative h-48 md:h-64 bg-gray-200 overflow-hidden group">
        <img
          src={coverPreview || "https://via.placeholder.com/1500x400?text=Cover+Photo"}
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

      <div className="max-w-5xl mx-auto px-6 -mt-24 relative z-10">
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
          {/* Profile Header Card */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-end gap-8">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                <img
                  src={avatarPreview || `https://ui-avatars.com/api/?name=${user?.first_name}+${user?.last_name}&background=C4A24C&color=fff&size=200`}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <label className="absolute bottom-2 right-2 p-2 bg-[#C4A24C] text-white rounded-full cursor-pointer shadow-lg hover:bg-[#B39340] transition-colors">
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
              <h1 className="text-3xl font-serif text-gray-900 font-bold mb-1">
                {user?.first_name} {user?.last_name}
              </h1>
              <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
                <Mail size={14} />
                {user?.email}
              </p>
            </div>

            <div className="pb-4">
              <Button
                type="submit"
                disabled={isUpdating}
                className="bg-[#C4A24C] hover:bg-[#B39340] text-white px-8 py-6 rounded-xl font-bold transition-all shadow-md active:scale-95 disabled:opacity-70"
              >
                {isUpdating ? <Loader2 size={18} className="animate-spin mr-2" /> : null}
                Save All Changes
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Personal Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                  <UserIcon className="text-[#C4A24C]" size={20} />
                  <h2 className="text-xl font-serif font-bold text-gray-900">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700">First Name</Label>
                    <Input
                      {...register("first_name", { required: "First name is required" })}
                      className="rounded-xl border-gray-200 focus:ring-amber-100"
                    />
                    {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700">Last Name</Label>
                    <Input
                      {...register("last_name", { required: "Last name is required" })}
                      className="rounded-xl border-gray-200 focus:ring-amber-100"
                    />
                    {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3 text-gray-400" size={16} />
                      <Input
                        {...register("phone", {
                          maxLength: { value: 15, message: "Phone number is too long" },
                          pattern: {
                            value: /^[0-9+\s]+$/,
                            message: "Invalid phone format",
                          },
                        })}
                        className="rounded-xl border-gray-200 pl-11 focus:ring-amber-100"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700">Website</Label>
                    <div className="relative">
                      <LinkIcon className="absolute left-4 top-3 text-gray-400" size={16} />
                      <Input
                        {...register("website")}
                        className="rounded-xl border-gray-200 pl-11 focus:ring-amber-100"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700">Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3 text-gray-400" size={16} />
                      <Input
                        {...register("address")}
                        className="rounded-xl border-gray-200 pl-11 focus:ring-amber-100"
                        placeholder="123 Street, City, Country"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                  <UserIcon className="text-[#C4A24C]" size={20} />
                  <h2 className="text-xl font-serif font-bold text-gray-900">About Me</h2>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-[13px] font-bold text-gray-700">Bio</Label>
                    <span className="text-[10px] text-amber-600 font-medium italic">* Mandatory if you win an award</span>
                  </div>
                  <Textarea
                    {...register("about")}
                    className="rounded-xl border-gray-200 min-h-[150px] focus:ring-amber-100"
                    placeholder="Tell us about yourself and your creative journey..."
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Preferences & Settings */}
            <div className="space-y-8">
              <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                  <Globe className="text-[#C4A24C]" size={20} />
                  <h2 className="text-xl font-serif font-bold text-gray-900">Localization</h2>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700">Country</Label>
                    <Input
                      {...register("country")}
                      className="rounded-xl border-gray-200 focus:ring-amber-100"
                      placeholder="e.g. United Kingdom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[13px] font-bold text-gray-700">Interface Language</Label>
                    <div className="relative">
                      <Languages className="absolute left-4 top-3 text-gray-400" size={16} />
                      <Input
                        {...register("language")}
                        className="rounded-xl border-gray-200 pl-11 focus:ring-amber-100"
                        placeholder="e.g. English"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Security (Quick Access) */}
              {/* <div className="bg-[#1a1a1a] rounded-[24px] p-8 text-white shadow-xl">
                <h3 className="text-lg font-serif font-bold mb-4">Account Referral</h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  Your unique referral code is ready. Share it with friends to earn exciting rewards!
                </p>
                <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between border border-white/10 uppercase tracking-widest font-mono text-[#C4A24C]">
                  {user?.referral_code || "N/A"}
                  <Button variant="ghost" size="sm" className="h-8 text-white hover:bg-white/10 p-2">
                    <LinkIcon size={14} />
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </form>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-sm text-gray-400">
          Copyright © AVA 2026. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ProfileSettingsPage;
