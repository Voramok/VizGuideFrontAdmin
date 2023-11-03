import styles from './PropertieItem.module.css'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import ButtonStd from '../../../../ui/ButtonStd';
import { useEffect, useState } from 'react';
import Highlighter from "react-highlight-words";
import { useFindChunksAtBeginningOfWords } from '../../../../../custom-hooks/useFindChunksAtBeginningOfWords';


const PropertieItem = ({ propertie, data, searchInput, searchFilter }) => {
  const { t, i18n } = useTranslation();
  const [currData, setCurrData] = useState([])

  useEffect(() => {
    setCurrData([])
    filterData(propertie.baseTypeId, data)
  }, [])

  const filterData = (id, data) => {
    data.filter(b => b.id == id).map(filteredData => (
      setCurrData(filteredData)
    ))
  }

  if (propertie.description.toLowerCase().includes("deprecated")) {
    return (
      <tr>
        <td className={styles.fontcolor}>
          <div className={styles.oneline}><b>
            {searchFilter === "byname" ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchInput]}
                autoEscape={true}
                textToHighlight={propertie.name}
                findChunks={useFindChunksAtBeginningOfWords}
              />) : (
              propertie.name
            )}
          </b> as {propertie.returnType}</div>
          {propertie.isReadonly === 'true' ? (
            <div className={styles.oneline}>&nbsp;[read-only]</div>
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
              textToHighlight={propertie.description}
            />) : (
            propertie.description
          )}
        </td>
        <td>
          <Link to={'/basetypes/detailed/' + propertie.baseTypeId}>
            <ButtonStd text={t("to") + " " + currData.name} />
          </Link>
        </td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>
          <div className={styles.oneline}><b>
            {searchFilter === "byname" ? (
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchInput]}
                autoEscape={true}
                textToHighlight={propertie.name}
                findChunks={useFindChunksAtBeginningOfWords}
              />) : (
              propertie.name
            )}
          </b> as {propertie.returnType}</div>
          {propertie.isReadonly === 'true' ? (
            <div className={styles.oneline}>&nbsp;[read-only]</div>
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
              textToHighlight={propertie.description}
            />) : (
            propertie.description
          )}
        </td>
        <td>
          <Link to={'/basetypes/detailed/' + propertie.baseTypeId}>
            <ButtonStd text={t("to") + " " + currData.name} />
          </Link>
        </td>
      </tr>
    )
  }
}

export default PropertieItem;
