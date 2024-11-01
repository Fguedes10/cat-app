import { useQuery } from "@tanstack/react-query";
import ApiQueries from "./page";

interface Cat {
  id: string;
  name: string;
  intelligence: number;
  origin: string;
}
export const useGetAllBreed = () => {
  return useQuery<Cat[], Error>({
    queryKey: ["getAllBreeds"],
    queryFn: () => ApiQueries.getAllBreeds(),
    staleTime: 1000 * 60 * 10,
  });
};
