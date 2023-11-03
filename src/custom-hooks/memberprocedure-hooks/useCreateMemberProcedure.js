import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MemberProcedureService } from '../../services/memberProcedure.service';

export const useCreateMemberProcedure = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['creatememberprocedure'],
          (data) => MemberProcedureService.create(data),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('creatememberprocedure')
               },
          }
     )

     const createMemberProcedure = data => {
          mutate(data)
     }

     return { createMemberProcedure}
}
