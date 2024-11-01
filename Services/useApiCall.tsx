import { useQuery } from "@tanstack/react-query";
import ApiQueries from "./page";

  export const useGetAllBreed = () => {
    return useQuery<unknown[], Error>({
        queryKey: ['getAllBreeds'],
        queryFn: () => ApiQueries.getAllBreeds(),
        staleTime: 1000 * 60 * 10,  
    });
};

