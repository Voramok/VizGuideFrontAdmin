import styles from './SwitchStd.module.css'

const SwitchStd = (props) => {
    return (
        <label className={styles['toggle-switch']} >
            <input id={props.id} type="checkbox" onClick={props.onClick} defaultChecked={props.defaultChecked} onChange={props.onChange} />
            <span className={styles['switch']} />
        </label>
    )
}

export default SwitchStd;