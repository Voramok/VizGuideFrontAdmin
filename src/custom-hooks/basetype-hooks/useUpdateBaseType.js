import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseTypeService } from '../../services/baseType.service';

export const useUpdateBaseType = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['updatebasetype'],
          (data) => BaseTypeService.update(data),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('updatebasetype')
               },
          }
     )

     const updateBaseType = data => {
          mutate(data)
     }

     return { updateBaseType }
}
