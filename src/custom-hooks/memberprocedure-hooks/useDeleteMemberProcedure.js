import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MemberProcedureService } from '../../services/memberProcedure.service';

export const useDeleteMemberProcedure = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['deletepropertie'],
          (id) => MemberProcedureService.delete(id),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('deletepropertie')
               },
          }
     )

     const deleteMemberProcedure = data => {
          mutate(data)
     }

     return { deleteMemberProcedure }
}
