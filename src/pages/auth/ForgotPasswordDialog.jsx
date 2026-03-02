import { useForm } from "react-hook-form";
import LogoImg from "@/assets/Logo.png";
import { DialogTitle } from "@/components/ui/dialog";

import { useForgotPassword } from "@/hooks/auth.hook";
import toast from "react-hot-toast";

const ForgotPasswordDialog = ({ switchToLogin, switchOTPVerification }) => {
  const { mutate: forgotPassword, isPending } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    forgotPassword(data, {
      onSuccess: (res) => {
        if (res.status) {
          toast.success(res.message || "OTP sent successfully!");
          if (switchOTPVerification) switchOTPVerification(data.email);
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
          Forgot Password
        </DialogTitle>
      </div>

      <p className="text-center mb-8 text-[#A0A0A0] text-sm md:text-base">
        No worries, we will send you reset instructions.
      </p>

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

        <button
          type="submit"
          disabled={isPending}
          className="w-full h-14 bg-[#c89d3e] hover:bg-[#b08b36] text-white font-bold text-lg rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-[#c89d3e]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            "Continue"
          )}
        </button>
      </form>
      
      {/* Back to Login */}
      <div className="mt-8 text-center pb-2">
        <p className="text-[#2D2D2D] text-sm md:text-base">
          Remember your password?{" "}
          <button
            onClick={switchToLogin}
            className="text-[#c89d3e] font-bold hover:underline cursor-pointer active:scale-95 transition-transform"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordDialog;
