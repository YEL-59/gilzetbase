import { useVerifyEmail, useVerifyOTP, useResendOTP } from "@/hooks/auth.hook";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { DialogTitle } from "@/components/ui/dialog";
import LogoImg from "@/assets/Logo.png";
import { useRef, useState, useEffect } from "react";

const OTPVerificationDialog = ({ email, type, onSuccess, switchToSetNewPassword }) => {
    const { mutate: verifyEmail, isPending: isVerifyingEmail } = useVerifyEmail();
    const { mutate: verifyOTP, isPending: isVerifyingOTP } = useVerifyOTP();
    const { mutate: resendOTP, isPending: isResending } = useResendOTP();

    const {
        handleSubmit,
    } = useForm();

    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(60);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleChange = (index, value) => {
        if (value.length > 1) {
            value = value.slice(-1);
        }

        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, 4);

        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split("").forEach((char, index) => {
            if (index < 4) {
                newOtp[index] = char;
            }
        });
        setOtp(newOtp);

        const lastIndex = Math.min(pastedData.length, 3);
        inputRefs.current[lastIndex]?.focus();
    };

    const onSubmit = () => {
        const otpValue = otp.join("");
        if (otpValue.length < 4) {
            toast.error("Please enter the full 4-digit code");
            return;
        }

        const payload = { email, otp: otpValue };

        if (type === "email-verification") {
            verifyEmail(payload, {
                onSuccess: (res) => {
                    if (res.status) {
                        toast.success(res.message || "Email verified successfully!");
                        if (onSuccess) onSuccess();
                    }
                }
            });
        } else if (type === "forgot-password") {
            verifyOTP(payload, {
                onSuccess: (res) => {
                    if (res.status) {
                        toast.success(res.message || "OTP verified successfully!");
                        if (switchToSetNewPassword) switchToSetNewPassword();
                    }
                }
            });
        }
    };

    const handleResend = () => {
        if (timeLeft > 0) return;
        resendOTP({ email }, {
            onSuccess: (res) => {
                if (res.status) {
                    setTimeLeft(60);
                }
            }
        });
    };

    return (
        <div className="bg-[#FFFCF7] rounded-[32px] p-6 md:p-10 shadow-xl border border-[#E5E5E5]/50">
            <div className="flex flex-col items-center mb-8">
                <img
                    src={LogoImg}
                    alt="AVA ART VISION AWARDS"
                    className="h-24 w-auto mb-4 object-contain"
                />
                <DialogTitle className="text-[#2D2D2D] font-bold text-3xl md:text-4xl tracking-tight text-center">
                    OTP Verification
                </DialogTitle>
            </div>

            <p className="text-center mb-8 text-[#2D2D2D] text-base md:text-lg font-medium leading-relaxed">
                Enter the verification code we sent you on:
                <br />
                <span className="text-[#c89d3e] font-bold">{email}</span>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex gap-3 md:gap-4 justify-center">
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
                            className="w-14 h-14 md:w-16 md:h-16 text-center text-2xl md:text-3xl font-bold border-2 border-[#E5E5E5] bg-white rounded-2xl focus:border-[#c89d3e] focus:ring-4 focus:ring-[#c89d3e]/10 focus:outline-none transition-all text-[#2D2D2D]"
                        />
                    ))}
                </div>

                <div className="space-y-4">
                    <button
                        type="submit"
                        disabled={isVerifyingEmail || isVerifyingOTP}
                        className="w-full h-14 bg-[#c89d3e] hover:bg-[#b08b36] text-white font-bold text-lg rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-[#c89d3e]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isVerifyingEmail || isVerifyingOTP ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Verifying...</span>
                            </>
                        ) : (
                            "Continue"
                        )}
                    </button>

                    <div className="text-center">
                        <button 
                            type="button"
                            onClick={handleResend}
                            disabled={isResending || timeLeft > 0}
                            className="text-sm md:text-base font-medium text-[#2D2D2D] hover:text-[#c89d3e] transition-colors disabled:opacity-50 disabled:cursor-default"
                        >
                            Don't receive the code?{" "}
                            <span className="text-[#c89d3e] font-bold hover:underline underline-offset-4">
                                {isResending ? "Resending..." : timeLeft > 0 ? `Resend in ${timeLeft}s` : "Click to resend code"}
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OTPVerificationDialog;
