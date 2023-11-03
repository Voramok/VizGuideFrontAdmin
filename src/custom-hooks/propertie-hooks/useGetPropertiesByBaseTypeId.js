import { useQuery } from "@tanstack/react-query";
import { PropertieService } from "../../services/propertie.service";

export const useGetPropertiesByBaseTypeId = (id) => {
    return useQuery(['getpropertiesbybasetypeid', id],
		() => PropertieService.getManyByBaseTypeId(id),
		{
			keepPreviousData: false,
			refetchOnWindowFocus: false
		},
	);
}