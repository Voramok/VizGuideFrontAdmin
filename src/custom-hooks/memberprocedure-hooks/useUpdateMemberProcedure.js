import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MemberProcedureService } from '../../services/memberProcedure.service';

export const useUpdateMemberProcedure = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['creatememberprocedure'],
          (data) => MemberProcedureService.update(data),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('creatememberprocedure')
               },
          }
     )

     const updateMemberProcedure = data => {
          mutate(data)
     }

     return { updateMemberProcedure}
}
