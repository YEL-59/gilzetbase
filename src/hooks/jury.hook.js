import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosPrivate } from "@/configs/axios.config";
import toast from "react-hot-toast";

// Get all submissions available for jury evaluation
export const useGetScores = (page = 1) => {
    return useQuery({
        queryKey: ["jury-scores", page],
        queryFn: async () => {
            const res = await axiosPrivate.get(`/vote-jury?page=${page}`);
            return res.data;
        },
    });
};

// Get contest archive
export const useGetContestArchive = (filters = {}) => {
    const { year, month, category_id } = filters;
    return useQuery({
        queryKey: ["contest-archive", year, month, category_id],
        queryFn: async () => {
            let url = "/contest-archive";
            const params = new URLSearchParams();
            if (year) params.append("year", year);
            if (month) params.append("month", month);
            if (category_id) params.append("category_id", category_id);

            if (params.toString()) {
                url += `?${params.toString()}`;
            }

            const res = await axiosPrivate.get(url);
            return res.data;
        },
    });
};

// Get Categories
export const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/category");
            return res.data;
        },
    });
};
// Get contest archive details
export const useGetContestArchiveDetails = (id) => {
    return useQuery({
        queryKey: ["contest-archive-details", id],
        queryFn: async () => {
            if (!id) return null;
            const res = await axiosPrivate.get(`/contest-archive/${id}`);
            return res.data;
        },
        enabled: !!id,
    });
};
export const useGetScoreDetails = (competition_id) => {
    return useQuery({
        queryKey: ["jury-score-details", competition_id],
        queryFn: async () => {
            if (!competition_id) return null;
            const res = await axiosPrivate.get(`/vote-jury/${competition_id}`);
            return res.data;
        },
        enabled: !!competition_id,
    });
};

// Submit or Update a score
export const useUpdateScore = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ competition_id, score }) => {
            const res = await axiosPrivate.post("/scores", { competition_id, score });
            return res.data;
        },
        onSuccess: (res) => {
            if (res.status) {
                toast.success(res.message || "Score submitted successfully");
                queryClient.invalidateQueries({ queryKey: ["jury-scores"] });
                queryClient.invalidateQueries({ queryKey: ["global-standing"] });
            } else {
                toast.error(res.message || "Failed to submit score");
            }
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Something went wrong while scoring");
        },
    });
};

// Delete/Reset a score
export const useDeleteScore = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id) => {
            const res = await axiosPrivate.delete(`/scores/${id}`);
            return res.data;
        },
        onSuccess: (res) => {
            if (res.status) {
                toast.success(res.message || "Score cleared successfully");
                queryClient.invalidateQueries({ queryKey: ["jury-scores"] });
                queryClient.invalidateQueries({ queryKey: ["global-standing"] });
            } else {
                toast.error(res.message || "Failed to clear score");
            }
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Something went wrong");
        },
    });
};

// Get Global Standing (Top 10)
export const useGetGlobalStanding = () => {
    return useQuery({
        queryKey: ["global-standing"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/global-standing-score");
            return res.data;
        },
    });
};
