import { Link } from 'react-router-dom';
import { EditModeStoreContext } from "../../../../Router";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import ButtonStd from '../../../../ui/ButtonStd';
import ButtonRed from '../../../../ui/ButtonRed';
import { useDeleteBaseType } from '../../../../../custom-hooks/basetype-hooks/useDeleteBaseType';
import { useFindChunksAtBeginningOfWords } from '../../../../../custom-hooks/useFindChunksAtBeginningOfWords';
import { useTranslation } from "react-i18next";
import styles from './BaseTypeItem.module.css';
import Highlighter from "react-highlight-words";



const BaseTypeItem = ({ basetype, searchInput, searchFilter }) => {
  const editModeStore = useContext(EditModeStoreContext);
  const { t, i18n } = useTranslation();

  const onDeleteBaseType = () => {
    if (basetype.id) {
      deleteBaseType(basetype.id);
    }
  };

  const { deleteBaseType } = useDeleteBaseType()

  if (basetype.description.toLowerCase().includes("deprecated")) {
    return (
      <tr>
        <td>
          <b>
            <div className={styles.fontcolor}>
              {searchFilter === "byname" ? (
                <Highlighter
                  highlightClassName="YourHighlightClass"
                  searchWords={[searchInput]}
                  autoEscape={true}
                  textToHighlight={basetype.name}
                  findChunks={useFindChunksAtBeginningOfWords}
                />) : (
                basetype.name
              )}
            </div>
          </b>
        </td>
        <td>
          <div className={styles.fontcolor}>
            {searchFilter === "bydescription" ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchInput]}
                autoEscape={true}
                textToHighlight={basetype.description}
              />) : (
              basetype.description
            )}
          </div>
        </td>
        <td>
          <Link to={'/basetypes/detailed/' + basetype.id}>
            <ButtonStd text={t("more")} />
          </Link>
        </td>
        {editModeStore.currentEditModeState && (
          <td>
            <Link to={'/basetypes/update/' + basetype.id}>
              <ButtonStd text={t("edit")} />
            </Link>
          </td>
        )}
        {editModeStore.currentEditModeState && (
          <td>
            <ButtonRed onClick={onDeleteBaseType} text={t("delete")} />
          </td>
        )}
      </tr>
    )
  } else {
    return (
      <tr>
        <td>
          <b>
            {searchFilter === "byname" ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchInput]}
                autoEscape={true}
                textToHighlight={basetype.name}
                findChunks={useFindChunksAtBeginningOfWords}
              />) : (
              basetype.name
            )}
          </b>
        </td>
        <td>
          {searchFilter === "bydescription" ? (
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[searchInput]}
              autoEscape={true}
              textToHighlight={basetype.description}
            />) : (
            basetype.description
          )}
        </td>
        <td>
          <Link to={'/basetypes/detailed/' + basetype.id}>
            <ButtonStd text={t("more")} />
          </Link>
        </td>
        {editModeStore.currentEditModeState && (
          <td>
            <Link to={'/basetypes/update/' + basetype.id}>
              <ButtonStd text={t("edit")} />
            </Link>
          </td>
        )}
        {editModeStore.currentEditModeState && (
          <td>
            <ButtonRed onClick={onDeleteBaseType} text={t("delete")} />
          </td>
        )}
      </tr>
    )
  }
}

export default observer(BaseTypeItem);




