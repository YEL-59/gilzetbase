import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

import { DialogTitle } from "@/components/ui/dialog";
import LogoImg from "@/assets/Logo.png";

const LoginDialog = ({ switchToRegister, switchToForgot }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login successful");
  };

  return (
    <div className="rounded-lg lg:p-4 ">
      <img
        src={LogoImg}
        alt="Logo"
        className="mx-auto md:w-50 w-40 md:h-30 h-auto"
        width={200}
        height={120}
      />
      <DialogTitle className="lg:text-[40px] md:text-2xl text-lg font-bold text-center mb-6">
        Login
      </DialogTitle>

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

        {/* Password */}
        <div>
          <label className="block mb-4 md:text-xl font-medium md:font-semibold">
            Enter your password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-3 px-5 border rounded-lg text-lg"
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
              className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-between items-center gpa-8">
          {/* Remember me checkbox */}
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded"
              {...register("rememberMe")}
            />
            <span className="ml-2 md:text-lg cursor-pointer">Remember me</span>
          </label>

          {/* Forgot password link */}
          <button
            onClick={switchToForgot}
            className="ml-4 md:text-lg text-black hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="bg-[#c89d3e] hover:bg-accent text-white hover:text-black md:px-6 px-4 md:py-2.5 py-2 rounded-lg font-medium flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-lg shadow-white/20 whitespace-nowrap w-full justify-center text-lg"
        >
          Login
        </button>
      </form>
      {/* Don't have an account? */}
      <div className="mt-4 text-center">
        <p className="text-lg">
          Don&apos;t have an account?{" "}
          <button
            onClick={switchToRegister}
            className="text-black hover:underline cursor-pointer active:scale-95 transition-transform"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginDialog;
