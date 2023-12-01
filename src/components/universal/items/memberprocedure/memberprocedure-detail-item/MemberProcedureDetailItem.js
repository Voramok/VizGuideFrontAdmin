import styles from './MemberProcedureDetailItem.module.css'
import { useTranslation } from "react-i18next";


const MemberProcedureDetailItem = ({ memberProcedure }) => {
  const { t, i18n } = useTranslation();

  if (memberProcedure.description.toLowerCase().includes("deprecated")) {
    return (
      <tr className={styles.fontcolor}>
        <td>
          <div className={styles.oneline}>{memberProcedure.isFunction} <b>{memberProcedure.name}</b>({memberProcedure.signature})</div>
          {memberProcedure.isFunction === 'Function' ?
            (
              <div className={styles.oneline}>&nbsp;as {memberProcedure.returnType}</div>
            ) : (
              <div className={styles.oneline}></div>
            )}
        </td>
        <td>
          {memberProcedure.description}
        </td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>
          <div className={styles.oneline}>{memberProcedure.isFunction} <b>{memberProcedure.name}</b>({memberProcedure.signature})</div>
          {memberProcedure.isFunction === 'Function' ?
            (
              <div className={styles.oneline}>&nbsp;as {memberProcedure.returnType}</div>
            ) : (
              <div className={styles.oneline}></div>
            )}
        </td>
        <td>
          {memberProcedure.description}
        </td>
      </tr>
    )
  }

}

export default MemberProcedureDetailItem;



