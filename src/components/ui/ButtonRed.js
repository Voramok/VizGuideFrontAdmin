import styles from './ButtonRed.module.css'

const ButtonRed = (props) => {
    return (
        <button value={props.value} id={props.id} className={styles['buttonred']} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default ButtonRed;