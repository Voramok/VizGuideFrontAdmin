import { useForm } from 'react-hook-form'
import SelectStd from '../../../../ui/SelectStd';
import SelectReturnTypeId from '../../../../ui/SelectReturnTypeId';
import InputStd from '../../../../ui/InputStd';
import TextAreaStd from '../../../../ui/TextAreaStd';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import ButtonStd from "../../../../ui/ButtonStd";
import TableNoBody from '../../../../ui/TableNoBody';
import { useCreatePropertie } from '../../../../../custom-hooks/propertie-hooks/useCreatePropertie';

const PropertieCreateForm = ({ currBaseTypeData, allBaseTypeData }) => {
  const { t, i18n } = useTranslation();

  const [readonly] = useState([
    {
      value: true,
      text: "true"
    },
    {
      value: false,
      text: "false"
    }
  ]);

  const { register, handleSubmit, setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      basetypeid: currBaseTypeData.id,
    },
    mode: 'onChange'
  })

  const trimName = (e) => {
    setValue('name', e.target.value.trim())
  }

  const trimDescription = (e) => {
    setValue('description', e.target.value.trim())
  }

  const { createPropertie } = useCreatePropertie()

  return (
    <form onSubmit={handleSubmit(createPropertie)}>
      <h5>
        <b>{t("addnewpropertie")}</b>
      </h5>
      <TableNoBody content={
        <tbody>
          <tr>
            <td>
              <input hidden {...currBaseTypeData.id} {...register('basetypeid', { required: true })} />
              <p>{t("name")}</p>
              <InputStd placeholder={t("enter") + " " + t("name")} other={{ ...register('name', { onChange: (e) => { trimName(e) }, required: true, maxLength: 50 }) }} />
            </td>
            <td>
              <p>{t("returntype")}</p>
              <SelectReturnTypeId defaultValue={"default"} options={allBaseTypeData} other={{ ...register('returntype', { required: true, maxLength: 50 }) }} />
            </td>
            <td>
              <p>{t("readonly")}</p>
              <SelectStd defaultValue={"default"} options={readonly} other={{ ...register('isreadonly', { required: true, maxLength: 6 }) }} />
            </td>
            <td>
              <p>{t("description") + "(" + t("maybeempty") + ")"}</p>
              <TextAreaStd rows="5" cols="40" placeholder={t("enter") + " " + t("description")} other={{ ...register('description', { onChange: (e) => { trimDescription(e) } }) }} />
            </td>
            <td>
              <ButtonStd text={t("create")} />
            </td>
          </tr>
        </tbody>
      } />
    </form>
  )
}

export default PropertieCreateForm;

