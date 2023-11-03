import styles from './TableStd.module.css'

const TableStd = ({content}) => {
    return (
        <table className={styles.tablestd}>
            <tbody>
               {content}
            </tbody>
        </table>
    )
}

export default TableStd;