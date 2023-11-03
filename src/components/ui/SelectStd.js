import styles from './SelectStd.module.css'

const SelectStd = (props) => {
  return (
    <span className={styles.select}>
      <select
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        id={props.id}
        {...props.other} >
        <option key="default" value="default" disabled>Choose option</option>
        {props.options.map(({ value, text }) => {
          return (
            <option key={value}
              value={value}
            >
              {text}
            </option>
          );
        })}
      </select>
    </span>
  )
}

export default SelectStd;
