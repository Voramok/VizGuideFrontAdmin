import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PropertieService } from '../../services/propertie.service';

export const useDeletePropertie = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['deletepropertie'],
          (id) => PropertieService.delete(id),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('deletepropertie')
               },
          }
     )

     const deletePropertie = data => {
          mutate(data)
     }

     return { deletePropertie }
}
