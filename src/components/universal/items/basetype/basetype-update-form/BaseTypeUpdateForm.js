import { observer } from "mobx-react-lite";
import ButtonStd from '../../../../ui/ButtonStd';
import TextAreaStd from '../../../../ui/TextAreaStd';
import { useForm } from 'react-hook-form';
import styles from './BaseTypeUpdateForm.module.css'
import InputStd from '../../../../ui/InputStd';
import ErrorBaseTypeUpdateMessage from './ErrorBaseTypeUpdateMessage';
import React from 'react';
import { useTranslation } from "react-i18next";
import TableNoBody from '../../../../ui/TableNoBody';
import { useUpdateBaseType } from '../../../../../custom-hooks/basetype-hooks/useUpdateBaseType';

const BaseTypeUpdateForm = ({ data }) => {
  const { t, i18n } = useTranslation();

  const { register, handleSubmit, setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      id: data.id,
      name: data.name,
      description: data.description
    },
    mode: 'onChange'
  })

  const trimName = (e) => {
    setValue('name', e.target.value.trim())
  }

  const trimDescription = (e) => {
    setValue('description', e.target.value.trim())
  }

  const { updateBaseType } = useUpdateBaseType()

  return (
    <form onSubmit={handleSubmit(updateBaseType)} className={styles.formbt}>
      <h5>
        <b>{t("updatebasetype")}</b>
      </h5>
      <TableNoBody content={
        <tbody>
          <tr>
            <td>
              <input hidden value={data.id} {...register('id')} />
              <p>{t("name")}</p>
              <InputStd placeholder={t("enter") + " " + t("name")} other={{ ...register('name', { onChange: (e) => { trimName(e) }, required: true, maxLength: 50 }) }} />
              <ErrorBaseTypeUpdateMessage error={errors?.name?.message} />
            </td>
            <td>
              <p>{t("description") + "(" + t("maybeempty") + ")"}</p>
              <TextAreaStd rows="5" cols="40" placeholder={t("enter") + " " + t("description")} other={{ ...register('description', { onChange: (e) => { trimDescription(e) } }) }} />
            </td>
            <td>
              <ButtonStd text={t("update")} />
            </td>
          </tr>
        </tbody>
      } />
    </form>
  )
}

export default observer(BaseTypeUpdateForm);






