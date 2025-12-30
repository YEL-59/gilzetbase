import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import OTPVerificationDialog from "./OTPVerificationDialog";
import SetNewPasswordDialog from "./SetNewPasswordDialog";

const AuthDialog = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("login");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setMode("login")}
          className="bg-white px-4 py-2 rounded-md h-full! text-foreground! text-base xl:font-normal font-bold cursor-pointer "
        >
          Create a account
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg lg:max-w-xl bg-white text-black font-roboto">
        {mode === "login" ? (
          <LoginDialog
            switchToRegister={() => setMode("register")}
            switchToForgot={() => setMode("forgot")}
          />
        ) : mode === "register" ? (
          <RegisterDialog switchToLogin={() => setMode("login")} />
        ) : mode === "forgot" ? (
          <ForgotPasswordDialog
            switchToLogin={() => setMode("login")}
            switchOTPVerification={() => setMode("otp")}
          />
        ) : mode === "otp" ? (
          <OTPVerificationDialog
            switchToSetNewPassword={() => setMode("setNewPassword")}
          />
        ) : (
          <SetNewPasswordDialog />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
