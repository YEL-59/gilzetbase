import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "@/configs/axios.config";

export const useGetMagazineCategories = () => {
    return useQuery({
        queryKey: ["magazine-categories"],
        queryFn: async () => {
            const res = await axiosPublic.get("/magazine-category");
            return res.data;
        },
    });
};

export const useGetMagazinesByCategory = (categoryId) => {
    return useQuery({
        queryKey: ["magazines", categoryId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/magazines?category_id=${categoryId}`);
            return res.data;
        },
        enabled: !!categoryId,
    });
};

export const useGetMagazineDetails = (magazineId) => {
    return useQuery({
        queryKey: ["magazine", magazineId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/magazines/${magazineId}`);
            return res.data;
        },
        enabled: !!magazineId,
    });
};
