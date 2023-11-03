import { useForm } from 'react-hook-form'
import InputStd from '../../../../ui/InputStd';
import TextAreaStd from '../../../../ui/TextAreaStd';
import { useTranslation } from "react-i18next";
import React from 'react';
import ButtonStd from "../../../../ui/ButtonStd";
import AceEditor from "react-ace";
import { useCreateScript } from '../../../../../custom-hooks/script-hooks/useCreateScript';

import "ace-builds/src-noconflict/mode-vbscript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import TableNoBody from '../../../../ui/TableNoBody';

const ScriptCreateForm = () => {
  const { t, i18n } = useTranslation();

  const { register, handleSubmit, setValue,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const { createScript } = useCreateScript()

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
    <form onSubmit={handleSubmit(createScript)}>
      <h5>
        <b>{t("addnewscript")}</b>
      </h5>
      <TableNoBody content={
        <tbody>
          <tr>
            <td>
              <p>{t("name")}</p>
              <InputStd placeholder={t("enter") + " " + t("name")} other={{ ...register('name', { onChange: (e) => { trimName(e) }, required: true, maxLength: 200 }) }} />
            </td>
          </tr>
          <tr>
            <td>
              <p>{t("description")  + "(" + t("maybeempty") + ")"}</p>
              <TextAreaStd rows="5" cols="40" placeholder={t("enter") + " " + t("description")} other={{ ...register('description', { onChange: (e) => { trimDescription(e) } }) }} />
            </td>
          </tr>
          <tr>
            <td>
              <AceEditor
                mode="vbscript"
                theme="github"
                onChange={onChange}
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
              <ButtonStd text={t("create")} />
            </td>
          </tr>
        </tbody>
      } />
    </form>
  )
}

export default ScriptCreateForm;
