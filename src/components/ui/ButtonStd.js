import styles from './ButtonStd.module.css'

const ButtonStd = (props) => {
    return (
        <button value={props.value} id={props.id} className={styles['buttonstd']} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default ButtonStd;