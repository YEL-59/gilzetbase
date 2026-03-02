import { useNavigate } from "react-router";
import { XCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentCancel = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-100">
                    <XCircle className="w-10 h-10 text-red-600" />
                </div>

                <h1 className="text-3xl font-serif text-gray-900 mb-3">Payment Cancelled</h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    The payment process was cancelled or interrupted. No charges were made to your account.
                </p>

                <div className="space-y-3">
                    <Button
                        onClick={() => navigate("/subscription")}
                        className="w-full bg-[#1a1a1a] hover:bg-black text-white py-6 rounded-xl font-bold flex items-center justify-center gap-2"
                    >
                        <RefreshCcw className="w-4 h-4" />
                        Try Again
                    </Button>

                    <Button
                        variant="ghost"
                        onClick={() => navigate("/dashboard")}
                        className="w-full text-gray-500 hover:text-gray-900"
                    >
                        Go to Dashboard
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;
