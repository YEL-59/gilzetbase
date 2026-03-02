import { useNavigate } from "react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-teal-100">
                    <CheckCircle2 className="w-10 h-10 text-teal-600" />
                </div>

                <h1 className="text-3xl font-serif text-gray-900 mb-3">Payment Successful!</h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Thank you for your subscription. Your account has been upgraded and you can now enjoy all your premium features.
                </p>

                <div className="space-y-3">
                    <Button
                        onClick={() => navigate("/dashboard")}
                        className="w-full bg-[#C4A24C] hover:bg-[#B39340] text-white py-6 rounded-xl font-bold flex items-center justify-center gap-2"
                    >
                        Go to Dashboard
                        <ArrowRight className="w-4 h-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        onClick={() => navigate("/")}
                        className="w-full text-gray-500 hover:text-gray-900"
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
