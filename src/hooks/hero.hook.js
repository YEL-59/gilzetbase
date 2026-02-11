import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "@/configs/axios.config";

export const useGetHero = (page) => {
  return useQuery({
    queryKey: ["hero", page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/hero?page=${page}`);
      return res.data.data;
    },
  });
};
