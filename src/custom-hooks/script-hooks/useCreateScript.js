import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ScriptService } from '../../services/script.service';

export const useCreateScript = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['createscript'],
          (data) => ScriptService.create(data),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('createscript')
               },
          }
     )

     const createScript = data => {
          mutate(data)
     }

     return { createScript }
}
