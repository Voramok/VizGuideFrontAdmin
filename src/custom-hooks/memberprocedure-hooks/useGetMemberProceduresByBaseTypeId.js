import { useQuery } from "@tanstack/react-query";
import { MemberProcedureService } from "../../services/memberProcedure.service";

export const useGetMemberProceduresByBaseTypeId = (id) => {
    return useQuery(['getmemberproceduresbybasetypeid', id],
		() => MemberProcedureService.getManyByBaseTypeId(id),
		{
			keepPreviousData: false,
			refetchOnWindowFocus: false
		},
	);
}