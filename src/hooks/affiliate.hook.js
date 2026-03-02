import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "@/configs/axios.config";

export const useGetPromotionalBanners = () => {
    return useQuery({
        queryKey: ["affiliate-promotional-banners"],
        queryFn: async () => {
            const { data } = await axiosPrivate.get("/affiliate-promotional-banner");
            return data;
        },
    });
};

export const useGetSocialAssets = () => {
    return useQuery({
        queryKey: ["affiliate-social-assets"],
        queryFn: async () => {
            const { data } = await axiosPrivate.get("/affiliate-social-assets");
            return data;
        },
    });
};

export const useGetReferralLink = () => {
    return useQuery({
        queryKey: ["affiliate-referral"],
        queryFn: async () => {
            const { data } = await axiosPrivate.get("/affiliate/referral");
            return data;
        },
    });
};
