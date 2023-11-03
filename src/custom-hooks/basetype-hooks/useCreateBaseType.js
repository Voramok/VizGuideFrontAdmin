import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseTypeService } from '../../services/baseType.service';

export const useCreateBaseType = (reset) => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['createbaseType'],
          (data) => BaseTypeService.create(data),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('createbaseType')
                    reset()
               },
          }
     )

     const createBaseType = data => {
          mutate(data)
     }

     return { createBaseType }
}
