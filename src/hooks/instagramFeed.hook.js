import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "@/configs/axios.config";

export const useGetInstagramFeed = () => {
    return useQuery({
        queryKey: ["instagram-feed"],
        queryFn: async () => {
            const res = await axiosPublic.get("/instagram-feed");
            return res.data;
        },
    });
};
