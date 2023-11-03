import styles from './TextAreaStd.module.css'

const TextAreaStd = (props) => {
    return (
        <textarea onKeyDown={props.onKeyDown} onChange={props.onChange} value={props.value} className={styles.textareastd}
            rows={props.rows} placeholder={props.placeholder} cols={props.cols} {...props.other}>
        </textarea>
    );
};

export default TextAreaStd;