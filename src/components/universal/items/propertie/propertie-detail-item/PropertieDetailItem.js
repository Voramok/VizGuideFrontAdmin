import styles from './PropertieDetailItem.module.css'

const PropertieDetailItem = ({ propertie }) => {

  if (propertie.description.toLowerCase().includes("deprecated")) {
    return (
      <tr className={styles.fontcolor}>
        <td>
          <div className={styles.oneline}><b>{propertie.name}</b> as {propertie.returnType}</div>
          {propertie.isReadonly === 'true' ? (
            <div className={styles.oneline}>&nbsp;[read-only]</div>
          ) : (
            <div className={styles.oneline}></div>
          )}
        </td>
        <td>
          {propertie.description}
        </td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>
          <div className={styles.oneline}><b>{propertie.name}</b> as {propertie.returnType}</div>
          {propertie.isReadonly === 'true' ? (
            <div className={styles.oneline}>&nbsp;[read-only]</div>
          ) : (
            <div className={styles.oneline}></div>
          )}
        </td>
        <td>
          {propertie.description}
        </td>
      </tr>
    )
  }
}

export default PropertieDetailItem;



