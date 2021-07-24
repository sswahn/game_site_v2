import styles from './footer.module.css'

export default () => {
  return (
    <footer className={styles.footer}>
      <div>&copy; {new Date().getFullYear()}</div>
      <div>
        <a href="">Terms of Service</a>
        <span>&middot;</span>
        <a href="">Privacy Policy</a>
        <span>&middot;</span>
        <a href="">Cookie Policy</a>
      </div>
    </footer>
  )
}