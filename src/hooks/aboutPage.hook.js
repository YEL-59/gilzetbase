import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "@/configs/axios.config";

export const useGetAboutPage = (section) => {
  return useQuery({
    queryKey: ["about-page", section],
    queryFn: async () => {
      const res = await axiosPublic.get(`/about-page?section=${section}`);
      return res.data.data;
    },
  });
};
