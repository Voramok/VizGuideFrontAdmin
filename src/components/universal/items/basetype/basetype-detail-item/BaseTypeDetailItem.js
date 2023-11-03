import { useTranslation } from "react-i18next";
import styles from './BaseTypeDetailItem.module.css'

const BaseTypeDetailItem = ({ basetype }) => {
  const { t, i18n } = useTranslation();

  if (basetype.description.toLowerCase().includes("deprecated")) {
    return (
      <div>
        <h3 className={styles.fontcolor}>
          <b>{basetype.name}</b>
        </h3>
        <h5>
          <b>{t("description")}</b>
        </h5>
        <p className={styles.fontcolor}> {basetype.description}</p>
      </div>
    )
  } else {
    return (
      <div>
        <h3>
          <b>{basetype.name}</b>
        </h3>
        <h5>
          <b>{t("description")}</b>
        </h5>
        <p> {basetype.description}</p>
      </div>
    )
  }
}

export default BaseTypeDetailItem;
