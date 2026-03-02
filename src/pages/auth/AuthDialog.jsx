import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import OTPVerificationDialog from "./OTPVerificationDialog";
import SetNewPasswordDialog from "./SetNewPasswordDialog";

const AuthDialog = ({ children, initialMode = "login" }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");

  const handleOpenStatus = (status) => {
    setOpen(status);
    if (!status) {
      // Reset mode to initialMode when closing
      setTimeout(() => setMode(initialMode), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenStatus}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <button
            onClick={() => setMode("login")}
            className="bg-transparent border border-[#CAA844] px-6 py-2 rounded-full text-[#CAA844] text-base font-bold cursor-pointer hover:bg-[#CAA844] hover:text-white transition-all active:scale-95"
          >
            Login / Register
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg lg:max-w-xl p-0 border-none bg-transparent shadow-none overflow-hidden">
        {mode === "login" ? (
          <LoginDialog
            switchToRegister={() => setMode("register")}
            switchToForgot={() => setMode("forgot")}
            onClose={() => setOpen(false)}
          />
        ) : mode === "register" ? (
          <RegisterDialog
            switchToLogin={() => setMode("login")}
            switchOTPVerification={(email) => {
              setEmail(email);
              setMode("otp-email");
            }}
          />
        ) : mode === "forgot" ? (
          <ForgotPasswordDialog
            switchToLogin={() => setMode("login")}
            switchOTPVerification={(email) => {
              setEmail(email);
              setMode("otp-forgot");
            }}
          />
        ) : mode === "otp-email" ? (
          <OTPVerificationDialog
            email={email}
            type="email-verification"
            onSuccess={() => setMode("login")}
          />
        ) : mode === "otp-forgot" ? (
          <OTPVerificationDialog
            email={email}
            type="forgot-password"
            switchToSetNewPassword={() => setMode("setNewPassword")}
          />
        ) : (
          <SetNewPasswordDialog
            email={email}
            onSuccess={() => setMode("login")}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
