import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "@/configs/axios.config";
import toast from "react-hot-toast";

// Get Competitions hook (with pagination and search)
export const useGetCompetitions = (page = 1, perPage = 50, search = "") => {
    return useQuery({
        queryKey: ["competitions", page, perPage, search],
        queryFn: async () => {
            const params = { page, per_page: perPage };
            if (search) {
                params.search = search;
            }
            const { data } = await axiosPrivate.get("/competitions", { params });
            return data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

// Get Competition Details hook
export const useGetCompetitionDetails = (id) => {
    return useQuery({
        queryKey: ["competition-details", id],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/competitions/${id}`);
            return data;
        },
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });
};

// Submit Competition hook
export const useSubmitCompetition = () => {
    return useMutation({
        mutationFn: async (formData) => {
            // formData should be a FormData instance (for file uploads)
            const res = await axiosPrivate.post("/competitions", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                timeout: 30000, // 30s timeout for file uploads
            });
            return res.data;
        },
        onSuccess: (data) => {
            if (data.status) {
                toast.success(data.message || "Competition submitted successfully!");
            }
        },
        onError: (error) => {
            toast.error(
                error.response?.data?.message || "Failed to submit competition."
            );
        },
    });
};
