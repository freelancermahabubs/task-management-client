import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useTask = () => {
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/all-tasks`);
      return res.data;
    },
  });
  return [tasks, refetch, isLoading];
};

export default useTask;
