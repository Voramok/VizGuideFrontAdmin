import { useForm } from 'react-hook-form'
import ButtonRed from '../../../../ui/ButtonRed';
import SelectStd from '../../../../ui/SelectStd';
import SelectReturnTypeId from '../../../../ui/SelectReturnTypeId';
import InputStd from '../../../../ui/InputStd';
import TextAreaStd from '../../../../ui/TextAreaStd';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import ButtonStd from "../../../../ui/ButtonStd";
import TableNoBody from '../../../../ui/TableNoBody';
import { useUpdatePropertie } from '../../../../../custom-hooks/propertie-hooks/useUpdatePropertie';
import { useDeletePropertie } from '../../../../../custom-hooks/propertie-hooks/useDeletePropertie';

const PropertieUpdateForm = ({ propertieData, baseTypeData }) => {
  const { t, i18n } = useTranslation();

  const [readonly] = useState([
    {
      value: "true",
      text: "true"
    },
    {
      value: "false",
      text: "false"
    }
  ]);

  const onDeleteBaseType = (e) => {
    e.preventDefault();
    if (propertieData.id) {
      deletePropertie(propertieData.id);
    }
  };

  const trimName = (e) => { 
    setValue('name', e.target.value.trim()) 
  } 

  const trimDescription = (e) => { 
    setValue('description', e.target.value.trim()) 
  } 


  const { register, handleSubmit, setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      basetypeid: propertieData.basetypeid,
      id: propertieData.id,
      name: propertieData.name,
      returntype: propertieData.returntype,
      isreadonly: propertieData.isreadonly,
      description: propertieData.description,
    },
    mode: 'onChange'
  })

  const { updatePropertie } = useUpdatePropertie()
  const { deletePropertie } = useDeletePropertie()

  return (
    <form id={propertieData.id} key={propertieData.id} onSubmit={handleSubmit(updatePropertie)}>
      <TableNoBody content={
        <tbody>
          <tr>
            <td hidden>
              <p>base type id</p>
              <input {...propertieData.basetypeid} {...register('basetypeid', { required: true })} />
            </td>
            <td hidden>
              <p>propertie id</p>
              <input {...propertieData.id} {...register('id', { required: true })} />
            </td>
            <td>
              <p>{t("name")}</p>
              <InputStd placeholder={t("enter") + " " + t("name")} other={{ ...register('name', {onChange: (e) => { trimName(e) }, required: true, maxLength: 50 }) }} />
            </td>
            <td>
              <p>{t("returntype")}</p>
              <SelectReturnTypeId options={baseTypeData} other={{ ...register('returntype', { required: true, maxLength: 50 }) }} />
            </td>
            <td>
              <p>{t("readonly")}</p>
              <SelectStd options={readonly} other={{ ...register('isreadonly', { required: true, maxLength: 6 }) }} />
            </td>
            <td>
              <p>{t("description")  + "(" + t("maybeempty") + ")"}</p>
              <TextAreaStd rows="5" cols="40" placeholder={t("enter") + " " + t("description")} other={{ ...register('description', {onChange: (e) => { trimDescription(e) } }) }} />
            </td>
            <td>
              <ButtonStd text={t("update")} />
            </td>
            <td>
              <ButtonRed text={t("delete")} onClick={onDeleteBaseType} />
            </td>
          </tr>
        </tbody>
      } />
    </form>
  )
}

export default PropertieUpdateForm;