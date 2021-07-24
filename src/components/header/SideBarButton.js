import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default () => {

  const toggleSideBar = event => {
    const sidebar = document.getElementById("sidebar")
    if (sidebar.style.width === '250px') {
      sidebar.style.width = '0px'
      document.body.style.marginLeft = '0px'
    } else {
      sidebar.style.width = '250px'
      document.body.style.marginLeft = '-250px'
    }
  }

  return (
    <div className={styles.sidebar}>
      <button onClick={toggleSideBar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  )
}