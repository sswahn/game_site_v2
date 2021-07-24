import MobileMenu from './MobileMenu'
import styles from './sidebar.module.css'

export default () => {
  return (
    <nav id="sidebar" className={styles.sidebar}>
      {window.innerWidth <= 500 && <MobileMenu />}
      <div>
        {/* search filter checkboxes etc. */}
        list of filters and stuff,
        need a close button too (for mobile view)
      </div>
    </nav>
  )
}