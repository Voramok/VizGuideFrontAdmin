import styles from './SelectReturnTypeId.module.css'

const SelectReturnTypeId = (props) => {
  return (
    <span className={styles.select}>
      <select
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        {...props.other}>
        <option key="default" value="default" disabled>Choose option</option>
        {props.options.map(({ id, name }) => {
          return (
            <option key={id}
              value={name}
            >
              {name}
            </option>
          );
        })}
      </select>
    </span>
  )
}

export default SelectReturnTypeId;
