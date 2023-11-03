import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseTypeService } from '../../services/baseType.service';

export const useDeleteBaseType = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['deletebaseType'],
          (id) => BaseTypeService.delete(id),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('deletebaseType')
               },
          }
     )

     const deleteBaseType = data => {
          mutate(data)
     }

     return { deleteBaseType }
}
