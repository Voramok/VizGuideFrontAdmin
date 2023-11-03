import { useQuery } from "@tanstack/react-query";
import { ScriptService } from "../../services/script.service";

export const useGetScriptById = (id) => {
    return useQuery(['getscriptbyid', id], () => ScriptService.getById(id),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false,
        })
}