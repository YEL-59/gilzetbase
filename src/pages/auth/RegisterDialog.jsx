import { useState } from "react";
import { ChevronDown, Eye, EyeOff } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { DialogTitle } from "@/components/ui/dialog";
import LogoImg from "@/assets/Logo.png";

const ROLES = [
  { label: "Visitor", value: "visitor" },
  { label: "Buyer", value: "buyer" },
  { label: "Seller", value: "seller" },
  { label: "Admin", value: "admin" },
];

const RegisterDialog = ({ switchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    alert("Register successful");
  };

  return (
    <div className="rounded-lg max-h-[90vh] overflow-y-auto custom-scroll pr-2 lg:p-4">
      <img
        src={LogoImg}
        alt="Logo"
        className="mx-auto md:w-50 w-40 md:h-30 h-auto"
        width={200}
        height={120}
      />
      <DialogTitle className="lg:text-[40px] md:text-2xl text-lg font-bold text-center mb-6">
        Register
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block mb-4 md:text-xl font-medium md:font-semibold">
            Select your Role
          </label>

          <Controller
            name="role"
            control={control}
            rules={{ required: "Role is required" }}
            defaultValue="visitor"
            render={({ field }) => (
              <div className="relative">
                <div
                  onClick={() =>
                    setOpenDropdown(openDropdown === "role" ? null : "role")
                  }
                  className="w-full px-4 py-3 bg-white border border-muted-foreground cursor-pointer rounded-lg flex justify-between items-center"
                >
                  <span>
                    {ROLES.find((r) => r.value === field.value)?.label}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      openDropdown === "role" ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openDropdown === "role" && (
                  <div className="absolute z-20 w-full mt-2 bg-foreground border rounded-lg shadow-lg">
                    {ROLES.map((role) => (
                      <div
                        key={role.value}
                        onClick={() => {
                          field.onChange(role.value);
                          setOpenDropdown(null);
                        }}
                        className={`px-4 py-3 cursor-pointer hover:bg-muted-foreground/10 ${
                          field.value === role.value
                            ? "bg-primary/10 text-primary"
                            : "text-background/80"
                        }`}
                      >
                        {role.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          />

          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        {/* First Name and Last Name */}
        <div className="md:flex gap-6">
          <div>
            <label className="block mb-4 md:text-xl font-medium md:font-semibold ">
              First Name
            </label>
            <input
              type="text"
              className="w-full py-3 px-5 border rounded-lg text-lg"
              placeholder="Enter your first name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="md:mt-0 mt-5">
            <label className="block mb-4 md:text-xl font-medium md:font-semibold ">
              Last Name
            </label>
            <input
              type="text"
              className="w-full py-3 px-5 border rounded-lg text-lg"
              placeholder="Enter your last name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-4 md:text-xl font-medium md:font-semibold ">
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
          <label className="block mb-4 md:text-xl font-medium md:font-semibold ">
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

        {/* Confirm Password */}
        <div>
          <label className="block mb-4 md:text-xl font-medium md:font-semibold ">
            Confirm your password
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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div>
          {/* Remember me checkbox */}
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-primary rounded"
              {...register("rememberMe")}
            />
            <span className="ml-2 text-sm cursor-pointer">
              I accept the terms and conditions in the creation of my LuxeB2B
              account.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#c89d3e] hover:bg-accent text-white hover:text-black md:px-6 px-4 md:py-2.5 py-2 rounded-lg font-medium flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-lg shadow-white/20 whitespace-nowrap w-full justify-center text-lg"
        >
          Register
        </button>
      </form>
      {/* Don't have an account? */}
      <div className="mt-4 text-center">
        <p className="text-lg">
          Already have an account?{" "}
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

export default RegisterDialog;
