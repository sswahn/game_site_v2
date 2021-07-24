import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default () => {

  const toggleSideBar = event => {
    const sidebar = document.getElementById('sidebar')
    sidebar.style.display === 'block'
      ? sidebar.style.display = 'none'
      : sidebar.style.display = 'block'
  }

  return (
    <div className={styles.sidebar}>
      <button onClick={toggleSideBar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  )
}