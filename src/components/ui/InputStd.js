import styles from './InputStd.module.css'

const InputStd = (props) => {
	return (
		<input onChange={props.onChange} value={props.value} placeholder={props.placeholder}
			onKeyDown={props.onKeyDown} className={styles.inputstd} {...props.other} />
	);
};

export default InputStd;