import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { DialogTitle } from "@/components/ui/dialog";
import LogoImg from "@/assets/Logo.png";

const SetNewPasswordDialog = () => {
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
    <div className="rounded-lg lg:p-4">
      <img
        src={LogoImg}
        alt="Logo"
        className="mx-auto md:w-50 w-40 md:h-30 h-auto"
        width={200}
        height={120}
      />
      <DialogTitle className="lg:text-[40px] md:text-2xl text-lg font-bold text-center mb-3">
        Login
      </DialogTitle>
      <p className="text-lg text-background/60 mb-6">
        Password must be at least 8 character{" "}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Password */}
        <div>
          <label className="block mb-4 md:text-xl font-medium md:font-semibold">
            New password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-3 px-5 border rounded-lg text-lg"
              placeholder="Password"
              {...register("newPassword", {
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
          {errors.newPassword && (
            <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-4 md:text-xl font-medium md:font-semibold">
            Confirm password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-3 px-5 border rounded-lg text-lg"
              placeholder="Password"
              {...register("confirmPassword", {
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
          {errors.newPassword && (
            <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-accent text-foreground md:px-6 px-4 md:py-2.5 py-2 rounded-lg font-medium flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-lg shadow-primary/20 whitespace-nowrap w-full justify-center text-lg"
        >
          Login Now
        </button>
      </form>
    </div>
  );
};

export default SetNewPasswordDialog;
