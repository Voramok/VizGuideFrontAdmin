import styles from './MemberProcedureItem.module.css'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import ButtonStd from '../../../../ui/ButtonStd';
import { useEffect, useState } from 'react';
import Highlighter from "react-highlight-words";
import { useFindChunksAtBeginningOfWords } from '../../../../../custom-hooks/useFindChunksAtBeginningOfWords';

const MemberProcedureItem = ({ memberProcedure, data, searchInput, searchFilter }) => {
  const { t, i18n } = useTranslation();
  const [currData, setCurrData] = useState([])

  useEffect(() => {
    setCurrData([])
    filterData(memberProcedure.baseTypeId, data)
  }, [])

  const filterData = (id, data) => {
    data.filter(b => b.id == id).map(filteredData => (
      setCurrData(filteredData)
    ))
  }

  if (memberProcedure.description.toLowerCase().includes("deprecated")) {
    return (
      <tr>
        <td className={styles.fontcolor}>
          <div className={styles.oneline}>{memberProcedure.isFunction} <b>
            {searchFilter === "byname" ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchInput]}
                autoEscape={true}
                textToHighlight={memberProcedure.name}
                findChunks={useFindChunksAtBeginningOfWords}
              />) : (
              memberProcedure.name
            )}
          </b>({memberProcedure.signature})</div>
          {memberProcedure.isFunction === 'Function' ?
            (
              <div className={styles.oneline}>&nbsp;as {memberProcedure.returnType}</div>
            ) : (
              <div className={styles.oneline}></div>
            )}
        </td>
        <td className={styles.fontcolor}>
          {searchFilter === "bydescription" ? (
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[searchInput]}
              autoEscape={true}
              textToHighlight={memberProcedure.description}
            />) : (
            memberProcedure.description
          )}
        </td>
        <td>
          <Link to={'/basetypes/detailed/' + memberProcedure.baseTypeId}>
            <ButtonStd text={t("to") + " " + currData.name} />
          </Link>
        </td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>
          <div className={styles.oneline}>{memberProcedure.isFunction} <b>
            {searchFilter === "byname" ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchInput]}
                autoEscape={true}
                textToHighlight={memberProcedure.name}
                findChunks={useFindChunksAtBeginningOfWords}
              />) : (
              memberProcedure.name
            )}
          </b>({memberProcedure.signature})</div>
          {memberProcedure.isFunction === 'Function' ?
            (
              <div className={styles.oneline}>&nbsp;as {memberProcedure.returnType}</div>
            ) : (
              <div className={styles.oneline}></div>
            )}
        </td>
        <td>
          {searchFilter === "bydescription" ? (
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[searchInput]}
              autoEscape={true}
              textToHighlight={memberProcedure.description}
            />) : (
            memberProcedure.description
          )}
        </td>
        <td>
          <Link to={'/basetypes/detailed/' + memberProcedure.baseTypeId}>
            <ButtonStd text={t("to") + " " + currData.name} />
          </Link>
        </td>
      </tr>
    )
  }
}

export default MemberProcedureItem;
