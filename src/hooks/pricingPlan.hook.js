import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../configs/axios.config";

export const useGetPricingPlans = () => {
  return useQuery({
    queryKey: ["pricing-plans"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/pricing-plan");
      return data.data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
