import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { DialogTitle } from "@/components/ui/dialog";
import LogoImg from "@/assets/Logo.png";

import { useResetPassword } from "@/hooks/auth.hook";
import toast from "react-hot-toast";

const SetNewPasswordDialog = ({ email, onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate: resetPassword, isPending } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const payload = {
      email,
      password: data.newPassword,
      password_confirmation: data.confirmPassword,
    };

    resetPassword(payload, {
      onSuccess: (res) => {
        if (res.status) {
          toast.success(res.message || "Password reset successfully!");
          if (onSuccess) onSuccess();
        }
      },
    });
  };
  return (
    <div className="bg-[#FFFCF7] rounded-[32px] p-6 md:p-10 shadow-xl border border-[#E5E5E5]/50 max-h-[90vh] overflow-y-auto custom-scroll">
      <div className="flex flex-col items-center mb-10">
        <img
          src={LogoImg}
          alt="AVA ART VISION AWARDS"
          className="h-24 w-auto mb-4 object-contain"
        />
        <DialogTitle className="text-[#2D2D2D] font-bold text-3xl md:text-4xl tracking-tight text-center">
          Set New Password
        </DialogTitle>
      </div>

      <p className="text-center mb-8 text-[#A0A0A0] text-sm md:text-base">
        Password must be at least 8 characters.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* New Password */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#2D2D2D]">
            New password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-12 px-5 bg-white border border-[#E5E5E5] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#c89d3e]/20 focus:border-[#c89d3e] transition-all"
              placeholder="Password"
              {...register("newPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A0A0] hover:text-[#2D2D2D] transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#2D2D2D]">
            Confirm password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full h-12 px-5 bg-white border border-[#E5E5E5] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#c89d3e]/20 focus:border-[#c89d3e] transition-all"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A0A0] hover:text-[#2D2D2D] transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-14 bg-[#c89d3e] hover:bg-[#b08b36] text-white font-bold text-lg rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-[#c89d3e]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Resetting...</span>
            </>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default SetNewPasswordDialog;
