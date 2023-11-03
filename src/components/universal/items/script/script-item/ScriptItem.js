import styles from './ScriptItem.module.css'
import { useTranslation } from "react-i18next";
import ButtonStd from '../../../../ui/ButtonStd';
import AceEditor from "react-ace";
import { Link } from 'react-router-dom';
import { EditModeStoreContext } from "../../../../Router";
import { observer } from "mobx-react-lite";
import ButtonRed from '../../../../ui/ButtonRed';
import "ace-builds/src-noconflict/mode-vbscript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useContext, useState } from 'react';
import TableStd from '../../../../ui/TableStd';
import { useDeleteScript } from '../../../../../custom-hooks/script-hooks/useDeleteScript';
import Highlighter from "react-highlight-words";
import { useFindChunksAtBeginningOfWords } from '../../../../../custom-hooks/useFindChunksAtBeginningOfWords';

const ScriptItem = ({ script, searchInput, searchFilter }) => {
  const { t, i18n } = useTranslation();
  const editModeStore = useContext(EditModeStoreContext);
  const [hideState, setHideState] = useState(true)

  const buttonHideHandler = () => {
    setHideState(current => !current)
  }

  const onDeleteScript = () => {
    if (script.id) {
      deleteScript(script.id);
    }
  };

  const { deleteScript } = useDeleteScript()

  return (
    <div >
      <div className={styles.divborder}>
        <div className={styles.maxwidth}>
          <b>
            {searchFilter === "byname" ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchInput]}
                autoEscape={true}
                textToHighlight={script.name}
                findChunks={useFindChunksAtBeginningOfWords}
              />) : (
              script.name
            )}
          </b>
        </div>
        <h4></h4>
        <div className={styles.maxwidth}>
        {searchFilter === "bydescription" ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchInput]}
                autoEscape={true}
                textToHighlight={script.description}
              />) : (
              script.description
            )}
        </div>
        {hideState === true ? (
          <div>
            <ButtonStd text={t("showcode")} onClick={buttonHideHandler} />
          </div>
        ) : (
          <div>
            <ButtonRed text={t("hidecode")} onClick={buttonHideHandler} />
          </div>
        )}
        {hideState === true ? (
          <></>
        ) : (
          <div>
            <h4></h4>
            <AceEditor
              mode="vbscript"
              theme="github"
              value={script.code}
              name="UNIQUE_ID_OF_DIV"
              minLines={1}
              maxLines={25}
              showGutter={false}
              readOnly={true}
              width='700px'
              editorProps={{ $blockScrolling: true }}
            />
          </div>
        )}

        {editModeStore.currentEditModeState && (
          <TableStd content={
            <tr>
              <td>
                <Link to={'/scripts/update/' + script.id}>
                  <ButtonStd text={t("edit")} />
                </Link>
              </td>
              <td>
                <ButtonRed onClick={onDeleteScript} text={t("delete")} />
              </td>
            </tr>
          } />
        )}
      </div>
      <h4></h4>
    </div>
  )
}

export default observer(ScriptItem);