import { useQuery } from "@tanstack/react-query";
import { BaseTypeService } from "../../services/baseType.service";

export const useGetAllBaseTypes = () => {
    return useQuery(['getallbasetypes'], () => BaseTypeService.getAll(),
        {
            staleTime: 1000000,
            keepPreviousData: false,
            refetchOnWindowFocus: false,
        })
}