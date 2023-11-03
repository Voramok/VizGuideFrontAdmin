import { useForm } from 'react-hook-form'
import InputStd from '../../../../ui/InputStd';
import TextAreaStd from '../../../../ui/TextAreaStd';
import { useTranslation } from "react-i18next";
import React from 'react';
import ButtonStd from "../../../../ui/ButtonStd";
import AceEditor from "react-ace";
import { useUpdateScript } from '../../../../../custom-hooks/script-hooks/useUpdateScript';

import "ace-builds/src-noconflict/mode-vbscript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import TableNoBody from '../../../../ui/TableNoBody';

const ScriptUpdateForm = ({ data }) => {
  const { t, i18n } = useTranslation();

  const { register, handleSubmit, setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      id: data.id,
      name: data.name,
      code: data.code,
      description: data.description,
    },
    mode: 'onChange'
  })

  const { updateScript } = useUpdateScript()

  function onChange(newValue) {
    setValue('code', newValue)
  }

  const trimName = (e) => {
    setValue('name', e.target.value.trim())
  }

  const trimDescription = (e) => {
    setValue('description', e.target.value.trim())
  }

  return (
    <form onSubmit={handleSubmit(updateScript)}>
      <h5>
        <b> {t("updatescript")}</b>
      </h5>
      <TableNoBody content={
        <tbody>
          <tr>
            <td>
              <input hidden {...data.id} {...register('id', { required: true })} />
              <p>{t("name")}</p>
              <InputStd placeholder={t("enter") + " " + t("name")} other={{ ...register('name', { onChange: (e) => { trimName(e) }, required: true, maxLength: 200 }) }} />
            </td>
          </tr>
          <tr>
            <td>
              <p>{t("description") + "(" + t("maybeempty") + ")"}</p>
              <TextAreaStd rows="5" cols="40" placeholder={t("enter") + " " + t("description")} other={{ ...register('description', { onChange: (e) => { trimDescription(e) } }) }} />
            </td>
          </tr>
          <tr>
            <td>
              <AceEditor
                mode="vbscript"
                theme="github"
                onChange={onChange}
                value={data.code}
                name="UNIQUE_ID_OF_DIV"
                minLines={5}
                maxLines={25}
                showGutter={false}
                editorProps={{ $blockScrolling: true }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <ButtonStd text={t("update")} />
            </td>
          </tr>
        </tbody>
      } />
    </form>
  )
}

export default ScriptUpdateForm;
