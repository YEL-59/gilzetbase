import React from "react";
import { useForm } from "react-hook-form";
import { useUpdatePassword } from "@/hooks/auth.hook";
import { Loader2, Lock, ShieldAlert, KeyRound, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import toast from "react-hot-toast";

const PasswordSettings = () => {
  const { mutate: updatePassword, isPending } = useUpdatePassword();
  const [showOld, setShowOld] = React.useState(false);
  const [showNew, setShowNew] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onFormSubmit = (data) => {
    updatePassword(data, {
      onSuccess: (res) => {
        if (res.status) {
          reset();
        }
      },
    });
  };

  const handleDeleteAccount = () => {
    toast.error("Account deletion is currently unavailable.");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] py-12 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-serif text-gray-900 font-bold">
            Security Settings
          </h1>
          <p className="text-gray-500">
            Update your password and manage account security preferences.
          </p>
        </div>

        {/* Change Password Section */}
        <Card className="bg-white rounded-[24px] border-none shadow-sm p-8">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
            <Lock className="text-[#C4A24C]" size={20} />
            <h2 className="text-xl font-serif font-bold text-gray-900">
              Change Password
            </h2>
          </div>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
            {/* Current Password */}
            <div className="space-y-2">
              <Label className="text-[13px] font-bold text-gray-700">
                Current Password
              </Label>
              <div className="relative">
                <KeyRound className="absolute left-4 top-3 text-gray-400" size={16} />
                <Input
                  type={showOld ? "text" : "password"}
                  {...register("old_password", { required: "Current password is required" })}
                  className="rounded-xl border-gray-200 pl-11 pr-11 focus:ring-amber-100"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowOld(!showOld)}
                  className="absolute right-4 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showOld ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.old_password && (
                <p className="text-red-500 text-xs mt-1">{errors.old_password.message}</p>
              )}
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <Label className="text-[13px] font-bold text-gray-700">
                New Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-3 text-gray-400" size={16} />
                <Input
                  type={showNew ? "text" : "password"}
                  {...register("password", {
                    required: "New password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                  })}
                  className="rounded-xl border-gray-200 pl-11 pr-11 focus:ring-amber-100"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm New Password */}
            <div className="space-y-2">
              <Label className="text-[13px] font-bold text-gray-700">
                Confirm New Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-3 text-gray-400" size={16} />
                <Input
                  type={showConfirm ? "text" : "password"}
                  {...register("password_confirmation", {
                    required: "Please confirm your new password",
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                  className="rounded-xl border-gray-200 pl-11 pr-11 focus:ring-amber-100"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password_confirmation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>

            {/* Update Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isPending}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors duration-200"
              >
                {isPending ? <Loader2 size={18} className="animate-spin mr-2" /> : null}
                Update Password
              </Button>
            </div>
          </form>
        </Card>

        {/* Delete Account Section */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Delete your account
            </h2>
          <p className="text-sm text-gray-600 mb-5">
            By deleting your account, you'll no longer be able to access any of
            your designs or log in to memorii.
            </p>

          <button
              onClick={handleDeleteAccount}
            className="bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-2.5 rounded-lg border border-gray-300 transition-colors duration-200"
            >
              Delete account
            </button>
          </div> */}

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-sm text-gray-400">
            Copyright @ AVA 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordSettings;
