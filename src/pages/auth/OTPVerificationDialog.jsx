

import {  useForm } from "react-hook-form";
import { DialogTitle } from "@/components/ui/dialog";
import LogoImg from "@/assets/Logo.png";

import { useRef, useState, KeyboardEvent, ClipboardEvent } from "react";

const OTPVerificationDialog = ({switchToSetNewPassword}) => {
    const {
        handleSubmit,
    } = useForm();

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        // Only allow single digit
        if (value.length > 1) {
            value = value.slice(-1);
        }

        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Move to previous input on backspace if current is empty
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, 6);

        // Only paste if all characters are digits
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split("").forEach((char, index) => {
            if (index < 6) {
                newOtp[index] = char;
            }
        });
        setOtp(newOtp);

        // Focus last filled input
        const lastIndex = Math.min(pastedData.length, 5);
        inputRefs.current[lastIndex]?.focus();
    };

    const onSubmit = (data) => {
        const otpValue = otp.join("");
        console.log("OTP Verification Data:", { ...data, otp: otpValue });
        switchToSetNewPassword();
    };

    return (
        <div className="rounded-lg lg:p-4">
            <img src={LogoImg} alt="Logo" className="mx-auto md:w-50 w-40 md:h-30 h-auto" width={200} height={120} />
            <DialogTitle className="lg:text-[40px] md:text-2xl text-lg font-bold text-center mb-3">OTP Verification</DialogTitle>
            <p className="text-center mb-6 md:text-lg font-medium">Enter the verification code we send you on:
                Alberts******@gmail.com</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* OTP Input */}

                <div className="flex gap-2 justify-center mb-10">
                    {otp?.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                inputRefs.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            className="w-12 h-12 md:w-14 md:h-14 text-center text-xl md:text-2xl font-semibold border-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        />
                    ))}
                </div>

                <button
                    type="submit"
                    className="bg-primary hover:bg-accent text-foreground md:px-6 px-4 md:py-2.5 py-2 rounded-lg font-medium flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-lg shadow-primary/20 whitespace-nowrap w-full justify-center text-lg"
                >
                    Continue
                </button>
            </form>
            {/* Don't have an account? */}
            <div className="mt-4 text-center">
                <p className="text-lg">
                    Don’t receive the code?{" "}
                    <button className="text-primary hover:underline cursor-pointer active:scale-95 transition-transform">
                         Click to resend code
                    </button>
                </p>
            </div>
        </div>
    );
};

export default OTPVerificationDialog;