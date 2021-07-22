import styles from './header.module.css'

export default () => {

  const search = event => {
    event.preventDefault()
    //search stuff
  }

  return (
    <form className={styles.form} onSubmit={search}>
      <input type="search" placeholder="Search" />
      <button type="submit">
        {/* search icon */}
      </button>
    </form>
  )
}