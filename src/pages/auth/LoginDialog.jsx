import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

import { DialogTitle } from "@/components/ui/dialog";
import LogoImg from "@/assets/Logo.png";

import { useLogin } from "@/hooks/auth.hook";

const LoginDialog = ({ switchToRegister, switchToForgot, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data, {
      onSuccess: (res) => {
        if (res.status) {
          if (onClose) onClose();
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
        <DialogTitle className="text-[#2D2D2D] font-bold text-3xl md:text-4xl tracking-tight">
          Login
        </DialogTitle>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#2D2D2D]">
            Email address
          </label>
          <input
            type="email"
            className="w-full h-12 px-5 bg-white border border-[#E5E5E5] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#c89d3e]/20 focus:border-[#c89d3e] transition-all"
            placeholder="Enter your email address"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-[#2D2D2D]">
            Enter your password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-12 px-5 bg-white border border-[#E5E5E5] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#c89d3e]/20 focus:border-[#c89d3e] transition-all"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
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
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-between items-center">
          {/* Remember me checkbox */}
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#E5E5E5] text-[#c89d3e] focus:ring-[#c89d3e] cursor-pointer"
              {...register("rememberMe")}
            />
            <span className="text-sm text-[#2D2D2D] font-medium group-hover:text-[#c89d3e] transition-colors">Remember me</span>
          </label>

          {/* Forgot password link */}
          <button
            type="button"
            onClick={switchToForgot}
            className="text-sm font-bold text-[#c89d3e] hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-[#E5E5E5] rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="text-sm font-medium text-[#2D2D2D]">Continue with google</span>
        </button>

        <div className="relative flex items-center justify-center py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E5E5]"></div>
          </div>
          <span className="relative bg-[#FFFCF7] px-4 text-xs font-medium text-[#A0A0A0] uppercase tracking-wider">
            or
          </span>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-14 bg-[#c89d3e] hover:bg-[#b08b36] text-white font-bold text-lg rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-[#c89d3e]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Logging in...</span>
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>

      {/* Don't have an account? */}
      <div className="mt-8 text-center pb-2">
        <p className="text-[#2D2D2D] text-sm md:text-base">
          Don&apos;t have an account?{" "}
          <button
            onClick={switchToRegister}
            className="text-[#c89d3e] font-bold hover:underline cursor-pointer active:scale-95 transition-transform"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginDialog;
