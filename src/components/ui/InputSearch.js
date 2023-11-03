import styles from './InputSearch.module.css'

const InputSearch = (props) => {
  return (
    <input onChange={props.onChange} className={styles.search} type="text" placeholder={props.placeholder} onKeyDown={props.onKeyDown} value={props.value} />
  )
}

export default InputSearch;

