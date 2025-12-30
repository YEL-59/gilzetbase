import { useForm } from "react-hook-form";

import LogoImg from "@/assets/Logo.png";
import { DialogTitle } from "@/components/ui/dialog";

const ForgotPasswordDialog = ({ switchToLogin, switchOTPVerification }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Forgot Password Data:", data);
    switchOTPVerification();
  };

  return (
    <div className="rounded-lg lg:p-4">
      <img
        src={LogoImg}
        alt="Logo"
        className="mx-auto md:w-50 w-40 md:h-30 h-auto"
        width={200}
        height={120}
      />
      <DialogTitle className="lg:text-[40px] md:text-2xl text-lg font-bold text-center mb-3">
        Forgot Password
      </DialogTitle>
      <p className="text-center mb-6 md:text-lg font-medium">
        No worries, we will send you reset instructions
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block mb-4 md:text-xl font-medium md:font-semibold">
            Email address
          </label>
          <input
            type="email"
            className="w-full py-3 px-5 border rounded-lg text-lg"
            placeholder="Enter your email address"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#c89d3e] hover:bg-accent text-white hover:text-black md:px-6 px-4 md:py-2.5 py-2 rounded-lg font-medium flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-lg shadow-white/20 whitespace-nowrap w-full justify-center text-lg"
        >
          Continue
        </button>
      </form>
      {/* Don't have an account? */}
      <div className="mt-4 text-center">
        <p className="text-lg">
          Back Now?{" "}
          <button
            onClick={switchToLogin}
            className="text-primary hover:underline cursor-pointer active:scale-95 transition-transform"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordDialog;
