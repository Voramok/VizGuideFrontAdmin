import { useQuery } from "@tanstack/react-query";
import { MemberProcedureService } from "../../services/memberProcedure.service";

export const useGetAllMemberProcedures = () => {
    return useQuery(['getallmemberprocedures'], () => MemberProcedureService.getAll(),
        {
            staleTime: 1000000,
            keepPreviousData: false,
            refetchOnWindowFocus: false,
        })
}