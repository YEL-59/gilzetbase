import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "@/configs/axios.config";

export const useGetWhyParticipates = () => {
    return useQuery({
        queryKey: ["why-participates"],
        queryFn: async () => {
            const res = await axiosPublic.get("/why-participates");
            return res.data;
        },
    });
};

export const useGetJuries = () => {
    return useQuery({
        queryKey: ["juries"],
        queryFn: async () => {
            const res = await axiosPublic.get("/juries");
            return res.data;
        },
    });
};

export const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axiosPublic.get("/category");
            return res.data;
        },
    });
};
