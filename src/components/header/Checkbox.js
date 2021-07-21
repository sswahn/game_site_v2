import styles from './header.module.css'

export default ({ label, toggleClearButton }) => {
  
  const checked = event => {
    const element = event.currentTarget.firstChild
    if (element.style.background === 'gray' || element.style.background === '') {
      element.style.background = 'white'
    } else {
      element.style.background = 'gray'
    }
    toggleClearButton()
  }

  return (
    <div className={styles.checkbox} onClick={checked}>
      <span></span>
      <span>{label}</span>
    </div>
  )
}