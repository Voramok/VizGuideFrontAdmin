import { useForm } from 'react-hook-form'
import SelectStd from '../../../../ui/SelectStd';
import SelectReturnTypeId from '../../../../ui/SelectReturnTypeId';
import InputStd from '../../../../ui/InputStd';
import TextAreaStd from '../../../../ui/TextAreaStd';
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';
import ButtonStd from "../../../../ui/ButtonStd";
import ButtonRed from "../../../../ui/ButtonRed";
import TableNoBody from '../../../../ui/TableNoBody';
import { useUpdateMemberProcedure} from '../../../../../custom-hooks/memberprocedure-hooks/useUpdateMemberProcedure';
import { useDeleteMemberProcedure } from '../../../../../custom-hooks/memberprocedure-hooks/useDeleteMemberProcedure';

const MemberProcedureUpdateForm = ({ memberProcedureData, baseTypeData }) => {
  const { t, i18n } = useTranslation();

  const { register, handleSubmit, setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      basetypeid: memberProcedureData.basetypeid,
      id: memberProcedureData.id,
      name: memberProcedureData.name,
      returntype: memberProcedureData.returntype,
      isfunction: memberProcedureData.isfunction,
      signature: memberProcedureData.signature,
      description: memberProcedureData.description,
    },
    mode: 'onChange'
  })

  useEffect(() => {
    if (memberProcedureData.returntype === 'none') {
      setHideState(2)
    }
  }, []);

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

  const onDeleteBaseType = (e) => {
    e.preventDefault();
    if (memberProcedureData.id) {
      deleteMemberProcedure(memberProcedureData.id);
    }
  };

  const trimName = (e) => { 
    setValue('name', e.target.value.trim()) 
  } 

  const trimDescription = (e) => { 
    setValue('description', e.target.value.trim()) 
  } 

  const trimSignature = (e) => { 
    setValue('signature', e.target.value.trim()) 
  } 

  const { updateMemberProcedure } = useUpdateMemberProcedure()
  const { deleteMemberProcedure } = useDeleteMemberProcedure()

  return (
    <form onSubmit={handleSubmit(updateMemberProcedure)}>
      <TableNoBody content={
        <tbody>
          <tr>
            <td hidden>
              <p>base type id</p>
              <input {...memberProcedureData.basetypeid} {...register('basetypeid', { required: true })} />
            </td>
            <td hidden>
              <p>propertie id</p>
              <input {...memberProcedureData.id} {...register('id', { required: true })} />
            </td>
            <td>
              <p>{t("type")}</p>
              <SelectStd options={isFunction} other={{ ...register('isfunction', { onChange: (e) => { hideReturnType(e) }, required: true, maxLength: 8 }) }} />
            </td>
            <td>
              <p>{t("name")}</p>
              <InputStd placeholder={t("enter") + " " + t("name")} other={{ ...register('name', { onChange: (e) => { trimName(e) }, required: true, maxLength: 50 }) }} />
            </td>
            <td>
              <p>{t("signature") + "(" + t("maybeempty") + ")"}</p>
              <TextAreaStd rows="5" cols="40" placeholder={t("enter") + " " + t("signature")} other={{ ...register('signature', {onChange: (e) => { trimSignature(e) }, maxLength: 500 }) }} />
            </td>
            {hideState === 1 ? (
              <td>
                <p>{t("returntype")}</p>
                <SelectReturnTypeId options={baseTypeData} other={{ ...register('returntype', { required: true, maxLength: 50 }) }} />
              </td>
            ) : (
              <td hidden>
                <input {...''} {...register('returntype', { required: true })} />
              </td>
            )}
            <td>
              <p>{t("description") + "(" + t("maybeempty") + ")"}</p>
              <TextAreaStd rows="5" cols="40" placeholder={t("enter") + " " + t("description")} other={{ ...register('description',  {onChange: (e) => { trimDescription(e) }}) }} />
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

export default MemberProcedureUpdateForm;

