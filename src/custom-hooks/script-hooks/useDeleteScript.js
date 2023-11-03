import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ScriptService } from '../../services/script.service';

export const useDeleteScript = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['deletescript'],
          (id) => ScriptService.delete(id),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('deletescript')
               },
          }
     )

     const deleteScript= data => {
          mutate(data)
     }

     return { deleteScript }
}
