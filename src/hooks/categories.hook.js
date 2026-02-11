import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../configs/axios.config";

export const useGetCategories = (page = 1) => {
  return useQuery({
    queryKey: ["categories", page],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/category", {
        params: {
          page,
        },
      });
      return data.data || {};
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
