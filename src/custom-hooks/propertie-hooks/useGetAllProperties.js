import { useQuery } from "@tanstack/react-query";
import { PropertieService } from "../../services/propertie.service";

export const useGetAllProperties = () => {
    return useQuery(['getallproperties'], () => PropertieService.getAll(),
        {
            staleTime: 1000000,
            keepPreviousData: false,
            refetchOnWindowFocus: false,
        })
}