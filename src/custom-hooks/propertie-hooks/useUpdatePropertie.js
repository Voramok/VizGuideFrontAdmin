import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PropertieService } from '../../services/propertie.service';

export const useUpdatePropertie = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['updatepropertie'],
          (data) => PropertieService.update(data),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('updatepropertie')
               },
          }
     )

     const updatePropertie = data => {
          mutate(data)
     }

     return { updatePropertie }
}
