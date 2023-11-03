import styles from './TableStd.module.css'

const TableNoBody = ({ content }) => {
    return (
        <table className={styles.tablestd}>
            {content}
        </table>
    )
}

export default TableNoBody;