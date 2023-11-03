import { useQuery } from "@tanstack/react-query";
import { BaseTypeService } from "../../services/baseType.service";

export const useGetBaseTypeById = (id) => {
    return useQuery(['getbasetypebyid', id],
        () => BaseTypeService.getById(id),
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false
        })
}