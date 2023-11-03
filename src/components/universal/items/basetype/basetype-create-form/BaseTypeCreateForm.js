import styles from './BaseTypeCreateForm.module.css'
import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorBaseTypeCreateMessage';
import ButtonStd from '../../../../ui/ButtonStd';
import InputStd from '../../../../ui/InputStd';
import TextAreaStd from '../../../../ui/TextAreaStd';
import { useTranslation } from "react-i18next";
import TableNoBody from '../../../../ui/TableNoBody';
import { useCreateBaseType } from '../../../../../custom-hooks/basetype-hooks/useCreateBaseType';

const BaseTypeCreateForm = () => {
  const { t, i18n } = useTranslation();

  const { register, reset, handleSubmit, setValue,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const trimName = (e) => {
    setValue('name', e.target.value.trim())
  }

  const trimDescription = (e) => {
    setValue('description', e.target.value.trim())
  }

  const { createBaseType } = useCreateBaseType(reset)

  return (
    <form onSubmit={handleSubmit(createBaseType)} className={styles.formbt}>
      <h5>
        <b>{t("addnewbasetype")}</b>
      </h5>
      <TableNoBody content={
        <tbody>
          <tr>
            <td>
              <p>{t("name")}</p>
              <InputStd placeholder={t("enter") + " " + t("name")} other={{ ...register('name', { onChange: (e) => { trimName(e) }, required: true, maxLength: 50 }) }} />
              <ErrorMessage error={errors?.name?.message} />
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

export default BaseTypeCreateForm;
