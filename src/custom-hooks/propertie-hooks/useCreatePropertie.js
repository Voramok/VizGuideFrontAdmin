import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PropertieService } from '../../services/propertie.service';

export const useCreatePropertie = () => {
     const queryClient = useQueryClient()

     const { mutate } = useMutation(['createpropertie'],
          (data) => PropertieService.create(data),
          {
               onSuccess: () => {
                    queryClient.invalidateQueries('createpropertie')
               },
          }
     )

     const createPropertie = data => {
          mutate(data)
     }

     return { createPropertie }
}
