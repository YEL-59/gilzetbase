import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "@/configs/axios.config";

export const useGetFAQ = (perPage = 5) => {
  return useQuery({
    queryKey: ["faq", perPage],
    queryFn: async () => {
      const res = await axiosPublic.get(`/faq?per_page=${perPage}`);
      return res.data.data;
    },
  });
};
