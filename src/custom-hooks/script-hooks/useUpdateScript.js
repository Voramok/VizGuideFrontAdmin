import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ScriptService } from '../../services/script.service';

export const useUpdateScript = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['updatescript'],
          (data) => ScriptService.update(data),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('updatescript')
               },
          }
     )

     const updateScript = data => {
          mutate(data)
     }

     return { updateScript }
}
