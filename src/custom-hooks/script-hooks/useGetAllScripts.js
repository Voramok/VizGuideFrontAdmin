import { useQuery } from "@tanstack/react-query";
import { ScriptService } from "../../services/script.service";

export const useGetAllScripts = () => {
    return useQuery(['getallscripts'], () => ScriptService.getAll(),
        {
            staleTime: 1000000,
            keepPreviousData: false,
            refetchOnWindowFocus: false,
        })
}