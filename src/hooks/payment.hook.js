import { useMutation } from "@tanstack/react-query";
import { axiosPrivate } from "@/configs/axios.config";
import toast from "react-hot-toast";

export const useCheckout = () => {
    return useMutation({
        mutationFn: async ({ planId, successUrl, cancelUrl }) => {
            const { data } = await axiosPrivate.post(
                `/checkout/${planId}?success_url=${encodeURIComponent(
                    successUrl
                )}&cancel_url=${encodeURIComponent(cancelUrl)}`,
                {}, // empty body
                { timeout: 30000 }
            );
            return data;
        },
        onSuccess: (res) => {
            if (res.status && res.data?.url) {
                // Redirect to Stripe Checkout
                window.location.href = res.data.url;
            } else {
                toast.error(res.message || "Failed to create checkout session.");
            }
        },
        onError: (error) => {
            toast.error(
                error.response?.data?.message || "Something went wrong with the payment."
            );
        },
    });
};
