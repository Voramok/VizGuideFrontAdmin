import { useForm } from 'react-hook-form'
import SelectStd from '../../../../ui/SelectStd';
import SelectReturnTypeId from '../../../../ui/SelectReturnTypeId';
import InputStd from '../../../../ui/InputStd';
import TextAreaStd from '../../../../ui/TextAreaStd';
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import ButtonStd from "../../../../ui/ButtonStd";
import TableNoBody from '../../../../ui/TableNoBody';
import { useCreateMemberProcedure } from '../../../../../custom-hooks/memberprocedure-hooks/useCreateMemberProcedure';

const MemberProcedureCreateForm = ({ currBaseTypeData, allBaseTypeData }) => {
  const { t, i18n } = useTranslation();
  const [hideState, setHideState] = useState(1)

  const [isFunction] = useState([
    {
      value: "Function",
      text: "Function"
    },
    {
      value: "Sub",
      text: "Sub"
    }
  ]);

  const hideReturnType = (e) => {
    setHideState(e.target.options.selectedIndex)
    if (e.target.options.selectedIndex == 2) {
      setValue('returntype', 'none')
    } else {
      setValue('returntype', 'default')
    }
  }

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

  const trimSignature = (e) => {
    setValue('signature', e.target.value.trim())
  }

  const { createMemberProcedure } = useCreateMemberProcedure()

  return (
    <form onSubmit={handleSubmit(createMemberProcedure)}>
      <h5>
        <b>{t("addnewmemberprocedure")}</b>
      </h5>
      <TableNoBody content={
        <tbody>
          <tr>
            <td>
              <p>{t("isfunction")}</p>
              <SelectStd defaultValue={"default"} options={isFunction} other={{ ...register('isfunction', { onChange: (e) => { hideReturnType(e) }, required: true, maxLength: 8 }) }} />
            </td>
            <td>
              <input hidden {...currBaseTypeData.id} {...register('basetypeid', { required: true })} />
              <p>{t("name")}</p>
              <InputStd placeholder={t("enter") + " " + t("name")} other={{ ...register('name', { onChange: (e) => { trimName(e) }, required: true, maxLength: 50 }) }} />
            </td>
            <td>
              <p>{t("signature") + "(" + t("maybeempty") + ")"}</p>
              <TextAreaStd rows="5" cols="40" placeholder={t("enter") + " " + t("signature")} other={{ ...register('signature', { onChange: (e) => { trimSignature(e) }, maxLength: 500 }) }} />
            </td>
            {hideState === 1 ? (
              <td>
                <p>{t("returntype")}</p>
                <SelectReturnTypeId options={allBaseTypeData} defaultValue={"default"} other={{ ...register('returntype', { required: true, maxLength: 50 }) }} />
              </td>
            ) : (
              <td hidden>
                <input {...''} {...register('returntype', { required: true })} />
              </td>
            )}
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

export default MemberProcedureCreateForm;

